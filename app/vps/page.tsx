import React from "react";
import VpsExplorer from "../../src/components/VpsExplorer";

export const metadata = {
  title: "Cloud VPS Hosting Worldwide — India, Germany, Singapore, USA, Canada | TreeMC",
  description:
    "Deploy high-performance KVM Cloud VPS with NVMe storage across India, Germany, Singapore, USA, and Canada on Intel Xeon, AMD EPYC, and AMD Ryzen.",
};

export default function VpsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
          KVM Cloud VPS · 5 Countries
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Cloud VPS hosting <span className="text-emerald-400">worldwide</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          Select your country below to view available processor families, real-time pricing in your currency, and full root KVM access.
        </p>
      </div>

      <VpsExplorer />
    </div>
  );
}
