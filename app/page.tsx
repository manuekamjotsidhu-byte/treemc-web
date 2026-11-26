"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Bot, Check, Cloud, Cpu, Gamepad2, Globe, Monitor } from "lucide-react";
import { useCurrency } from "../src/context/CurrencyContext";
import catalog from "../src/data/catalog.json";
import { ComparisonMatrix, CtaBanner, FaqSection, InfrastructureGrid, OsAndPanelShowcase } from "../src/components/ServiceDetails";
import { ServicePreview } from "../src/components/ServicePreview";
import Reveal from "../src/components/Reveal";
import LocationsMapSection from "../src/components/LocationsMapSection";

const HOME_FAQ = [
  { q: "Where are TreeMC servers located?", a: "We operate Cloud VPS in India, Germany, Singapore, USA, and Canada; Minecraft & Game servers in India (Noida / Delhi) and Dubai (UAE); and Windows RDP / VDS in India." },
  { q: "Are DDoS protection and NVMe SSDs included?", a: "Yes. Every plan includes always-on L3/L4/L7 DDoS mitigation and enterprise Gen4 NVMe SSD storage at no extra cost." },
  { q: "Can I upgrade my plan or switch currencies?", a: "Yes. Use the currency selector in the header for live INR, USD, EUR, GBP, PKR, AED, SGD, CAD, and AUD pricing, and upgrade your resources anytime via Discord." },
  { q: "How fast is provisioning?", a: "Minecraft, Bot Hosting, and Web Hosting deploy automatically via Pterodactyl or cPanel. Cloud VPS, VDS, and Windows RDP are provisioned rapidly with full root or admin access." },
];

const REGIONS = [
  { name: "India", sub: "Noida / Delhi / Mumbai", flag: "/flags/india.png", services: "VPS · VDS · RDP · Games" },
  { name: "Germany", sub: "Frankfurt", flag: "/flags/germany.png", services: "Xeon Gold · Ryzen 9 · EPYC" },
  { name: "Singapore", sub: "Southeast Asia", flag: "/flags/singapore.png", services: "AMD EPYC Milan VPS" },
  { name: "USA", sub: "North America", flag: "/flags/usa.png", services: "AMD EPYC Milan VPS" },
  { name: "Canada", sub: "North America", flag: "/flags/canada.png", services: "AMD EPYC Premium VPS" },
  { name: "Dubai", sub: "UAE", flag: "/flags/dubai.png", services: "Minecraft & Game Servers" },
];

export default function HomePage() {
  const { formatPrice } = useCurrency();

  const SERVICES: { title: string; desc: string; price: number; href: string; icon: any; tag: string; kind: "minecraft" | "vps" | "rdp" | "bot" | "web" | "vds" }[] = [
    { title: "Minecraft Hosting", desc: "Java & Bedrock servers in India & Dubai from Sprout (2 GB) to Titan.", price: 99, href: "/minecraft-hosting", icon: Gamepad2, tag: "Minecraft", kind: "minecraft" },
    { title: "Cloud VPS", desc: "Root KVM VPS across India, Germany, Singapore, USA, and Canada.", price: 359, href: "/vps", icon: Cloud, tag: "Cloud VPS", kind: "vps" },
    { title: "Windows RDP", desc: "Enterprise Windows Server remote desktop in India with NVMe SSD.", price: 685, href: "/rdp-hosting", icon: Monitor, tag: "Windows RDP", kind: "rdp" },
    { title: "Bot Hosting", desc: "Always-on 24/7 runtimes for Node.js, Python, Java & Lavalink.", price: 49, href: "/bot-hosting", icon: Bot, tag: "Bot Hosting", kind: "bot" },
    { title: "Web Hosting", desc: "Fast NVMe cPanel hosting with free AutoSSL & Softaculous.", price: 59, href: "/webhosting", icon: Globe, tag: "Web Hosting", kind: "web" },
    { title: "India VDS", desc: "Dedicated CPU slices with DDR4 ECC memory in Noida & Delhi.", price: 1699, href: "/vds-hosting", icon: Cpu, tag: "India VDS", kind: "vds" },
  ];

  return (
    <div>
      {/* Bright Sky-Inspired Clean Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#dbeafe_0%,#eff6ff_55%,var(--bg)_100%)] dark:bg-[linear-gradient(180deg,#0f172a_0%,#0b0f17_100%)] pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-900 shadow-sm">
            Minecraft plans from {formatPrice(99)}/month
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-[1.08]">
            Global server hosting{" "}
            <span className="serif-it font-normal">worldwide</span>
            <br />
            for games and apps
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Start a Minecraft Java &amp; Bedrock world from {formatPrice(99)}/month, run a Cloud VPS across 5 countries from{" "}
            {formatPrice(359)}/month, or deploy Windows RDP from {formatPrice(685)}/month.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={catalog.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold shadow-sm transition"
            >
              Join our Discord <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-900/10 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              View plans <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-700 dark:text-slate-300">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 dark:bg-white/10 px-3.5 py-1.5 shadow-sm">
              <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> Multi-region hosting
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 dark:bg-white/10 px-3.5 py-1.5 shadow-sm">
              <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> 99.9% uptime target
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 dark:bg-white/10 px-3.5 py-1.5 shadow-sm">
              <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> DDoS protection included
            </span>
          </div>
        </div>
      </section>

      {/* Entry Plans / Services Grid */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Plans &amp; Services</span>
          <h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">
            Simple <span className="serif-it font-normal text-4xl sm:text-5xl">honest</span> pricing
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.href}>
                <div className="card-clean flex h-full flex-col justify-between overflow-hidden rounded-3xl p-5 transition hover:-translate-y-0.5">
                  <div>
                    <div className="mb-4">
                      <ServicePreview kind={s.kind} />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--muted)]">
                        {s.tag}
                      </span>
                    </div>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold tracking-tight">{formatPrice(s.price)}</span>
                      <span className="text-xs text-[var(--muted)]">/month</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{s.desc}</p>
                  </div>

                  <Link
                    href={s.href}
                    className="btn-lime mt-6 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold transition"
                  >
                    <Icon className="h-3.5 w-3.5" /> View {s.title}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <LocationsMapSection />

      <InfrastructureGrid />
      <OsAndPanelShowcase />
      <ComparisonMatrix />
      <FaqSection items={HOME_FAQ} />
      <CtaBanner />
    </div>
  );
}
