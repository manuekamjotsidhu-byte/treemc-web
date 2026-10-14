"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  HardDrive,
  Network,
  Shield,
  Zap,
  CheckCircle2,
  Terminal,
  Activity,
  ArrowRight,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
import { DISCORD_PURCHASE_URL } from "../../data/treeMcPlans";

const dedicatedPlans = [
  {
    id: "DEDI-R9-01",
    name: "Ryzen 9 7950X PowerNode",
    badge: "Maximum Single-Thread",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    cpu: "AMD Ryzen 9 7950X (16 Cores / 32 Threads @ 4.50 GHz Base)",
    ram: "64 GB DDR5 5200MHz ECC",
    storage: "2x 1TB Gen4 NVMe RAID-1",
    bandwidth: "Unmetered 1Gbps Uplink",
    ddos: "Always-On 3.2+ Tbps L3/L4/L7 Mitigation",
    price: "$119.00",
    period: "/month",
    description: "The gold standard for high-player Minecraft SMPs, competitive networks, and intensive modpacks.",
    features: [
      "100% Dedicated Hardware (Zero Virtualization)",
      "Dedicated IPMI / KVM over IP Console",
      "Free Custom ISO Mounting",
      "/29 IPv4 Subnet (5 Usable IPs)",
      "Full Pterodactyl Panel Integration",
    ],
  },
  {
    id: "DEDI-R9-02",
    name: "Ryzen 9 7950X Extreme",
    badge: "Most Popular",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    cpu: "AMD Ryzen 9 7950X (16 Cores / 32 Threads @ 4.50 GHz Base)",
    ram: "128 GB DDR5 5200MHz ECC",
    storage: "2x 2TB Gen4 NVMe Enterprise RAID-1",
    bandwidth: "Unmetered 10Gbps Burstable Uplink",
    ddos: "Multi-Terabit L3/L4/L7 DDoS Shield",
    price: "$179.00",
    period: "/month",
    description: "Engineered for massive multi-server networks running BungeeCord or Velocity with dozens of backend worlds.",
    features: [
      "128 GB High-Frequency DDR5 Memory",
      "Enterprise Datacenter NVMe (7,000 MB/s IOPS)",
      "Dedicated IPMI with Virtual Media",
      "Custom Reverse DNS (rDNS) Delegation",
      "Priority Discord VIP Support Channel",
    ],
  },
  {
    id: "DEDI-EPYC-01",
    name: "AMD EPYC 9654 Titan",
    badge: "Enterprise Multi-Core",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    cpu: "AMD EPYC 9654 Genoa (32 Cores / 64 Threads)",
    ram: "256 GB DDR5 4800MHz Reg ECC",
    storage: "4x 2TB NVMe U.2 Enterprise RAID-10",
    bandwidth: "Unmetered 10Gbps Dedicated Port",
    ddos: "Carrier-Grade Path.net / Corero Mitigation",
    price: "$299.00",
    period: "/month",
    description: "Uncapped server powerhouse designed for massive gaming communities, hosting companies, and distributed clouds.",
    features: [
      "256 GB Registered ECC Memory",
      "Quad U.2 Enterprise Storage Array",
      "Dual 10G SFP+ Uplink Peering",
      "Dedicated Hardware Firewall Option",
      "SLA 99.99% Hardware Replacement Guarantee",
    ],
  },
];

export default function DedicatedServersSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-4">
          <Cpu className="w-4 h-4" />
          <span>Bare-Metal & Dedicated VDS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Dedicated Bare-Metal Servers
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Uncompromised physical power with 100% dedicated resources, reliable enterprise base clocks, and enterprise multi-terabit DDoS mitigation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {dedicatedPlans.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="rounded-3xl p-8 bg-[#0c0f18] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl relative group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${plan.badgeColor}`}>
                {plan.badge}
              </span>
              <span className="text-xs text-gray-400 font-mono">{plan.id}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">{plan.description}</p>

            <div className="mb-6 pb-6 border-b border-white/[0.06] flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white font-mono">{plan.price}</span>
              <span className="text-gray-400 text-sm font-medium">{plan.period}</span>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-medium text-white">{plan.cpu}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <Server className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{plan.ram}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <HardDrive className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{plan.storage}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <Network className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{plan.bandwidth}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{plan.ddos}</span>
              </div>
            </div>

            <div className="space-y-2 mb-8 pt-4 border-t border-white/[0.06]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Included Enterprise Features
              </div>
              {plan.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={DISCORD_PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-gray-950 shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
          >
            <FaDiscord className="w-4 h-4" />
            <span>Order on Discord Ticket</span>
          </a>
        </motion.div>
        ))}
      </div>
    </section>
  );
}
