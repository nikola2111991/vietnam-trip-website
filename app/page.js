'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

// Dynamic import for shader to reduce initial bundle and handle SSR
const ShaderBackground = dynamic(() => import('@/components/ShaderBackground'), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(15, 15, 26, 1) 0%, rgba(3, 3, 5, 1) 100%)
        `,
      }}
    />
  ),
})

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Shader Background - only in hero area */}
      <div className="fixed inset-0 z-0">
        <ShaderBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}
