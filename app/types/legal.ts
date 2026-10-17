export interface LegalSection {
  title: string;
  content: string;
}

export interface DowntimeCreditItem {
  period: string;
  credit: string;
}

export interface IncidentHandlingConfig {
  overview: string;
  example: string;
  disclaimer: string;
}

export interface LegalPageConfig {
  title: string;
  lastUpdated: string;
  companyName: string;
  websiteUrl: string;
  contactEmail: string;
  intro?: string;
  downtimeTable?: DowntimeCreditItem[];
  qualifyingIncidents?: string[];
  notEligible?: string[];
  eligibilityRequirements?: string[];
  incidentHandling?: IncidentHandlingConfig;
  sections: LegalSection[];
}

export interface LegalConfig {
  termsOfService: LegalPageConfig;
  acceptableUsePolicy: LegalPageConfig;
  slaPolicy: LegalPageConfig;
  refundPolicy: LegalPageConfig;
  privacyPolicy: LegalPageConfig;
}
