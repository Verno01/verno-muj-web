import type { Metadata } from 'next'

const canonical = 'https://spustweb.cz/cena-webovych-stranek/'

export const metadata: Metadata = {
  title: 'Cena webových stránek: prezentační web za 8 900 Kč',
  description: 'Cena prezentačního webu je 8 900 Kč bez DPH. Web je navržený na míru konkrétní firmě, připravený pro mobil i Google a spuštěný na doméně.',
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: canonical,
    title: 'Cena webových stránek: prezentační web za 8 900 Kč | SpustWeb.cz',
    description: 'Plnohodnotný prezentační web za 8 900 Kč bez DPH. Na míru konkrétní firmě, bez povinného měsíčního paušálu.',
    images: [{ url: '/og-verno-2.jpg', width: 1200, height: 630, alt: 'SpustWeb.cz – cena tvorby webových stránek' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cena webových stránek: prezentační web za 8 900 Kč | SpustWeb.cz',
    description: 'Plnohodnotný prezentační web za 8 900 Kč bez DPH. Na míru konkrétní firmě, bez povinného měsíčního paušálu.',
    images: ['/og-verno-2.jpg'],
  },
}

const included = [
  ['01', 'Web podle vaší firmy', 'Strukturu, vzhled i obsah přizpůsobím tomu, co děláte, co nabízíte a co potřebují vaši zákazníci zjistit.'],
  ['02', 'Promyšlený celek', 'Nejde jen o hezký vzhled. Každou část skládám tak, aby web dával smysl, dobře se používal a vedl návštěvníka k tomu podstatnému.'],
  ['03', 'Telefon, tablet i počítač', 'Web bude plnohodnotně fungovat na běžných zařízeních a důležité informace zůstanou snadno dostupné i na mobilu.'],
  ['04', 'Připravený pro vyhledávače', 'Nastavím základní technické věci, aby Google mohl web správně najít a přečíst. Součástí je i měření návštěvnosti.'],
  ['05', 'Hotový a spuštěný web', 'Web celý vytvořím, připojím k vaší doméně a zprovozním. Nedostanete jen návrh, ale web připravený k používání.'],
]

const faqs = [
  ['Musím vědět, jak má web vypadat?', 'Ne. Stačí mi popsat, co děláte, jaké služby nabízíte a co je pro vaše zákazníky důležité. Strukturu a podobu webu navrhnu podle toho.'],
  ['Musím mít připravené texty?', 'Nemusíte mít hotové texty ani vymyšlenou strukturu. Řeknu vám přesně, jaké informace potřebuji, a pomohu je na webu uspořádat tak, aby dávaly smysl.'],
  ['Je to opravdu plnohodnotný web?', 'Ano. Jde o hotový firemní prezentační web přizpůsobený konkrétnímu podnikání, s mobilní verzí, kontaktními prvky, přípravou pro vyhledávače a spuštěním na vaší doméně.'],
  ['Jak rychle může být hotový?', 'Obvykle za 1 až 2 týdny od chvíle, kdy mám potřebné podklady. Přesný termín potvrdím před zahájením.'],
  ['Kolik stojí vytvoření webových stránek?', 'Běžný prezentační web stojí 8 900 Kč bez DPH, tedy 10 769 Kč včetně DPH.'],
  ['Co budu platit po spuštění?', 'Za správu webu není povinný měsíční paušál a základní provoz webu je v ceně. Samostatně se hradí vlastní webová adresa, například vasefirma.cz, podle ceníku registrátora.'],
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
      description: 'Cena tvorby plnohodnotného prezentačního webu na míru konkrétní firmě.',
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
        description: 'Plnohodnotný prezentační web za 8 900 Kč bez DPH.',
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
            <h1 id="price-title">Plnohodnotný web pro vaši firmu.</h1>
            <p className="priceLead">Navrhnu, vytvořím a spustím web přímo podle vašeho podnikání. Promyšlený do detailu, snadno použitelný a připravený dělat přesně to, co od firemního webu potřebujete.</p>
          </div>
          <div className="priceHeroSide">
            <p className="priceAmount">8 900 Kč <span>bez DPH</span></p>
            <p className="priceVat">10 769 Kč včetně DPH</p>
            <div className="priceActions">
              <a className="pricePrimary" href="tel:+420705911941">Zavolat</a>
              <a className="priceSecondary" href="mailto:kontakt@spustweb.cz">Napsat e-mail</a>
            </div>
          </div>
        </div>
        <div className="priceWrap priceFacts">
          <span><strong>1–2 týdny</strong> obvyklá doba tvorby</span>
          <span><strong>Bez složitostí</strong> technické věci řeším já</span>
          <span><strong>Na míru</strong> žádná univerzální šablona</span>
          <span><strong>Bez paušálu</strong> za správu neplatíte měsíčně</span>
        </div>
      </section>

      <section className="priceSection" id="v-cene">
        <div className="priceWrap priceHead">
          <p className="priceLabel">Výsledek</p>
          <h2>Ne jen web. Web, který sedí právě vaší firmě.</h2>
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

      <section className="priceSection priceEase">
        <div className="priceWrap priceTwoCol">
          <div>
            <p className="priceLabel">Jak to probíhá</p>
            <h2>Nemusíte vědět, jak se dělá web.</h2>
          </div>
          <div className="priceSteps">
            <div><span>01</span><strong>Řeknete mi, co děláte.</strong><p>Krátce probereme firmu, služby, zákazníky a co má web hlavně splnit.</p></div>
            <div><span>02</span><strong>Řeknu vám, co potřebuji.</strong><p>Dostanete konkrétní seznam podkladů. Nemusíte sami vymýšlet strukturu ani technické řešení.</p></div>
            <div><span>03</span><strong>Web připravím a spustím.</strong><p>Hotovou verzi projdeme, doladím potřebné detaily a web zprovozním na vaší doméně.</p></div>
          </div>
        </div>
      </section>

      <section className="priceSection priceSoft">
        <div className="priceWrap priceTwoCol">
          <div>
            <p className="priceLabel">Po spuštění</p>
            <h2>Bez povinného paušálu.</h2>
          </div>
          <div className="pricePlainList">
            <div><strong>Pravidelná správa</strong><span>0 Kč / měsíc</span></div>
            <div><strong>Základní provoz webu</strong><span>v ceně</span></div>
            <div><strong>Vlastní webová adresa (doména)</strong><span>podle registrátora</span></div>
            <div><strong>Budoucí změny</strong><span>platíte jen pokud je objednáte</span></div>
          </div>
        </div>
      </section>

      <section className="priceSection priceScope">
        <div className="priceWrap priceTwoCol">
          <div>
            <p className="priceLabel">Rozsah</p>
            <h2>Kdy už jde o jiný typ webu.</h2>
          </div>
          <div className="priceCopy">
            <p>Tato cena platí pro firemní prezentační web. Pokud má web řešit například e-shop, rozsáhlejší rezervační systém, klientskou zónu, složité propojení s dalšími službami nebo vlastní webovou aplikaci, jde už o jiný rozsah zakázky.</p>
            <p><strong>Pokud se vás to týká, řeknu to hned na začátku a cenu znáte předem.</strong></p>
          </div>
        </div>
      </section>

      <section className="priceSection priceLinksSection">
        <div className="priceWrap priceLinksIntro">
          <p className="priceLabel">Podívejte se na výsledek</p>
          <h2>Každý obor potřebuje jiný web.</h2>
          <p>Proto nevycházím z jednoho vzhledu pro všechny. Podívejte se na hotové projekty i ukázkové návrhy pro různé typy podnikání.</p>
        </div>
        <div className="priceWrap priceSectionLinks">
          <a href="/#reference">
            <span>Hotové projekty</span>
            <strong>Ukázky realizací</strong>
            <i aria-hidden="true">→</i>
          </a>
          <a href="/#ukazky">
            <span>Různé obory a směry</span>
            <strong>Ukázkové weby</strong>
            <i aria-hidden="true">→</i>
          </a>
        </div>
      </section>

      <section className="priceSection">
        <div className="priceWrap priceFaqGrid">
          <div>
            <p className="priceLabel">Časté otázky</p>
            <h2>Co potřebujete vědět předem.</h2>
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
            <h2>Stačí mi říct, co děláte.</h2>
            <p className="priceContactLead">Ozvete se přímo mně. Proberu s vámi, co web potřebuje, co mi máte dodat a jak bude celý postup vypadat.</p>
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
        .priceHero{padding:112px 0 0}.priceHeroGrid{display:grid;grid-template-columns:1.15fr .65fr;gap:72px;align-items:end;padding-bottom:34px}.priceLabel{margin:0 0 14px;font-size:9px;line-height:1.2;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:700}.priceHero h1,.pricePage h2{margin:0;font-weight:500;letter-spacing:-.05em}.priceHero h1{max-width:650px;font-size:clamp(3rem,5.2vw,4.8rem);line-height:.94}.priceLead{max-width:620px;margin:20px 0 0;font-size:14px;line-height:1.6;color:#4f4f4a}.priceHeroSide{border-top:1px solid var(--ink);padding-top:17px}.priceAmount{margin:0;font-size:clamp(2rem,3.2vw,3rem);letter-spacing:-.045em;line-height:.98}.priceAmount span{display:block;margin-top:7px;font-size:10px;letter-spacing:.04em;color:var(--muted)}.priceVat{margin:8px 0 20px;font-size:12px;color:#4f4f4a}.priceActions{display:flex;gap:8px;flex-wrap:wrap}.priceActions a{min-height:40px;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;border:1px solid var(--ink)}.pricePrimary{background:var(--acid)}.priceSecondary{background:#fff}.priceFacts{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.priceFacts span{padding:16px 18px 16px 0;font-size:10px;line-height:1.45;color:var(--muted);border-right:1px solid var(--line)}.priceFacts span+span{padding-left:18px}.priceFacts span:last-child{border-right:0}.priceFacts strong{display:block;margin-bottom:4px;color:var(--ink);font-size:11px}
        .priceSection{padding:70px 0}.priceHead{display:grid;grid-template-columns:170px 1fr;gap:28px;align-items:start;margin-bottom:26px}.priceHead h2,.priceTwoCol h2,.priceFaqGrid h2,.priceLinksIntro h2{font-size:clamp(2.4rem,4.2vw,3.9rem);line-height:.96;max-width:760px}.priceIncluded{border-top:1px solid var(--ink)}.priceIncludedRow{display:grid;grid-template-columns:50px minmax(210px,.85fr) 1.2fr;gap:20px;align-items:start;padding:18px 0;border-bottom:1px solid var(--line)}.priceIncludedRow>span{font-size:9px;color:var(--muted)}.priceIncludedRow h3{margin:0;font-size:14px;font-weight:600}.priceIncludedRow p{margin:0;font-size:12px;line-height:1.55;color:#55554f}.priceSoft,.priceLinksSection{background:var(--soft)}.priceEase{background:#171717;color:#fff}.priceEase .priceLabel{color:#92928c}.priceEase h2{color:#fff}.priceTwoCol{display:grid;grid-template-columns:.8fr 1.2fr;gap:78px;align-items:start}.priceSteps{border-top:1px solid #4a4a46}.priceSteps div{display:grid;grid-template-columns:40px 180px 1fr;gap:18px;padding:18px 0;border-bottom:1px solid #343431}.priceSteps span{font-size:9px;color:#8f8f89}.priceSteps strong{font-size:13px}.priceSteps p{margin:0;font-size:12px;line-height:1.55;color:#b8b8b2}.pricePlainList{border-top:1px solid var(--ink)}.pricePlainList div{display:grid;grid-template-columns:1fr auto;gap:22px;padding:16px 0;border-bottom:1px solid var(--line);font-size:12px}.pricePlainList strong{font-weight:600}.pricePlainList span{color:#4f4f4a;text-align:right}.priceScope{padding-top:62px;padding-bottom:62px}.priceCopy{max-width:620px;padding-top:5px}.priceCopy p{margin:0 0 14px;font-size:14px;line-height:1.65;color:#4f4f4a}.priceCopy strong{color:var(--ink)}.priceLinksIntro{display:grid;grid-template-columns:170px 1fr;gap:28px;margin-bottom:26px}.priceLinksIntro>p:last-child{grid-column:2;max-width:650px;margin:0;font-size:13px;line-height:1.6;color:#55554f}.priceSectionLinks{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--ink);border-bottom:1px solid var(--ink)}.priceSectionLinks a{position:relative;min-height:124px;padding:26px 54px 26px 0;display:flex;flex-direction:column;justify-content:flex-end;border-right:1px solid var(--line)}.priceSectionLinks a+a{padding-left:30px;border-right:0}.priceSectionLinks span{font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:8px}.priceSectionLinks strong{font-size:24px;font-weight:500;letter-spacing:-.03em}.priceSectionLinks i{position:absolute;right:20px;bottom:27px;font-style:normal;font-size:16px}.priceFaqGrid{display:grid;grid-template-columns:.7fr 1.3fr;gap:78px}.priceFaq{border-top:1px solid var(--ink)}.priceFaq details{border-bottom:1px solid var(--line)}.priceFaq summary{list-style:none;cursor:pointer;padding:16px 28px 16px 0;font-size:12px;font-weight:600;position:relative}.priceFaq summary::-webkit-details-marker{display:none}.priceFaq summary:after{content:'+';position:absolute;right:2px;top:15px}.priceFaq details[open] summary:after{content:'−'}.priceFaq p{margin:0;padding:0 28px 16px 0;font-size:12px;line-height:1.6;color:#55554f;max-width:680px}.priceContact{background:#171717;color:#fff;padding:68px 0}.priceContactGrid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:end}.priceLabelDark{color:#8f8f89}.priceContact h2{color:#fff;font-size:clamp(2.7rem,5vw,4.7rem);line-height:.93}.priceContactLead{max-width:520px;margin:18px 0 0;font-size:13px;line-height:1.6;color:#b8b8b2}.priceContactActions{border-top:1px solid #4a4a46}.priceContactActions a{display:grid;grid-template-columns:1fr auto;gap:20px;padding:17px 0;border-bottom:1px solid #353532;font-size:11px}.priceContactActions span{color:#a8a8a2}.priceContactActions strong{font-weight:600}
        @media(max-width:760px){.priceWrap{width:min(100% - 30px,1040px)}.priceHero{padding-top:94px}.priceHeroGrid{grid-template-columns:1fr;gap:28px;padding-bottom:24px}.priceHero h1{font-size:clamp(2.9rem,13vw,4.1rem)}.priceHeroSide{max-width:none}.priceFacts{grid-template-columns:1fr 1fr}.priceFacts span:nth-child(2){border-right:0}.priceFacts span:nth-child(n+3){border-top:1px solid var(--line)}.priceFacts span:nth-child(3){padding-left:0}.priceSection{padding:52px 0}.priceHead,.priceTwoCol,.priceFaqGrid,.priceContactGrid,.priceLinksIntro{grid-template-columns:1fr;gap:24px}.priceHead{margin-bottom:22px}.priceHead h2,.priceTwoCol h2,.priceFaqGrid h2,.priceLinksIntro h2{font-size:clamp(2.4rem,11vw,3.5rem)}.priceIncludedRow{grid-template-columns:34px 1fr;gap:8px 14px}.priceIncludedRow p{grid-column:2}.priceSteps div{grid-template-columns:30px 1fr;gap:8px 12px}.priceSteps p{grid-column:2}.priceLinksIntro>p:last-child{grid-column:1}.priceSectionLinks{grid-template-columns:1fr}.priceSectionLinks a,.priceSectionLinks a+a{min-height:108px;padding:22px 46px 22px 0;border-right:0;border-bottom:1px solid var(--line)}.priceSectionLinks a+a{padding-left:0;border-bottom:0}.priceSectionLinks i{right:2px;bottom:24px}.priceContactActions{margin-top:4px}.priceActions a{flex:1}.pricePlainList div{grid-template-columns:1fr;gap:5px}.pricePlainList span{text-align:left}.priceVat{margin-bottom:18px}}
      `}</style>
    </div>
  )
}
