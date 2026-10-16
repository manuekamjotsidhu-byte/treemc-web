export interface RdpPlan {
  id: string
  name: string
  badge?: string
  cpu: string
  cpuDetail: string
  ram: string
  ramDetail: string
  storage: string
  storageDetail: string
  bandwidth: string
  bandwidthDetail: string
  location: string
  ddos: string
  price: string
  period: string
  orderLink: string
}

export interface RdpPlanType {
  id: string
  name: string
  displayName: string
  image: string
}

export interface RdpConfig {
  planTypes: RdpPlanType[]
  plans: {
    [key: string]: RdpPlan[]
  }
}
