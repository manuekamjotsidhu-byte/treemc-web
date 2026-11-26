import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-14 pb-8 sm:grid-cols-2 lg:grid-cols-5 sm:px-6">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-[var(--ink)]">
            <img src="/treemc-icon.png" alt="TreeMC" className="h-7 w-7 rounded-lg" />
            <span className="text-base font-extrabold tracking-tight">
              <span>Tree</span><span className="text-blue-600 dark:text-blue-400">MC</span>
            </span>
          </div>
          <p className="mt-3 text-xs leading-relaxed">
            Minecraft, game, bot and web hosting, Cloud VPS and Windows RDP across India, Singapore, Germany, USA, Canada, and Dubai.
          </p>
          <a
            href="https://panel.treemchost.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold"
          >
            Open panel <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <div className="mt-3 flex items-center gap-2">
            <a href="mailto:support@treemchost.pro" aria-label="Email support" className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--ink)] hover:opacity-80">
              <Mail className="h-3.5 w-3.5" />
            </a>
            <a href="https://discord.gg/wbH8ZVAsYg" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--ink)] hover:opacity-80">
              <MessageSquare className="h-3.5 w-3.5" />
            </a>
            <a href="https://panel.treemchost.pro" target="_blank" rel="noopener noreferrer" aria-label="Control panel" className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--ink)] hover:opacity-80">
              <Terminal className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Hosting</h3>
          <ul className="mt-3 space-y-2 text-xs">
            <li><Link href="/minecraft-hosting" className="hover:text-[var(--ink)]">Minecraft Hosting</Link></li>
            <li><Link href="/bot-hosting" className="hover:text-[var(--ink)]">Bot Hosting</Link></li>
            <li><Link href="/webhosting" className="hover:text-[var(--ink)]">Web Hosting</Link></li>
            <li><Link href="/pricing" className="hover:text-[var(--ink)]">All Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Servers</h3>
          <ul className="mt-3 space-y-2 text-xs">
            <li><Link href="/vps" className="hover:text-[var(--ink)]">Cloud VPS (5 Countries)</Link></li>
            <li><Link href="/rdp-hosting" className="hover:text-[var(--ink)]">Windows VPS (RDP)</Link></li>
            <li><Link href="/vds-hosting" className="hover:text-[var(--ink)]">India VDS Hosting</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Guides</h3>
          <ul className="mt-3 space-y-2 text-xs">
            <li><Link href="/guides/setup-geysermc-java-bedrock-crossplay" className="hover:text-[var(--ink)]">Bedrock crossplay (Geyser)</Link></li>
            <li><Link href="/guides/optimize-papermc-tps" className="hover:text-[var(--ink)]">Optimize PaperMC TPS</Link></li>
            <li><Link href="/guides/host-discord-bot-24-7" className="hover:text-[var(--ink)]">Host a Discord bot 24/7</Link></li>
            <li><Link href="/guides/run-mt5-24-7-on-windows-rdp" className="hover:text-[var(--ink)]">Run MT5 on Windows RDP</Link></li>
            <li><Link href="/guides" className="font-semibold text-[var(--ink)] hover:underline">All guides</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Legal &amp; Company</h3>
          <ul className="mt-3 space-y-2 text-xs">
            <li><Link href="/blog" className="hover:text-[var(--ink)]">Blog</Link></li>
            <li><Link href="/terms" className="hover:text-[var(--ink)]">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-[var(--ink)]">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:text-[var(--ink)]">Refund Policy</Link></li>
            <li><Link href="/sla" className="hover:text-[var(--ink)]">Uptime SLA</Link></li>
            <li><Link href="/aup" className="hover:text-[var(--ink)]">Acceptable Use</Link></li>
          </ul>
        </div>
      </div>

      {/* Giant TREEMC Watermark */}
      <div className="mx-auto max-w-6xl px-4 pt-4 pb-6 text-center sm:px-6">
        <div
          aria-hidden="true"
          className="select-none text-[clamp(4.2rem,17vw,12.5rem)] font-black leading-[0.88] tracking-tighter text-slate-900/[0.05] dark:text-white/[0.04]"
        >
          TREEMC
        </div>
        <p className="mt-4 text-[11px] text-[var(--muted)]">
          © {new Date().getFullYear()} TreeMC Host · support@treemchost.pro
        </p>
      </div>
    </footer>
  );
}
