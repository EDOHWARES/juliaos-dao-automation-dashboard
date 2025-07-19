import type { Proposal, TreasuryData, AIRecommendation, AIAgent, AIInsight, ChainInfo } from "@/types"

export const mockProposals: Proposal[] = [
  {
    id: "PROP-001",
    title: "Increase Marketing Budget",
    description: "Allocate additional 50,000 USDC for Q1 marketing initiatives to expand community reach",
    fullDescription:
      "This proposal requests an allocation of 50,000 USDC from the treasury to fund comprehensive marketing initiatives for Q1 2024. The funds will be distributed across: 1) Social media advertising campaigns (60%), 2) Influencer partnerships (25%), 3) Content creation and community events (15%). Expected outcomes include 40% increase in community engagement and 25% growth in active governance participants.",
    status: "Active",
    votes: 1247,
    timeLeft: "2 days",
    type: "Treasury",
    requestedAmount: "50,000 USDC",
    proposer: "0x742d35Cc6634C0532925a3b8D4C9db96590b5",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "PROP-002",
    title: "New Partnership with DeFi Protocol",
    description: "Strategic partnership proposal with leading DeFi protocol for yield optimization",
    fullDescription:
      "Establish a strategic partnership with Compound Finance to optimize treasury yield generation. This partnership will involve depositing 30% of USDC reserves into Compound's lending pools, generating an estimated 4.2% APY. The partnership includes governance token exchange and joint marketing initiatives.",
    status: "Pending",
    votes: 892,
    timeLeft: "5 days",
    type: "Partnership",
    proposer: "0x8ba1f109551bD432803012645Hac136c0532925",
    createdAt: "2024-01-12T14:20:00Z",
  },
  {
    id: "PROP-003",
    title: "Governance Token Burn Mechanism",
    description: "Implement quarterly token burn based on protocol revenue to increase token value",
    fullDescription:
      "Implement an automated token burn mechanism that burns 25% of quarterly protocol revenue in DAO tokens. This deflationary mechanism will reduce total supply over time, potentially increasing token value for holders. The burn will occur automatically via smart contract every 90 days.",
    status: "Active",
    votes: 2156,
    timeLeft: "1 day",
    type: "Tokenomics",
    proposer: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    createdAt: "2024-01-10T09:15:00Z",
  },
]

export const mockTreasuryData: TreasuryData = {
  totalValue: "$2,847,392",
  assets: [
    { name: "USDC", amount: "1,247,392", percentage: 44, color: "bg-blue-500" },
    { name: "ETH", amount: "892.5", percentage: 31, color: "bg-purple-500" },
    { name: "DAO Token", amount: "450,000", percentage: 16, color: "bg-cyan-500" },
    { name: "Other", amount: "Mixed", percentage: 9, color: "bg-green-500" },
  ],
  monthlyBurn: "$127,450",
  runway: "22 months",
  forecastData: [
    { month: "Jan", remaining: 2847, burn: 127, projected: 2720 },
    { month: "Feb", remaining: 2720, burn: 135, projected: 2585 },
    { month: "Mar", remaining: 2585, burn: 142, projected: 2443 },
    { month: "Apr", remaining: 2443, burn: 128, projected: 2315 },
    { month: "May", remaining: 2315, burn: 156, projected: 2159 },
    { month: "Jun", remaining: 2159, burn: 134, projected: 2025 },
  ],
}

export const mockAIAgents: AIAgent[] = [
  {
    id: "julia-analyzer",
    name: "Proposal Analyzer",
    type: "analyzer",
    status: "active",
    lastUpdate: "2 minutes ago",
  },
  {
    id: "julia-risk",
    name: "Treasury Risk Calculator",
    type: "risk",
    status: "active",
    lastUpdate: "1 minute ago",
  },
  {
    id: "julia-advisor",
    name: "Voting Advisor",
    type: "advisor",
    status: "processing",
    lastUpdate: "30 seconds ago",
  },
]

export const mockAIInsights: AIInsight[] = [
  {
    agentId: "julia-analyzer",
    proposalId: "PROP-001",
    type: "summary",
    content:
      "This marketing proposal shows strong strategic alignment with DAO growth objectives. The budget allocation is reasonable and targets high-impact channels. Expected ROI of 3.2x based on historical data.",
    confidence: 87,
    timestamp: "2024-01-16T10:30:00Z",
  },
  {
    agentId: "julia-risk",
    proposalId: "PROP-001",
    type: "risk",
    content:
      "Low financial risk. The requested 50K USDC represents 1.8% of total treasury. Current burn rate can accommodate this expense without affecting runway significantly.",
    score: 23,
    confidence: 92,
    timestamp: "2024-01-16T10:32:00Z",
  },
  {
    agentId: "julia-advisor",
    proposalId: "PROP-001",
    type: "recommendation",
    content:
      "RECOMMENDED: Strong business case with measurable KPIs. Marketing spend aligns with growth phase requirements and community expansion goals.",
    recommendation: "YES",
    confidence: 89,
    timestamp: "2024-01-16T10:35:00Z",
  },
]

export const mockAIRecommendations: AIRecommendation[] = [
  {
    id: "ai-001",
    title: "High Engagement Detected",
    description:
      "Proposal PROP-003 showing 40% higher engagement than average. Julia recommends expediting the voting process.",
    type: "engagement",
    icon: "Activity",
    priority: "high",
    agentSource: "Julia Analyzer",
    confidence: 94,
  },
  {
    id: "ai-002",
    title: "Treasury Optimization Alert",
    description:
      "Risk Calculator suggests diversifying 15% of USDC into yield-bearing assets. Potential 4.2% APY increase.",
    type: "treasury",
    icon: "TrendingUp",
    priority: "medium",
    agentSource: "Julia Risk Calculator",
    confidence: 87,
  },
  {
    id: "ai-003",
    title: "Voting Pattern Analysis",
    description: "Advisor detected unusual voting patterns on treasury proposals. Recommending enhanced due diligence.",
    type: "community",
    icon: "Users",
    priority: "high",
    agentSource: "Julia Voting Advisor",
    confidence: 91,
  },
]

export const chainInfo: ChainInfo = {
  name: "Ethereum",
  network: "Sepolia Testnet",
  status: "connected",
}
