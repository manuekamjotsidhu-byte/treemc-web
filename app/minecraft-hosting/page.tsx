"use client";

import React, { useState } from "react";
import { Check, Cpu, HardDrive, ShieldCheck } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import { CtaBanner, FaqSection, InfrastructureGrid } from "../../src/components/ServiceDetails";

const MC_FAQ = [
  { q: "Does TreeMC support both Java Edition and Bedrock / GeyserMC?", a: "Yes! You can run Paper, Purpur, Spigot, Fabric, Forge, Velocity, Bedrock Dedicated Server, or Java + Bedrock crossplay via GeyserMC & Floodgate." },
  { q: "What is the difference between Budget (DDR4) and Performance (DDR5)?", a: "Budget plans (Sprout–Titan Oak) use Intel Xeon + DDR4 ECC RAM for affordable SMPs, while Performance plans (Ember–Titan) use AMD EPYC + high-speed DDR5 RAM for modded/high-player servers." },
  { q: "Are automated backups and SFTP included?", a: "Yes, every plan includes automated backups, full SFTP access, sub-user permissions, and one-click modpack/plugin installation in our Pterodactyl panel." },
];

export default function MinecraftPage() {
  const { formatPrice } = useCurrency();
  const [region, setRegion] = useState<"India" | "Dubai">("India");
  const [tier, setTier] = useState<"budget" | "performance">("budget");

  const plans = tier === "budget" ? catalog.mcBudget : catalog.mcPerf;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1 text-xs font-semibold text-[var(--muted)]">
          Java &amp; Bedrock · Instant Pterodactyl Panel
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
          Minecraft hosting <span className="serif-it font-normal">worldwide</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--muted)] sm:text-base">
          Low-latency Java &amp; Bedrock servers in India and Dubai with automated backups, NVMe SSDs, and DDoS protection.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <div className="card-clean inline-flex rounded-2xl p-1">
          {(["India", "Dubai"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                region === r ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950" : "text-[var(--muted)]"
              }`}
            >
              <img src={r === "India" ? "/flags/india.png" : "/flags/dubai.png"} alt={r} className="h-4 w-6 rounded object-cover" />
              {r === "India" ? "India (Noida / Delhi)" : "Dubai (UAE)"}
            </button>
          ))}
        </div>

        <div className="card-clean inline-flex rounded-2xl p-1">
          <button
            type="button"
            onClick={() => setTier("budget")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              tier === "budget" ? "btn-lime" : "text-[var(--muted)]"
            }`}
          >
            Budget (DDR4)
          </button>
          <button
            type="button"
            onClick={() => setTier("performance")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              tier === "performance" ? "btn-lime" : "text-[var(--muted)]"
            }`}
          >
            Performance (DDR5)
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => (
          <div key={p.id} className="card-clean flex flex-col justify-between rounded-3xl p-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{p.name}</h3>
                {p.popular && <span className="btn-lime rounded-full px-2.5 py-0.5 text-[11px] font-bold">Popular</span>}
              </div>
              <p className="mt-1 text-xs text-[var(--muted)]">{region} · {tier === "budget" ? "DDR4 ECC" : "DDR5 High-Speed"}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold">{formatPrice(p.price)}</span>
                <span className="text-xs text-[var(--muted)]">/month</span>
              </div>
              <hr className="my-4 border-[var(--border)]" />
              <ul className="space-y-2 text-xs text-[var(--muted)]">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.ram} RAM</li>
                <li className="flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.cpu}</li>
                <li className="flex items-center gap-2"><HardDrive className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.nvme}</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.backups} Automated Backups</li>
              </ul>
            </div>
            <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-5 block w-full rounded-xl py-2.5 text-center text-xs font-bold">
              Order on Discord ↗
            </a>
          </div>
        ))}
      </div>

      <InfrastructureGrid variant="minecraft" />
      <FaqSection items={MC_FAQ} title="Minecraft Hosting FAQ" />
      <CtaBanner />
    </div>
  );
}
