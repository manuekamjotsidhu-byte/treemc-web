'use client'

import { useState } from 'react'
import { Terminal, Copy, Check, Server, Shield, Cpu } from 'lucide-react'

export default function VPSTerminal() {
  const [copied, setCopied] = useState(false)

  const terminalCommands = `# 1. Connect to your server with full root privileges
ssh root@your-server-ip

# 2. Update package repositories and inspect allocated resources
apt update && apt upgrade -y
lscpu | grep "Model name"
free -h && lsblk

# 3. Optional: Install Docker runtime or web application stack
curl -fsSL https://get.docker.com | sh
docker --version`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(terminalCommands)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07080a] text-gray-100 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Technical Facts */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16201a] border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono font-medium mb-3">
              <span>ZERO FLUFF • UNRESTRICTED ACCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Full Root Access On Your Terms
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 font-sans">
              Every TreemcHost cloud VPS provides bare metal isolation via KVM. You receive a dedicated static IPv4, custom SSH key access, and unrestricted permissions to run Docker containers, database engines, gaming daemons, or custom kernels.
            </p>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#111317] border border-white/[0.06]">
                <Cpu className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans text-xs">Direct KVM Hardware Virtualization</strong>
                  <span className="text-gray-400 font-sans">Dedicated CPU cycles with no CPU throttling or burst penalties.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#111317] border border-white/[0.06]">
                <Server className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans text-xs">India Data Center Routing</strong>
                  <span className="text-gray-400 font-sans">Direct connectivity through domestic Internet exchanges (NIXI) in Mumbai and Noida.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#111317] border border-white/[0.06]">
                <Shield className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans text-xs">Always-On L3/L4/L7 Mitigation</strong>
                  <span className="text-gray-400 font-sans">Upstream packet scrubbing filters malicious volumetric floods before reaching your port.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Component */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/[0.1] bg-[#0c0d11] overflow-hidden shadow-2xl">
              
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-[#13151b] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-gray-400 ml-2">bash — root@treemc-vps:~</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-gray-400 hover:text-white bg-[#1a1d24] border border-white/[0.08] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#22c55e]" />
                      <span className="text-[#22c55e]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto">
                <pre className="text-gray-300">
                  <span className="text-gray-500"># 1. Connect to your server with full root privileges</span>{"\n"}
                  <span className="text-[#22c55e]">$</span> ssh root@your-server-ip{"\n\n"}
                  <span className="text-gray-500"># 2. Update package repositories and inspect allocated resources</span>{"\n"}
                  <span className="text-[#22c55e]">$</span> apt update && apt upgrade -y{"\n"}
                  <span className="text-[#22c55e]">$</span> lscpu | grep "Model name"{"\n"}
                  <span className="text-[#22c55e]">$</span> free -h && lsblk{"\n\n"}
                  <span className="text-gray-500"># 3. Optional: Install Docker runtime or web application stack</span>{"\n"}
                  <span className="text-[#22c55e]">$</span> curl -fsSL https://get.docker.com | sh{"\n"}
                  <span className="text-[#22c55e]">$</span> docker --version
                </pre>
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 bg-[#0e1014] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                  <span>SSH port: 22 (Default)</span>
                </div>
                <span>IPv4: Dedicated Static</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
