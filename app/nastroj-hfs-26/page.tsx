import type { Metadata } from 'next'
import KalkulackaWrapper from '@/components/KalkulackaWrapper'

export const metadata: Metadata = {
  title: 'Interní kalkulačka',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function InternalCalculatorPage() {
  return (
    <section style={{ background: '#fbfbf9', minHeight: '100vh', padding: '110px 0 70px' }}>
      <KalkulackaWrapper />
    </section>
  )
}
