import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://verno.cz'),
  alternates: {
    canonical: 'https://verno.cz',
  },
  title: {
    default: 'VERNO | Tvorba webů pro firmy a živnostníky',
    template: '%s | VERNO',
  },
  description: 'Tvorba webových prezentací pro firmy a živnostníky. Bez poplatků za hosting, bez šablon.',
  keywords: ['tvorba webů', 'prezentační web', 'web pro živnostníka', 'webdesign', 'Hana Fraňková', 'VERNO'],
  authors: [{ name: 'Hana Fraňková', url: 'https://verno.cz' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://verno.cz',
    siteName: 'VERNO',
    title: 'VERNO - Prezentační weby',
    description: 'Tvorba webových prezentací pro firmy a živnostníky.',
    images: [
      {
        url: '/og-verno-2.jpg',
        width: 1200,
        height: 630,
        alt: 'VERNO - Tvorba moderních webových prezentací',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERNO - Prezentační weby',
    description: 'Tvorba webových prezentací pro firmy a živnostníky.',
    images: ['/og-verno-2.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'ProfessionalService',
          '@id': 'https://verno.cz/#business',
          name: 'VERNO - prezentační weby',
          description: 'Tvorba webů pro živnostníky, řemeslníky a malé firmy.',
          url: 'https://verno.cz', email: 'info@verno.cz', telephone: '+420705911941',
          founder: { '@type': 'Person', name: 'Hana Fraňková' },
          areaServed: { '@type': 'Country', name: 'Česká republika' },
          address: { '@type': 'PostalAddress', addressLocality: 'Třeboň', addressCountry: 'CZ' },
          priceRange: '12 000 – 60 000 Kč', knowsLanguage: ['cs', 'en', 'de'],
        }) }} />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
        <CookieBanner />
      </body>
    </html>
  )
}
