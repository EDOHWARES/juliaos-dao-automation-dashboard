"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Calculator, Vote, Activity, Clock, CheckCircle } from "lucide-react"
import type { AIAgent } from "@/types"

interface AIAgentInsightsProps {
  agents: AIAgent[]
}

const agentIcons = {
  analyzer: Brain,
  risk: Calculator,
  advisor: Vote,
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "border-green-500/30 bg-green-500/10 text-green-400"
    case "processing":
      return "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
    case "idle":
      return "border-slate-500/30 bg-slate-500/10 text-slate-400"
    default:
      return "border-slate-500/30 bg-slate-500/10 text-slate-400"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return CheckCircle
    case "processing":
      return Activity
    case "idle":
      return Clock
    default:
      return Clock
  }
}

export function AIAgentInsights({ agents }: AIAgentInsightsProps) {
  return (
    <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl shadow-2xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white flex items-center">
          <Brain className="w-5 h-5 mr-2 text-purple-400" />
          JuliaOS AI Agents
        </CardTitle>
        <CardDescription className="text-slate-400">Real-time analysis from autonomous AI agents</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {agents.map((agent) => {
            const IconComponent = agentIcons[agent.type]
            const StatusIcon = getStatusIcon(agent.status)

            return (
              <div
                key={agent.id}
                className="p-4 rounded-lg border border-slate-800/50 bg-gradient-to-br from-slate-800/20 to-slate-900/20 hover:from-slate-800/30 hover:to-slate-900/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white">{agent.name}</h3>
                      <p className="text-xs text-slate-500">Agent ID: {agent.id}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Badge variant="outline" className={getStatusColor(agent.status)}>
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
                  </Badge>
                  <p className="text-xs text-slate-400">Last update: {agent.lastUpdate}</p>
                </div>

                {agent.status === "processing" && (
                  <div className="mt-3">
                    <div className="w-full bg-slate-700/50 rounded-full h-1">
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-1 rounded-full animate-pulse w-3/4"></div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
