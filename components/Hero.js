'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { heroContent } from '@/content/data'

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { value: timeLeft.days, label: 'Dana' },
    { value: timeLeft.hours, label: 'Sati' },
    { value: timeLeft.minutes, label: 'Minuta' },
    { value: timeLeft.seconds, label: 'Sekundi' },
  ]

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 py-2 sm:px-5 sm:py-3 border border-white/20">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-white/70 mt-2 block">{unit.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-32 right-20 w-48 h-48 border border-gold-400/30 rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            {heroContent.subtitle}
          </motion.p>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6"
          >
            <span className="block">Việt</span>
            <span className="block text-gold-400">Nam</span>
          </motion.h1>

          {/* Dates */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="h-px w-16 bg-white/40" />
            <p className="text-white text-lg md:text-xl tracking-wider">
              {heroContent.dates}
            </p>
            <div className="h-px w-16 bg-white/40" />
          </motion.div>

          {/* Countdown Timer */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-white/60 text-sm mb-4 tracking-wider uppercase">Do polaska ostalo</p>
            <CountdownTimer targetDate="2026-04-08T00:00:00" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-olive-600 text-white font-semibold rounded-full shadow-2xl hover:bg-olive-700 hover:shadow-olive-600/25 transition-all duration-300"
            >
              {heroContent.cta}
            </motion.a>
            <motion.a
              href="#o-putovanju"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Saznaj Više
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
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
