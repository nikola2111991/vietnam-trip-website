'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '#o-putovanju', label: 'O Putovanju' },
    { href: '#itinerar', label: 'Itinerar' },
    { href: '#galerija', label: 'Galerija' },
    { href: '#cene', label: 'Cene' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2"
            >
              <img
                src="/images/logo.webp"
                alt="Queen of Compass"
                className="h-12 w-auto transition-all duration-300"
                style={isScrolled ? { filter: 'invert(17%) sepia(10%) saturate(2109%) hue-rotate(44deg) brightness(47%) contrast(80%)' } : {}}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    isScrolled ? 'text-olive-700 hover:text-olive-900' : 'text-white hover:text-gold-400'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? 'bg-olive-600' : 'bg-gold-400'
                  }`} />
                </motion.a>
              ))}
              <motion.a
                href="#kontakt"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2.5 bg-olive-600 text-white text-sm font-semibold rounded-full hover:bg-olive-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Rezerviši
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors z-50 ${
                isMobileMenuOpen ? 'text-olive-700' : isScrolled ? 'text-olive-700' : 'text-white'
              }`}
              aria-label={isMobileMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[998] bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-8 py-20">
              <nav className="flex flex-col items-center space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif font-medium text-olive-800 hover:text-olive-600 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#kontakt"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 px-10 py-4 bg-olive-600 text-white text-lg font-semibold rounded-full shadow-xl"
                >
                  Rezerviši Mesto
                </motion.a>
              </nav>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-12 flex items-center gap-6"
              >
                <a
                  href="https://instagram.com/queenofcompass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive-400 hover:text-olive-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
