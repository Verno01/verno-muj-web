import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Zásady používání cookies',
  description: 'Informace o používání cookies a obdobných technologií na webu SpustWeb.cz.',
  alternates: {
    canonical: 'https://spustweb.cz/cookies/',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
}

export default function CookiesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
