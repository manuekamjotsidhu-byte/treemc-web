import Link from 'next/link'
import { ArrowRight, MessageSquare, Server, KeyRound } from 'lucide-react'

export default function VPSOrderFlow() {
  const steps = [
    {
      number: "01",
      icon: Server,
      title: "Select Compute Tier",
      description: "Browse the Intel Xeon or AMD EPYC table and click 'Order' on your preferred vCore, RAM, and storage allocation."
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Copy Details & Open Ticket",
      description: "Our order desk generates a pre-formatted message. Copy it with one click and paste it into our Discord ticket desk or client panel."
    },
    {
      number: "03",
      icon: KeyRound,
      title: "Instant Verification & SSH Handover",
      description: "After verifying payment via UPI, Card, or NetBanking, our team allocates an unthrottled KVM slice and delivers your root credentials."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090a0d] text-gray-100 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16201a] border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono font-medium mb-3">
            <span>TRANSPARENT PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            How Ordering &amp; Deployment Works
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl font-sans">
            No confusing automated carts with surprise renewal fees. Every order is verified by engineers to guarantee dedicated resource isolation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-[#111317] border border-white/[0.08] relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-mono font-bold text-[#22c55e]">
                      {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-[#0e1015] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-gray-300">
            Ready to deploy? Starting at ₹359/mo on Intel Xeon Standard.
          </span>
          <Link
            href="#plans"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-[#22c55e] text-[#041c14] hover:bg-[#16a34a] transition-all shrink-0"
          >
            <span>View All Plans</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
