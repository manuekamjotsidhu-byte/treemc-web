'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Server,
  Terminal,
  Cpu,
  Activity,
  Check,
  Globe,
  HardDrive,
  Network,
  RotateCw,
  Sparkles
} from "lucide-react"
import { useCurrency } from "./ui/CurrencySelector"

const partners = [
  { name: "AMD EPYC", src: "/cpu/epyc.png" },
  { name: "Intel", src: "/advertisement/intel.png" },
  { name: "Samsung NVMe", src: "/advertisement/samsung.png" },
  { name: "Pterodactyl", src: "/advertisement/pterodactyl.png" },
  { name: "Hetzner", src: "/advertisement/hetzner.png" },
  { name: "NeoProtect", src: "/advertisement/neoprotect.png" },
]

export default function HeroSection() {
  const { convertPrice } = useCurrency()
  const [activeTab, setActiveTab] = useState<"console" | "hardware" | "network">("console")
  const [consoleCommand, setConsoleCommand] = useState<string>("tps")
  const [consoleOutput, setConsoleOutput] = useState<string>("[SERVER]: 20.0 TPS (0.0% tick loss) • 100% stable tick loop")

  const runCommand = (cmd: string) => {
    setConsoleCommand(cmd)
    if (cmd === "tps") {
      setConsoleOutput("[SERVER]: 20.0 TPS (0.0% tick loss) • 100% stable tick loop")
    } else if (cmd === "ports") {
      setConsoleOutput("[NETWORK]: 3 Ports Assigned -> 25565 (Main), 8123 (Dynmap), 19132 (Geyser)")
    } else if (cmd === "cpu") {
      setConsoleOutput("[HARDWARE]: AMD Ryzen™ 9 9950X @ 5.7 GHz Boost • 14% utilization")
    } else if (cmd === "memory") {
      setConsoleOutput("[MEMORY]: 2,148 MiB / 8,192 MiB Allocated • Aikar Optimized Flags Active")
    }
  }

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gray-50 dark:bg-[#090a10] transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Command & Value Proposition (60%) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Live Instance Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Pterodactyl Instance • 20.0 TPS Tick-Rate Stability</span>
            </motion.div>

            {/* Authoritative Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black orbitron-font text-gray-900 dark:text-white tracking-tight leading-[1.12] mb-6"
            >
              Uncompromising Minecraft &amp; High-Frequency Cloud Servers
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Engineered for 20.0 TPS tick stability, heavy modpacks, and instant setup. Powered by high-clock AMD Ryzen™ 9 9950X and Intel® Xeon® processors with dedicated port allocations and BGP Anycast DDoS mitigation.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                href="/games"
                className="px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-gray-950 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm group"
              >
                <span>View Minecraft Plans</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/vps"
                className="px-7 py-3.5 rounded-xl bg-white dark:bg-[#111420] hover:bg-gray-100 dark:hover:bg-[#171b2c] border border-gray-200 dark:border-white/[0.08] text-gray-900 dark:text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2 active:scale-[0.98]"
              >
                <Server className="w-4 h-4 text-emerald-500" />
                <span>Explore Cloud VPS</span>
              </Link>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-6 border-t border-gray-200/80 dark:border-white/[0.08]"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>2 to 8 Ports per Node</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>20.0 TPS Tick-Rate Stability</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sub-15ms Low Latency Routing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant Pterodactyl Provisioning</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Pterodactyl Console & Node Inspector (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-white dark:bg-[#111420] border border-gray-200 dark:border-white/[0.08] shadow-2xl shadow-black/20 overflow-hidden">
              
              {/* Window Header: macOS dots + Hostname + Live Status */}
              <div className="px-4 py-3 bg-gray-100 dark:bg-[#171b2c] border-b border-gray-200 dark:border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-gray-500 dark:text-gray-400">
                    node-del-01.treemc.host
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    20.0 TPS • ONLINE
                  </span>
                </div>
              </div>

              {/* Inspector Mode Tabs */}
              <div className="p-2 bg-gray-50 dark:bg-[#141724] border-b border-gray-200 dark:border-white/[0.06] flex gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("console")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "console"
                      ? "bg-white dark:bg-[#1c2136] text-gray-900 dark:text-white shadow-xs"
                      : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Live Console</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("hardware")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "hardware"
                      ? "bg-white dark:bg-[#1c2136] text-gray-900 dark:text-white shadow-xs"
                      : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Hardware</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("network")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "network"
                      ? "bg-white dark:bg-[#1c2136] text-gray-900 dark:text-white shadow-xs"
                      : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Datacenters</span>
                </button>
              </div>

              {/* Tab 1: Live Server Console */}
              {activeTab === "console" && (
                <div className="p-4 bg-gray-950 text-gray-200 font-mono text-xs leading-relaxed min-h-[260px] flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <p className="text-gray-500 text-[11px]">
                      [18:24:01 INFO]: Loading Minecraft server 1.21.1 (Paper / Purpur)...
                    </p>
                    <p className="text-emerald-400">
                      [18:24:02 INFO]: CPU: AMD Ryzen™ 9 9950X (5.7 GHz Boost Clock)
                    </p>
                    <p className="text-cyan-400">
                      [18:24:02 INFO]: Network: Allocating 3 Ports (25565, 8123, 19132)...
                    </p>
                    <p className="text-gray-400">
                      [18:24:03 INFO]: Anti-DDoS Anycast L4/L7 Scrubbing active (0 dropped)
                    </p>
                    <p className="text-emerald-400 font-bold">
                      [18:24:03 INFO]: Done (2.14s)! For help, type &quot;help&quot;
                    </p>
                    <p className="text-amber-300">
                      [18:24:04 SERVER]: TPS: 20.0 | Memory: 2.1 GB / 8.0 GB (Allocated)
                    </p>
                    
                    <div className="pt-2 border-t border-gray-800 text-[11px]">
                      <span className="text-gray-500">treemc@node:~$ </span>
                      <span className="text-emerald-400">{consoleCommand}</span>
                      <p className="text-gray-300 mt-1">{consoleOutput}</p>
                    </div>
                  </div>

                  {/* Interactive Quick Command Trigger Bar */}
                  <div className="pt-3 mt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-gray-500">Run quick check:</span>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => runCommand("tps")}
                        className="px-2 py-0.5 rounded bg-gray-800 hover:bg-gray-700 text-emerald-400 text-[10px]"
                      >
                        tps
                      </button>
                      <button
                        type="button"
                        onClick={() => runCommand("ports")}
                        className="px-2 py-0.5 rounded bg-gray-800 hover:bg-gray-700 text-cyan-400 text-[10px]"
                      >
                        ports
                      </button>
                      <button
                        type="button"
                        onClick={() => runCommand("cpu")}
                        className="px-2 py-0.5 rounded bg-gray-800 hover:bg-gray-700 text-amber-300 text-[10px]"
                      >
                        cpu
                      </button>
                      <button
                        type="button"
                        onClick={() => runCommand("memory")}
                        className="px-2 py-0.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 text-[10px]"
                      >
                        memory
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Hardware Telemetry */}
              {activeTab === "hardware" && (
                <div className="p-5 bg-white dark:bg-[#111420] min-h-[260px] flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                        <span className="flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                          <span>AMD Ryzen™ 9 9950X</span>
                        </span>
                        <span className="font-mono text-emerald-500">14% Load • 5.7 GHz</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[14%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                        <span className="flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Allocated Memory</span>
                        </span>
                        <span className="font-mono text-emerald-500">2.1 GB / 8.0 GB (26%)</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[26%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                        <span className="flex items-center gap-1.5">
                          <HardDrive className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Enterprise Gen4 NVMe</span>
                        </span>
                        <span className="font-mono text-emerald-500">7,100 MB/s Read Speed</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[18%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                        <span className="flex items-center gap-1.5">
                          <Network className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Port Allocations</span>
                        </span>
                        <span className="font-mono text-emerald-500">3 Assigned (1 Main + 2 Extra)</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[38%]" />
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-2">
                    Zero overselling guarantee. Every server is provisioned with strictly isolated compute slices.
                  </p>
                </div>
              )}

              {/* Tab 3: Datacenter Latency Radar */}
              {activeTab === "network" && (
                <div className="p-4 bg-white dark:bg-[#111420] min-h-[260px] flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#171b2c] border border-gray-200/60 dark:border-white/[0.05] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Image src="/flags/india.png" alt="India" width={20} height={14} className="rounded-xs object-cover" />
                        <div>
                          <p className="text-xs font-bold text-gray-900 dark:text-white">India (Noida &amp; Delhi NCR)</p>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400">Primary Core Cluster</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">&lt; 8ms</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#171b2c] border border-gray-200/60 dark:border-white/[0.05] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Image src="/flags/germany.png" alt="Germany" width={20} height={14} className="rounded-xs object-cover" />
                        <div>
                          <p className="text-xs font-bold text-gray-900 dark:text-white">Germany (Frankfurt EU)</p>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400">European Edge Hub</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">&lt; 24ms</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#171b2c] border border-gray-200/60 dark:border-white/[0.05] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Image src="/flags/singapore.png" alt="Singapore" width={20} height={14} className="rounded-xs object-cover" />
                        <div>
                          <p className="text-xs font-bold text-gray-900 dark:text-white">Singapore (Equinix SG1)</p>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400">Asia-Pacific Hub</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">&lt; 28ms</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#171b2c] border border-gray-200/60 dark:border-white/[0.05] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Image src="/flags/dubai.png" alt="Dubai" width={20} height={14} className="rounded-xs object-cover" />
                        <div>
                          <p className="text-xs font-bold text-gray-900 dark:text-white">Dubai (UAE Gateway)</p>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400">Middle East Gateway</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">&lt; 32ms</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center mt-2 font-mono">
                    Direct BGP Anycast routing with Path &amp; Voxility mitigation
                  </p>
                </div>
              )}

              {/* Card Footer: Starting Price + Direct Deployment Button */}
              <div className="p-4 bg-gray-50 dark:bg-[#171b2c] border-t border-gray-200 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 block font-mono">Plans starting at</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black orbitron-font tabular-nums text-gray-900 dark:text-white">
                      {convertPrice("99")}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">/mo</span>
                  </div>
                </div>

                <Link
                  href="/games"
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs sm:text-sm active:scale-[0.98] transition-all flex items-center gap-1.5 shadow-sm group"
                >
                  <span>Deploy Server in 60s</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Enterprise Partners Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-14 pt-8 border-t border-gray-200/80 dark:border-white/[0.06]"
        >
          <div className="text-center text-[11px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
            Enterprise Cloud &amp; Hardware Infrastructure Partners
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 hover:opacity-100 transition-opacity">
            {partners.map((partner, index) => (
              <div key={index} className="h-7 w-24 sm:w-28 relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}