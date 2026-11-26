import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div>
          <div className="flex items-center gap-2 text-[var(--ink)]">
            <img src="/treemc-icon.png" alt="TreeMC" className="h-7 w-7 rounded-lg" />
            <span className="text-base font-bold">TreeMC</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            Cloud VPS, Minecraft (Java &amp; Bedrock), Windows RDP, Discord Bot, Web Hosting, and India VDS across 6 global regions.
          </p>
          <p className="mt-3 text-xs">support@treemchost.pro</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Hosting</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/vps" className="hover:text-[var(--ink)]">Cloud VPS</Link></li>
            <li><Link href="/minecraft-hosting" className="hover:text-[var(--ink)]">Minecraft Hosting</Link></li>
            <li><Link href="/rdp-hosting" className="hover:text-[var(--ink)]">Windows RDP</Link></li>
            <li><Link href="/bot-hosting" className="hover:text-[var(--ink)]">Discord Bot Hosting</Link></li>
            <li><Link href="/webhosting" className="hover:text-[var(--ink)]">Web Hosting</Link></li>
            <li><Link href="/vds-hosting" className="hover:text-[var(--ink)]">India VDS</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Locations</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>India (Noida / Delhi / Mumbai)</li>
            <li>Germany (Frankfurt)</li>
            <li>Singapore</li>
            <li>USA</li>
            <li>Canada</li>
            <li>Dubai (UAE) — Game Servers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">Legal &amp; Support</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/terms" className="hover:text-[var(--ink)]">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-[var(--ink)]">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:text-[var(--ink)]">Refund Policy</Link></li>
            <li><Link href="/sla" className="hover:text-[var(--ink)]">Uptime SLA</Link></li>
            <li><Link href="/aup" className="hover:text-[var(--ink)]">Acceptable Use</Link></li>
            <li>
              <a href="https://discord.gg/wbH8ZVAsYg" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--ink)] underline">
                Discord Support ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-5 text-center text-xs">
        © {new Date().getFullYear()} TreeMC Host.
      </div>
    </footer>
  );
}
