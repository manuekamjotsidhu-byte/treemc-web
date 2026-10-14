export interface MinecraftPlan {
  id: string;
  name: string;
  tagline: string;
  priceMo: number;
  pricePerGb: string;
  ram: string;
  ramType: string;
  cpu: string;
  nvme: string;
  backups: number;
  ddos: string;
  popular?: boolean;
  bestValue?: boolean;
  flagship?: boolean;
}

export interface ComparisonRow {
  feature: string;
  budget: string;
  performance: string;
}

export interface VPSPlan {
  id: string;
  tier: string;
  priceMo: number;
  cores: string;
  isDedicated?: boolean;
  ram: string;
  ramType: string;
  nvme: string;
  popular?: boolean;
}

export interface ProcessorCategory {
  id: string;
  name: string;
  badge: string;
  image: string;
  cpuModels: string[];
  vpsPlans?: VPSPlan[];
  vdsPlans?: VPSPlan[];
}

export interface LocationData {
  id: string;
  name: string;
  flag: string;
  sublocations: string[];
  pingEstimate: string;
  lat: number;
  lng: number;
  processors: ProcessorCategory[];
}

export const DISCORD_PURCHASE_URL = "https://discord.gg/MJFPbjAdJY";
export const GAME_PANEL_URL = "https://panel.treemc.host";
export const STATUS_PAGE_URL = "https://status.treemc.host";

export const MINECRAFT_BUDGET_PLANS: MinecraftPlan[] = [
  {
    id: "sapling",
    name: "Sapling",
    tagline: "₹37/GB - Entry Tier",
    priceMo: 149,
    pricePerGb: "₹37/GB",
    ram: "4 GB",
    ramType: "DDR4 ECC",
    cpu: "100%",
    nvme: "15 GB",
    backups: 1,
    ddos: "5 GB Layer 3/4",
  },
  {
    id: "grove",
    name: "Grove",
    tagline: "₹31/GB - Sweet Spot",
    priceMo: 249,
    pricePerGb: "₹31/GB",
    ram: "8 GB",
    ramType: "DDR4 ECC",
    cpu: "200%",
    nvme: "30 GB",
    backups: 2,
    ddos: "5 GB Layer 3/4",
    popular: true,
  },
  {
    id: "forest",
    name: "Forest",
    tagline: "₹33/GB - Scaled Community",
    priceMo: 399,
    pricePerGb: "₹33/GB",
    ram: "12 GB",
    ramType: "DDR4 ECC",
    cpu: "300%",
    nvme: "45 GB",
    backups: 3,
    ddos: "5 GB Layer 3/4",
  },
  {
    id: "canopy",
    name: "Canopy",
    tagline: "₹34/GB - High Modding",
    priceMo: 549,
    pricePerGb: "₹34/GB",
    ram: "16 GB",
    ramType: "DDR4 ECC",
    cpu: "400%",
    nvme: "60 GB",
    backups: 4,
    ddos: "5 GB Layer 3/4",
  },
  {
    id: "redwood",
    name: "Redwood",
    tagline: "₹35/GB - Heavy Playerbase",
    priceMo: 849,
    pricePerGb: "₹35/GB",
    ram: "24 GB",
    ramType: "DDR4 ECC",
    cpu: "550%",
    nvme: "80 GB",
    backups: 5,
    ddos: "5 GB Layer 3/4",
  },
  {
    id: "titan-oak",
    name: "Titan Oak",
    tagline: "₹36/GB - Top Budget",
    priceMo: 1149,
    pricePerGb: "₹36/GB",
    ram: "32 GB",
    ramType: "DDR4 ECC",
    cpu: "700%",
    nvme: "100 GB",
    backups: 6,
    ddos: "5 GB Layer 3/4",
  },
];

