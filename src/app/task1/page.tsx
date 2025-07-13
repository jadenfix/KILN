'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Globe, Zap, Shield, TrendingUp, DollarSign, Users, Clock, Code, CheckCircle } from 'lucide-react'
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

export default function Task1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Introduction</span>
          </Link>
          <Link href="/task2" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <span className="font-medium">Next: Task 2</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </nav>
      </header>

      {/* Task Header */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-8 px-6"
      >
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Task #1: Product Presentation
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Two comprehensive slides showcasing Kiln's enterprise-grade blockchain infrastructure solutions
          </motion.p>
        </div>
      </motion.section>

      {/* Slide 1 - Kiln Connect */}
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

          {/* Key Capabilities & Benefits */}
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
                  Out-of-the-box Postman collection, TheGraph integration
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
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Kiln DeFi</h2>
                </div>
                <p className="text-xl text-cyan-100 mb-6">
                  Vaults & Yield Aggregation
                </p>
                <p className="text-lg text-cyan-200 leading-relaxed">
                  A permissionless vault abstraction built on top of top DeFi protocols (Morpho, Aave, Compound) 
                  that auto-compounds yields for ERC-20 assets.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-center mb-4">
                    <span className="text-xs text-white/60 uppercase tracking-wide">Yield Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-green-500/20 rounded-lg p-3 text-center">
                      <div className="text-green-300 font-bold text-lg">8.4%</div>
                      <div className="text-white/60">USDC APY</div>
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                      <div className="text-blue-300 font-bold text-lg">6.7%</div>
                      <div className="text-white/60">ETH APY</div>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-white/60 text-center">
                    Auto-rebalancing across Morpho, Aave, Compound
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Capabilities & Benefits */}
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
                <DollarSign className="h-5 w-5 text-green-400" />
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
                  <TrendingUp className="h-4 w-4 text-green-400 flex-shrink-0" />
                  Monetize with performance fees or subscription
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

      {/* Navigation */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to see customer support in action?
            </h3>
            <p className="text-gray-300 mb-6">
              Next up: Technical troubleshooting guide for DeFi vault deposits
            </p>
            <Link 
              href="/task2"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Continue to Task 2
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
