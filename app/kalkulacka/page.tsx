import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const KalkulackaOSVC = dynamic(() => import('@/components/KalkulackaOSVC'), { ssr: false })

export const metadata: Metadata = {
  title: 'Kalkulačka hodinové sazby OSVČ 2026 — zdarma',
  description: 'Zjistěte, jaká by měla být vaše reálná hodinová sazba jako OSVČ. Bezplatná kalkulačka zohledňuje osobní výdaje, náklady podnikání, daně, odvody a váš pracovní fond pro rok 2026.',
  keywords: [
    'kalkulačka hodinové sazby OSVČ',
    'hodinová sazba OSVČ 2026',
    'kalkulačka sazby živnostník',
    'jak stanovit hodinovou sazbu',
    'výpočet hodinové sazby OSVČ',
    'minimální hodinová sazba OSVČ',
    'sazba freelancer Česko',
  ],
  openGraph: {
    title: 'Kalkulačka hodinové sazby OSVČ 2026 — VERNO',
    description: 'Bezplatná kalkulačka hodinové sazby pro živnostníky. Zadejte výdaje a čas — systém dopočítá daně i odvody a ukáže vám tři pásma reálné sazby.',
    url: 'https://www.verno.cz/kalkulacka',
    images: [{ url: '/og-verno.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://www.verno.cz/kalkulacka' },
}

const faqItems = [
  {
    q: 'Co je minimální hodinová sazba a proč nestačí?',
    a: 'Minimální sazba je nejnižší cena, za kterou se vám podnikání ještě ekonomicky vyplatí — pokryje osobní náklady, provoz firmy, daně a odvody. Nestačí proto, že nepočítá s výpadky zakázek, nemocí, investicemi do rozvoje ani s tím, že jeden měsíc bez práce by vás dostal do mínusu. Proto kalkulačka ukazuje i doporučenou sazbu s 30% rezervou.',
  },
  {
    q: 'Jak zahrnout daně a odvody do hodinové sazby OSVČ?',
    a: 'Kalkulačka to dělá automaticky. Vy zadáte daňový režim (výdajový paušál, skutečné výdaje nebo paušální daň), svoji situaci (děti, manžel/ka, invalidita) a systém iterativním výpočtem dopočítá, kolik na daních a odvodech zaplatíte při dané výši příjmů. Výsledná sazba tuto částku obsahuje.',
  },
  {
    q: 'Co je fakturovatelnost a jak ji správně odhadnout?',
    a: 'Fakturovatelnost je procento vaší pracovní doby, za které vám klient skutečně zaplatí. Zbytek tvoří administrativa, cesty, e-maily, příprava nabídek nebo prostoje. U řemeslníků bývá kolem 70 %, u konzultantů a IT freelancerů spíše 55–65 %. Přecenění fakturovatelnosti je jednou z nejčastějších příčin podhodnocené sazby.',
  },
  {
    q: 'Proč je doporučená sazba o 30 % vyšší než minimální?',
    a: 'Protože v praxi nikdy nefakturujete každý měsíc stejně. 30% rezerva pokryje slabší měsíce, krátkou nemoc, čas na hledání nových zakázek nebo neočekávané výdaje — aniž byste se dostali do existenčních problémů. Podnikání bez rezervy je jako jízda s prázdnou nádrží.',
  },
  {
    q: 'Liší se výpočet u paušálního a skutečného daňového režimu?',
    a: 'Ano, výrazně. U paušálního režimu (daně) platíte fixní měsíční zálohu (9 984 Kč v 1. pásmu pro rok 2026) bez ohledu na skutečný zisk. U výdajového paušálu nebo skutečných výdajů kalkulačka odvody iterativně dopočítá na základě odhadnutého příjmu. Každý režim je výhodný pro jiný typ podnikatele.',
  },
  {
    q: 'Pro koho je kalkulačka určena?',
    a: 'Pro každého živnostníka nebo OSVČ v České republice, kdo si chce ověřit, zda jeho sazba dává ekonomicky smysl. Hodí se pro řemeslníky, konzultanty, freelancery, terapeuty, fotografy, grafiky i kohokoliv jiného, kdo pracuje na IČO a účtuje za čas.',
  },
  {
    q: 'Je výsledek kalkulačky závazný?',
    a: 'Ne. Kalkulačka je orientační ekonomický model — pracuje se standardními situacemi a veřejně dostupnými legislativními parametry pro rok 2026. Nezohledňuje DPH, složitější daňové situace ani specifická rizika vašeho oboru. Pro individuální daňové plánování doporučujeme konzultaci s certifikovaným daňovým poradcem.',
  },
]

export default function KalkulackaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.verno.cz/kalkulacka#app',
        name: 'Kalkulačka hodinové sazby OSVČ 2026',
        url: 'https://www.verno.cz/kalkulacka',
        description: 'Bezplatná kalkulačka hodinové sazby pro živnostníky a OSVČ v České republice. Zohledňuje osobní výdaje, náklady podnikání, daně a odvody 2026.',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'CZK' },
        creator: {
          '@type': 'Person',
          name: 'Hana Fraňková',
          url: 'https://www.verno.cz',
        },
        inLanguage: 'cs',
        dateModified: '2026-01-01',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.verno.cz/kalkulacka#faq',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Domů', item: 'https://www.verno.cz' },
          { '@type': 'ListItem', position: 2, name: 'Kalkulačka hodinové sazby OSVČ', item: 'https://www.verno.cz/kalkulacka' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero-orb" style={{ background: 'radial-gradient(circle,rgba(168,125,184,.14),transparent 70%)' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 20 }}>Nástroj pro OSVČ · Model 2026</p>
          <h1 className="page-hero-title">Kalkulačka<br />hodinové sazby<br />OSVČ.</h1>
          <p className="page-hero-sub">
            Zadejte své výdaje a časové možnosti. Systém dopočítá daně i odvody a ukáže vám tři pásma reálné sazby — minimální, doporučenou a rozvojovou.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 28 }}>
            {[
              { icon: '⚡', text: 'Výpočet v reálném čase' },
              { icon: '📊', text: 'Legislativa 2026' },
              { icon: '🔒', text: 'Data zůstávají v prohlížeči' },
              { icon: '📄', text: 'Export do PDF' },
            ].map(f => (
              <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(240,237,232,.55)' }}>
                <span>{f.icon}</span><span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator */}
      <KalkulackaOSVC />

      {/* FAQ */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(60px,9vw,120px) 0' }}>
        <div className="inner">
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>Časté otázky</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--ink)', margin: '0 0 12px' }}>
            Co vás nejčastěji zajímá.
          </h2>
          <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'var(--ink-s)', maxWidth: 560, margin: '0 0 clamp(36px,5vw,56px)' }}>
            Kalkulačka je orientační nástroj. Tady jsou odpovědi na otázky, které se ke spočítané sazbě nejčastěji váží.
          </p>
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
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.12),transparent 70%)', right: -80, top: -80, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="reveal" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3.6rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1, color: 'var(--cloud)', margin: '0 0 18px', maxWidth: 600 }}>
            Potřebujete web, který odpovídající sazbu podpoří?
          </h2>
          <p className="reveal d1" style={{ fontSize: '1rem', lineHeight: 1.78, color: 'rgba(240,237,232,.5)', margin: '0 0 32px', maxWidth: 480 }}>
            Dobře postavený web pomáhá přitahovat zákazníky, kteří kvalitu uznávají. Napište mi pár vět o svém oboru.
          </p>
          <Link href="/kontakt" className="btn btn-lt reveal d2">Napsat mi →</Link>
        </div>
      </section>
    </>
  )
}
