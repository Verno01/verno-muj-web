'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav-shell">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="VERNO domů" onClick={close}>VERNO<span aria-hidden="true" /></Link>

        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <a href="/#sluzba">Služba</a>
          <a href="/#reference">Reference</a>
          <a href="/#postup">Postup</a>
          <a href="/#faq">Informace</a>
        </nav>

        <a href="tel:+420705911941" className="nav-cta desktop-cta">Zavolat</a>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(value => !value)}
        >
          {open ? 'Zavřít' : 'Menu'}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <a href="/#sluzba" onClick={close}>Služba</a>
          <a href="/#reference" onClick={close}>Reference</a>
          <a href="/#postup" onClick={close}>Postup</a>
          <a href="/#faq" onClick={close}>Informace</a>
          <a href="tel:+420705911941" className="mobile-call" onClick={close}>Zavolat</a>
        </div>
      </div>

      <style>{`
        .nav-shell{position:fixed;z-index:100;top:0;left:0;right:0;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);border-bottom:1px solid #ecece7}
        .nav-inner{width:min(1040px,calc(100% - 44px));height:60px;margin:0 auto;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:26px}
        .brand{justify-self:start;display:inline-flex;align-items:center;gap:7px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;letter-spacing:.035em;color:#151515;text-decoration:none}
        .brand span{width:8px;height:8px;background:#efff63;display:block}
        .desktop-nav{display:flex;gap:24px}
        .desktop-nav a{font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:600;letter-spacing:.025em;color:#5e5e59;text-decoration:none}
        .desktop-nav a:hover{color:#111}
        .nav-cta{justify-self:end;display:inline-flex;align-items:center;justify-content:center;min-height:32px;padding:0 15px;background:#efff63;color:#111;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700}
        .nav-cta:hover{background:#e9fa55}
        .menu-button,.mobile-menu{display:none}

        @media(max-width:760px){
          .nav-inner{width:min(100% - 30px,1040px);height:58px;grid-template-columns:1fr auto;gap:18px}
          .desktop-nav,.desktop-cta{display:none}
          .brand{grid-column:1}
          .menu-button{display:inline-flex;grid-column:2;align-items:center;justify-content:center;min-width:58px;height:34px;padding:0 12px;border:1px solid #dcdcd6;background:#fff;color:#171717;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;cursor:pointer}
          .mobile-menu{display:block;max-height:0;overflow:hidden;background:#fff;border-top:0 solid #ecece7;transition:max-height .24s ease,border-top-width .24s ease}
          .mobile-menu.open{max-height:320px;border-top-width:1px}
          .mobile-menu-inner{width:min(100% - 30px,1040px);margin:0 auto;padding:10px 0 16px;display:flex;flex-direction:column}
          .mobile-menu-inner>a{display:flex;align-items:center;min-height:44px;border-bottom:1px solid #ededE8;color:#171717;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:500}
          .mobile-menu-inner .mobile-call{margin-top:12px;min-height:40px;width:max-content;padding:0 18px;border:0;background:#efff63;font-weight:700}
        }
      `}</style>
    </header>
  )
}
