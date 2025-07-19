"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StatusBadge, TypeBadge } from "@/components/ui/status-badge"
import { ChevronRight, Users, Vote } from "lucide-react"
import type { Proposal } from "@/types"

interface ProposalsTableProps {
  proposals: Proposal[]
}

export function ProposalsTable({ proposals }: ProposalsTableProps) {
  return (
    <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-xl shadow-2xl">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-lg sm:text-xl font-semibold text-white flex items-center">
              <Vote className="w-5 h-5 mr-2 text-cyan-400" />
              Active Proposals
            </CardTitle>
            <CardDescription className="text-slate-400">Manage and vote on DAO governance proposals</CardDescription>
          </div>
          <Button
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 w-full sm:w-auto"
          >
            <Vote className="w-4 h-4 mr-2" />
            New Proposal
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Mobile Card View */}
        <div className="block lg:hidden space-y-4">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="p-4 rounded-lg border border-slate-800/50 bg-slate-800/20 hover:bg-slate-800/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white truncate">{proposal.title}</h3>
                    <p className="text-sm text-slate-400 mt-1 line-clamp-2">{proposal.description}</p>
                    <p className="text-xs text-slate-500 mt-1">{proposal.id}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white ml-2">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <TypeBadge type={proposal.type} />
                  <StatusBadge status={proposal.status} />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-slate-300">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span>{proposal.votes.toLocaleString()}</span>
                  </div>
                  <span className="text-slate-300">{proposal.timeLeft}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block rounded-lg border border-slate-800/50 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800/50 hover:bg-slate-800/30">
                <TableHead className="text-slate-300">Proposal</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Votes</TableHead>
                <TableHead className="text-slate-300">Time Left</TableHead>
                <TableHead className="text-slate-300"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {proposals.map((proposal) => (
                <TableRow key={proposal.id} className="border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <TableCell className="py-4">
                    <div className="space-y-1">
                      <div className="font-medium text-white">{proposal.title}</div>
                      <div className="text-sm text-slate-400 max-w-md">{proposal.description}</div>
                      <div className="text-xs text-slate-500">{proposal.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <TypeBadge type={proposal.type} />
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={proposal.status} />
                  </TableCell>
                  <TableCell className="text-slate-300">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span>{proposal.votes.toLocaleString()}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-300">{proposal.timeLeft}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
