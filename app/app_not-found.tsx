import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stránka nenalezena | VERNO',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section style={{
      minHeight: '100svh',
      background: 'var(--deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Světelný orb */}
      <div style={{
        position: 'absolute',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,125,184,.12), transparent 70%)',
        right: '-80px',
        top: '-80px',
        filter: 'blur(70px)',
        pointerEvents: 'none',
      }} />

      {/* Ghost číslo v pozadí */}
      <div aria-hidden style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(16rem, 40vw, 36rem)',
        fontWeight: 800,
        letterSpacing: '-.06em',
        color: 'rgba(240,237,232,.025)',
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        lineHeight: 1,
      }}>404</div>

      {/* Obsah */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '0 clamp(22px,5vw,62px)',
        maxWidth: 560,
      }}>
        <p className="eyebrow" style={{ color: 'rgba(240,237,232,.35)', marginBottom: 28, justifyContent: 'center' }}>
          Chyba 404
        </p>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-.045em',
          lineHeight: 1.04,
          color: 'var(--cloud)',
          margin: '0 0 20px',
        }}>
          Tato stránka neexistuje.
        </h1>
        <p style={{
          fontSize: '1rem',
          lineHeight: 1.76,
          color: 'rgba(240,237,232,.45)',
          margin: '0 0 36px',
        }}>
          Stránka byla přesunuta, smazána nebo jste zadali špatnou adresu.
        </p>
        <Link href="/" className="btn btn-lt">
          Zpět na hlavní stránku →
        </Link>
      </div>
    </section>
  )
}
