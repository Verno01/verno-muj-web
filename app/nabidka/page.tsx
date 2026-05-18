'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const services = [
  {
    id: 'webova-vizitka',
    name: 'Webová vizitka',
    price: 'od 11 900 Kč',
    pro: 'Pro živnostníky a jednotlivce, kteří chtějí být na internetu snadno dohledatelní a mít jednoduchý profesionální web. Ideální například pro řemeslníky, terapeuty, kadeřnice, fotografy, konzultanty nebo menší lokální služby.',
    inc: [
      'Jednostránkový web rozdělený do přehledných sekcí (úvod, služby, o vás, kontakt)',
      'Funguje stejně dobře na mobilu jako na počítači',
      'Kontaktní formulář — zprávy chodí přímo do vašeho e-mailu',
      'Základní nastavení pro vyhledávače (titulek, popis, struktura)',
      'Přihlášení do Google Search Console — indexace',
      'Spuštění na vaší doméně',
    ],
  },
  {
    id: 'maly-web',
    name: 'Malý web',
    price: 'od 18 900 Kč',
    pro: 'Pro živnostníky a menší firmy, které potřebují více prostoru pro své služby, reference, portfolio nebo tým. Nejčastěji volená varianta.',
    inc: [
      'Stránky — nejčastěji jako úvod, služby, o vás, reference, kontakt',
      'Vše z webové vizitky (mobilní verze, formulář, základ pro vyhledávače, spuštění)',
      'Struktura a propojení stránek, které návštěvníka přirozeně vedou ke kontaktu nebo poptávce',
    ],
  },
  {
    id: 'landing-page',
    name: 'Landing page',
    price: 'od 14 900 Kč',
    pro: 'Tato stránka je navržená tak, aby návštěvníka vedla k jedné konkrétní akci — například objednávce, registraci nebo poptávce.',
    inc: [
      'Přehlednou strukturu, která návštěvníka přirozeně vede k akci',
      'Jasně vystavěný obsah: problém → řešení → důvěra → výzva ke kontaktu nebo objednávce',
      'Důraz na jednoduchost, přehlednost a čitelnost i na mobilu',
      'Kontaktní formulář nebo propojení na objednávku',
      'Základní nastavení pro vyhledávání ve Googlu',
      'Spuštění webu na vaší doméně',
    ],
  },
  {
    id: 'akce-spolek',
    name: 'Web pro akci nebo spolek',
    price: 'od 15 900 Kč',
    pro: 'Pro spolky, festivaly, kulturní a komunitní akce, školy, menší obce nebo projekty, kde je důležité rychle a přehledně předat návštěvníkům všechny důležité informace.',
    inc: [
      'Přehledný web, obvykle 3–4 stránky podle rozsahu',
      'Sekce například pro program, informace o akci nebo spolku, přihlášení, vstupenky nebo kontakt',
      'Jednoduchou orientaci, aby návštěvník rychle našel to důležité',
      'Funkční zobrazení pro mobil i počítač',
      'Kontaktní formulář nebo propojení na registraci',
      'Základní nastavení pro vyhledávání ve Googlu',
      'Spuštění webu na vaší doméně',
    ],
  },
  {
    id: 'prezentacni-web',
    name: 'Prezentační web',
    price: 'od 34 900 Kč',
    pro: 'Pro firmy a organizace, kde web není jen základní kontakt, ale důležitá součást prezentace a důvěryhodnosti značky. Vhodné pro podnikání s více službami, realizacemi nebo složitější nabídkou. Ideální například pro architekty, stavební firmy, ordinace, poradenské firmy nebo studia.',
    inc: [
      'Promyšlenou strukturu a navigaci pro větší množství obsahu',
      'Samostatné stránky pro služby, realizace, reference, tým nebo další důležité informace',
      'Přehledné propojení jednotlivých částí webu, které návštěvníka přirozeně vedou k poptávce',
      'Plně funkční zobrazení pro mobil i počítač',
      'Kontaktní formuláře a základní nastavení pro vyhledávání v Googlu',
      'Spuštění webu na vaší doméně',
    ],
  },
]

const addons = [
  ['Anglická (nebo jiná jazyková) verze webu', 'Cena podle rozsahu, domluvíme předem'],
  ['Pozdější úpravy hotového webu', 'Hodinově, vždy po domluvě'],
]

