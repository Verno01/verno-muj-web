import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Prezentační web za 8 900 Kč bez DPH | SpustWeb.cz',
  },
  description:
    'Tvorba prezentačních webů pro živnostníky a malé firmy za pevnou cenu 8 900 Kč bez DPH. Plnohodnotný firemní web, mobilní verze, kontaktní formulář, základní SEO a spuštění.',
  alternates: {
    canonical: 'https://spustweb.cz',
  },
  openGraph: {
    title: 'Prezentační web za 8 900 Kč bez DPH | SpustWeb.cz',
    description:
      'Plnohodnotný firemní web pro živnostníky a malé firmy za pevnou cenu 8 900 Kč bez DPH.',
    url: 'https://spustweb.cz',
    images: [
      {
        url: '/og-verno-2.jpg',
        width: 1200,
        height: 630,
        alt: 'SpustWeb.cz – tvorba prezentačních webů',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prezentační web za 8 900 Kč bez DPH | SpustWeb.cz',
    description:
      'Plnohodnotný firemní web pro živnostníky a malé firmy za pevnou cenu 8 900 Kč bez DPH.',
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
