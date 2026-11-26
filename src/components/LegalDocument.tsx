import React from "react";

interface SectionItem {
  id?: string;
  title: string;
  content?: string;
  paragraphs?: string[];
  items?: string[];
  subsections?: { title: string; content?: string; items?: string[] }[];
}

interface PolicyData {
  title: string;
  lastUpdated?: string;
  contactEmail?: string;
  intro?: string;
  sections: SectionItem[];
  downtimeTable?: { uptime?: string; downtime?: string; credit?: string }[];
  qualifyingIncidents?: string[];
  notEligible?: string[];
  eligibilityRequirements?: string[];
}

export default function LegalDocument({ data }: { data: PolicyData }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <div className="rv card-clean rounded-3xl p-6 sm:p-10">
        <div className="border-b border-[var(--border)] pb-6">
          <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
            TreeMC Host Legal
          </span>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{data.title}</h1>
          <div className="mt-2 flex flex-wrap gap-4 text-xs text-[var(--muted)]">
            {data.lastUpdated && <span>Last Updated: {data.lastUpdated}</span>}
            {data.contactEmail && <span>Contact: {data.contactEmail}</span>}
          </div>
          {data.intro && <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{data.intro}</p>}
        </div>

        {data.downtimeTable && data.downtimeTable.length > 0 && (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--border)]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--bg)] text-xs font-bold uppercase text-[var(--muted)]">
                <tr>
                  <th className="px-4 py-3">Monthly Uptime</th>
                  <th className="px-4 py-3">Downtime</th>
                  <th className="px-4 py-3">Service Credit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {data.downtimeTable.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3 font-semibold">{row.uptime}</td>
                    <td className="px-4 py-3 text-[var(--muted)]">{row.downtime}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-600 dark:text-emerald-400">{row.credit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-8 space-y-8">
          {data.sections.map((sec, idx) => (
            <section key={sec.id || idx} className="space-y-3">
              <h2 className="text-lg font-bold">{sec.title}</h2>
              {sec.content && <p className="text-sm leading-relaxed text-[var(--muted)]">{sec.content}</p>}
              {sec.paragraphs?.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-[var(--muted)]">{p}</p>
              ))}
              {sec.items && sec.items.length > 0 && (
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--muted)]">
                  {sec.items.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
              )}
              {sec.subsections?.map((sub, i) => (
                <div key={i} className="mt-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                  <h3 className="text-sm font-bold">{sub.title}</h3>
                  {sub.content && <p className="mt-1.5 text-sm text-[var(--muted)]">{sub.content}</p>}
                  {sub.items && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                      {sub.items.map((it, j) => <li key={j}>{it}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}

          {data.qualifyingIncidents && (
            <section className="space-y-2">
              <h2 className="text-lg font-bold">Qualifying Incidents</h2>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--muted)]">
                {data.qualifyingIncidents.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            </section>
          )}

          {data.notEligible && (
            <section className="space-y-2">
              <h2 className="text-lg font-bold">Exclusions &amp; Non-Eligible Incidents</h2>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--muted)]">
                {data.notEligible.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
