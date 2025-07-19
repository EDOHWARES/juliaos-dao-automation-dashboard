"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProposalsTable } from "@/components/proposals-table"
import { AIRecommendations } from "@/components/ai-recommendations"
import { TreasuryOverview } from "@/components/treasury-overview"
import { AIAgentInsights } from "@/components/ai-agent-insights"
import { ProposalDetailModal } from "@/components/proposal-detail-modal"
import {
  mockProposals,
  mockTreasuryData,
  mockAIRecommendations,
  mockAIAgents,
  mockAIInsights,
  chainInfo,
} from "@/utils/constants"
import type { Proposal } from "@/types"

export default function AITreasurerDAODashboard() {
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProposalClick = (proposal: Proposal) => {
    setSelectedProposal(proposal)
    setIsModalOpen(true)
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
          <AIAgentInsights agents={mockAIAgents} />
        </div>

        {/* Mobile Layout: Stack everything vertically */}
        <div className="block xl:hidden space-y-6">
          <ProposalsTable proposals={mockProposals} onProposalClick={handleProposalClick} />
          <AIRecommendations recommendations={mockAIRecommendations} />
          <TreasuryOverview treasuryData={mockTreasuryData} />
        </div>

        {/* Desktop Layout: Grid layout */}
        <div className="hidden xl:grid xl:grid-cols-4 gap-6 min-h-[calc(100vh-200px)]">
          {/* Main Content - Proposals and Treasury */}
          <div className="xl:col-span-3 space-y-6">
            <ProposalsTable proposals={mockProposals} onProposalClick={handleProposalClick} />
            <TreasuryOverview treasuryData={mockTreasuryData} />
          </div>

          {/* Right Panel - AI Recommendations */}
          <div className="xl:col-span-1">
            <AIRecommendations recommendations={mockAIRecommendations} />
          </div>
        </div>
      </main>

      {/* Proposal Detail Modal */}
      <ProposalDetailModal
        proposal={selectedProposal}
        insights={mockAIInsights}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}
