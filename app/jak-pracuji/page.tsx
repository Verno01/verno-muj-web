import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jak pracuji',
  description: 'Celý postup tvorby webu krok za krokem. Co od vás budu potřebovat a proč — texty, fotky, logo. Průběžně ukazuji rozpracovanou verzi, ne screenshoty.',
}

const steps = [
  {
    n: '01', title: 'Ozvete se',
    text: 'Kontaktujete a vyplníte formulář — pár vět o tom, co děláte, jaký web si představujete a co už máte připravené (texty, fotky, logo). Do dvou pracovních dnů se ozvu.',
  },
  {
    n: '02', title: 'Domluvíme se na zadání',
    text: 'Projdeme spolu, k čemu web má sloužit, koho má oslovit a co má návštěvník udělat. Určíme rozsah, rozdělíme si, co připravíte vy a co udělám já, a domluvíme cenu — písemně, předem.',
  },
  {
    n: '03', title: 'Tvořím a průběžně ukazuji',
    text: 'Začnu stavět. Místo posílání obrázků vás průběžně oslovím s rozpracovanou verzí webu na dočasné adrese — můžete se podívat, jak roste, a hned říct, co upravit.',
  },
  {
    n: '04', title: 'Zapracuji připomínky',
    text: 'Po každé ukázané verzi si řekneme, co doladit. Dvě kola úprav jsou součástí ceny. Když přijdou větší změny nad rámec původního zadání, řeknu vám to dopředu — ne potichu na faktuře.',
  },
  {
    n: '05', title: 'Spustíme web',
    text: 'Hotový web nasadím na vaši doménu, projdu, že vše funguje na počítači i mobilu, a přihlásím vás do Google Search Console.',
  },
  {
    n: '06', title: 'Předám',
    text: 'Dostanete funkční web a vysvětlím vám základní věci kolem něj. Když budete někdy potřebovat něco upravit, ozvete se — řeší se to jednorázově, nejste na ničem závislí.',
  },
]

const needs = [
  {
    title: 'Informace o tom, co děláte',
    text: 'Čím se zabýváte, pro koho pracujete, co vás odlišuje, co má návštěvník udělat. Nemusíte to umět hezky napsat, od toho jsem tu já. Ale ty informace musí přijít od vás, nikdo jiný je nezná.',
  },
  {
    title: 'Fotografie',
    text: 'Ideálně vaše vlastní — vaše práce, vy, vaše prostředí. Působí to nesrovnatelně líp než fotky z databáze. Fotky, které dodáte, umím upravit (ořez, světlo, barvy, sjednocení). Když vlastní nemáte, vybereme spolu vhodné placené.',
  },
  {
    title: 'Logo a barvy, pokud je máte',
    text: 'Když máte logo nebo zavedené barvy, web na ně navážu. Když nemáte, není to problém — navrhnu vizuální podobu tak, aby seděla k tomu, co děláte.',
  },
  {
    title: 'Doménu',
    text: 'Adresu webu (např. vasefirma.cz). Když ji ještě nemáte, pomohu vám si ji jednoduše pořídit — je to otázka pár stovek ročně.',
  },
  {
    title: 'Vaši představu — pokud nějakou máte',
    text: 'Jestli máte v hlavě, jak by web měl působit, co se vám líbí, čeho se vyvarovat, řekněte mi to — beru to vážně. Když konkrétní představu nemáte, navrhnu směr já a vysvětlím proč.',
  },
]

export default function JakPracuji() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero-orb" style={{ background: 'radial-gradient(circle,rgba(0,154,196,.12),transparent 70%)' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 20 }}>Jak pracuji</p>
          <h1 className="page-hero-title">Web nevzniká tak,<br />že zmizím na měsíc.</h1>
          <p className="page-hero-sub">
            Pracuji po krocích a průběžně vám ukazuji, v jaké fázi web je. Tady je celý postup a hlavně to, co budu potřebovat od vás — protože i na tom stojí co nejlepší výsledek.
          </p>
        </div>
      </div>

      {/* Kroky */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(60px,9vw,120px) 0' }}>
        <div className="inner">
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>Postup krok za krokem</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((s, i) => (
              <div key={i} className={`reveal d${Math.min(i + 1, 5)}`} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr', gap: '0 clamp(24px,4vw,56px)',
                padding: 'clamp(32px,4vw,48px) 0', borderBottom: '1px solid var(--line)', alignItems: 'start',
              }}>
                <div>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 800, letterSpacing: '-.06em', color: 'rgba(25,23,20,.08)', margin: 0, lineHeight: 1 }}>{s.n}</p>
                  <div style={{ width: 20, height: 2, background: 'var(--orchid)', marginTop: 10, opacity: .7 }} />
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.1rem,1.8vw,1.4rem)', fontWeight: 700, letterSpacing: '-.02em', color: 'var(--ink)', margin: '0 0 12px' }}>{s.title}</h2>
                  <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', margin: 0, maxWidth: 580 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co od vás budu potřebovat */}
      <section style={{ background: 'var(--cloud-1)', padding: 'clamp(60px,9vw,120px) 0', borderTop: '1px solid var(--line-s)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(var(--line-s) 1px,transparent 1px),linear-gradient(90deg,var(--line-s) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>Co od vás budu potřebovat</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--ink)', margin: '0 0 clamp(36px,5vw,56px)', maxWidth: 640 }}>
            Web je tak dobrý, jak dobré jsou podklady.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(16px,2.5vw,28px)' }}>
            {needs.map((n, i) => (
              <div key={i} className={`reveal d${Math.min(i + 1, 5)}`} style={{ padding: 'clamp(24px,3vw,36px)', background: 'var(--cloud)', border: '1px solid var(--line)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,var(--orchid),transparent)' }} />
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', margin: '0 0 10px', letterSpacing: '-.01em' }}>{n.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.78, color: 'var(--dim)', margin: 0 }}>{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak dlouho to trvá */}
      <section style={{ background: 'var(--deep)', padding: 'clamp(60px,9vw,120px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.12),transparent 70%)', left: -80, bottom: -60, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 24 }}>Časová náročnost</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--cloud)', margin: '0 0 24px', maxWidth: 600 }}>
            Jak dlouho to trvá — čestná odpověď.
          </h2>
          <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(240,237,232,.5)', maxWidth: 560, margin: '0 0 16px' }}>
            Záleží na velikosti webu a hlavně na tom, jak rychle se sejdou podklady — texty a fotky bývají nejčastější brzda. Nedávám konkrétní datum spuštění, protože bych ho dávala naslepo a to nechci.
          </p>
          <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(240,237,232,.5)', maxWidth: 560, margin: '0 0 32px' }}>
            Co vám slíbit můžu: budete pravidelně informováni, v jaké fázi vše je. Když máte pevný termín, řekněte mi to hned v první zprávě — podívám se, jestli to jde stihnout, a řeknu vám, jestli ano nebo ne.
          </p>
          <Link href="/kontakt" className="btn btn-lt reveal d4">Začněme →</Link>
        </div>
      </section>
    </>
  )
}
