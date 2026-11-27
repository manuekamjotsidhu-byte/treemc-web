import React from "react";

interface ServiceHeroBannerProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
}

export default function ServiceHeroBanner({ badge, title, subtitle, image }: ServiceHeroBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-white py-16 dark:bg-[#080c14] sm:py-24">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45 dark:opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/75 to-[var(--bg)] dark:from-[#080c14]/55 dark:via-[#080c14]/70 dark:to-[var(--bg)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="inline-block rounded-full border border-slate-900/10 bg-white/90 px-4 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-slate-900/85 dark:text-slate-200">
          {badge}
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-slate-700 dark:text-slate-300 sm:text-base">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
