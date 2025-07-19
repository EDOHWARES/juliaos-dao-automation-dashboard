"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { StatusBadge, TypeBadge } from "@/components/ui/status-badge"
import { Brain, Calculator, Vote, Users, Clock, ExternalLink, ThumbsUp, ThumbsDown } from "lucide-react"
import type { Proposal, AIInsight } from "@/types"

interface ProposalDetailModalProps {
  proposal: Proposal | null
  insights: AIInsight[]
  isOpen: boolean
  onClose: () => void
}

export function ProposalDetailModal({ proposal, insights, isOpen, onClose }: ProposalDetailModalProps) {
  if (!proposal) return null

  const proposalInsights = insights.filter((insight) => insight.proposalId === proposal.id)
  const summary = proposalInsights.find((insight) => insight.type === "summary")
  const risk = proposalInsights.find((insight) => insight.type === "risk")
  const recommendation = proposalInsights.find((insight) => insight.type === "recommendation")

  const getRiskColor = (score?: number) => {
    if (!score) return "text-slate-400"
    if (score < 30) return "text-green-400"
    if (score < 70) return "text-yellow-400"
    return "text-red-400"
  }

  const getRecommendationColor = (rec?: string) => {
    switch (rec) {
      case "YES":
        return "text-green-400 bg-green-500/10 border-green-500/30"
      case "NO":
        return "text-red-400 bg-red-500/10 border-red-500/30"
      default:
        return "text-slate-400 bg-slate-500/10 border-slate-500/30"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-800">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-xl font-semibold text-white">{proposal.title}</DialogTitle>
              <DialogDescription className="text-slate-400">
                Proposal {proposal.id} • Created by {proposal.proposer.slice(0, 6)}...{proposal.proposer.slice(-4)}
              </DialogDescription>
            </div>
            <div className="flex items-center space-x-2">
              <TypeBadge type={proposal.type} />
              <StatusBadge status={proposal.status} />
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Proposal Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Proposal Details</h3>
              <p className="text-slate-300 leading-relaxed">{proposal.fullDescription}</p>
            </div>

            {proposal.requestedAmount && (
              <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                <span className="text-slate-400">Requested Amount:</span>
                <span className="text-white font-semibold">{proposal.requestedAmount}</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400">Votes:</span>
                <span className="text-white font-medium">{proposal.votes.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400">Time Left:</span>
                <span className="text-white font-medium">{proposal.timeLeft}</span>
              </div>
            </div>
          </div>

          <Separator className="bg-slate-800" />

          {/* AI Insights */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              JuliaOS AI Analysis
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Summary */}
              {summary && (
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-white">Proposal Analysis</span>
                    <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-400">
                      {summary.confidence}% confidence
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{summary.content}</p>
                </div>
              )}

              {/* Risk Assessment */}
              {risk && (
                <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calculator className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-white">Risk Assessment</span>
                    <Badge variant="outline" className={`text-xs border-yellow-500/30 ${getRiskColor(risk.score)}`}>
                      Risk: {risk.score}/100
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{risk.content}</p>
                </div>
              )}

              {/* Recommendation */}
              {recommendation && (
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <Vote className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium text-white">Voting Recommendation</span>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getRecommendationColor(recommendation.recommendation)}`}
                    >
                      {recommendation.recommendation}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{recommendation.content}</p>
                </div>
              )}
            </div>
          </div>

          <Separator className="bg-slate-800" />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
              <ThumbsUp className="w-4 h-4 mr-2" />
              Vote YES
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent"
            >
              <ThumbsDown className="w-4 h-4 mr-2" />
              Vote NO
            </Button>
            <Button variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Chain
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
