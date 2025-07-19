export interface Proposal {
  id: string
  title: string
  description: string
  status: "Active" | "Pending" | "Draft"
  votes: number
  timeLeft: string
  type: "Treasury" | "Partnership" | "Tokenomics" | "Community" | "Technical"
}

export interface TreasuryAsset {
  name: string
  amount: string
  percentage: number
  color: string
}

export interface TreasuryData {
  totalValue: string
  assets: TreasuryAsset[]
  monthlyBurn: string
  runway: string
}

export interface AIRecommendation {
  id: string
  title: string
  description: string
  type: "engagement" | "treasury" | "community" | "technical"
  icon: string
  priority: "high" | "medium" | "low"
}
