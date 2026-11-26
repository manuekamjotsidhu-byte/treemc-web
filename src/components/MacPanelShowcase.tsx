"use client";

import React, { useState } from "react";
import {
  Activity, Bot, CheckCircle2, Cloud, Cpu, Gamepad2, HardDrive,
  Lock, Play, RotateCw, Server, ShieldCheck, Terminal, Wifi,
} from "lucide-react";

type NodeTab = "mc" | "vps" | "vds";

const NODES: Record<
  NodeTab,
  {
    label: string;
    title: string;
    region: string;
    spec: string;
    metricLabel: string;
    metricVal: string;
    metricSub: string;
    cpu: string;
    cpuW: string;
    ram: string;
    ramW: string;
    net: string;
    netW: string;
    cmd: string;
  }
> = {
  mc: {
    label: "Minecraft",
    title: "Birch Survival SMP",
    region: "Noida, India · Java & Bedrock",
    spec: "Birch 6 GB · Intel® Xeon® · 200% vCPU",
    metricLabel: "Players online",
    metricVal: "24",
    metricSub: "/60",
    cpu: "34%",
    cpuW: "w-[34%]",
    ram: "4.2 / 6 GB",
    ramW: "w-[70%]",
    net: "14 ms",
    netW: "w-[92%]",
    cmd: "[TreeMC] Done (1.42s)! Running Paper 1.21.4 at 20.0 TPS",
  },
  vps: {
    label: "Cloud VPS",
    title: "fra-epyc-prod-01",
    region: "Frankfurt, Germany · KVM Root",
    spec: "Germany EPYC 8 GB · 4 vCores · Gen4 NVMe",
    metricLabel: "Load average",
    metricVal: "0.42",
    metricSub: " / 4.0",
    cpu: "18%",
    cpuW: "w-[18%]",
    ram: "3.6 / 8 GB",
    ramW: "w-[45%]",
    net: "0.8 ms",
    netW: "w-[96%]",
    cmd: "root@fra-epyc-prod-01:~# uptime — up 47 days, 0 packet loss",
  },
  vds: {
    label: "India VDS",
    title: "noida-vds-cluster",
    region: "Delhi NCR, India · Dedicated Cores",
    spec: "Xeon VDS L · 6 Dedicated vCores · 16 GB ECC",
    metricLabel: "Throughput",
    metricVal: "1.0",
    metricSub: " Gbps",
    cpu: "41%",
    cpuW: "w-[41%]",
    ram: "9.4 / 16 GB",
    ramW: "w-[58%]",
    net: "9 ms",
    netW: "w-[94%]",
    cmd: "[systemd] All 6 dedicated vCores pinned · NVMe RAID-10 healthy",
  },
};

