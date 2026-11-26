"use client";

import React from "react";
import { Check, Globe, HardDrive, ShieldCheck } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";

export default function WebHostingPage() {
  const { formatPrice } = useCurrency();
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
          cPanel · Free AutoSSL
        </span>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
          Fast <span className="text-emerald-400">Web Hosting</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
          Reliable NVMe cPanel hosting with 1-click WordPress &amp; Softaculous installer and free SSL certificates.
        </p>
      </div>

      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {catalog.webPlans.map((p) => (
          <div key={p.id} className={`flex flex-col justify-between rounded-2xl border p-6 ${p.popular ? "border-emerald-400/60 bg-[#14202b]" : "border-white/10 bg-[#121a24]"}`}>
            <div>
              <h2 className="text-xl font-bold text-white">{p.name}</h2>
              <div className="mt-4 text-3xl font-extrabold text-white">
                {formatPrice(p.price)}<span className="text-xs font-normal text-slate-400">/month</span>
              </div>
              <ul className="mt-5 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><HardDrive className="h-3.5 w-3.5 text-emerald-400" /> {p.storage}</li>
                <li className="flex items-center gap-2"><Globe className="h-3.5 w-3.5 text-emerald-400" /> {p.domains}</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> {p.ssl}</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400" /> {p.panel}</li>
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