export const MINECRAFT_PERFORMANCE_PLANS: MinecraftPlan[] = [
  {
    id: "spark",
    name: "Spark",
    tagline: "₹70/GB - Entry EPYC",
    priceMo: 279,
    pricePerGb: "₹70/GB",
    ram: "4 GB",
    ramType: "DDR5 High-Speed",
    cpu: "150% vCPU",
    nvme: "20 GB Gen4",
    backups: 2,
    ddos: "5 GB Advanced L3/L4/L7",
  },
  {
    id: "surge",
    name: "Surge",
    tagline: "₹62/GB - Sweet Spot",
    priceMo: 499,
    pricePerGb: "₹62/GB",
    ram: "8 GB",
    ramType: "DDR5 High-Speed",
    cpu: "250% vCPU",
    nvme: "40 GB Gen4",
    backups: 3,
    ddos: "5 GB Advanced L3/L4/L7",
    bestValue: true,
  },
  {
    id: "storm",
    name: "Storm",
    tagline: "₹62/GB - Competitive SMP",
    priceMo: 749,
    pricePerGb: "₹62/GB",
    ram: "12 GB",
    ramType: "DDR5 High-Speed",
    cpu: "350% vCPU",
    nvme: "55 GB Gen4",
    backups: 4,
    ddos: "5 GB Advanced L3/L4/L7",
  },
  {
    id: "blaze",
    name: "Blaze",
    tagline: "₹62/GB - Large Network",
    priceMo: 999,
    pricePerGb: "₹62/GB",
    ram: "16 GB",
    ramType: "DDR5 High-Speed",
    cpu: "450% vCPU",
    nvme: "70 GB Gen4",
    backups: 5,
    ddos: "5 GB Advanced L3/L4/L7",
    popular: true,
  },
  {
    id: "nova",
    name: "Nova",
    tagline: "₹62/GB - Mega Community",
    priceMo: 1499,
    pricePerGb: "₹62/GB",
    ram: "24 GB",
    ramType: "DDR5 High-Speed",
    cpu: "600% vCPU",
    nvme: "100 GB Gen4",
    backups: 6,
    ddos: "5 GB Advanced L3/L4/L7",
  },
  {
    id: "titan",
    name: "Titan",
    tagline: "₹62/GB - Flagship Beast",
    priceMo: 1999,
    pricePerGb: "₹62/GB",
    ram: "32 GB",
    ramType: "DDR5 High-Speed",
    cpu: "800% vCPU",
    nvme: "130 GB Gen4",
    backups: 8,
    ddos: "5 GB Advanced L3/L4/L7",
    flagship: true,
  },
];

export const COMPARISON_TABLE: ComparisonRow[] = [
  {
    feature: "Processor Architecture",
    budget: "Intel Xeon High-Freq",
    performance: "AMD EPYC (Zen 4)",
  },
  {
    feature: "RAM Technology",
    budget: "DDR4 ECC Server Memory",
    performance: "DDR5 High-Speed Memory",
  },
  {
    feature: "Storage Type",
    budget: "NVMe SSD (RAID-10)",
    performance: "Enterprise Gen4 NVMe",
  },
  {
    feature: "Single-Thread CPU Performance",
    budget: "Standard High Clock",
    performance: "Ultra High Single-Core PassMark",
  },
  {
    feature: "Automated Snapshot Backups",
    budget: "1 - 6 Daily Backups",
    performance: "2 - 8 Daily Backups",
  },
  {
    feature: "DDoS Mitigation Protection",
    budget: "5 GB Layer 3/4 Shield",
    performance: "5 GB Advanced L3/L4/L7 Mitigation",
  },
  {
    feature: "Control Panel Interface",
    budget: "Pterodactyl 1.x Panel",
    performance: "Pterodactyl 1.x Panel",
  },
  {
    feature: "Free Subdomain & Dedicated IP",
    budget: "Included Free",
    performance: "Included Free",
  },
  {
    feature: "Network SLA Uptime Guarantee",
    budget: "99.9% Network SLA",
    performance: "99.9% Network SLA",
  },
];

