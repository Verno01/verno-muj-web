'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="simple-nav">
      <div className="simple-nav-inner">
        <Link href="/" className="simple-logo" aria-label="VERNO domů">VERNO</Link>
        <nav aria-label="Hlavní navigace">
          <a href="/#v-cene">V ceně</a>
          <a href="/#reference">Reference</a>
          <a href="/#postup">Jak to probíhá</a>
          <a href="/#kontakt" className="simple-nav-cta">Kontakt</a>
        </nav>
      </div>
      <style>{`
        .simple-nav{position:fixed;z-index:100;top:0;left:0;right:0;background:rgba(251,251,249,.9);backdrop-filter:blur(16px);border-bottom:1px solid rgba(20,20,20,.07)}
        .simple-nav-inner{width:min(1180px,calc(100% - 44px));height:72px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:24px}
        .simple-logo{font-family:'Syne',sans-serif;font-size:14px;font-weight:800;letter-spacing:.25em;color:#111;text-decoration:none}
        .simple-nav nav{display:flex;align-items:center;gap:26px}
        .simple-nav nav a{font-size:13px;color:#555;text-decoration:none;white-space:nowrap}
        .simple-nav nav a:hover{color:#111}
        .simple-nav .simple-nav-cta{padding:10px 16px;border-radius:999px;background:#111;color:#fff}
        .simple-nav .simple-nav-cta:hover{color:#fff;background:#292929}
        @media(max-width:720px){.simple-nav-inner{width:min(100% - 32px,1180px);height:64px}.simple-nav nav a:not(.simple-nav-cta){display:none}}
      `}</style>
    </header>
  )
}
