'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Linkedin, Github, Calendar, CheckCircle, Sparkles, Heart } from 'lucide-react'
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

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/task3" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Task 3</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <span className="font-medium">Back to Start</span>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-xl opacity-50"></div>
              <div className="relative w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Thank You!
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            You've just experienced a comprehensive showcase of technical expertise, 
            customer support excellence, and data-driven insights. This represents my 
            commitment to delivering exceptional results for Kiln.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 text-yellow-400 mb-8"
          >
            <Sparkles className="h-5 w-5" />
            <span className="font-medium">All Exercise Requirements Exceeded</span>
            <Sparkles className="h-5 w-5" />
          </motion.div>
        </div>
      </motion.section>

      {/* Completion Summary */}
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
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What You've Experienced</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A complete demonstration of the skills and expertise that make me the right fit 
                for Kiln's External Sales Engineer role.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Task #1: Presentations</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Professional slides showcasing Kiln Connect and Kiln DeFi with clear business value propositions.
                </p>
                <div className="text-xs text-indigo-300">
                  ✓ Enterprise messaging<br/>
                  ✓ Technical accuracy<br/>
                  ✓ Business benefits
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Task #2: Support</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Comprehensive troubleshooting methodology with technical depth and clear resolution steps.
                </p>
                <div className="text-xs text-cyan-300">
                  ✓ Root cause analysis<br/>
                  ✓ Transaction debugging<br/>
                  ✓ Customer solutions
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Task #3: Analysis</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Real validator performance comparison using live Kiln API with statistical insights.
                </p>
                <div className="text-xs text-emerald-300">
                  ✓ API integration<br/>
                  ✓ Data analysis<br/>
                  ✓ Performance metrics
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Strengths */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why I'm the Right Fit</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-300 mb-3">Technical Excellence</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Full-stack development capabilities</li>
                  <li>• Blockchain & DeFi expertise</li>
                  <li>• API integration proficiency</li>
                  <li>• Production-ready code quality</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-300 mb-3">Business Acumen</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Enterprise value communication</li>
                  <li>• Customer support methodology</li>
                  <li>• Data-driven insights</li>
                  <li>• Professional presentation skills</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact & Next Steps */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm excited about the opportunity to bring this level of expertise and dedication 
              to Kiln's sales engineering team. Let's discuss how I can contribute to your success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <a 
                href="mailto:jaden@example.com" 
                className="flex items-center justify-center gap-2 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-colors"
              >
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-white font-medium">Email</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/jadenfix" 
                className="flex items-center justify-center gap-2 p-4 bg-cyan-500/20 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-cyan-400" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/jadenfix" 
                className="flex items-center justify-center gap-2 p-4 bg-purple-500/20 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-colors"
              >
                <Github className="h-5 w-5 text-purple-400" />
                <span className="text-white font-medium">GitHub</span>
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-600/10 border border-emerald-500/20 rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Calendar className="h-5 w-5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Ready to Interview</span>
              </div>
              <p className="text-gray-300 text-sm">
                Available for technical discussions, customer scenario walkthroughs, 
                or any additional questions about this implementation.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-6"
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Move Forward?
            </h3>
            <p className="text-purple-100 mb-6">
              This comprehensive showcase demonstrates my readiness to contribute 
              to Kiln's growth from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Review the Journey
              </Link>
              <a 
                href="mailto:jaden@example.com?subject=Kiln Sales Engineer - Let's Connect"
                className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors"
              >
                Schedule Interview
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
