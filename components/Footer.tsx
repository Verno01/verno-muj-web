'use client'

import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  const openCookieSettings = () => {
    if (typeof window !== 'undefined' && (window as any).openCookieSettings) {
      ;(window as any).openCookieSettings()
    }
  }

  return (
    <footer style={{
      background: 'var(--deep)', color: 'rgba(240,237,232,.45)',
      padding: 'clamp(72px,10vw,120px) clamp(22px,5vw,62px) 44px',
      overflow: 'hidden', position: 'relative',
    }}>
      <div style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.12),transparent 70%)', right: -90, top: -50, filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,154,196,.07),transparent 70%)', left: -40, bottom: 20, filter: 'blur(50px)', pointerEvents: 'none' }} />
      <div className="noise" />

      <div className="inner-wide" style={{ position: 'relative', zIndex: 2 }}>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: 38, paddingTop: 44, borderTop: '1px solid rgba(240,237,232,.09)' }}>
          <div>
            <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 800, letterSpacing: '.3em', color: 'var(--cloud)', margin: '0 0 12px' }}>VERNO</p>
            <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 200 }}>Hana Fraňková.<br />Prezentační weby pro živnostníky a malé firmy.</p>
          </div>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(240,237,232,.3)', margin: '0 0 14px' }}>Stránky</p>
            <Link href="/nabidka" className="footer-link">Nabídka</Link>
            <Link href="/jak-pracuji" className="footer-link">Jak pracuji</Link>
            <Link href="/kalkulacka" className="footer-link">Vaše sazba</Link>
            <Link href="/kontakt" className="footer-link">Kontakt</Link>
          </div>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(240,237,232,.3)', margin: '0 0 14px' }}>Kontakt</p>
            <a href="mailto:info@verno.cz" style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,.5)', textDecoration: 'none', padding: '4px 0' }}>info@verno.cz</a>
            <a href="tel:+420705911941" style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,.5)', textDecoration: 'none', padding: '4px 0' }}>+420 705 911 941</a>
            <p style={{ fontSize: 13, padding: '4px 0', margin: 0 }}>IČO: 235 26 629</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 24, marginTop: 30, borderTop: '1px solid rgba(240,237,232,.07)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, fontSize: 11, color: 'rgba(240,237,232,.25)' }}>
          <p style={{ margin: 0 }}>© {year} VERNO · Rovino s.r.o., IČO 235 26 629</p>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            <Link href="/obchodni-podminky" style={{ color: 'inherit', textDecoration: 'none' }}>Obchodní podmínky</Link>
            <Link href="/ochrana-osobnich-udaju" style={{ color: 'inherit', textDecoration: 'none' }}>Ochrana osobních údajů</Link>
            <Link href="/cookies" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="footer-cookie-btn"
              aria-label="Otevřít nastavení cookies"
            >
              Nastavení cookies
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          display: block;
          font-size: 13px;
          color: rgba(240,237,232,.5);
          text-decoration: none;
          padding: 4px 0;
          transition: color .2s;
        }
        .footer-link:hover {
          color: rgba(240,237,232,.88) !important;
        }
        .footer-cookie-btn {
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          font-size: 11px;
          color: rgba(240,237,232,.25);
          cursor: pointer;
          text-decoration: none;
          transition: color .2s;
        }
        .footer-cookie-btn:hover {
          color: rgba(240,237,232,.88);
        }
        .footer-cookie-btn:focus-visible {
          outline: 1px solid rgba(240,237,232,.5);
          outline-offset: 2px;
        }
      `}</style>
    </footer>
  )
}
