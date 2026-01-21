import './globals.css'

export const metadata = {
  metadataBase: new URL('https://vietnam-trip-website.vercel.app'),
  title: 'Autentični Vijetnam | Luksuzno Putovanje April 2026 | Queen of Compass',
  description: 'Tura autentičnog putovanja u Vijetnam. 15-dnevno luksuzno putovanje kroz severni i centralni Vijetnam sa Irenom i Bojanom.',
  keywords: 'vijetnam putovanje, vietnam travel, luksuzno putovanje, hanoi, ha long bay, hoi an, da nang, pu luong, autentično putovanje, queen of compass',
  authors: [{ name: 'Queen of Compass' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Autentični Vijetnam | Queen of Compass',
    description: 'Tura autentičnog putovanja u Vijetnam. 15-dnevno luksuzno putovanje kroz severni i centralni Vijetnam sa Irenom i Bojanom.',
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
    description: 'Tura autentičnog putovanja u Vijetnam. 15-dnevno luksuzno putovanje kroz severni i centralni Vijetnam.',
    images: ['/images/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-olive-50 text-gray-800 antialiased">
        {children}
      </body>
    </html>
  )
}
