'use client'

import { motion } from 'framer-motion'
import { footerContent } from '@/content/data'

export default function Footer() {
  return (
    <footer className="relative">
      {/* CTA Section */}
      <div className="relative bg-olive-900 py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold-400 font-semibold tracking-wider text-sm mb-4">
                {footerContent.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                {footerContent.title}
              </h2>
              <p className="text-olive-200 leading-relaxed mb-8">
                {footerContent.text}
              </p>

              <div className="mb-8">
                <p className="text-xl font-serif font-bold text-gold-400 mb-1">
                  {footerContent.signature}
                </p>
                <p className="text-olive-300 italic">
                  {footerContent.location}
                </p>
              </div>

              <a
                href="https://www.instagram.com/queen.of.compass/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gold-400 text-olive-900 font-bold rounded-full shadow-2xl hover:bg-gold-300 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {footerContent.cta}
              </a>
            </motion.div>

            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/hvala-1.webp" alt="Vietnam" className="w-full h-40 object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/hvala-2.webp" alt="Vietnam" className="w-full h-56 object-cover" loading="lazy" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/hvala-3.webp" alt="Vietnam" className="w-full h-56 object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/hvala-4.webp" alt="Vietnam" className="w-full h-40 object-cover" loading="lazy" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-olive-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/images/logo.webp" alt="Queen of Compass" className="h-10 w-auto" style={{ filter: 'invert(17%) sepia(10%) saturate(2109%) hue-rotate(44deg) brightness(47%) contrast(80%)' }} />
            </div>

            {/* Copyright */}
            <p className="text-olive-400 text-sm">
              &copy; {new Date().getFullYear()} Queen of Compass. Sva prava zadržana.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/queen.of.compass/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-400 hover:text-gold-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
