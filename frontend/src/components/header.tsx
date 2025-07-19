"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Zap, Menu, Wifi, WifiOff } from "lucide-react"
import { useState } from "react"
import type { ChainInfo } from "@/types"

interface HeaderProps {
  chainInfo: ChainInfo
}

export function Header({ chainInfo }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI Treasurer DAO
                </h1>
                <span className="text-xs text-slate-500 hidden sm:block">Powered by JuliaOS Agents</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-4">
            <Badge
              variant="outline"
              className={`${
                chainInfo.status === "connected"
                  ? "border-green-500/30 bg-green-500/10 text-green-400"
                  : "border-red-500/30 bg-red-500/10 text-red-400"
              }`}
            >
              {chainInfo.status === "connected" ? (
                <Wifi className="w-3 h-3 mr-1" />
              ) : (
                <WifiOff className="w-3 h-3 mr-1" />
              )}
              <span className="hidden md:inline">{chainInfo.name} </span>
              {chainInfo.network}
            </Badge>
            <Button variant="outline" size="sm" className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50">
              <Wallet className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Connect Wallet</span>
              <span className="md:hidden">Connect</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-400 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-slate-800/50 space-y-3">
            <Badge
              variant="outline"
              className={`${
                chainInfo.status === "connected"
                  ? "border-green-500/30 bg-green-500/10 text-green-400"
                  : "border-red-500/30 bg-red-500/10 text-red-400"
              }`}
            >
              {chainInfo.status === "connected" ? (
                <Wifi className="w-3 h-3 mr-1" />
              ) : (
                <WifiOff className="w-3 h-3 mr-1" />
              )}
              {chainInfo.name} {chainInfo.network}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="w-full border-slate-700 bg-slate-800/50 hover:bg-slate-700/50"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
