import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { services, serviceHref } from "@/data/services";
import { legalNav, site } from "@/data/site";

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "All Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-80 w-80 rounded-full bg-brand-green/10 blur-3xl" aria-hidden="true" />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm leading-relaxed text-slate-muted">
            RVSK Tax Services supports businesses with GST, payroll compliance, bookkeeping, income tax filing, licences and business
            registrations — with individual attention to every client.
          </p>
        </div>

        <nav aria-labelledby="footer-services" className="lg:col-span-3">
          <h2 id="footer-services" className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={serviceHref(s.slug)} className="text-slate-muted transition-colors hover:text-brand-green-700">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-company" className="lg:col-span-2">
          <h2 id="footer-company" className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
            Company
          </h2>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-muted transition-colors hover:text-brand-green-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">Contact</h2>
          <ul className="mt-4 space-y-3.5 text-slate-muted">
            <li>
              <a href={site.phone.href} className="inline-flex items-start gap-3 transition-colors hover:text-brand-green-700">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-700" aria-hidden="true" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-start gap-3 break-all transition-colors hover:text-brand-green-700">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-700" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            {site.showAddress ? (
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-700" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {site.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-4 py-6 text-sm text-slate-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-brand-green-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
