/**
 * Business information for RVSK Tax Services.
 * Every value here was taken from the existing rvsktaxservices.com website.
 * Change details in this file only — the whole site reads from it.
 */
export const site = {
  name: "RVSK Tax Services",
  legalName: "RVSK Tax Services",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://rvsktaxservices.com").replace(/\/$/, ""),
  tagline: "Tax, Accounts & Compliance Support for Your Business",
  description:
    "RVSK Tax Services supports businesses with GST, EPF and ESI payroll compliance, bookkeeping, income tax filing, factory and labour licences and business registrations.",
  phone: {
    display: "+91 79049 14620",
    href: "tel:+917904914620",
    e164: "+917904914620",
  },
  email: "customersupport@rvsktaxservices.com",
  /**
   * Office address as published on the current Contact Us page.
   * Set `showAddress` to false to hide it everywhere (including structured data).
   */
  showAddress: true,
  address: {
    lines: [
      "Shop No. 1, Ground Floor – Commercial Portion",
      "No. 9/401, “B” Type, 49th Street, SIDCO Nagar",
      "Villivakkam, Chennai – 600 049",
    ],
    streetAddress:
      "Shop No. 1, Ground Floor – Commercial Portion, No. 9/401, B Type, 49th Street, SIDCO Nagar, Villivakkam",
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600049",
    country: "IN",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=RVSK+Tax+Services+SIDCO+Nagar+Villivakkam+Chennai+600049",
  },
  /** Date the content of this site was last reviewed (ISO). */
  lastUpdated: "2026-10-09",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  // "Services" dropdown is rendered from the service data model.
  { label: "Testimonials", href: "/testimonials" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact-us" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Service Disclaimer", href: "/service-disclaimer" },
];
