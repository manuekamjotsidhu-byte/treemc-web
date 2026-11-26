"use client";

import React, { useState } from "react";
import { Check, Cpu, HardDrive, ShieldCheck } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";

export default function MinecraftPage() {
  const { formatPrice } = useCurrency();
  const [region, setRegion] = useState<"India" | "Dubai">("India");
  const [tier, setTier] = useState<"budget" | "performance">("budget");

  const plans = tier === "budget" ? catalog.mcBudget : catalog.mcPerf;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
          Java &amp; Bedrock · Instant Pterodactyl Panel
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Minecraft hosting <span className="text-emerald-400">worldwide</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          Low-latency Java &amp; Bedrock Minecraft servers in India and Dubai with automated backups, NVMe SSDs, and DDoS protection.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="inline-flex rounded-xl border border-white/10 bg-[#121a24] p-1">
          {(["India", "Dubai"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                region === r ? "bg-emerald-500 text-slate-950" : "text-slate-300 hover:text-white"
              }`}
            >
              <img src={r === "India" ? "/flags/india.png" : "/flags/dubai.png"} alt={r} className="h-4 w-6 rounded object-cover" />
              {r === "India" ? "India (Noida / Delhi)" : "Dubai (UAE)"}
            </button>
          ))}
        </div>

        <div className="inline-flex rounded-xl border border-white/10 bg-[#121a24] p-1">
          <button
            type="button"
            onClick={() => setTier("budget")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tier === "budget" ? "bg-white text-slate-950" : "text-slate-300 hover:text-white"
            }`}
          >
            Budget (Intel Xeon · DDR4)
          </button>
          <button
            type="button"
            onClick={() => setTier("performance")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tier === "performance" ? "bg-white text-slate-950" : "text-slate-300 hover:text-white"
            }`}
          >
            Performance (AMD EPYC · DDR5)
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => (
          <div
            key={p.id}
            className={`flex flex-col justify-between rounded-2xl border p-5 ${
              p.popular ? "border-emerald-400/60 bg-[#14202b]" : "border-white/10 bg-[#121a24]"
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                {p.popular && (
                  <span className="rounded-md bg-emerald-500 px-2 py-0.5 text-[11px] font-bold text-slate-950">Popular</span>
                )}
              </div>
              <p className="mt-1 text-xs text-slate-400">{region} · {tier === "budget" ? "DDR4 ECC" : "DDR5 High-Speed"}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white">{formatPrice(p.price)}</span>
                <span className="text-xs text-slate-400">/month</span>
              </div>

              <ul className="mt-5 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400" /> {p.ram} RAM</li>
                <li className="flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-emerald-400" /> {p.cpu}</li>
                <li className="flex items-center gap-2"><HardDrive className="h-3.5 w-3.5 text-emerald-400" /> {p.nvme}</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> {p.backups} Automated Backups</li>
              </ul>
            </div>

            <a
              href={catalog.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block w-full rounded-xl bg-emerald-500 py-2.5 text-center text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
            >
              Order on Discord
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
