import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zásady cookies | VERNO',
  description: 'Co jsou cookies, jaké druhy na webu verno.cz používáme a jak můžete svou volbu kdykoli změnit.',
  alternates: { canonical: 'https://verno.cz/cookies' },
  robots: { index: false, follow: true },
}

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
