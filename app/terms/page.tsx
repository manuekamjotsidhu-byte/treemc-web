import React from "react";
import legal from "../../src/data/legal.json";
import LegalDocument from "../../src/components/LegalDocument";

export const metadata = { title: "Terms of Service | TreeMC" };
export default function TermsPage() {
  return <LegalDocument data={legal.termsOfService as any} />;
}
