"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

interface RegionInfo {
  id: string;
  name: string;
  city: string;
  flag: string;
  services: string;
  cpus: string;
  href: string;
  x: string;
  y: string;
}

const REGIONS: RegionInfo[] = [
  { id: "india", name: "India", city: "Noida / Delhi / Mumbai", flag: "/flags/india.png", services: "Cloud VPS · India VDS · Windows RDP · Minecraft", cpus: "Intel Xeon · AMD EPYC · Ryzen 9", href: "/vps", x: "70.5%", y: "44%" },
  { id: "dubai", name: "Dubai", city: "UAE", flag: "/flags/dubai.png", services: "Minecraft (Java & Bedrock) · Game Servers", cpus: "Intel Xeon · AMD EPYC", href: "/minecraft-hosting", x: "62.5%", y: "44%" },
  { id: "germany", name: "Germany", city: "Frankfurt", flag: "/flags/germany.png", services: "Cloud VPS Hosting", cpus: "Xeon Gold · Ryzen 9 5900X · EPYC Milan", href: "/vps", x: "51.5%", y: "28%" },
  { id: "singapore", name: "Singapore", city: "Southeast Asia", flag: "/flags/singapore.png", services: "Cloud VPS Hosting", cpus: "AMD EPYC Milan", href: "/vps", x: "77.5%", y: "58%" },
  { id: "usa", name: "USA", city: "North America", flag: "/flags/usa.png", services: "Cloud VPS Hosting", cpus: "AMD EPYC Milan", href: "/vps", x: "23%", y: "36%" },
  { id: "canada", name: "Canada", city: "North America", flag: "/flags/canada.png", services: "Cloud VPS Hosting", cpus: "AMD EPYC Premium", href: "/vps", x: "25%", y: "24%" },
];

export default function LocationsMapSection() {
  const [activeId, setActiveId] = useState("india");
  const active = REGIONS.find((r) => r.id === activeId) || REGIONS[0];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rv mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Global Network</span>
          <h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">
            6 Locations <span className="serif-it font-normal">worldwide</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--muted)]">
            Click a country on the map or selector to inspect available processors and services.
          </p>
        </div>

        <div className="rv card-clean grid gap-6 rounded-3xl p-5 sm:p-8 lg:grid-cols-12">
          {/* Left Region Selector */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-5">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
              {REGIONS.map((r) => {
                const isSelected = r.id === activeId;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setActiveId(r.id)}
                    aria-pressed={isSelected}
                    className={`flex items-center gap-2.5 rounded-2xl border px-3 py-2.5 text-left transition ${
                      isSelected
                        ? "border-slate-900 bg-slate-900 text-white shadow-sm dark:border-white dark:bg-white dark:text-slate-950"
                        : "border-[var(--border)] bg-[var(--bg)] text-[var(--ink)] hover:border-slate-400/50"
                    }`}
                  >
                    <img src={r.flag} alt={r.name} className="h-4 w-6 rounded object-cover shrink-0" />
                    <div className="min-w-0">
                      <div className="truncate text-xs font-bold">{r.name}</div>
                      <div className={`truncate text-[10px] ${isSelected ? "opacity-80" : "text-[var(--muted)]"}`}>{r.city}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <div className="flex items-center gap-3">
                <img src={active.flag} alt={active.name} className="h-6 w-9 rounded object-cover" />
                <div>
                  <h3 className="text-lg font-extrabold">{active.name}</h3>
                  <p className="text-xs text-[var(--muted)]">{active.city}</p>
                </div>
              </div>
              <p className="mt-3 text-xs font-semibold text-emerald-700 dark:text-emerald-400">{active.services}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">CPUs: {active.cpus}</p>
              <Link
                href={active.href}
                className="btn-lime mt-4 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold"
              >
                View {active.name} plans <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Interactive World Map */}
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 lg:col-span-7">
            <div className="relative w-full">
              <img
                src="/images/world-map.svg"
                alt="TreeMC Global Network Map"
                className="w-full h-auto opacity-45 dark:invert dark:opacity-35 select-none pointer-events-none"
              />
              {REGIONS.map((r) => {
                const isSelected = r.id === activeId;
                return (
                  <button
                    key={r.id}
                    type="button"
                    aria-label={`Select ${r.name}`}
                    onClick={() => setActiveId(r.id)}
                    style={{ left: r.x, top: r.y }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  >
                    <span className={`relative flex h-5 w-5 items-center justify-center rounded-full transition-transform ${isSelected ? "scale-125" : "hover:scale-110"}`}>
                      {isSelected && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />}
                      <span className={`relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white shadow ${isSelected ? "bg-lime-400" : "bg-slate-900 dark:bg-emerald-400"}`} />
                    </span>
                    <span className={`pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-bold shadow ${isSelected ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950" : "hidden bg-white/90 text-slate-900 group-hover:block"}`}>
                      <MapPin className="mr-0.5 inline h-2.5 w-2.5" />{r.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
