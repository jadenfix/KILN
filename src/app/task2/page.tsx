'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, AlertCircle, CheckCircle, Code, Search, Play, Wrench } from 'lucide-react'
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

export default function Task2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/task1" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Task 1</span>
          </Link>
          <Link href="/task3" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <span className="font-medium">Next: Task 3</span>
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
            Task #2: Customer Support
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Technical troubleshooting guide: "Why doesn't my 2 USDC deposit go through?"
          </motion.p>
        </div>
      </motion.section>

      {/* Problem Statement */}
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
            className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-6 w-6 text-red-400" />
              <h2 className="text-xl font-bold text-white">Customer Issue</h2>
            </div>
            <p className="text-gray-300">
              A customer is trying to deposit 2 USDC into a Kiln DeFi vault but the transaction is failing. 
              They need our help to understand why and how to fix it.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Step 1: Confirmation */}
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
              <Search className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Step 1: Confirming the Vault & Amount</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">1. Vault Address Check</h3>
                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                  <code className="text-sm text-green-300">
                    Extract to = 0x4b2A436B544E276783042750D6678dC30368EF35
                  </code>
                </div>
                <p className="text-gray-300 mb-4">Call Kiln DeFi Reporting API:</p>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <code className="text-sm text-cyan-300">
                    GET https://api.mainnet.kiln.fi/v1/defi/vaults?chainId=8453
                  </code>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  → Find a vault whose contractAddress matches exactly ⇒ confirms it's the Kiln × Morpho Base vault.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">2. Amount Decode</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Calldata method ID:</p>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <code className="text-sm text-yellow-300">0x6e553f65 = deposit(uint256)</code>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Argument hex to decimal:</p>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <code className="text-sm text-green-300">0x…01eb480 → decimal 2,000,000</code>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">USDC has 6 decimals:</p>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <code className="text-sm text-blue-300">2,000,000 units = 2 USDC</code>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Confirms deposit of 2 USDC</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Step 2: Debugging */}
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
              <Play className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Step 2: Debugging the Failure by Simulating the Call</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">1. Simulate via eth_call</h3>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`const result = await provider.call({
  to: vaultAddress,
  data: rawTx.data,
  from: rawTx.from
});`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">2. Expected Error Response</h3>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-300 font-mono text-sm">
                    Error: VM Exception while processing transaction: revert ERC20: transfer amount exceeds allowance
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">3. Root Cause Analysis</h3>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-200 mb-2 font-semibold">Missing ERC-20 allowance</p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• deposit() internally calls usdc.transferFrom(user, vault, amount)</li>
                    <li>• If the vault has no allowance to spend USDC, it reverts</li>
                    <li>• User must approve the vault before depositing</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Step 3: Resolution */}
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
              <Wrench className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Step 3: Resolution Steps for Customer</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">1. Approve the vault to spend USDC</h3>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`await usdcContract.connect(userSigner).approve(
  vaultAddress,
  ethers.utils.parseUnits("2", 6)
);`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">2. Resubmit the deposit transaction</h3>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    Once approved, the customer can resubmit the same deposit(2 USDC) transaction.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">3. (Optional) Verify on-chain</h3>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`const allowance = await usdcContract.allowance(user, vaultAddress);
console.log("USDC allowance:", allowance.toString());`}
                  </pre>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Should now be ≥ 2,000,000 (representing 2 USDC with 6 decimals)
                </p>
              </div>
            </div>

            <div className="mt-8 bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="font-semibold text-green-300">Resolution Complete</span>
              </div>
              <p className="text-gray-300 text-sm">
                Customer should now be able to successfully deposit 2 USDC into the Kiln DeFi vault.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Summary */}
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
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Support Methodology Summary</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Search className="h-6 w-6 text-blue-400" />
                </div>
                <p className="font-medium text-white">Investigate</p>
                <p className="text-gray-400">Verify vault and decode transaction data</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Play className="h-6 w-6 text-purple-400" />
                </div>
                <p className="font-medium text-white">Simulate</p>
                <p className="text-gray-400">Use eth_call to reproduce the error</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Wrench className="h-6 w-6 text-green-400" />
                </div>
                <p className="font-medium text-white">Resolve</p>
                <p className="text-gray-400">Provide clear fix and verification steps</p>
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
              Ready for data-driven insights?
            </h3>
            <p className="text-gray-300 mb-6">
              Next up: Validator performance analysis using real Kiln API data
            </p>
            <Link 
              href="/task3"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200"
            >
              Continue to Task 3
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
