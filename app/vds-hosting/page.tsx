"use client";

import React from "react";
import { Check, Cpu, HardDrive } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import { ComparisonMatrix, CtaBanner, InfrastructureGrid } from "../../src/components/ServiceDetails";

export default function VdsHostingPage() {
  const { formatPrice } = useCurrency();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1 text-xs font-semibold text-[var(--muted)]">
          Dedicated CPU Slices · India
        </span>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">
          India <span className="serif-it font-normal">Virtual Dedicated</span> Servers
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)]">
          100% dedicated CPU cores with DDR4 ECC RAM and Enterprise NVMe in Noida &amp; Delhi.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {catalog.vdsPlans.map((p) => (
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
