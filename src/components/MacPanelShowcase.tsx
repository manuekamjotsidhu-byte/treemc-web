"use client";

import React, { useState } from "react";
import { Activity, Bot, CheckCircle2, Cloud, Cpu, Gamepad2, Globe, HardDrive, MoreHorizontal, Play, RotateCw, ShieldCheck } from "lucide-react";

export default function MacPanelShowcase() {
  const [status, setStatus] = useState<"online" | "restarting">("online");

  const handleRestart = () => {
    setStatus("restarting");
    setTimeout(() => setStatus("online"), 1200);
  };

  return (
    <div className="rv mx-auto mt-14 max-w-6xl px-1 sm:px-4">
      <div className="grid items-center gap-5 lg:grid-cols-[210px_1fr_220px]">
        {/* Left Card: Server Health (order 2 on mobile/tablet, order 1 on desktop) */}
        <div className="card-clean order-2 rounded-2xl p-4 text-left shadow-lg lg:order-1">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>Server health</span>
            <Activity className="h-3.5 w-3.5 text-[var(--muted)]" />
          </div>
          <div className="mt-3 space-y-3 text-xs">
            <div>
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">TPS</span>
                <span className="font-bold">20.0</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-500/15">
                <div className="h-full w-[98%] rounded-full bg-blue-500" />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Memory</span>
                <span className="font-bold">3.1 GB</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-500/15">
                <div className="h-full w-[52%] rounded-full bg-lime-400" />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="text-[var(--muted)]">Ping</span>
                <span className="font-bold">19 ms</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-500/15">
                <div className="h-full w-[88%] rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Center Responsive Device Frame: iPhone (Dynamic Island) -> iPad -> macOS */}
        <div className="order-1 w-full overflow-hidden rounded-[34px] border-[6px] border-slate-900 bg-white shadow-2xl dark:border-slate-800 md:rounded-[28px] lg:order-2 lg:rounded-3xl">
          {/* Phone: iPhone Dynamic Island */}
          <div className="flex items-center justify-between bg-blue-600 px-5 pt-3 pb-1 text-[10px] font-bold text-white md:hidden">
            <span>9:41</span>
            <div className="h-5 w-24 rounded-full bg-black shadow-inner" aria-label="Dynamic Island" />
            <span>5G</span>
          </div>

          {/* Tablet: iPad Camera Bar */}
          <div className="hidden md:flex lg:hidden items-center justify-center bg-slate-900 py-1.5">
            <div className="h-2 w-12 rounded-full bg-slate-700" />
          </div>

          {/* Desktop/Laptop: macOS Window Chrome */}
          <div className="hidden lg:flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>
            <div className="rounded-lg bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300">
              panel.treemchost.pro
            </div>
            <div className="w-10" />
          </div>

          {/* Panel Dashboard Body */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-5 text-left text-white sm:p-6">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/20 text-amber-200">
                  <Gamepad2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-blue-100">Survival SMP · India (Noida)</div>
                  <div className="text-sm font-bold">
                    {status === "online" ? "Server online" : "Restarting node…"}
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold">
                <span className={`h-2 w-2 rounded-full ${status === "online" ? "bg-lime-300" : "bg-amber-300 animate-ping"}`} />
                99.99% SLA
              </span>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:items-center">
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
                  <button
                    type="button"
                    onClick={() => setStatus("online")}
                    className="btn-lime inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold"
                  >
                    <Play className="h-3.5 w-3.5" /> Start
                  </button>
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-900 hover:bg-slate-100"
                  >
                    <RotateCw className={`h-3.5 w-3.5 ${status === "restarting" ? "animate-spin" : ""}`} /> Restart
                  </button>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 text-slate-900">
                    <MoreHorizontal className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                {[
                  { icon: Cpu, label: "CPU", val: "38%", w: "w-[38%]" },
                  { icon: HardDrive, label: "Memory", val: "3.1 GB", w: "w-[55%]" },
                  { icon: Activity, label: "Ping", val: "19 ms", w: "w-[90%]" },
                ].map((bar) => {
                  const Icon = bar.icon;
                  return (
                    <div key={bar.label} className="rounded-xl bg-white/12 p-2.5">
                      <div className="flex items-center justify-between font-semibold">
                        <span className="inline-flex items-center gap-1.5"><Icon className="h-3.5 w-3.5" /> {bar.label}</span>
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

          {/* Bottom Your Servers Row */}
          <div className="bg-slate-50 p-4 text-left text-slate-900 dark:bg-slate-950 dark:text-white sm:p-5">
            <div className="mb-3 flex items-center justify-between text-xs font-bold">
              <span>Your servers</span>
              <span className="text-[var(--muted)]">See all</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                { name: "Survival SMP", sub: "Minecraft · India", icon: Gamepad2, bg: "bg-emerald-500" },
                { name: "Frankfurt Node", sub: "VPS · Germany", icon: Cloud, bg: "bg-blue-600" },
                { name: "TreeMC Bot", sub: "Bot · Singapore", icon: Bot, bg: "bg-sky-500" },
                { name: "My Website", sub: "Web · cPanel", icon: Globe, bg: "bg-slate-800" },
              ].map((srv) => {
                const Icon = srv.icon;
                return (
                  <div key={srv.name} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white ${srv.bg}`}>
                      <Icon className="h-4 w-4" />
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
        </div>

        {/* Right Card: Recent Activity (order 3) */}
        <div className="card-clean order-3 rounded-2xl p-4 text-left shadow-lg">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>Recent activity</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
          </div>
          <div className="mt-3 space-y-2.5 text-xs">
            {[
              { title: "DDoS attack blocked", sub: "Survival SMP", time: "2m", icon: ShieldCheck },
              { title: "Backup completed", sub: "NVMe Snapshot · 4.2 GB", time: "1h", icon: HardDrive },
              { title: "Bot restarted", sub: "TreeMC Bot, auto", time: "3h", icon: Bot },
            ].map((ev) => {
              const Icon = ev.icon;
              return (
                <div key={ev.title} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-semibold">{ev.title}</div>
                      <div className="truncate text-[10px] text-[var(--muted)]">{ev.sub}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[var(--muted)]">{ev.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
