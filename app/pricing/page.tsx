"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Cpu, Globe, HardDrive, Network, ShieldCheck, Terminal } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import VpsExplorer, { VpsConfigurator } from "../../src/components/VpsExplorer";
import MinecraftPlanFinder from "../../src/components/MinecraftPlanFinder";

type Tab = "common" | "vps" | "minecraft" | "rdp" | "bot" | "web" | "vds" | "calculator";

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
  featured = false,
  topTag,
  ctaLabel = "Order on Discord ↗",
  href,
}: {
  name: string;
  badge: string;
  subtitle: string;
  price: number;
  specs: SpecItem[];
  featured?: boolean;
  topTag?: string;
  ctaLabel?: string;
  href?: string;
}) {
  const { formatPrice } = useCurrency();

  return (
    <div
      className={`rv relative card-clean flex flex-col justify-between rounded-3xl p-6 transition hover:-translate-y-0.5 ${
        featured ? "border-2 border-[var(--lime)] shadow-lg" : ""
      }`}
    >
      {topTag && (
        <span className="btn-lime absolute -top-3 left-5 rounded-full px-3 py-0.5 text-[11px] font-bold shadow-sm">
          {topTag}
        </span>
      )}
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
        href={href || catalog.discordUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-5 block w-full rounded-xl py-2.5 text-center text-xs font-bold transition ${
          featured
            ? "btn-lime"
            : "border border-[var(--border)] bg-[var(--bg)] text-[var(--ink)] hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950"
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  );
}

const COMMON_PLANS: {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  price: number;
  featured?: boolean;
  topTag?: string;
  specs: SpecItem[];
  pageHref: string;
}[] = [
  {
    id: "common-mc",
    name: "Sprout",
    badge: "Minecraft",
    subtitle: "India (Noida) · Java & Bedrock",
    price: 99,
    featured: true,
    topTag: "Entry plan",
    pageHref: "/minecraft-hosting",
    specs: [
      { icon: "cpu", text: "100% vCPU (Intel® Xeon®)" },
      { icon: "ram", text: "2 GB RAM" },
      { icon: "storage", text: "10 GB NVMe SSD" },
      { icon: "network", text: "1 Offsite Backup" },
      { icon: "shield", text: "DDoS Protection" },
      { icon: "runtime", text: "Pterodactyl Panel + SFTP" },
    ],
  },
  {
    id: "common-vps",
    name: "India Standard XS",
    badge: "Cloud VPS",
    subtitle: "India · Intel® Xeon® Standard",
    price: 359,
    pageHref: "/vps",
    specs: [
      { icon: "cpu", text: "2 vCores" },
      { icon: "ram", text: "4 GB DDR4 ECC" },
      { icon: "storage", text: "40 GB NVMe SSD" },
      { icon: "network", text: "1000 GB Bandwidth" },
      { icon: "shield", text: "DDoS Protection" },
    ],
  },
  {
    id: "common-rdp",
    name: "India - RDP XS",
    badge: "Windows RDP",
    subtitle: "India (Noida) · Windows Server",
    price: 685,
    pageHref: "/rdp-hosting",
    specs: [
      { icon: "cpu", text: "4 vCores (Intel® Xeon®)" },
      { icon: "ram", text: "8 GB DDR4 ECC" },
      { icon: "storage", text: "60 GB NVMe SSD" },
      { icon: "network", text: "Unmetered 1 Gbps" },
      { icon: "shield", text: "Full Admin + DDoS Protection" },
    ],
  },
  {
    id: "common-bot",
    name: "BOT 1",
    badge: "Bot Hosting",
    subtitle: "24/7 Pterodactyl Bot Runtime",
    price: 49,
    pageHref: "/bot-hosting",
    specs: [
      { icon: "cpu", text: "50% vCPU" },
      { icon: "ram", text: "1 GB RAM" },
      { icon: "storage", text: "5 GB NVMe SSD" },
      { icon: "runtime", text: "Node.js / Python / Go" },
      { icon: "shield", text: "DDoS Protection" },
    ],
  },
  {
    id: "common-web",
    name: "Starter Web",
    badge: "Web Hosting",
    subtitle: "cPanel + Softaculous NVMe",
    price: 59,
    pageHref: "/webhosting",
    specs: [
      { icon: "storage", text: "10 GB NVMe SSD" },
      { icon: "globe", text: "1 Website" },
      { icon: "shield", text: "Free AutoSSL" },
      { icon: "runtime", text: "cPanel + Softaculous" },
      { icon: "network", text: "Unmetered Bandwidth" },
    ],
  },
  {
    id: "common-vds",
    name: "Intel® Xeon® VDS — L",
    badge: "India VDS",
    subtitle: "India (Noida / Delhi) · Dedicated",
    price: 1699,
    pageHref: "/vds-hosting",
    specs: [
      { icon: "cpu", text: "6 Dedicated vCores" },
      { icon: "ram", text: "16 GB DDR4 ECC" },
      { icon: "storage", text: "150 GB NVMe SSD" },
      { icon: "network", text: "1 Gbps Premium" },
      { icon: "shield", text: "DDoS Protection" },
    ],
  },
];

export default function PricingPage() {
  const [tab, setTab] = useState<Tab>("common");
  const [vdsFamily, setVdsFamily] = useState<"xeon-vds" | "epyc-vds">("xeon-vds");

  const tabs: { id: Tab; label: string }[] = [
    { id: "common", label: "Common Plans" },
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
      <div className="mb-8 text-center">
        <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1 text-xs font-semibold text-[var(--muted)]">
          Entry plans
        </span>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
          Start small, <span className="serif-it font-normal">scale when ready</span>
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--muted)]">
          Compare entry plans for Minecraft, Cloud VPS, Windows RDP, bots, web, and India VDS — or pick a category below for every tier.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-[var(--muted)]">
          {["DDoS protection", "99.99% uptime target", "Full control panel", "24/7 Discord support", "Instant setup"].map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1"
            >
              <Check className="h-3 w-3 text-emerald-500" />
              {pill}
            </span>
          ))}
        </div>
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

      {tab === "common" && (
        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_PLANS.map((p) => (
              <PricingPlanCard
                key={p.id}
                name={p.name}
                badge={p.badge}
                subtitle={p.subtitle}
                price={p.price}
                featured={p.featured}
                topTag={p.topTag}
                specs={p.specs}
              />
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-[var(--muted)]">
            Need higher RAM or custom cores? Pick a service tab above or check our{" "}
            <Link href="/vps" className="font-semibold text-[var(--ink)] underline">
              full VPS catalog
            </Link>
            .
          </p>
        </div>
      )}

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
