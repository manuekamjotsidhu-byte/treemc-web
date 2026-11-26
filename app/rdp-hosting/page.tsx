"use client";

import React from "react";
import { Check, Cpu, HardDrive, Network } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import { ComparisonMatrix, CtaBanner, InfrastructureGrid } from "../../src/components/ServiceDetails";

export default function RdpPage() {
  const { formatPrice } = useCurrency();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1 text-xs font-semibold text-[var(--muted)]">
          Windows Server · Full Admin Access
        </span>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">
          Windows <span className="serif-it font-normal">RDP Hosting</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)]">
          24/7 Windows Remote Desktop servers in India with DDR4 ECC memory, NVMe SSD storage, and 1 Gbps unmetered bandwidth.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {catalog.rdpPlans.map((p) => (
          <div key={p.id} className="card-clean flex flex-col justify-between rounded-3xl p-6">
            <div>
              <h2 className="text-lg font-bold">{p.name}</h2>
              <p className="text-xs text-[var(--muted)]">{p.location}</p>
              <div className="mt-4 text-3xl font-extrabold">
                {formatPrice(p.price)}<span className="text-xs font-normal text-[var(--muted)]">/month</span>
              </div>
              <hr className="my-4 border-[var(--border)]" />
              <ul className="space-y-2 text-xs text-[var(--muted)]">
                <li className="flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.vCores} Intel Xeon vCores</li>
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
      <InfrastructureGrid variant="rdp" />
      <ComparisonMatrix />
      <CtaBanner />
    </div>
  );
}
