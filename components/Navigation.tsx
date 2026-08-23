'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="verno-nav-shell">
      <div className="verno-nav-inner">
        <Link href="/" className="verno-brand" aria-label="SpustWeb.cz domů" onClick={close}>
          SpustWeb.cz<span aria-hidden="true" />
        </Link>

        <nav className="verno-desktop-nav" aria-label="Hlavní navigace">
          <a href="/#sluzba">Služba</a>
          <Link href="/cena-webovych-stranek/">Cena</Link>
          <a href="/#reference">Reference</a>
          <a href="/#postup">Postup</a>
          <a href="/#faq">Informace</a>
        </nav>

        <a href="tel:+420705911941" className="verno-desktop-call">Zavolat</a>

        <div className="verno-mobile-actions">
          <a href="tel:+420705911941" className="verno-mobile-visible-call">Zavolat</a>
          <button
            type="button"
            className="verno-mobile-trigger"
            aria-expanded={open}
            aria-controls="verno-mobile-menu"
            onClick={() => setOpen(v => !v)}
          >
            {open ? 'Zavřít' : 'Menu'}
          </button>
        </div>
      </div>

      <div id="verno-mobile-menu" className={`verno-mobile-menu ${open ? 'is-open' : ''}`}>
        <div className="verno-mobile-menu-inner">
          <a href="/#sluzba" onClick={close}>Služba</a>
          <Link href="/cena-webovych-stranek/" onClick={close}>Cena</Link>
          <a href="/#reference" onClick={close}>Reference</a>
          <a href="/#postup" onClick={close}>Postup</a>
          <a href="/#faq" onClick={close}>Informace</a>
        </div>
      </div>

      <style>{`
        .verno-nav-shell{position:fixed;z-index:100;top:0;left:0;right:0;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);border-bottom:1px solid #ecece7}
        .verno-nav-inner{width:min(1040px,calc(100% - 44px));height:60px;margin:0 auto;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:26px}
        .verno-brand{justify-self:start;display:inline-flex;align-items:center;gap:7px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;letter-spacing:.035em;color:#151515;text-decoration:none}
        .verno-brand span{width:8px;height:8px;background:#efff63;display:block}
        .verno-desktop-nav{display:flex;gap:22px}
        .verno-desktop-nav a{font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;letter-spacing:.025em;color:#5e5e59;text-decoration:none}
        .verno-desktop-nav a:hover{color:#111}
        .verno-desktop-call{justify-self:end;display:inline-flex;align-items:center;justify-content:center;min-height:34px;padding:0 16px;background:#efff63;color:#111;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700}
        .verno-mobile-actions,.verno-mobile-trigger,.verno-mobile-menu{display:none}

        @media (max-width:760px){
          .verno-nav-inner{width:min(100% - 30px,1040px);height:58px;grid-template-columns:1fr auto;gap:12px}
          .verno-desktop-nav,.verno-desktop-call{display:none!important}
          .verno-mobile-actions{display:flex!important;align-items:center;gap:8px}
          .verno-mobile-visible-call{display:inline-flex;align-items:center;justify-content:center;height:36px;padding:0 13px;background:#efff63;color:#171717;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;line-height:1}
          .verno-mobile-trigger{display:inline-flex!important;align-items:center;justify-content:center;min-width:64px;height:36px;padding:0 13px;border:1px solid #d7d7d1;background:#fff;color:#171717;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;line-height:1;cursor:pointer}
          .verno-mobile-menu{display:block!important;max-height:0;overflow:hidden;background:#fff;border-top:0 solid #ecece7;transition:max-height .24s ease,border-top-width .24s ease}
          .verno-mobile-menu.is-open{max-height:310px;border-top-width:1px}
          .verno-mobile-menu-inner{width:min(100% - 30px,1040px);margin:0 auto;padding:8px 0 14px;display:flex;flex-direction:column}
          .verno-mobile-menu-inner>a{display:flex;align-items:center;min-height:46px;border-bottom:1px solid #edede8;color:#171717;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:500}
        }
      `}</style>
    </header>
  )
}
