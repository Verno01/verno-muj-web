import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt | Poptat web - VERNO',
  description: 'Napište mi pár vět o svém projektu. Ozvu se do dvou pracovních dnů. Tvorba webů pro živnostníky a malé firmy.',
  alternates: {
    canonical: 'https://verno.cz/kontakt',
  },
  openGraph: {
    title: 'Kontakt | VERNO',
    description: 'Napište mi pár vět o svém projektu. Ozvu se do dvou pracovních dnů.',
    url: 'https://verno.cz/kontakt',
  },
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
