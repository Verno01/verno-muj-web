import { ImageResponse } from 'next/og'

export const alt = 'SpustWeb.cz – prezentační weby pro živnostníky a malé firmy'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: '#F0EDE8',
          color: '#191714',
          fontFamily: 'Arial, Helvetica, sans-serif',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            opacity: 0.16,
            background:
              'radial-gradient(circle at 78% 18%, #A87DB8 0 2%, transparent 18%), radial-gradient(circle at 91% 65%, #F58A00 0 2%, transparent 17%), radial-gradient(circle at 72% 82%, #E0304A 0 2%, transparent 16%)',
          }}
        />

        <div
          style={{
            width: 18,
            height: '100%',
            background: '#191714',
            display: 'flex',
          }}
        />

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 78px 58px 70px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  border: '3px solid #191714',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: 999, background: '#191714', display: 'flex' }} />
              </div>
              <div style={{ display: 'flex', fontSize: 34, fontWeight: 800, letterSpacing: '-1.5px' }}>SpustWeb.cz</div>
            </div>
            <div style={{ display: 'flex', fontSize: 22, color: '#6E675F' }}>weby pro živnostníky a malé firmy</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 860 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 70,
                lineHeight: 0.98,
                letterSpacing: '-4px',
                fontWeight: 700,
                marginBottom: 28,
              }}
            >
              Prezentační web, který můžete rovnou používat.
            </div>
            <div style={{ display: 'flex', fontSize: 29, lineHeight: 1.35, color: '#514C46' }}>
              Návrh, mobilní verze, základní SEO a spuštění na doméně.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <div style={{ display: 'flex', fontSize: 42, fontWeight: 800 }}>8 900 Kč</div>
              <div style={{ display: 'flex', fontSize: 21, color: '#6E675F' }}>bez DPH</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 20px',
                background: '#191714',
                color: '#F0EDE8',
                fontSize: 21,
                fontWeight: 700,
              }}
            >
              spustweb.cz
              <span style={{ display: 'flex', fontSize: 25 }}>↗</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
