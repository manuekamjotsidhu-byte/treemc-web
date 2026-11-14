import { MessageSquare, Mail, Server, ExternalLink } from 'lucide-react'

export default function VPSSupportSection() {
  const supportChannels = [
    {
      title: "Discord Support Desk",
      description: "Direct assistance from systems engineers for order verification, network diagnostics, and node provisioning.",
      label: "Open Discord Ticket",
      href: "https://discord.gg/wbH8ZVAsYg",
      icon: MessageSquare,
      badge: "Fastest Response"
    },
    {
      title: "Email Support",
      description: "For billing inquiries, invoicing assistance, enterprise custom quotes, and account administration.",
      label: "support@treemchost.pro",
      href: "mailto:support@treemchost.pro",
      icon: Mail,
      badge: "Direct Contact"
    },
    {
      title: "Client Portal",
      description: "Access your virtual server dashboard, reboot machines, view active invoices, and reinstall operating systems.",
      label: "panel.treemchost.pro",
      href: "https://panel.treemchost.pro",
      icon: Server,
      badge: "Self-Service"
    }
  ]

  return (
    <section id="support" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090a0d] text-gray-100 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16201a] border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono font-medium mb-3">
            <span>ENGINEER-BACKED SUPPORT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Direct Support Channels
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl font-sans">
            Speak directly with technical engineers who manage our server infrastructure. No canned bots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportChannels.map((channel, idx) => {
            const Icon = channel.icon
            return (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-[#111317] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-300 border border-white/[0.06]">
                      {channel.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-sans">
                    {channel.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans mb-6">
                    {channel.description}
                  </p>
                </div>

                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-mono font-medium text-gray-200 hover:text-white bg-[#16181f] hover:bg-[#1e222b] border border-white/[0.08] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{channel.label}</span>
                  {channel.href.startsWith("http") && <ExternalLink className="w-3 h-3 text-gray-400" />}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
