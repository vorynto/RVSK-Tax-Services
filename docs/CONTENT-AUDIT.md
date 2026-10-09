# Content audit of rvsktaxservices.com and items to confirm

Audit date: 9 October 2026. All 11 live pages were reviewed: Home, About Us, Services, the six category pages, Testimonials and Contact Us.

## What was carried over

| Item | Source | Notes |
| --- | --- | --- |
| Six service categories and offerings | Home, Services, category pages | Preserved exactly; see `src/data/services.ts` |
| Brand green `#00AC1F` | Elementor stylesheet (used 150+ times) | Primary |
| Brand blue `#333982` | Elementor stylesheet (button and section backgrounds) | Secondary |
| Phone `+91 79049 14620` | Header, Contact Us | |
| Email `customersupport@rvsktaxservices.com` | Contact Us | |
| Office address, Villivakkam, Chennai – 600 049 | Contact Us | Shown; set `showAddress: false` in `src/data/site.ts` to hide it |
| Company description, approach, working process | Home, About Us | Rewritten for grammar and clarity, with the same meaning |
| Three testimonials with attributions | Home, Testimonials | Spelling and grammar corrected only |
| On-site and off-site bookkeeping descriptions, bookkeeping tasks and reports | Outsourcing page | Used on the Outsourcing page |

## What was intentionally left out

| Item on the old site | Reason |
| --- | --- |
| Statistics showing “0” (trusted clients, projects, years) | Not verified figures |
| “24/7 support / unlimited round-the-clock guidance” | Unverified claim; replaced with “timely service and communication” |
| “Lightning-fast services”, “one of the best tax firms” as a firm claim | Unverifiable superlatives. The client’s own words remain in their testimonial |
| “Quick Question Answers” feature | No such feature exists on the site |
| GST turnover threshold (₹20 lakh) and “two monthly returns” statements | Possibly outdated regulatory claims |
| Factory/contract labour worker-count thresholds | The labour codes (in force from 21 Nov 2025) changed the framework; needs re-verification |
| “Tax planning” section on the Outsourcing page | Outside the confirmed scope of six categories; see question 4 below |
| Facebook / Twitter / YouTube icons | Their links on the old site were empty |
| Client photos and stock photos | All `wp-content/uploads` files return 404 on the live server |

## Business information requiring confirmation

1. **Logo.** `RVSK_LOGO_FOOTER.png` returns 404 on the live server, and the Wayback Machine could not be reached from the build environment. A brand-coloured “R” monogram and “RVSK Tax Services” wordmark is in use for now (`src/components/Logo.tsx`, `public/brand/rvsk-logo.svg`, `src/app/icon.svg`). Please supply the official logo (SVG or high-resolution PNG).
2. **Business name.** The old site's `<title>` says “Rvsk Tax and Legal Services”, while every page uses “RVSK Tax Services”. This build uses **RVSK Tax Services**. Please confirm, and confirm the registered legal name for the copyright line.
3. **Office address.** Confirm that it is current and should be displayed publicly. Also confirm office hours if they should be shown (none are shown now).
4. **Tax planning.** The old Outsourcing page mentions tax planning. It has not been presented as a service. Confirm whether it should be added, and under which category.
5. **Food Licence Registration and Return.** Confirm the exact scope, for example basic registration only or State/Central licences, and which returns are filed.
6. **IT Audit Support.** This is described as support in preparing books, records and schedules for an income tax audit (not the audit or certification itself). Please confirm.
7. **GST Audit and GST Complaints.** These are described as support or assistance. Please confirm the scope.
8. **Factory & Labour Licence.** “Complaints” is used, as on the home page. The old Services page listed “Compliance” instead. Please confirm.
9. **Vendor payment processing.** This is listed as typical bookkeeping work, because the old Outsourcing page states it. Please confirm.
10. **Service area.** Confirm whether services are offered only in Chennai or Tamil Nadu, or across India, before adding any location-specific pages or keywords.
11. **Social media.** Supply profile URLs if they should be linked.
12. **Testimonials.** Confirm that the clients are happy for their names and companies to remain published, and whether their photos should be restored.
13. **Legal pages.** The Privacy Policy, Terms and Service Disclaimer are plain-language drafts and should be reviewed by RVSK's legal adviser.

## Regulatory content notes

Resource articles were written to avoid rates, thresholds, due dates and penalties. Two significant changes are mentioned and should be rechecked before republishing:

- The **Income-tax Act, 2025** applies from 1 April 2026, and TDS/TCS forms and section references have been renumbered.
- The **four labour codes** came into force on 21 November 2025, consolidating laws including the EPF and ESI Acts, the Factories Act and the Contract Labour Act. Their implementing rules were still being finalised.
