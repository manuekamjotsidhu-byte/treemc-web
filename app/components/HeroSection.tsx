'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Server,
  Shield,
  Check,
  Copy,
  CheckCheck,
  Terminal,
  Network,
  FolderTree,
  RotateCw,
  Square,
  Play,
  FileCode,
  HardDrive
} from "lucide-react"

const partners = [
  { name: "AMD EPYC", src: "/cpu/epyc.png" },
  { name: "Intel", src: "/advertisement/intel.png" },
  { name: "Samsung NVMe", src: "/advertisement/samsung.png" },
  { name: "Pterodactyl", src: "/advertisement/pterodactyl.png" },
  { name: "Hetzner", src: "/advertisement/hetzner.png" },
  { name: "NeoProtect", src: "/advertisement/neoprotect.png" },
]

export default function HeroSection() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<"console" | "allocations" | "files">("console")
  const [serverState, setServerState] = useState<"running" | "restarting">("running")

  const copyIp = () => {
    navigator.clipboard.writeText("node-in-01.treemc.host:25565")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRestart = () => {
    if (serverState === "running") {
      setServerState("restarting")
      setTimeout(() => setServerState("running"), 1400)
    }
  }

  return (
    <section className="relative pt-24 sm:pt-28 pb-14 overflow-hidden bg-[#0a0c10] text-[#f0f6fc] border-b border-[#21262d]">
      {/* Subtle obsidian ambient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(88,166,255,0.06),rgba(10,12,16,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(35,134,54,0.04),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Authoritative Stark Proposition */}
          <div className="lg:col-span-6 text-left">
            
            {/* Stark Node Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#12161f] border border-[#21262d] text-xs font-mono text-[#8b949e] mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#238636] shadow-[0_0_6px_#2ea043] animate-pulse" />
              <span className="text-[#c9d1d9]">WINGS DAEMON v1.11 READY</span>
              <span className="text-[#30363d]">•</span>
              <span className="text-[#58a6ff]">SUB-15MS EDGE MESH</span>
            </motion.div>

            {/* Authoritative Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-5 font-sans"
            >
              Unmetered Minecraft &amp; High-Frequency Cloud Nodes
            </motion.h1>

            {/* Professional Authentic Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="text-sm sm:text-base text-[#8b949e] leading-relaxed mb-8 max-w-xl"
            >
              Deploy enterprise Minecraft servers and unthrottled KVM cloud instances in seconds. Powered by AMD Ryzen™ 9 9950X and AMD EPYC™ hardware with authentic 2-to-8 port allocations, Gen4 NVMe storage, and automated 17+ Tbit/s DDoS mitigation.
            </motion.p>

            {/* Stark Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <Link
                href="/games"
                className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-[4px] bg-[#238636] hover:bg-[#2ea043] border border-white/10 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm active:scale-[0.99]"
              >
                <span>Deploy Minecraft Server</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/vps"
                className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-[4px] bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] hover:border-[#8b949e] text-[#c9d1d9] hover:text-white font-medium text-xs sm:text-sm transition-colors active:scale-[0.99]"
              >
                <Server className="w-4 h-4 text-[#58a6ff]" />
                <span>Explore Cloud VPS &amp; VDS</span>
              </Link>
            </motion.div>

            {/* Stark Technical Specifications Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="grid grid-cols-2 gap-2.5 max-w-lg pt-6 border-t border-[#21262d]"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-[4px] bg-[#12161f]/80 border border-[#21262d] text-xs">
                <Check className="w-3.5 h-3.5 text-[#2ea043] shrink-0" />
                <span className="text-[#c9d1d9] font-medium">2 to 8 Ports per Node</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-[4px] bg-[#12161f]/80 border border-[#21262d] text-xs">
                <Check className="w-3.5 h-3.5 text-[#2ea043] shrink-0" />
                <span className="text-[#c9d1d9] font-medium">Enterprise Gen4 NVMe</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-[4px] bg-[#12161f]/80 border border-[#21262d] text-xs">
                <Check className="w-3.5 h-3.5 text-[#2ea043] shrink-0" />
                <span className="text-[#c9d1d9] font-medium">Dedicated IPv4 &amp; IPv6</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-[4px] bg-[#12161f]/80 border border-[#21262d] text-xs">
                <Check className="w-3.5 h-3.5 text-[#2ea043] shrink-0" />
                <span className="text-[#c9d1d9] font-medium">Sub-15ms Anycast Routing</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Authentic Stark Pterodactyl Server Inspector & Console */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="w-full bg-[#12161f] border border-[#21262d] rounded-md shadow-2xl overflow-hidden font-sans text-left"
            >
              {/* Stark Header (.sv-head) */}
              <div className="bg-[#161b22] border-b border-[#21262d] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className={`w-2.5 h-2.5 rounded-full ${serverState === "running" ? "bg-[#238636] shadow-[0_0_8px_#2ea043] animate-pulse" : "bg-[#d29922] animate-spin"}`} />
                  <span className="font-semibold text-xs sm:text-sm text-[#f0f6fc] truncate">smp-production-01</span>
                  <span className="font-mono text-[11px] text-[#8b949e] bg-[#0d1117] px-2 py-0.5 rounded border border-[#21262d] shrink-0">
                    node-in-01 • 7f2a9c4b
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider font-mono ${
                    serverState === "running"
                      ? "bg-[#238636]/20 border border-[#238636]/40 text-[#2ea043]"
                      : "bg-[#d29922]/20 border border-[#d29922]/40 text-[#f0883e]"
                  }`}>
                    {serverState === "running" ? "RUNNING" : "RESTARTING"}
                  </span>
                  
                  {/* Stark Action Controls */}
                  <button
                    onClick={handleRestart}
                    title="Restart Node"
                    className="w-7 h-7 rounded-[4px] bg-[#12161f] hover:bg-[#21262d] border border-[#30363d] text-[#c9d1d9] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {}}
                    title="Stop Node"
                    className="w-7 h-7 rounded-[4px] bg-[#12161f] hover:bg-[#da3633]/20 border border-[#30363d] hover:border-[#da3633] text-[#c9d1d9] hover:text-[#f85149] flex items-center justify-center transition-colors"
                  >
                    <Square className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Stark Metric Readout Bars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#21262d]">
                <div className="bg-[#12161f] p-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8b949e] mb-1">CPU Load</div>
                  <div className="text-xs font-mono font-bold text-[#f0f6fc] mb-1.5">14.8% <span className="text-[10px] font-normal text-[#8b949e]">/ 400%</span></div>
                  <div className="w-full h-1 bg-[#21262d] rounded-full overflow-hidden">
                    <div className="w-[14.8%] h-full bg-[#58a6ff] rounded-full" />
                  </div>
                </div>

                <div className="bg-[#12161f] p-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8b949e] mb-1">Memory</div>
                  <div className="text-xs font-mono font-bold text-[#f0f6fc] mb-1.5">4.12 <span className="text-[10px] font-normal text-[#8b949e]">/ 8.00 GB</span></div>
                  <div className="w-full h-1 bg-[#21262d] rounded-full overflow-hidden">
                    <div className="w-[51.5%] h-full bg-[#2ea043] rounded-full" />
                  </div>
                </div>

                <div className="bg-[#12161f] p-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8b949e] mb-1">Gen4 NVMe</div>
                  <div className="text-xs font-mono font-bold text-[#f0f6fc] mb-1.5">16.2 <span className="text-[10px] font-normal text-[#8b949e]">/ 60.0 GB</span></div>
                  <div className="w-full h-1 bg-[#21262d] rounded-full overflow-hidden">
                    <div className="w-[27%] h-full bg-[#d29922] rounded-full" />
                  </div>
                </div>

                <div className="bg-[#12161f] p-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8b949e] mb-1">Bandwidth</div>
                  <div className="text-xs font-mono font-bold text-[#f0f6fc] mb-1.5">↑ 3.2 <span className="text-[10px] font-normal text-[#8b949e]">MB/s</span></div>
                  <div className="text-[10px] font-mono text-[#8b949e]">1 Gbps Unmetered</div>
                </div>
              </div>

              {/* Direct Allocation Address & Copy Bar */}
              <div className="bg-[#0d1117] px-4 py-2.5 border-b border-[#21262d] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 truncate text-[#c9d1d9]">
                  <span className="text-[#8b949e]">ADDR:</span>
                  <span className="text-[#58a6ff] select-all">node-in-01.treemc.host:25565</span>
                  <span className="hidden sm:inline text-[10px] text-[#8b949e] bg-[#161b22] px-1.5 py-0.5 rounded border border-[#21262d]">
                    +3 Extra Ports
                  </span>
                </div>
                <button
                  onClick={copyIp}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-[11px] text-[#c9d1d9] hover:text-white transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-[#2ea043]" />
                      <span className="text-[#2ea043]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8b949e]" />
                      <span>COPY IP</span>
                    </>
                  )}
                </button>
              </div>

              {/* Interactive Stark Tabs */}
              <div className="bg-[#161b22] border-b border-[#21262d] px-3 flex items-center gap-1 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("console")}
                  className={`px-3 py-2 border-b-2 font-medium flex items-center gap-1.5 transition-colors ${
                    activeTab === "console"
                      ? "border-[#58a6ff] text-[#58a6ff]"
                      : "border-transparent text-[#8b949e] hover:text-[#c9d1d9]"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Console</span>
                </button>
                <button
                  onClick={() => setActiveTab("allocations")}
                  className={`px-3 py-2 border-b-2 font-medium flex items-center gap-1.5 transition-colors ${
                    activeTab === "allocations"
                      ? "border-[#58a6ff] text-[#58a6ff]"
                      : "border-transparent text-[#8b949e] hover:text-[#c9d1d9]"
                  }`}
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Allocations (4)</span>
                </button>
                <button
                  onClick={() => setActiveTab("files")}
                  className={`px-3 py-2 border-b-2 font-medium flex items-center gap-1.5 transition-colors ${
                    activeTab === "files"
                      ? "border-[#58a6ff] text-[#58a6ff]"
                      : "border-transparent text-[#8b949e] hover:text-[#c9d1d9]"
                  }`}
                >
                  <FolderTree className="w-3.5 h-3.5" />
                  <span>Files</span>
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="bg-[#0a0c10] p-3 sm:p-3.5 font-mono text-[11px] leading-relaxed select-none h-40 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === "console" && (
                    <motion.div
                      key="console"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-1 text-[#c9d1d9]"
                    >
                      <div className="text-[#8b949e]">[TreeMC Wings] Daemon v1.11.8 connected to Node India-Noida (Direct Fibre)</div>
                      <div className="text-[#8b949e]">[TreeMC Shield] BGP Anycast DDoS mitigation active (17+ Tbit/s threshold)</div>
                      <div className="text-[#58a6ff]">[Paper/Purpur] Starting minecraft server version 1.21.1</div>
                      <div className="text-[#8b949e]">[Paper/Purpur] Loading world: &quot;world&quot; (Default), &quot;world_nether&quot;, &quot;world_the_end&quot;</div>
                      <div className="text-[#8b949e]">[Paper/Purpur] Preparing start region for dimension minecraft:overworld</div>
                      <div className="text-[#2ea043]">[TreeMC Allocation] Listening on 0.0.0.0:25565 [Primary] + 3 secondary ports</div>
                      <div className="text-[#f0f6fc] font-semibold">[Server thread/INFO]: Done (1.842s)! For help, type &quot;help&quot;</div>
                    </motion.div>
                  )}

                  {activeTab === "allocations" && (
                    <motion.div
                      key="allocations"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-1.5"
                    >
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#12161f] border border-[#21262d]">
                        <span className="text-[#58a6ff] font-bold">25565</span>
                        <span className="text-[#8b949e]">TCP/UDP</span>
                        <span className="text-[#2ea043] font-semibold">PRIMARY (GAME)</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#12161f] border border-[#21262d]">
                        <span className="text-[#c9d1d9] font-bold">19132</span>
                        <span className="text-[#8b949e]">UDP</span>
                        <span className="text-[#8b949e]">GEYSER BEDROCK</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#12161f] border border-[#21262d]">
                        <span className="text-[#c9d1d9] font-bold">8123</span>
                        <span className="text-[#8b949e]">TCP</span>
                        <span className="text-[#8b949e]">DYNMAP / BLUEMAP</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#12161f] border border-[#21262d]">
                        <span className="text-[#c9d1d9] font-bold">24454</span>
                        <span className="text-[#8b949e]">UDP</span>
                        <span className="text-[#8b949e]">VOICE CHAT PROXIMITY</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "files" && (
                    <motion.div
                      key="files"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-1 text-[#c9d1d9]"
                    >
                      <div className="flex items-center justify-between p-1 rounded hover:bg-[#161b22]">
                        <span className="text-[#58a6ff]">📁 plugins/</span>
                        <span className="text-[#8b949e]">24 items</span>
                      </div>
                      <div className="flex items-center justify-between p-1 rounded hover:bg-[#161b22]">
                        <span className="text-[#58a6ff]">📁 world/</span>
                        <span className="text-[#8b949e]">1.4 GB</span>
                      </div>
                      <div className="flex items-center justify-between p-1 rounded hover:bg-[#161b22]">
                        <span className="text-[#c9d1d9]">📄 server.properties</span>
                        <span className="text-[#8b949e]">1.2 KB</span>
                      </div>
                      <div className="flex items-center justify-between p-1 rounded hover:bg-[#161b22]">
                        <span className="text-[#c9d1d9]">📄 purpur.yml</span>
                        <span className="text-[#8b949e]">8.4 KB</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Console Input Footer */}
              <div className="bg-[#0d1117] border-t border-[#21262d] px-3 py-2 flex items-center gap-2">
                <span className="text-[#58a6ff] font-mono text-xs font-bold">$</span>
                <input
                  type="text"
                  readOnly
                  value="send command to server console..."
                  className="bg-transparent text-xs text-[#8b949e] font-mono outline-none flex-1 select-none pointer-events-none"
                />
                <button
                  type="button"
                  className="px-2.5 py-0.5 rounded-[3px] bg-[#161b22] border border-[#30363d] text-[10px] font-mono text-[#c9d1d9]"
                >
                  RUN
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enterprise Cloud & Hardware Infrastructure Partners */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-14 pt-8 border-t border-[#21262d]"
        >
          <div className="text-center text-[10px] font-mono uppercase tracking-widest text-[#8b949e] mb-5">
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