export default function Nabidka() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ background: 'var(--slate)', padding: 'clamp(70px,11vw,130px) clamp(22px,5vw,62px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 26, color: 'rgba(243,235,224,.55)' }}>Nabídka</p>
          <h1 className="serif" style={{ fontSize: 'clamp(2.6rem,6vw,5rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-.022em', color: 'var(--cream)', margin: '0 0 28px', maxWidth: 760 }}>
            Pět typů webů.<br /><span style={{ fontStyle: 'italic', color: 'var(--green-lt)' }}>Každý pro jiný záměr.</span>
          </h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(243,235,224,.62)', maxWidth: 580, margin: 0 }}>
            Každý web je jinak velký, takže ceny uvádím jako „od“. Než cokoliv začnu, dostanete konkrétní cenu podle domluveného rozsahu, písemně a předem. Žádné dodatečné položky, o kterých byste nevěděli.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,8vw,90px) clamp(22px,5vw,62px)', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="reveal svc-row" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, padding: '56px 0', borderBottom: i < services.length - 1 ? '1px solid var(--line)' : 'none', alignItems: 'start' }}>
              <div>
                <p className="serif" style={{ fontSize: 12, letterSpacing: '.12em', color: 'var(--green-lt)', margin: '0 0 10px' }}>0{i + 1}</p>
                <h2 className="serif" style={{ fontSize: 'clamp(1.9rem,3.6vw,2.9rem)', fontWeight: 400, margin: '0 0 18px', color: 'var(--ink)', letterSpacing: '-.015em' }}>{s.name}</h2>
                <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--ink-soft)', margin: '0 0 30px', maxWidth: 560 }}>{s.pro}</p>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 16px' }}>Co je zahrnuto</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {s.inc.map((it, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--green-lt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Check size={11} color="var(--green-dk)" strokeWidth={3} />
                      </span>
                      <span style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="svc-side" style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 18, minWidth: 170 }}>
                <p className="serif" style={{ fontSize: '1.6rem', fontWeight: 500, color: 'var(--green)', margin: 0, whiteSpace: 'nowrap' }}>{s.price}</p>
                <Link href="/kontakt" className="btn btn-green" style={{ fontSize: 12.5, padding: '12px 22px', whiteSpace: 'nowrap' }}>
                  Mám zájem <ArrowRight size={13} className="arr" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--cream-2)', padding: 'clamp(56px,8vw,100px) clamp(22px,5vw,62px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p className="eyebrow reveal" style={{ marginBottom: 22 }}>Doplňkové služby</p>
          <h2 className="serif reveal d1" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, margin: '0 0 44px', color: 'var(--ink)', letterSpacing: '-.015em' }}>
            K libovolnému balíčku se dá přidat.
          </h2>
          {addons.map(([t, d], i) => (
            <div key={i} className={`reveal d${i + 1}`} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, padding: '24px 0', borderBottom: '1px solid var(--line)' }}>
              <p style={{ fontSize: 15.5, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>{t}</p>
              <p style={{ fontSize: 14, color: 'var(--dim)', margin: 0 }}>{d}</p>
            </div>
          ))}

          <div className="reveal d3" style={{ marginTop: 56, background: 'var(--cream)', border: '1px solid var(--line)', borderRadius: 4, padding: 'clamp(28px,4vw,44px)' }}>
            <h3 className="serif" style={{ fontSize: '1.45rem', fontWeight: 500, color: 'var(--ink)', margin: '0 0 16px' }}>Jak to funguje s placením</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'var(--ink-soft)', margin: 0, maxWidth: 680 }}>
              Polovina ceny při zahájení, druhá polovina až při předání hotového webu. Cenu domlouváme předem a písemně — co je v ní zahrnuto a co ne. Když se v průběhu rozsah změní (vy si řeknete o něco navíc), řekneme si to dřív, než to udělám, ne až na faktuře.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(64px,10vw,110px) clamp(22px,5vw,62px)', textAlign: 'center', background: 'var(--cream)' }}>
        <div className="reveal" style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(2rem,4.4vw,3.2rem)', fontWeight: 300, color: 'var(--ink)', margin: '0 0 20px', letterSpacing: '-.018em' }}>Víte, co potřebujete?</h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--dim)', margin: '0 0 34px' }}>
            Napište mi — popište, co děláte a co od webu čekáte. Zbytek doladíme společně.
          </p>
          <Link href="/kontakt" className="btn btn-green">Napsat mi <ArrowRight size={15} className="arr" /></Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .svc-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .svc-side { align-items: flex-start !important; text-align: left !important; }
        }
      `}</style>
    </div>
  )
}
