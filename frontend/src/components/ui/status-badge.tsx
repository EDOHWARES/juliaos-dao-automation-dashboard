import { Badge } from "@/components/ui/badge"
import type { Proposal } from "@/types"

interface StatusBadgeProps {
  status: Proposal["status"]
}

interface TypeBadgeProps {
  type: Proposal["type"]
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Draft":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return <Badge className={`${getStatusColor(status)} border`}>{status}</Badge>
}

export function TypeBadge({ type }: TypeBadgeProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Treasury":
        return "bg-blue-500/20 text-blue-400"
      case "Partnership":
        return "bg-purple-500/20 text-purple-400"
      case "Tokenomics":
        return "bg-cyan-500/20 text-cyan-400"
      case "Community":
        return "bg-green-500/20 text-green-400"
      case "Technical":
        return "bg-orange-500/20 text-orange-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return <Badge className={`${getTypeColor(type)} border-0`}>{type}</Badge>
}
