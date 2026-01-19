'use client'

import { useState, useEffect } from 'react'

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

  const navLinks = [
    { href: '#o-putovanju', label: 'O Putovanju' },
    { href: '#itinerar', label: 'Itinerar' },
    { href: '#cene', label: 'Cene' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className={`text-xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-olive-700' : 'text-white'
            }`}>
              QUEEN <span className="text-gold-400">of</span> COMPASS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold-400 ${
                  isScrolled ? 'text-olive-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="px-6 py-2.5 bg-olive-600 text-white text-sm font-semibold rounded-full hover:bg-olive-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Rezerviši
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-olive-700' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-olive-200/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isScrolled ? 'text-olive-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block px-6 py-3 bg-olive-600 text-white text-center font-semibold rounded-full"
              >
                Rezerviši
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
