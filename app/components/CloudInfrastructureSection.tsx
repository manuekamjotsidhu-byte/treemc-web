"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Cpu,
  HardDrive,
  Network,
  Shield,
  Layers,
  Info,
  CheckCircle2,
  Terminal,
  Activity,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
import {
  GLOBAL_LOCATIONS_DATA,
  DISCORD_PURCHASE_URL,
  LocationData,
  ProcessorCategory,
  VPSPlan,
} from "../data/treeMcPlans";

export default function CloudInfrastructureSection() {
  const [selectedLocationId, setSelectedLocationId] = useState<string>("india");
  const currentLocation =
    GLOBAL_LOCATIONS_DATA.find((l) => l.id === selectedLocationId) ||
    GLOBAL_LOCATIONS_DATA[0];

  const [selectedProcessorId, setSelectedProcessorId] = useState<string>(
    currentLocation.processors[0]?.id || "intel-standard"
  );

  // For locations that offer both VPS and Dedicated VDS (e.g., India)
  const [mode, setMode] = useState<"vps" | "vds">("vps");

  // Handle location change
  const handleLocationChange = (locId: string) => {
    setSelectedLocationId(locId);
    const loc = GLOBAL_LOCATIONS_DATA.find((l) => l.id === locId);
    if (loc && loc.processors.length > 0) {
      // Check if current processor exists in new location
      const exists = loc.processors.some((p) => p.id === selectedProcessorId);
      if (!exists) {
        setSelectedProcessorId(loc.processors[0].id);
      }
    }
  };

  const currentProcessor =
    currentLocation.processors.find((p) => p.id === selectedProcessorId) ||
    currentLocation.processors[0];

  const hasVdsOption = Boolean(currentProcessor?.vdsPlans && currentProcessor.vdsPlans.length > 0);
  const activePlans: VPSPlan[] =
    mode === "vds" && hasVdsOption
      ? currentProcessor?.vdsPlans || []
      : currentProcessor?.vpsPlans || [];

  return (
    <section id="cloud-plans" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090b11] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Cloud Compute Infrastructure
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            KVM VPS & Dedicated VDS Hosting
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Select your preferred location and processor to view available plans.
          </p>
        </div>

        {/* Control Box: Step 1 & Step 2 Selectors (Matching Attached Image) */}
        <div className="max-w-5xl mx-auto mb-10 p-6 sm:p-8 rounded-3xl bg-[#0e111a] border border-white/[0.08] shadow-2xl backdrop-blur-md">
          {/* 1. SELECT LOCATION */}
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3.5 flex items-center justify-between">
              <span>SELECT LOCATION</span>
              {currentLocation.sublocations && (
                <span className="text-[11px] text-emerald-400 normal-case font-medium">
                  Nodes: {currentLocation.sublocations.join(" • ")}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {GLOBAL_LOCATIONS_DATA.map((loc) => {
                const isSelected = loc.id === selectedLocationId;
                return (
                  <button
                    key={loc.id}
                    onClick={() => handleLocationChange(loc.id)}
                    className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 active:scale-95 ${
                      isSelected
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/50 ring-2 ring-purple-500/30"
                        : "bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                    }`}
                  >
                    <Image
                      src={loc.flag}
                      alt={loc.name}
                      width={20}
                      height={15}
                      className="rounded-sm object-cover"
                    />
                    <span>{loc.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. SELECT PROCESSOR */}
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3.5">
              <span>SELECT PROCESSOR</span>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {currentLocation.processors.map((proc) => {
                const isSelected = proc.id === selectedProcessorId;
                return (
                  <button
                    key={proc.id}
                    onClick={() => setSelectedProcessorId(proc.id)}
                    className={`flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 active:scale-95 ${
                      isSelected
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/50 ring-2 ring-purple-500/30"
                        : "bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                    }`}
                  >
                    <div className="w-5 h-5 relative flex items-center justify-center">
                      <Image
                        src={proc.image}
                        alt={proc.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>{proc.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* VPS vs Dedicated VDS Switcher (Available when VDS plans exist for selected combo) */}
          {hasVdsOption && (
            <div className="mb-6 flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Compute Tier:
              </span>
              <div className="inline-flex p-1 rounded-xl bg-black/40 border border-white/[0.08]">
                <button
                  onClick={() => setMode("vps")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    mode === "vps"
                      ? "bg-cyan-500 text-gray-950 shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Standard KVM VPS
                </button>
                <button
                  onClick={() => setMode("vds")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    mode === "vds"
                      ? "bg-emerald-500 text-gray-950 shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Virtual Dedicated Server (VDS)
                </button>
              </div>
            </div>
          )}

          {/* DYNAMIC NOTE CARD (Matching Attached Image Notice Box) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/[0.08] flex items-start gap-3.5">
            <Info className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              <p className="font-semibold text-white mb-2">
                Note: Our {currentLocation.name} {currentProcessor?.name} plans come with dedicated CPU options. You can choose any available option based on current stock by clicking on the &quot;Order Now&quot; button.
              </p>
              <div className="text-xs font-medium text-gray-400 mb-1.5">
                Available CPU Models:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                {currentProcessor?.cpuModels.map((model) => (
                  <div key={model} className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <span className="font-mono text-[11px] sm:text-xs text-purple-200">{model}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global Control Panel Inclusions Banner */}
        <div className="max-w-5xl mx-auto mb-10 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-gray-300">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <Network className="w-4 h-4" /> 1Gbps Premium Port
          </span>
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <Server className="w-4 h-4" /> Full Management Panel
          </span>
          <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
            <Terminal className="w-4 h-4" /> Root Access & VNC Console
          </span>
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Activity className="w-4 h-4" /> Instant OS Reinstall & Backups
          </span>
        </div>

        {/* UNPAGINATED HIGH-DENSITY PLAN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activePlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl bg-[#0e111a] p-6 border transition-all duration-300 flex flex-col justify-between ${
                plan.popular
                  ? "border-purple-500/50 shadow-xl shadow-purple-950/20 ring-1 ring-purple-500/30"
                  : "border-white/[0.08] hover:border-white/[0.2]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold text-white">
                      ✦ {plan.tier}
                    </span>
                    {plan.popular && (
                      <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                        Popular
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-medium text-gray-400 px-2 py-0.5 rounded bg-white/[0.05]">
                    {currentLocation.name}
                  </span>
                </div>

                <div className="mb-5 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white tracking-tight tabular-nums">
                      ₹{plan.priceMo.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-400">/mo</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-xs sm:text-sm">
                  <li className="flex items-center gap-2.5 text-gray-300">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="font-semibold text-white">{plan.cores}</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-300">
                    <span className="text-cyan-400 font-bold">➜</span>
                    <span className="font-semibold text-white">
                      {plan.ram} {plan.ramType}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-300">
                    <span className="text-purple-400 font-bold">➜</span>
                    <span className="font-semibold text-white">{plan.nvme} SSD</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-400 text-xs">
                    <span className="text-gray-500">➜</span>
                    <span>1Gbps Port • Root • VNC</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={`${DISCORD_PURCHASE_URL}?plan=${encodeURIComponent(
                    `${currentLocation.name} ${currentProcessor.name} ${plan.tier}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/30"
                      : "bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.1] hover:border-white/[0.2]"
                  }`}
                >
                  <FaDiscord className="w-3.5 h-3.5" />
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
