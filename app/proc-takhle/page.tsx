'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const blocks = [
  {
    t: 'Rychlost',
    p: [
      'Pomalý web pozná návštěvník během vteřin a často odejde dřív, než se vůbec načte. Vyhledávače pomalé weby řadí níž.',
      'Weby stavím jako rychlé a lehké a hostuji je na síti Cloudflare, která je doručuje z místa nejblíž návštěvníkovi. Cloudflare dnes patří mezi největší internetové infrastruktury na světě, využívají ji miliony webů a firmy jako Shopify, IBM, L\u2019Oréal nebo Garmin, hlavně kvůli rychlosti, stabilitě a vyšší bezpečnosti. V praxi to znamená weby, které naskočí takřka okamžitě a nezpomalí se ani při vysoké návštěvnosti. Web přeplněný pluginy a efekty tohle obvykle nedokáže, každý plugin něco přidá k načítání.',
    ],
  },
  {
    t: 'Co se nerozbije po aktualizaci',
    p: [
      'Nejčastější noční můra majitele webu: něco se samo zaktualizovalo a přestal fungovat formulář, zmizela sekce, web spadl. U webů s mnoha pluginy se to občas děje, protože každý plugin se vyvíjí zvlášť a navzájem si mohou přestat rozumět.',
      'Web, který není závislý na desítkách pluginů a automatických aktualizacích, které často způsobují technické problémy, má riziko podobných problémů výrazně menší a nehrozí, že se začne samovolně rozpadat za tři měsíce.',
    ],
  },
  {
    t: 'Každá změna se dá vrátit',
    p: [
      'Celý web je verzovaný, to znamená, že každá úprava je uložená a očíslovaná. Když se kdykoliv něco pokazí, vrátím web do stavu, kdy fungoval, během chvilky. Nevzniká situace „bylo to dobré, ale už to nejde vrátit“.',
    ],
  },
  {
    t: 'Co vás to stojí na provozu',
    p: [
      'Hosting na Cloudflare je u většiny webů, které stavím, zdarma. Pravidelným nákladem je obvykle pouze doména, řádově stovky korun ročně, platíte ji přímo registrátorovi, ne mně.',
      'Pro srovnání: u běžných webů bývají častější průběžné náklady na hosting, pluginy nebo technickou správu. Weby, které stavím, fungují výrazně jednodušeji a většině menších firem dlouhodobě stačí bez klasického placeného hostingu.',
    ],
  },
  {
    t: 'Pár slov o cenách v oboru',
    p: [
      'Ceny webů se dnes pohybují od pár tisíc korun za šablonu, kterou si vyplníte sami, po statisíce u agentur. Agentura má svou cenu z velké části složenou z režie — tým, kanceláře, account manažeři, kteří přeposílají vaše zprávy dál. Já pracuji napřímo, od návrhu až po samotnou realizaci komunikujete přímo se mnou. Díky tomu se většinou pohybuji mezi levnou šablonou a velkou agenturou — s osobním přístupem a přímou komunikací.',
    ],
  },
]

export default function ProcTakhle() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ background: 'var(--slate)', padding: 'clamp(70px,11vw,130px) clamp(22px,5vw,62px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 26, color: 'rgba(243,235,224,.55)' }}>Proč takhle</p>
          <h1 className="serif" style={{ fontSize: 'clamp(2.6rem,6vw,5rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-.022em', color: 'var(--cream)', margin: '0 0 28px', maxWidth: 740 }}>
            Jak weby stavím<br /><span style={{ fontStyle: 'italic', color: 'var(--green-lt)' }}>a proč právě tak.</span>
          </h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(243,235,224,.62)', maxWidth: 600, margin: 0 }}>
            Web se dnes dá postavit mnoha způsoby s řadou pluginů. Funguje to, ale nese to věci, se kterými se pak klient roky potýká. Já své weby stavím jinak. Tady vysvětlím proč.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,8vw,96px) clamp(22px,5vw,62px)', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          {blocks.map((b, i) => (
            <div key={i} className="reveal" style={{ padding: '52px 0', borderBottom: i < blocks.length - 1 ? '1px solid var(--line)' : 'none', display: 'grid', gridTemplateColumns: '.6fr 1.4fr', gap: 40 }} >
              <div className="why-side">
                <p className="serif" style={{ fontSize: 12, letterSpacing: '.12em', color: 'var(--green-lt)', margin: '0 0 12px' }}>0{i + 1}</p>
                <h2 className="serif" style={{ fontSize: 'clamp(1.5rem,2.8vw,2.2rem)', fontWeight: 400, color: 'var(--ink)', margin: 0, letterSpacing: '-.012em', lineHeight: 1.2 }}>{b.t}</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {b.p.map((para, j) => (
                  <p key={j} style={{ fontSize: 14.5, lineHeight: 1.85, color: 'var(--ink-soft)', margin: 0 }}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ position: 'relative', background: 'var(--green)', padding: 'clamp(70px,11vw,140px) clamp(22px,5vw,62px)', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', right: '-150px', top: '-150px', width: 440, height: 440, borderRadius: '50%', border: '1px solid rgba(243,235,224,.08)' }} />
        <div className="reveal" style={{ position: 'relative', maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 300, color: 'var(--cream)', margin: '0 0 24px', letterSpacing: '-.02em' }}>
            Chcete web, který takhle funguje?
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(243,235,224,.65)', margin: '0 0 40px' }}>
            Napište mi, co potřebujete. Ozvu se a domluvíme se na dalším postupu.
          </p>
          <Link href="/kontakt" className="btn btn-cream" style={{ padding: '17px 36px', fontSize: 15 }}>
            Napsat mi <ArrowRight size={16} className="arr" />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .why-side { margin-bottom: 8px; }
          section > div > div[style*="grid-template-columns: .6fr"] { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </div>
  )
}
