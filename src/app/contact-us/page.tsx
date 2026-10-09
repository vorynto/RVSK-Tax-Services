import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Motion";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: `Contact RVSK Tax Services about GST, payroll, bookkeeping, accounts, licences and registrations. Call ${site.phone.display} or email ${site.email}.`,
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact Us", path: "/contact-us" }]}
        eyebrow="Contact us"
        title="Let’s discuss your requirements"
        intro="We are always here to support your business needs. Call, email or send us an enquiry, and our team will get back to you."
      />

      <section aria-label="Contact details and enquiry form" className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <Reveal>
            <div className="space-y-4">
              <a
                href={site.phone.href}
                className="group flex items-center gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-green-200 hover:shadow-lift"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold uppercase tracking-wider text-slate-muted">Call us</span>
                  <span className="mt-1 block font-display text-xl font-bold text-ink group-hover:text-brand-blue-600">{site.phone.display}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-green-200 hover:shadow-lift"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-blue-50 text-brand-blue-600">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold uppercase tracking-wider text-slate-muted">Email us</span>
                  <span className="mt-1 block break-all font-semibold text-ink group-hover:text-brand-blue-600">{site.email}</span>
                </span>
              </a>
              {site.showAddress ? (
                <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-green-50 text-brand-green-700">
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-muted">Office</h2>
                      <address className="mt-1 not-italic leading-relaxed text-ink">
                        <span className="block font-semibold">{site.name}</span>
                        {site.address.lines.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </address>
                      <a
                        href={site.address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-600 hover:text-brand-green-700"
                      >
                        View on Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : null}
              <p className="px-2 text-sm leading-relaxed text-slate-muted">
                Prefer to meet in person? Contact us to fix an appointment at a time convenient for you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-line bg-white p-6 shadow-lift sm:p-10">
              <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">Send us an enquiry</h2>
              <p className="mt-2 text-slate-muted">Tell us a little about your requirement and we will get back to you.</p>
              <div className="relative mt-8">
                <Suspense fallback={<div className="h-[36rem] animate-pulse rounded-2xl bg-surface" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
