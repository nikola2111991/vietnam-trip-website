import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import About from '@/components/About'
import Itinerary from '@/components/Itinerary'
import Gallery from '@/components/Gallery'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Countdown />
      <About />
      <Itinerary />
      <Gallery />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
