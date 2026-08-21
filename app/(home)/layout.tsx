import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Prezentační web za 8 900 Kč bez DPH | VERNO',
  },
  description:
    'Tvorba prezentačních webů pro živnostníky a malé firmy za pevnou cenu 8 900 Kč bez DPH. Návrh, mobilní verze, kontaktní formulář, základní SEO a spuštění webu.',
  alternates: {
    canonical: 'https://www.verno.cz',
  },
  openGraph: {
    title: 'Prezentační web za 8 900 Kč bez DPH | VERNO',
    description:
      'Prezentační web pro živnostníky a malé firmy. Návrh, zpracování a spuštění v jedné ceně.',
    url: 'https://www.verno.cz',
    images: [
      {
        url: '/og-verno-2.jpg',
        width: 1200,
        height: 630,
        alt: 'VERNO – tvorba prezentačních webů',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prezentační web za 8 900 Kč bez DPH | VERNO',
    description:
      'Prezentační web pro živnostníky a malé firmy. Návrh, zpracování a spuštění v jedné ceně.',
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
