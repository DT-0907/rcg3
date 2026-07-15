export const LOAD_SVG_PATH = "/rcg-logo.svg";
export const LOAD_SVG_VIEWBOX = "0 0 600 582";
export const LOAD_SVG_ASPECT_CLASS = "aspect-[600/582]";

let cachedMarkup: string | null = null;
let pendingFetch: Promise<string> | null = null;
let templateSvg: SVGSVGElement | null = null;

export async function fetchLoadSvg(): Promise<string> {
  if (cachedMarkup) return cachedMarkup;
  if (pendingFetch) return pendingFetch;

  pendingFetch = fetch(LOAD_SVG_PATH)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load logo (${response.status})`);
      return response.text();
    })
    .then((markup) => {
      cachedMarkup = markup;
      return markup;
    })
    .finally(() => {
      pendingFetch = null;
    });

  return pendingFetch;
}

function parseLoadSvg(markup: string): SVGSVGElement | null {
  const doc = new DOMParser().parseFromString(markup, "image/svg+xml");
  const svg = doc.querySelector("svg");
  if (!svg) return null;

  svg.removeAttribute("width");
  svg.removeAttribute("height");
  svg.setAttribute("viewBox", LOAD_SVG_VIEWBOX);
  svg.classList.add("h-full", "w-full");

  svg.querySelectorAll("path").forEach((path) => {
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("fill", "none");
  });

  return svg;
}

function ensureTemplate(markup: string): SVGSVGElement | null {
  if (templateSvg) return templateSvg;

  const svg = parseLoadSvg(markup);
  if (!svg) return null;

  templateSvg = svg;
  return templateSvg;
}

export function mountLoadSvg(
  host: HTMLElement,
  markup: string,
): SVGSVGElement | null {
  const template = ensureTemplate(markup);
  if (!template) return null;

  const svg = template.cloneNode(true) as SVGSVGElement;
  host.replaceChildren(svg);
  return svg;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function animateLoadSvgTrace(
  svg: SVGSVGElement,
  durationMs: number,
  signal?: AbortSignal,
): Promise<void> {
  // Keep the freshly mounted SVG hidden until every path has its initial
  // dash offset. This prevents a one-frame flash of the completed crest.
  svg.style.visibility = "hidden";
  const entries = Array.from(svg.querySelectorAll("path"))
    .map((path) => {
      const length = path.getTotalLength();
      if (length <= 0) return null;

      path.style.fill = "none";
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      return { path, length };
    })
    .filter(
      (entry): entry is { path: SVGPathElement; length: number } =>
        entry !== null,
    );

  if (entries.length === 0) {
    svg.style.visibility = "visible";
    return Promise.resolve();
  }

  svg.style.visibility = "visible";

  return new Promise((resolve, reject) => {
    let rafId = 0;
    const start = performance.now();

    const cleanup = () => {
      signal?.removeEventListener("abort", onAbort);
    };

    const onAbort = () => {
      window.cancelAnimationFrame(rafId);
      cleanup();
      reject(new DOMException("Aborted", "AbortError"));
    };

    const frame = (now: number) => {
      if (signal?.aborted) {
        onAbort();
        return;
      }

      const progress = Math.min((now - start) / durationMs, 1);
      const hidden = 1 - easeOutCubic(progress);

      for (const { path, length } of entries) {
        path.style.strokeDashoffset = `${length * hidden}`;
      }

      if (progress < 1) {
        rafId = window.requestAnimationFrame(frame);
      } else {
        cleanup();
        resolve();
      }
    };

    signal?.addEventListener("abort", onAbort, { once: true });
    rafId = window.requestAnimationFrame(frame);
  });
}
