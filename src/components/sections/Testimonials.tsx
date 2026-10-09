import { Quote } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Motion";
import { testimonials } from "@/data/content";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((p) => p.length > 1)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

export function TestimonialGrid() {
  return (
    <Stagger className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((t) => (
        <StaggerItem key={t.name} as="article" className="h-full">
          <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-8">
            <Quote className="h-8 w-8 text-brand-green" aria-hidden="true" />
            <blockquote className="mt-5 flex-1 space-y-4 leading-relaxed text-slate-muted">
              {t.quote.map((q) => (
                <p key={q.slice(0, 24)}>{q}</p>
              ))}
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-brand font-display text-sm font-bold text-white"
                aria-hidden="true"
              >
                {initials(t.name)}
              </span>
              <span>
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="block text-sm text-slate-muted">{t.company}</span>
              </span>
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
