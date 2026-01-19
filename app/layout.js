import './globals.css'

export const metadata = {
  title: 'Autentični Vijetnam | Luksuzno Putovanje April 2026 | Queen of Compass',
  description: '15-dnevno luksuzno autentično putovanje kroz severni i centralni Vijetnam. Hanoi, Pu Luong, Ha Long zaliv, Da Nang, Hoi An. Organizuju Irena i Bojan koji žive u Vijetnamu.',
  keywords: 'vijetnam putovanje, vietnam travel, luksuzno putovanje, hanoi, ha long bay, hoi an, da nang, pu luong, autentično putovanje, queen of compass',
  authors: [{ name: 'Queen of Compass' }],
  openGraph: {
    title: 'Autentični Vijetnam | April 2026',
    description: '15-dnevno luksuzno autentično putovanje kroz Vijetnam sa Irenom i Bojanom',
    type: 'website',
    locale: 'sr_RS',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Autentični Vijetnam - Queen of Compass',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autentični Vijetnam | April 2026',
    description: '15-dnevno luksuzno autentično putovanje kroz Vijetnam',
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
