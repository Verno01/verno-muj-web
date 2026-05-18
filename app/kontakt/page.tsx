'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle2, AlertCircle, Plus, Minus } from 'lucide-react'

// Formspree: zaregistrujte se na formspree.io, vytvořte formulář s cílem info@verno.cz,
// zkopírujte Form ID (např. „xabcdef1") a nahraďte XXXX níže.
const FORMSPREE_ID = 'xbdbjayr'

const projectTypes = [
  'Webová vizitka (od 11 900 Kč)',
  'Malý web (od 18 900 Kč)',
  'Landing page (od 14 900 Kč)',
  'Web pro akci nebo spolek (od 15 900 Kč)',
  'Prezentační web (od 34 900 Kč)',
  'Ještě nevím — potřebuji poradit',
]

const faqs = [
  ['Kolik to bude přesně stát?', 'Ceny u balíčků jsou uvedené jako „od“, protože každý web je jinak velký. Konkrétní cenu vám dám po rozhovoru o tom, co potřebujete, vždy písemně a předem, než cokoliv začnu. Žádné neviditelné položky, se kterými byste nepočítali.'],
  ['Jak dlouho tvorba trvá?', 'Závisí na rozsahu webu a hlavně na tom, jak rychle se sejdou podklady (texty, fotky). Nedávám konkrétní datum, protože bych ho dávala naslepo. Po celou dobu ale zasílám průběžně rozpracovanou verzi, takže budete vědět, v jaké fázi to je. Když máte pevný termín, řekněte mi to hned na začátku a já vám sdělím, jestli to jde stihnout.'],
  ['Co musím připravit já?', 'Informace o tom, co děláte, fotografie (ideálně vlastní) a logo, pokud ho máte. Nemusí to být dokonalé, texty obvykle píšu já podle vašich podkladů a dodané fotky umím upravit. Podrobně je to rozepsané na stránce Jak pracuji.'],
  ['Budu si web moct sám upravovat?', 'Web není postavený na systému, kde si sami klikáte do administrace, to je záměr, protože právě ta administrace bývá zdroj problémů. Menší změny (text, fotka, údaj) za vás udělám rychle za hodinovou sazbu. Větší úpravy se domluví zvlášť. Nejste na mně trvale závislí, můžete kdykoliv přejít jinam, web je váš.'],
  ['Co když budete nedostupná nebo s vámi přestaneme spolupracovat?', 'Hotový web je váš včetně všech zdrojových souborů. Není zamčený u mě. Když byste potřebovali pokračovat s někým jiným, předám vše potřebné.'],
  ['Děláte e-shopy?', 'Ne. Soustředím se na prezentační weby — vizitky, firemní weby, landing pages. E-shop je jiná disciplína (sklady, platby, objednávky) a dělat ho napůl by nikomu neposloužilo. Když potřebujete e-shop, ráda doporučím směr, kterým se vydat.'],
  ['Kde bude web hostovaný a co to stojí?', 'Na síti Cloudflare, kde je provoz u webů, které stavím, obvykle zdarma. Platíte jen za doménu, řádově stovky korun ročně, přímo registrátorovi.'],
  ['Co Google a vyhledávání?', 'Každý web dostane základní nastavení pro vyhledávače, správné titulky, popisy a strukturu, a přihlásím vás do Google Search Console, aby vás Google našel a zobrazoval. Negarantuji první místo ve vyhledávání, to nikdo seriózní slíbit nemůže, protože to neovlivní. Garantuji, že web bude technicky připravený, aby vás Google našel.'],
  ['Můžu mít web ve více jazycích?', 'Ano. Vícejazyčný web udělat umím. Řekněte to na začátku. Překlad buď dodáte vy, nebo ho zajistím za příplatek.'],
  ['Jak probíhá platba?', 'Polovina při zahájení, druhá polovina při předání hotového webu. Vše domluveno písemně předem.'],
]

