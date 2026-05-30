'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

type NavLink = { href: string; label: string; accent?: boolean }

const links: NavLink[] = [
  { href: '/',            label: 'Domů' },
  { href: '/nabidka',     label: 'Nabídka' },
  { href: '/jak-pracuji', label: 'Jak pracuji' },
  { href: '/kalkulacka',  label: 'Vaše sazba', accent: true },
  { href: '/kontakt',     label: 'Kontakt' },
]

export default function Navigation() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 15)
    fn(); window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => { setOpen(false) }, [pathname])

  const norm = (p: string) => p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p
  const here = norm(pathname || '/')

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        transition: 'background .4s, padding .4s, border-color .4s',
        padding: scrolled || open ? '12px clamp(20px,4vw,52px)' : '20px clamp(20px,4vw,52px)',
        background: scrolled || open ? 'rgba(240,237,232,.95)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(20px)' : 'none',
        borderBottom: scrolled || open ? '1px solid var(--line)' : '1px solid transparent',
      }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 800, letterSpacing: '.3em', color: 'var(--ink)', textDecoration: 'none' }}>www·VERNO</Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="nav-desktop">
            {links.map(({ href, label, accent }) => {
              const active = here === norm(href)
              // accent (Vaše sazba) má capri trvale; ostatní řídí active/inactive
              const color = accent
                ? 'var(--capri)'
                : (active ? 'var(--ink)' : 'var(--dim)')
              const underlineColor = accent ? 'var(--capri)' : 'var(--orchid)'
              return (
                <Link key={href} href={href} style={{
                  position: 'relative',
                  fontSize: 13,
                  fontWeight: active ? 600 : (accent ? 600 : 400),
                  color,
                  padding: '7px 14px',
                  textDecoration: 'none',
                  transition: 'color .2s',
                }}>
                  {label}
                  <span style={{
                    position: 'absolute', left: 14, right: 14, bottom: 2,
                    height: 1.5, background: underlineColor,
                    transform: active ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left', transition: 'transform .3s cubic-bezier(.16,1,.3,1)',
                  }} />
                </Link>
              )
            })}
            <Link href="/kontakt" className="btn btn-ink" style={{ padding: '10px 20px', fontSize: 12.5, marginLeft: 14 }}>
              Poptat web
            </Link>
          </nav>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="nav-ham"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--ink)' }}
            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--cloud)', zIndex: 500,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 clamp(28px,8vw,60px)',
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: 20, right: 'clamp(20px,5vw,40px)',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 28, color: 'var(--ink)', padding: 8, lineHeight: 1,
          }}>✕</button>
          {links.map(({ href, label, accent }) => {
            const isHere = here === norm(href)
            const color = accent
              ? 'var(--capri)'
              : (isHere ? 'var(--orchid)' : 'var(--ink)')
            return (
              <Link key={href} href={href} onClick={() => setOpen(false)} style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 'clamp(2rem,9vw,3.2rem)', fontWeight: 700,
                color,
                textDecoration: 'none', display: 'block',
                padding: '14px 0', borderBottom: '1px solid var(--line-s)',
                letterSpacing: '-.03em',
              }}>{label}</Link>
            )
          })}
          <Link href="/kontakt" onClick={() => setOpen(false)} style={{
            display: 'inline-block', marginTop: 28,
            background: 'var(--ink)', color: 'var(--cloud)',
            fontFamily: "'Syne',sans-serif", fontSize: '1rem', fontWeight: 700,
            padding: '16px 32px', borderRadius: 2, textDecoration: 'none',
          }}>Poptat web →</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-ham    { display: block !important; }
        }
      `}</style>
    </>
  )
}
