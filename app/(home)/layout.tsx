import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Tvorba webových stránek za 8 900 Kč | SpustWeb.cz',
  },
  description:
    'Prezentační web pro podnikatele a malé firmy za konečných 8 900 Kč včetně DPH. Návrh, mobilní verze, kontaktní prvky, základní SEO a spuštění.',
  alternates: {
    canonical: 'https://spustweb.cz/',
  },
  openGraph: {
    title: 'Tvorba webových stránek za 8 900 Kč | SpustWeb.cz',
    description:
      'Prezentační web pro podnikatele a malé firmy za konečných 8 900 Kč včetně DPH. Návrh, mobilní verze, základní SEO a spuštění.',
    url: 'https://spustweb.cz/',
    siteName: 'SpustWeb.cz',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: '/og-verno-2.jpg',
        width: 1200,
        height: 630,
        alt: 'SpustWeb.cz – tvorba webových stránek pro podnikatele a malé firmy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tvorba webových stránek za 8 900 Kč | SpustWeb.cz',
    description:
      'Prezentační web pro podnikatele a malé firmy za konečných 8 900 Kč včetně DPH. Návrh, mobilní verze, základní SEO a spuštění.',
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
