import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import {
  animateLoadSvgTrace,
  fetchLoadSvg,
  LOAD_SVG_ASPECT_CLASS,
  mountLoadSvg,
} from "@/lib/loadSvg";

const TRACE_DURATION_MS = 2800;
const HOLD_MS = 400;
const FADE_MS = 500;

type Phase = "loading" | "exiting" | "done";

interface LoadingScreenProps {
  children: ReactNode;
}

const delay = (ms: number, signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const timer = window.setTimeout(resolve, ms);
    signal.addEventListener(
      "abort",
      () => {
        window.clearTimeout(timer);
        reject(new DOMException("Aborted", "AbortError"));
      },
      { once: true },
    );
  });

export default function LoadingScreen({ children }: LoadingScreenProps) {
  const svgHostRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("loading");
  const [pageReady, setPageReady] = useState(
    () => document.readyState === "complete",
  );
  const [traceDone, setTraceDone] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") return;

    const onLoad = () => setPageReady(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useLayoutEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const finishTrace = () => {
      if (!signal.aborted) setTraceDone(true);
    };

    const run = async () => {
      const host = svgHostRef.current;
      if (!host) {
        finishTrace();
        return;
      }

      try {
        const markup = await fetchLoadSvg();
        if (signal.aborted) return;

        const svg = mountLoadSvg(host, markup);
        if (!svg) {
          finishTrace();
          return;
        }

        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("role", "presentation");

        if (!reducedMotion) {
          await animateLoadSvgTrace(svg, TRACE_DURATION_MS, signal);
          if (signal.aborted) return;
          await delay(HOLD_MS, signal);
          if (signal.aborted) return;
        }

        finishTrace();
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        finishTrace();
      }
    };

    run();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!pageReady || !traceDone || phase !== "loading") return;

    setPhase("exiting");
    const timer = window.setTimeout(() => setPhase("done"), FADE_MS);
    return () => window.clearTimeout(timer);
  }, [pageReady, traceDone, phase]);

  if (phase === "done") {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-out ${
          phase === "exiting" ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-hidden={phase === "exiting"}
        aria-live="polite"
        aria-label="Loading"
      >
        <div
          ref={svgHostRef}
          className={`${LOAD_SVG_ASPECT_CLASS} w-[min(72vw,28rem)] text-foreground`}
        />
      </div>
    </>
  );
}
