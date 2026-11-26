import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05080c] text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div>
          <div className="flex items-center gap-2.5 text-white">
            <img src="/treemc-icon.png" alt="TreeMC" className="h-8 w-8 rounded-lg" />
            <span className="text-lg font-extrabold">
              Tree<span className="text-emerald-400">MC</span>
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            High-performance Cloud VPS, Minecraft (Java &amp; Bedrock), Windows RDP, Discord Bot, Web Hosting, and India VDS across 6 global regions.
          </p>
          <p className="mt-3 text-xs text-slate-500">support@treemchost.pro</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/vps" className="hover:text-emerald-400">Cloud VPS Hosting</Link></li>
            <li><Link href="/minecraft-hosting" className="hover:text-emerald-400">Minecraft Hosting</Link></li>
            <li><Link href="/rdp-hosting" className="hover:text-emerald-400">Windows RDP</Link></li>
            <li><Link href="/bot-hosting" className="hover:text-emerald-400">Discord Bot Hosting</Link></li>
            <li><Link href="/webhosting" className="hover:text-emerald-400">cPanel Web Hosting</Link></li>
            <li><Link href="/vds-hosting" className="hover:text-emerald-400">India VDS</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">Global Regions</h3>
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
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">Legal &amp; Support</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/terms" className="hover:text-emerald-400">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-emerald-400">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:text-emerald-400">Refund Policy</Link></li>
            <li><Link href="/sla" className="hover:text-emerald-400">Uptime SLA</Link></li>
            <li><Link href="/aup" className="hover:text-emerald-400">Acceptable Use Policy</Link></li>
            <li>
              <a href="https://discord.gg/wbH8ZVAsYg" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                Discord Support ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TreeMC Host. All rights reserved.
      </div>
    </footer>
  );
}
