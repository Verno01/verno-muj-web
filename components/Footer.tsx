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
    <footer className="footer">
      <div className="footer-inner">
        <span>© {year} VERNO · Rovino s.r.o. · IČO 235 26 629</span>
        <div className="footer-links">
          <Link href="/obchodni-podminky">Obchodní podmínky</Link>
          <Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>
          <Link href="/cookies">Cookies</Link>
          <button type="button" onClick={openCookieSettings}>Nastavení cookies</button>
        </div>
      </div>
      <style>{`
        .footer{padding:26px 0;background:#111;border-top:1px solid #2b2b2b;color:#777}
        .footer-inner{width:min(1240px,calc(100% - 64px));margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:22px;font-size:11px;line-height:1.5}
        .footer-links{display:flex;gap:18px;flex-wrap:wrap;justify-content:flex-end}
        .footer a,.footer button{font:inherit;color:#777;text-decoration:none;background:none;border:0;padding:0;cursor:pointer}
        .footer a:hover,.footer button:hover{color:#bbb}
        @media(max-width:900px){.footer-inner{width:min(100% - 40px,1240px);flex-direction:column;align-items:flex-start}.footer-links{justify-content:flex-start}}
        @media(max-width:520px){.footer-inner{width:min(100% - 28px,1240px)}}
      `}</style>
    </footer>
  )
}
