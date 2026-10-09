import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/data/site";
import { formatDate } from "@/lib/format";

export function LegalPage({ title, path, intro, children }: { title: string; path: string; intro: string; children: ReactNode }) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} title={title} intro={intro} />
      <div className="container-page max-w-4xl py-14 sm:py-16">
        <p className="text-sm text-slate-muted">
          Last updated: <time dateTime={site.lastUpdated}>{formatDate(site.lastUpdated)}</time>
        </p>
        <div className="prose-rvsk mt-4">{children}</div>
      </div>
    </>
  );
}
