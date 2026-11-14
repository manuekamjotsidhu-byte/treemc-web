'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function VPSFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "Where is the infrastructure hosted?",
      a: "All VPS nodes operate out of our India data center facilities in Noida and Mumbai, directly peered through domestic Internet exchanges (NIXI) to provide sub-15ms routing across Jio, Airtel, ACT, Vi, and BSNL networks."
    },
    {
      q: "What payment methods do you accept?",
      a: "We support domestic Indian payment methods including UPI (Google Pay, PhonePe, Paytm, BHIM), IMPS/NEFT NetBanking, major Debit & Credit Cards, and selected Cryptocurrencies."
    },
    {
      q: "Do I get full root access and a dedicated IPv4 address?",
      a: "Yes. Every virtual private server includes 1 dedicated static IPv4 address, full root SSH access on Linux (or Administrator RDP on Windows), and the freedom to configure any custom service or daemon."
    },
    {
      q: "How does the DDoS protection work?",
      a: "Every instance is covered by always-on Layer 3/4 network filtering and Layer 7 attack mitigation. Upstream scrubbing centers filter malicious volumetric traffic before it reaches your server port."
    },
    {
      q: "Can I scale or upgrade my VPS resources later?",
      a: "Yes. You can upgrade from entry tiers (XS, S) to higher tiers (XL, XXL, 3XL) seamlessly. Your static IP address and root filesystem remain intact during the resource resizing."
    },
    {
      q: "What is your refund policy?",
      a: "We maintain a clear and transparent refund policy. Detailed terms regarding service cancellation and eligibility can be reviewed on our Refund Policy page."
    }
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07080a] text-gray-100 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16201a] border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono font-medium mb-3">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Technical &amp; Billing Questions
          </h2>
          <p className="text-sm text-gray-400 mt-2 font-sans">
            Plain, factual answers. For specific enterprise requirements, contact our engineering desk.
          </p>
        </div>

        <div className="divide-y divide-white/[0.06] border-y border-white/[0.08]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left py-2 text-sm font-semibold text-white hover:text-[#22c55e] transition-colors gap-4"
                >
                  <span className="font-sans text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#22c55e]' : ''}`} />
                </button>
                {isOpen && (
                  <div className="pt-2 pb-3 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans pr-6">
                    {faq.a.includes("Refund Policy page") ? (
                      <p>
                        We maintain a clear and transparent refund policy. Detailed terms regarding service cancellation and eligibility can be reviewed on our{" "}
                        <Link href="/refund-policy" className="text-[#22c55e] underline hover:text-white">
                          Refund Policy
                        </Link>{" "}
                        page.
                      </p>
                    ) : (
                      <p>{faq.a}</p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
