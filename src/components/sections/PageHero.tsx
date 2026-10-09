import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/motion/Motion";
import { Eyebrow } from "@/components/ui";

/** Header band used on inner pages: breadcrumbs, eyebrow, the page's single H1 and intro. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  children,
  aside,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-surface-green via-white to-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue-100/70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-brand-green-100/70 blur-3xl" aria-hidden="true" />
      <div className="container-page relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-8 grid gap-10 ${aside ? "lg:grid-cols-[1.4fr_1fr] lg:items-center" : ""}`}>
          <Reveal className="max-w-3xl">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl">{title}</h1>
            {intro ? <div className="mt-5 text-lg leading-relaxed text-slate-muted sm:text-xl">{intro}</div> : null}
            {children ? <div className="mt-8">{children}</div> : null}
          </Reveal>
          {aside ? <Reveal delay={0.15}>{aside}</Reveal> : null}
        </div>
      </div>
    </section>
  );
}
