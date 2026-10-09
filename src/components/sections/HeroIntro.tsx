"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { ButtonLink, Eyebrow } from "@/components/ui";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

/** Home hero copy with a staggered entrance. All text remains real, crawlable HTML. */
export function HeroIntro({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) {
  return (
    <div className="max-w-2xl">
      <motion.div {...fadeUp(0)}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>
      <motion.h1
        id="hero-title"
        {...fadeUp(0.08)}
        className="mt-6 text-[2.5rem] font-extrabold leading-[1.05] text-ink sm:text-6xl lg:text-[4.1rem]"
      >
        {title}
      </motion.h1>
      <motion.p {...fadeUp(0.18)} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-muted sm:text-xl">
        {text}
      </motion.p>
      <motion.div {...fadeUp(0.28)} className="mt-9 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/contact-us">
          Contact Our Team
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          Explore Our Services
        </ButtonLink>
      </motion.div>
    </div>
  );
}
