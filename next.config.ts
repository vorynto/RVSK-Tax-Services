import type { NextConfig } from "next";

/**
 * Permanent redirects from the previous WordPress site's URLs to the new
 * URL structure, so existing links and search results keep working.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  { source: "/goods-services-tax", destination: "/services/goods-and-services-tax" },
  { source: "/payroll-process", destination: "/services/payroll-epf-esi" },
  { source: "/outsourcing", destination: "/services/outsourcing" },
  { source: "/factory-labour-licence", destination: "/services/factory-and-labour-licence" },
  { source: "/accounts", destination: "/services/accounts" },
  { source: "/other-activities", destination: "/services/other-activities" },
  { source: "/testimonals", destination: "/testimonials" },
  { source: "/feed", destination: "/resources" },
  { source: "/comments/feed", destination: "/resources" },
];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
