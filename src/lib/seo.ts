import type { Metadata } from "next";
import { site } from "@/data/site";

export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/** Builds per-page metadata with canonical URL and Open Graph / Twitter tags. */
export function pageMetadata({ title, description, path, type = "website", publishedTime, modifiedTime }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

const orgId = `${site.url}/#organization`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/rvsk-logo.svg`,
    email: site.email,
    telephone: site.phone.e164,
    description: site.description,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone.e164,
        email: site.email,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
    ],
    ...(site.showAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.streetAddress,
            addressLocality: site.address.locality,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode,
            addressCountry: site.address.country,
          },
        }
      : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string; offerings: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.name,
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: input.name,
      itemListElement: input.offerings.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleJsonLd(input: { title: string; description: string; path: string; published: string; updated: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntityOfPage: absoluteUrl(input.path),
    datePublished: input.published,
    dateModified: input.updated,
    inLanguage: "en-IN",
    image: absoluteUrl("/opengraph-image"),
    author: { "@id": orgId },
    publisher: { "@id": orgId },
  };
}
