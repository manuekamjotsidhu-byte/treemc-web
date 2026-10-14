export interface CpuInfo {
  note: string;
  models: string[];
}

export const vpsCpuInfo: Record<string, CpuInfo> = {
  // India
  "india_xeon-standard": {
    note: 'Our India Intel Xeon plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
  },
  "india_ryzen-ddr5": {
    note: "Our India AMD Ryzen plans come with multiple CPU options based on current stock allocation. Processors operate on standard base clock speeds.",
    models: [
      "AMD Ryzen™ 9 9900X (12 Cores / 24 Threads)",
      "AMD Ryzen™ 9 5900X (12 Cores / 24 Threads)",
    ],
  },
  "india_epyc-milan": {
    note: "Our India AMD EPYC nodes offer dedicated enterprise cores with DDR4 ECC memory and fast NVMe storage based on current stock.",
    models: [
      "AMD EPYC 7F72 @ 3.20 GHz",
      "AMD EPYC 7K62 @ 2.60 GHz",
    ],
  },
  // Germany
  "germany_xeon-gold": {
    note: "Our Germany Intel Xeon Gold nodes deliver enterprise compute hosted in Frankfurt am Main with low European latency.",
    models: [
      "Intel® Xeon® Gold 6150 @ 2.70 GHz",
      "Intel® Xeon® Gold 6248 @ 2.50 GHz",
    ],
  },
  "germany_ryzen-5900x": {
    note: "Our Germany AMD Ryzen nodes feature OVH Game DDoS filtering with hardware options based on current datacenter stock.",
    models: [
      "AMD Ryzen™ 9 5900X (12 Cores / 24 Threads)",
      "AMD Ryzen™ 7 5800X (8 Cores / 16 Threads)",
    ],
  },
  "germany_epyc-milan": {
    note: "Our Germany EPYC nodes are connected directly to DE-CIX Frankfurt with enterprise hardware options based on current stock.",
    models: [
      "AMD EPYC 7763 @ 2.45 GHz",
      "AMD EPYC 7543 @ 2.80 GHz",
    ],
  },
  // Singapore
  "singapore_epyc-milan": {
    note: "Our Singapore nodes operate inside Equinix SG1, delivering sub-25ms regional routing with hardware options based on current stock.",
    models: [
      "AMD EPYC 7B13 @ 2.25 GHz",
      "AMD EPYC 7713 @ 2.00 GHz",
    ],
  },
  // USA
  "usa_epyc-milan": {
    note: "Our United States nodes are hosted in Ashburn / Data Alley with enterprise hardware options based on current stock.",
    models: [
      "AMD EPYC 7763 @ 2.45 GHz",
      "AMD EPYC 7543 @ 2.80 GHz",
    ],
  },
  // Canada
  "canada_epyc-milan": {
    note: "Our Canada nodes operate from the BHS Beauharnois complex with enterprise hardware options based on current stock.",
    models: [
      "AMD EPYC 7763 @ 2.45 GHz",
      "AMD EPYC 7543 @ 2.80 GHz",
    ],
  },
  // Fallbacks by CPU
  "xeon-standard": {
    note: 'Our Intel Xeon plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
  },
  "ryzen-ddr5": {
    note: "Our AMD Ryzen plans come with multiple CPU options based on current stock allocation. Processors operate on standard base clock speeds.",
    models: [
      "AMD Ryzen™ 9 9900X (12 Cores / 24 Threads)",
      "AMD Ryzen™ 9 5900X (12 Cores / 24 Threads)",
    ],
  },
  "epyc-milan": {
    note: "Our AMD EPYC nodes offer dedicated enterprise cores with DDR4 ECC memory and fast NVMe storage based on current stock.",
    models: [
      "AMD EPYC 7F72 @ 3.20 GHz",
      "AMD EPYC 7K62 @ 2.60 GHz",
    ],
  },
  "xeon-gold": {
    note: "Our Germany Intel Xeon Gold nodes deliver enterprise compute hosted in Frankfurt am Main with low European latency.",
    models: [
      "Intel® Xeon® Gold 6150 @ 2.70 GHz",
      "Intel® Xeon® Gold 6248 @ 2.50 GHz",
    ],
  },
  "ryzen-5900x": {
    note: "Our Germany AMD Ryzen nodes feature OVH Game DDoS filtering with hardware options based on current datacenter stock.",
    models: [
      "AMD Ryzen™ 9 5900X (12 Cores / 24 Threads)",
      "AMD Ryzen™ 7 5800X (8 Cores / 16 Threads)",
    ],
  },
};

export const vdsCpuInfo: Record<string, CpuInfo> = {
  "xeon-vds": {
    note: 'Our Intel Xeon VDS plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
  },
  "epyc-vds": {
    note: "Our AMD EPYC VDS instances deliver dedicated physical cores without virtualization overcommit or resource throttling.",
    models: [
      "AMD EPYC 7F72 @ 3.20 GHz",
      "AMD EPYC 7K62 @ 2.60 GHz",
    ],
  },
  "india_xeon-vds": {
    note: 'Our India Intel Xeon VDS plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
  },
  "india_epyc-vds": {
    note: "Our India AMD EPYC VDS instances deliver dedicated bare-metal performance with DDR4 ECC memory and enterprise NVMe storage.",
    models: [
      "AMD EPYC 7F72 @ 3.20 GHz",
      "AMD EPYC 7K62 @ 2.60 GHz",
    ],
  },
  "germany_xeon-vds": {
    note: "Our Germany Intel Xeon Gold VDS instances deliver dedicated enterprise compute in Frankfurt am Main based on current stock.",
    models: [
      "Intel® Xeon® Gold 6150 @ 2.70 GHz",
      "Intel® Xeon® Gold 6248 @ 2.50 GHz",
    ],
  },
  "germany_epyc-vds": {
    note: "Our Germany AMD EPYC VDS instances feature dedicated Zen 3 cores routed directly via DE-CIX Frankfurt.",
    models: [
      "AMD EPYC 7763 @ 2.45 GHz",
      "AMD EPYC 7543 @ 2.80 GHz",
    ],
  },
  "singapore_epyc-vds": {
    note: "Our Singapore AMD EPYC VDS instances operate inside Equinix SG1 with dedicated cores based on current stock.",
    models: [
      "AMD EPYC 7B13 @ 2.25 GHz",
      "AMD EPYC 7713 @ 2.00 GHz",
    ],
  },
};
