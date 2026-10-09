import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services, serviceHref } from "@/data/services";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Services – GST, Payroll, Bookkeeping, Accounts & More",
  description:
    "Explore RVSK Tax Services’ six service categories: GST, Payroll (EPF & ESI), Outsourcing, Factory & Labour Licence, Accounts and Other Activities.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="Our services"
        title="Tax, Accounts & Compliance Services"
        intro="We are a young, dynamic firm with diverse expertise in accounts, tax and other finance areas. Our services are organised into six categories — each with the specific offerings listed below."
      />

      <nav aria-label="Service categories" className="sticky top-[var(--header-height)] z-30 border-b border-line bg-white/90 backdrop-blur-md">
        <ul className="container-page flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {services.map((s) => (
            <li key={s.slug} className="shrink-0">
              <a
                href={`#${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-slate-muted transition-colors hover:border-brand-green-200 hover:text-ink"
              >
                <ServiceIcon icon={s.icon} className="h-4 w-4 text-brand-green-700" />
                {s.shortName}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="py-16 sm:py-20">
        <div className="container-page space-y-8">
          {services.map((s, idx) => (
            <Reveal key={s.slug}>
              <section
                id={s.slug}
                aria-labelledby={`${s.slug}-title`}
                className={`grid scroll-mt-40 gap-8 overflow-hidden rounded-[2rem] border border-line p-7 shadow-soft sm:p-10 lg:grid-cols-[1fr_1.3fr] lg:gap-12 ${
                  idx % 2 ? "bg-surface" : "bg-white"
                }`}
              >
                <div>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-[0_12px_30px_-12px_rgb(51_57_130/0.6)]">
                    <ServiceIcon icon={s.icon} className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <h2 id={`${s.slug}-title`} className="mt-6 text-2xl font-extrabold text-ink sm:text-3xl">
                    {s.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-muted">{s.cardDescription}</p>
                  <Link
                    href={serviceHref(s.slug)}
                    className="group mt-6 inline-flex items-center gap-2 font-semibold text-brand-blue-600 transition-colors hover:text-brand-green-700"
                  >
                    Explore {s.shortName} services
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
                <Stagger as="ul" className="grid content-start gap-3 sm:grid-cols-2">
                  {s.offerings.map((o) => (
                    <StaggerItem as="li" key={o.id}>
                      <Link
                        href={`${serviceHref(s.slug)}#${o.id}`}
                        className="group flex h-full flex-col rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-green-200 hover:shadow-soft"
                      >
                        <span className="font-semibold text-ink group-hover:text-brand-blue-600">{o.name}</span>
                        <span className="mt-1 text-sm leading-relaxed text-slate-muted">{o.summary}</span>
                      </Link>
                    </StaggerItem>
                  ))}
                </Stagger>
              </section>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaSection />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "RVSK Tax Services – service categories",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: absoluteUrl(serviceHref(s.slug)),
          })),
        }}
      />
    </>
  );
}
