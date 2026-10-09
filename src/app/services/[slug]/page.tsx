import { ArrowRight, BookOpen, Check, CircleCheck, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { OutsourcingComparison } from "@/components/sections/OutsourcingComparison";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ButtonAnchor, ButtonLink, SectionHeading } from "@/components/ui";
import { getArticle } from "@/data/articles";
import { getService, services, serviceHref, type ServiceCategory } from "@/data/services";
import { site } from "@/data/site";
import { faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.seo.title, description: service.seo.description, path: serviceHref(slug) });
}

function OfferingsAside({ service }: { service: ServiceCategory }) {
  return (
    <div className="rounded-3xl border border-line bg-white/90 p-6 shadow-lift backdrop-blur sm:p-7">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white">
          <ServiceIcon icon={service.icon} className="h-6 w-6" />
        </span>
        <p className="font-display text-lg font-bold text-ink">In this category</p>
      </div>
      <ul className="mt-5 space-y-1">
        {service.offerings.map((o) => (
          <li key={o.id}>
            <a
              href={`#${o.id}`}
              className="flex items-start gap-2.5 rounded-xl px-2 py-1.5 text-[0.95rem] text-ink/85 transition-colors hover:bg-surface-green hover:text-ink"
            >
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-600" aria-hidden="true" />
              {o.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = serviceHref(service.slug);
  const related = service.related.map((r) => getService(r)).filter((s): s is ServiceCategory => Boolean(s));
  const relatedArticles = service.articles.map((a) => getArticle(a)).filter((a) => a !== undefined);
  const isOutsourcing = service.slug === "outsourcing";

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ]}
        eyebrow={service.shortName}
        title={service.h1}
        intro={service.tagline}
        aside={<OfferingsAside service={service} />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/contact-us?service=${service.slug}`}>
            Enquire about this service
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
          </ButtonLink>
          <ButtonAnchor href={site.phone.href} variant="secondary">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone.display}
          </ButtonAnchor>
        </div>
      </PageHero>

      {/* Overview + requirements */}
      <section aria-labelledby="overview-title" className="py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <h2 id="overview-title" className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Overview
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-muted">
              {service.overview.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-brand-green-100 bg-surface-green p-7 sm:p-8">
              <h2 className="text-xl font-bold text-ink">Who this is for</h2>
              <ul className="mt-5 space-y-3">
                {service.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-ink/90">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand-green-700" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offerings */}
      <section aria-labelledby="offerings-title" className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="offerings-title"
              eyebrow="What we do"
              title={isOutsourcing ? "Two ways to outsource your bookkeeping" : `Our ${service.shortName} services`}
              description={
                isOutsourcing
                  ? "Choose the arrangement that suits the way your business works."
                  : "Each service starts with understanding your requirement. Here is what each one involves."
              }
            />
          </Reveal>
          <Stagger className={`mt-14 grid gap-6 ${isOutsourcing ? "lg:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {service.offerings.map((o, i) => (
              <StaggerItem key={o.id} as="article" className="h-full">
                <div
                  id={o.id}
                  className="group flex h-full scroll-mt-28 flex-col rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-green-200 hover:shadow-lift sm:p-8"
                >
                  <span className="font-display text-sm font-bold text-brand-green-700">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-xl font-bold text-ink">{o.name}</h3>
                  <p className="mt-3 leading-relaxed text-slate-muted">{o.summary}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                    {o.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-[0.95rem] text-ink/85">
                        <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-600" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          {isOutsourcing ? (
            <div className="mt-16">
              <OutsourcingComparison />
            </div>
          ) : null}
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-title" className="py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="process-title"
              eyebrow="Process"
              title="How we work with you"
              description="A general overview of how an engagement progresses. Specific steps vary by service."
            />
          </Reveal>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section aria-labelledby="service-faq-title" className="bg-surface-green py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="service-faq-title"
              align="left"
              eyebrow="FAQs"
              title={`${service.shortName}: frequently asked questions`}
              description="Have a question that isn’t answered here? Contact our team."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FaqAccordion faqs={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* Related reading */}
      {relatedArticles.length > 0 ? (
        <section aria-labelledby="reading-title" className="py-20 sm:py-24">
          <div className="container-page">
            <Reveal>
              <SectionHeading id="reading-title" eyebrow="Resources" title="Related reading" />
            </Reveal>
            <Stagger as="ul" className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((a) => (
                <StaggerItem as="li" key={a.slug}>
                  <Link
                    href={`/resources/${a.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <BookOpen className="h-6 w-6 text-brand-blue-500" aria-hidden="true" />
                    <span className="mt-4 font-display text-lg font-bold leading-snug text-ink group-hover:text-brand-blue-600">{a.title}</span>
                    <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-muted">{a.description}</span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}

      {/* Related categories */}
      <section aria-labelledby="related-title" className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading id="related-title" eyebrow="Explore more" title="Related services" />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <StaggerItem key={r.slug} className="h-full">
                <ServiceCard service={r} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaSection title={`Need help with ${service.shortName}?`} />

      <JsonLd
        data={[
          serviceJsonLd({
            name: service.name,
            description: service.seo.description,
            path,
            offerings: service.offerings.map((o) => o.name),
          }),
          faqJsonLd(service.faqs),
        ]}
      />
    </>
  );
}
