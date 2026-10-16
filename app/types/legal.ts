export interface LegalSection {
  title: string;
  content: string;
}

export interface DowntimeCreditItem {
  period: string;
  credit: string;
}

export interface LegalPageConfig {
  title: string;
  lastUpdated: string;
  companyName: string;
  websiteUrl: string;
  contactEmail: string;
  intro?: string;
  downtimeTable?: DowntimeCreditItem[];
  sections: LegalSection[];
}

export interface LegalConfig {
  termsOfService: LegalPageConfig;
  acceptableUsePolicy: LegalPageConfig;
  slaPolicy: LegalPageConfig;
  refundPolicy: LegalPageConfig;
  privacyPolicy: LegalPageConfig;
}
