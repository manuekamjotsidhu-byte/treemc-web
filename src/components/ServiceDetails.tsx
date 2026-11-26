"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, Cpu, Globe, HardDrive, Lock, Network, ShieldCheck, Terminal, Zap } from "lucide-react";
import catalog from "../data/catalog.json";

export interface FaqItem {
  q: string;
  a: string;
}

export function InfrastructureGrid() {
  const items = [
    { icon: Cpu, title: "Enterprise Compute", desc: "Powered by Intel Xeon Gold/Platinum, AMD EPYC Milan, and AMD Ryzen 9 5900X/7950X processors for high single-thread and multi-core throughput." },
    { icon: HardDrive, title: "Gen4 NVMe RAID-10", desc: "Enterprise NVMe SSD arrays deliver ultra-low I/O latency for databases, Minecraft chunk loading, and heavy Docker workloads." },
    { icon: Network, title: "Up to 10 Gbps Uplinks", desc: "Redundant multi-homed Tier-1 bandwidth across India, Germany, Singapore, USA, Canada, and Dubai with low-latency peering." },
    { icon: ShieldCheck, title: "Always-On DDoS Shield", desc: "Inline L3/L4/L7 mitigation filters volumetric floods and TCP/UDP amplification automatically with zero manual intervention." },
    { icon: Terminal, title: "Full Root & OS Control", desc: "Deploy Ubuntu, Debian, AlmaLinux, Rocky Linux, or Windows Server with full root SSH/RDP, VNC console, and instant rebuilds." },
    { icon: Zap, title: "99.9% Uptime Architecture", desc: "Redundant power feeds, dual-port NICs, and proactive node health monitoring keep your servers online around the clock." },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Infrastructure</span>
        <h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">
          Built on <span className="serif-it font-normal">enterprise</span> hardware
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-[var(--muted)]">
          Every TreeMC server runs on dedicated-grade nodes with zero noisy-neighbor throttling and predictable I/O.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div key={it.title} className="card-clean rounded-3xl p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{it.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function OsAndPanelShowcase() {
  const osList = ["Ubuntu 24.04 LTS", "Ubuntu 22.04 LTS", "Debian 12", "AlmaLinux 9", "Rocky Linux 9", "Windows Server 2022", "Pterodactyl Panel", "cPanel / Softaculous"];
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)] py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Control &amp; Automation</span>
          <h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">
            Deploy any stack <span className="serif-it font-normal">in minutes</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Manage game servers via our clean Pterodactyl panel, websites via cPanel, and Cloud VPS / RDP instances with full root SSH or Administrator desktop access.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {osList.map((os) => (
              <span key={os} className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3.5 py-1.5 text-xs font-semibold">
                {os}
              </span>
            ))}
          </div>
        </div>

        <div className="card-clean rounded-3xl p-6 font-mono text-xs">
          <div className="mb-4 flex items-center gap-2 border-b border-[var(--border)] pb-3 text-[var(--muted)]">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2">root@treemc-node:~#</span>
          </div>
          <div className="space-y-2 leading-relaxed">
            <p><span className="text-emerald-600 dark:text-emerald-400">$</span> lscpu | grep &quot;Model name&quot;</p>
            <p className="text-[var(--muted)]">Model name: AMD EPYC Milan / Ryzen 9 / Xeon Gold</p>
            <p><span className="text-emerald-600 dark:text-emerald-400">$</span> fio --name=nvme-randread --rw=randread --bs=4k</p>
            <p className="text-[var(--muted)]">READ: bw=3,840MiB/s (4.0GB/s), IOPS=983k</p>
            <p><span className="text-emerald-600 dark:text-emerald-400">$</span> ping -c 3 sg.treemchost.pro</p>
            <p className="text-emerald-600 dark:text-emerald-400">64 bytes: icmp_seq=1 ttl=57 time=14.2 ms</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComparisonMatrix() {
  const rows = [
    ["Virtualization", "KVM (Full Root)", "KVM (Dedicated Cores)", "Windows Server RDP", "Pterodactyl Container"],
    ["CPU Allocation", "High-Speed vCores", "100% Dedicated Cores", "Multi-Core Xeon", "Burstable / Dedicated %"],
    ["Memory", "DDR4 ECC / DDR5", "DDR4 ECC", "DDR4 ECC", "DDR4 ECC / DDR5"],
    ["Storage", "Enterprise NVMe", "Enterprise NVMe", "Enterprise NVMe", "NVMe SSD"],
    ["Access", "Root SSH + VNC", "Root SSH + VNC", "Full Admin RDP", "Web Panel + SFTP"],
    ["Best For", "Apps, APIs, Proxies, Bots", "Heavy Databases & Game Nodes", "24/7 Windows, MT5, Botting", "Minecraft Java & Bedrock"],
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Comparison</span>
        <h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">
          Pick the right <span className="serif-it font-normal">architecture</span>
        </h2>
      </div>

      <div className="card-clean overflow-x-auto rounded-3xl">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--bg)] text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              <th className="px-5 py-4">Feature</th>
              <th className="px-5 py-4">Cloud VPS</th>
              <th className="px-5 py-4">India VDS</th>
              <th className="px-5 py-4">Windows RDP</th>
              <th className="px-5 py-4">Minecraft</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {rows.map((r) => (
              <tr key={r[0]} className="hover:bg-slate-500/5">
                <td className="px-5 py-3.5 font-semibold">{r[0]}</td>
                <td className="px-5 py-3.5 text-[var(--muted)]">{r[1]}</td>
                <td className="px-5 py-3.5 text-[var(--muted)]">{r[2]}</td>
                <td className="px-5 py-3.5 text-[var(--muted)]">{r[3]}</td>
                <td className="px-5 py-3.5 text-[var(--muted)]">{r[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function FaqSection({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <div className="mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">FAQ</span>
        <h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      </div>
      <div className="space-y-3">
        {items.map((it, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={it.q} className="card-clean overflow-hidden rounded-2xl">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold"
              >
                <span>{it.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <div className="border-t border-[var(--border)] px-5 py-4 text-sm leading-relaxed text-[var(--muted)]">{it.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div className="card-clean flex flex-col items-center justify-between gap-6 rounded-3xl p-8 text-center sm:flex-row sm:text-left">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Lock className="h-3.5 w-3.5" /> Ready in minutes
          </span>
          <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">
            Launch your server with <span className="serif-it font-normal">TreeMC</span>
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Need help sizing your VPS, Minecraft SMP, or RDP? Our team is active 24/7 on Discord.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="btn-lime inline-flex items-center gap-1.5 rounded-xl px-5 py-3 text-sm font-bold">
            Order on Discord <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={catalog.panelUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-5 py-3 text-sm font-semibold">
            Client Panel <Globe className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
