'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { VPS_PLANS, getPlanById, type VPSPlan } from '../data/vpsPlans'
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
  HelpCircle
} from 'lucide-react'

export default function OrderContent() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get('plan') || 'xeon-xl'
  const [selectedPlanId, setSelectedPlanId] = useState<string>(planParam)
  const [copied, setCopied] = useState(false)

  const currentPlan = useMemo(() => {
    return getPlanById(selectedPlanId) || VPS_PLANS[4] // fallback to Xeon XL
  }, [selectedPlanId])

  const prewrittenMessage = useMemo(() => {
    return `Hello TreeMC Team,
I would like to order the ${currentPlan.name} VPS:
- Processor: ${currentPlan.processor}
- Compute: ${currentPlan.vCores} vCores
- RAM: ${currentPlan.ram}
- Storage: ${currentPlan.storage} NVMe SSD
- Port: ${currentPlan.bandwidth}
- DDoS Protection: ${currentPlan.protection}
- Location: ${currentPlan.location}
- Price: ${currentPlan.priceFormatted}

Please share the payment instructions (UPI / Card / NetBanking) and setup details.`
  }, [currentPlan])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prewrittenMessage)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // fallback
    }
  }

  return (
    <div className="min-h-screen bg-[#090a0d] text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/#plans" 
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All VPS Plans</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16201a] border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono font-medium mb-3">
            <span>ORDER REQUEST DESK</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Complete Your VPS Order
          </h1>
          <p className="text-sm text-gray-400 mt-1 max-w-xl">
            Copy the pre-written order message below and open a ticket on Discord. Our engineers verify node capacity and provision your isolated KVM server.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Plan Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111317] border border-white/[0.08] rounded-xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  Selected Configuration
                </span>
                {currentPlan.badge && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e]">
                    {currentPlan.badge}
                  </span>
                )}
              </div>

              <h2 className="text-xl font-bold text-white mb-1">
                {currentPlan.name}
              </h2>
              <p className="text-xs text-gray-400 font-mono mb-4">
                {currentPlan.processor}
              </p>

              <div className="py-3 border-y border-white/[0.08] my-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white font-mono tracking-tight">
                    {currentPlan.priceFormatted.replace('/mo', '')}
                  </span>
                  <span className="text-xs font-mono text-gray-400">/month</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5 font-mono">
                  Fixed pricing • No hidden renewal fees
                </p>
              </div>

              {/* Hardware Specifications */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between text-gray-300">
                  <span className="flex items-center gap-2 text-gray-400">
                    <Cpu className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>vCores</span>
                  </span>
                  <span className="font-semibold text-white">{currentPlan.vCores} vCores</span>
                </div>

                <div className="flex items-center justify-between text-gray-300">
                  <span className="flex items-center gap-2 text-gray-400">
                    <MemoryStick className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>Memory</span>
                  </span>
                  <span className="font-semibold text-white">{currentPlan.ram} DDR4 ECC</span>
                </div>

                <div className="flex items-center justify-between text-gray-300">
                  <span className="flex items-center gap-2 text-gray-400">
                    <HardDrive className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>Storage</span>
                  </span>
                  <span className="font-semibold text-white">{currentPlan.storage} NVMe SSD</span>
                </div>

                <div className="flex items-center justify-between text-gray-300">
                  <span className="flex items-center gap-2 text-gray-400">
                    <Network className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>Network</span>
                  </span>
                  <span className="font-semibold text-white">{currentPlan.bandwidth} Uplink</span>
                </div>

                <div className="flex items-center justify-between text-gray-300">
                  <span className="flex items-center gap-2 text-gray-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>DDoS Defense</span>
                  </span>
                  <span className="font-semibold text-white">{currentPlan.protection}</span>
                </div>

                <div className="flex items-center justify-between text-gray-300">
                  <span className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>Location</span>
                  </span>
                  <span className="font-semibold text-white">{currentPlan.location}</span>
                </div>
              </div>

              {/* Plan Switcher */}
              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <label htmlFor="planSelect" className="block text-[11px] font-mono text-gray-400 mb-1.5">
                  Switch Plan Tier:
                </label>
                <select
                  id="planSelect"
                  value={selectedPlanId}
                  onChange={(e) => setSelectedPlanId(e.target.value)}
                  className="w-full bg-[#16181f] border border-white/[0.12] rounded-lg px-3 py-2 text-xs font-mono text-gray-200 focus:outline-none focus:border-[#22c55e]"
                >
                  <optgroup label="Intel Xeon Standard">
                    {VPS_PLANS.filter(p => p.category === 'xeon').map(p => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.vCores}C / {p.ram} / {p.storage}) — {p.priceFormatted}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="AMD EPYC Enterprise">
                    {VPS_PLANS.filter(p => p.category === 'epyc').map(p => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.vCores}C / {p.ram} / {p.storage}) — {p.priceFormatted}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Verification Notice */}
            <div className="p-4 rounded-xl bg-[#111317] border border-white/[0.06] flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <div className="text-xs text-gray-400 leading-relaxed font-sans">
                <p className="font-medium text-gray-300 mb-1">Human Provisioning Guarantee</p>
                Every VPS instance is manually verified before handoff to guarantee dedicated CPU allocation, zero IOPS throttling, and clean IP routing.
              </div>
            </div>
          </div>

          {/* Right Column: Pre-written message & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Copy Message */}
            <div className="bg-[#111317] border border-white/[0.08] rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#22c55e]/20 text-[#22c55e] text-xs font-mono font-bold flex items-center justify-center">
                    1
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Copy Order Details
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all bg-[#1c221e] hover:bg-[#253028] text-[#22c55e] border border-[#22c55e]/30 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Message</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative">
                <pre className="p-4 rounded-lg bg-[#07080a] border border-white/[0.06] text-xs font-mono text-gray-300 whitespace-pre-wrap leading-relaxed select-all">
                  {prewrittenMessage}
                </pre>
              </div>
            </div>

            {/* Step 2: Open Ticket */}
            <div className="bg-[#111317] border border-white/[0.08] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-5 rounded-full bg-[#22c55e]/20 text-[#22c55e] text-xs font-mono font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-sm font-semibold text-white">
                  Submit via Official Channels
                </span>
              </div>

              <div className="space-y-3">
                {/* Primary: Discord Ticket */}
                <a
                  href="https://discord.gg/wbH8ZVAsYg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-lg font-semibold text-sm text-[#041c14] bg-[#22c55e] hover:bg-[#16a34a] transition-all flex items-center justify-center gap-2 text-center shadow-sm"
                >
                  <span>Open ticket on Discord</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-gray-400 text-center font-mono">
                  Paste the copied message in #tickets for instant response
                </p>

                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-white/[0.06]"></div>
                  <span className="flex-shrink mx-3 text-[11px] font-mono text-gray-400">OR</span>
                  <div className="flex-grow border-t border-white/[0.06]"></div>
                </div>

                {/* Secondary: Client Panel */}
                <a
                  href="https://panel.treemchost.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg font-mono text-xs text-gray-300 hover:text-white bg-[#16181f] hover:bg-[#1e222b] border border-white/[0.08] transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Server className="w-3.5 h-3.5 text-gray-400" />
                  <span>Access Client Panel</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Transparency Note */}
            <div className="border border-white/[0.06] rounded-xl p-4 bg-[#0d0e12] text-xs text-gray-400 space-y-1.5 font-sans">
              <p className="font-medium text-gray-300">Accepted Payment Methods</p>
              <p>UPI (GPay, PhonePe, Paytm), IMPS/NEFT NetBanking, Debit/Credit Cards, and major Cryptocurrencies.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
