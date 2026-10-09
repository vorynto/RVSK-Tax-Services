"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { type FormEvent, useRef, useState } from "react";
import { site } from "@/data/site";
import { type ContactErrors, type ContactInput, LIMITS, serviceOptions, validateContact } from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

const empty: ContactInput = { name: "", phone: "", email: "", service: "", message: "", consent: false };

const fieldOrder: (keyof ContactInput)[] = ["name", "phone", "email", "service", "message", "consent"];

const inputCls = (invalid: boolean) =>
  `mt-2 block w-full rounded-2xl border bg-white px-4 py-3.5 text-base text-ink shadow-sm transition-colors placeholder:text-slate-400 focus:outline-none focus-visible:outline-none focus:ring-4 ${
    invalid ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-line focus:border-brand-blue-400 focus:ring-brand-blue-100"
  }`;

export function ContactForm() {
  const params = useSearchParams();
  const preselected = params.get("service") ?? "";
  const [values, setValues] = useState<ContactInput>({
    ...empty,
    service: serviceOptions.some((o) => o.value === preselected) ? preselected : "",
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof ContactInput>(key: K, value: ContactInput[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const focusFirstError = (errs: ContactErrors) => {
    const first = fieldOrder.find((k) => errs[k]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus("idle");
      focusFirstError(errs);
      return;
    }

    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: ContactErrors };
      if (res.ok && data.ok) {
        setStatus("success");
        setValues(empty);
        requestAnimationFrame(() => statusRef.current?.focus());
        return;
      }
      if (data.errors) {
        setErrors(data.errors);
        focusFirstError(data.errors);
      }
      setStatus("error");
      setServerMessage(data.error ?? "We couldn’t send your enquiry right now.");
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      setStatus("error");
      setServerMessage("We couldn’t reach our server. Please check your connection and try again.");
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  const describedBy = (k: keyof ContactInput, extra?: string) => [errors[k] ? `${k}-error` : null, extra].filter(Boolean).join(" ") || undefined;

  const errorText = (k: keyof ContactInput) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-700">
        <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
        {errors[k]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby="form-note">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 rounded-2xl border border-brand-green-200 bg-brand-green-50 p-4 text-brand-green-900"
              role="status"
            >
              <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-700" aria-hidden="true" />
              <p>
                <strong className="font-semibold">Thank you — your enquiry has been sent.</strong> Our team will get back to you. For anything
                urgent, call us on {site.phone.display}.
              </p>
            </motion.div>
          ) : null}
          {status === "error" ? (
            <motion.div
              key="err"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-900"
              role="alert"
            >
              <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700" aria-hidden="true" />
              <p>
                <strong className="font-semibold">{serverMessage}</strong> Your enquiry was not sent. Please try again, or contact us directly
                on{" "}
                <a href={site.phone.href} className="underline">
                  {site.phone.display}
                </a>{" "}
                or{" "}
                <a href={`mailto:${site.email}`} className="break-all underline">
                  {site.email}
                </a>
                .
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink">
            Name <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={LIMITS.name}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            className={inputCls(Boolean(errors.name))}
          />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-ink">
            Phone number <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={LIMITS.phone}
            placeholder="e.g. 98765 43210"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
            className={inputCls(Boolean(errors.phone))}
          />
          {errorText("phone")}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink">
            Email <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={LIMITS.email}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            className={inputCls(Boolean(errors.email))}
          />
          {errorText("email")}
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-semibold text-ink">
            Service category <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy("service")}
            className={`${inputCls(Boolean(errors.service))} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 fill=%22none%22 stroke=%22%234f5b6e%22 stroke-width=%222%22 viewBox=%220 0 24 24%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat pr-12`}
          >
            <option value="">Select a category</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errorText("service")}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          Message <span className="text-red-700" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={LIMITS.message}
          placeholder="Briefly describe your requirement"
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message")}
          className={`${inputCls(Boolean(errors.message))} resize-y`}
        />
        {errorText("message")}
      </div>

      {/* Honeypot field for spam bots — hidden from people and assistive tech. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={describedBy("consent")}
            className="mt-1 h-5 w-5 shrink-0 rounded border-line accent-brand-green-700"
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-slate-muted">
            I agree that RVSK Tax Services may use the details I have provided to respond to my enquiry, as described in the{" "}
            <Link href="/privacy-policy" className="font-semibold text-brand-blue-600 underline underline-offset-2">
              Privacy Policy
            </Link>
            . <span className="text-red-700" aria-hidden="true">*</span>
          </label>
        </div>
        {errorText("consent")}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-sm text-slate-muted">
          Fields marked <span className="text-red-700">*</span> are required.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group/btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3 font-semibold text-white shadow-[0_10px_30px_-12px_rgb(51_57_130/0.6)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Send Enquiry <Send className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
