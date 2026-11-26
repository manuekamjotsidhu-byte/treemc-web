"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Cloud, Cpu, Gamepad2, Globe, Monitor, ShieldCheck, Zap } from "lucide-react";
import { useCurrency } from "../src/context/CurrencyContext";
import catalog from "../src/data/catalog.json";

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

  const SERVICES = [
    {
      title: "Cloud VPS",
      desc: "Root KVM VPS on Intel Xeon, AMD EPYC, and Ryzen 9 across 5 global countries.",
      price: 359,
      href: "/vps",
      icon: Cloud,
      badge: "5 Countries",
    },
    {
      title: "Minecraft Hosting",
      desc: "Java & Bedrock servers with Sprout (DDR4) and Ember (DDR5) tiers in India & Dubai.",
      price: 99,
      href: "/minecraft-hosting",
      icon: Gamepad2,
      badge: "Java & Bedrock",
    },
    {
      title: "Windows RDP",
      desc: "Full Windows Server remote desktop in India with NVMe storage & 1 Gbps uplink.",
      price: 685,
      href: "/rdp-hosting",
      icon: Monitor,
      badge: "Windows",
    },
    {
      title: "Discord Bot Hosting",
      desc: "24/7 always-on Node.js, Python, Java, Go & Lavalink bot runtimes.",
      price: 49,
      href: "/bot-hosting",
      icon: Bot,
      badge: "24/7 Uptime",
    },
    {
      title: "Web Hosting",
      desc: "Fast NVMe cPanel hosting with free AutoSSL and Softaculous installer.",
      price: 59,
      href: "/webhosting",
      icon: Globe,
      badge: "cPanel",
    },
    {
      title: "India VDS",
      desc: "Dedicated CPU slices with DDR4 ECC memory in Noida & Delhi.",
      price: 1699,
      href: "/vds-hosting",
      icon: Cpu,
      badge: "Dedicated Cores",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.16),_transparent_60%)] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
            <Zap className="h-3.5 w-3.5" /> Multi-Region Infrastructure · Instant Setup
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Global server hosting{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              for games &amp; apps
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            Deploy Cloud VPS across India, Germany, Singapore, USA, and Canada from{" "}
            <strong className="text-white">{formatPrice(359)}/mo</strong>, Minecraft servers from{" "}
            <strong className="text-white">{formatPrice(99)}/mo</strong>, and Windows RDP from{" "}
            <strong className="text-white">{formatPrice(685)}/mo</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/vps"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-400"
            >
              Explore Cloud VPS <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View All Pricing
            </Link>
            <a
              href={catalog.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Our Services</span>
            <h2 className="mt-1 text-3xl font-extrabold text-white">Everything you need to host</h2>
          </div>
          <Link href="/pricing" className="text-sm font-semibold text-emerald-400 hover:underline">
            Compare all plans →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121a24] p-6 transition hover:border-emerald-400/50 hover:bg-[#15202c]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white group-hover:text-emerald-400">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm text-slate-400">
                    Starting at <strong className="text-lg font-extrabold text-white">{formatPrice(s.price)}</strong>/mo
                  </span>
                  <ArrowRight className="h-4 w-4 text-emerald-400 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Global Regions */}
      <section className="border-t border-white/10 bg-[#0d131a] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Global Network</span>
            <h2 className="mt-1 text-3xl font-extrabold text-white">6 Strategic Locations Worldwide</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
              Low-latency routing with always-on DDoS mitigation included on every server.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((r) => (
              <div key={r.name} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#121a24] p-4">
                <img src={r.flag} alt={r.name} className="h-8 w-12 rounded-md object-cover shrink-0" />
                <div>
                  <h3 className="text-base font-bold text-white">{r.name}</h3>
                  <p className="text-xs text-slate-400">{r.sub}</p>
                  <p className="mt-1 text-[11px] font-medium text-emerald-400">{r.services}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> DDoS Mitigation Included</span>
            <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-emerald-400" /> Enterprise Gen4 NVMe SSDs</span>
            <span className="inline-flex items-center gap-2"><Globe className="h-4 w-4 text-emerald-400" /> 24/7 Discord Support</span>
          </div>
        </div>
      </section>
    </div>
  );
}
