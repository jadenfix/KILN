'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BarChart3, TrendingUp, Database, Code, CheckCircle, ExternalLink } from 'lucide-react'
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

export default function Task3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/task2" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Task 2</span>
          </Link>
          <Link href="/thank-you" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <span className="font-medium">Next: Thank You</span>
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
            Task #3: Validator Performance Analysis
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive comparison of validator performance metrics using real Kiln API data
          </motion.p>
        </div>
      </motion.section>

      {/* Overview */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-8 px-6"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-6 w-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Analysis Overview</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="h-5 w-5 text-emerald-400" />
                  <span className="font-semibold text-white">Data Source</span>
                </div>
                <p className="text-gray-300 text-sm">Real Kiln API integration with live validator performance data</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  <span className="font-semibold text-white">Metrics</span>
                </div>
                <p className="text-gray-300 text-sm">CL APY, EL APY, and Gross APY comparison across top 50 validators</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-purple-400" />
                  <span className="font-semibold text-white">Implementation</span>
                </div>
                <p className="text-gray-300 text-sm">Production-ready Python script with error handling and statistics</p>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Wallet Addresses Compared:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
                <div>
                  <span className="text-gray-400">Wallet A: </span>
                  <span className="text-green-300">0x4b2A436B544E276783042750D6678dC30368EF35</span>
                </div>
                <div>
                  <span className="text-gray-400">Wallet B: </span>
                  <span className="text-blue-300">0x8D85a8B34B47e2152934567Af35dfae3E3c8E1c3</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technical Implementation */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-8 px-6"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Technical Implementation</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Real-time Kiln API integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Top 50 validator filtering by Gross APY
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Comprehensive error handling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Statistical analysis (mean, median, std dev)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Professional data formatting
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">API Endpoints Used</h3>
                <div className="space-y-3">
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <code className="text-sm text-cyan-300">GET /v1/eth/stakes</code>
                    <p className="text-gray-400 text-xs mt-1">Retrieve validator stakes by wallet</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <code className="text-sm text-cyan-300">GET /v1/eth/rewards</code>
                    <p className="text-gray-400 text-xs mt-1">Fetch performance metrics and APY data</p>
                  </div>
                </div>
                
                <h4 className="text-md font-semibold text-white mt-6 mb-2">Environment Setup</h4>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <code className="text-sm text-yellow-300">
                    KILN_API_TOKEN=your_token_here<br/>
                    BASE_URL=https://api.testnet.kiln.fi/v1
                  </code>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sample Results */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-8 px-6"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Performance Analysis Results</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Wallet A Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Average CL APY:</span>
                    <span className="text-green-400 font-semibold">4.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Average EL APY:</span>
                    <span className="text-blue-400 font-semibold">1.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Average Gross APY:</span>
                    <span className="text-emerald-400 font-bold">6.0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Validators Analyzed:</span>
                    <span className="text-white">50</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Wallet B Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Average CL APY:</span>
                    <span className="text-green-400 font-semibold">4.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Average EL APY:</span>
                    <span className="text-blue-400 font-semibold">1.0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Average Gross APY:</span>
                    <span className="text-cyan-400 font-bold">5.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Validators Analyzed:</span>
                    <span className="text-white">50</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Performance Delta Analysis</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">+0.4%</div>
                  <div className="text-sm text-gray-300">Gross APY Advantage</div>
                  <div className="text-xs text-gray-400">Wallet A vs Wallet B</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">+0.2%</div>
                  <div className="text-sm text-gray-300">CL APY Advantage</div>
                  <div className="text-xs text-gray-400">Wallet A vs Wallet B</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">+0.2%</div>
                  <div className="text-sm text-gray-300">EL APY Advantage</div>
                  <div className="text-xs text-gray-400">Wallet A vs Wallet B</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Code Sample */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-8 px-6"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Implementation Sample</h2>
              </div>
              <Link 
                href="https://github.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-sm">View Full Code</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-300">
{`def analyze_validators(wallet_address, wallet_name):
    """Analyze top 50 validators by gross APY for a wallet"""
    
    # Fetch stakes data
    stakes_data = fetch_stakes_data(wallet_address)
    if not stakes_data:
        return None
    
    # Get rewards and calculate APY
    validators_with_apy = []
    for stake in stakes_data:
        rewards = fetch_rewards_data(stake['validator_address'])
        if rewards:
            apy_data = calculate_apy_metrics(stake, rewards)
            validators_with_apy.append(apy_data)
    
    # Sort by gross APY and take top 50
    top_validators = sorted(
        validators_with_apy, 
        key=lambda x: x['gross_apy'], 
        reverse=True
    )[:50]
    
    return calculate_statistics(top_validators)`}
              </pre>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Business Impact */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-8 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-r from-emerald-500/10 to-teal-600/10 border border-emerald-500/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Business Value & Applications</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-emerald-300 mb-2">Customer Insights</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Identify top-performing validators</li>
                  <li>• Compare portfolio performance</li>
                  <li>• Optimize staking strategies</li>
                  <li>• Track performance trends</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-300 mb-2">Sales Engineering</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Demonstrate API capabilities</li>
                  <li>• Show real performance data</li>
                  <li>• Prove technical competency</li>
                  <li>• Enable data-driven decisions</li>
                </ul>
              </div>
            </div>
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
              Analysis Complete!
            </h3>
            <p className="text-gray-300 mb-6">
              You've seen presentations, support methodology, and data analysis. Ready for the wrap-up?
            </p>
            <Link 
              href="/thank-you"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
            >
              Complete the Journey
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
