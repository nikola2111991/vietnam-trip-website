'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-gray-300">
              <Sparkles className="w-4 h-4 text-cyber" />
              <span>AI-First Development Agency</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-6"
          >
            <span className="text-white">We Build</span>
            <br />
            <span className="text-gradient">Intelligent</span>
            <br />
            <span className="text-white">Software</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            From AI agents to full-stack SaaS platforms, we architect and ship
            production-ready AI solutions that transform how businesses operate.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-semibold text-white overflow-hidden"
            >
              {/* Animated gradient border */}
              <span className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-electric via-cyber to-acid">
                <span className="absolute inset-0 rounded-xl bg-void" />
              </span>
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-electric/20 via-cyber/20 to-acid/20 blur-xl" />
              {/* Content */}
              <span className="relative flex items-center gap-3">
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-medium text-gray-300 hover:text-white glass hover:bg-white/10 transition-all duration-300"
            >
              <span>Explore Services</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '50+', label: 'Projects Shipped' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '10x', label: 'Faster Development' },
              { value: '24/7', label: 'AI-Powered Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-3xl sm:text-4xl text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-cyber" />
        </motion.div>
      </motion.div>
    </section>
  )
}
