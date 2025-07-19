"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Bot, ExternalLink, TrendingUp, Users } from "lucide-react"
import type { AIRecommendation } from "@/types"

interface AIRecommendationsProps {
  recommendations: AIRecommendation[]
}

const iconMap = {
  Activity,
  TrendingUp,
  Users,
}

const getGradientClass = (type: string) => {
  switch (type) {
    case "engagement":
      return "from-purple-500/10 to-cyan-500/10 border-purple-500/20"
    case "treasury":
      return "from-cyan-500/10 to-blue-500/10 border-cyan-500/20"
    case "community":
      return "from-green-500/10 to-emerald-500/10 border-green-500/20"
    default:
      return "from-gray-500/10 to-slate-500/10 border-gray-500/20"
  }
}

const getIconColor = (type: string) => {
  switch (type) {
    case "engagement":
      return "bg-purple-500/20 text-purple-400"
    case "treasury":
      return "bg-cyan-500/20 text-cyan-400"
    case "community":
      return "bg-green-500/20 text-green-400"
    default:
      return "bg-gray-500/20 text-gray-400"
  }
}

export function AIRecommendations({ recommendations }: AIRecommendationsProps) {
  return (
    <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl shadow-2xl h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white flex items-center">
          <Bot className="w-5 h-5 mr-2 text-purple-400" />
          AI Recommendations
        </CardTitle>
        <CardDescription className="text-slate-400">Smart insights for your DAO</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((recommendation) => {
          const IconComponent = iconMap[recommendation.icon as keyof typeof iconMap] || Activity

          return (
            <div
              key={recommendation.id}
              className={`p-4 rounded-lg bg-gradient-to-br border ${getGradientClass(recommendation.type)}`}
            >
              <div className="flex items-start space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getIconColor(recommendation.type)}`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="text-sm font-medium text-white">{recommendation.title}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{recommendation.description}</div>
                </div>
              </div>
            </div>
          )
        })}

        <div className="pt-4 border-t border-slate-800/50">
          <Button variant="outline" size="sm" className="w-full border-slate-700 bg-slate-800/50 hover:bg-slate-700/50">
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Insights
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
