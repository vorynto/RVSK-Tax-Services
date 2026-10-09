"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, CalendarClock, CircleCheck, FileText, HandCoins, ReceiptText, ShieldCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const checklist = [
  { label: "GST returns", icon: ReceiptText, done: true },
  { label: "EPF & ESI filings", icon: HandCoins, done: true },
  { label: "Bookkeeping", icon: BookOpen, done: true },
  { label: "Income tax filing", icon: FileText, done: false },
];

/** Decorative accounting-themed composition for the home hero. Contains no real data. */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const float = (distance: number, duration: number, delay = 0) =>
    reduce ? {} : { y: [0, -distance, 0], transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay } };

  return (
    <div className="relative mx-auto aspect-[1/1] w-full max-w-[34rem]" aria-hidden="true">
      {/* soft brand orbs */}
      <motion.div
        className="absolute left-[8%] top-[6%] h-[62%] w-[62%] rounded-full bg-brand-green-200/60 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[4%] right-[4%] h-[58%] w-[58%] rounded-full bg-brand-blue-200/60 blur-3xl"
        animate={reduce ? undefined : { scale: [1.04, 1, 1.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* orbit rings */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00AC1F" stopOpacity=".55" />
            <stop offset="1" stopColor="#333982" stopOpacity=".55" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="182" fill="none" stroke="url(#hero-ring)" strokeWidth="1" strokeDasharray="2 8" />
        <circle cx="200" cy="200" r="138" fill="none" stroke="url(#hero-ring)" strokeOpacity=".5" strokeWidth="1" />
      </svg>

      {/* main checklist card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.9, ease, delay: 0.25 }}
        className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 sm:w-[72%]"
      >
        <motion.div animate={float(8, 7)} className="rounded-3xl border border-white/80 bg-white/95 p-5 shadow-lift backdrop-blur sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-sm font-bold text-ink">Compliance checklist</div>
                <div className="mt-1 h-1.5 w-20 rounded-full bg-line" />
              </div>
            </div>
            <span className="whitespace-nowrap rounded-full bg-brand-green-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-green-800">
              On track
            </span>
          </div>
          <ul className="mt-5 space-y-2.5">
            {checklist.map((row, i) => (
              <motion.li
                key={row.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.6 + i * 0.12 }}
                className="flex items-center gap-3 rounded-2xl border border-line/80 bg-surface/70 px-3 py-2.5"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-brand-blue-600 shadow-sm">
                  <row.icon className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="block text-[0.8rem] font-semibold text-ink">{row.label}</span>
                  <span className="mt-1 block h-1 w-3/4 rounded-full bg-line">
                    <motion.span
                      className="block h-full rounded-full bg-gradient-brand"
                      initial={{ width: "0%" }}
                      animate={{ width: row.done ? "100%" : "62%" }}
                      transition={{ duration: 1.2, ease, delay: 0.9 + i * 0.15 }}
                    />
                  </span>
                </span>
                <CircleCheck className={`h-5 w-5 shrink-0 ${row.done ? "text-brand-green" : "text-line"}`} />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* floating chart card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.55 }}
        className="absolute right-[0%] top-[6%] hidden w-[38%] sm:block"
      >
        <motion.div animate={float(12, 6, 0.6)} className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lift">
          <div className="text-[0.7rem] font-semibold text-slate-muted">Books up to date</div>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {[42, 64, 50, 78, 66, 90].map((h, i) => (
              <motion.span
                key={i}
                className={`flex-1 rounded-t-md ${i % 2 ? "bg-brand-blue-500" : "bg-brand-green-400"}`}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.9, ease, delay: 1 + i * 0.08 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* floating documents card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.75 }}
        className="absolute bottom-[7%] left-[0%] hidden w-[40%] sm:block"
      >
        <motion.div animate={float(10, 8, 1.2)} className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-lift">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="grid h-8 w-8 place-items-center rounded-lg border-2 border-white bg-brand-blue-50 text-brand-blue-600">
                <FileText className="h-4 w-4" />
              </span>
            ))}
          </div>
          <div className="min-w-0">
            <div className="truncate text-[0.72rem] font-semibold text-ink">Documents shared</div>
            <div className="mt-1 h-1.5 w-12 rounded-full bg-brand-green-200" />
          </div>
        </motion.div>
      </motion.div>

      {/* updates chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.95 }}
        className="absolute bottom-[4%] right-[2%] sm:bottom-[16%]"
      >
        <motion.div
          animate={float(6, 5, 0.3)}
          className="flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3.5 py-2 text-[0.72rem] font-semibold text-brand-blue-700 shadow-lift"
        >
          <CalendarClock className="h-4 w-4 text-brand-green-600" />
          Timely updates
        </motion.div>
      </motion.div>
    </div>
  );
}