export default function Kontakt() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const r = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(r.ok ? 'success' : 'error')
      if (r.ok) setForm({ name: '', email: '', projectType: '', message: '' })
    } catch { setStatus('error') }
  }

  const inp = {
    width: '100%', fontFamily: 'Inter, sans-serif', fontSize: 14.5, color: 'var(--ink)',
    background: 'var(--cream)', border: '1px solid var(--line)', borderRadius: 4,
    padding: '14px 16px', outline: 'none', transition: 'border-color .2s',
  } as const
  const lbl = {
    display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '.15em',
    textTransform: 'uppercase' as const, color: 'var(--dim)', marginBottom: 8,
  }

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ background: 'var(--cream-2)', padding: 'clamp(64px,10vw,116px) clamp(22px,5vw,62px) clamp(48px,7vw,80px)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
          <div>
            <p className="eyebrow reveal" style={{ marginBottom: 26 }}>Kontakt</p>
            <h1 className="serif reveal d1" style={{ fontSize: 'clamp(2.5rem,5.6vw,4.4rem)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-.022em', color: 'var(--ink)', margin: '0 0 26px' }}>
              Napište mi.<br /><span style={{ fontStyle: 'italic', color: 'var(--terra)' }}>Domluvíme se.</span>
            </h1>
            <p className="reveal d2" style={{ fontSize: '1.04rem', lineHeight: 1.8, color: 'var(--ink-soft)', maxWidth: 400, margin: '0 0 40px' }}>
              Stačí popsat, co děláte, jaký web hledáte a co máte nebo nemáte připravené. Zpravidla odpovídám do 2 pracovních dnů.
            </p>
            <div className="reveal d3" style={{ paddingTop: 30, borderTop: '1px solid var(--line)' }}>
              <p style={{ fontSize: 12, color: 'var(--dim)', margin: '0 0 6px' }}>Nebo přímo na</p>
              <a href="mailto:info@verno.cz" style={{ display: 'block', fontSize: 16, fontWeight: 500, color: 'var(--green)', textDecoration: 'none', marginBottom: 6 }}>info@verno.cz</a>
              <a href="tel:+420705911941" style={{ display: 'block', fontSize: 16, fontWeight: 500, color: 'var(--green)', textDecoration: 'none' }}>+420 705 911 941</a>
            </div>
          </div>

          <div className="reveal d2">
            {status === 'success' ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 40px', textAlign: 'center', gap: 16, background: 'var(--cream)', borderRadius: 4, border: '1px solid var(--line)' }}>
                <CheckCircle2 size={40} color="var(--green)" />
                <h3 className="serif" style={{ fontSize: '1.7rem', color: 'var(--ink)', margin: 0 }}>Zpráva odeslána</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 300, margin: 0 }}>
                  Děkuji za zájem. Zpravidla odpovídám do 2 pracovních dnů.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20, background: 'var(--cream)', borderRadius: 4, padding: 'clamp(26px,4vw,44px)', border: '1px solid var(--line)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-2col">
                  <div>
                    <label style={lbl}>Jméno *</label>
                    <input name="name" type="text" required placeholder="Jana Nováková" value={form.name} onChange={ch} style={inp}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--green)'} onBlur={e => e.currentTarget.style.borderColor = 'var(--line)'} />
                  </div>
                  <div>
                    <label style={lbl}>E-mail *</label>
                    <input name="email" type="email" required placeholder="jana@priklad.cz" value={form.email} onChange={ch} style={inp}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--green)'} onBlur={e => e.currentTarget.style.borderColor = 'var(--line)'} />
                  </div>
                </div>
                <div>
                  <label style={lbl}>O jaký web máte zájem?</label>
                  <select name="projectType" value={form.projectType} onChange={ch} style={{ ...inp, cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236E7468' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: 40 }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--green)'} onBlur={e => e.currentTarget.style.borderColor = 'var(--line)'}>
                    <option value="">— Vyberte variantu —</option>
                    {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={lbl}>Řekněte mi víc *</label>
                  <textarea name="message" required rows={5} placeholder="Krátce popište, co podnikáte a co od webu čekáte. Máte logo, texty, fotky?" value={form.message} onChange={ch}
                    style={{ ...inp, resize: 'none' }}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--green)'} onBlur={e => e.currentTarget.style.borderColor = 'var(--line)'} />
                </div>
                {status === 'error' && (
                  <p style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--terra-dk)' }}>
                    <AlertCircle size={15} /> Odeslání se nezdařilo. Zkuste to znovu nebo napište přímo na e-mail.
                  </p>
                )}
                <button type="submit" disabled={status === 'sending'} className="btn btn-green" style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? .6 : 1 }}>
                  <Send size={14} /> {status === 'sending' ? 'Odesílám…' : 'Odeslat poptávku'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(64px,10vw,120px) clamp(22px,5vw,62px)' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(40px,6vw,60px)' }}>
            <p className="eyebrow" style={{ marginBottom: 22 }}>Časté otázky</p>
            <h2 className="serif" style={{ fontSize: 'clamp(2rem,4.4vw,3.4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)', margin: 0, letterSpacing: '-.018em' }}>
              Co vás nejčastěji zajímá.
            </h2>
          </div>
          <div className="reveal d1">
            {faqs.map(([q, a], i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 500, color: 'var(--ink)' }}>
                  <span>{q}</span>
                  <span style={{ width: 26, height: 26, borderRadius: '50%', border: '1.5px solid', borderColor: openFaq === i ? 'var(--green)' : 'var(--line)', background: openFaq === i ? 'var(--green)' : 'transparent', color: openFaq === i ? 'var(--cream)' : 'var(--dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .25s' }}>
                    {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <div style={{ maxHeight: openFaq === i ? 300 : 0, overflow: 'hidden', transition: 'max-height .4s cubic-bezier(.16,1,.3,1), padding .3s', paddingBottom: openFaq === i ? 22 : 0 }}>
                  <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--ink-soft)', margin: 0, maxWidth: 720 }}>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 560px) {
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