export default function MacPanelShowcase() {
  const [status, setStatus] = useState<"online" | "restarting">("online");
  const [activeNode, setActiveNode] = useState<NodeTab>("mc");

  const handleRestart = () => {
    setStatus("restarting");
    setTimeout(() => setStatus("online"), 1600);
  };

  const node = NODES[activeNode];

  const deployments = [
    { key: "mc" as NodeTab, name: "Birch SMP", sub: "Minecraft · Noida", icon: Gamepad2, bg: "bg-emerald-600" },
    { key: "vps" as NodeTab, name: "Frankfurt KVM", sub: "EPYC VPS · DE", icon: Cloud, bg: "bg-slate-800" },
    { key: "vds" as NodeTab, name: "Noida VDS", sub: "Dedicated · IN", icon: Server, bg: "bg-teal-600" },
    { key: "mc" as NodeTab, name: "TreeMC Bot", sub: "Discord · SG", icon: Bot, bg: "bg-emerald-700" },
  ];

  return (
    <div className="rv mx-auto mt-10 max-w-7xl px-3 sm:px-6">
      <div className="flex flex-col items-center gap-5 lg:grid lg:grid-cols-[205px_minmax(0,1fr)_215px] lg:items-center lg:gap-6">
        {/* Left Card: Live Node Telemetry */}
        <div className="card-clean order-2 w-full max-w-xs rounded-2xl p-4 text-left shadow-lg lg:order-1 lg:max-w-none">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>Node telemetry</span>
            <Wifi className="h-3.5 w-3.5 text-emerald-500" />
          </div>
          <div className="mt-3 space-y-3 text-xs">
            {[
              { label: "Tick / Health", val: "20.0 TPS", w: "w-[98%]", color: "bg-emerald-500" },
              { label: "NVMe Read", val: "6.4 GB/s", w: "w-[84%]", color: "bg-lime-400" },
              { label: "Uplink", val: "10 Gbps", w: "w-[90%]", color: "bg-teal-500" },
            ].map((b) => (
              <div key={b.label}>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">{b.label}</span>
                  <span className="font-bold">{b.val}</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-500/15">
                  <div className={`h-full ${b.w} rounded-full ${b.color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Responsive Device Frame */}
        <div className="order-1 w-full lg:order-2">
          {/* Phone frame (mobile < md) */}
          <div className="mx-auto max-w-[350px] md:hidden">
            <div className="overflow-hidden rounded-[42px] border-[7px] border-slate-900 bg-slate-950 shadow-2xl dark:border-slate-800">
              <div className="flex items-center justify-between bg-slate-950 px-5 pt-3 pb-1 text-[10px] font-bold text-white">
                <span>9:41</span>
                <div className="h-5 w-24 rounded-full bg-black shadow-inner" aria-label="Dynamic Island" />
                <span>5G</span>
              </div>
              <ConsoleBody
                node={node}
                activeNode={activeNode}
                onSelectNode={setActiveNode}
                status={status}
                deployments={deployments}
                onStart={() => setStatus("online")}
                onRestart={handleRestart}
              />
              <div className="flex justify-center bg-slate-50 pb-2 pt-1 dark:bg-slate-950">
                <div className="h-1 w-28 rounded-full bg-slate-400/50" />
              </div>
            </div>
          </div>

          {/* iPad frame (tablet md-lg) */}
          <div className="mx-auto hidden max-w-[660px] overflow-hidden rounded-[26px] border-[8px] border-slate-900 bg-slate-950 shadow-2xl dark:border-slate-800 md:block lg:hidden">
            <div className="flex items-center justify-center bg-slate-900 py-1.5">
              <div className="h-1.5 w-10 rounded-full bg-slate-600" />
            </div>
            <ConsoleBody
              node={node}
              activeNode={activeNode}
              onSelectNode={setActiveNode}
              status={status}
              deployments={deployments}
              onStart={() => setStatus("online")}
              onRestart={handleRestart}
            />
          </div>

          {/* MacBook frame (desktop lg+) */}
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-t-2xl rounded-b-xl border-[8px] border-slate-900 bg-slate-950 shadow-2xl dark:border-slate-800">
              <div className="bg-slate-900">
                <div className="mx-auto h-2.5 w-20 rounded-b-lg bg-black" />
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-2 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-md bg-white/90 px-3 py-0.5 text-[11px] font-medium text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                  <Lock className="h-2.5 w-2.5 text-emerald-500" />
                  panel.treemchost.pro
                </div>
                <div className="w-14" />
              </div>
              <ConsoleBody
                node={node}
                activeNode={activeNode}
                onSelectNode={setActiveNode}
                status={status}
                deployments={deployments}
                onStart={() => setStatus("online")}
                onRestart={handleRestart}
              />
            </div>
            <div className="mx-auto -ml-[1%] h-3 w-[102%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-lg dark:from-slate-700 dark:to-slate-800">
              <div className="mx-auto h-1 w-20 rounded-b-md bg-slate-500/40" />
            </div>
          </div>
        </div>

        {/* Right Card: Protection & Backups */}
        <div className="card-clean order-3 w-full max-w-xs rounded-2xl p-4 text-left shadow-lg lg:max-w-none">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>Shield &amp; Sync</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
          </div>
          <div className="mt-3 space-y-2.5 text-xs">
            {[
              { title: "L7 DDoS Shield", sub: "Always-on mitigation", time: "Active", icon: ShieldCheck },
              { title: "Offsite Snapshot", sub: "NVMe Sync · 4.2 GB", time: "4m", icon: HardDrive },
              { title: "Auto-Failover", sub: "Noida-02 · Healthy", time: "Live", icon: Activity },
            ].map((ev) => {
              const Icon = ev.icon;
              return (
                <div key={ev.title} className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-semibold">{ev.title}</div>
                      <div className="truncate text-[10px] text-[var(--muted)]">{ev.sub}</div>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">{ev.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsoleBody({
  node,
  activeNode,
  onSelectNode,
  status,
  deployments,
  onStart,
  onRestart,
}: {
  node: (typeof NODES)[NodeTab];
  activeNode: NodeTab;
  onSelectNode: (t: NodeTab) => void;
  status: "online" | "restarting";
  deployments: { key: NodeTab; name: string; sub: string; icon: React.ElementType; bg: string }[];
  onStart: () => void;
  onRestart: () => void;
}) {
  return (
    <>
      {/* TreeMC Obsidian + Emerald Console Header */}
      <div className="bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.22),_transparent_60%),linear-gradient(135deg,#090f1a_0%,#0f1c2e_100%)] p-5 text-left text-white sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/15 text-emerald-300">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] font-medium text-emerald-300/90">{node.region}</div>
              <div className="flex items-center gap-2 text-sm font-bold">
                <span>{node.title}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold">
                  <span className={`h-1.5 w-1.5 rounded-full ${status === "online" ? "bg-lime-400" : "bg-amber-300 animate-ping"}`} />
                  {status === "online" ? "Online" : "Restarting…"}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Node Switcher */}
          <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-0.5 text-[11px] font-semibold">
            {(["mc", "vps", "vds"] as NodeTab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => onSelectNode(tab)}
                className={`rounded-lg px-2.5 py-1 transition ${
                  activeNode === tab
                    ? "bg-[var(--lime)] text-[var(--lime-ink)]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {NODES[tab].label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:items-center">
          <div>
            <div className="text-xs text-slate-300">{node.metricLabel}</div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight">{node.metricVal}</span>
              <span className="text-sm text-slate-400">{node.metricSub}</span>
            </div>
            <div className="mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-200">
              {node.spec}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onStart}
                className="btn-lime inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold"
              >
                <Play className="h-3.5 w-3.5" /> Start
              </button>
              <button
                type="button"
                onClick={onRestart}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/15"
              >
                <RotateCw className={`h-3.5 w-3.5 ${status === "restarting" ? "animate-spin" : ""}`} />
                Restart
              </button>
            </div>
          </div>

          <div className="space-y-2.5 text-xs">
            {[
              { icon: Cpu, label: "CPU", val: node.cpu, w: node.cpuW },
              { icon: HardDrive, label: "Memory", val: node.ram, w: node.ramW },
              { icon: Activity, label: "Latency", val: node.net, w: node.netW },
            ].map((bar) => {
              const Icon = bar.icon;
              return (
                <div key={bar.label} className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="inline-flex items-center gap-1.5 text-slate-200">
                      <Icon className="h-3.5 w-3.5 text-emerald-400" /> {bar.label}
                    </span>
                    <span>{bar.val}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                    <div className={`h-full ${bar.w} rounded-full bg-gradient-to-r from-emerald-400 to-lime-300`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Console Strip */}
        <div className="mt-4 truncate rounded-xl border border-emerald-400/15 bg-black/40 px-3 py-2 font-mono text-[11px] text-emerald-300">
          {node.cmd}
        </div>
      </div>

      {/* Bottom Active Deployments */}
      <div className="bg-slate-50 p-4 text-left text-slate-900 dark:bg-slate-950 dark:text-white sm:p-5">
        <div className="mb-3 flex items-center justify-between text-xs font-bold">
          <span>Active deployments</span>
          <span className="text-[var(--muted)]">TreeMC Console</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {deployments.map((srv) => {
            const Icon = srv.icon;
            return (
              <button
                key={srv.name}
                type="button"
                onClick={() => onSelectNode(srv.key)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 text-left shadow-sm transition hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white ${srv.bg}`}>
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-[11px] font-bold">{srv.name}</div>
                  <div className="truncate text-[10px] text-slate-500 dark:text-slate-400">{srv.sub}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
