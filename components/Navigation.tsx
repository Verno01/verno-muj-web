'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="nav-shell">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="VERNO domů">VERNO<span aria-hidden="true" /></Link>
        <nav aria-label="Hlavní navigace">
          <a href="/#sluzba">Služba</a>
          <a href="/#reference">Reference</a>
          <a href="/#postup">Postup</a>
          <a href="/#faq">Informace</a>
        </nav>
        <a href="tel:+420705911941" className="nav-cta">Zavolat</a>
      </div>
      <style>{`
        .nav-shell{position:fixed;z-index:100;top:0;left:0;right:0;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);border-bottom:1px solid #ecece7}
        .nav-inner{width:min(1040px,calc(100% - 44px));height:60px;margin:0 auto;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:26px}
        .brand{justify-self:start;display:inline-flex;align-items:center;gap:7px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;letter-spacing:.035em;color:#151515;text-decoration:none}
        .brand span{width:8px;height:8px;background:#f1fd9a;display:block}
        .nav-shell nav{display:flex;gap:24px}
        .nav-shell nav a{font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:600;letter-spacing:.025em;color:#5e5e59;text-decoration:none}
        .nav-shell nav a:hover{color:#111}
        .nav-cta{justify-self:end;display:inline-flex;align-items:center;justify-content:center;min-height:32px;padding:0 15px;background:#f1fd9a;color:#111;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700}
        .nav-cta:hover{background:#eefb8d}
        @media(max-width:760px){.nav-inner{width:min(100% - 30px,1040px);height:58px;grid-template-columns:1fr auto}.nav-shell nav{display:none}.nav-cta{grid-column:2}.brand{grid-column:1}}
      `}</style>
    </header>
  )
}
