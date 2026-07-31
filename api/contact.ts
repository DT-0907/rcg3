/**
 * Contact form endpoint.
 *
 * Delivers the inquiry to the club inbox through Resend's REST API. Called
 * with fetch rather than the `resend` SDK so this adds no dependency to the
 * project and runs on the edge runtime.
 *
 * Environment variables (set in the Vercel project, never committed):
 *   RESEND_API_KEY  required. Without it the endpoint returns 503 and the
 *                   browser falls back to opening the visitor's mail client.
 *   CONTACT_TO      optional. Recipient. Defaults to the club address.
 *   CONTACT_FROM    optional. Must be an address on a domain verified with
 *                   Resend. Until calrcg.org is verified, Resend's shared
 *                   onboarding sender is the only one that will deliver.
 */

export const config = { runtime: "edge" };

const TO = "contact@calrcg.org";
const FROM = "RCG Website <onboarding@resend.dev>";

type Payload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  organization?: unknown;
  message?: unknown;
  /** Honeypot. Real people never see this field, so anything in it is a bot. */
  website?: unknown;
};

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

/** Escape before interpolating visitor input into the HTML body. */
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string),
  );

/** Keep header-injection characters out of the subject line. */
const safeHeader = (s: string) => s.replace(/[\r\n]+/g, " ").slice(0, 160);

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return json({ ok: false, error: "Method not allowed" }, 405);
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return json({ ok: false, error: "Malformed request body" }, 400);
  }

  // Bots fill hidden fields. Return 200 so they get no signal worth acting on.
  if (str(body.website)) return json({ ok: true }, 200);

  const firstName = str(body.firstName).slice(0, 80);
  const lastName = str(body.lastName).slice(0, 80);
  const email = str(body.email).slice(0, 255);
  const organization = str(body.organization).slice(0, 160);
  const message = str(body.message).slice(0, 2000);

  const missing = { firstName, lastName, email, organization, message };
  for (const [field, value] of Object.entries(missing)) {
    if (!value) return json({ ok: false, error: `Missing ${field}` }, 400);
  }
  if (message.length < 10) {
    return json({ ok: false, error: "Message is too short" }, 400);
  }
  // Deliberately permissive: the browser already validated, and this only
  // needs to be good enough to keep a malformed Reply-To header out.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "Invalid email address" }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not an error the visitor caused — tell the client to fall back.
    return json({ ok: false, error: "Email delivery is not configured", fallback: true }, 503);
  }

  const name = `${firstName} ${lastName}`.trim();
  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#16233d">
      <h2 style="margin:0 0 16px">New inquiry from the RCG website</h2>
      <p style="margin:0 0 4px"><strong>Name:</strong> ${esc(name)}</p>
      <p style="margin:0 0 4px"><strong>Email:</strong> ${esc(email)}</p>
      <p style="margin:0 0 16px"><strong>Organization:</strong> ${esc(organization)}</p>
      <div style="padding:16px;background:#f5f3ec;border-radius:8px;white-space:pre-wrap">${esc(message)}</div>
    </div>`;

  const text =
    `New inquiry from the RCG website\n\n` +
    `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\n\n${message}\n`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || FROM,
        to: [process.env.CONTACT_TO || TO],
        // Replying in the inbox goes straight back to the person who wrote in.
        reply_to: email,
        subject: safeHeader(`RCG inquiry from ${organization}`),
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend rejected the send:", res.status, detail);
      return json({ ok: false, error: "Could not send your message", fallback: true }, 502);
    }

    return json({ ok: true }, 200);
  } catch (err) {
    console.error("Contact endpoint failed:", err);
    return json({ ok: false, error: "Could not send your message", fallback: true }, 502);
  }
}
