import React from "react";

export default function AupPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold text-white">Acceptable Use Policy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
        <p>Services may not be used for DDoS attacks, network scanning, phishing, spam, crypto-mining abuse, or distribution of malware.</p>
        <p>Violations result in immediate termination without refund.</p>
      </div>
    </div>
  );
}
