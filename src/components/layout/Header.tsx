"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services, serviceHref } from "@/data/services";
import { primaryNav, site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  const dropdownId = useId();
  const mobileMenuId = useId();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);
  // True when the dropdown was just opened by hover, so the click that follows doesn't immediately close it.
  const openedByHover = useRef(false);

  // Close menus whenever the route changes (adjusting state during render).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setServicesOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        openedByHover.current = false;
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        openedByHover.current = false;
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Mobile menu: lock scroll, focus first link, trap focus, close on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const panel = mobilePanelRef.current;
    panel?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
      if (e.key === "Tab" && panel) {
        const focusables = Array.from(panel.querySelectorAll<HTMLElement>("a, button"));
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen, closeMobile]);

  const openWithHover = () => {
    window.clearTimeout(hoverTimer.current);
    if (!servicesOpen) openedByHover.current = true;
    setServicesOpen(true);
  };
  const closeWithHover = () => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      openedByHover.current = false;
      setServicesOpen(false);
    }, 160);
  };

  const servicesActive = pathname.startsWith("/services");
  const [home, ...restNav] = primaryNav;
  const aboutNav = restNav.slice(0, 1);
  const afterServicesNav = restNav.slice(1);

  const linkCls = (active: boolean) =>
    `relative whitespace-nowrap rounded-full px-3 py-2 text-[0.95rem] font-medium transition-colors ${
      active ? "text-brand-blue-600" : "text-slate-muted hover:text-ink"
    }`;

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-line/80 bg-white/90 shadow-[0_8px_30px_-20px_rgb(20_26_38/0.25)] backdrop-blur-md"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-brand-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {[home, ...aboutNav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkCls(isActive(pathname, item.href))} aria-current={isActive(pathname, item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <div ref={dropdownRef} className="relative" onMouseEnter={openWithHover} onMouseLeave={closeWithHover}>
                <button
                  ref={servicesButtonRef}
                  type="button"
                  className={`${linkCls(servicesActive)} inline-flex items-center gap-1`}
                  aria-expanded={servicesOpen}
                  aria-controls={dropdownId}
                  onClick={() => {
                    if (openedByHover.current) {
                      openedByHover.current = false;
                      setServicesOpen(true);
                    } else {
                      setServicesOpen((v) => !v);
                    }
                  }}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                <AnimatePresence>
                  {servicesOpen ? (
                    <motion.div
                      id={dropdownId}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.22, ease }}
                      className="absolute left-1/2 top-full z-50 w-[min(44rem,calc(100vw-2rem))] -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-lift">
                        <ul className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={serviceHref(s.slug)}
                                className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-surface-green focus-visible:bg-surface-green"
                                aria-current={pathname === serviceHref(s.slug) ? "page" : undefined}
                              >
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-green-50 text-brand-green-700 transition-colors group-hover:bg-brand-green group-hover:text-white">
                                  <ServiceIcon icon={s.icon} className="h-5 w-5" />
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-ink">{s.name}</span>
                                  <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-slate-muted">{s.highlights.slice(0, 3).join(" · ")}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/services"
                          className="mt-2 flex items-center justify-between rounded-2xl bg-surface px-4 py-3 text-sm font-semibold text-brand-blue-600 transition-colors hover:bg-brand-blue-50"
                        >
                          View all services
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </li>
            {afterServicesNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkCls(isActive(pathname, item.href))} aria-current={isActive(pathname, item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-brand-blue-600 transition-colors hover:text-brand-green-700 2xl:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone.display}
          </a>
          <Link
            href="/contact-us"
            className="hidden min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgb(51_57_130/0.6)] transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Book an Appointment
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id={mobileMenuId}
            ref={mobilePanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease }}
            className="fixed inset-x-0 bottom-0 top-[var(--header-height)] z-40 overflow-y-auto border-t border-line bg-white xl:hidden"
          >
            <nav aria-label="Mobile" className="container-page py-6">
              <ul className="flex flex-col gap-1">
                {[home, ...aboutNav].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-lg font-semibold text-ink hover:bg-surface"
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-lg font-semibold text-ink hover:bg-surface"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    Services
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileServicesOpen ? (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease }}
                        className="overflow-hidden pl-2"
                      >
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={serviceHref(s.slug)}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-base text-slate-muted hover:bg-surface hover:text-ink"
                            >
                              <ServiceIcon icon={s.icon} className="h-5 w-5 text-brand-green-700" />
                              {s.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href="/services"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-base font-semibold text-brand-blue-600"
                          >
                            View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        </li>
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                </li>
                {afterServicesNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-lg font-semibold text-ink hover:bg-surface"
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3 border-t border-line pt-6">
                <Link
                  href="/contact-us"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-brand px-6 font-semibold text-white"
                >
                  Book an Appointment
                </Link>
                <a
                  href={site.phone.href}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-6 font-semibold text-brand-blue-600"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone.display}
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
