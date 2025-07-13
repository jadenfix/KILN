'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Globe, Zap, Shield, TrendingUp, DollarSign, Users, Clock, Code, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Presentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Overview</span>
          </Link>
          <h1 className="text-xl font-bold text-white">Task #1: Product Presentation</h1>
        </nav>
      </header>

      {/* Slide 1 - Kiln Connect */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div 
            variants={fadeInUp}
            className="rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-8 w-8 text-white" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Kiln Connect</h2>
                </div>
                <p className="text-xl text-indigo-100 mb-6">
                  White-Label Staking API & SDK
                </p>
                <p className="text-lg text-indigo-200 leading-relaxed">
                  A turnkey, enterprise-grade REST API and JS/TS SDK suite that lets you embed 
                  proof-of-stake services anywhere—custody platforms, exchanges, wallets.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-white/60">API Console</span>
                  </div>
                  <div className="text-sm font-mono text-green-300">
                    <div>POST /eth/stakes</div>
                    <div className="text-white/60 mt-1">{"{"}</div>
                    <div className="text-white/60 ml-4">"amount": "32000000000000000000",</div>
                    <div className="text-white/60 ml-4">"wallet": "0x..."</div>
                    <div className="text-white/60">{"}"}</div>
                    <div className="text-blue-300 mt-2">✓ Stake successfully initiated</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Capabilities */}
          <motion.div 
            variants={staggerContainer}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                Key Capabilities
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  Multi-chain PoS support (Ethereum, Cosmos, Avalanche, Polkadot)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  1-click stake, unstake and reward-management endpoints
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  Real-time reporting & webhooks for accounting, compliance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  Out-of-the-box Postman collection, TheGraph integration, sample code
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                Business Benefits
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-400 flex-shrink-0" />
                  Drive new revenue by adding "Earn" to your existing UX
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Slash ops overhead—no node infra or slasher management
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  White-label branding & full UX control
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  Go live in days, not months
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Slide 2 - Kiln DeFi */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div 
            variants={fadeInUp}
            className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-white/60">DeFi Dashboard</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-sm text-white">USDC Vault</span>
                        <span className="text-sm font-mono text-green-300">12.5% APY</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-sm text-white">ETH Vault</span>
                        <span className="text-sm font-mono text-green-300">8.2% APY</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-sm text-white">DAI Vault</span>
                        <span className="text-sm font-mono text-green-300">11.8% APY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-8 w-8 text-white" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Kiln DeFi</h2>
                </div>
                <p className="text-xl text-cyan-100 mb-6">
                  Vaults & Yield Aggregation
                </p>
                <p className="text-lg text-cyan-200 leading-relaxed">
                  A permissionless vault abstraction built on top of top DeFi protocols 
                  (Morpho, Aave, Compound) that auto-compounds yields for ERC-20 assets.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Capabilities */}
          <motion.div 
            variants={staggerContainer}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-cyan-400" />
                Key Capabilities
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  Single "deposit" call for stablecoins (USDC, DAI) or ETH
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  Auto-rebalance between lending markets for best APR
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  Governance controls: pause, withdraw, fee parameters
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  On-chain & API-driven reporting (/defi/vaults, /defi/positions)
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                Business Benefits
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  Enable your users to earn DeFi yield without UX friction
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  Risk-managed exposure via vetted strategy contracts
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-400 flex-shrink-0" />
                  Monetize with performance fees or subscription models
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  "Deploy in one day" on any EVM chain (Ethereum, Base, Polygon)
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Summary */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6 bg-black/20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-8">
            Enterprise-Grade Blockchain Infrastructure
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8">
            Both Kiln Connect and Kiln DeFi provide turnkey solutions that enable businesses to 
            integrate blockchain services seamlessly, reduce operational complexity, and unlock new revenue streams.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/support"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              View Task #2: Customer Support
            </Link>
            <Link
              href="/validator-analysis"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              View Task #3: Validator Analysis
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
