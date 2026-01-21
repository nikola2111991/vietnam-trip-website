'use client'

import { motion } from 'framer-motion'
import { heroContent } from '@/content/data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full" />
      <div className="absolute bottom-32 right-20 w-48 h-48 border border-gold-400/30 rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtitle */}
          <p className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            {heroContent.subtitle}
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6">
            <span className="block">Việt</span>
            <span className="block text-gold-400">Nam</span>
          </h1>

          {/* Dates */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-16 bg-white/40" />
            <p className="text-white text-lg md:text-xl tracking-wider">
              {heroContent.dates}
            </p>
            <div className="h-px w-16 bg-white/40" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/queen.of.compass/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-olive-600 text-white font-semibold rounded-full shadow-2xl hover:bg-olive-700 hover:shadow-olive-600/25 transition-all duration-300 hover:scale-105"
            >
              {heroContent.cta}
            </a>
            <a
              href="#o-putovanju"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Saznaj Više
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
