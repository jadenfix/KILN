'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, TrendingUp, Database, Zap, BarChart3, CheckCircle, Code, Globe } from 'lucide-react'
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

export default function ValidatorAnalysis() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Overview</span>
          </Link>
          <h1 className="text-xl font-bold text-white">Task #3: Validator Analysis</h1>
        </nav>
      </header>

      {/* Overview */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div 
            variants={fadeInUp}
            className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 md:p-12 shadow-2xl text-center"
          >
            <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Validator Performance Comparison
            </h2>
            <p className="text-xl text-emerald-100 mb-6">
              Analyzing top 50 validators by APY across two wallet addresses using real-time Kiln API data
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-emerald-200 text-sm mb-2">
                    <strong>Wallet A:</strong><br/>
                    0x509a7667aC8D0320e36172c192506a6188aA84f6
                  </p>
                </div>
                <div>
                  <p className="text-emerald-200 text-sm">
                    <strong>Wallet B:</strong><br/>
                    0x1a2D6Eb01c9da8405ad358407dF973e13C23b1DE
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Results Table */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-12 text-center">
            Performance Comparison Results
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="pb-4 text-gray-300 font-semibold">Metric</th>
                    <th className="pb-4 text-center text-indigo-300 font-semibold">Wallet A</th>
                    <th className="pb-4 text-center text-cyan-300 font-semibold">Wallet B</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white"># Validators</td>
                    <td className="py-4 text-center text-indigo-300 font-mono">50</td>
                    <td className="py-4 text-center text-cyan-300 font-mono">50</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Avg CL APY</td>
                    <td className="py-4 text-center text-indigo-300 font-mono">1.0647%</td>
                    <td className="py-4 text-center text-cyan-300 font-mono">0.5517%</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Avg EL APY</td>
                    <td className="py-4 text-center text-indigo-300 font-mono">0.0165%</td>
                    <td className="py-4 text-center text-cyan-300 font-mono">0.0145%</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-white font-semibold">Avg Gross APY</td>
                    <td className="py-4 text-center text-indigo-300 font-mono font-bold text-xl">3.661%</td>
                    <td className="py-4 text-center text-cyan-300 font-mono font-bold text-xl bg-green-900/30 rounded px-2">5.2326%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="font-semibold text-green-300">Key Finding</span>
              </div>
              <p className="text-green-200">
                Wallet B outperforms Wallet A by <strong>1.5716%</strong> in gross APY, representing significantly better validator performance.
              </p>
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
        className="py-16 px-6 bg-white/5"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-12 text-center">
            Technical Implementation
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-400" />
                Data Collection
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 text-sm">
                  <div className="text-gray-400 mb-2">API Endpoints Used:</div>
                  <div className="text-blue-300 font-mono">/eth/stakes</div>
                  <div className="text-blue-300 font-mono">/eth/rewards</div>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Fetched 300 validators for Wallet A
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Fetched 750 validators for Wallet B
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Selected top 50 by gross APY
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-400" />
                Analysis Method
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 text-sm">
                  <div className="text-gray-400 mb-2">APY Calculation:</div>
                  <div className="text-purple-300 font-mono">CL APY = consensus_rewards / balance</div>
                  <div className="text-purple-300 font-mono">EL APY = execution_rewards / balance</div>
                  <div className="text-green-300 font-mono">Gross APY = from API response</div>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Converted wei to ETH values
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Computed statistical averages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Rounded to 4 decimal places
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-green-400" />
                Implementation
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 text-sm">
                  <div className="text-gray-400 mb-2">Technologies:</div>
                  <div className="text-green-300">Python 3.13.3</div>
                  <div className="text-green-300">Requests library</div>
                  <div className="text-green-300">Statistics module</div>
                  <div className="text-green-300">Type hints & docstrings</div>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Error handling for API calls
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Environment variable config
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    Clean markdown output
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Code Preview */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-12 text-center">
            Code Implementation Preview
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-slate-800 rounded-2xl p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">task3_compare.py</span>
            </div>
            <div className="text-sm font-mono text-gray-300 overflow-x-auto">
              <div className="text-blue-300">def analyze_wallet(name: str, address: str) -&gt; Dict[str, float]:</div>
              <div className="text-gray-400 ml-4">"""Analyze validator performance for a given wallet."""</div>
              <div className="ml-4">stakes = fetch_stakes(address)</div>
              <div className="ml-4 text-purple-300">if not stakes:</div>
              <div className="ml-8 text-red-300">return {"{"}"count": 0, "avg_cl": 0, "avg_el": 0, "avg_gr": 0{"}"}</div>
              <div className="ml-4 text-gray-400"># Sort by gross_apy and take top 50</div>
              <div className="ml-4">top_validators = sorted(stakes, </div>
              <div className="ml-8">key=lambda x: x.get("gross_apy", 0), reverse=True)[:50]</div>
              <div className="ml-4 text-gray-400"># Calculate averages...</div>
              <div className="ml-4 text-green-300">return statistics.mean(gross_apys)</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Results Visualization */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6 bg-black/20"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-12 text-center">
            Performance Insights
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Wallet A</h3>
              <p className="text-3xl font-bold text-white mb-2">3.661%</p>
              <p className="text-indigo-200">Average Gross APY</p>
              <p className="text-sm text-indigo-300 mt-2">300 total validators</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 text-center border-2 border-green-400">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Wallet B</h3>
              <p className="text-3xl font-bold text-white mb-2">5.233%</p>
              <p className="text-emerald-200">Average Gross APY</p>
              <p className="text-sm text-emerald-300 mt-2">750 total validators</p>
              <div className="mt-3 px-3 py-1 bg-green-400 text-green-900 rounded-full text-xs font-semibold">
                🏆 WINNER
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Difference</h3>
              <p className="text-3xl font-bold text-white mb-2">+1.57%</p>
              <p className="text-orange-200">APY Advantage</p>
              <p className="text-sm text-orange-300 mt-2">Wallet B vs Wallet A</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-8">
            Data-Driven Validator Analysis
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8">
            This comprehensive analysis demonstrates proficiency in API integration, data processing, 
            and statistical analysis for blockchain validator performance comparison.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/presentation"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              View Task #1: Product Presentation
            </Link>
            <Link
              href="/support"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              View Task #2: Customer Support
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
