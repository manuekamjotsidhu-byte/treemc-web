import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5 sm:px-6">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-[var(--ink)]">
            <img src="/treemc-icon.png" alt="TreeMC" className="h-7 w-7 rounded-lg" />
            <span className="text-base font-extrabold tracking-tight">
              <span>Tree</span><span className="text-blue-600 dark:text-blue-400">MC</span>
            </span>
          </div>
          <p className="mt-3 text-xs leading-relaxed">
            Global Cloud VPS, Minecraft (Java &amp; Bedrock), Windows RDP, Discord Bot, Web Hosting, and India VDS.
          </p>
          <p className="mt-3 text-xs font-medium text-[var(--ink)]">support@treemchost.pro</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Services</h3>
          <ul className="mt-3 space-y-2 text-xs">
            <li><Link href="/minecraft-hosting" className="hover:text-[var(--ink)]">Minecraft Hosting</Link></li>
            <li><Link href="/vps" className="hover:text-[var(--ink)]">Cloud VPS Hosting</Link></li>
            <li><Link href="/rdp-hosting" className="hover:text-[var(--ink)]">Windows RDP</Link></li>
            <li><Link href="/bot-hosting" className="hover:text-[var(--ink)]">Discord Bot Hosting</Link></li>
            <li><Link href="/webhosting" className="hover:text-[var(--ink)]">cPanel Web Hosting</Link></li>
            <li><Link href="/vds-hosting" className="hover:text-[var(--ink)]">India VDS</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Locations</h3>
          <ul className="mt-3 space-y-2 text-xs">
            <li><Link href="/vps" className="hover:text-[var(--ink)]">India (Noida / Delhi / Mumbai)</Link></li>
            <li><Link href="/vps" className="hover:text-[var(--ink)]">Germany (Frankfurt)</Link></li>
            <li><Link href="/vps" className="hover:text-[var(--ink)]">Singapore</Link></li>
            <li><Link href="/vps" className="hover:text-[var(--ink)]">USA</Link></li>
            <li><Link href="/vps" className="hover:text-[var(--ink)]">Canada</Link></li>
            <li><Link href="/minecraft-hosting" className="hover:text-[var(--ink)]">Dubai (UAE) — Games</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Resources</h3>
          <ul className="mt-3 space-y-2 text-xs">
            <li><Link href="/pricing" className="hover:text-[var(--ink)]">All Pricing</Link></li>
            <li><Link href="/blog" className="hover:text-[var(--ink)]">Hosting Blog</Link></li>
            <li><Link href="/guides" className="hover:text-[var(--ink)]">Setup Guides</Link></li>
            <li><a href="https://panel.treemchost.pro" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)]">Client &amp; Game Panel ↗</a></li>
            <li><a href="https://discord.gg/wbH8ZVAsYg" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--ink)] hover:underline">Discord Community ↗</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Legal</h3>
          <ul className="mt-3 space-y-2 text-xs">
            <li><Link href="/terms" className="hover:text-[var(--ink)]">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-[var(--ink)]">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:text-[var(--ink)]">Refund Policy</Link></li>
            <li><Link href="/sla" className="hover:text-[var(--ink)]">Uptime SLA</Link></li>
            <li><Link href="/aup" className="hover:text-[var(--ink)]">Acceptable Use Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-5 text-center text-xs">
        © {new Date().getFullYear()} TreeMC Host · Built for low-latency global hosting.
      </div>
    </footer>
  );
}
