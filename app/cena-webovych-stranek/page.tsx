import type { Metadata } from 'next'

const canonical = 'https://spustweb.cz/cena-webovych-stranek/'

export const metadata: Metadata = {
  title: 'Cena webových stránek: prezentační web za 8 900 Kč',
  description: 'Cena prezentačního webu je 8 900 Kč bez DPH. V ceně je návrh, zpracování, mobilní verze, základní SEO, měření a spuštění na doméně.',
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: canonical,
    title: 'Cena webových stránek: prezentační web za 8 900 Kč | SpustWeb.cz',
    description: 'Prezentační web za 8 900 Kč bez DPH. Návrh, mobilní verze, základní SEO, měření a spuštění.',
    images: [{ url: '/og-verno-2.jpg', width: 1200, height: 630, alt: 'SpustWeb.cz – cena tvorby webových stránek' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cena webových stránek: prezentační web za 8 900 Kč | SpustWeb.cz',
    description: 'Prezentační web za 8 900 Kč bez DPH. Návrh, mobilní verze, základní SEO, měření a spuštění.',
    images: ['/og-verno-2.jpg'],
  },
}

const included = [
  ['01', 'Návrh a struktura', 'Rozložení a obsah podle konkrétní firmy.'],
  ['02', 'Zpracování webu', 'Hotový funkční web, ne pouze grafický návrh.'],
  ['03', 'Mobilní verze', 'Plnohodnotné zobrazení na telefonu, tabletu i počítači.'],
  ['04', 'SEO a měření', 'Metadata, sitemap, Search Console a základní analytika.'],
  ['05', 'Spuštění', 'Nasazení na doménu a základní hosting.'],
]

const faqs = [
  ['Kolik stojí vytvoření webových stránek?', 'Běžný prezentační web stojí 8 900 Kč bez DPH. Cena zahrnuje návrh, zpracování, mobilní verzi, základní SEO, měření a spuštění.'],
  ['Je 8 900 Kč konečná cena?', 'Ano pro běžný prezentační web v domluveném rozsahu. Pokud zadání vyžaduje něco navíc, cenu znáte před zahájením práce.'],
  ['Co se platí po spuštění?', 'Za správu webu není povinný měsíční paušál. Základní hosting je v ceně. Samostatně se hradí vlastní doména podle registrátora.'],
  ['Jak probíhá platba?', '50 % před zahájením práce a 50 % po dokončení před spuštěním webu.'],
]

export default function WebsitePricePage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonical}#page`,
      url: canonical,
      name: 'Cena webových stránek: prezentační web za 8 900 Kč',
      description: 'Cena tvorby prezentačního webu a přehled toho, co je součástí služby.',
      inLanguage: 'cs',
      isPartOf: { '@id': 'https://spustweb.cz/#website' },
      about: { '@id': 'https://spustweb.cz/#business' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: 'Tvorba prezentačního webu',
      serviceType: 'Tvorba webových stránek',
      provider: { '@id': 'https://spustweb.cz/#business' },
      areaServed: { '@type': 'Country', name: 'Česká republika' },
      offers: {
        '@type': 'Offer',
        price: '8900',
        priceCurrency: 'CZK',
        url: canonical,
        description: 'Prezentační web za 8 900 Kč bez DPH.',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'SpustWeb.cz', item: 'https://spustweb.cz/' },
        { '@type': 'ListItem', position: 2, name: 'Cena webových stránek', item: canonical },
      ],
    },
  ]

  return (
    <div className="pricePage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="priceHero" aria-labelledby="price-title">
        <div className="priceWrap priceHeroGrid">
          <div>
            <p className="priceLabel">SpustWeb.cz · cena webových stránek</p>
            <h1 id="price-title">Prezentační web za 8 900 Kč.</h1>
            <p className="priceLead">Pro živnostníka nebo malou firmu. Návrh, zpracování, mobilní verze, základní SEO a spuštění.</p>
          </div>
          <div className="priceHeroSide">
            <p className="priceAmount">8 900 Kč <span>bez DPH</span></p>
            <div className="priceActions">
              <a className="pricePrimary" href="tel:+420705911941">Zavolat</a>
              <a className="priceSecondary" href="mailto:kontakt@spustweb.cz">Napsat e-mail</a>
            </div>
          </div>
        </div>
        <div className="priceWrap priceFacts">
          <span><strong>1–2 týdny</strong> obvykle</span>
          <span><strong>0 Kč / měsíc</strong> za správu</span>
          <span><strong>Hosting</strong> v ceně</span>
          <span><strong>50 / 50</strong> platba</span>
        </div>
      </section>

      <section className="priceSection" id="v-cene">
        <div className="priceWrap priceHead">
          <p className="priceLabel">V ceně</p>
          <h2>Co za 8 900 Kč dostanete.</h2>
        </div>
        <div className="priceWrap priceIncluded">
          {included.map(([num, title, text]) => (
            <article className="priceIncludedRow" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="priceSection priceSoft">
        <div className="priceWrap priceTwoCol">
          <div>
            <p className="priceLabel">Po spuštění</p>
            <h2>Bez povinného paušálu.</h2>
          </div>
          <div className="pricePlainList">
            <div><strong>Správa webu</strong><span>0 Kč / měsíc</span></div>
            <div><strong>Základní hosting</strong><span>v ceně</span></div>
            <div><strong>Vlastní doména</strong><span>podle registrátora</span></div>
            <div><strong>Další úpravy</strong><span>jen pokud je objednáte</span></div>
          </div>
        </div>
      </section>

      <section className="priceSection">
        <div className="priceWrap priceTwoCol">
          <div>
            <p className="priceLabel">Rozsah</p>
            <h2>Kdy je potřeba jiná cena.</h2>
          </div>
          <div className="priceCopy">
            <p>Pokud má web kromě prezentace firmy řešit například e-shop, rezervace, klientskou zónu nebo jinou webovou aplikaci, jde o jiný rozsah zakázky.</p>
            <p><strong>Cenu vždy znáte předem.</strong></p>
          </div>
        </div>
      </section>

      <section className="priceSection priceLinksSection">
        <div className="priceWrap priceSectionLinks">
          <a href="/#reference">
            <span>Skutečné projekty</span>
            <strong>Ukázky realizací</strong>
            <i aria-hidden="true">→</i>
          </a>
          <a href="/#ukazky">
            <span>Návrhové koncepty</span>
            <strong>Ukázkové weby</strong>
            <i aria-hidden="true">→</i>
          </a>
        </div>
      </section>

      <section className="priceSection">
        <div className="priceWrap priceFaqGrid">
          <div>
            <p className="priceLabel">Časté otázky</p>
            <h2>Jen to podstatné.</h2>
          </div>
          <div className="priceFaq">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="priceContact">
        <div className="priceWrap priceContactGrid">
          <div>
            <p className="priceLabel priceLabelDark">Kontakt</p>
            <h2>Potřebujete nový web?</h2>
          </div>
          <div className="priceContactActions">
            <a href="tel:+420705911941"><span>Zavolat</span><strong>+420 705 911 941</strong></a>
            <a href="mailto:kontakt@spustweb.cz"><span>Napsat e-mail</span><strong>kontakt@spustweb.cz</strong></a>
          </div>
        </div>
      </section>

      <style>{`
        .pricePage{--ink:#171717;--muted:#70706b;--line:#deded7;--soft:#f5f5f1;--acid:#efff63;--paper:#fff;background:var(--paper);color:var(--ink);font-family:Arial,Helvetica,sans-serif}
        .pricePage *{box-sizing:border-box}.pricePage a{color:inherit;text-decoration:none}.priceWrap{width:min(1040px,calc(100% - 44px));margin:0 auto}
        .priceHero{padding:112px 0 0}.priceHeroGrid{display:grid;grid-template-columns:1.15fr .65fr;gap:72px;align-items:end;padding-bottom:34px}.priceLabel{margin:0 0 14px;font-size:9px;line-height:1.2;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:700}.priceHero h1,.pricePage h2{margin:0;font-weight:500;letter-spacing:-.05em}.priceHero h1{max-width:650px;font-size:clamp(3rem,5.8vw,5.3rem);line-height:.92}.priceLead{max-width:560px;margin:20px 0 0;font-size:14px;line-height:1.6;color:#4f4f4a}.priceHeroSide{border-top:1px solid var(--ink);padding-top:17px}.priceAmount{margin:0 0 20px;font-size:clamp(2.2rem,4vw,3.7rem);letter-spacing:-.05em;line-height:.95}.priceAmount span{display:block;margin-top:8px;font-size:10px;letter-spacing:.04em;color:var(--muted)}.priceActions{display:flex;gap:8px;flex-wrap:wrap}.priceActions a{min-height:40px;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;border:1px solid var(--ink)}.pricePrimary{background:var(--acid)}.priceSecondary{background:#fff}.priceFacts{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.priceFacts span{padding:16px 18px 16px 0;font-size:10px;color:var(--muted);border-right:1px solid var(--line)}.priceFacts span+span{padding-left:18px}.priceFacts span:last-child{border-right:0}.priceFacts strong{display:block;margin-bottom:4px;color:var(--ink);font-size:11px}
        .priceSection{padding:76px 0}.priceHead{display:grid;grid-template-columns:170px 1fr;gap:28px;align-items:start;margin-bottom:26px}.priceHead h2,.priceTwoCol h2,.priceFaqGrid h2{font-size:clamp(2.5rem,4.5vw,4.2rem);line-height:.94;max-width:700px}.priceIncluded{border-top:1px solid var(--ink)}.priceIncludedRow{display:grid;grid-template-columns:50px minmax(180px,.72fr) 1.3fr;gap:20px;align-items:start;padding:18px 0;border-bottom:1px solid var(--line)}.priceIncludedRow>span{font-size:9px;color:var(--muted)}.priceIncludedRow h3{margin:0;font-size:14px;font-weight:600}.priceIncludedRow p{margin:0;font-size:12px;line-height:1.55;color:#55554f}.priceSoft,.priceLinksSection{background:var(--soft)}.priceTwoCol{display:grid;grid-template-columns:.8fr 1.2fr;gap:78px;align-items:start}.pricePlainList{border-top:1px solid var(--ink)}.pricePlainList div{display:grid;grid-template-columns:1fr auto;gap:18px;padding:16px 0;border-bottom:1px solid var(--line);font-size:12px}.pricePlainList strong{font-weight:600}.pricePlainList span{color:#4f4f4a;text-align:right}.priceCopy{max-width:600px;padding-top:5px}.priceCopy p{margin:0 0 14px;font-size:14px;line-height:1.65;color:#4f4f4a}.priceCopy strong{color:var(--ink)}.priceSectionLinks{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--ink);border-bottom:1px solid var(--ink)}.priceSectionLinks a{position:relative;min-height:132px;padding:26px 54px 26px 0;display:flex;flex-direction:column;justify-content:flex-end;border-right:1px solid var(--line)}.priceSectionLinks a+a{padding-left:30px;border-right:0}.priceSectionLinks span{font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:9px}.priceSectionLinks strong{font-size:clamp(1.65rem,3vw,2.5rem);font-weight:500;letter-spacing:-.04em}.priceSectionLinks i{position:absolute;right:20px;bottom:30px;font-style:normal;font-size:18px}.priceFaqGrid{display:grid;grid-template-columns:.7fr 1.3fr;gap:78px}.priceFaq{border-top:1px solid var(--ink)}.priceFaq details{border-bottom:1px solid var(--line)}.priceFaq summary{list-style:none;cursor:pointer;padding:16px 28px 16px 0;font-size:12px;font-weight:600;position:relative}.priceFaq summary::-webkit-details-marker{display:none}.priceFaq summary:after{content:'+';position:absolute;right:2px;top:15px}.priceFaq details[open] summary:after{content:'−'}.priceFaq p{margin:0;padding:0 28px 16px 0;font-size:12px;line-height:1.6;color:#55554f;max-width:680px}.priceContact{background:#171717;color:#fff;padding:68px 0}.priceContactGrid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:end}.priceLabelDark{color:#8f8f89}.priceContact h2{color:#fff;font-size:clamp(2.7rem,5vw,4.7rem);line-height:.93}.priceContactActions{border-top:1px solid #4a4a46}.priceContactActions a{display:grid;grid-template-columns:1fr auto;gap:20px;padding:17px 0;border-bottom:1px solid #353532;font-size:11px}.priceContactActions span{color:#a8a8a2}.priceContactActions strong{font-weight:600}
        @media(max-width:760px){.priceWrap{width:min(100% - 30px,1040px)}.priceHero{padding-top:94px}.priceHeroGrid{grid-template-columns:1fr;gap:30px;padding-bottom:24px}.priceHero h1{font-size:clamp(3.1rem,15vw,4.6rem)}.priceHeroSide{max-width:none}.priceFacts{grid-template-columns:1fr 1fr}.priceFacts span:nth-child(2){border-right:0}.priceFacts span:nth-child(n+3){border-top:1px solid var(--line)}.priceFacts span:nth-child(3){padding-left:0}.priceSection{padding:54px 0}.priceHead,.priceTwoCol,.priceFaqGrid,.priceContactGrid{grid-template-columns:1fr;gap:24px}.priceHead{margin-bottom:22px}.priceHead h2,.priceTwoCol h2,.priceFaqGrid h2{font-size:clamp(2.6rem,12vw,3.8rem)}.priceIncludedRow{grid-template-columns:34px 1fr;gap:8px 14px}.priceIncludedRow p{grid-column:2}.priceSectionLinks{grid-template-columns:1fr}.priceSectionLinks a,.priceSectionLinks a+a{min-height:112px;padding:22px 48px 22px 0;border-right:0;border-bottom:1px solid var(--line)}.priceSectionLinks a:last-child{border-bottom:0}.priceSectionLinks i{right:8px;bottom:26px}.priceContactActions{margin-top:4px}.priceActions a{flex:1}.pricePlainList div{grid-template-columns:1fr auto}}
      `}</style>
    </div>
  )
}
