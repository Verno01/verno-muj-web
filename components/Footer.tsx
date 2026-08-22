'use client'

import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  const openCookieSettings = () => {
    if (typeof window !== 'undefined' && (window as any).openCookieSettings) (window as any).openCookieSettings()
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">SpustWeb.cz<span aria-hidden="true" /></div>
        <div className="footer-contact">
          <a href="tel:+420705911941">+420 705 911 941</a>
          <a href="mailto:kontakt@spustweb.cz">kontakt@spustweb.cz</a>
        </div>
        <div className="footer-legal">
          <span>© {year} Rovino s.r.o. · IČO 235 26 629</span>
          <Link href="/obchodni-podminky">Obchodní podmínky</Link>
          <Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>
          <Link href="/cookies">Cookies</Link>
          <button type="button" onClick={openCookieSettings}>Nastavení cookies</button>
        </div>
      </div>
      <style>{`
        .footer{background:#f5f5f1;border-top:1px solid #deded8;padding:26px 0 24px}
        .footer-inner{width:min(1040px,calc(100% - 44px));margin:0 auto;display:grid;grid-template-columns:1fr auto;gap:20px 40px;align-items:start}
        .footer-brand{display:flex;align-items:center;gap:7px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:.035em;color:#171717}
        .footer-brand span{width:8px;height:8px;background:#f1fd9a}
        .footer-contact{display:flex;gap:20px}
        .footer a,.footer button{font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#666660;text-decoration:none;background:none;border:0;padding:0;cursor:pointer}
        .footer a:hover,.footer button:hover{color:#111}
        .footer-legal{grid-column:1/-1;border-top:1px solid #d9d9d3;padding-top:15px;display:flex;gap:14px;flex-wrap:wrap;font-family:Arial,Helvetica,sans-serif;font-size:9px;color:#888882}
        .footer-legal span{margin-right:auto}
        @media(max-width:720px){.footer-inner{width:min(100% - 30px,1040px);grid-template-columns:1fr}.footer-contact{flex-direction:column;gap:6px}.footer-legal{grid-column:1;flex-direction:column;gap:8px}.footer-legal span{margin-right:0;margin-bottom:4px}}
      `}</style>
    </footer>
  )
}
