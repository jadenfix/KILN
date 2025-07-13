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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              A comprehensive showcase of staking infrastructure, DeFi solutions, and validator performance analysis. 
              Demonstrating enterprise-grade blockchain services with modern technical implementations.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="#tasks"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 hover:scale-105"
              >
                Explore Solutions
              </Link>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">
                View Code <span aria-hidden="true">→</span>
              </a>
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
                <Link href="/presentation" className="block">
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
                <Link href="/support" className="block">
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
                <Link href="/validator-analysis" className="block">
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
