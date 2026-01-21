'use client'

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
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-20 w-48 h-48 border border-gold-400/30 rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Subtitle */}
        <p className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-up">
          {heroContent.subtitle}
        </p>

        {/* Main Title */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 animate-fade-up animation-delay-200">
          <span className="block">Việt</span>
          <span className="block text-gold-400">Nam</span>
        </h1>

        {/* Dates */}
        <div className="flex items-center justify-center space-x-4 mb-10 animate-fade-up animation-delay-400">
          <div className="h-px w-16 bg-white/40" />
          <p className="text-white text-lg md:text-xl tracking-wider">
            {heroContent.dates}
          </p>
          <div className="h-px w-16 bg-white/40" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
          <a
            href="#kontakt"
            className="px-10 py-4 bg-olive-600 text-white font-semibold rounded-full shadow-2xl hover:bg-olive-700 hover:shadow-olive-600/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            {heroContent.cta}
          </a>
          <a
            href="#o-putovanju"
            className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
          >
            Saznaj Više
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
