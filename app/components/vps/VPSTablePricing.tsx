'use client'

import { useState } from 'react'
import Link from 'next/link'
import { XEON_PLANS, EPYC_PLANS, type VPSPlan } from '../../data/vpsPlans'
import { Cpu, Server, ShieldCheck, ArrowRight, Check } from 'lucide-react'

export default function VPSTablePricing() {
  const [activeTab, setActiveTab] = useState<'xeon' | 'epyc'>('xeon')
  const currentPlans = activeTab === 'xeon' ? XEON_PLANS : EPYC_PLANS

  return (
    <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090a0d] text-gray-100 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16201a] border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono font-medium mb-3">
              <span>UNTHROTTLED KVM COMPUTE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Cloud VPS Plans &amp; Specifications
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-2xl leading-relaxed">
              Transparent, unmetered virtual private servers deployed in our India data center. Guaranteed resource isolation, enterprise NVMe storage, and DDoS protection on every tier.
            </p>
          </div>

          {/* Architecture Switcher */}
          <div className="inline-flex p-1 rounded-lg bg-[#111317] border border-white/[0.08] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('xeon')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono font-medium transition-all ${
                activeTab === 'xeon'
                  ? 'bg-[#22c55e] text-[#041c14] font-semibold shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Intel® Xeon®</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('epyc')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono font-medium transition-all ${
                activeTab === 'epyc'
                  ? 'bg-[#22c55e] text-[#041c14] font-semibold shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>AMD EPYC™</span>
            </button>
          </div>
        </div>

        {/* Tab Context Subtitle */}
        <div className="mb-4 flex items-center justify-between text-xs font-mono text-gray-400 px-1">
          <div>
            {activeTab === 'xeon' ? (
              <span>Architecture: <strong className="text-gray-200">Intel® Xeon® Standard</strong> (General Workloads, Databases, Web Stacks)</span>
            ) : (
              <span>Architecture: <strong className="text-gray-200">AMD EPYC™ Milan</strong> (High-Throughput Concurrency, Multi-Threaded Services)</span>
            )}
          </div>
          <div className="hidden sm:block text-gray-400">
            Location: <strong className="text-gray-300">India data center</strong>
          </div>
        </div>

        {/* Dense Specification Table with Sticky Header */}
        <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-[#0d0e12]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              
              {/* Sticky Header */}
              <thead className="sticky top-16 z-20 bg-[#111317]/95 backdrop-blur-md border-b border-white/[0.1] text-xs font-mono text-gray-400 uppercase tracking-wider">
                <tr>
                  <th scope="col" className="py-3.5 px-4 font-semibold text-gray-300">Plan Tier</th>
                  <th scope="col" className="py-3.5 px-4 font-semibold text-gray-300">Compute</th>
                  <th scope="col" className="py-3.5 px-4 font-semibold text-gray-300">RAM (DDR4 ECC)</th>
                  <th scope="col" className="py-3.5 px-4 font-semibold text-gray-300">NVMe SSD</th>
                  <th scope="col" className="py-3.5 px-4 font-semibold text-gray-300">Port Speed</th>
                  <th scope="col" className="py-3.5 px-4 font-semibold text-gray-300">DDoS Shield</th>
                  <th scope="col" className="py-3.5 px-4 font-semibold text-right text-gray-300">Price</th>
                  <th scope="col" className="py-3.5 px-4 text-center font-semibold text-gray-300">Deploy</th>
                </tr>
              </thead>

              {/* Table Rows (All 8 tiers) */}
              <tbody className="divide-y divide-white/[0.06] text-xs font-mono">
                {currentPlans.map((plan: VPSPlan) => {
                  const isRecommended = plan.badge === 'Recommended'
                  
                  return (
                    <tr 
                      key={plan.id}
                      className={`transition-colors hover:bg-white/[0.02] ${
                        isRecommended ? 'bg-[#22c55e]/[0.03]' : ''
                      }`}
                    >
                      {/* Plan Name & Badge */}
                      <td className="py-4 px-4 font-semibold text-white">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-sans font-bold">{plan.name}</span>
                          {isRecommended && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#22c55e]/15 border border-[#22c55e]/40 text-[#22c55e]">
                              Recommended
                            </span>
                          )}
                        </div>
                      </td>

                      {/* vCores */}
                      <td className="py-4 px-4 text-gray-200">
                        <span className="font-bold text-white text-sm">{plan.vCores}</span>
                        <span className="text-gray-400 text-xs ml-1">vCores</span>
                      </td>

                      {/* RAM */}
                      <td className="py-4 px-4 text-gray-200">
                        <span className="font-bold text-white text-sm">{plan.ram}</span>
                        <span className="text-gray-400 text-xs ml-1">ECC</span>
                      </td>

                      {/* Storage */}
                      <td className="py-4 px-4 text-gray-200">
                        <span className="font-bold text-white text-sm">{plan.storage}</span>
                        <span className="text-gray-400 text-xs ml-1">NVMe</span>
                      </td>

                      {/* Bandwidth */}
                      <td className="py-4 px-4 text-gray-300">
                        <span>{plan.bandwidth}</span>
                      </td>

                      {/* DDoS Protection */}
                      <td className="py-4 px-4 text-gray-300">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                          <span className="text-[11px] truncate max-w-[140px]">{plan.protection}</span>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="py-4 px-4 text-right">
                        <div className="text-base font-bold text-white font-mono">
                          {plan.priceFormatted.replace('/mo', '')}
                        </div>
                        <div className="text-[10px] text-gray-400">/mo</div>
                      </td>

                      {/* Action Button */}
                      <td className="py-4 px-4 text-center">
                        <Link
                          href={plan.orderUrl}
                          className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-all ${
                            isRecommended
                              ? 'bg-[#22c55e] text-[#041c14] hover:bg-[#16a34a] shadow-sm'
                              : 'bg-[#1b1e26] text-gray-200 hover:text-white hover:bg-[#252a35] border border-white/[0.08]'
                          } active:scale-95`}
                        >
                          <span>Order</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer Summary */}
          <div className="p-3 bg-[#111317] border-t border-white/[0.08] flex flex-wrap items-center justify-between text-[11px] font-mono text-gray-400 px-4 gap-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#22c55e]" /> Dedicated IPv4 Included
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#22c55e]" /> Full Root SSH
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#22c55e]" /> Instant Ticket Order
              </span>
            </div>
            <div>All prices in INR (₹) • Billed Monthly</div>
          </div>
        </div>

      </div>
    </section>
  )
}
