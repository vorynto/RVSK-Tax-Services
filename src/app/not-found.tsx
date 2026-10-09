import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ButtonLink } from "@/components/ui";
import { services, serviceHref } from "@/data/services";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div className="container-page relative text-center">
        <p className="font-display text-7xl font-extrabold text-gradient-brand sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl">We couldn’t find that page</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-muted">
          The page may have moved as part of our new website. Try one of our service categories below, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/contact-us" variant="secondary">
            Contact Us
          </ButtonLink>
        </div>
        <ul className="mx-auto mt-14 grid max-w-4xl gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={serviceHref(s.slug)}
                className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <ServiceIcon icon={s.icon} className="h-5 w-5 shrink-0 text-brand-green-700" />
                <span className="flex-1 text-sm font-semibold text-ink">{s.name}</span>
                <ArrowRight className="h-4 w-4 text-brand-blue-600 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
