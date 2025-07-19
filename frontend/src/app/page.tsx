"use client"

import { Header } from "@/components/header"
import { ProposalsTable } from "@/components/proposals-table"
import { AIRecommendations } from "@/components/ai-recommendations"
import { TreasuryOverview } from "@/components/treasury-overview"
import { mockProposals, mockTreasuryData, mockAIRecommendations } from "@/utils/constants"

export default function DAODashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Mobile Layout: Stack everything vertically */}
        <div className="block xl:hidden space-y-6">
          <ProposalsTable proposals={mockProposals} />
          <AIRecommendations recommendations={mockAIRecommendations} />
          <TreasuryOverview treasuryData={mockTreasuryData} />
        </div>

        {/* Desktop Layout: Grid layout */}
        <div className="hidden xl:grid xl:grid-cols-4 gap-6 min-h-[calc(100vh-120px)]">
          {/* Main Content - Proposals and Treasury */}
          <div className="xl:col-span-3 space-y-6">
            <ProposalsTable proposals={mockProposals} />
            <TreasuryOverview treasuryData={mockTreasuryData} />
          </div>

          {/* Right Panel - AI Recommendations */}
          <div className="xl:col-span-1">
            <AIRecommendations recommendations={mockAIRecommendations} />
          </div>
        </div>
      </main>
    </div>
  )
}
