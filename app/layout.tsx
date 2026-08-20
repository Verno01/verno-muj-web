import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.verno.cz'),
  alternates: { canonical: 'https://www.verno.cz' },
  title: {
    default: 'Prezentační web za 8 900 Kč bez DPH | VERNO',
    template: '%s | VERNO',
  },
  description: 'Tvorba prezentačních webů pro živnostníky a malé firmy za 8 900 Kč bez DPH. Návrh, mobilní verze, základní SEO, Google Analytics a spuštění webu.',
  authors: [{ name: 'VERNO', url: 'https://www.verno.cz' }],
  creator: 'VERNO',
  publisher: 'VERNO',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://www.verno.cz',
    siteName: 'VERNO',
    title: 'Prezentační web za 8 900 Kč bez DPH | VERNO',
    description: 'Prezentační web pro živnostníky a malé firmy. Návrh, zpracování a spuštění v jedné ceně.',
    images: [{ url: '/og-verno-2.jpg', width: 1200, height: 630, alt: 'VERNO – tvorba prezentačních webů' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prezentační web za 8 900 Kč bez DPH | VERNO',
    description: 'Prezentační web pro živnostníky a malé firmy. Návrh, zpracování a spuštění v jedné ceně.',
    images: ['/og-verno-2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://www.verno.cz/#website',
      url: 'https://www.verno.cz/',
      name: 'VERNO',
      alternateName: 'VERNO tvorba webů',
      inLanguage: 'cs',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://www.verno.cz/#business',
      name: 'VERNO',
      url: 'https://www.verno.cz/',
      email: 'info@verno.cz',
      telephone: '+420705911941',
      description: 'Tvorba prezentačních webů pro živnostníky a malé firmy.',
      serviceType: 'Tvorba prezentačních webových stránek',
      areaServed: { '@type': 'Country', name: 'Česká republika' },
      priceRange: '8 900 Kč bez DPH',
      offers: {
        '@type': 'Offer',
        name: 'Prezentační web',
        price: '8900',
        priceCurrency: 'CZK',
        url: 'https://www.verno.cz/#sluzba',
        description: 'Prezentační web včetně návrhu, responzivního zobrazení, základního SEO, Google Analytics a spuštění na doméně.',
      },
    },
  ]

  return (
    <html lang="cs">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
