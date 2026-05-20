'use client'
import { useState } from 'react'
import type { Metadata } from 'next'

// Note: metadata export doesn't work in 'use client' components
// Move to a separate file or use generateMetadata pattern
// For simplicity keeping it here as a comment:
// title: 'Kontakt', description: 'Napište mi pár vět o tom, co děláte a co od webu čekáte. Ozvu se do dvou pracovních dnů.'

export default function Kontakt() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setSending(true)

  try {
    const response = await fetch("https://formspree.io/f/xbdbjayr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget)))
    })

    if (response.ok) {
      setSent(true)
    } else {
      alert("Něco se nepovedlo, zkuste to prosím znovu nebo mi napište napřímo.")
    }
  } catch (error) {
    alert("Chyba při odesílání. Zkontrolujte prosím připojení k internetu.")
  } finally {
    setSending(false)
  }
}

  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero-orb" />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 20 }}>Kontakt</p>
          <h1 className="page-hero-title">Máte něco<br />na mysli?</h1>
          <p className="page-hero-sub">
            Stačí pár vět o tom, co děláte a co od webu čekáte. Ozvu se do dvou pracovních dnů.
          </p>
        </div>
      </div>

      {/* Kontaktní sekce */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(60px,9vw,120px) 0' }}>
        <div className="inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(40px,7vw,100px)', alignItems: 'start' }} className="contact-grid">

            {/* Kontaktní info */}
            <div>
              <p className="eyebrow" style={{ marginBottom: 24 }}>Přímý kontakt</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 48 }}>
                <div>
                  <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 6px' }}>E-mail</p>
                  <a href="mailto:info@verno.cz" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.1rem,2vw,1.5rem)', fontWeight: 700, color: 'var(--orchid)', textDecoration: 'none', letterSpacing: '-.02em' }}>info@verno.cz</a>
                </div>
                <div>
                  <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 6px' }}>Telefon</p>
                  <a href="tel:+420705911941" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.1rem,2vw,1.5rem)', fontWeight: 700, color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-.02em' }}>+420 705 911 941</a>
                </div>
                <div>
                  <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 6px' }}>Fakturační údaje</p>
                  <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--ink-s)', margin: 0 }}>Hana Fraňková<br />IČ: 23526629<br />Lomnice nad Lužnicí</p>
                </div>
              </div>

              {/* Co chci vědět */}
              <div style={{ padding: 'clamp(20px,3vw,32px)', background: 'var(--cloud-1)', border: '1px solid var(--line)' }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', margin: '0 0 14px' }}>Co mi pomůže odpovědět rychleji</p>
                {['Co děláte (pár slov o oboru)', 'Jak si web zhruba představujete', 'Jestli máte logo a barvy', 'Případný termín, pokud ho máte'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--orchid)', flexShrink: 0, marginTop: 7 }} />
                    <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-s)', margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulář */}
            <div>
              {sent ? (
                <div style={{ padding: 'clamp(36px,5vw,56px)', background: 'var(--cloud-1)', border: '1px solid var(--line)', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(168,125,184,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <span style={{ fontSize: 24 }}>✓</span>
                  </div>
                  <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 700, color: 'var(--ink)', margin: '0 0 12px' }}>Zpráva odeslána</h2>
                  <p style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--ink-s)', margin: 0 }}>Ozvu se do dvou pracovních dnů.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="jmeno">Jméno a příjmení *</label>
                      <input id="jmeno" name="jmeno" type="text" required className="form-input" placeholder="Jan Novák" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">E-mail *</label>
                      <input id="email" name="email" type="email" required className="form-input" placeholder="jan@firma.cz" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="telefon">Telefon</label>
                    <input id="telefon" name="telefon" type="tel" className="form-input" placeholder="+420 123 456 789" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="web">Webová adresa (pokud ji máte)</label>
                    <input id="web" name="web" type="url" className="form-input" placeholder="https://vasefirma.cz" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="zprava">Co děláte a co od webu čekáte *</label>
                    <textarea id="zprava" name="zprava" required className="form-textarea" rows={5} placeholder="Pár vět stačí. Čím podrobněji napíšete, tím lépe se domluvíme." />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: 'var(--dim)', margin: '0 0 16px', lineHeight: 1.6 }}>
                      Odesláním formuláře souhlasíte se zpracováním osobních údajů za účelem odpovědi na váš dotaz.
                    </p>
                    <button type="submit" className="btn btn-ink" disabled={sending} style={{ opacity: sending ? .7 : 1 }}>
                      {sending ? 'Odesílám…' : 'Odeslat zprávu →'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:760px){
          .contact-grid{grid-template-columns:1fr !important}
          .contact-grid > div:first-child{margin-bottom:0}
          form > div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
