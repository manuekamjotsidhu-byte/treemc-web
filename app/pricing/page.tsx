"use client";

import React, { useState } from "react";
import { Check, Cpu, Globe, HardDrive, Network, ShieldCheck, Terminal } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import VpsExplorer, { VpsConfigurator } from "../../src/components/VpsExplorer";
import MinecraftPlanFinder from "../../src/components/MinecraftPlanFinder";

type Tab = "vps" | "minecraft" | "rdp" | "bot" | "web" | "vds" | "calculator";

interface SpecItem {
  icon: "cpu" | "ram" | "storage" | "network" | "shield" | "globe" | "runtime";
  text: string;
}

function SpecIcon({ type }: { type: SpecItem["icon"] }) {
  const cls = "h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0";
  switch (type) {
    case "cpu":
      return <Cpu className={cls} />;
    case "storage":
      return <HardDrive className={cls} />;
    case "network":
      return <Network className={cls} />;
    case "shield":
      return <ShieldCheck className={cls} />;
    case "globe":
      return <Globe className={cls} />;
    case "runtime":
      return <Terminal className={cls} />;
    default:
      return <Check className={cls} />;
  }
}

function PricingPlanCard({
  name,
  badge,
  subtitle,
  price,
  specs,
}: {
  name: string;
  badge: string;
  subtitle: string;
  price: number;
  specs: SpecItem[];
}) {
  const { formatPrice } = useCurrency();

  return (
    <div className="rv card-clean flex flex-col justify-between rounded-3xl p-6 transition hover:-translate-y-0.5">
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-bold">{name}</h3>
          <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--muted)]">
            {badge}
          </span>
        </div>
        <p className="mt-1 text-xs text-[var(--muted)]">{subtitle}</p>

        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-3xl font-extrabold tracking-tight">{formatPrice(price)}</span>
          <span className="text-xs text-[var(--muted)]">/month</span>
        </div>

        <hr className="my-4 border-[var(--border)]" />

        <ul className="space-y-2 text-xs text-[var(--muted)]">
          {specs.map((spec, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <SpecIcon type={spec.icon} />
              <span>{spec.text}</span>
            </li>
          ))}
        </ul>
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
  );
}

export default function PricingPage() {
  const [tab, setTab] = useState<Tab>("vps");
  const [vdsFamily, setVdsFamily] = useState<"xeon-vds" | "epyc-vds">("xeon-vds");

  const tabs: { id: Tab; label: string }[] = [
    { id: "vps", label: "Cloud VPS" },
    { id: "minecraft", label: "Minecraft" },
    { id: "rdp", label: "Windows RDP" },
    { id: "bot", label: "Bot Hosting" },
    { id: "web", label: "Web Hosting" },
    { id: "vds", label: "India VDS" },
    { id: "calculator", label: "Plan Calculator" },
  ];

  const minecraftPlans = [
    ...catalog.mcBudget.map((p) => ({
      ...p,
      badge: "Intel® Xeon®",
      subtitle: "India (Noida) · Java & Bedrock",
    })),
    ...catalog.mcPerf.map((p) => ({
      ...p,
      badge: "AMD EPYC™",
      subtitle: "India & Dubai · High-Clock",
    })),
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
          {minecraftPlans.map((p) => (
            <PricingPlanCard
              key={p.id}
              name={p.name}
              badge={p.badge}
              subtitle={p.subtitle}
              price={p.price}
              specs={[
                { icon: "cpu", text: p.cpu },
                { icon: "ram", text: `${p.ram} RAM` },
                { icon: "storage", text: p.nvme },
                { icon: "network", text: `${p.backups} Offsite Backups` },
                { icon: "shield", text: "DDoS Protection" },
              ]}
            />
          ))}
        </div>
      )}

      {tab === "rdp" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.rdpPlans.map((p) => (
            <PricingPlanCard
              key={p.id}
              name={p.name}
              badge={p.location}
              subtitle="Intel® Xeon® Windows Server RDP"
              price={p.price}
              specs={[
                { icon: "cpu", text: `${p.vCores} vCores` },
                { icon: "ram", text: p.ram },
                { icon: "storage", text: p.storage },
                { icon: "network", text: p.bandwidth },
                { icon: "shield", text: "Full Admin + DDoS Protection" },
              ]}
            />
          ))}
        </div>
      )}

      {tab === "bot" && (
        <div className="grid gap-5 sm:grid-cols-3">
          {catalog.botPlans.map((p) => (
            <PricingPlanCard
              key={p.id}
              name={p.name}
              badge="24/7 Uptime"
              subtitle="Pterodactyl Bot Runtime"
              price={p.price}
              specs={[
                { icon: "cpu", text: p.cpu },
                { icon: "ram", text: p.ram },
                { icon: "storage", text: p.storage },
                { icon: "runtime", text: p.runtime },
                { icon: "shield", text: "DDoS Protection" },
              ]}
            />
          ))}
        </div>
      )}

      {tab === "web" && (
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          {catalog.webPlans.map((p) => (
            <PricingPlanCard
              key={p.id}
              name={p.name}
              badge="cPanel"
              subtitle="High-Speed NVMe Web Hosting"
              price={p.price}
              specs={[
                { icon: "storage", text: p.storage },
                { icon: "globe", text: p.domains },
                { icon: "shield", text: p.ssl },
                { icon: "runtime", text: p.panel },
                { icon: "network", text: "Unmetered Bandwidth" },
              ]}
            />
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
                <PricingPlanCard
                  key={p.id}
                  name={p.name}
                  badge={p.location}
                  subtitle={p.familyLabel}
                  price={p.price}
                  specs={[
                    { icon: "cpu", text: p.vCores },
                    { icon: "ram", text: `${p.ram} DDR4 ECC` },
                    { icon: "storage", text: `${p.storage} NVMe SSD` },
                    { icon: "network", text: p.bandwidth },
                    { icon: "shield", text: "DDoS Protection" },
                  ]}
                />
              ))}
          </div>
        </div>
      )}

      {tab === "calculator" && (
        <div className="space-y-10">
          <MinecraftPlanFinder />
          <VpsConfigurator />
        </div>
      )}
    </div>
  );
}
