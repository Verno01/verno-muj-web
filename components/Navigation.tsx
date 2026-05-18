'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Domů' },
  { href: '/nabidka', label: 'Nabídka' },
  { href: '/jak-pracuji', label: 'Jak pracuji' },
  { href: '/proc-takhle', label: 'Proč takhle' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const solid = scrolled || open

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background .35s, padding .35s, box-shadow .35s, border-color .35s',
        padding: solid ? '13px clamp(22px,5vw,62px)' : '24px clamp(22px,5vw,62px)',
        background: solid ? 'var(--cream)' : 'transparent',
        borderBottom: solid ? '1px solid var(--line)' : '1px solid transparent',
        boxShadow: solid ? '0 4px 24px rgba(34,51,44,.07)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" aria-label="VERNO — domů" style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 600, letterSpacing: '.22em', color: 'var(--ink)', textDecoration: 'none' }}>
          VERNO
        </Link>

        <nav className="nav-d" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href}
                style={{
                  position: 'relative',
                  fontSize: 13.5,
                  fontWeight: active ? 600 : 400,
                  textDecoration: 'none',
                  color: active ? 'var(--green)' : 'var(--ink-soft)',
                  padding: '6px 0',
                  transition: 'color .2s',
                }}>
                {label}
                <span style={{
                  position: 'absolute', left: 0, right: 0, bottom: -2, height: 2,
                  background: 'var(--terra)', borderRadius: 2,
                  transform: active ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left', transition: 'transform .28s cubic-bezier(.16,1,.3,1)',
                }} />
              </Link>
            )
          })}
          <Link href="/kontakt" className="btn btn-green" style={{ padding: '11px 21px', fontSize: 13, marginLeft: 6 }}>
            Poptat web
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="nav-b"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', padding: 4 }}
          aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--cream)', borderBottom: '1px solid var(--line)', padding: '12px clamp(22px,5vw,62px) 28px' }}>
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '15px 0', fontSize: 17,
                  fontWeight: active ? 600 : 400,
                  color: active ? 'var(--green)' : 'var(--ink)',
                  textDecoration: 'none', borderBottom: '1px solid var(--line)',
                }}>
                {label}
                {active && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--terra)' }} />}
              </Link>
            )
          })}
          <Link href="/kontakt" className="btn btn-green" style={{ marginTop: 22, width: '100%', justifyContent: 'center' }}>
            Poptat web
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .nav-d { display: none !important; }
          .nav-b { display: block !important; }
        }
      `}</style>
    </header>
  )
}
