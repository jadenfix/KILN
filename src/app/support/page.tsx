'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Search, Code, CheckCircle, AlertTriangle, Wrench, Terminal } from 'lucide-react'
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

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Overview</span>
          </Link>
          <h1 className="text-xl font-bold text-white">Task #2: Customer Support</h1>
        </nav>
      </header>

      {/* Problem Statement */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div 
            variants={fadeInUp}
            className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 md:p-12 shadow-2xl text-center"
          >
            <Shield className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Customer Support Case
            </h2>
            <p className="text-xl text-cyan-100 mb-4">
              "Why doesn't my 2 USDC deposit go through?"
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
              <p className="text-cyan-200 text-sm">
                <strong>Transaction Details:</strong><br/>
                • Vault: 0x4b2A436B544E276783042750D6678dC30368EF35<br/>
                • Amount: 2 USDC<br/>
                • Method: deposit(uint256)<br/>
                • Status: Failed
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Step 1: Confirming the Vault & Amount */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-12 text-center">
            Step 1: Confirming the Vault & Amount
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Search className="h-5 w-5 text-blue-400" />
                1.1 Vault Address Check
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2">Extract transaction target:</div>
                  <div className="text-green-300">to = 0x4b2A436B544E276783042750D6678dC30368EF35</div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2">Call Kiln DeFi Reporting API:</div>
                  <div className="text-blue-300">GET https://api.mainnet.kiln.fi/v1/defi/vaults?chainId=8453</div>
                  <div className="text-gray-400 mt-2">↓ Response:</div>
                  <div className="text-green-300">✓ contractAddress matches → Kiln × Morpho Base vault confirmed</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-400" />
                1.2 Amount Decode
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2">Calldata analysis:</div>
                  <div className="text-yellow-300">Method ID: 0x6e553f65 = deposit(uint256)</div>
                  <div className="text-yellow-300">Argument: 0x...01eb480 → decimal 2,000,000</div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2">Decimal conversion:</div>
                  <div className="text-green-300">USDC has 6 decimals</div>
                  <div className="text-green-300">2,000,000 units = 2 USDC</div>
                  <div className="text-blue-300 mt-2">✓ Deposit amount confirmed: 2 USDC</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Step 2: Debugging the Failure */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6 bg-white/5"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-12 text-center">
            Step 2: Debugging the Failure by Simulating the Call
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-green-400" />
                2.1 Simulate via eth_call
              </h3>
              <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">const result = await provider.call({`{`}</div>
                <div className="text-blue-300 ml-4">to: vaultAddress,</div>
                <div className="text-blue-300 ml-4">data: rawTx.data,</div>
                <div className="text-blue-300 ml-4">from: rawTx.from</div>
                <div className="text-blue-300">{`});`}</div>
                <div className="text-gray-400 mt-4">↓ Returns:</div>
                <div className="text-red-300">Error: VM Exception while processing transaction:</div>
                <div className="text-red-300">revert ERC20: transfer amount exceeds allowance</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                2.2 Root Cause
              </h3>
              <div className="space-y-4">
                <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-orange-200 text-sm">
                    <strong>Issue:</strong> Missing ERC-20 allowance
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 text-sm">
                  <div className="text-gray-400 mb-2">What happens internally:</div>
                  <div className="text-red-300">deposit() calls usdc.transferFrom(user, vault, amount)</div>
                  <div className="text-gray-400 mt-2">If vault has no allowance:</div>
                  <div className="text-red-300">→ Transaction reverts</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-yellow-400" />
                2.3 Resolution Steps
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-xs">
                  <div className="text-gray-400 mb-2">Step 1: Approve vault to spend USDC</div>
                  <div className="text-green-300">await usdcContract.connect(userSigner)</div>
                  <div className="text-green-300">.approve(vaultAddress,</div>
                  <div className="text-green-300">ethers.utils.parseUnits("2", 6));</div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-xs">
                  <div className="text-gray-400 mb-2">Step 2: Resubmit deposit transaction</div>
                  <div className="text-blue-300">// Same deposit(2 USDC) transaction</div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-xs">
                  <div className="text-gray-400 mb-2">Step 3: Verify allowance (optional)</div>
                  <div className="text-purple-300">const allowance = await usdcContract</div>
                  <div className="text-purple-300">.allowance(user, vaultAddress);</div>
                  <div className="text-gray-400 mt-1">// Should be ≥ 2,000,000</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Complete Resolution Flow */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-12 text-center">
            Complete Resolution Flow
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Identify</h4>
                <p className="text-green-100 text-sm">Confirm vault address and decode transaction amount</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Terminal className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Simulate</h4>
                <p className="text-green-100 text-sm">Use eth_call to reproduce the error safely</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Diagnose</h4>
                <p className="text-green-100 text-sm">Identify missing ERC-20 allowance as root cause</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Resolve</h4>
                <p className="text-green-100 text-sm">Guide customer through allowance approval process</p>
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
        variants={staggerContainer}
        className="py-16 px-6 bg-black/20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-8">
            Technical Customer Support Excellence
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8">
            This systematic approach to troubleshooting DeFi transactions demonstrates deep technical understanding, 
            methodical problem-solving, and clear communication with customers.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/presentation"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              View Task #1: Product Presentation
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
