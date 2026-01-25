import './globals.css'

export const metadata = {
  metadataBase: new URL('https://vietnam-trip-website.vercel.app'),
  title: 'Autentični Vijetnam | Luksuzno Putovanje April 2026 | Queen of Compass',
  description: '15 dana kroz pravi Vijetnam. Irena i Bojan, koji žive u Vijetnamu 5 godina, vode vas kroz Hanoi, Ha Long Bay, Hoi An i skrivena mesta koja turisti ne vide. Mala grupa, luksuzni smeštaj, autentično iskustvo. 1890 EUR.',
  keywords: 'vijetnam putovanje, vietnam travel, luksuzno putovanje, hanoi, ha long bay, hoi an, da nang, pu luong, autentično putovanje, queen of compass, grupno putovanje vijetnam',
  authors: [{ name: 'Queen of Compass' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Autentični Vijetnam | 15 Dana Sa Lokalnim Vodičima',
    description: '5 godina života u Vijetnamu. Sada delimo naš drugi dom sa vama. Mala grupa, luksuzni smeštaj, autentična iskustva koja turisti ne vide.',
    type: 'website',
    locale: 'sr_RS',
    url: 'https://vietnam-trip-website.vercel.app',
    siteName: 'Queen of Compass',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Autentični Vijetnam - Queen of Compass',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autentični Vijetnam | Queen of Compass',
    description: '15 dana kroz pravi Vijetnam sa vodičima koji tamo žive. Mala grupa, luksuzni smeštaj, nezaboravno iskustvo.',
    images: ['/images/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Structured Data za SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: 'Autentični Vijetnam - 15 Dnevno Putovanje',
  description: '15-dnevno luksuzno putovanje kroz severni i centralni Vijetnam sa lokalnim vodičima.',
  touristType: 'Adventure travelers',
  itinerary: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hanoi' },
      { '@type': 'ListItem', position: 2, name: 'Pu Luong' },
      { '@type': 'ListItem', position: 3, name: 'Tam Coc / Ninh Binh' },
      { '@type': 'ListItem', position: 4, name: 'Ha Long Bay' },
      { '@type': 'ListItem', position: 5, name: 'Da Nang' },
      { '@type': 'ListItem', position: 6, name: 'Hoi An' },
    ],
  },
  offers: {
    '@type': 'Offer',
    price: '1890',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/LimitedAvailability',
  },
  provider: {
    '@type': 'TravelAgency',
    name: 'Queen of Compass',
    url: 'https://vietnam-trip-website.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-olive-50 text-gray-800 antialiased">
        {children}
      </body>
    </html>
  )
}
