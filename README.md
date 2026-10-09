# RVSK Tax Services — website

The marketing website for [RVSK Tax Services](https://rvsktaxservices.com). It replaces the previous WordPress site with a Next.js App Router build that uses a light theme with the existing brand colours.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide icons.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npx tsc --noEmit` | Type check |
| `npm run build` | Production build (all pages prerendered as static HTML) |
| `npm start` | Serve the production build |

## Where content lives

All business content is kept in typed data files, so you can make edits without touching page code:

| File | Contents |
| --- | --- |
| `src/data/site.ts` | Business name, phone, email, office address (`showAddress` toggle), navigation |
| `src/data/services.ts` | **The six service categories and their exact offerings**, FAQs, SEO titles and descriptions |
| `src/data/content.ts` | Testimonials, “Why choose RVSK” strengths, process steps, home FAQs |
| `src/data/articles.ts` | Resource articles (general information; no rates, thresholds or due dates) |
| `src/app/globals.css` | Brand colour tokens and typography |

> **Scope rule:** do not add offerings to `services.ts` unless RVSK Tax Services has confirmed them in writing.

## Brand colours

Both colours come from the existing site's stylesheet (Elementor global colours):

| Token | HEX | Use |
| --- | --- | --- |
| `brand-green` | `#00AC1F` | Primary brand green: icons, fills, accents, large display text |
| `brand-green-700` | `#007F17` | Green for body-size text and buttons (≈5.1:1 contrast on white) |
| `brand-blue` / `brand-blue-600` | `#333982` | Secondary brand blue: links, headings, gradient end (≈10:1 on white) |

`#00AC1F` has only about 3:1 contrast on white, so it is never used for small text. The green-to-blue gradient runs from `#007F17` to `#333982`.

## Contact form

`POST /api/contact` validates input on the server, using the same rules as the browser form (`src/lib/contact.ts`). It also applies a honeypot and a per-IP rate limit, then sends the enquiry through the [Resend](https://resend.com) email API. The endpoint returns success **only after Resend accepts the message**; otherwise the form shows an error with the phone and email fallbacks.

Required environment variables (server-side only):

- `RESEND_API_KEY`: API key from Resend.
- `CONTACT_TO_EMAIL`: the inbox that receives enquiries.
- `CONTACT_FROM_EMAIL`: a sender address on a domain verified in Resend (add the DNS records Resend provides for `rvsktaxservices.com`).

When these are missing, the endpoint returns `503` and the form tells the visitor that the enquiry was **not** sent. The rate limiter is in-memory and best-effort; for high traffic, put a platform WAF or rate limit in front of it.

## SEO

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter tags (`src/lib/seo.ts`).
- `sitemap.xml`, `robots.txt`, a generated Open Graph image and an SVG favicon.
- JSON-LD: Organization, WebSite, BreadcrumbList, Service, FAQPage, Article and ItemList. No ratings, statistics or credentials are included.
- 301 redirects from the old WordPress URLs (`next.config.ts`).
- Keyword map: [`docs/SEO-KEYWORD-MAP.md`](docs/SEO-KEYWORD-MAP.md).

## Deployment

### Vercel (recommended)

1. Import the repository into Vercel. The framework is detected automatically.
2. Add the environment variables from `.env.example` under Project → Settings → Environment Variables.
3. Deploy, then add `rvsktaxservices.com` (and `www`) under Domains and update DNS at the registrar.
4. Submit `https://rvsktaxservices.com/sitemap.xml` in Google Search Console.

### Any Node.js host (e.g. Hostinger Node.js, a VPS)

```bash
npm ci
npm run build
NODE_ENV=production PORT=3000 npm start
```

Set the environment variables before running `npm run build`, because `NEXT_PUBLIC_SITE_URL` is inlined at build time. Run the app behind HTTPS.

## Open items

See [`docs/CONTENT-AUDIT.md`](docs/CONTENT-AUDIT.md) for the audit of the previous site and the business information that RVSK needs to confirm. The most important item is the **official logo file**, which currently returns 404 on the old site.
