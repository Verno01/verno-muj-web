import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'
import './hero-fix.css'
import './type-scale.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://spustweb.cz'),
  alternates: { canonical: 'https://spustweb.cz' },
  title: {
    default: 'Prezentační web za 8 900 Kč bez DPH | SpustWeb.cz',
    template: '%s | SpustWeb.cz',
  },
  description: 'Tvorba prezentačních webů pro živnostníky a malé firmy za pevnou cenu 8 900 Kč bez DPH. Plnohodnotný firemní web, mobilní verze, kontaktní formulář, základní SEO a spuštění.',
  authors: [{ name: 'SpustWeb.cz', url: 'https://spustweb.cz' }],
  creator: 'SpustWeb.cz',
  publisher: 'SpustWeb.cz',
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
    url: 'https://spustweb.cz',
    siteName: 'SpustWeb.cz',
    title: 'Prezentační web za 8 900 Kč bez DPH | SpustWeb.cz',
    description: 'Plnohodnotný firemní web pro živnostníky a malé firmy za pevnou cenu 8 900 Kč bez DPH.',
    images: [{ url: '/og-verno-2.jpg', width: 1200, height: 630, alt: 'SpustWeb.cz – tvorba prezentačních webů' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prezentační web za 8 900 Kč bez DPH | SpustWeb.cz',
    description: 'Plnohodnotný firemní web pro živnostníky a malé firmy za pevnou cenu 8 900 Kč bez DPH.',
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
      '@id': 'https://spustweb.cz/#website',
      url: 'https://spustweb.cz/',
      name: 'SpustWeb.cz',
      alternateName: 'SpustWeb.cz tvorba webů',
      inLanguage: 'cs',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://spustweb.cz/#business',
      name: 'SpustWeb.cz',
      url: 'https://spustweb.cz/',
      email: 'info@spustweb.cz',
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
        url: 'https://spustweb.cz/#sluzba',
        description: 'Plnohodnotný prezentační web včetně návrhu, responzivního zobrazení, kontaktních prvků, základního SEO, měření a spuštění na doméně.',
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
