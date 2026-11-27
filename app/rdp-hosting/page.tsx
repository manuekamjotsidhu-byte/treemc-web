"use client";

import React from "react";
import { Check, Cpu, HardDrive, Network } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import { ComparisonMatrix, CtaBanner, InfrastructureGrid } from "../../src/components/ServiceDetails";
import ServiceHeroBanner from "../../src/components/ServiceHeroBanner";

export default function RdpPage() {
  const { formatPrice } = useCurrency();
  return (
    <div>
      <ServiceHeroBanner
        badge="Windows Server · Full Admin Access"
        title={<>Windows <span className="serif-it font-normal">RDP Hosting</span></>}
        subtitle="24/7 Windows Remote Desktop servers in India with ECC memory, NVMe SSD storage, and 1 Gbps unmetered bandwidth."
        image="/images/rdp-service.jpg"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rv card-clean mx-auto mb-8 max-w-3xl rounded-2xl p-4 text-center">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]">
            Processors powering India Windows RDP
          </div>
          <div className="mt-2.5 flex flex-wrap justify-center gap-2">
            {["Intel® Xeon® E5-2673 v4", "Intel® Xeon® E5-2682 v4", "Intel® Xeon® Platinum 8168", "Intel® Xeon® Platinum 8269CY"].map((m) => (
              <span key={m} className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-semibold">
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.rdpPlans.map((p) => (
            <div key={p.id} className="rv card-clean flex flex-col justify-between rounded-3xl p-6">
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
              <a href={catalog.billingUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-6 block rounded-xl py-2.5 text-center text-xs font-bold">
                Order Now ↗
              </a>
            </div>
          ))}
        </div>
        <InfrastructureGrid variant="rdp" />
        <ComparisonMatrix />
        <CtaBanner />
      </div>
    </div>
  );
}
