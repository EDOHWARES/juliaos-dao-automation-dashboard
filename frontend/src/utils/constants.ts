import type { Proposal, TreasuryData, AIRecommendation } from "@/types"

export const mockProposals: Proposal[] = [
  {
    id: "PROP-001",
    title: "Increase Marketing Budget",
    description: "Allocate additional 50,000 USDC for Q1 marketing initiatives to expand community reach",
    status: "Active",
    votes: 1247,
    timeLeft: "2 days",
    type: "Treasury",
  },
  {
    id: "PROP-002",
    title: "New Partnership with DeFi Protocol",
    description: "Strategic partnership proposal with leading DeFi protocol for yield optimization",
    status: "Pending",
    votes: 892,
    timeLeft: "5 days",
    type: "Partnership",
  },
  {
    id: "PROP-003",
    title: "Governance Token Burn Mechanism",
    description: "Implement quarterly token burn based on protocol revenue to increase token value",
    status: "Active",
    votes: 2156,
    timeLeft: "1 day",
    type: "Tokenomics",
  },
  {
    id: "PROP-004",
    title: "Community Grant Program",
    description: "Establish 100,000 USDC grant program for community developers and contributors",
    status: "Draft",
    votes: 0,
    timeLeft: "7 days",
    type: "Community",
  },
  {
    id: "PROP-005",
    title: "Technical Upgrade v2.0",
    description: "Major protocol upgrade including gas optimization and new features",
    status: "Active",
    votes: 1834,
    timeLeft: "3 days",
    type: "Technical",
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
}

export const mockAIRecommendations: AIRecommendation[] = [
  {
    id: "ai-001",
    title: "High Engagement Alert",
    description: "Proposal PROP-003 has 40% higher engagement than average. Consider fast-tracking the vote.",
    type: "engagement",
    icon: "Activity",
    priority: "high",
  },
  {
    id: "ai-002",
    title: "Treasury Optimization",
    description: "Consider diversifying 15% of USDC holdings into yield-bearing assets for better returns.",
    type: "treasury",
    icon: "TrendingUp",
    priority: "medium",
  },
  {
    id: "ai-003",
    title: "Community Growth",
    description: "Voter participation increased 25% this month. Great time to propose important initiatives.",
    type: "community",
    icon: "Users",
    priority: "medium",
  },
]
