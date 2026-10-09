import { CalendarClock, CircleCheck, MessagesSquare, Sparkles } from "lucide-react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { Strengths } from "@/components/sections/Strengths";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { services, serviceHref } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "RVSK Tax Services was formed by professionals with diverse experience and strong domain knowledge, offering tax, accounts, payroll and compliance support to businesses.",
  path: "/about-us",
});

const workingProcess = [
  {
    icon: CalendarClock,
    title: "Make an appointment",
    text: "Contact us and fix an appointment with our team at a time that is convenient for you.",
  },
  {
    icon: MessagesSquare,
    title: "Meet our accountant",
    text: "At the scheduled time, meet our accountant and discuss your requirements and any tax-related questions.",
  },
  {
    icon: Sparkles,
    title: "Get the right solution",
    text: "After understanding your situation properly, we recommend and deliver a clear, practical way forward.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About Us", path: "/about-us" }]}
        eyebrow="About us"
        title="Welcome to RVSK Tax Services"
        intro="A young, dynamic firm providing tax, accounting and compliance support — with senior-level attention to every client."
      >
        <ButtonLink href="/contact-us">Contact Us</ButtonLink>
      </PageHero>

      <section aria-labelledby="background-title" className="py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 id="background-title" className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Our background
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-muted">
              <p>
                RVSK Tax Services was formed by professionals with good, diverse experience and strong domain knowledge. We have expertise
                across accounts, tax and other finance areas.
              </p>
              <p>
                We understand the growing scope of business today, and the importance of relationships. With our understanding of the
                regulatory framework and our working relationships with businesses and institutions, we offer a broad range of services to
                our clients.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">Our professional approach</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-muted">
              <p>
                We provide senior-level attention to each and every client. We invest time in understanding your business and objectives,
                and work closely with you to make a difference.
              </p>
              <p>
                Our multidisciplinary team brings together people from different backgrounds, so that we can provide integrated,
                professionally managed support for your needs from start to finish.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="areas-title" className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="areas-title"
              eyebrow="Areas of service"
              title="Where we can help"
              description="Our services are organised into six categories. Select a category to see its offerings."
            />
          </Reveal>
          <Stagger as="ul" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem as="li" key={s.slug}>
                <Link
                  href={serviceHref(s.slug)}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-green-200 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-green-50 text-brand-green-700 transition-colors group-hover:bg-gradient-brand group-hover:text-white">
                    <ServiceIcon icon={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-semibold text-ink">{s.name}</span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section aria-labelledby="working-title" className="py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="working-title"
              eyebrow="Our working process"
              title="We value your time"
              description="We follow a few simple steps to avoid complications and save time for everyone who reaches out to us for support with their business needs."
            />
          </Reveal>
          <Stagger as="ol" className="mt-12 grid gap-6 md:grid-cols-3">
            {workingProcess.map((step, i) => (
              <StaggerItem as="li" key={step.title}>
                <div className="h-full rounded-3xl border border-line bg-white p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue-50 text-brand-blue-600">
                      <step.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-display text-4xl font-extrabold text-line" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-muted">{step.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section aria-labelledby="philosophy-title" className="bg-surface-green py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="philosophy-title"
              eyebrow="Client-focused philosophy"
              title="Sincere and dedicated to your business needs"
              description="Our aim is to make compliance comfortable for you — through attention, understanding and timely work."
            />
          </Reveal>
          <div className="mt-12">
            <Strengths />
          </div>
          <Reveal className="mx-auto mt-12 max-w-2xl">
            <ul className="grid gap-3 sm:grid-cols-2">
              {["Requirements understood before work begins", "Clear list of documents needed", "Regular updates and follow-ups", "One team across services"].map(
                (t) => (
                  <li key={t} className="flex items-start gap-2.5 text-ink/90">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-600" aria-hidden="true" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
