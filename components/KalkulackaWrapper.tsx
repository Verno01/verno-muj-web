'use client'
import dynamic from 'next/dynamic'

const KalkulackaOSVC = dynamic(
  () => import('@/components/KalkulackaOSVC'),
  {
    ssr: false,
    loading: () => (
      <div style={{
        minHeight: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F0EDE8',
        borderRadius: 4,
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          color: '#7A7268',
          letterSpacing: '.04em',
        }}>
          Načítám kalkulačku…
        </p>
      </div>
    ),
  }
)

export default function KalkulackaWrapper() {
  return <KalkulackaOSVC />
}
