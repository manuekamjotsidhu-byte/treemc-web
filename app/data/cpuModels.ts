export interface CpuInfo {
  note: string;
  models: string[];
}

export const vpsCpuInfo: Record<string, CpuInfo> = {
  // India Intel Xeon - 4 CPU options as provided by user
  "india_xeon-standard": {
    note: 'Our India Intel Xeon plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
  },
  "xeon-standard": {
    note: 'Our Intel Xeon plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
  },
};

export const vdsCpuInfo: Record<string, CpuInfo> = {
  // India Intel Xeon VDS - 4 CPU options as provided by user
  "xeon-vds": {
    note: 'Our Intel Xeon VDS plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
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
};
