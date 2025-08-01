export interface Proposal {
  id: string
  title: string
  description: string
  fullDescription: string
  status: "Active" | "Pending" | "Draft"
  votes: number
  timeLeft: string
  type: "Treasury" | "Partnership" | "Tokenomics" | "Community" | "Technical"
  requestedAmount?: string
  proposer: string
  createdAt: string
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
  forecastData: TreasuryForecast[]
}

export interface TreasuryForecast {
  month: string
  remaining: number
  burn: number
  projected: number
}

export interface AIAgent {
  id: string
  name: string
  type: "analyzer" | "risk" | "advisor"
  status: "active" | "processing" | "idle"
  lastUpdate: string
}

export interface AIInsight {
  agentId: string
  proposalId: string
  type: "summary" | "risk" | "recommendation"
  content: string
  score?: number
  recommendation?: "YES" | "NO" | "ABSTAIN"
  confidence: number
  timestamp: string
}

export interface AIRecommendation {
  id: string
  title: string
  description: string
  type: "engagement" | "treasury" | "community" | "technical"
  icon: string
  priority: "high" | "medium" | "low"
  agentSource: string
  confidence: number
}

export interface ChainInfo {
  name: string
  network: string
  status: "connected" | "disconnected"
}
