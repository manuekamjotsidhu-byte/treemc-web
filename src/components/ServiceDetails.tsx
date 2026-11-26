"use client";

import React, { useState } from "react";
import { ArrowUpRight, Bot, ChevronDown, Cpu, Globe, HardDrive, Lock, Monitor, Network, ShieldCheck, Terminal, Zap } from "lucide-react";
import catalog from "../data/catalog.json";

export interface FaqItem {
  q: string;
  a: string;
}

export type ServiceVariant = "general" | "vps" | "minecraft" | "rdp" | "bot" | "web" | "vds";

const GRID_DATA: Record<ServiceVariant, { icon: any; title: string; desc: string }[]> = {
  general: [
    { icon: Cpu, title: "Enterprise Compute", desc: "Intel Xeon Gold/Platinum, AMD EPYC Milan, and AMD Ryzen 9 processors for steady single-thread and multi-core performance." },
    { icon: HardDrive, title: "Gen4 NVMe RAID-10", desc: "Enterprise NVMe SSD arrays deliver ultra-low I/O latency for databases, game worlds, and web apps." },
    { icon: Network, title: "Up to 10 Gbps Uplinks", desc: "Redundant multi-homed bandwidth across India, Germany, Singapore, USA, Canada, and Dubai." },
    { icon: ShieldCheck, title: "Always-On DDoS Shield", desc: "Inline L3/L4/L7 mitigation filters volumetric floods and amplification attacks automatically." },
    { icon: Terminal, title: "Full Root & Panel Control", desc: "Manage VPS/VDS over SSH, Windows over RDP, websites via cPanel, and game servers via Pterodactyl." },
    { icon: Zap, title: "99.99% Uptime Architecture", desc: "Redundant power feeds, dual-port NICs, and proactive monitoring keep workloads online 24/7." },
  ],
  vps: [
    { icon: Cpu, title: "Xeon, EPYC & Ryzen 9", desc: "Choose Intel Xeon Standard/Gold, AMD EPYC Milan, or Ryzen 9 5900X/9950X depending on your region." },
    { icon: HardDrive, title: "Pure Gen4 NVMe SSD", desc: "High-IOPS enterprise NVMe storage built for Docker containers, databases, and CI/CD runners." },
    { icon: Network, title: "10 Gbps Ports", desc: "Fast network ports across India, Germany, Singapore, USA, and Canada with IPv4 included." },
    { icon: ShieldCheck, title: "Always-On DDoS Mitigation", desc: "Automatic L4/L7 traffic scrubbing keeps APIs, proxies, and backend nodes reachable." },
    { icon: Terminal, title: "True KVM + Root SSH", desc: "Isolated KVM virtualization with dedicated RAM, VNC console, and 1-click Ubuntu/Debian/AlmaLinux." },
    { icon: Zap, title: "Instant Vertical Scaling", desc: "Upgrade RAM, vCores, and storage seamlessly as your production traffic grows." },
  ],
  minecraft: [
    { icon: Cpu, title: "High Single-Thread Tick", desc: "Intel Xeon & AMD EPYC nodes keep Paper, Purpur, Fabric, and Forge servers at a steady 20 TPS." },
    { icon: HardDrive, title: "Fast NVMe Chunk Loading", desc: "Rapid world saves, region pre-generation, and modpack startups on pure NVMe SSDs." },
    { icon: ShieldCheck, title: "Game DDoS Protection", desc: "Protocol-aware mitigation filters UDP/TCP floods without interrupting active players." },
    { icon: Terminal, title: "Pterodactyl + SFTP", desc: "1-click plugin & modpack installer, live console, sub-user roles, and full SFTP access." },
    { icon: Globe, title: "Java & Bedrock Crossplay", desc: "Run GeyserMC + Floodgate effortlessly so PC, mobile, and console friends can play together." },
    { icon: Zap, title: "Automated Backups", desc: "Scheduled backups and extra port allocations included on every Minecraft tier." },
  ],
  rdp: [
    { icon: Monitor, title: "Full Windows Administrator", desc: "Connect via Microsoft Remote Desktop with full Administrator privileges to install any Windows software." },
    { icon: Cpu, title: "Multi-Core Intel Xeon", desc: "Dedicated vCores and ECC memory tuned for 24/7 MetaTrader (MT4/MT5), browsers, and automation." },
    { icon: HardDrive, title: "Enterprise NVMe Storage", desc: "Fast Windows boot times, snappy desktop responsiveness, and smooth multi-app multitasking." },
    { icon: Network, title: "1 Gbps Unmetered India Link", desc: "Low-latency Noida connectivity with generous bandwidth for continuous trading and remote work." },
    { icon: ShieldCheck, title: "Always-On Network Shield", desc: "Protected IPv4 connectivity keeps your remote desktop session stable around the clock." },
    { icon: Zap, title: "24/7 Always-Online", desc: "Keep scripts, trading terminals, and desktop workflows running even when your PC is turned off." },
  ],
  bot: [
    { icon: Bot, title: "Multi-Language Runtimes", desc: "Native support for Node.js, Python, Java, Go, and Lavalink audio nodes out of the box." },
    { icon: Zap, title: "Auto-Restart & 24/7 Uptime", desc: "Process watchdog automatically restarts your Discord bot if an unhandled exception occurs." },
    { icon: Terminal, title: "Live Console & Git Pull", desc: "View real-time logs, edit environment variables, and upload code via SFTP or panel." },
    { icon: HardDrive, title: "NVMe Database & Cache", desc: "Fast local storage for SQLite, JSON stores, and Lavalink audio caching." },
    { icon: ShieldCheck, title: "DDoS Protected Endpoints", desc: "Keep bot webhooks, REST APIs, and Lavalink nodes online under heavy traffic." },
    { icon: Cpu, title: "Upgradeable Any Time", desc: "Start at BOT 1 and scale to multi-shard BOT 3 without migrating your files." },
  ],
  web: [
    { icon: Globe, title: "cPanel + Softaculous", desc: "Industry-standard cPanel with 1-click WordPress, Laravel, and 400+ web app installers." },
    { icon: ShieldCheck, title: "Free AutoSSL Certificates", desc: "Automatic HTTPS SSL provisioning and renewal for every domain and subdomain." },
    { icon: HardDrive, title: "NVMe SSD Web Storage", desc: "Fast PHP execution and MySQL queries for blogs, portfolios, and agency sites." },
    { icon: Network, title: "Custom Email & DNS", desc: "Create professional domain email accounts, forwarders, and DNS records in seconds." },
    { icon: Lock, title: "Daily Malware & Backups", desc: "Isolated CloudLinux accounts keep your websites secure and recoverable." },
    { icon: Zap, title: "Instant Activation", desc: "Receive cPanel credentials immediately after ordering so you can publish right away." },
  ],
  vds: [
    { icon: Cpu, title: "100% Dedicated CPU Cores", desc: "Zero CPU contention — every core assigned to your India VDS belongs exclusively to your workload." },
    { icon: HardDrive, title: "ECC RAM + NVMe", desc: "Error-correcting memory paired with enterprise NVMe for mission-critical databases and game nodes." },
    { icon: Network, title: "Noida / Delhi Peering", desc: "Low-latency Indian routing built for high-concurrency regional applications." },
    { icon: ShieldCheck, title: "Always-On DDoS Defense", desc: "Multi-layer L3/L4/L7 mitigation protects public services without manual intervention." },
    { icon: Terminal, title: "Full KVM Root Access", desc: "Install any Linux distribution, Docker, Kubernetes, or custom firewall rules." },
    { icon: Zap, title: "Consistent Sustained Clock", desc: "Sustained CPU performance under 100% load with zero noisy-neighbor throttling." },
  ],
};

