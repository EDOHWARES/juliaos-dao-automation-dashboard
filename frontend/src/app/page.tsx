"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { ProposalsTable } from "@/components/proposals-table"
import { AIRecommendations } from "@/components/ai-recommendations"
import { TreasuryOverview } from "@/components/treasury-overview"
import { AIAgentInsights } from "@/components/ai-agent-insights"
import { ProposalDetailModal } from "@/components/proposal-detail-modal"
import { chainInfo } from "@/utils/constants"
import { getProposals, getTreasury, getAIAgents, getAIInsights, getAIRecommendations } from "@/services/api"
import type { Proposal, TreasuryData, AIAgent, AIInsight, AIRecommendation } from "@/types"

export default function AITreasurerDAODashboard() {
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [proposals, setProposals] = useState<Proposal[]>([])
  const [treasuryData, setTreasuryData] = useState<TreasuryData | null>(null)
  const [aiAgents, setAIAgents] = useState<AIAgent[]>([])
  const [aiRecommendations, setAIRecommendations] = useState<AIRecommendation[]>([])
  const [aiInsights, setAIInsights] = useState<AIInsight[]>([])

  useEffect(() => {
    getProposals().then(setProposals)
    getTreasury().then(setTreasuryData)
    getAIAgents().then(setAIAgents)
    getAIRecommendations().then(setAIRecommendations)
    getAIInsights().then(setAIInsights)
  }, [])

  const handleProposalClick = (proposal: Proposal) => {
    setSelectedProposal(proposal)
    setIsModalOpen(true)
    getAIInsights(proposal.id).then(setAIInsights)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProposal(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header chainInfo={chainInfo} />

      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* AI Agents Section */}
        <div className="mb-6">
          <AIAgentInsights agents={aiAgents} />
        </div>

        {/* Mobile Layout: Stack everything vertically */}
        <div className="block xl:hidden space-y-6">
          <ProposalsTable proposals={proposals} onProposalClick={handleProposalClick} />
          <AIRecommendations recommendations={aiRecommendations} />
          {treasuryData && <TreasuryOverview treasuryData={treasuryData} />}
        </div>

        {/* Desktop Layout: Grid layout */}
        <div className="hidden xl:grid xl:grid-cols-4 gap-6 min-h-[calc(100vh-200px)]">
          {/* Main Content - Proposals and Treasury */}
          <div className="xl:col-span-3 space-y-6">
            <ProposalsTable proposals={proposals} onProposalClick={handleProposalClick} />
            {treasuryData && <TreasuryOverview treasuryData={treasuryData} />}
          </div>

          {/* Right Panel - AI Recommendations */}
          <div className="xl:col-span-1">
            <AIRecommendations recommendations={aiRecommendations} />
          </div>
        </div>
      </main>

      {/* Proposal Detail Modal */}
      <ProposalDetailModal
        proposal={selectedProposal}
        insights={aiInsights}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}
