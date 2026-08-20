'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo" aria-label="VERNO domů">VERNO</Link>
        <nav aria-label="Hlavní navigace">
          <a href="/#nabidka">Nabídka</a>
          <a href="/#reference">Reference</a>
          <a href="/#kontakt">Kontakt</a>
        </nav>
      </div>
      <style>{`
        .nav{position:absolute;z-index:100;top:0;left:0;right:0;background:transparent}
        .nav-inner{width:min(1240px,calc(100% - 64px));height:92px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:28px;border-bottom:1px solid #e7e7e7}
        .logo{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;font-size:15px;font-weight:650;letter-spacing:.24em;color:#111;text-decoration:none}
        .nav nav{display:flex;align-items:center;gap:30px}
        .nav nav a{font-size:13px;color:#4d4d4d;text-decoration:none;white-space:nowrap}
        .nav nav a:hover{color:#111}
        @media(max-width:900px){.nav-inner{width:min(100% - 40px,1240px);height:78px}}
        @media(max-width:520px){.nav-inner{width:min(100% - 28px,1240px)}.nav nav{gap:16px}.nav nav a{font-size:12px}.nav nav a:nth-child(2){display:none}}
      `}</style>
    </header>
  )
}