export function InfrastructureGrid({ variant = "general" }: { variant?: ServiceVariant }) {
  const items = GRID_DATA[variant] || GRID_DATA.general;
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Included Features</span>
        <h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">
          Built for <span className="serif-it font-normal">reliable</span> performance
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div key={it.title} className="rv card-clean rounded-3xl p-6">
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
  const osList = [
    { name: "Ubuntu", img: "/images/os/ubuntu.png" },
    { name: "Debian", img: "/images/os/debian.png" },
    { name: "Fedora", img: "/images/os/fedora.png" },
    { name: "Kali Linux", img: "/images/os/kali.png" },
    { name: "Windows Server", img: "/images/os/windows.png" },
  ];
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)] py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">OS &amp; Control</span>
          <h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">
            Deploy any OS <span className="serif-it font-normal">in minutes</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Install Linux distributions with full root SSH or Windows Server for remote desktop workloads, with instant rebuilds and VNC console access.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {osList.map((os) => (
              <span key={os.name} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)] px-3.5 py-1.5 text-xs font-semibold">
                <img src={os.img} alt={os.name} className="h-4 w-4 object-contain" />
                {os.name}
              </span>
            ))}
          </div>
        </div>

        <div className="rv card-clean rounded-3xl p-6 font-mono text-xs">
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
    ["Memory", "ECC RAM", "ECC RAM", "ECC RAM", "ECC RAM"],
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

      <div className="rv card-clean overflow-x-auto rounded-3xl">
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
            <div key={it.q} className="rv card-clean overflow-hidden rounded-2xl">
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
      <div className="rv card-clean flex flex-col items-center justify-between gap-6 rounded-3xl p-8 text-center sm:flex-row sm:text-left">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
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
