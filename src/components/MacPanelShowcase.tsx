"use client";

import React, { useState } from "react";
import {
  Activity, Bot, CheckCircle2, Cloud, Cpu, Gamepad2, Globe,
  HardDrive, MoreHorizontal, Play, RotateCw, ShieldCheck,
} from "lucide-react";

export default function MacPanelShowcase() {
  const [status, setStatus] = useState<"online" | "restarting">("online");

  const handleRestart = () => {
    setStatus("restarting");
    setTimeout(() => setStatus("online"), 1800);
  };

  const servers = [
    { name: "Survival SMP", sub: "Minecraft · India", icon: Gamepad2, bg: "bg-emerald-500" },
    { name: "Frankfurt Node", sub: "VPS · Germany", icon: Cloud, bg: "bg-blue-600" },
    { name: "TreeMC Bot", sub: "Bot · Singapore", icon: Bot, bg: "bg-sky-500" },
    { name: "My Website", sub: "Web · cPanel", icon: Globe, bg: "bg-slate-700" },
  ];

  const activity = [
    { title: "DDoS attack blocked", sub: "Survival SMP", time: "2m", icon: ShieldCheck },
    { title: "Backup completed", sub: "NVMe Snapshot · 4.2 GB", time: "1h", icon: HardDrive },
    { title: "Bot restarted", sub: "TreeMC Bot, auto", time: "3h", icon: Bot },
  ];

  const bars = [
    { icon: Cpu, label: "CPU", val: "38%", w: "w-[38%]" },
    { icon: HardDrive, label: "Memory", val: "3.1 GB", w: "w-[55%]" },
    { icon: Activity, label: "Ping", val: "19 ms", w: "w-[90%]" },
  ];

  return (
    <div className="rv mx-auto mt-10 max-w-7xl px-3 sm:px-6">
      {/* ─── Layout: stacked on mobile/tablet, 3-col grid on desktop ─── */}
      <div className="flex flex-col items-center gap-5 lg:grid lg:grid-cols-[200px_minmax(0,1fr)_210px] lg:items-center lg:gap-6">

        {/* ── Left: Server Health ─────────────────────────────────────── */}
        <div className="card-clean order-2 w-full max-w-xs rounded-2xl p-4 text-left shadow-lg lg:order-1 lg:max-w-none">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>Server health</span>
            <Activity className="h-3.5 w-3.5 text-[var(--muted)]" />
          </div>
          <div className="mt-3 space-y-3 text-xs">
            {[
              { label: "TPS", val: "20.0", w: "w-[98%]", color: "bg-blue-500" },
              { label: "Memory", val: "3.1 GB", w: "w-[52%]", color: "bg-lime-400" },
              { label: "Ping", val: "19 ms", w: "w-[88%]", color: "bg-emerald-500" },
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

        {/* ── Center: Responsive Device Frame ─────────────────────────── */}
        <div className="order-1 w-full lg:order-2">

          {/* Phone frame (mobile only < md) */}
          <div className="mx-auto max-w-[350px] md:hidden">
            <div className="overflow-hidden rounded-[42px] border-[7px] border-slate-900 bg-white shadow-2xl dark:border-slate-800">
              {/* iPhone Dynamic Island */}
              <div className="flex items-center justify-between bg-blue-600 px-5 pt-3 pb-1 text-[10px] font-bold text-white">
                <span>9:41</span>
                <div className="h-5 w-24 rounded-full bg-black shadow-inner" aria-label="Dynamic Island" />
                <span>5G</span>
              </div>
              <PanelBody status={status} bars={bars} servers={servers} onStart={() => setStatus("online")} onRestart={handleRestart} />
              <div className="flex justify-center bg-slate-50 pb-2 pt-1 dark:bg-slate-950">
                <div className="h-1 w-28 rounded-full bg-slate-400/50" />
              </div>
            </div>
          </div>

          {/* iPad frame (tablet only md–lg) */}
          <div className="mx-auto hidden max-w-[660px] overflow-hidden rounded-[26px] border-[8px] border-slate-900 bg-white shadow-2xl dark:border-slate-800 md:block lg:hidden">
            <div className="flex items-center justify-center bg-slate-900 py-1.5">
              <div className="h-1.5 w-10 rounded-full bg-slate-600" />
            </div>
            <PanelBody status={status} bars={bars} servers={servers} onStart={() => setStatus("online")} onRestart={handleRestart} />
          </div>

          {/* MacBook frame (desktop lg+) */}
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-t-2xl rounded-b-xl border-[8px] border-slate-900 bg-white shadow-2xl dark:border-slate-800">
              {/* MacBook lid + camera */}
              <div className="bg-slate-900">
                <div className="mx-auto h-2.5 w-20 rounded-b-lg bg-black" />
              </div>
              {/* macOS window chrome */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-2 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="rounded-md bg-white/90 px-3 py-0.5 text-[11px] font-medium text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                  panel.treemchost.pro
                </div>
                <div className="w-14" />
              </div>
              <PanelBody status={status} bars={bars} servers={servers} onStart={() => setStatus("online")} onRestart={handleRestart} />
            </div>
            {/* MacBook hinge base */}
            <div className="mx-auto -ml-[1%] h-3 w-[102%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-lg dark:from-slate-700 dark:to-slate-800">
              <div className="mx-auto h-1 w-20 rounded-b-md bg-slate-500/40" />
            </div>
          </div>
        </div>

        {/* ── Right: Recent Activity ───────────────────────────────────── */}
        <div className="card-clean order-3 w-full max-w-xs rounded-2xl p-4 text-left shadow-lg lg:max-w-none">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>Recent activity</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
          </div>
          <div className="mt-3 space-y-2.5 text-xs">
            {activity.map((ev) => {
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
                  <span className="shrink-0 text-[10px] text-[var(--muted)]">{ev.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared Panel Body (dashboard content inside device frames) ─── */
function PanelBody({
  status, bars, servers, onStart, onRestart,
}: {
  status: "online" | "restarting";
  bars: { icon: React.ElementType; label: string; val: string; w: string }[];
  servers: { name: string; sub: string; icon: React.ElementType; bg: string }[];
  onStart: () => void;
  onRestart: () => void;
}) {
  return (
    <>
      {/* Blue header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-5 text-left text-white sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/20 text-amber-200">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-blue-100">Survival SMP · India (Noida)</div>
              <div className="text-sm font-bold">
                {status === "online" ? "Server online" : "Restarting server…"}
              </div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold">
            <span className={`h-2 w-2 rounded-full ${status === "online" ? "bg-lime-300" : "bg-amber-300 animate-ping"}`} />
            99.99% SLA
          </span>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:items-center">
          <div>
            <div className="text-xs text-blue-100">Players online</div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">18</span>
              <span className="text-sm text-blue-100">/50</span>
            </div>
            <div className="mt-2 inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium">
              ● Intel Xeon 6 GB · 200% CPU
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={onStart} className="btn-lime inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold">
                <Play className="h-3.5 w-3.5" /> Start
              </button>
              <button type="button" onClick={onRestart} className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-900 hover:bg-slate-100">
                <RotateCw className={`h-3.5 w-3.5 ${status === "restarting" ? "animate-spin" : ""}`} />
                Restart
              </button>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 text-slate-900">
                <MoreHorizontal className="h-4 w-4" />
              </span>
            </div>
          </div>
          <div className="space-y-2.5 text-xs">
            {bars.map((bar) => {
              const Icon = bar.icon;
              return (
                <div key={bar.label} className="rounded-xl bg-white/12 p-2.5">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5" /> {bar.label}
                    </span>
                    <span>{bar.val}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                    <div className={`h-full ${bar.w} rounded-full bg-lime-300`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom servers */}
      <div className="bg-slate-50 p-4 text-left text-slate-900 dark:bg-slate-950 dark:text-white sm:p-5">
        <div className="mb-3 flex items-center justify-between text-xs font-bold">
          <span>Your servers</span>
          <span className="text-[var(--muted)]">See all</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {servers.map((srv) => {
            const Icon = srv.icon;
            return (
              <div key={srv.name} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white ${srv.bg}`}>
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-[11px] font-bold">{srv.name}</div>
                  <div className="truncate text-[10px] text-slate-500 dark:text-slate-400">{srv.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
