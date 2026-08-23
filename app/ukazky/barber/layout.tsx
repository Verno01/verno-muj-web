import type { ReactNode } from 'react'

export default function BarberShowcaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <style>{`
        @media (max-width: 680px) {
          .br6 .br6HeroGrid {
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto auto minmax(390px, 62vh) auto !important;
            gap: 14px !important;
            padding: 24px 0 30px !important;
          }
          .br6 .br6HeroMeta {
            position: static !important;
            grid-column: 1 / -1 !important;
            grid-row: 1 !important;
            font-size: 9px !important;
            line-height: 1.35 !important;
          }
          .br6 .br6HeroWord {
            position: static !important;
            grid-column: 1 / -1 !important;
            grid-row: 2 !important;
            transform: none !important;
            max-width: none !important;
            font-size: clamp(66px, 22vw, 92px) !important;
            line-height: .72 !important;
            letter-spacing: -.09em !important;
            margin: 12px 0 6px !important;
          }
          .br6 .br6HeroMain {
            grid-column: 1 / -1 !important;
            grid-row: 3 !important;
            height: 100% !important;
            min-height: 390px !important;
          }
          .br6 .br6HeroMain img {
            object-position: 58% 42% !important;
          }
          .br6 .br6HeroDetail {
            grid-column: 1 !important;
            grid-row: 3 !important;
            width: 78% !important;
            height: 155px !important;
            align-self: end !important;
            justify-self: start !important;
            margin: 0 0 16px 12px !important;
            border-width: 6px !important;
          }
          .br6 .br6HeroTag {
            position: static !important;
            grid-column: 2 !important;
            grid-row: 3 !important;
            align-self: end !important;
            justify-self: end !important;
            margin: 0 10px 16px 0 !important;
            padding: 11px 13px !important;
          }
          .br6 .br6HeroCopy {
            position: static !important;
            grid-column: 1 / -1 !important;
            grid-row: 4 !important;
            width: auto !important;
            font-size: 13px !important;
            line-height: 1.55 !important;
            padding-top: 4px !important;
          }
          .br6 .br6HeroCopy p {
            margin-bottom: 12px !important;
          }
        }
      `}</style>
    </>
  )
}
