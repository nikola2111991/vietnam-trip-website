import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Itinerary from '@/components/Itinerary'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Itinerary />
      <Gallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
