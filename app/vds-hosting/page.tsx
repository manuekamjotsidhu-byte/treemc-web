"use client";

import React, { useState } from "react";
import { Check, Cpu, HardDrive, Network } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import { ComparisonMatrix, CtaBanner, InfrastructureGrid } from "../../src/components/ServiceDetails";

const VDS_CPUS = {
  "xeon-vds": [
    "Intel® Xeon® E5-2673 v4 (2.30 GHz)",
    "Intel® Xeon® E5-2682 v4 (2.50 GHz)",
    "Intel® Xeon® Platinum 8168 (2.70 GHz)",
    "Intel® Xeon® Platinum 8269CY (2.50 GHz)",
  ],
  "epyc-vds": [
    "AMD EPYC™ 7F72 (3.20 GHz)",
    "AMD EPYC™ 7K62 (2.60 GHz)",
  ],
};

export default function VdsHostingPage() {
  const { formatPrice } = useCurrency();
  const [family, setFamily] = useState<"xeon-vds" | "epyc-vds">("xeon-vds");
  const filtered = catalog.vdsPlans.filter((p: any) => p.family === family);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="rv mb-10 text-center">
        <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1 text-xs font-semibold text-[var(--muted)]">
          100% Dedicated CPU Slices · India
        </span>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">
          India <span className="serif-it font-normal">Virtual Dedicated</span> Servers
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)]">
          Dedicated Intel® Xeon® &amp; AMD EPYC™ CPU cores with DDR4 ECC RAM and Enterprise NVMe in Noida &amp; Delhi.
        </p>
      </div>

      <div className="rv mb-8 flex justify-center">
        <div className="card-clean inline-flex rounded-2xl p-1">
          <button
            type="button"
            onClick={() => setFamily("xeon-vds")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
              family === "xeon-vds" ? "btn-lime" : "text-[var(--muted)]"
            }`}
          >
            <img src="/cpu/intel.png" alt="Intel Xeon" className="h-4 w-4 rounded-sm object-contain" />
            Intel® Xeon® VDS
          </button>
          <button
            type="button"
            onClick={() => setFamily("epyc-vds")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
              family === "epyc-vds" ? "btn-lime" : "text-[var(--muted)]"
            }`}
          >
            <img src="/cpu/epyc.png" alt="AMD EPYC" className="h-4 w-4 rounded-sm object-contain" />
            AMD EPYC™ VDS
          </button>
        </div>
      </div>

      <div className="rv card-clean mx-auto mb-8 max-w-3xl rounded-2xl p-4 text-center">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]">
          Processors powering India · {family === "xeon-vds" ? "Intel® Xeon® VDS" : "AMD EPYC™ VDS"}
        </div>
        <div className="mt-2.5 flex flex-wrap justify-center gap-2">
          {VDS_CPUS[family].map((m) => (
            <span key={m} className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-semibold">
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p: any) => (
          <div key={p.id} className="rv card-clean flex flex-col justify-between rounded-3xl p-6">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{p.name}</h2>
                {p.popular && <span className="btn-lime rounded-full px-2.5 py-0.5 text-[11px] font-bold">Popular</span>}
              </div>
              <p className="text-xs text-[var(--muted)]">{p.location}</p>
              <div className="mt-4 text-3xl font-extrabold">
                {formatPrice(p.price)}<span className="text-xs font-normal text-[var(--muted)]">/month</span>
              </div>
              <hr className="my-4 border-[var(--border)]" />
              <ul className="space-y-2.5 text-xs text-[var(--muted)]">
                <li className="flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.vCores}</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.ram}</li>
                <li className="flex items-center gap-2"><HardDrive className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.storage}</li>
                <li className="flex items-center gap-2"><Network className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.bandwidth}</li>
              </ul>
            </div>
            <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-6 block rounded-xl py-2.5 text-center text-xs font-bold">
              Order on Discord ↗
            </a>
          </div>
        ))}
      </div>

      <InfrastructureGrid variant="vds" />
      <ComparisonMatrix />
      <CtaBanner />
    </div>
  );
}
