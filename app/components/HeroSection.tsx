'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Server,
  Check,
  Copy,
  CheckCheck,
  Terminal as TerminalIcon,
  Cpu,
  Zap,
  Globe
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
  const [activeTab, setActiveTab] = useState<"minecraft" | "vps" | "latency">("minecraft")

  const terminalTabs = {
    minecraft: {
      file: "deploy-minecraft.sh",
      command: "treemc deploy --game=minecraft --ram=8G --loc=india",
      lines: [
        { type: "info", text: "Connecting to TreeMC Edge Mesh [Noida Datacenter]..." },
        { type: "step", text: "[1/4] Allocating AMD Ryzen™ 9 9950X dedicated slice...", status: "DONE" },
        { type: "step", text: "[2/4] Binding 1 Dedicated IPv4 + 4 Port Allocations...", status: "DONE" },
        { type: "step", text: "[3/4] Mounting 60 GB Enterprise Gen4 NVMe (7,000 MB/s)...", status: "DONE" },
        { type: "step", text: "[4/4] Activating 17+ Tbit/s BGP DDoS Scrubbing Shield...", status: "DONE" },
        { type: "success", text: "✔ Paper 1.21.1 server running at play.treemc.host:25565" },
        { type: "link", text: "✔ Pterodactyl Panel: https://panel.treemc.host" },
      ]
    },
    vps: {
      file: "deploy-vps.sh",
      command: "treemc vps create --plan=pro --vcpu=6 --ram=16G",
      lines: [
        { type: "info", text: "Spawning enterprise KVM instance on AMD EPYC™ node..." },
        { type: "step", text: "[1/4] Provisioning 6 Dedicated vCores (Zero Throttling)...", status: "DONE" },
        { type: "step", text: "[2/4] Allocating 150 GB NVMe Gen4 Storage Pool...", status: "DONE" },
        { type: "step", text: "[3/4] Static Dedicated IPv4 + /64 IPv6 Subnet routed...", status: "DONE" },
        { type: "step", text: "[4/4] Full Root, SSH & Daily Automated Snapshots...", status: "DONE" },
        { type: "success", text: "✔ Cloud VPS active: root@194.26.18.42 (SSH ready)" },
        { type: "link", text: "✔ Virtualizor/KVM Portal: https://vps.treemc.host" },
      ]
    },
    latency: {
      file: "edge-status.sh",
      command: "treemc ping --all-regions",
      lines: [
        { type: "info", text: "Probing BGP Anycast scrubbing edge clusters..." },
        { type: "ping", host: "India (Noida DC)", time: "< 6ms", status: "OPTIMAL" },
        { type: "ping", host: "India (Delhi DC)", time: "< 8ms", status: "OPTIMAL" },
        { type: "ping", host: "Germany (Frankfurt)", time: "< 24ms", status: "OPTIMAL" },
        { type: "ping", host: "Singapore (SG)", time: "< 28ms", status: "OPTIMAL" },
        { type: "success", text: "✔ All edge routes operational with unmetered 1 Gbps uplink" },
        { type: "link", text: "✔ Realtime telemetry: https://status.treemc.host" },
      ]
    }
  }

  const currentTerminal = terminalTabs[activeTab]

  const copyTerminalOutput = () => {
    const text = [
      `$ ${currentTerminal.command}`,
      ...currentTerminal.lines.map(l => "host" in l ? `${l.host}: ${l.time} [${l.status}]` : l.text)
    ].join("\n")
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative pt-20 sm:pt-24 pb-14 overflow-hidden bg-[#0a0c10] text-[#f0f6fc] border-b border-[#21262d]">
      {/* Subtle obsidian ambient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(88,166,255,0.06),rgba(10,12,16,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(35,134,54,0.04),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Authoritative Stark Proposition */}
          <div className="lg:col-span-6 text-left">
            
            {/* Authoritative Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-5 font-sans"
            >
              Unmetered Minecraft &amp; High-Frequency Cloud Nodes
            </motion.h1>

            {/* Professional Authentic Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-sm sm:text-base text-[#8b949e] leading-relaxed mb-8 max-w-xl"
            >
              Deploy enterprise Minecraft servers and unthrottled KVM cloud instances in seconds. Powered by AMD Ryzen™ 9 9950X and AMD EPYC™ hardware with authentic 2-to-8 port allocations, Gen4 NVMe storage, and automated 17+ Tbit/s DDoS mitigation.
            </motion.p>

            {/* Stark Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.14 }}
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
              transition={{ duration: 0.35, delay: 0.18 }}
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

          {/* Right Column: Clean Modern Cloud Terminal (like ateex.cloud) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl shadow-2xl overflow-hidden font-mono text-left"
            >
              {/* macOS Style Window Chrome */}
              <div className="bg-[#161b22] px-4 py-3 border-b border-[#21262d] flex items-center justify-between select-none">
                {/* Traffic light dots */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                  <span className="ml-2 text-xs font-mono text-[#8b949e] hidden sm:inline">
                    treemc@cloud:~ ({currentTerminal.file})
                  </span>
                </div>

                {/* Tab selector and Copy button */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#0d1117] p-0.5 rounded border border-[#21262d] text-[11px]">
                    <button
                      onClick={() => setActiveTab("minecraft")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeTab === "minecraft"
                          ? "bg-[#21262d] text-white font-semibold"
                          : "text-[#8b949e] hover:text-[#c9d1d9]"
                      }`}
                    >
                      Game
                    </button>
                    <button
                      onClick={() => setActiveTab("vps")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeTab === "vps"
                          ? "bg-[#21262d] text-white font-semibold"
                          : "text-[#8b949e] hover:text-[#c9d1d9]"
                      }`}
                    >
                      VPS
                    </button>
                    <button
                      onClick={() => setActiveTab("latency")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeTab === "latency"
                          ? "bg-[#21262d] text-white font-semibold"
                          : "text-[#8b949e] hover:text-[#c9d1d9]"
                      }`}
                    >
                      Ping
                    </button>
                  </div>

                  <button
                    onClick={copyTerminalOutput}
                    title="Copy Terminal Output"
                    className="p-1.5 rounded bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-[#8b949e] hover:text-white transition-colors"
                  >
                    {copied ? (
                      <CheckCheck className="w-3.5 h-3.5 text-[#2ea043]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed text-[#c9d1d9] h-[270px] overflow-y-auto font-mono">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-1.5"
                  >
                    {/* Prompt and command */}
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <span className="text-[#2ea043]">treemc@node-01</span>
                      <span className="text-[#8b949e]">:</span>
                      <span className="text-[#58a6ff]">~</span>
                      <span className="text-[#8b949e]">$</span>
                      <span className="text-[#f0f6fc]">{currentTerminal.command}</span>
                    </div>

                    {/* Output lines */}
                    {currentTerminal.lines.map((line, idx) => {
                      if ("host" in line) {
                        return (
                          <div key={idx} className="flex items-center justify-between text-xs py-0.5 border-b border-[#21262d]/50">
                            <span className="text-[#8b949e]">{line.host}</span>
                            <span className="text-[#58a6ff] font-bold">{line.time}</span>
                            <span className="text-[#2ea043] font-semibold text-[11px] bg-[#238636]/15 px-1.5 py-0.2 rounded border border-[#238636]/30">
                              {line.status}
                            </span>
                          </div>
                        )
                      }

                      if (line.type === "info") {
                        return (
                          <div key={idx} className="text-[#8b949e] text-xs">
                            {line.text}
                          </div>
                        )
                      }

                      if (line.type === "step") {
                        return (
                          <div key={idx} className="flex items-center justify-between text-xs">
                            <span className="text-[#c9d1d9]">{line.text}</span>
                            <span className="text-[#2ea043] font-semibold text-[11px] shrink-0 ml-2">
                              {line.status}
                            </span>
                          </div>
                        )
                      }

                      if (line.type === "success") {
                        return (
                          <div key={idx} className="text-[#2ea043] font-semibold pt-1">
                            {line.text}
                          </div>
                        )
                      }

                      if (line.type === "link") {
                        return (
                          <div key={idx} className="text-[#58a6ff]">
                            {line.text}
                          </div>
                        )
                      }

                      return null
                    })}

                    {/* Blinking cursor line */}
                    <div className="flex items-center gap-2 pt-2 text-[#8b949e]">
                      <span className="text-[#2ea043]">treemc@node-01</span>
                      <span>:</span>
                      <span className="text-[#58a6ff]">~</span>
                      <span>$</span>
                      <span className="w-2 h-4 bg-[#58a6ff] inline-block animate-pulse" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Terminal Footer Info Bar */}
              <div className="bg-[#161b22] px-4 py-2 border-t border-[#21262d] flex items-center justify-between text-[11px] text-[#8b949e] select-none font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2ea043]" />
                  <span>NVMe Gen4 • 1 Gbps Unmetered</span>
                </div>
                <div>AMD Ryzen™ 9 9950X / AMD EPYC™</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enterprise Cloud & Hardware Infrastructure Partners */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
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
