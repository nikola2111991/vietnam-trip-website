import './globals.css'

export const metadata = {
  title: 'NeuralLabs | AI-First Software Development Agency',
  description: 'We build intelligent software solutions. From AI agents to full-stack SaaS platforms, we architect and ship production-ready AI solutions that transform how businesses operate.',
  keywords: 'AI development, AI agents, SaaS development, RAG pipelines, AI automation, n8n workflows, AI video solutions, machine learning, LLM applications',
  authors: [{ name: 'NeuralLabs' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'NeuralLabs | AI-First Software Development Agency',
    description: 'We build intelligent software solutions. Production-ready AI that transforms how businesses operate.',
    type: 'website',
    locale: 'en_US',
    siteName: 'NeuralLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuralLabs | AI-First Development',
    description: 'We build intelligent software solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-white antialiased">
        {/* Noise overlay */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
