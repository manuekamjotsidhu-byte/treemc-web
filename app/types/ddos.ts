export interface OsiLayer {
  layer: number;
  name: string;
  data: string;
  description: string;
  vectorExample: string;
  isCommonAttackVector: boolean;
}

export interface ThreatLayer {
  title: string;
  description: string;
  targets: string;
  badge: string;
}

export interface InfrastructureFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProtectionCategory {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  availableOn: string[];
  howItWorks?: string;
  mitigationNotice?: string;
  advancedMitigation?: string[];
  bestSuitedFor: string;
}

export interface ComparisonFeature {
  feature: string;
  standard: string;
  premium: string;
  standardStatus: 'yes' | 'limited' | 'none' | 'warning' | 'no';
  premiumStatus: 'yes' | 'limited' | 'none' | 'warning' | 'no';
}

export interface DdosConfig {
  header: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  threatOverview: {
    title: string;
    description: string;
    layers: ThreatLayer[];
  };
  osiModel: {
    title: string;
    subtitle: string;
    layers: OsiLayer[];
  };
  coreInfrastructure: {
    title: string;
    subtitle: string;
    features: InfrastructureFeature[];
  };
  hybridProtection: {
    title: string;
    subtitle: string;
    features: InfrastructureFeature[];
  };
  protectionCategories: {
    title: string;
    subtitle: string;
    categories: ProtectionCategory[];
  };
  comparisonMatrix: {
    title: string;
    subtitle: string;
    rows: ComparisonFeature[];
  };
  recommendations: {
    title: string;
    standardRecommendation: string;
    premiumRecommendation: string;
  };
  policy: {
    title: string;
    content: string[];
  };
  disclaimer: {
    title: string;
    content: string;
  };
}
