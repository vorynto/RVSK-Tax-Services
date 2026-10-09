import { type ContactInput, serviceOptions, validateContact } from "@/lib/contact";

/**
 * Enquiry form endpoint. Sends the enquiry by email through Resend (https://resend.com).
 *
 * Required environment variables (server-side only — never prefix with NEXT_PUBLIC_):
 *   RESEND_API_KEY      – API key from Resend
 *   CONTACT_TO_EMAIL    – inbox that receives enquiries (e.g. customersupport@rvsktaxservices.com)
 *   CONTACT_FROM_EMAIL  – verified sender, e.g. "RVSK Website <website@rvsktaxservices.com>"
 *
 * The endpoint returns 2xx only after the email provider accepts the message, so
 * the form never shows a success state for an enquiry that was not delivered.
 */

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

function json(body: object, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return json({ error: "Unsupported request." }, 415);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return json({ error: "Too many enquiries. Please try again later or call us." }, 429);

  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (typeof raw.website === "string" && raw.website.trim() !== "") return json({ ok: true }, 200);

  const input: ContactInput = {
    name: String(raw.name ?? ""),
    phone: String(raw.phone ?? ""),
    email: String(raw.email ?? ""),
    service: String(raw.service ?? ""),
    message: String(raw.message ?? ""),
    consent: raw.consent === true,
  };

  const errors = validateContact(input);
  if (Object.keys(errors).length > 0) return json({ error: "Please correct the highlighted fields.", errors }, 422);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[contact] Email delivery is not configured (RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL).");
    return json({ error: "Our enquiry form is temporarily unavailable." }, 503);
  }

  const serviceLabel = serviceOptions.find((o) => o.value === input.service)?.label ?? input.service;
  const fields: [string, string][] = [
    ["Name", input.name.trim()],
    ["Phone", input.phone.trim()],
    ["Email", input.email.trim()],
    ["Service category", serviceLabel],
    ["Message", input.message.trim()],
  ];

  const text = fields.map(([k, v]) => `${k}: ${v}`).join("\n\n");
  const html = `<h2>New website enquiry</h2><table cellpadding="6">${fields
    .map(([k, v]) => `<tr><td valign="top"><strong>${k}</strong></td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table><p style="color:#666">Consent to privacy notice: yes</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: input.email.trim(),
        subject: `Website enquiry: ${serviceLabel} – ${input.name.trim().slice(0, 60)}`,
        text,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("[contact] Email provider rejected the message:", res.status, await res.text().catch(() => ""));
      return json({ error: "We couldn’t send your enquiry right now." }, 502);
    }
  } catch (err) {
    console.error("[contact] Email provider request failed:", err);
    return json({ error: "We couldn’t send your enquiry right now." }, 502);
  }

  return json({ ok: true }, 200);
}
