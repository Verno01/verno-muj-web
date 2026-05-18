import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--slate-dk)', color: 'rgba(243,235,224,.55)', padding: 'clamp(56px,8vw,90px) clamp(22px,5vw,62px) 38px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 44, paddingBottom: 46, borderBottom: '1px solid rgba(243,235,224,.12)' }}>
          <div>
            <p style={{ fontFamily: 'Fraunces, serif', fontSize: 26, fontWeight: 600, letterSpacing: '.2em', color: 'var(--cream)', margin: '0 0 14px' }}>VERNO</p>
            <p style={{ fontSize: 14, lineHeight: 1.75, margin: 0, maxWidth: 250 }}>
              Hana Fraňková. Prezentační weby pro živnostníky a malé firmy.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 11.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(243,235,224,.4)', margin: '0 0 18px' }}>Stránky</p>
            {[
              { href: '/nabidka', label: 'Nabídka' },
              { href: '/jak-pracuji', label: 'Jak pracuji' },
              { href: '/proc-takhle', label: 'Proč takhle' },
              { href: '/kontakt', label: 'Kontakt' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: 14, color: 'rgba(243,235,224,.6)', textDecoration: 'none', padding: '6px 0' }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 11.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(243,235,224,.4)', margin: '0 0 18px' }}>Kontakt</p>
            <a href="mailto:info@verno.cz" style={{ display: 'block', fontSize: 14, color: 'rgba(243,235,224,.6)', textDecoration: 'none', padding: '6px 0' }}>info@verno.cz</a>
            <a href="tel:+420705911941" style={{ display: 'block', fontSize: 14, color: 'rgba(243,235,224,.6)', textDecoration: 'none', padding: '6px 0' }}>+420 705 911 941</a>
            <p style={{ fontSize: 14, color: 'rgba(243,235,224,.6)', padding: '6px 0', margin: 0 }}>IČ: 23526629</p>
          </div>
        </div>
        <div style={{ paddingTop: 26, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 14, fontSize: 12.5 }}>
          <p style={{ margin: 0 }}>© {year} VERNO — Hana Fraňková</p>
          <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
            <Link href="/obchodni-podminky" style={{ color: 'rgba(243,235,224,.4)', textDecoration: 'none' }}>Obchodní podmínky</Link>
            <Link href="/ochrana-osobnich-udaju" style={{ color: 'rgba(243,235,224,.4)', textDecoration: 'none' }}>Ochrana osobních údajů</Link>
            <Link href="/cookies" style={{ color: 'rgba(243,235,224,.4)', textDecoration: 'none' }}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
