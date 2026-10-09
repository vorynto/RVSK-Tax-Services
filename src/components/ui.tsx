import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const base =
  "group/btn relative inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-all duration-300 will-change-transform focus-visible:outline-offset-4 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-brand text-white shadow-[0_10px_30px_-12px_rgb(51_57_130/0.6)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgb(51_57_130/0.7)]",
  secondary:
    "border border-line bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:border-brand-blue-200 hover:text-brand-blue-600",
  ghost: "text-brand-blue-600 hover:text-brand-green-700",
  light: "bg-white text-brand-blue-700 shadow-soft hover:-translate-y-0.5 hover:bg-brand-blue-50",
};

type ButtonLinkProps = { variant?: Variant; children: ReactNode; className?: string } & ComponentProps<typeof Link>;

export function ButtonLink({ variant = "primary", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

/** For tel:/mailto: links, where next/link is not appropriate. */
export function ButtonAnchor({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: Variant; className?: string; children: ReactNode } & ComponentProps<"a">) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border border-brand-green-200 bg-brand-green-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-green-800 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  id?: string;
}) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "items-start";
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? <p className="text-lg leading-relaxed text-slate-muted">{description}</p> : null}
    </div>
  );
}
