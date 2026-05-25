import type { Metadata } from 'next'
import Link from 'next/link'
import KalkulackaWrapper from '@/components/KalkulackaWrapper'

export const metadata: Metadata = {
  title: 'Kalkulačka hodinové sazby OSVČ 2026. Zdarma, bez registrace',
  description: 'Zjistěte svoji reálnou hodinovou sazbu jako OSVČ. Kalkulačka zohledňuje daně, odvody, výdaje i skutečně fakturovatelný čas. Výsledek za 3 minuty, zdarma.',
  keywords: [
    'kalkulačka hodinové sazby OSVČ',
    'hodinová sazba živnostník',
    'jak stanovit hodinovou sazbu',
    'kalkulačka sazby freelancer',
    'hodinová sazba OSVČ výpočet',
    'minimální hodinová sazba OSVČ',
    'kolik na hodinu',
    'jak vypočítat hodinovou sazbu',
  ],
  openGraph: {
    title: 'Kalkulačka hodinové sazby OSVČ - VERNO',
    description: 'Zjistěte svou reálnou hodinovou sazbu. Zohledňuje daně, odvody i skutečně fakturovatelný čas.',
    url: 'https://www.verno.cz/kalkulacka',
  },
  alternates: {
    canonical: 'https://www.verno.cz/kalkulacka',
  },
}

const faqItems = [
  {
    q: 'Co je minimální hodinová sazba a proč nestačí?',
    a: 'Minimální sazba pokrývá přesně to, co potřebujete k životu a podnikání, bez rezerv. Nestačí, protože nepočítá s výpadkem zakázek ani dalším rozvojem. Pracovat na minimu může být dlouhodobě neudržitelné.',
  },
  {
    q: 'Jak kalkulačka počítá daně a odvody?',
    a: 'Kalkulačka iterativně počítá reálné odvody na zdravotní a sociální pojištění a daň z příjmu podle zvoleného daňového režimu. Paušální daň, výdajový paušál nebo skutečné výdaje. Zohledňí i základní slevy na dani nebo minimální zálohy.',
  },
  {
    q: 'Co je fakturovatelnost a jak ji odhadnout?',
    a: 'Je to čas, který reálně proměníte ve faktury. Neplacený zbytek tvoří administrativa, provoz a schůzky. U začínajících OSVČ tvoří placená práce průměrně 55–70 % času, u zavedených freelancerů s etablovanou klientelou je to 75–85 %.',
  },
  {
    q: 'Proč je zdravá sazba o 30 % vyšší než minimální?',
    a: 'Těchto 30 % navíc tvoří Vaši bezpečnou rezervu na neplánované volno, pomalejší měsíce nebo investice do rozvoje. Minimální sazba Vás udrží na nule, ta zdravá Vám zajistí dlouhodobou stabilitu a klidné podnikání.',
  },
  {
    q: 'Liší se výpočet u paušálního a skutečného režimu?',
    a: 'Ano, velmi výrazně. V paušálním režimu platíte státu pevnou měsíční částku bez ohledu na příjmy. U skutečných výdajů a výdajových paušálů procentem kalkulačka automaticky přepočítává daňovou složku podle toho, jak se mění Váš poměr příjmů a nákladů.',
  },
  {
    q: 'Jak mohu s výsledky z kalkulačky pracovat?',
    a: 'Berte je jako orientační odrazový můstek pro své byznysové plánování. Kalkulačka Vám během chvíle ukáže matematickou realitu roku 2026. Můžete si libovolně měnit dny volna, zkoušet různé sazby a ladit své podnikání k dokonalosti. Výstupy mají informativní charakter a nenahrazují daňové či účetní poradenství.',
  },
]

