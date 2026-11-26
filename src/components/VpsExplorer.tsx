"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Check, Cpu, HardDrive, Network, ShieldCheck } from "lucide-react";
import catalog from "../data/catalog.json";
import { useCurrency } from "../context/CurrencyContext";

interface VpsPlan {
  id: string;
  name: string;
  category: string;
  location: string;
  processorFamily: string;
  cpuModels: { id: string; name: string }[];
  vCores: number;
  ram: string;
  ramGB: number;
  storage: string;
  storageType: string;
  memoryType: string;
  bandwidth: string;
  protection: string;
  expectedSellingPrice: number;
}

const LOCATIONS = [
  { id: "India", label: "India (Noida / Delhi)", flag: "/flags/india.png" },
  { id: "Germany", label: "Germany (Frankfurt)", flag: "/flags/germany.png" },
  { id: "Singapore", label: "Singapore", flag: "/flags/singapore.png" },
  { id: "USA", label: "USA", flag: "/flags/usa.png" },
  { id: "Canada", label: "Canada", flag: "/flags/canada.png" },
];

export default function VpsExplorer() {
  const { formatPrice } = useCurrency();
  const plans = catalog.vpsPlans as VpsPlan[];

  const [location, setLocation] = useState("India");
  const availableFamilies = useMemo(() => {
    return Array.from(new Set(plans.filter((p) => p.location === location).map((p) => p.processorFamily)));
  }, [plans, location]);

  const [selectedFamily, setSelectedFamily] = useState("Intel® Xeon® Standard");
  const activeFamily = availableFamilies.includes(selectedFamily) ? selectedFamily : availableFamilies[0];

  const visiblePlans = useMemo(
    () => plans.filter((p) => p.location === location && p.processorFamily === activeFamily),
    [plans, location, activeFamily]
  );

  const [calcLoc, setCalcLoc] = useState("India");
  const [calcRam, setCalcRam] = useState(6);
  const [calcCores, setCalcCores] = useState(2);
  const calcAvailableCpus = useMemo(() => {
    const fams = Array.from(new Set(plans.filter((p) => p.location === calcLoc).map((p) => p.processorFamily)));
    return ["All CPUs", ...fams];
  }, [plans, calcLoc]);
  const [calcCpu, setCalcCpu] = useState("All CPUs");
  const activeCalcCpu = calcAvailableCpus.includes(calcCpu) ? calcCpu : "All CPUs";

  const calcMatch = useMemo(() => {
    return plans
      .filter(
        (p) =>
          p.location === calcLoc &&
          (activeCalcCpu === "All CPUs" || p.processorFamily === activeCalcCpu) &&
          p.ramGB >= calcRam &&
          p.vCores >= calcCores
      )
      .sort((a, b) => a.expectedSellingPrice - b.expectedSellingPrice)[0];
  }, [plans, calcLoc, activeCalcCpu, calcRam, calcCores]);

  const activeFlag = LOCATIONS.find((l) => l.id === location)?.flag || "/flags/india.png";
  const calcFlag = LOCATIONS.find((l) => l.id === calcLoc)?.flag || "/flags/india.png";

  return (
    <div className="space-y-16">
      <div>
        <div className="card-clean mx-auto mb-6 flex max-w-sm items-center gap-3 rounded-2xl px-4 py-2.5">
          <img src={activeFlag} alt={`${location} flag`} className="h-4 w-6 rounded object-cover shrink-0" />
          <select
            aria-label="Select VPS location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold outline-none cursor-pointer"
          >
            {LOCATIONS.map((l) => (
              <option key={l.id} value={l.id} className="bg-[var(--surface)] text-[var(--ink)]">
                {l.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {availableFamilies.map((fam) => {
            const active = fam === activeFamily;
            return (
              <button
                key={fam}
                type="button"
                onClick={() => setSelectedFamily(fam)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-950"
                    : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {fam}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visiblePlans.map((plan) => (
            <div key={plan.id} className="card-clean flex flex-col justify-between rounded-3xl p-6 transition hover:-translate-y-0.5">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold">{plan.name}</h3>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--muted)]">
                    {plan.location}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[var(--muted)]">{plan.processorFamily}</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold tracking-tight">{formatPrice(plan.expectedSellingPrice)}</span>
                  <span className="text-xs text-[var(--muted)]">/month</span>
                </div>

                <hr className="my-4 border-[var(--border)]" />

                <ul className="space-y-2 text-xs text-[var(--muted)]">
                  <li className="flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" /><span>{plan.vCores} vCores</span></li>
                  <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" /><span>{plan.ram} {plan.memoryType}</span></li>
                  <li className="flex items-center gap-2"><HardDrive className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" /><span>{plan.storage} {plan.storageType}</span></li>
                  <li className="flex items-center gap-2"><Network className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" /><span>{plan.bandwidth}</span></li>
                  <li className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" /><span>{plan.protection}</span></li>
                </ul>

                {plan.cpuModels?.length > 0 && (
                  <p className="mt-3 border-t border-[var(--border)] pt-2.5 text-[11px] leading-relaxed text-[var(--muted)]">
                    {plan.cpuModels.map((m) => m.name).join(" / ")}
                  </p>
                )}
              </div>

              <a
                href={catalog.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime mt-5 block w-full rounded-xl py-2.5 text-center text-xs font-bold transition"
              >
                Order on Discord ↗
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--muted)]">
          Check the{" "}
          <Link href="/refund-policy" className="font-semibold text-[var(--ink)] underline">
            refund policy
          </Link>{" "}
          for eligibility.
        </p>
      </div>

      {/* Find Your VPS Configurator */}
      <div className="card-clean rounded-3xl p-6 sm:p-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Configurator</span>
          <h2 className="mt-1 text-2xl font-extrabold">
            Find your <span className="serif-it text-3xl">VPS</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <div>
              <div className="mb-1.5 flex justify-between text-sm font-medium">
                <span className="text-[var(--muted)]">RAM</span>
                <span className="font-bold">{calcRam} GB</span>
              </div>
              <input type="range" min={4} max={64} step={2} value={calcRam} onChange={(e) => setCalcRam(Number(e.target.value))} className="w-full accent-slate-900 dark:accent-lime-400" />
            </div>

            <div>
              <div className="mb-1.5 flex justify-between text-sm font-medium">
                <span className="text-[var(--muted)]">CPU vCores</span>
                <span className="font-bold">{calcCores}</span>
              </div>
              <input type="range" min={1} max={16} step={1} value={calcCores} onChange={(e) => setCalcCores(Number(e.target.value))} className="w-full accent-slate-900 dark:accent-lime-400" />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Location</label>
              <div className="card-clean flex items-center gap-3 rounded-2xl px-3.5 py-2.5">
                <img src={calcFlag} alt={`${calcLoc} flag`} className="h-4 w-6 rounded object-cover shrink-0" />
                <select
                  aria-label="Calculator VPS location"
                  value={calcLoc}
                  onChange={(e) => setCalcLoc(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold outline-none cursor-pointer"
                >
                  {LOCATIONS.map((l) => (
                    <option key={l.id} value={l.id} className="bg-[var(--surface)] text-[var(--ink)]">
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Processor</label>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                {calcAvailableCpus.map((c) => {
                  const active = c === activeCalcCpu;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCalcCpu(c)}
                      className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                        active
                          ? "btn-lime shadow-sm"
                          : "border border-[var(--border)] bg-[var(--bg)] text-[var(--muted)] hover:text-[var(--ink)]"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 lg:col-span-5">
            {calcMatch ? (
              <div>
                <p className="text-xs font-semibold text-[var(--muted)]">{calcMatch.location} · {calcMatch.processorFamily}</p>
                <h3 className="mt-1 text-2xl font-extrabold">{calcMatch.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{calcMatch.vCores} vCores · {calcMatch.ram} · {calcMatch.storage}</p>
                <div className="mt-5 text-3xl font-extrabold">
                  {formatPrice(calcMatch.expectedSellingPrice)}
                  <span className="text-sm font-normal text-[var(--muted)]">/month</span>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-xs font-semibold text-[var(--muted)]">{calcLoc}</p>
                <h3 className="mt-1 text-2xl font-extrabold">Custom Plan</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">Contact us on Discord for custom sizing.</p>
              </div>
            )}

            <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-6 block w-full rounded-xl py-3 text-center text-sm font-bold">
              Order on Discord ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
