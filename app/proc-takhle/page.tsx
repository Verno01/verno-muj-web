import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Proč takhle',
  description: 'Čím stavím weby, proč, a v čem je to pro klienta lepší než běžná cesta. Rychlost, stabilita, hosting zdarma, verzování.',
}

const reasons = [
  {
    title: 'Rychlost',
    accent: 'var(--capri)',
    text: 'Pomalý web pozná návštěvník během vteřin a často odejde dřív, než se vůbec načte. Vyhledávače pomalé weby řadí níž.',
    detail: 'Weby stavím jako rychlé a lehké a hostuji je na síti Cloudflare, která je doručuje z místa nejblíž návštěvníkovi. Cloudflare dnes patří mezi největší internetové infrastruktury na světě, využívají ji miliony webů a firmy jako Shopify, IBM, L\'Oréal nebo Garmin - hlavně kvůli rychlosti, stabilitě a vyšší bezpečnosti. V praxi to znamená weby, které naskočí takřka okamžitě a nezpomalí se ani při vysoké návštěvnosti.',
  },
  {
    title: 'Co se nerozbije po aktualizaci',
    accent: 'var(--orchid)',
    text: 'Nejčastější noční můra majitele webu: něco se samo zaktualizovalo a přestal fungovat formulář, zmizela sekce, web spadl.',
    detail: 'U webů s mnoha pluginy se to občas děje, protože každý plugin se vyvíjí zvlášť a navzájem si mohou přestat rozumět. Web, který není závislý na desítkách pluginů a automatických aktualizacích, má riziko podobných problémů výrazně menší a nehrozí, že se začne samovolně rozpadat za tři měsíce.',
  },
  {
    title: 'Každá změna se dá vrátit',
    accent: 'var(--lime)',
    text: 'Celý web je verzovaný - každá úprava je uložená a očíslovaná.',
    detail: 'Když se kdykoliv něco pokazí, vrátím web do stavu, kdy fungoval, během chvilky. Nevzniká situace „bylo to dobré, ale už to nejde vrátit".',
  },
  {
    title: 'Co vás to stojí na provozu',
    accent: 'var(--marigold)',
    text: 'Hosting na Cloudflare je u většiny webů, které stavím, zdarma.',
    detail: 'Pravidelný náklad je obvykle pouze doména - řádově stovky korun ročně, platíte ji přímo registrátorovi, ne mně. Pro srovnání: u běžných webů bývají průběžné náklady na hosting, pluginy nebo technickou správu. Weby, které stavím, fungují výrazně jednodušeji.',
  },
]

