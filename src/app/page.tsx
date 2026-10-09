import { ArrowRight, CircleCheck, Phone } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { HeroIntro } from "@/components/sections/HeroIntro";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Strengths } from "@/components/sections/Strengths";
import { TestimonialGrid } from "@/components/sections/Testimonials";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { homeFaqs } from "@/data/content";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | GST, Payroll, Accounts & Compliance Support` },
  alternates: { canonical: "/" },
};

const aboutPoints = [
  "Formed by professionals with diverse experience and strong domain knowledge",
  "Expertise across accounts, tax and other finance areas",
  "A clear understanding of the regulatory framework",
  "Long-term relationships built on understanding your business",
];

export default function HomePage() {
  return (
    <>
      {/* B. Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-title">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-green via-white to-white" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pb-28 lg:pt-20">
          <HeroIntro
            eyebrow="RVSK Tax Services"
            title={
              <>
                Tax, Accounts &amp; Compliance Support for <span className="text-gradient-brand">Your Business</span>
              </>
            }
            text="RVSK Tax Services provides support across GST, payroll compliance, bookkeeping, income tax filing and business registration-related services, helping clients manage essential financial and compliance requirements."
          />
          <HeroVisual />
        </div>
      </section>

      {/* C. About */}
      <section aria-labelledby="about-title" className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-brand-blue-600 to-brand-blue-800 p-8 text-white shadow-lift sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-green/30 blur-3xl" aria-hidden="true" />
              <p className="relative text-sm font-semibold uppercase tracking-[0.16em] text-brand-green-200">Our approach</p>
              <p className="relative mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">
                “We provide senior-level attention to every client. We invest time in understanding your business and objectives, and work
                closely with you to make a difference.”
              </p>
              <ul className="relative mt-8 grid gap-3 sm:grid-cols-2">
                {["GST", "Payroll (EPF & ESI)", "Bookkeeping", "Income tax filing", "Licences", "Registrations"].map((t) => (
                  <li key={t} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-medium backdrop-blur">
                    <CircleCheck className="h-4 w-4 text-brand-green-300" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <Eyebrow>About RVSK</Eyebrow>
            <h2 id="about-title" className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Quality tax and accounting services, built on relationships
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-muted">
              <p>
                RVSK Tax Services was formed by professionals with diverse experience and strong domain knowledge. We are a young, dynamic
                firm with expertise in accounts, tax and other finance areas.
              </p>
              <p>
                We understand how businesses grow and why lasting relationships matter. With our understanding of the regulatory framework, we
                offer a broad range of services — and we start every engagement by understanding what you actually need.
              </p>
            </div>
            <ul className="mt-7 space-y-3">
              {aboutPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink/90">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-600" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <ButtonLink href="/about-us" variant="secondary" className="mt-9">
              More about RVSK
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* D. Services overview */}
      <section id="services" aria-labelledby="services-title" className="relative bg-surface py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="services-title"
              eyebrow="Our services"
              title="Six service areas for your tax, accounts and compliance needs"
              description="From GST and payroll to bookkeeping and business registrations, explore the services RVSK Tax Services provides."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* E. Why choose */}
      <section aria-labelledby="why-title" className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-green-100/60 blur-3xl" aria-hidden="true" />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              id="why-title"
              eyebrow="Why RVSK"
              title="Why choose RVSK Tax Services?"
              description="We are sincere and dedicated to meeting your business needs. Here is what you can expect when you work with us."
            />
          </Reveal>
          <div className="mt-14">
            <Strengths />
          </div>
        </div>
      </section>

      {/* F. Process */}
      <section aria-labelledby="process-title" className="bg-surface-green py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="process-title"
              eyebrow="How it works"
              title="A simple, four-step process"
              description="We follow a clear process so that your requirement is understood and handled without unnecessary delays."
            />
          </Reveal>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* G. Testimonials */}
      <section aria-labelledby="testimonials-title" className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading id="testimonials-title" eyebrow="Testimonials" title="What our clients say about us" />
          </Reveal>
          <div className="mt-14">
            <TestimonialGrid />
          </div>
        </div>
      </section>

      {/* H. FAQs */}
      <section aria-labelledby="faq-title" className="bg-surface py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="faq-title"
              align="left"
              eyebrow="FAQs"
              title="Frequently asked questions"
              description="Answers to common questions about our services. Can’t find what you’re looking for? Get in touch with our team."
            />
            <a
              href={site.phone.href}
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-blue-600 transition-colors hover:text-brand-green-700"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone.display}
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqAccordion faqs={homeFaqs} />
          </Reveal>
        </div>
      </section>

      {/* I. Final CTA */}
      <CtaSection />

      <JsonLd data={faqJsonLd(homeFaqs)} />
    </>
  );
}
