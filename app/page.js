import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import About from '@/components/About'
import Itinerary from '@/components/Itinerary'
import Gallery from '@/components/Gallery'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Skip link za accessibility */}
      <a href="#main-content" className="skip-link">
        Preskoči na glavni sadržaj
      </a>

      <Navigation />
      <div id="main-content">
        <Hero />
        <Countdown />
        <About />
        <Itinerary />
        <Gallery />
        <Pricing />
        <FAQ />
      </div>
      <Footer />

      {/* Floating elements */}
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