export default function ProcTakhle() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero-orb" style={{ background: 'radial-gradient(circle,rgba(245,138,0,.1),transparent 70%)', left: -100, right: 'auto' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 20 }}>Proč takhle</p>
          <h1 className="page-hero-title">Stavím jinak.<br />Tady vysvětlím proč.</h1>
          <p className="page-hero-sub">
            Web se dnes dá postavit mnoha způsoby s řadou pluginů. Funguje to, ale nese to věci, se kterými se pak klient roky potýká.
          </p>
        </div>
      </div>

      {/* Důvody */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(60px,9vw,120px) 0' }}>
        <div className="inner">
          {reasons.map((r, i) => (
            <div key={i} className="reveal" style={{ padding: 'clamp(48px,6vw,80px) 0', borderBottom: '1px solid var(--line)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }}>
              <div>
                <div style={{ width: 32, height: 3, background: r.accent, marginBottom: 24, borderRadius: 1 }} />
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.5rem,2.8vw,2.2rem)', fontWeight: 800, letterSpacing: '-.04em', color: 'var(--ink)', margin: '0 0 20px' }}>{r.title}</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.78, color: 'var(--ink)', fontWeight: 500, margin: 0 }}>{r.text}</p>
              </div>
              <div>
                <p style={{ fontSize: '1rem', lineHeight: 1.84, color: 'var(--ink-s)', margin: 0 }}>{r.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ceny v oboru */}
      <section style={{ background: 'var(--cloud-1)', padding: 'clamp(60px,9vw,120px) 0', borderTop: '1px solid var(--line-s)' }}>
        <div className="inner">
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>Jak to sedí cenově</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--ink)', margin: '0 0 28px', maxWidth: 680 }}>
            Pár slov o cenách v oboru.
          </h2>
          <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', maxWidth: 640, margin: '0 0 16px' }}>
            Ceny webů se dnes pohybují od pár tisíc korun za šablonu, kterou si vyplníte sami, po statisíce u agentur. Agentura má svou cenu z velké části složenou z režie - tým, kanceláře, account manažeři, kteří přeposílají vaše zprávy dál.
          </p>
          <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', maxWidth: 640, margin: '0 0 36px' }}>
            Pracuji napřímo, od návrhu až po samotnou realizaci komunikujete přímo se mnou. Díky tomu se pohybuji mezi levnou šablonou a velkou agenturou, s osobním přístupem a přímou komunikací.
          </p>
          <Link href="/nabidka" className="btn btn-ink reveal d4">Podívat se na nabídku →</Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(60px,9vw,120px) 0' }} id="faq">
        <div className="inner">
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>Časté otázky</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--ink)', margin: '0 0 clamp(36px,5vw,56px)' }}>
            Co lidi nejčastěji zajímá.
          </h2>
          <FaqList />
        </div>
      </section>
    </>
  )
}

function FaqList() {
  const faqs = [
    { q: 'Kolik to bude přesně stát?', a: 'Ceny u balíčků jsou uvedené jako „od", protože každý web je jinak velký. Konkrétní cenu vám dám po rozhovoru o tom, co potřebujete, vždy písemně a předem, než cokoliv začnu. Žádné neviditelné položky, se kterými byste nepočítali.' },
    { q: 'Jak dlouho tvorba trvá?', a: 'Závisí na rozsahu webu a hlavně na tom, jak rychle se sejdou podklady (texty, fotky). Nedávám konkrétní datum, protože bych ho dávala naslepo. Po celou dobu ale zasílám průběžně rozpracovanou verzi, takže budete vědět, v jaké fázi to je. Když máte pevný termín, řekněte mi to hned na začátku.' },
    { q: 'Co musím připravit já?', a: 'Informace o tom, co děláte, fotografie (ideálně vlastní) a logo, pokud ho máte. Nemusí to být dokonalé - texty obvykle píšu já podle vašich podkladů a dodané fotky umím upravit. Podrobně je to rozepsané na stránce Jak pracuji.' },
    { q: 'Budu si web moct sám upravovat?', a: 'Web není postavený na systému, kde si sami klikáte do administrace - to je záměr, protože právě ta administrace bývá zdroj problémů. Menší změny (text, fotka, údaj) za vás udělám rychle za hodinovou sazbu. Větší úpravy se domluví zvlášť. Nejste na mně trvale závislí, můžete kdykoliv přejít jinam, web je váš.' },
    { q: 'Co když budete nedostupná nebo s vámi přestaneme spolupracovat?', a: 'Hotový web je váš včetně všech zdrojových souborů. Není zamčený u mě. Když byste potřebovali pokračovat s někým jiným, předám vše potřebné.' },
    { q: 'Děláte e-shopy?', a: 'Ne. Soustředím se na prezentační weby - vizitky, firemní weby, landing pages. E-shop je jiná disciplína (sklady, platby, objednávky) a dělat ho napůl by nikomu neposloužilo. Když potřebujete e-shop, ráda doporučím směr, kterým se vydat.' },
    { q: 'Kde bude web hostovaný a co to stojí?', a: 'Na síti Cloudflare, kde je provoz u webů, které stavím, obvykle zdarma. Platíte jen za doménu - řádově stovky korun ročně, přímo registrátorovi.' },
    { q: 'Co Google a vyhledávání?', a: 'Každý web dostane základní nastavení pro vyhledávače - správné titulky, popisy a strukturu. Přihlásím vás do Google Search Console, aby vás Google našel a zobrazoval. Negarantuji první místo ve vyhledávání, to nikdo seriózní slíbit nemůže. Garantuji, že web bude technicky připravený, aby vás Google našel.' },
    { q: 'Můžu mít web ve více jazycích?', a: 'Ano. Vícejazyčný web udělat umím. Řekněte to na začátku. Překlad buď dodáte vy, nebo ho zajistím za příplatek.' },
    { q: 'Jak probíhá platba?', a: 'Polovina při zahájení, druhá polovina při předání hotového webu. Vše domluveno písemně předem.' },
  ]

  return (
    <div>
      {faqs.map((faq, i) => (
        <details key={i} className="faq-item" style={{ borderBottom: '1px solid var(--line)' }}>
          <summary style={{
            width: '100%', background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: 'clamp(18px,2.5vw,24px) 0', textAlign: 'left',
            fontFamily: "'Syne',sans-serif", fontSize: 'clamp(.95rem,1.4vw,1.1rem)',
            fontWeight: 600, color: 'var(--ink)', letterSpacing: '-.01em',
            listStyle: 'none',
          }}>
            {faq.q}
            <span style={{ flexShrink: 0, fontSize: 20, color: 'var(--orchid)', marginLeft: 16 }}>+</span>
          </summary>
          <div style={{ padding: '0 0 clamp(16px,2vw,24px)', fontSize: 15, lineHeight: 1.82, color: 'var(--ink-s)', maxWidth: 680 }}>
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  )
}
