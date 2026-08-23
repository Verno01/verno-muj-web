import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ukázkový web pro barber shop | SpustWeb.cz',
  description: 'Ukázka webu pro barber shop: střihy, vousy, ceník, barbeři, práce, provozovna a online rezervace.',
  alternates: { canonical: 'https://spustweb.cz/ukazky/barber/' },
  robots: { index: true, follow: true },
}

export default function BarberShowcase() {
  return <div>Barber showcase</div>
}
