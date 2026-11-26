"use client";

import React from "react";
import { Check, Cpu, HardDrive, Network } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";

export default function RdpPage() {
  const { formatPrice } = useCurrency();
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
          Windows Server · Full Admin Access
        </span>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
          Windows <span className="text-emerald-400">RDP Hosting</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
          24/7 Windows Remote Desktop servers in India with DDR4 ECC memory, NVMe SSD storage, and 1 Gbps unmetered bandwidth.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {catalog.rdpPlans.map((p) => (
          <div key={p.id} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121a24] p-6">
            <div>
              <h2 className="text-lg font-bold text-white">{p.name}</h2>
              <p className="text-xs text-slate-400">{p.location}</p>
              <div className="mt-4 text-3xl font-extrabold text-white">
                {formatPrice(p.price)}<span className="text-xs font-normal text-slate-400">/month</span>
              </div>
              <ul className="mt-5 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-emerald-400" /> {p.vCores} Intel Xeon vCores</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400" /> {p.ram}</li>
                <li className="flex items-center gap-2"><HardDrive className="h-3.5 w-3.5 text-emerald-400" /> {p.storage}</li>
                <li className="flex items-center gap-2"><Network className="h-3.5 w-3.5 text-emerald-400" /> {p.bandwidth}</li>
              </ul>
            </div>
            <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="mt-6 block rounded-xl bg-emerald-500 py-2.5 text-center text-xs font-bold text-slate-950 hover:bg-emerald-400">
              Order on Discord
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
