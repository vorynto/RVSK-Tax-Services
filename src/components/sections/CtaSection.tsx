import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Motion";
import { ButtonAnchor, ButtonLink } from "@/components/ui";
import { site } from "@/data/site";

export function CtaSection({
  title = "Need Support with Tax, Accounts or Compliance?",
  text = "Contact RVSK Tax Services to discuss your requirements and identify the appropriate service.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40 mix-blend-overlay" aria-hidden="true" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-brand-green-400/25 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <h2 id="cta-title" className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">{text}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href="/contact-us" variant="light" className="w-full sm:w-auto">
                  Contact Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
                </ButtonLink>
                <ButtonAnchor
                  href={site.phone.href}
                  variant="ghost"
                  className="w-full border border-white/40 text-white hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call RVSK
                </ButtonAnchor>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
