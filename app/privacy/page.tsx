import React from "react";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
        <p>TreeMC Host collects only the account and billing information necessary to provision and support your servers.</p>
        <p>We never sell customer data to third parties. Support inquiries are handled via Discord and <span className="text-emerald-400">support@treemchost.pro</span>.</p>
      </div>
    </div>
  );
}
