import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nabídka',
  description: 'Pět typů prezentačních webů - od jednoduché vizitky po firemní prezentaci. Ceny od 11 900 Kč, vždy konkrétně a písemně předem.',
}

const packages = [
  {
    id: 'webova-vizitka', num: '01', name: 'Webová vizitka', price: 'od 11 900 Kč',
    for: 'Pro živnostníky a jednotlivce, kteří chtějí být na internetu snadno dohledatelní a mít jednoduchý profesionální web. Ideální například pro řemeslníky, terapeuty, kadeřnice, fotografy, konzultanty nebo menší lokální služby.',
    items: [
      'Jednostránkový web rozdělený do přehledných sekcí (úvod, služby, o vás, kontakt)',
      'Funguje stejně dobře na mobilu jako na počítači',
      'Kontaktní formulář - zprávy chodí přímo do vašeho e-mailu',
      'Základní nastavení pro vyhledávače (titulek, popis, struktura)',
      'Přihlášení do Google Search Console - indexace',
      'Spuštění na vaší doméně',
    ],
  },
  {
    id: 'maly-web', num: '02', name: 'Malý web', price: 'od 18 900 Kč',
    for: 'Pro živnostníky a menší firmy, které potřebují více prostoru pro své služby, reference, portfolio nebo tým. Nejčastěji volená varianta.',
    items: [
      'Stránky - nejčastěji úvod, služby, o vás, reference, kontakt',
      'Vše z webové vizitky (mobilní verze, formulář, základ pro vyhledávače, spuštění)',
      'Struktura a propojení stránek, které návštěvníka přirozeně vedou ke kontaktu nebo poptávce',
    ],
  },
  {
    id: 'landing-page', num: '03', name: 'Landing page', price: 'od 14 900 Kč',
    for: 'Tato stránka je navržená tak, aby návštěvníka vedla k jedné konkrétní akci - například objednávce, registraci nebo poptávce.',
    items: [
      'Přehlednou strukturu, která návštěvníka přirozeně vede k akci',
      'Jasně vystavěný obsah: problém → řešení → důvěra → výzva ke kontaktu nebo objednávce',
      'Důraz na jednoduchost, přehlednost a čitelnost i na mobilu',
      'Kontaktní formulář nebo propojení na objednávku',
      'Základní nastavení pro vyhledávání ve Googlu',
      'Spuštění webu na vaší doméně',
    ],
  },
  {
    id: 'akce-spolek', num: '04', name: 'Web pro akci nebo spolek', price: 'od 15 900 Kč',
    for: 'Pro spolky, festivaly, kulturní a komunitní akce, školy, menší obce nebo projekty, kde je důležité rychle a přehledně předat návštěvníkům všechny důležité informace.',
    items: [
      'Přehledný web, obvykle 3-4 stránky podle rozsahu',
      'Sekce například pro program, informace o akci nebo spolku, přihlášení, vstupenky nebo kontakt',
      'Jednoduchou orientaci, aby návštěvník rychle našel to důležité',
      'Funkční zobrazení pro mobil i počítač',
      'Kontaktní formulář nebo propojení na registraci',
      'Základní nastavení pro vyhledávání ve Googlu',
      'Spuštění webu na vaší doméně',
    ],
  },
  {
    id: 'prezentacni-web', num: '05', name: 'Prezentační web', price: 'od 34 900 Kč',
    for: 'Pro firmy a organizace, kde web není jen základní kontakt, ale důležitá součást prezentace a důvěryhodnosti značky. Vhodné pro podnikání s více službami nebo složitější nabídkou. Ideální například pro architekty, stavební firmy, ordinace, poradenské firmy nebo studia.',
    items: [
      'Promyšlenou strukturu a navigaci pro větší množství obsahu',
      'Samostatné stránky pro služby, realizace, reference, tým nebo další informace',
      'Přehledné propojení jednotlivých částí webu, které návštěvníka přirozeně vedou k poptávce',
      'Plně funkční zobrazení pro mobil i počítač',
      'Kontaktní formuláře a základní nastavení pro vyhledávání v Googlu',
      'Spuštění webu na vaší doméně',
    ],
  },
]

export default function Nabidka() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero-orb" />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 20 }}>Nabídka</p>
          <h1 className="page-hero-title">Pět typů webů.<br />Každý pro jiný záměr.</h1>
          <p className="page-hero-sub">
            Každý web je jinak velký, takže ceny uvádím jako „od". Než cokoliv začnu, dostanete konkrétní cenu podle domluveného rozsahu, písemně a předem. Žádné dodatečné položky, o kterých byste nevěděli.
          </p>
        </div>
      </div>

      {/* Packages */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(60px,9vw,120px) 0' }}>
        <div className="inner">
          {packages.map((pkg, idx) => (
            <div key={pkg.id} id={pkg.id} className="reveal" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)',
              padding: 'clamp(48px,6vw,80px) 0', borderBottom: '1px solid var(--line)',
              alignItems: 'start',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: 'var(--orchid)' }}>{pkg.num}</span>
                  <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, letterSpacing: '-.04em', color: 'var(--ink)', margin: 0 }}>{pkg.name}</h2>
                </div>
                <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: 'var(--orchid)', margin: '0 0 24px', letterSpacing: '-.02em' }}>{pkg.price}</p>
                <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', margin: 0 }}>{pkg.for}</p>
              </div>
              <div>
                <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 18px' }}>Co obsahuje</p>
                {pkg.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                    <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(168,125,184,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--orchid)', display: 'block' }} />
                    </span>
                    <p style={{ fontSize: 14.5, lineHeight: 1.72, color: 'var(--ink-s)', margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Doplňkové služby */}
          <div className="reveal" style={{ padding: 'clamp(48px,6vw,80px) 0', borderBottom: '1px solid var(--line)' }}>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 800, letterSpacing: '-.04em', color: 'var(--ink)', margin: '0 0 24px' }}>Doplňkové služby</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', margin: '0 0 16px' }}>K libovolnému balíčku se dá přidat:</p>
            {['Anglická (nebo jiná jazyková) verze webu', 'Pozdější úpravy hotového webu - hodinově, vždy po domluvě'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(168,125,184,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--orchid)', display: 'block' }} />
                </span>
                <p style={{ fontSize: 14.5, lineHeight: 1.72, color: 'var(--ink-s)', margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Jak to funguje s placením */}
          <div className="reveal" style={{ padding: 'clamp(48px,6vw,80px) 0' }}>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 800, letterSpacing: '-.04em', color: 'var(--ink)', margin: '0 0 20px' }}>Jak to funguje s placením</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', maxWidth: 620, margin: 0 }}>
              Polovina ceny při zahájení, druhá polovina až při předání hotového webu. Cenu domlouváme předem a písemně - co je v ní zahrnuto a co ne. Když se v průběhu rozsah změní, řekneme si to dřív, než to udělám, ne až na faktuře.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--deep)', padding: 'clamp(72px,10vw,120px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.12),transparent 70%)', right: -80, top: -80, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="reveal" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3.6rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1, color: 'var(--cloud)', margin: '0 0 18px', maxWidth: 600 }}>
            Nejste si jistí, který web je pro vás?
          </h2>
          <p className="reveal d1" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'rgba(240,237,232,.5)', margin: '0 0 32px', maxWidth: 480 }}>
            Napište mi pár vět o tom, co děláte. Společně to rozlouskneme.
          </p>
          <Link href="/kontakt" className="btn btn-lt reveal d2">Napsat mi →</Link>
        </div>
      </section>

      <style>{`
        @media(max-width:720px){
          .inner > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
