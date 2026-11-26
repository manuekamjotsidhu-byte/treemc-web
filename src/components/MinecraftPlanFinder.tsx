"use client";

import React, { useMemo, useState } from "react";
import { Check, Cpu, HardDrive, ShieldCheck, Sliders, Users } from "lucide-react";
import catalog from "../data/catalog.json";
import { useCurrency } from "../context/CurrencyContext";

type Workload = "vanilla" | "plugins" | "mods";

const WORKLOADS: { id: Workload; label: string; desc: string }[] = [
  { id: "vanilla", label: "Vanilla / Survival", desc: "Pure Java or Bedrock SMP" },
  { id: "plugins", label: "Plugins & Networks", desc: "Paper / Purpur, ranks & economy" },
  { id: "mods", label: "Modpacks & Mods", desc: "Forge / Fabric & heavy packs" },
];

function parseRamGB(ramStr: string): number {
  const m = ramStr.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 2;
}

export default function MinecraftPlanFinder({ region = "India" }: { region?: "India" | "Dubai" }) {
  const { formatPrice } = useCurrency();
  const [players, setPlayers] = useState(10);
  const [workload, setWorkload] = useState<Workload>("vanilla");
  const [selectedRegion, setSelectedRegion] = useState<"India" | "Dubai">(region);

  const recommendedRam = useMemo(() => {
    if (workload === "vanilla") return Math.min(32, Math.max(2, Math.ceil(1.5 + players * 0.25)));
    if (workload === "plugins") return Math.min(32, Math.max(3, Math.ceil(2.5 + players * 0.4)));
    return Math.min(32, Math.max(4, Math.ceil(3.5 + players * 0.55)));
  }, [players, workload]);

  const xeonMatch = useMemo(() => {
    const sorted = [...catalog.mcBudget].sort((a, b) => parseRamGB(a.ram) - parseRamGB(b.ram));
    return sorted.find((p) => parseRamGB(p.ram) >= recommendedRam) || sorted[sorted.length - 1];
  }, [recommendedRam]);

  const epycMatch = useMemo(() => {
    const sorted = [...catalog.mcPerf].sort((a, b) => parseRamGB(a.ram) - parseRamGB(b.ram));
    return sorted.find((p) => parseRamGB(p.ram) >= recommendedRam) || sorted[sorted.length - 1];
  }, [recommendedRam]);

  const options = [
    {
      tier: "Intel® Xeon®",
      img: "/cpu/intel.png",
      subtitle: `${selectedRegion} · Java & Bedrock`,
      plan: xeonMatch,
      recommended: workload !== "mods",
    },
    {
      tier: "AMD EPYC™",
      img: "/cpu/epyc.png",
      subtitle: `${selectedRegion} · High-Clock`,
      plan: epycMatch,
      recommended: workload === "mods",
    },
  ];

  return (
    <div className="rv card-clean mt-14 rounded-3xl p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Sliders className="h-3.5 w-3.5" /> Minecraft Plan Finder
          </span>
          <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">
            How many <span className="serif-it font-normal text-3xl sm:text-4xl">players</span> are joining?
          </h2>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Adjust concurrent players and server type to match the right Intel® Xeon® or AMD EPYC™ plan.
          </p>
        </div>

        <div className="inline-flex rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-1">
          {(["India", "Dubai"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setSelectedRegion(r)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                selectedRegion === r
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              <img src={r === "India" ? "/flags/india.png" : "/flags/dubai.png"} alt={r} className="h-3.5 w-5 rounded-sm object-cover" />
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Controls */}
        <div className="space-y-6 lg:col-span-5">
          <div>
            <div className="mb-2 flex items-center justify-between text-sm font-medium">
              <span className="inline-flex items-center gap-1.5 text-[var(--muted)]">
                <Users className="h-4 w-4" /> Concurrent Players
              </span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-0.5 text-xs font-extrabold">
                {players} {players === 1 ? "player" : "players"}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={60}
              step={1}
              value={players}
              onChange={(e) => setPlayers(Number(e.target.value))}
              aria-label="Number of concurrent players"
              className="w-full accent-slate-900 dark:accent-lime-400 cursor-pointer"
            />
            <div className="mt-1 flex justify-between text-[11px] text-[var(--muted)]">
              <span>1</span>
              <span>15</span>
              <span>30</span>
              <span>45</span>
              <span>60+</span>
            </div>
          </div>

          <div>
            <label className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              Server Workload
            </label>
            <div className="space-y-2.5">
              {WORKLOADS.map((w) => {
                const active = workload === w.id;
                return (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setWorkload(w.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border p-3.5 text-left transition ${
                      active
                        ? "border-slate-900 bg-slate-900/5 dark:border-lime-400/60 dark:bg-lime-400/10"
                        : "border-[var(--border)] bg-[var(--bg)] hover:border-slate-400/40"
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold">{w.label}</div>
                      <div className="text-xs text-[var(--muted)]">{w.desc}</div>
                    </div>
                    <span
                      className={`h-4 w-4 shrink-0 rounded-full border-2 ${
                        active
                          ? "border-slate-900 bg-slate-900 dark:border-lime-400 dark:bg-lime-400"
                          : "border-[var(--muted)]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-xs text-[var(--muted)]">
            Estimated memory needed:{" "}
            <span className="font-extrabold text-[var(--ink)]">{recommendedRam} GB+ RAM</span>
          </div>
        </div>

        {/* Matched Plans */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {options.map((opt) => (
            <div
              key={opt.tier}
              className={`flex flex-col justify-between rounded-2xl border p-5 transition ${
                opt.recommended
                  ? "border-emerald-500/50 bg-[var(--bg)] shadow-sm"
                  : "border-[var(--border)] bg-[var(--bg)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 text-xs font-bold">
                    <img src={opt.img} alt={opt.tier} className="h-4 w-4 rounded-sm object-contain" />
                    {opt.tier}
                  </span>
                  {opt.recommended && (
                    <span className="btn-lime rounded-full px-2.5 py-0.5 text-[10px] font-bold">
                      Best Match
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-xl font-extrabold">{opt.plan.name}</h3>
                <p className="text-xs text-[var(--muted)]">{opt.subtitle}</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">{formatPrice(opt.plan.price)}</span>
                  <span className="text-xs text-[var(--muted)]">/month</span>
                </div>

                <hr className="my-4 border-[var(--border)]" />

                <ul className="space-y-2 text-xs text-[var(--muted)]">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{opt.plan.ram} RAM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Cpu className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{opt.plan.cpu}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HardDrive className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{opt.plan.nvme}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{opt.plan.backups} Automated Backups + DDoS</span>
                  </li>
                </ul>
              </div>

              <a
                href={catalog.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime mt-5 block w-full rounded-xl py-2.5 text-center text-xs font-bold transition"
              >
                Order {opt.plan.name} ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
