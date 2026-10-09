import { ArrowRight, ArrowUpRight, Info } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/motion/Motion";
import { CtaSection } from "@/components/sections/CtaSection";
import { ServiceIcon } from "@/components/ServiceIcon";
import { type ArticleBlock, articles, getArticle } from "@/data/articles";
import { getService, serviceHref } from "@/data/services";
import { formatDate } from "@/lib/format";
import { articleJsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${slug}`,
    type: "article",
    publishedTime: article.published,
    modifiedTime: article.updated,
  });
}

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "ul")
    return (
      <ul>
        {block.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  if (block.type === "h3") return <h3>{block.text}</h3>;
  return <p>{block.text}</p>;
}

export default async function ArticlePage({ params }: PageProps<"/resources/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const path = `/resources/${article.slug}`;
  const service = getService(article.category);
  const more = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const others = more.length ? more : articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-line bg-gradient-to-b from-surface-green via-white to-white">
          <div className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
          <div className="container-page relative max-w-4xl py-12 sm:py-16">
            <Breadcrumbs
              items={[
                { name: "Resources", path: "/resources" },
                { name: article.title, path },
              ]}
            />
            <Reveal>
              {service ? (
                <Link
                  href={serviceHref(service.slug)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-green-200 bg-brand-green-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green-800 hover:bg-brand-green-100"
                >
                  <ServiceIcon icon={service.icon} className="h-4 w-4" />
                  {service.shortName}
                </Link>
              ) : null}
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] text-ink sm:text-5xl">{article.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-muted sm:text-xl">{article.description}</p>
              <p className="mt-6 text-sm text-slate-muted">
                By RVSK Tax Services · Published <time dateTime={article.published}>{formatDate(article.published)}</time>
                {article.updated !== article.published ? (
                  <>
                    {" "}
                    · Updated <time dateTime={article.updated}>{formatDate(article.updated)}</time>
                  </>
                ) : null}{" "}
                · {article.readingMinutes} min read
              </p>
            </Reveal>
          </div>
        </header>

        <div className="container-page max-w-4xl py-14 sm:py-16">
          <div className="prose-rvsk">
            <p className="text-xl leading-relaxed text-ink/85">{article.intro}</p>
            {article.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.blocks.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </section>
            ))}
            {article.officialLinks.length ? (
              <section>
                <h2>Official sources</h2>
                <ul>
                  {article.officialLinks.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                        <ArrowUpRight className="ml-0.5 inline h-4 w-4 align-[-2px]" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="mt-12 flex gap-3 rounded-2xl border border-brand-blue-100 bg-brand-blue-50/60 p-5 text-sm leading-relaxed text-brand-blue-900">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue-500" aria-hidden="true" />
            <p>
              This article is general information only and is not professional advice. Laws, forms, thresholds and due dates change; please
              refer to the official sources or{" "}
              <Link href="/contact-us" className="font-semibold underline underline-offset-2">
                contact us
              </Link>{" "}
              to discuss your situation. See our{" "}
              <Link href="/service-disclaimer" className="font-semibold underline underline-offset-2">
                service disclaimer
              </Link>
              .
            </p>
          </aside>

          {service ? (
            <div className="mt-8 flex flex-col items-start gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white">
                  <ServiceIcon icon={service.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-slate-muted">Related service</p>
                  <p className="font-display text-lg font-bold text-ink">{service.name}</p>
                </div>
              </div>
              <Link
                href={serviceHref(service.slug)}
                className="group inline-flex items-center gap-2 font-semibold text-brand-blue-600 hover:text-brand-green-700"
              >
                View service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          ) : null}
        </div>
      </article>

      <section aria-labelledby="more-title" className="bg-surface py-16 sm:py-20">
        <div className="container-page">
          <h2 id="more-title" className="text-2xl font-extrabold text-ink sm:text-3xl">
            More resources
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/resources/${a.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="font-display text-lg font-bold leading-snug text-ink group-hover:text-brand-blue-600">{a.title}</span>
                  <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-muted">{a.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />

      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.description,
          path,
          published: article.published,
          updated: article.updated,
        })}
      />
    </>
  );
}
