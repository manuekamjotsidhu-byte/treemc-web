"use client";

import React, { useState } from "react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import VpsExplorer from "../../src/components/VpsExplorer";

type Tab = "vps" | "minecraft" | "rdp" | "bot" | "web" | "vds";

export default function PricingPage() {
  const { formatPrice } = useCurrency();
  const [tab, setTab] = useState<Tab>("vps");

  const tabs: { id: Tab; label: string }[] = [
    { id: "vps", label: "Cloud VPS" },
    { id: "minecraft", label: "Minecraft" },
    { id: "rdp", label: "Windows RDP" },
    { id: "bot", label: "Bot Hosting" },
    { id: "web", label: "Web Hosting" },
    { id: "vds", label: "India VDS" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Transparent Pricing</span>
        <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">All TreeMC Plans</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
          Switch currencies anytime in the top bar — live rates update every plan instantly.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              tab === t.id
                ? "bg-emerald-500 text-slate-950"
                : "border border-white/10 bg-[#121a24] text-slate-300 hover:border-white/25 hover:text-white"
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
            <div key={p.id} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121a24] p-5">
              <div>
                <h3 className="text-base font-bold text-white">{p.name}</h3>
                <div className="mt-3 text-2xl font-extrabold text-white">
                  {formatPrice(p.price)}<span className="text-xs font-normal text-slate-400">/mo</span>
                </div>
                <p className="mt-2 text-xs text-slate-300">{p.ram} · {p.cpu} · {p.nvme}</p>
              </div>
              <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-xl bg-emerald-500 py-2 text-center text-xs font-bold text-slate-950">
                Order on Discord
              </a>
            </div>
          ))}
        </div>
      )}

      {tab === "rdp" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.rdpPlans.map((p) => (
            <div key={p.id} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121a24] p-6">
              <div>
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <p className="text-xs text-slate-400">{p.location}</p>
                <div className="mt-3 text-3xl font-extrabold text-white">
                  {formatPrice(p.price)}<span className="text-xs font-normal text-slate-400">/mo</span>
                </div>
                <p className="mt-3 text-xs text-slate-300">{p.vCores} vCores · {p.ram} · {p.storage}</p>
              </div>
              <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-xl bg-emerald-500 py-2.5 text-center text-xs font-bold text-slate-950">
                Order on Discord
              </a>
            </div>
          ))}
        </div>
      )}

      {tab === "bot" && (
        <div className="grid gap-5 sm:grid-cols-3">
          {catalog.botPlans.map((p) => (
            <div key={p.id} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121a24] p-6">
              <div>
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <div className="mt-3 text-3xl font-extrabold text-white">
                  {formatPrice(p.price)}<span className="text-xs font-normal text-slate-400">/mo</span>
                </div>
                <p className="mt-3 text-xs text-slate-300">{p.cpu} · {p.ram} · {p.storage}</p>
                <p className="mt-1 text-xs text-emerald-400">{p.runtime}</p>
              </div>
              <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-xl bg-emerald-500 py-2.5 text-center text-xs font-bold text-slate-950">
                Order on Discord
              </a>
            </div>
          ))}
        </div>
      )}

      {tab === "web" && (
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          {catalog.webPlans.map((p) => (
            <div key={p.id} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121a24] p-6">
              <div>
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <div className="mt-3 text-3xl font-extrabold text-white">
                  {formatPrice(p.price)}<span className="text-xs font-normal text-slate-400">/mo</span>
                </div>
                <p className="mt-3 text-xs text-slate-300">{p.storage} · {p.domains} · {p.ssl}</p>
              </div>
              <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-xl bg-emerald-500 py-2.5 text-center text-xs font-bold text-slate-950">
                Order on Discord
              </a>
            </div>
          ))}
        </div>
      )}

      {tab === "vds" && (
        <div className="grid gap-5 sm:grid-cols-3">
          {catalog.vdsPlans.map((p) => (
            <div key={p.id} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121a24] p-6">
              <div>
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <p className="text-xs text-slate-400">{p.location}</p>
                <div className="mt-3 text-3xl font-extrabold text-white">
                  {formatPrice(p.price)}<span className="text-xs font-normal text-slate-400">/mo</span>
                </div>
                <p className="mt-3 text-xs text-slate-300">{p.vCores} · {p.ram} · {p.storage}</p>
              </div>
              <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-xl bg-emerald-500 py-2.5 text-center text-xs font-bold text-slate-950">
                Order on Discord
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
