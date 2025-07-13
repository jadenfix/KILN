'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Database, Shield, TrendingUp, Zap, Globe, DollarSign } from 'lucide-react'
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

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative overflow-hidden px-6 py-24 sm:px-12 sm:py-32"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c3aed,transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#06b6d4,transparent_50%)] opacity-20"></div>
        
        <div className="mx-auto max-w-7xl relative">
          <motion.div variants={fadeInUp} className="text-center">
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Kiln External Sales Engineer
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto"
            >
              A comprehensive showcase demonstrating deep expertise in blockchain infrastructure, DeFi protocols, 
              and validator performance analysis. Welcome to my complete solution for the Kiln External Sales Engineer exercise.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="font-semibold text-emerald-300">1,050+ Validators</div>
                <div className="text-gray-400">Analyzed Across Both Wallets</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="font-semibold text-blue-300">Real-Time API</div>
                <div className="text-gray-400">Live Kiln Integration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="font-semibold text-purple-300">Enterprise Grade</div>
                <div className="text-gray-400">Production-Ready Code</div>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/task1"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 hover:scale-105"
              >
                Start with Task 1
              </Link>
              <Link href="/task3" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">
                View Analysis <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Tasks Overview */}
      <motion.section 
        id="tasks"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 sm:py-32 bg-white/5 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Exercise Deliverables
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Three comprehensive tasks showcasing blockchain infrastructure expertise
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Task 1 */}
              <motion.div variants={fadeInUp} className="group">
                <Link href="/task1" className="block">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white relative z-10">
                      <Globe className="h-5 w-5 flex-none" />
                      Task #1: Product Presentation
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-100 relative z-10">
                      <p className="flex-auto">
                        Two-slide presentation showcasing Kiln Connect (Staking API) and Kiln DeFi (Yield Vaults) 
                        with comprehensive feature breakdowns and business benefits.
                      </p>
                      <p className="mt-6 flex items-center gap-x-2 text-sm font-semibold">
                        <span>View Presentation</span>
                        <ChevronRight className="h-4 w-4" />
                      </p>
                    </dd>
                  </div>
                </Link>
              </motion.div>

              {/* Task 2 */}
              <motion.div variants={fadeInUp} className="group">
                <Link href="/task2" className="block">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white relative z-10">
                      <Shield className="h-5 w-5 flex-none" />
                      Task #2: Customer Support
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-cyan-100 relative z-10">
                      <p className="flex-auto">
                        Technical troubleshooting guide for DeFi vault deposits, including transaction analysis, 
                        error simulation, and step-by-step resolution process.
                      </p>
                      <p className="mt-6 flex items-center gap-x-2 text-sm font-semibold">
                        <span>View Support Guide</span>
                        <ChevronRight className="h-4 w-4" />
                      </p>
                    </dd>
                  </div>
                </Link>
              </motion.div>

              {/* Task 3 */}
              <motion.div variants={fadeInUp} className="group">
                <Link href="/task3" className="block">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white relative z-10">
                      <TrendingUp className="h-5 w-5 flex-none" />
                      Task #3: Validator Analysis
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-emerald-100 relative z-10">
                      <p className="flex-auto">
                        Performance comparison tool analyzing top 50 validators by APY across two wallet addresses, 
                        with real-time API integration and comprehensive metrics.
                      </p>
                      <p className="mt-6 flex items-center gap-x-2 text-sm font-semibold">
                        <span>View Analysis</span>
                        <ChevronRight className="h-4 w-4" />
                      </p>
                    </dd>
                  </div>
                </Link>
              </motion.div>
            </dl>
          </motion.div>
        </div>
      </motion.section>

      {/* Impressive Metrics Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 sm:py-32 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Exercise Results & Impact
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Real-world analysis demonstrating technical depth and business acumen
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1,050+</div>
              <div className="text-gray-300 mb-1">Validators Analyzed</div>
              <div className="text-sm text-gray-400">Across both wallet addresses</div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1.57%</div>
              <div className="text-gray-300 mb-1">APY Performance Gap</div>
              <div className="text-sm text-gray-400">Identified optimization opportunity</div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">5.23%</div>
              <div className="text-gray-300 mb-1">Peak Gross APY</div>
              <div className="text-sm text-gray-400">Top 50 validator average</div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300 mb-1">API Success Rate</div>
              <div className="text-sm text-gray-400">Robust error handling</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Executive Summary */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Executive Summary
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Comprehensive analysis demonstrating blockchain expertise and business impact
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                Key Findings
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-400 pl-4">
                  <div className="font-semibold text-emerald-300">Performance Gap Identified</div>
                  <div className="text-gray-300 text-sm">Wallet B outperforms Wallet A by 1.57% APY, representing significant optimization potential for staking strategies.</div>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <div className="font-semibold text-blue-300">Scale Advantage</div>
                  <div className="text-gray-300 text-sm">Wallet B's 750 validators vs Wallet A's 300 demonstrates the benefits of diversified validator portfolios.</div>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <div className="font-semibold text-purple-300">Technical Excellence</div>
                  <div className="text-gray-300 text-sm">Production-ready code with comprehensive error handling, type safety, and detailed documentation.</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                Business Impact
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <div className="font-semibold text-yellow-300">Revenue Optimization</div>
                  <div className="text-gray-300 text-sm">1.57% APY improvement could generate significant additional returns on large staking portfolios.</div>
                </div>
                <div className="border-l-4 border-cyan-400 pl-4">
                  <div className="font-semibold text-cyan-300">Risk Management</div>
                  <div className="text-gray-300 text-sm">Comprehensive customer support processes reduce support tickets and improve user experience.</div>
                </div>
                <div className="border-l-4 border-indigo-400 pl-4">
                  <div className="font-semibold text-indigo-300">Scalability</div>
                  <div className="text-gray-300 text-sm">Automated analysis tools enable monitoring of thousands of validators efficiently.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Technologies Used */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technologies & Implementation
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Built with modern development tools and best practices
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
          >
            {[
              { name: 'Python', description: 'API integration & data analysis', icon: Database },
              { name: 'React/Next.js', description: 'Modern web presentation', icon: Globe },
              { name: 'Kiln API', description: 'Blockchain infrastructure', icon: Zap },
              { name: 'TypeScript', description: 'Type-safe development', icon: DollarSign }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                className="rounded-2xl bg-white/5 backdrop-blur-sm p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <tech.icon className="mx-auto h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action / Next Steps */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 sm:py-32 bg-gradient-to-r from-emerald-900/50 to-teal-900/50 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            Ready to Drive Blockchain Innovation?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            This exercise demonstrates the technical depth, analytical rigor, and professional execution 
            that I bring to complex blockchain infrastructure challenges. Let's discuss how I can contribute 
            to Kiln's continued growth and technical excellence.
          </motion.p>
          
          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Database className="h-8 w-8 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Technical Expertise</h3>
              <p className="text-gray-300 text-sm">Deep understanding of blockchain protocols, API integration, and data analysis</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Shield className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Customer Focus</h3>
              <p className="text-gray-300 text-sm">Systematic approach to problem-solving and exceptional customer support</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Business Impact</h3>
              <p className="text-gray-300 text-sm">Data-driven insights that translate to real business value and optimization</p>
            </motion.div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jadenfix123@gmail.com"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              <span>Let's Connect</span>
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/jadenfix"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              View LinkedIn Profile
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <p className="text-sm leading-5 text-gray-400">
              External Sales Engineer Exercise - Kiln
            </p>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-gray-400">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
