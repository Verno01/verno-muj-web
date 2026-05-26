import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Proč takhle | Tvorba webu bez starostí - VERNO',
  description: 'Jak stavím webové stránky, proč, a v čem je to pro klienta lepší. Čistý kód, vysoká rychlost, stabilita a hosting obvykle zdarma.',
}

const reasons = [
  {
    title: 'Rychlost',
    accent: 'var(--capri)',
    text: 'Pomalý web pozná běžný návštěvník během sekund a dost často odejde dřív, než se načte. I vyhledávače pomalé weby řadí níž.',
    detail: 'Weby stavím rychlé, lehké a hostuji je na síti Cloudflare, která je doručuje z nejbližších míst k návštěvníkovi. Cloudflare dnes patří mezi největší internetové infrastruktury na světě, využívají ji miliony webů, například firmy jako Shopify, IBM, L\'Oréal nebo Garmin - hlavně kvůli rychlosti, stabilitě a vyšší bezpečnosti. V praxi to znamená weby, které naskočí takřka okamžitě a nezpomalí se ani při vysoké návštěvnosti.',
  },
  {
    title: 'Nerozbijí se po aktualizaci',
    accent: 'var(--orchid)',
    text: 'Častá noční můra majitele webu: něco se samo zaktualizovalo a přestal fungovat formulář, zmizela sekce, web spadl.',
    detail: 'U webů s mnoha pluginy se to občas děje, protože každý plugin se vyvíjí zvlášť a navzájem si mohou přestat rozumět. Web, který není závislý na desítkách pluginů a automatických aktualizacích, má riziko podobných problémů výrazně menší a nehrozí, že se začne samovolně rozpadat za tři měsíce.',
  },
  {
    title: 'Každá změna se dá vrátit',
    accent: 'var(--lime)',
    text: 'Celý web je verzovaný, každá úprava je uložená a očíslovaná.',
    detail: 'Pokud se něco pokazí, vrátím web do stavu, ve kterém fungoval. Nevzniká situace „bylo to dobré, ale už to nejde vrátit".',
  },
  {
    title: 'Minimální náklady na provoz',
    accent: 'var(--marigold)',
    text: 'Hosting na Cloudflare je u většiny webů zdarma.',
    detail: 'Pravidelný náklad je obvykle pouze doména, řádově stovky korun ročně, platíte ji přímo registrátorovi, ne mně. Pro srovnání: u běžných webů bývají průběžné náklady na hosting, pluginy nebo technickou správu. Weby, které stavím, fungují jednodušeji.',
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
            Webové stránky se dají postavit mnoha způsoby a pomocí spousty pluginů. Na první pohled to funguje, ale v pozadí to často nese problémy, se kterými se pak vlastník webu roky potýká.
          </p>
        </div>
      </div>

      {/* Důvody */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(60px,9vw,120px) 0' }}>
        <div className="inner">
          {reasons.map((r, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', padding: 'clamp(48px,6vw,80px) 0', borderBottom: '1px solid var(--line)', alignItems: 'start' }}>
              <div>
                <div style={{ width: 3, height: 32, background: r.accent, marginBottom: 20, borderRadius: 2 }} />
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 800, letterSpacing: '-.04em', color: 'var(--ink)', margin: '0 0 16px' }}>{r.title}</h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', margin: 0 }}>{r.text}</p>
              </div>
              <div>
                <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', margin: 0 }}>{r.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Srovnání */}
      <section style={{ background: 'var(--deep)', padding: 'clamp(60px,9vw,120px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.1),transparent 70%)', left: -100, top: -100, filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 24 }}>Kde jsem</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--cloud)', margin: '0 0 clamp(30px,4vw,52px)', maxWidth: 680 }}>
            Nejsem levná šablona ani velká agentura.
          </h2>
          <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(240,237,232,.5)', maxWidth: 640, margin: '0 0 20px' }}>
            Šablona je rychle hotová a levná, ale vypadá jako šablona. Neudrží krok s tím, co vaše podnikání potřebuje. Technicky bývá pomalá a nestabilní.
          </p>
          <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', maxWidth: 640, margin: '0 0 36px' }}>
            Agentura má svou cenu z velké části složenou z režie - tým, kanceláře, manažeři, kteří přeposílají vaše zprávy dál.
          </p>
          <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(240,237,232,.5)', maxWidth: 640, margin: '0 0 36px' }}>
            Já pracuji napřímo, od návrhu po realizaci komunikujete přímo se mnou. Díky tomu se pohybuji mezi levnou šablonou a velkou agenturou.
          </p>
          <Link href="/nabidka" className="btn btn-lt reveal d4">Podívat se na nabídku →</Link>
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
    { q: 'Kolik to bude stát?', a: 'Pevný ceník neuvádím, každý web je jiný. Pohybuji se nejčastěji mezi 12 000 a 60 000 Kč. Konkrétní pevnou částku dostanete vždy před zahájením práce, jakmile si e-mailem ujasníme rozsah.' },
    { q: 'Jak dlouho tvorba trvá?', a: 'Závisí na rozsahu webu a na tom, jak rychle se sejdou podklady (texty, fotky). Pevné termíny naslepo neslibuji. Po celou dobu ale zasílám průběžně rozpracovanou verzi, takže přesně víte, v jaké fázi web je. Pokud vás tlačí čas, sdělte mi to hned na začátku a řekneme si, jestli je reálné to stihnout.' },
    { q: 'Co musím připravit já?', a: 'Budu od Vás potřebovat logo (pokud ho máte), fotky a informace o tom, co děláte, jaké informace chcete na webu určitě mít. Podklady nemusí být perfektní, texty za Vás ráda napíšu a fotografie upravím. Proces od přípravy až po spuštění podrobně popisuji na stránce Jak pracuji.' },
    { q: 'Budu si web moct sám upravovat?', a: 'Web není postavený na systému, kde si sami klikáte do administrace, protože právě ta administrace bývá nejčastějším zdrojem problémů. Kdykoliv budete potřebovat, můžete se na mne obrátit. Menší změny (text, fotka, údaj) za vás udělám rychle za hodinovou sazbu. Na větších úpravách se snadno domluvíme. Nejste na mně trvale závislí, můžete kdykoliv přejít jinam, web je váš.' },
    { q: 'Co když budete nedostupná nebo s vámi přestaneme spolupracovat?', a: 'Hotový web je váš včetně všech zdrojových souborů. Není zamčený u mě. Když budete chtít pokračovat s někým jiným, předám vše potřebné.' },
    { q: 'Děláte e-shopy?', a: 'Nedělám. Soustředím se na prezentační weby - webové vizitky, firemní weby, landing pages (prodejní stránka). E-shop je jiná disciplína (sklady, platby, objednávky) a dělat ho napůl by nikomu neposloužilo. Když potřebujete e-shop, ráda doporučím.' },
    { q: 'Kde bude web hostovaný a kolik to stojí?', a: 'Na síti Cloudflare, provoz je obvykle zdarma. Platíte jen za doménu, řádově stovky korun ročně, přímo registrátorovi.' },
    { q: 'Co Google a vyhledávání?', a: 'Každý web dostane základní nastavení pro vyhledávače - správné titulky, popisy a strukturu. Přihlásím vás do Google Search Console, aby vás Google našel a zobrazoval. Negarantuji první místo ve vyhledávání, to nikdo seriózní slíbit nemůže. Garantuji, že web bude technicky připravený, aby vás Google našel.' },
    { q: 'Můžu mít web ve více jazycích?', a: 'Ano. Sdělíte mi to na začátku. Překlad buď dodáte vy, nebo ho zajistím za příplatek.' },
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