export default function KalkulackaPage() {
  return (
    <>
      {/* JSON-LD: WebApplication + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Kalkulačka hodinové sazby OSVČ — VERNO',
              url: 'https://www.verno.cz/kalkulacka',
              description: 'Bezplatná kalkulačka pro výpočet reálné hodinové sazby OSVČ v České republice. Zohledňuje daně, odvody, výdaje a fakturovatelný čas.',
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'CZK' },
              author: { '@type': 'Person', name: 'Hana Fraňková', url: 'https://www.verno.cz' },
              inLanguage: 'cs',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqItems.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]),
        }}
      />

      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero-orb" style={{ background: 'radial-gradient(circle,rgba(0,154,196,.12),transparent 70%)' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 20 }}>Nástroj zdarma</p>
          <h1 className="page-hero-title">
            Kalkulačka<br />hodinové sazby<br />OSVČ
          </h1>
          <p className="page-hero-sub">
            Zjistěte, za kolik skutečně pracovat — s daněmi, odvody a reálným časem. Výsledek za pár minut, zdarma.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(40px,6vw,80px) 0 0' }}>
        <KalkulackaWrapper />
      </section>

      {/* Jak kalkulačku použít — SEO obsah */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(60px,8vw,100px) 0' }}>
        <div className="inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,6vw,80px)', alignItems: 'start' }} className="calc-info-grid">
            <div>
              <p className="eyebrow reveal" style={{ marginBottom: 20 }}>Jak na to</p>
              <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--ink)', margin: '0 0 20px' }}>
                Proč nestačí odhadnout sazbu od oka
              </h2>
              <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', margin: '0 0 16px' }}>
                Většina živnostníků si sazbu nastavuje intuitivně — podívá se, co účtují ostatní, a přizpůsobí se. Problém je, že tím kopíruje cizí náklady, cizí životní standard a cizí daňový režim.
              </p>
              <p className="reveal d3" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'var(--ink-s)', margin: 0 }}>
                Reálná sazba vychází z toho, co vás stojí život a podnikání, kolik hodin skutečně fakturujete (ne kolik pracujete), a kolik odvedete státu. Kalkulačka tohle celé propočítá iterativně — výsledek odpovídá vaší konkrétní situaci, ne průměru.
              </p>
            </div>
            <div className="reveal d2">
              {[
                { n: '01', title: 'Vyplňte výdaje', desc: 'Osobní náklady na živobytí a provozní náklady podnikání. Čím přesnější čísla, tím přesnější výsledek.' },
                { n: '02', title: 'Nastavte čas', desc: 'Kolik dní a hodin pracujete, kolik berete dovolené a kolik procent času skutečně fakturujete.' },
                { n: '03', title: 'Zvolte daňový režim', desc: 'Paušální daň, výdajový paušál nebo skutečné výdaje — kalkulačka přepočítá odvody pro každý případ.' },
                { n: '04', title: 'Přečtěte výsledek', desc: 'Dostanete tři sazby: minimální, zdravou a komfortní — s vysvětlením, co každá znamená.' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '.14em', color: 'var(--orchid)', flexShrink: 0, paddingTop: 3 }}>{s.n}</span>
                  <div>
                    <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--ink)', margin: '0 0 4px', letterSpacing: '-.01em' }}>{s.title}</p>
                    <p style={{ fontSize: 13.5, lineHeight: 1.72, color: 'var(--ink-s)', margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cloud)', borderTop: '1px solid var(--line)', padding: 'clamp(60px,8vw,100px) 0' }}>
        <div className="inner">
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>Časté dotazy</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--ink)', margin: '0 0 clamp(36px,5vw,52px)', maxWidth: 560 }}>
            Co lidé nejčastěji řeší.
          </h2>
          <div>
            {faqItems.map((faq, i) => (
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
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--deep)', padding: 'clamp(72px,10vw,120px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,154,196,.1),transparent 70%)', left: -80, top: -80, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="reveal" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3.6rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1, color: 'var(--cloud)', margin: '0 0 18px', maxWidth: 600 }}>
            Víte, co si účtovat. Teď potřebujete web, který to zákazníkům řekne.
          </h2>
          <p className="reveal d1" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'rgba(240,237,232,.5)', margin: '0 0 32px', maxWidth: 480 }}>
            Podívejte se, co nabízím — a napište mi, jestli vás to zaujme.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/nabidka" className="btn btn-lt reveal d2">Podívat se na nabídku →</Link>
            <Link href="/kontakt" className="btn btn-lt reveal d3" style={{ background: 'transparent', border: '1.5px solid rgba(240,237,232,.2)', color: 'rgba(240,237,232,.7)' }}>Napsat mi</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:720px){
          .calc-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
