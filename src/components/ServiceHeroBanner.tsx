import React from "react";

interface ServiceHeroBannerProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
}

export default function ServiceHeroBanner({ badge, title, subtitle, image }: ServiceHeroBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] py-16 sm:py-24">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20 dark:opacity-30 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/60 via-[var(--bg)]/75 to-[var(--bg)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-1 text-xs font-semibold text-[var(--muted)] backdrop-blur-md">
          {badge}
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--muted)] sm:text-base">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
