'use client'

import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      background: 'var(--deep)', color: 'rgba(240,237,232,.45)',
      padding: 'clamp(72px,10vw,120px) clamp(22px,5vw,62px) 44px',
      overflow: 'hidden', position: 'relative',
    }}>
      <div style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.12),transparent 70%)', right: -90, top: -50, filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,154,196,.07),transparent 70%)', left: -40, bottom: 20, filter: 'blur(50px)', pointerEvents: 'none' }} />
      <div className=\"noise\" />

      <div className=\"inner-wide\" style={{ position: 'relative', zIndex: 2 }}>
        {/* CTA */}
        <div className=\"reveal\" style={{ marginBottom: 'clamp(52px,8vw,88px)' }}>
          <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2.1rem,6vw,4.5rem)', fontWeight: 800, color: 'var(--cloud)', letterSpacing: '-.04em', lineHeight: 1.05, margin: '0 0 24px', maxWidth: 820 }}>
            Máte nápad, který si zaslouží skvělý web?
          </p>
          <Link href=\"/kontakt\" style={{
            display: 'inline-block',
            background: 'var(--orchid)', color: 'var(--deep)',
            fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1rem,3vw,1.15rem)', fontWeight: 700,
            padding: '18px 38px', borderRadius: 2, textDecoration: 'none',
            letterSpacing: '-.01em', transition: 'transform .2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Napište mi →
          </Link>
        </div>

        {/* Grid links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px 24px', marginBottom: 60 }}>
          <div>
            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: 'var(--cloud)', margin: '0 0 16px', letterSpacing: '-.02em' }}>VERNO</p>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, maxWidth: 240 }}>Tvořím rychlé, moderní a čisté weby, které fungují a skvěle reprezentují.</p>
          </div>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(240,237,232,.3)', margin: '0 0 14px' }}>Navigace</p>
            <Link href=\"/\" style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,.5)', textDecoration: 'none', padding: '4px 0', transition: 'color .2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'rgba(240,237,232,.88)')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,232,.5)')}>Domů</Link>
            <Link href=\"/nabidka\" style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,.5)', textDecoration: 'none', padding: '4px 0', transition: 'color .2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'rgba(240,237,232,.88)')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,232,.5)')}>Nabídka</Link>
            <Link href=\"/jak-pracuji\" style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,.5)', textDecoration: 'none', padding: '4px 0', transition: 'color .2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'rgba(240,237,232,.88)')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,232,.5)')}>Jak pracuji</Link>
            <Link href=\"/proc-takhle\" style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,.5)', textDecoration: 'none', padding: '4px 0', transition: 'color .2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'rgba(240,237,232,.88)')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,232,.5)')}>Proč takhle</Link>
          </div>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(240,237,232,.3)', margin: '0 0 14px' }}>Kontakt</p>
            <a href=\"mailto:info@verno.cz\" style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,.5)', textDecoration: 'none', padding: '4px 0' }}>info@verno.cz</a>
            <a href=\"tel:+420705911941\" style={{ display: 'block', fontSize: 13, color: 'rgba(240,237,232,.5)', textDecoration: 'none', padding: '4px 0' }}>+420 705 911 941</a>
            <p style={{ fontSize: 13, padding: '4px 0', margin: 0 }}>IČ: 23526629</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 24, marginTop: 30, borderTop: '1px solid rgba(240,237,232,.07)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, fontSize: 11, color: 'rgba(240,237,232,.25)' }}>
          <p style={{ margin: 0 }}>© {year} VERNO. Všechna práva vyhrazena.</p>
          <p style={{ margin: 0 }}>Navrženo & nakódováno s pečlivostí</p>
        </div>
      </div>
    </footer>
  )
}
