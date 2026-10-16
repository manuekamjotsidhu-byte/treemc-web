"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Cpu,
  Bot,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  HardDrive,
  Layers,
  Monitor,
} from "lucide-react";

const solutions = [
  {
    title: "Minecraft Server Hosting",
    badge: "Flagship Line",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    description:
      "Engineered specifically for single-thread Minecraft tick calculations. Choose between Budget Intel Xeon or High-Performance AMD EPYC DDR5 nodes.",
    specs: [
      "4GB to 32GB High-Speed RAM",
      "AMD EPYC 9654 DDR5 / Intel Xeon",
      "Enterprise Gen4 NVMe RAID-10",
      "Instant High-Performance Panel Setup (<60s)",
    ],
    ctaText: "View Minecraft Plans",
    href: "/games",
    icon: Server,
    featured: true,
  },
  {
    title: "KVM Cloud VPS",
    badge: "Global Edge",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    description:
      "High-frequency virtual private servers with dedicated NVMe storage and full root access across India, Pakistan (Lahore), Singapore, Germany, and North America.",
    specs: [
      "2GB to 32GB Dedicated RAM",
      "India (Noida) & Pakistan (Lahore sub-15ms)",
      "Unmetered 1Gbps Port + IPv4",
      "Ubuntu, Debian, Windows Server",
    ],
    ctaText: "Configure Cloud VPS",
    href: "/vps",
    icon: Cloud,
    featured: false,
  },
  {
    title: "Virtual Dedicated Servers (VDS)",
    badge: "India Cluster",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    description:
      "High-performance Virtual Dedicated Servers hosted in India with 100% dedicated CPU slices, DDR4 ECC memory, and NVMe storage.",
    specs: [
      "AMD EPYC (Noida/Delhi) & Intel Xeon (Noida)",
      "Up to 12 Dedicated CPU Cores",
      "Up to 64GB DDR4 ECC RAM",
      "1Gbps Unmetered Port + DDoS Protection",
    ],
    ctaText: "View India VDS Plans",
    href: "/dedicated",
    icon: Cpu,
    featured: false,
  },
  {
    title: "Windows Server RDP Hosting",
    badge: "India Noida Cluster",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    description:
      "Enterprise Remote Desktop servers in Noida, India with full Administrator access, low-latency domestic routing, and Advance DDoS Mitigation.",
    specs: [
      "8GB to 64GB DDR4 ECC RAM",
      "Intel Xeon (4 to 16 vCores)",
      "80GB to 400GB Enterprise NVMe SSD",
      "Unmetered 1 Gbps + Advance DDoS Shield",
    ],
    ctaText: "View India RDP Plans",
    href: "/rdp",
    icon: Monitor,
    featured: false,
  },
  {
    title: "Discord Bot Hosting",
    badge: "Developer Tier",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    description:
      "Always-on 24/7 cloud environment for Discord bots and automation apps. Full support for NodeJS, Python, Java, Rust, and Go runtimes.",
    specs: [
      "Instant Git / Webhook Deploy",
      "Automated Crash Recovery",
      "Pterodactyl Application Panel",
      "Zero Maintenance Overhead",
    ],
    ctaText: "Explore Bot Hosting",
    href: "/discord",
    icon: Bot,
    featured: false,
  },
];

export default function ProductSolutionsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Infrastructure Ecosystem</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Engineered for Performance. Built for Reliability.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Select the hosting architecture tailored for your workload. Every tier includes enterprise DDoS mitigation, Tier IV datacenter peering, and round-the-clock technical support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                item.featured
                  ? "bg-gradient-to-b from-[#0f191b] to-[#0a0d14] border-emerald-500/40 shadow-xl shadow-emerald-950/20"
                  : "bg-white/[0.02] border-white/[0.08] hover:border-white/[0.18]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-emerald-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 mb-8 border-t border-white/[0.06] pt-4">
                  {item.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-xs text-gray-300 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={item.href}
                  className={`inline-flex items-center justify-between w-full px-5 py-3 rounded-xl text-sm font-bold transition-all active:scale-[0.98] ${
                    item.featured
                      ? "bg-emerald-500 hover:bg-emerald-400 text-gray-950 shadow-lg shadow-emerald-500/20"
                      : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]"
                  }`}
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
