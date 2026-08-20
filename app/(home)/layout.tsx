import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Prezentační web za 8 900 Kč bez DPH | VERNO',
  },
  description:
    'Jednoduchý prezentační web pro živnostníky a malé firmy za 8 900 Kč bez DPH. Responzivní design, základní SEO, Google Analytics a spuštění webu v ceně.',
  alternates: {
    canonical: 'https://www.verno.cz',
  },
  openGraph: {
    title: 'Prezentační web za 8 900 Kč bez DPH | VERNO',
    description:
      'Jednoduchý firemní web za jednu jasnou cenu. Pro živnostníky a malé firmy. Dodání obvykle do 1 až 2 týdnů.',
    url: 'https://www.verno.cz',
    images: [
      {
        url: '/og-verno-2.jpg',
        width: 1200,
        height: 630,
        alt: 'VERNO – prezentační weby pro živnostníky a malé firmy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prezentační web za 8 900 Kč bez DPH | VERNO',
    description:
      'Jednoduchý firemní web za jednu jasnou cenu. Pro živnostníky a malé firmy.',
    images: ['/og-verno-2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
