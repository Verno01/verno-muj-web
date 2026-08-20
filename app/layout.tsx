import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://verno.cz'),
  alternates: { canonical: 'https://verno.cz' },
  title: {
    default: 'Prezentační weby pro živnostníky a malé firmy | VERNO',
    template: '%s | VERNO',
  },
  description: 'Tvorba jednoduchých prezentačních webů pro živnostníky a malé firmy. Jedna jasná cena, responzivní zobrazení, základní SEO a spuštění webu.',
  authors: [{ name: 'VERNO', url: 'https://verno.cz' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'icon', url: '/favicon-192.png', sizes: '192x192', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://verno.cz',
    siteName: 'VERNO',
    title: 'VERNO – prezentační weby pro živnostníky a malé firmy',
    description: 'Jednoduchý firemní web za jednu jasnou cenu.',
    images: [{ url: '/og-verno-2.jpg', width: 1200, height: 630, alt: 'VERNO – tvorba prezentačních webů' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERNO – prezentační weby pro živnostníky a malé firmy',
    description: 'Jednoduchý firemní web za jednu jasnou cenu.',
    images: ['/og-verno-2.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://verno.cz/#business',
    name: 'VERNO',
    url: 'https://verno.cz',
    email: 'info@verno.cz',
    telephone: '+420705911941',
    description: 'Tvorba jednoduchých prezentačních webů pro živnostníky a malé firmy.',
    serviceType: 'Tvorba prezentačních webových stránek',
    areaServed: { '@type': 'Country', name: 'Česká republika' },
    priceRange: '8 900 Kč bez DPH',
    offers: {
      '@type': 'Offer',
      name: 'Prezentační web',
      price: '8900',
      priceCurrency: 'CZK',
      description: 'Prezentační web pro živnostníky a malé firmy včetně responzivního zobrazení, základního SEO, Google Analytics a nasazení na doménu.',
    },
  }

  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
        <CookieBanner />
      </body>
    </html>
  )
}
