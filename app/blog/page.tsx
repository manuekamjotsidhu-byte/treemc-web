import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "../../src/data/articles";

export const metadata = {
  title: "Blog — Hosting Benchmarks, VPS & Minecraft Guides | TreeMC",
  description: "Read TreeMC articles on Cloud VPS regions, Windows RDP vs Linux VPS, and Minecraft server sizing.",
};

export default function BlogIndexPage() {
  const posts = ARTICLES.filter((a) => a.kind === "blog");
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">TreeMC Blog</span>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">
          Hosting <span className="serif-it font-normal">insights</span> &amp; articles
        </h1>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card-clean group flex flex-col justify-between rounded-3xl p-6 transition hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 font-semibold">{p.category}</span>
                <span>{p.readTime}</span>
              </div>
              <h2 className="mt-4 text-lg font-bold group-hover:underline">{p.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{p.summary}</p>
            </div>
            <div className="mt-5 inline-flex items-center gap-1 text-xs font-bold">
              Read article <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
