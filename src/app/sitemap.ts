import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { services, serviceHref } from "@/data/services";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.lastUpdated);
  const staticPages: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about-us", priority: 0.7, changeFrequency: "yearly" },
    { path: "/contact-us", priority: 0.8, changeFrequency: "yearly" },
    { path: "/testimonials", priority: 0.5, changeFrequency: "yearly" },
    { path: "/resources", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" },
    { path: "/service-disclaimer", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...staticPages.map((p) => ({ url: absoluteUrl(p.path), lastModified, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...services.map((s) => ({ url: absoluteUrl(serviceHref(s.slug)), lastModified, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...articles.map((a) => ({
      url: absoluteUrl(`/resources/${a.slug}`),
      lastModified: new Date(a.updated),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
