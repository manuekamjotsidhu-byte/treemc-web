import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "../../../src/data/articles";

export function generateStaticParams() {
  return ARTICLES.filter((a) => a.kind === "blog").map((a) => ({ slug: a.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.kind === "blog" && a.slug === slug);
  if (!article) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link href="/blog" className="text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)]">← Back to Blog</Link>
      <div className="mt-4 flex items-center gap-3 text-xs text-[var(--muted)]">
        <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-semibold">{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{article.title}</h1>
      <p className="mt-3 text-base text-[var(--muted)]">{article.summary}</p>
      <hr className="my-8 border-[var(--border)]" />
      <div className="space-y-8">
        {article.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xl font-bold">{s.heading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
