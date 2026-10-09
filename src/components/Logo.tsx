import Link from "next/link";

/**
 * RVSK wordmark built from the brand colours.
 * The original logo file on the current website (RVSK_LOGO_FOOTER.png) returns 404,
 * so this mark stands in until the official artwork is supplied. To swap it, replace
 * <LogoMark /> with the official image (e.g. next/image pointing at /brand/logo.png).
 */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="rvsk-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00AC1F" />
          <stop offset="1" stopColor="#333982" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#rvsk-mark)" />
      <path
        d="M15 35V13h10.2c4.6 0 7.6 2.6 7.6 6.6 0 3-1.7 5.2-4.5 6.1L33.5 35h-5.6l-4.6-8.7H20V35h-5Zm5-12.8h4.7c2 0 3.2-1 3.2-2.6s-1.2-2.6-3.2-2.6H20v5.2Z"
        fill="#fff"
      />
      <circle cx="36.5" cy="13" r="3" fill="#fff" fillOpacity=".9" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="RVSK Tax Services — Home">
      <LogoMark className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:-rotate-3" />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-brand-blue-600">RVSK</span>
        <span className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-green-700">Tax Services</span>
      </span>
    </Link>
  );
}
