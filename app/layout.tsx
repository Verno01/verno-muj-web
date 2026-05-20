import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.verno.cz'),
  title: { default: 'VERNO — Prezentační weby pro živnostníky a malé firmy', template: '%s | VERNO' },
  description: 'Hana Fraňková. Navrhuji a stavím prezentační weby pro živnostníky, řemeslníky a malé firmy. Sama, od prvního kontaktu po předání hotového webu.',
  keywords: ['tvorba webů', 'prezentační web', 'web pro živnostníka', 'webdesign', 'Hana Fraňková', 'VERNO'],
  authors: [{ name: 'Hana Fraňková', url: 'https://www.verno.cz' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website', locale: 'cs_CZ', url: 'https://www.verno.cz',
    siteName: 'VERNO',
    title: 'VERNO — Prezentační weby pro živnostníky a malé firmy',
    description: 'Navrhuji a stavím prezentační weby. Sama, od prvního kontaktu po předání.',
    images: [{ url: '/og-verno.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-verno.jpg'] },
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
          '@id': 'https://www.verno.cz/#business',
          name: 'VERNO — Hana Fraňková',
          description: 'Tvorba prezentačních webů pro živnostníky, řemeslníky a malé firmy.',
          url: 'https://www.verno.cz', email: 'info@verno.cz', telephone: '+420705911941',
          founder: { '@type': 'Person', name: 'Hana Fraňková' },
          areaServed: { '@type': 'Country', name: 'Česká republika' },
          address: { '@type': 'PostalAddress', addressLocality: 'Lišov', addressCountry: 'CZ' },
          priceRange: 'od 11 900 Kč', knowsLanguage: ['cs', 'en', 'de'],
        }) }} />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <script dangerouslySetInnerHTML={{ __html: `
(function(){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.05,rootMargin:'0px 0px -30px 0px'});
  function bind(){document.querySelectorAll('.reveal:not(.in)').forEach(function(el){io.observe(el);});}
  bind(); window.addEventListener('load',bind);
})();
        `}} />
      </body>
    </html>
  )
}
