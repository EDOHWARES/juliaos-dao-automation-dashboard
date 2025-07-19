"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Coins, TrendingUp, TrendingDown } from "lucide-react"
import type { TreasuryData } from "@/types"

interface TreasuryOverviewProps {
  treasuryData: TreasuryData
}

export function TreasuryOverview({ treasuryData }: TreasuryOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Treasury Stats */}
      <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl shadow-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white flex items-center">
            <Coins className="w-5 h-5 mr-2 text-yellow-400" />
            Treasury Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Value */}
            <div className="space-y-2">
              <div className="text-sm text-slate-400">Total Value</div>
              <div className="text-xl sm:text-2xl font-bold text-white">{treasuryData.totalValue}</div>
              <div className="flex items-center text-sm text-green-400">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12.5% this month
              </div>
            </div>

            {/* Monthly Burn */}
            <div className="space-y-2">
              <div className="text-sm text-slate-400">Monthly Burn</div>
              <div className="text-lg sm:text-xl font-semibold text-white">{treasuryData.monthlyBurn}</div>
              <div className="flex items-center text-sm text-red-400">
                <TrendingDown className="w-4 h-4 mr-1" />
                Runway: {treasuryData.runway}
              </div>
            </div>

            {/* Asset Allocation */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="text-sm text-slate-400 mb-3">Asset Allocation</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {treasuryData.assets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${asset.color}`}></div>
                      <span className="text-sm text-slate-300">{asset.name}</span>
                    </div>
                    <div className="text-sm text-slate-400">{asset.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Treasury Forecast Chart */}
      <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl shadow-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
            Treasury Burn Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              remaining: {
                label: "Remaining Funds",
                color: "hsl(var(--chart-1))",
              },
              burn: {
                label: "Monthly Burn",
                color: "hsl(var(--chart-2))",
              },
              projected: {
                label: "Projected Balance",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={treasuryData.forecastData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="remaining"
                  stroke="var(--color-remaining)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-remaining)" }}
                />
                <Line
                  type="monotone"
                  dataKey="projected"
                  stroke="var(--color-projected)"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "var(--color-projected)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
