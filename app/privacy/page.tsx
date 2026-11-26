import React from "react";
import legal from "../../src/data/legal.json";
import LegalDocument from "../../src/components/LegalDocument";

export const metadata = { title: "Privacy Policy | TreeMC" };
export default function PrivacyPage() {
  return <LegalDocument data={legal.privacyPolicy as any} />;
}
