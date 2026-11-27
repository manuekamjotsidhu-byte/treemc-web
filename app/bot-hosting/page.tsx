"use client";

import React from "react";
import { Bot, Cpu, HardDrive } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import { CtaBanner, InfrastructureGrid } from "../../src/components/ServiceDetails";
import ServiceHeroBanner from "../../src/components/ServiceHeroBanner";

export default function BotHostingPage() {
  const { formatPrice } = useCurrency();
  return (
    <div>
      <ServiceHeroBanner
        badge="24/7 Always-On Bot Runtimes"
        title={<>Discord <span className="serif-it font-normal">Bot Hosting</span></>}
        subtitle="Run Node.js, Python, Java, Go, and Lavalink bots 24/7 with instant Pterodactyl panel access."
        image="/images/treemc-banner.png"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {catalog.botPlans.map((p) => (
            <div key={p.id} className="rv card-clean flex flex-col justify-between rounded-3xl p-6">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{p.name}</h2>
                  {p.popular && <span className="btn-lime rounded-full px-2.5 py-0.5 text-[11px] font-bold">Popular</span>}
                </div>
                <div className="mt-4 text-3xl font-extrabold">
                  {formatPrice(p.price)}<span className="text-xs font-normal text-[var(--muted)]">/month</span>
                </div>
                <hr className="my-4 border-[var(--border)]" />
                <ul className="space-y-2.5 text-xs text-[var(--muted)]">
                  <li className="flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.cpu}</li>
                  <li className="flex items-center gap-2"><Bot className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.ram}</li>
                  <li className="flex items-center gap-2"><HardDrive className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.storage}</li>
                </ul>
                <p className="mt-4 text-xs font-medium">{p.runtime}</p>
              </div>
              <a href={catalog.billingUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-6 block rounded-xl py-2.5 text-center text-xs font-bold">
                Order Now ↗
              </a>
            </div>
          ))}
        </div>
        <InfrastructureGrid variant="bot" />
        <CtaBanner />
      </div>
    </div>
  );
}
