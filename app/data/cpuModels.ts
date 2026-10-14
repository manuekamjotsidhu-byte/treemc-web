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
    note: "Our India AMD Ryzen plans feature high-performance processors engineered for intensive workloads.",
    models: [
      "AMD Ryzen™ 9 9900X (12 Cores / 24 Threads)",
      "AMD Ryzen™ 9 5900X (12 Cores / 24 Threads)",
    ],
  },
  "india_epyc-milan": {
    note: "Our India AMD EPYC nodes offer dedicated enterprise cores with DDR4 ECC memory and fast NVMe storage.",
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
    ],
  },
  "germany_ryzen-5900x": {
    note: "Our Germany AMD Ryzen nodes feature OVH Game DDoS filtering for high-performance gaming and workloads.",
    models: [
      "AMD Ryzen™ 9 5900X (12 Cores / 24 Threads)",
    ],
  },
  "germany_epyc-milan": {
    note: "Our Germany EPYC nodes are connected directly to DE-CIX Frankfurt with enterprise hardware options.",
    models: [
      "AMD EPYC Milan",
    ],
  },

  // Singapore
  "singapore_epyc-milan": {
    note: "Our Singapore nodes operate inside Equinix SG1, delivering sub-25ms regional routing across Southeast Asia.",
    models: [
      "AMD EPYC Milan",
    ],
  },

  // USA
  "usa_epyc-milan": {
    note: "Our United States nodes are hosted in Ashburn / Data Alley with low-latency North American routing.",
    models: [
      "AMD EPYC Milan",
    ],
  },

  // Canada
  "canada_epyc-milan": {
    note: "Our Canada nodes operate from the BHS Beauharnois complex with enterprise DDoS protection.",
    models: [
      "AMD EPYC Milan",
    ],
  },

  // Fallbacks by CPU Type
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
    note: "Our AMD Ryzen plans feature high-performance processors engineered for intensive workloads.",
    models: [
      "AMD Ryzen™ 9 9900X (12 Cores / 24 Threads)",
      "AMD Ryzen™ 9 5900X (12 Cores / 24 Threads)",
    ],
  },
  "epyc-milan": {
    note: "Our AMD EPYC nodes offer dedicated enterprise cores with DDR4 ECC memory and fast NVMe storage.",
    models: [
      "AMD EPYC Milan",
    ],
  },
  "xeon-gold": {
    note: "Our Germany Intel Xeon Gold nodes deliver enterprise compute hosted in Frankfurt am Main with low European latency.",
    models: [
      "Intel® Xeon® Gold 6150 @ 2.70 GHz",
    ],
  },
  "ryzen-5900x": {
    note: "Our Germany AMD Ryzen nodes feature OVH Game DDoS filtering for high-performance gaming and workloads.",
    models: [
      "AMD Ryzen™ 9 5900X (12 Cores / 24 Threads)",
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
    note: "Our AMD EPYC VDS instances deliver dedicated physical cores without virtualization overcommit.",
    models: [
      "AMD EPYC Milan",
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
    ],
  },
  "germany_epyc-vds": {
    note: "Our Germany AMD EPYC VDS instances feature dedicated Zen 3 cores routed directly via DE-CIX Frankfurt.",
    models: [
      "AMD EPYC Milan",
    ],
  },
  "singapore_epyc-vds": {
    note: "Our Singapore AMD EPYC VDS instances operate inside Equinix SG1 with dedicated cores based on current stock.",
    models: [
      "AMD EPYC Milan",
    ],
  },
};
