'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { 
  VPS_PLANS, 
  getPlanById, 
  OLD_SINGAPORE_ID_MAP,
  type VPSPlan,
  type CpuModelOption
} from '../data/vpsPlans'
import { 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  ShieldCheck, 
  Network, 
  MapPin, 
  Copy, 
  Check, 
  ArrowLeft, 
  ExternalLink,
  Server,
  Sparkles,
  ChevronRight
} from 'lucide-react'

export default function OrderContent() {
  const searchParams = useSearchParams()
  const rawPlanParam = searchParams.get('plan') || 'in-xeon-xl'
  const cpuParam = searchParams.get('cpu')

  // Resolve legacy Singapore IDs if provided
  const resolvedPlanId = OLD_SINGAPORE_ID_MAP[rawPlanParam] || rawPlanParam

  const currentPlan = useMemo(() => {
    return getPlanById(resolvedPlanId) || VPS_PLANS.find(p => p.id === 'in-xeon-xl') || VPS_PLANS[0]
  }, [resolvedPlanId])

  // Selected CPU Model
  const selectedCpuModel = useMemo(() => {
    if (!currentPlan.cpuModels || currentPlan.cpuModels.length === 0) {
      return { id: "default", name: currentPlan.processorFamily }
    }
    if (cpuParam) {
      const match = currentPlan.cpuModels.find(m => m.id === cpuParam)
      if (match) return match
    }
    return currentPlan.cpuModels[0]
  }, [currentPlan, cpuParam])

  const [copied, setCopied] = useState(false)

  // Pre-written message
  const prewrittenMessage = useMemo(() => {
    return `Hello TreeMC Team,
I want to order:
- Plan: ${currentPlan.name} (${currentPlan.location})
- Processor: ${selectedCpuModel.name}
- Specs: ${currentPlan.vCores} vCores, ${currentPlan.ram} ${currentPlan.memoryType}, ${currentPlan.storage} ${currentPlan.storageType}
- Port: ${currentPlan.bandwidth}
- DDoS Protection: ${selectedCpuModel.ddos || currentPlan.protection}
- Price: ${currentPlan.priceFormatted}

Please provide payment instructions and provisioning details.`
  }, [currentPlan, selectedCpuModel])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prewrittenMessage)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#090a10] text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/[0.04] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/vps#plans" 
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All VPS Plans</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>DIRECT ORDER REQUEST DESK</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black orbitron-font text-gray-900 dark:text-white tracking-tight">
            Order {currentPlan.name} ({currentPlan.location})
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-xl">
            Review your configuration below. Copy the pre-written order details and submit a ticket via Discord or the Client Panel for verification and setup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Plan Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#10131d] border border-gray-200 dark:border-white/[0.08] rounded-2xl p-6 shadow-lg shadow-black/5 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Selected Server
                </span>
                {currentPlan.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                    {currentPlan.badge}
                  </span>
                )}
              </div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white orbitron-font mb-1">
                {currentPlan.name}
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-gray-400 mb-4">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>{currentPlan.location} Data Center</span>
              </div>

              <div className="py-4 border-y border-gray-100 dark:border-white/[0.08] my-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black orbitron-font text-emerald-500 dark:text-emerald-400">
                    {currentPlan.priceFormatted.replace('/mo', '')}
                  </span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5 font-mono">
                  Fixed monthly pricing • No hidden setup fees
                </p>
              </div>

              {/* Hardware Specifications */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between py-1.5 border-b border-gray-100 dark:border-white/[0.04]">
                  <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Processor Model</span>
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white text-right max-w-[170px] truncate" title={selectedCpuModel.name}>
                    {selectedCpuModel.name}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-gray-100 dark:border-white/[0.04]">
                  <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Server className="w-3.5 h-3.5 text-emerald-500" />
                    <span>vCores</span>
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {currentPlan.vCores} Dedicated vCores
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-gray-100 dark:border-white/[0.04]">
                  <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <MemoryStick className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Memory</span>
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {currentPlan.ram} {currentPlan.memoryType}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-gray-100 dark:border-white/[0.04]">
                  <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <HardDrive className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Storage</span>
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {currentPlan.storage} {currentPlan.storageType}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-gray-100 dark:border-white/[0.04]">
                  <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Network className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Port Speed</span>
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {currentPlan.bandwidth}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>DDoS Protection</span>
                  </span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-right">
                    {selectedCpuModel.ddos || currentPlan.protection}
                  </span>
                </div>
              </div>

              {/* Hardware Guarantee Note */}
              <div className="mt-5 p-3 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/[0.05] text-[11px] font-mono text-gray-500 dark:text-gray-400 leading-relaxed">
                Dedicated KVM virtualization ensures isolated CPU scheduling and full NVMe IOPS throughput without contention.
              </div>
            </div>
          </div>

          {/* Right Column: Pre-written message & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Copy Message */}
            <div className="bg-white dark:bg-[#10131d] border border-gray-200 dark:border-white/[0.08] rounded-2xl p-6 shadow-lg shadow-black/5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">
                    1
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    Copy Order Specification
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative">
                <pre className="p-4 rounded-xl bg-gray-50 dark:bg-[#07080c] border border-gray-200/80 dark:border-white/[0.06] text-xs font-mono text-gray-800 dark:text-gray-300 whitespace-pre-wrap leading-relaxed select-all">
                  {prewrittenMessage}
                </pre>
              </div>
            </div>

            {/* Step 2: Order Submission Channels */}
            <div className="bg-white dark:bg-[#10131d] border border-gray-200 dark:border-white/[0.08] rounded-2xl p-6 shadow-lg shadow-black/5">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  Submit via Official Channels
                </span>
              </div>

              <div className="space-y-3">
                {/* Primary: Discord Ticket */}
                <a
                  href="https://discord.gg/wbH8ZVAsYg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-4 rounded-xl font-bold text-sm text-gray-950 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center shadow-md shadow-emerald-500/20 group"
                >
                  <span>Open ticket on Discord</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center font-mono">
                  Paste the copied message in #tickets for immediate engineer response
                </p>

                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-gray-200 dark:border-white/[0.06]"></div>
                  <span className="flex-shrink mx-3 text-[11px] font-mono text-gray-400">OR</span>
                  <div className="flex-grow border-t border-gray-200 dark:border-white/[0.06]"></div>
                </div>

                {/* Secondary: Client Panel */}
                <a
                  href="https://panel.treemchost.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-mono text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-[#161a26] hover:bg-gray-200 dark:hover:bg-[#1d2232] border border-gray-200 dark:border-white/[0.08] transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Server className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Access Client Panel</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Payment & Provisioning Note */}
            <div className="border border-gray-200/80 dark:border-white/[0.06] rounded-2xl p-4 bg-gray-50/80 dark:bg-[#0c0e16] text-xs text-gray-600 dark:text-gray-400 space-y-1.5 font-sans">
              <p className="font-semibold text-gray-900 dark:text-white">Supported Payment Methods</p>
              <p>UPI (GPay, PhonePe, Paytm), IMPS/NEFT NetBanking, Debit/Credit Cards, and major Cryptocurrencies.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
