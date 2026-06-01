import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Tvorba webů pro živnostníky a malé firmy | VERNO',
  },
  description:
    'Prezentační weby na míru. Čistý kód, rychlé načítání, hosting v ceně. Responzivní design pro všechna zařízení. Bez šablon, bez pluginů.',
  keywords: [
    'tvorba webů pro živnostníky',
    'prezentační web na míru',
    'web pro malou firmu',
    'webdesign bez šablon',
    'tvorba webových stránek',
    'web pro řemeslníka',
    'Hana Fraňková',
    'VERNO',
    'tvorba webu Třeboň',
    'tvorba webu jižní Čechy',
  ],
  alternates: {
    canonical: 'https://verno.cz',
  },
  openGraph: {
    title: 'Tvorba webů pro živnostníky a malé firmy | VERNO',
    description:
      'Prezentační weby na míru, čistý kód, hosting v ceně, pevná cena předem. Responzivní design pro všechna zařízení.',
    url: 'https://verno.cz',
    images: [
      {
        url: '/og-verno-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Tvorba prezentačních webů pro živnostníky a malé firmy - VERNO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tvorba webů pro živnostníky a malé firmy | VERNO',
    description:
      'Prezentační weby na míru. Čistý kód, hosting v ceně, pevná cena předem. Responzivní design pro všechna zařízení.',
    images: ['/og-verno-2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
