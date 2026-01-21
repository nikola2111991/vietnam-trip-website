'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { X, Check, Zap, Clock, DollarSign, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const comparisons = [
  {
    category: 'Development Speed',
    icon: Clock,
    old: 'Months of development time',
    new: 'Weeks with AI-accelerated workflows',
  },
  {
    category: 'Cost Efficiency',
    icon: DollarSign,
    old: 'Expensive, bloated teams',
    new: 'Lean teams amplified by AI tools',
  },
  {
    category: 'Innovation',
    icon: Zap,
    old: 'Playing catch-up with trends',
    new: 'Building the future, today',
  },
  {
    category: 'Scalability',
    icon: Users,
    old: 'Linear scaling with headcount',
    new: 'Exponential scaling with AI agents',
  },
]

const features = [
  { title: 'AI-Native Architecture', description: 'Built from the ground up with AI capabilities' },
  { title: 'Production-Ready Code', description: 'Enterprise-grade, not just prototypes' },
  { title: 'Continuous Learning', description: 'Systems that improve over time' },
  { title: 'Future-Proof Stack', description: 'Modern tech that scales with you' },
]

export default function WhyUs() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="why-us" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-acid mb-6">
            Why Choose Us
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            The <span className="text-gradient-acid">AI-First</span> Advantage
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just use AI tools. We think AI-native from day one.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl" />
            <div className="relative p-8 rounded-3xl border border-red-500/20 bg-obsidian/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">Traditional Approach</h3>
                  <p className="text-sm text-gray-500">The old way of building software</p>
                </div>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5"
                  >
                    <item.icon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <p className="text-gray-400 mt-1">{item.old}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Way */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-acid/10 to-electric/10 rounded-3xl" />
            <div className="relative p-8 rounded-3xl border border-acid/30 bg-obsidian/50 backdrop-blur-sm glow-acid">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-acid to-electric flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">AI-First Approach</h3>
                  <p className="text-sm text-acid">How we build at NeuralLabs</p>
                </div>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="w-5 h-5 rounded-full bg-acid/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-acid" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <p className="text-white mt-1">{item.new}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="group p-6 rounded-2xl glass hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-electric to-cyber mb-4 group-hover:scale-150 transition-transform duration-300" />
              <h4 className="font-heading font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
