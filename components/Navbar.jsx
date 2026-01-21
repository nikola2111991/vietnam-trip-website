'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'py-3' : 'py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              'flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500',
              isScrolled
                ? 'glass-strong shadow-lg shadow-cyber/5'
                : 'bg-transparent'
            )}
          >
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-cyber flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyber/50 transition-shadow duration-300">
                <Zap className="w-5 h-5 text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyber to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Zap className="w-5 h-5 text-white absolute" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Neural<span className="text-gradient">Labs</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-electric to-cyber group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-sm text-white overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-electric to-cyber" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyber to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Book a Call</span>
                <Zap className="w-4 h-4 relative" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass text-white"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden px-4"
          >
            <div className="glass-strong rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-electric to-cyber text-white font-semibold text-center"
                >
                  Book a Call
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
