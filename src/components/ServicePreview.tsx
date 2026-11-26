import React from "react";
import { Bot, Cpu, Globe, Lock, Monitor, Server, Terminal } from "lucide-react";

export function ServicePreview({ kind }: { kind: "minecraft" | "vps" | "rdp" | "bot" | "web" | "vds" }) {
  if (kind === "minecraft") {
    return (
      <div className="relative h-36 w-full overflow-hidden rounded-2xl bg-slate-900">
        <img src="/images/games.jpg" alt="Minecraft Hosting" className="h-full w-full object-cover opacity-90" />
        <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
          Java &amp; Bedrock · 20 TPS
        </span>
      </div>
    );
  }
  if (kind === "vps") {
    return (
      <div className="relative h-36 w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
        <img src="/images/vps.png" alt="Cloud VPS" className="h-full w-full object-cover" />
        <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
          KVM Root · 5 Countries
        </span>
      </div>
    );
  }
  if (kind === "rdp") {
    return (
      <div className="relative h-36 w-full overflow-hidden rounded-2xl bg-sky-50 dark:bg-slate-900">
        <img src="/images/rdp-service.jpg" alt="Windows RDP Hosting" className="h-full w-full object-cover" />
        <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
          Windows Server · 1 Gbps RDP
        </span>
      </div>
    );
  }
  if (kind === "bot") {
    return (
      <div className="flex h-36 w-full flex-col justify-between rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-50 to-lime-100 p-4 dark:from-slate-800 dark:to-slate-900">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-2 py-1 text-[10px] font-bold text-white">
            <Bot className="h-3 w-3 text-lime-400" /> Bot Runtime
          </span>
          <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">Auto-Restart</span>
        </div>
        <div className="rounded-xl border border-emerald-500/15 bg-white/85 p-2.5 font-mono text-[10px] text-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
          <div className="flex items-center gap-1"><Terminal className="h-3 w-3" /> node index.js</div>
          <div className="text-emerald-600 dark:text-emerald-400">✓ Connected to Discord Gateway</div>
        </div>
      </div>
    );
  }
  if (kind === "web") {
    return (
      <div className="flex h-36 w-full flex-col justify-between rounded-2xl border border-slate-500/15 bg-gradient-to-br from-slate-50 to-slate-200 p-4 dark:from-slate-800 dark:to-slate-900">
        <div className="flex items-center gap-1.5 rounded-lg bg-white/90 px-2.5 py-1.5 text-[10px] font-semibold text-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
          <Lock className="h-3 w-3 text-emerald-600" /> https://treemchost.pro
        </div>
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 dark:text-slate-200">
          <span className="inline-flex items-center gap-1.5"><Globe className="h-4 w-4 text-blue-600" /> cPanel + Softaculous</span>
          <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-700 dark:text-emerald-300">AutoSSL</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-36 w-full flex-col justify-between rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-50 to-slate-100 p-4 dark:from-slate-800 dark:to-slate-900">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-2 py-1 text-[10px] font-bold text-white">
          <Server className="h-3 w-3" /> Dedicated Slices
        </span>
        <img src="/cpu/intel.png" alt="Intel Xeon" className="h-7 w-7 rounded object-contain" />
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-indigo-500/15 bg-white/85 p-2.5 text-[10px] font-semibold text-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
        <Cpu className="h-3.5 w-3.5 text-indigo-600" /> 100% Dedicated Xeon Cores · Noida
      </div>
    </div>
  );
}
