import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import { type ServiceCategory, serviceHref } from "@/data/services";

export function ServiceCard({ service, headingLevel = "h3" }: { service: ServiceCategory; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-green-200 hover:shadow-lift sm:p-8">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-brand-green-100 to-brand-blue-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-green-50 text-brand-green-700 ring-1 ring-brand-green-100 transition-all duration-500 group-hover:bg-gradient-brand group-hover:text-white group-hover:ring-transparent">
          <ServiceIcon icon={service.icon} className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <Heading className="text-xl font-bold leading-snug text-ink">{service.name}</Heading>
      </div>
      <p className="relative mt-5 leading-relaxed text-slate-muted">{service.cardDescription}</p>
      <ul className="relative mt-5 space-y-2.5">
        {service.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-[0.95rem] text-ink/85">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-600" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
      <div className="relative mt-auto pt-7">
        <Link
          href={serviceHref(service.slug)}
          className="inline-flex items-center gap-2 font-semibold text-brand-blue-600 transition-colors after:absolute after:inset-0 after:content-[''] hover:text-brand-green-700"
        >
          Explore Services
          <span className="sr-only">: {service.name}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
