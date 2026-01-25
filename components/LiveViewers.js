'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LiveViewers() {
  const [viewers, setViewers] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Početni broj (7-18 osoba)
    const initialViewers = Math.floor(Math.random() * 12) + 7
    setViewers(initialViewers)

    // Prikaži nakon kratkog delay-a
    const showTimer = setTimeout(() => setIsVisible(true), 2000)

    // Simuliraj promene broja gledalaca
    const interval = setInterval(() => {
      setViewers(prev => {
        // Nasumična promena: -2 do +3
        const change = Math.floor(Math.random() * 6) - 2
        const newValue = prev + change
        // Drži između 5 i 24
        return Math.max(5, Math.min(24, newValue))
      })
    }, 8000 + Math.random() * 7000) // Svake 8-15 sekundi

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [])

  if (viewers === null) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-6 left-6 z-50"
        >
          <div className="flex items-center gap-3 px-4 py-3 bg-white/95 backdrop-blur-lg rounded-full shadow-lg border border-olive-100">
            {/* Live indicator */}
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
            </div>

            {/* Text */}
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-2">
                {/* Mini avatars */}
                <div className="w-6 h-6 rounded-full bg-olive-200 border-2 border-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-6 h-6 rounded-full bg-gold-200 border-2 border-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-6 h-6 rounded-full bg-olive-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-olive-700">
                  +{Math.max(0, viewers - 2)}
                </div>
              </div>

              <p className="text-sm text-gray-700">
                <motion.span
                  key={viewers}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-bold text-olive-700"
                >
                  {viewers}
                </motion.span>
                {' '}
                <span className="text-gray-500">
                  {viewers === 1 ? 'osoba gleda' : viewers < 5 ? 'osobe gledaju' : 'osoba gleda'}
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
