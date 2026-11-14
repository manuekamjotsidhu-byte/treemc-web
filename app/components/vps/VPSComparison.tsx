import { Check, X } from 'lucide-react'

export default function VPSComparison() {
  const comparisonRows = [
    {
      feature: "Target Workloads",
      xeon: "Web applications, database clusters, bots, internal APIs",
      epyc: "High-concurrency microservices, multi-threaded apps, high-IOPS databases"
    },
    {
      feature: "Processor Lineup",
      xeon: "Intel® Xeon® Processor (E5-2673 / 2682 v4, Platinum 8168)",
      epyc: "AMD EPYC™ Milan Series (High Core Density)"
    },
    {
      feature: "Memory Standard",
      xeon: "DDR4 ECC (High-Reliability Error Correction)",
      epyc: "DDR4 ECC High-Frequency"
    },
    {
      feature: "Storage Technology",
      xeon: "Pure PCIe Gen4 NVMe SSD",
      epyc: "Pure PCIe Gen4 NVMe SSD"
    },
    {
      feature: "Port Bandwidth",
      xeon: "1 Gbps Uplink (Unmetered fair-use)",
      epyc: "1 Gbps Uplink (Unmetered fair-use)"
    },
    {
      feature: "DDoS Mitigation",
      xeon: "Always-On Layer 3/4 & Layer 7 Scrubbing",
      epyc: "Always-On Enterprise Multi-Vector Mitigation"
    },
    {
      feature: "Hypervisor & Virtualization",
      xeon: "Hardware KVM (Strict Isolation)",
      epyc: "Hardware KVM (Strict Isolation)"
    },
    {
      feature: "Dedicated IPv4",
      xeon: "1 Included (/64 IPv6 on request)",
      epyc: "1 Included (/64 IPv6 on request)"
    },
    {
      feature: "Access Level",
      xeon: "Full Root & SSH (Custom Kernels Permitted)",
      epyc: "Full Root & SSH (Custom Kernels Permitted)"
    },
    {
      feature: "Starting Price",
      xeon: "₹359/month (2 vCores / 6 GB / 50 GB)",
      epyc: "₹419/month (2 vCores / 6 GB / 50 GB)"
    }
  ]

  return (
    <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090a0d] text-gray-100 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16201a] border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono font-medium mb-3">
            <span>ARCHITECTURE COMPARISON</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Intel Xeon Standard vs. AMD EPYC Enterprise
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl font-sans">
            Choose Intel Xeon for cost-effective memory density or AMD EPYC for higher thread execution throughput. Both run on pure Gen4 NVMe storage inside our India data center.
          </p>
        </div>

        {/* Side-by-side Table */}
        <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-[#0d0e12]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-[#111317] border-b border-white/[0.1] text-xs font-mono uppercase text-gray-300">
                  <th scope="col" className="py-3.5 px-4 font-semibold w-1/4">Specification</th>
                  <th scope="col" className="py-3.5 px-4 font-semibold w-3/8 text-white">Intel® Xeon® Standard</th>
                  <th scope="col" className="py-3.5 px-4 font-semibold w-3/8 text-[#22c55e]">AMD EPYC™ Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs font-mono">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 text-gray-400 font-medium">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-gray-200">
                      {row.xeon}
                    </td>
                    <td className="py-3.5 px-4 text-gray-100 font-semibold">
                      {row.epyc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}
