import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion/Motion";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceIcon } from "@/components/ServiceIcon";
import { articles } from "@/data/articles";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/format";

export const metadata = pageMetadata({
  title: "Resources – GST, Payroll, Bookkeeping & Tax Guides",
  description:
    "Plain-language guides from RVSK Tax Services on GST registration and returns, EPF and ESI, bookkeeping, income tax filing, TDS and TCS, MSME, IEC and food licences.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Resources", path: "/resources" }]}
        eyebrow="Resources"
        title="Guides for tax, accounts and compliance"
        intro="Plain-language overviews of topics related to our services. These articles are general information, not professional advice — rules change, so always check the official portals or speak with us about your situation."
      />
      <section aria-label="Articles" className="py-16 sm:py-20">
        <div className="container-page">
          <Stagger as="ul" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => {
              const service = getService(a.category);
              return (
                <StaggerItem as="li" key={a.slug} className="h-full">
                  <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-green-200 hover:shadow-lift">
                    {service ? (
                      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-green-800">
                        <ServiceIcon icon={service.icon} className="h-4 w-4" />
                        {service.shortName}
                      </p>
                    ) : null}
                    <h2 className="mt-4 font-display text-xl font-bold leading-snug text-ink">
                      <Link href={`/resources/${a.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-blue-600">
                        {a.title}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 leading-relaxed text-slate-muted">{a.description}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm text-slate-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {a.readingMinutes} min read · <time dateTime={a.updated}>{formatDate(a.updated)}</time>
                      </span>
                      <ArrowRight className="h-4 w-4 text-brand-blue-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
