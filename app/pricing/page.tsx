"use client";

import React, { useState } from "react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import VpsExplorer from "../../src/components/VpsExplorer";

type Tab = "vps" | "minecraft" | "rdp" | "bot" | "web" | "vds";

export default function PricingPage() {
  const { formatPrice } = useCurrency();
  const [tab, setTab] = useState<Tab>("vps");
  const [vdsFamily, setVdsFamily] = useState<"xeon-vds" | "epyc-vds">("xeon-vds");

  const tabs: { id: Tab; label: string }[] = [
    { id: "vps", label: "Cloud VPS" },
    { id: "minecraft", label: "Minecraft" },
    { id: "rdp", label: "Windows RDP" },
    { id: "bot", label: "Bot Hosting" },
    { id: "web", label: "Web Hosting" },
    { id: "vds", label: "India VDS" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Pricing</span>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">
          Simple and <span className="serif-it font-normal">honest</span> pricing
        </h1>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === t.id
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "vps" && <VpsExplorer />}

      {tab === "minecraft" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {catalog.mcBudget.concat(catalog.mcPerf).map((p) => (
            <div key={p.id} className="rv card-clean flex flex-col justify-between rounded-3xl p-5">
              <div>
                <h3 className="text-base font-bold">{p.name}</h3>
                <div className="mt-3 text-2xl font-extrabold">{formatPrice(p.price)}<span className="text-xs font-normal text-[var(--muted)]">/mo</span></div>
                <p className="mt-2 text-xs text-[var(--muted)]">{p.ram} · {p.cpu} · {p.nvme}</p>
              </div>
              <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-5 block rounded-xl py-2 text-center text-xs font-bold">Order on Discord ↗</a>
            </div>
          ))}
        </div>
      )}

      {tab === "rdp" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.rdpPlans.map((p) => (
            <div key={p.id} className="rv card-clean flex flex-col justify-between rounded-3xl p-6">
              <div>
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="text-xs text-[var(--muted)]">{p.location}</p>
                <div className="mt-3 text-3xl font-extrabold">{formatPrice(p.price)}<span className="text-xs font-normal text-[var(--muted)]">/mo</span></div>
                <p className="mt-3 text-xs text-[var(--muted)]">{p.vCores} vCores · {p.ram} · {p.storage}</p>
              </div>
              <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-5 block rounded-xl py-2.5 text-center text-xs font-bold">Order on Discord ↗</a>
            </div>
          ))}
        </div>
      )}

      {tab === "bot" && (
        <div className="grid gap-5 sm:grid-cols-3">
          {catalog.botPlans.map((p) => (
            <div key={p.id} className="rv card-clean flex flex-col justify-between rounded-3xl p-6">
              <div>
                <h3 className="text-lg font-bold">{p.name}</h3>
                <div className="mt-3 text-3xl font-extrabold">{formatPrice(p.price)}<span className="text-xs font-normal text-[var(--muted)]">/mo</span></div>
                <p className="mt-3 text-xs text-[var(--muted)]">{p.cpu} · {p.ram} · {p.storage}</p>
                <p className="mt-1 text-xs font-medium">{p.runtime}</p>
              </div>
              <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-5 block rounded-xl py-2.5 text-center text-xs font-bold">Order on Discord ↗</a>
            </div>
          ))}
        </div>
      )}

      {tab === "web" && (
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          {catalog.webPlans.map((p) => (
            <div key={p.id} className="rv card-clean flex flex-col justify-between rounded-3xl p-6">
              <div>
                <h3 className="text-lg font-bold">{p.name}</h3>
                <div className="mt-3 text-3xl font-extrabold">{formatPrice(p.price)}<span className="text-xs font-normal text-[var(--muted)]">/mo</span></div>
                <p className="mt-3 text-xs text-[var(--muted)]">{p.storage} · {p.domains} · {p.ssl}</p>
              </div>
              <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-5 block rounded-xl py-2.5 text-center text-xs font-bold">Order on Discord ↗</a>
            </div>
          ))}
        </div>
      )}

      {tab === "vds" && (
        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="card-clean inline-flex rounded-2xl p-1">
              <button
                type="button"
                onClick={() => setVdsFamily("xeon-vds")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  vdsFamily === "xeon-vds" ? "btn-lime" : "text-[var(--muted)]"
                }`}
              >
                <img src="/cpu/intel.png" alt="Intel Xeon" className="h-4 w-4 rounded-sm object-contain" />
                Intel® Xeon® VDS
              </button>
              <button
                type="button"
                onClick={() => setVdsFamily("epyc-vds")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  vdsFamily === "epyc-vds" ? "btn-lime" : "text-[var(--muted)]"
                }`}
              >
                <img src="/cpu/epyc.png" alt="AMD EPYC" className="h-4 w-4 rounded-sm object-contain" />
                AMD EPYC™ VDS
              </button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {catalog.vdsPlans
              .filter((p: any) => p.family === vdsFamily)
              .map((p: any) => (
                <div key={p.id} className="rv card-clean flex flex-col justify-between rounded-3xl p-6">
                  <div>
                    <h3 className="text-lg font-bold">{p.name}</h3>
                    <p className="text-xs text-[var(--muted)]">{p.location}</p>
                    <div className="mt-3 text-3xl font-extrabold">{formatPrice(p.price)}<span className="text-xs font-normal text-[var(--muted)]">/mo</span></div>
                    <p className="mt-3 text-xs text-[var(--muted)]">{p.vCores} · {p.ram} · {p.storage}</p>
                  </div>
                  <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-5 block rounded-xl py-2.5 text-center text-xs font-bold">Order on Discord ↗</a>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
