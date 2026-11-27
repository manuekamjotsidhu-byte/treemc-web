"use client";

import React from "react";
import { Check, Globe, HardDrive, ShieldCheck } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";
import { CtaBanner, InfrastructureGrid } from "../../src/components/ServiceDetails";
import ServiceHeroBanner from "../../src/components/ServiceHeroBanner";

export default function WebHostingPage() {
  const { formatPrice } = useCurrency();
  return (
    <div>
      <ServiceHeroBanner
        badge="cPanel · Free AutoSSL"
        title={<>Fast <span className="serif-it font-normal">Web Hosting</span></>}
        subtitle="Reliable NVMe cPanel hosting with 1-click WordPress & Softaculous installer and free SSL certificates."
        image="/images/features-6.png"
      />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {catalog.webPlans.map((p) => (
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
                  <li className="flex items-center gap-2"><HardDrive className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.storage}</li>
                  <li className="flex items-center gap-2"><Globe className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.domains}</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.ssl}</li>
                  <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> {p.panel}</li>
                </ul>
              </div>
              <a href={catalog.billingUrl} target="_blank" rel="noopener noreferrer" className="btn-lime mt-6 block rounded-xl py-2.5 text-center text-xs font-bold">
                Order Now ↗
              </a>
            </div>
          ))}
        </div>
        <InfrastructureGrid variant="web" />
        <CtaBanner />
      </div>
    </div>
  );
}
