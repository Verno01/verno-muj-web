import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt | SpustWeb.cz',
  description: 'Tvorba webů pro živnostníky a firmy. Napište mi pár vět o svém projektu. Ozvu se do dvou pracovních dnů.',
  alternates: {
    canonical: 'https://spustweb.cz/kontakt',
  },
  openGraph: {
    title: 'Kontakt | SpustWeb.cz',
    description: 'Napište mi pár vět o svém projektu. Ozvu se do dvou pracovních dnů.',
    url: 'https://spustweb.cz/kontakt',
    images: [{ url: '/og-verno-2.jpg', width: 1200, height: 630, alt: 'SpustWeb.cz – tvorba prezentačních webů' }],
  },
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