export const GLOBAL_LOCATIONS_DATA: LocationData[] = [
  {
    id: "india",
    name: "India",
    flag: "/flags/india.png",
    sublocations: ["Noida", "Delhi", "Mumbai"],
    pingEstimate: "8ms",
    lat: 28.6139,
    lng: 77.2090,
    processors: [
      {
        id: "intel-standard",
        name: "Intel - Standard",
        badge: "Xeon / Platinum",
        image: "/cpu/intel.png",
        cpuModels: [
          "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
          "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
          "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
          "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
        ],
        vpsPlans: [
          { id: "in-xeon-xs", tier: "XS", priceMo: 399, cores: "2 vCore", ram: "6GB", ramType: "DDR4 ECC", nvme: "50GB NVMe" },
          { id: "in-xeon-s", tier: "S", priceMo: 529, cores: "2 vCore", ram: "8GB", ramType: "DDR4 ECC", nvme: "80GB NVMe" },
          { id: "in-xeon-m", tier: "M", priceMo: 749, cores: "4 vCore", ram: "12GB", ramType: "DDR4 ECC", nvme: "100GB NVMe" },
          { id: "in-xeon-l", tier: "L", priceMo: 999, cores: "6 vCore", ram: "16GB", ramType: "DDR4 ECC", nvme: "150GB NVMe", popular: true },
          { id: "in-xeon-xl", tier: "XL", priceMo: 1349, cores: "6 vCore", ram: "24GB", ramType: "DDR4 ECC", nvme: "200GB NVMe" },
          { id: "in-xeon-xxl", tier: "XXL", priceMo: 1499, cores: "8 vCore", ram: "32GB", ramType: "DDR4 ECC", nvme: "300GB NVMe" },
          { id: "in-xeon-2xl", tier: "2XL", priceMo: 2199, cores: "10 vCore", ram: "48GB", ramType: "DDR4 ECC", nvme: "350GB NVMe" },
          { id: "in-xeon-3xl", tier: "3XL", priceMo: 2499, cores: "12 vCore", ram: "64GB", ramType: "DDR4 ECC", nvme: "400GB NVMe" },
        ],
        vdsPlans: [
          { id: "in-xeon-vds-l", tier: "L", priceMo: 1200, cores: "6 Dedicated Cores", isDedicated: true, ram: "16GB", ramType: "DDR4 ECC", nvme: "150GB NVMe" },
          { id: "in-xeon-vds-xl", tier: "XL", priceMo: 2000, cores: "6 Dedicated Cores", isDedicated: true, ram: "24GB", ramType: "DDR4 ECC", nvme: "200GB NVMe" },
          { id: "in-xeon-vds-xxl", tier: "XXL", priceMo: 2500, cores: "8 Dedicated Cores", isDedicated: true, ram: "32GB", ramType: "DDR4 ECC", nvme: "300GB NVMe", popular: true },
          { id: "in-xeon-vds-2xl", tier: "2XL", priceMo: 3800, cores: "10 Dedicated Cores", isDedicated: true, ram: "48GB", ramType: "DDR4 ECC", nvme: "350GB NVMe" },
          { id: "in-xeon-vds-3xl", tier: "3XL", priceMo: 4500, cores: "12 Dedicated Cores", isDedicated: true, ram: "64GB", ramType: "DDR4 ECC", nvme: "400GB NVMe" },
        ],
      },
      {
        id: "amd-epyc",
        name: "AMD EPYC - Premium",
        badge: "Milan Series",
        image: "/cpu/epyc.png",
        cpuModels: [
          "AMD EPYC Milan",
        ],
        vpsPlans: [
          { id: "in-epyc-xs", tier: "XS", priceMo: 449, cores: "2 vCore", ram: "6GB", ramType: "DDR4 ECC", nvme: "50GB NVMe" },
          { id: "in-epyc-s", tier: "S", priceMo: 649, cores: "2 vCore", ram: "8GB", ramType: "DDR4 ECC", nvme: "80GB NVMe" },
          { id: "in-epyc-m", tier: "M", priceMo: 1049, cores: "4 vCore", ram: "12GB", ramType: "DDR4 ECC", nvme: "100GB NVMe" },
          { id: "in-epyc-l", tier: "L", priceMo: 1249, cores: "6 vCore", ram: "16GB", ramType: "DDR4 ECC", nvme: "150GB NVMe", popular: true },
          { id: "in-epyc-xl", tier: "XL", priceMo: 1649, cores: "6 vCore", ram: "24GB", ramType: "DDR4 ECC", nvme: "200GB NVMe" },
          { id: "in-epyc-xxl", tier: "XXL", priceMo: 1999, cores: "8 vCore", ram: "32GB", ramType: "DDR4 ECC", nvme: "300GB NVMe" },
          { id: "in-epyc-2xl", tier: "2XL", priceMo: 2649, cores: "10 vCore", ram: "48GB", ramType: "DDR4 ECC", nvme: "350GB NVMe" },
          { id: "in-epyc-3xl", tier: "3XL", priceMo: 2999, cores: "12 vCore", ram: "64GB", ramType: "DDR4 ECC", nvme: "400GB NVMe" },
        ],
        vdsPlans: [
          { id: "in-epyc-vds-l", tier: "L", priceMo: 1500, cores: "6 Dedicated Cores", isDedicated: true, ram: "16GB", ramType: "DDR4 ECC", nvme: "150GB NVMe" },
          { id: "in-epyc-vds-xl", tier: "XL", priceMo: 2399, cores: "6 Dedicated Cores", isDedicated: true, ram: "24GB", ramType: "DDR4 ECC", nvme: "200GB NVMe" },
          { id: "in-epyc-vds-xxl", tier: "XXL", priceMo: 2999, cores: "8 Dedicated Cores", isDedicated: true, ram: "32GB", ramType: "DDR4 ECC", nvme: "300GB NVMe", popular: true },
          { id: "in-epyc-vds-2xl", tier: "2XL", priceMo: 3999, cores: "10 Dedicated Cores", isDedicated: true, ram: "48GB", ramType: "DDR4 ECC", nvme: "350GB NVMe" },
          { id: "in-epyc-vds-3xl", tier: "3XL", priceMo: 4999, cores: "12 Dedicated Cores", isDedicated: true, ram: "64GB", ramType: "DDR4 ECC", nvme: "400GB NVMe" },
        ],
      },
      {
        id: "amd-ryzen",
        name: "AMD Ryzen™ - Premium",
        badge: "Zen 4 / DDR5 Speed",
        image: "/cpu/ryzen9.png",
        cpuModels: [
          "AMD Ryzen™ 9 9900X (Ultra Performance)",
          "AMD Ryzen™ 9 5900X (OVH DDoS Protected)",
        ],
        vpsPlans: [
          { id: "in-ryzen-xs", tier: "XS", priceMo: 699, cores: "1 vCore", ram: "4GB", ramType: "DDR5 ECC", nvme: "50GB NVMe" },
          { id: "in-ryzen-s", tier: "S", priceMo: 1199, cores: "2 vCore", ram: "8GB", ramType: "DDR5 ECC", nvme: "80GB NVMe" },
          { id: "in-ryzen-l", tier: "L", priceMo: 1999, cores: "4 vCore", ram: "16GB", ramType: "DDR5 ECC", nvme: "150GB NVMe", popular: true },
          { id: "in-ryzen-xl", tier: "XL", priceMo: 2749, cores: "5 vCore", ram: "24GB", ramType: "DDR5 ECC", nvme: "180GB NVMe" },
          { id: "in-ryzen-xxl", tier: "XXL", priceMo: 3599, cores: "6 vCore", ram: "32GB", ramType: "DDR5 ECC", nvme: "200GB NVMe" },
          { id: "in-ryzen-2xl", tier: "2XL", priceMo: 4499, cores: "8 vCore", ram: "48GB", ramType: "DDR5 ECC", nvme: "250GB NVMe" },
        ],
      },
    ],
  },
  {
    id: "singapore",
    name: "Singapore",
    flag: "/flags/singapore.png",
    sublocations: ["Equinix SG1 / Jurong"],
    pingEstimate: "28ms",
    lat: 1.3521,
    lng: 103.8198,
    processors: [
      {
        id: "amd-epyc",
        name: "AMD EPYC - Premium",
        badge: "Milan Series",
        image: "/cpu/epyc.png",
        cpuModels: ["AMD EPYC Milan"],
        vpsPlans: [
          { id: "sg-epyc-xs", tier: "XS", priceMo: 1399, cores: "4 vCore", ram: "6GB", ramType: "DDR4 ECC", nvme: "100GB NVMe" },
          { id: "sg-epyc-s", tier: "S", priceMo: 2149, cores: "6 vCore", ram: "16GB", ramType: "DDR4 ECC", nvme: "200GB NVMe" },
          { id: "sg-epyc-m", tier: "M", priceMo: 3349, cores: "8 vCore", ram: "24GB", ramType: "DDR4 ECC", nvme: "300GB NVMe", popular: true },
          { id: "sg-epyc-l", tier: "L", priceMo: 5199, cores: "12 vCore", ram: "48GB", ramType: "DDR4 ECC", nvme: "400GB NVMe" },
          { id: "sg-epyc-xl", tier: "XL", priceMo: 7999, cores: "16 vCore", ram: "64GB", ramType: "DDR4 ECC", nvme: "500GB NVMe" },
        ],
      },
    ],
  },
  {
    id: "germany",
    name: "Germany",
    flag: "/flags/germany.png",
    sublocations: ["Frankfurt am Main"],
    pingEstimate: "115ms",
    lat: 50.1109,
    lng: 8.6821,
    processors: [
      {
        id: "intel-standard",
        name: "Intel - Standard",
        badge: "Xeon Gold 6150",
        image: "/cpu/intel.png",
        cpuModels: ["Intel® Xeon® Gold 6150 @ 2.70 GHz"],
        vpsPlans: [
          { id: "de-xeon-xs", tier: "XS", priceMo: 449, cores: "1 vCore", ram: "6GB", ramType: "DDR4 ECC", nvme: "40GB NVMe" },
          { id: "de-xeon-s", tier: "S", priceMo: 649, cores: "2 vCore", ram: "8GB", ramType: "DDR4 ECC", nvme: "50GB NVMe" },
          { id: "de-xeon-m", tier: "M", priceMo: 849, cores: "4 vCore", ram: "12GB", ramType: "DDR4 ECC", nvme: "100GB NVMe" },
          { id: "de-xeon-l", tier: "L", priceMo: 1049, cores: "4 vCore", ram: "16GB", ramType: "DDR4 ECC", nvme: "150GB NVMe", popular: true },
          { id: "de-xeon-xl", tier: "XL", priceMo: 1549, cores: "6 vCore", ram: "24GB", ramType: "DDR4 ECC", nvme: "200GB NVMe" },
          { id: "de-xeon-xxl", tier: "XXL", priceMo: 2049, cores: "6 vCore", ram: "36GB", ramType: "DDR4 ECC", nvme: "250GB NVMe" },
          { id: "de-xeon-2xl", tier: "2XL", priceMo: 2849, cores: "8 vCore", ram: "48GB", ramType: "DDR4 ECC", nvme: "300GB NVMe" },
          { id: "de-xeon-3xl", tier: "3XL", priceMo: 3849, cores: "8 vCore", ram: "64GB", ramType: "DDR4 ECC", nvme: "350GB NVMe" },
        ],
      },
      {
        id: "amd-ryzen",
        name: "AMD Ryzen™ - Premium",
        badge: "Ryzen 9 5900X",
        image: "/cpu/ryzen9.png",
        cpuModels: ["AMD Ryzen™ 9 5900X (DDoS Protection)"],
        vpsPlans: [
          { id: "de-ryzen-xs", tier: "XS", priceMo: 879, cores: "2 vCore", ram: "6GB", ramType: "DDR4 ECC", nvme: "50GB NVMe" },
          { id: "de-ryzen-s", tier: "S", priceMo: 1099, cores: "2 vCore", ram: "8GB", ramType: "DDR4 ECC", nvme: "50GB NVMe" },
          { id: "de-ryzen-m", tier: "M", priceMo: 1649, cores: "3 vCore", ram: "12GB", ramType: "DDR4 ECC", nvme: "75GB NVMe", popular: true },
          { id: "de-ryzen-l", tier: "L", priceMo: 2189, cores: "4 vCore", ram: "16GB", ramType: "DDR4 ECC", nvme: "120GB NVMe" },
          { id: "de-ryzen-xl", tier: "XL", priceMo: 2959, cores: "6 vCore", ram: "24GB", ramType: "DDR4 ECC", nvme: "160GB NVMe" },
          { id: "de-ryzen-xxl", tier: "XXL", priceMo: 3499, cores: "6 vCore", ram: "32GB", ramType: "DDR4 ECC", nvme: "200GB NVMe" },
        ],
      },
      {
        id: "amd-epyc",
        name: "AMD EPYC - Premium",
        badge: "Milan Series",
        image: "/cpu/epyc.png",
        cpuModels: ["AMD EPYC Milan"],
        vpsPlans: [
          { id: "de-epyc-s", tier: "S", priceMo: 689, cores: "4 vCore", ram: "6GB", ramType: "DDR4 ECC", nvme: "100GB NVMe" },
          { id: "de-epyc-m", tier: "M", priceMo: 1319, cores: "6 vCore", ram: "16GB", ramType: "DDR4 ECC", nvme: "200GB NVMe", popular: true },
          { id: "de-epyc-l", tier: "L", priceMo: 2249, cores: "8 vCore", ram: "24GB", ramType: "DDR4 ECC", nvme: "300GB NVMe" },
          { id: "de-epyc-xl", tier: "XL", priceMo: 3729, cores: "12 vCore", ram: "48GB", ramType: "DDR4 ECC", nvme: "400GB NVMe" },
          { id: "de-epyc-xxl", tier: "XXL", priceMo: 4699, cores: "16 vCore", ram: "64GB", ramType: "DDR4 ECC", nvme: "500GB NVMe" },
        ],
      },
    ],
  },
  {
    id: "usa",
    name: "USA",
    flag: "/flags/usa.png",
    sublocations: ["Ashburn, VA", "Chicago, IL"],
    pingEstimate: "160ms",
    lat: 39.0438,
    lng: -77.4874,
    processors: [
      {
        id: "amd-epyc",
        name: "AMD EPYC - Premium",
        badge: "Milan Series",
        image: "/cpu/epyc.png",
        cpuModels: ["AMD EPYC Milan"],
        vpsPlans: [
          { id: "us-epyc-s", tier: "S", priceMo: 999, cores: "4 vCore", ram: "6GB", ramType: "DDR4 ECC", nvme: "100GB NVMe" },
          { id: "us-epyc-m", tier: "M", priceMo: 1669, cores: "6 vCore", ram: "16GB", ramType: "DDR4 ECC", nvme: "200GB NVMe", popular: true },
          { id: "us-epyc-l", tier: "L", priceMo: 2669, cores: "8 vCore", ram: "24GB", ramType: "DDR4 ECC", nvme: "300GB NVMe" },
          { id: "us-epyc-xl", tier: "XL", priceMo: 4449, cores: "12 vCore", ram: "48GB", ramType: "DDR4 ECC", nvme: "400GB NVMe" },
          { id: "us-epyc-xxl", tier: "XXL", priceMo: 6679, cores: "16 vCore", ram: "64GB", ramType: "DDR4 ECC", nvme: "500GB NVMe" },
        ],
      },
    ],
  },
  {
    id: "canada",
    name: "Canada",
    flag: "/flags/canada.png",
    sublocations: ["Montreal, QC"],
    pingEstimate: "175ms",
    lat: 45.5017,
    lng: -73.5673,
    processors: [
      {
        id: "amd-epyc",
        name: "AMD EPYC - Premium",
        badge: "Milan Series",
        image: "/cpu/epyc.png",
        cpuModels: ["AMD EPYC Milan"],
        vpsPlans: [
          { id: "ca-epyc-s", tier: "S", priceMo: 889, cores: "4 vCore", ram: "6GB", ramType: "DDR4 ECC", nvme: "100GB NVMe" },
          { id: "ca-epyc-m", tier: "M", priceMo: 1669, cores: "6 vCore", ram: "16GB", ramType: "DDR4 ECC", nvme: "200GB NVMe", popular: true },
          { id: "ca-epyc-l", tier: "L", priceMo: 2449, cores: "8 vCore", ram: "24GB", ramType: "DDR4 ECC", nvme: "300GB NVMe" },
          { id: "ca-epyc-xl", tier: "XL", priceMo: 3999, cores: "12 vCore", ram: "48GB", ramType: "DDR4 ECC", nvme: "400GB NVMe" },
          { id: "ca-epyc-xxl", tier: "XXL", priceMo: 5549, cores: "16 vCore", ram: "64GB", ramType: "DDR4 ECC", nvme: "500GB NVMe" },
        ],
      },
    ],
  },
  {
    id: "pakistan",
    name: "Pakistan",
    flag: "/flags/pakistan.png",
    sublocations: ["Lahore, Punjab"],
    pingEstimate: "15ms",
    lat: 31.5580,
    lng: 74.3507,
    processors: [
      {
        id: "amd-epyc",
        name: "AMD EPYC - Premium",
        badge: "Sub-20ms Direct Routing",
        image: "/cpu/epyc.png",
        cpuModels: [
          "AMD EPYC High-Compute Edge Node",
          "Optimized Direct Routing (Lahore Gateway)",
        ],
        vpsPlans: [
          { id: "pk-epyc-s", tier: "S", priceMo: 949, cores: "4 vCore", ram: "6GB", ramType: "DDR4 ECC", nvme: "100GB NVMe" },
          { id: "pk-epyc-m", tier: "M", priceMo: 1599, cores: "6 vCore", ram: "16GB", ramType: "DDR4 ECC", nvme: "200GB NVMe", popular: true },
          { id: "pk-epyc-l", tier: "L", priceMo: 2499, cores: "8 vCore", ram: "24GB", ramType: "DDR4 ECC", nvme: "300GB NVMe" },
          { id: "pk-epyc-xl", tier: "XL", priceMo: 4199, cores: "12 vCore", ram: "48GB", ramType: "DDR4 ECC", nvme: "400GB NVMe" },
        ],
      },
    ],
  },
];
