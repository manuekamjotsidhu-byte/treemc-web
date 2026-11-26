import React from "react";
import VpsExplorer from "../../src/components/VpsExplorer";

export const metadata = {
  title: "Cloud VPS Hosting Worldwide — India, Germany, Singapore, USA, Canada | TreeMC",
  description: "Deploy high-performance KVM Cloud VPS across India, Germany, Singapore, USA, and Canada.",
};

export default function VpsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1 text-xs font-semibold text-[var(--muted)]">
          KVM Cloud VPS · 5 Countries
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
          Cloud VPS hosting <span className="serif-it font-normal">worldwide</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--muted)] sm:text-base">
          Choose your region below to view available processor families, real-time currency pricing, and full root KVM access.
        </p>
      </div>
      <VpsExplorer />
    </div>
  );
}
