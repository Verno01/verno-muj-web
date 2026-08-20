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
    <footer className="simple-footer">
      <div className="simple-footer-inner">
        <div>
          <p className="simple-footer-logo">VERNO</p>
          <p>Prezentační weby pro živnostníky a malé firmy.</p>
        </div>
        <div className="simple-footer-contact">
          <a href="tel:+420705911941">+420 705 911 941</a>
          <a href="mailto:info@verno.cz">info@verno.cz</a>
        </div>
      </div>
      <div className="simple-footer-bottom">
        <span>© {year} VERNO · Rovino s.r.o., IČO 235 26 629</span>
        <div>
          <Link href="/obchodni-podminky">Obchodní podmínky</Link>
          <Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>
          <Link href="/cookies">Cookies</Link>
          <button type="button" onClick={openCookieSettings}>Nastavení cookies</button>
        </div>
      </div>
      <style>{`
        .simple-footer{background:#111;color:#aaa;padding:54px 22px 26px}.simple-footer-inner,.simple-footer-bottom{width:min(1180px,100%);margin:0 auto;display:flex;justify-content:space-between;gap:30px}.simple-footer-inner{padding-bottom:38px}.simple-footer-logo{margin:0 0 10px!important;font-family:'Syne',sans-serif;font-size:14px!important;font-weight:800;letter-spacing:.25em;color:#fff!important}.simple-footer p{margin:0;font-size:13px;line-height:1.6}.simple-footer-contact{display:flex;gap:24px;flex-wrap:wrap}.simple-footer a,.simple-footer button{font:inherit;font-size:12px;color:#aaa;text-decoration:none;background:none;border:0;padding:0;cursor:pointer}.simple-footer a:hover,.simple-footer button:hover{color:#fff}.simple-footer-bottom{padding-top:22px;border-top:1px solid #2b2b2b;font-size:11px;color:#666;align-items:center}.simple-footer-bottom>div{display:flex;gap:16px;flex-wrap:wrap}@media(max-width:720px){.simple-footer-inner,.simple-footer-bottom{flex-direction:column}.simple-footer-contact{flex-direction:column;gap:8px}}
      `}</style>
    </footer>
  )
}
