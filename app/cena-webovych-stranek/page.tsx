import type { Metadata } from 'next'
import Link from 'next/link'

const canonical = 'https://spustweb.cz/cena-webovych-stranek/'

export const metadata: Metadata = {
  title: 'Cena webových stránek: prezentační web za 8 900 Kč',
  description: 'Cena prezentačního webu je 8 900 Kč bez DPH. Podívejte se, co je v ceně, co se platí zvlášť, kdy může být cena vyšší a jak probíhá platba.',
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: canonical,
    title: 'Cena webových stránek: prezentační web za 8 900 Kč | SpustWeb.cz',
    description: 'Pevná cena běžného prezentačního webu 8 900 Kč bez DPH. Návrh, mobilní verze, základní SEO, měření a spuštění.',
    images: [{ url: '/og-verno-2.jpg', width: 1200, height: 630, alt: 'SpustWeb.cz – cena tvorby webových stránek' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cena webových stránek: prezentační web za 8 900 Kč | SpustWeb.cz',
    description: 'Pevná cena běžného prezentačního webu 8 900 Kč bez DPH. Návrh, mobilní verze, základní SEO, měření a spuštění.',
    images: ['/og-verno-2.jpg'],
  },
}

const included = [
  ['01', 'Návrh struktury a vzhledu', 'Web nevzniká z hotové univerzální šablony. Strukturu a rozložení navrhnu podle konkrétní firmy, služeb a informací, které zákazník potřebuje najít.'],
  ['02', 'Zpracování webu', 'Připravím funkční web a dodané podklady uspořádám tak, aby byly srozumitelné a použitelné na počítači i telefonu.'],
  ['03', 'Mobilní verze a kontaktní prvky', 'Součástí je plnohodnotné responzivní zobrazení, klikací telefon, e-mail a další běžné kontaktní prvky podle potřeb webu.'],
  ['04', 'Základní SEO a měření', 'Metadata, sitemap, nastavení indexace, Search Console a základní měření návštěvnosti. Nejde jen o vzhled, ale i o technicky připravený web.'],
  ['05', 'Spuštění na doméně', 'Hotový web nasadím na vaši doménu. Základní hosting je součástí služby a za samotnou správu webu se neplatí pravidelný měsíční paušál.'],
]

const examples = [
  ['Rovino', 'Zemní a stavební práce', 'https://rovino.cz'],
  ['5class', 'Osobní doprava s řidičem', 'https://5class.cz'],
  ['Pětilistá', 'Péče o hrobová místa', 'https://www.petilista.cz'],
]

const faqs = [
  ['Kolik stojí vytvoření webových stránek?', 'Běžný prezentační web v domluveném rozsahu stojí 8 900 Kč bez DPH. Cena zahrnuje návrh, zpracování, mobilní verzi, základní SEO, měření a spuštění na doméně.'],
  ['Je 8 900 Kč pevná cena?', 'Ano, pokud jde o běžný prezentační web v domluveném rozsahu. Pokud zadání vyžaduje funkce nebo práci nad tento rámec, cenu řeknu předem ještě před zahájením.'],
  ['Kolik stojí provoz webu měsíčně?', 'Za správu webu se v základní službě neplatí měsíční paušál a základní hosting je součástí služby. Samostatně se hradí vlastní doména podle ceníku jejího registrátora.'],
  ['Co se platí zvlášť?', 'Vlastní doména. Zvlášť se řeší také funkce mimo běžný prezentační web, například e-shop, rezervační systém, klientská zóna nebo jiná webová aplikace.'],
  ['Může mít web více podstránek?', 'Ano. Cena není podmíněná tím, že web musí být jednostránkový. Strukturu navrhnu podle skutečného obsahu a toho, co má návštěvník na webu najít.'],
  ['Můžete předělat i starý web?', 'Ano. Může vzniknout úplně nový web jako náhrada starších stránek. Původní obsah se nepřebírá automaticky; nejdřív se posoudí, co má na novém webu smysl zachovat.'],
  ['Jak probíhá platba?', '50 % ceny se hradí před zahájením práce. Zbývajících 50 % po dokončení webu před jeho spuštěním.'],
  ['Jak dlouho tvorba webu trvá?', 'Obvykle 1 až 2 týdny od chvíle, kdy mám potřebné podklady. U konkrétní zakázky termín potvrdím podle rozsahu a aktuální kapacity.'],
]

export default function WebsitePricePage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonical}#page`,
      url: canonical,
      name: 'Cena webových stránek: prezentační web za 8 900 Kč',
      description: 'Přehled ceny tvorby prezentačního webu, rozsahu služby, provozních nákladů a podmínek.',
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
        description: 'Běžný prezentační web v domluveném rozsahu za 8 900 Kč bez DPH.',
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
            <h1 id="price-title">Kolik stojí web pro malou firmu.</h1>
            <p className="priceHeroLead">U běžného prezentačního webu nemusíte čekat na individuální kalkulaci jen proto, abyste zjistili základní cenu.</p>
          </div>
          <div className="priceHeroSide">
            <p className="priceAmount">8 900 Kč <span>bez DPH</span></p>
            <p>Pevná cena za běžný prezentační web v domluveném rozsahu.</p>
            <div className="priceActions">
              <a className="pricePrimary" href="tel:+420705911941">Zavolat</a>
              <a className="priceSecondary" href="#v-cene">Co je v ceně</a>
            </div>
          </div>
        </div>
        <div className="priceWrap priceFacts" aria-label="Základní informace o ceně">
          <span><strong>8 900 Kč</strong> pevná základní cena</span>
          <span><strong>1–2 týdny</strong> obvyklá doba tvorby</span>
          <span><strong>0 Kč / měsíc</strong> za správu webu</span>
          <span><strong>Hosting</strong> součástí služby</span>
        </div>
      </section>

      <section className="priceSection" id="v-cene">
        <div className="priceWrap priceIntroGrid">
          <div>
            <p className="priceLabel">Rozsah služby</p>
            <h2>Za 8 900 Kč dostanete hotový web, ne jen návrh.</h2>
          </div>
          <p className="priceIntroText">Cena je nastavená pro běžnou firemní prezentaci: web, který vysvětlí služby, ukáže důležité informace a usnadní zákazníkovi kontakt. Rozsah se přizpůsobí konkrétnímu podnikání.</p>
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
        <div className="priceWrap priceSplit">
          <div className="priceSplitHead">
            <p className="priceLabel">Co znamená prezentační web</p>
            <h2>Rozsah podle firmy. Ne podle počtu políček v ceníku.</h2>
          </div>
          <div className="priceDefinition">
            <p>Běžný prezentační web může mít jednu stránku i několik základních podstránek. Důležité je, aby odpovídal tomu, co zákazník při rozhodování skutečně potřebuje.</p>
            <div className="priceTags" aria-label="Příklady obsahu prezentačního webu">
              <span>Služby</span><span>Realizace</span><span>Reference</span><span>Ceník</span><span>Oblast působnosti</span><span>FAQ</span><span>Galerie</span><span>Kontakty</span>
            </div>
            <p className="priceNote">Pokud firma potřebuje jiný typ funkce, nejdřív si řekneme, zda ještě patří do běžného prezentačního webu. Bez překvapení až na faktuře.</p>
          </div>
        </div>
      </section>

      <section className="priceSection">
        <div className="priceWrap priceCostsGrid">
          <div>
            <p className="priceLabel">Po spuštění</p>
            <h2>Co budete platit dál.</h2>
            <p className="priceSmallLead">U jednoduchého firemního webu nemá smysl schovávat pořizovací cenu za nízký vstupní poplatek a následný povinný paušál.</p>
          </div>
          <div className="priceCosts">
            <div><span>Správa webu</span><strong>0 Kč / měsíc</strong><p>Za samotnou správu webu se v základní službě pravidelný paušál neplatí.</p></div>
            <div><span>Základní hosting</span><strong>V ceně</strong><p>Základní provoz webu je součástí služby.</p></div>
            <div><span>Vlastní doména</span><strong>Podle registrátora</strong><p>Doménu hradíte samostatně podle ceníku společnosti, u které je vedena.</p></div>
            <div><span>Budoucí úpravy</span><strong>Jen když je objednáte</strong><p>Rozšíření nebo větší změny se řeší samostatně a cenu znáte předem.</p></div>
          </div>
        </div>
      </section>

      <section className="priceSection priceDark">
        <div className="priceWrap priceBoundary">
          <div>
            <p className="priceLabel priceLabelDark">Mimo základní rozsah</p>
            <h2>Kdy už 8 900 Kč nemusí stačit.</h2>
          </div>
          <div>
            <p>Pokud web nemá jen prezentovat firmu, ale má řešit složitější proces nebo vlastní aplikaci, je potřeba jiný rozsah práce.</p>
            <ul>
              <li>e-shop a online prodej</li>
              <li>rezervační systém</li>
              <li>klientská nebo členská zóna</li>
              <li>jiná individuální webová aplikace nebo rozsáhlá integrace</li>
            </ul>
            <p className="priceBoundaryNote">V takovém případě nejdřív probereme zadání. Pokud jej umím spolehlivě dodat, dostanete cenu předem. Pokud ne, nebudu běžný web vydávat za něco, čím není.</p>
          </div>
        </div>
      </section>

      <section className="priceSection">
        <div className="priceWrap priceProcessGrid">
          <div>
            <p className="priceLabel">Platba a termín</p>
            <h2>Jasně i tady.</h2>
          </div>
          <div className="priceProcess">
            <div><span>01</span><strong>50 % před zahájením</strong><p>Po odsouhlasení zadání se hradí první polovina ceny.</p></div>
            <div><span>02</span><strong>Tvorba obvykle 1–2 týdny</strong><p>Počítáno od dodání potřebných podkladů. Konkrétní termín potvrdím před zahájením.</p></div>
            <div><span>03</span><strong>50 % před spuštěním</strong><p>Hotovou verzi společně projdeme. Druhá polovina se hradí po dokončení před ostrým spuštěním.</p></div>
          </div>
        </div>
      </section>

      <section className="priceSection priceSoft">
        <div className="priceWrap">
          <div className="priceReferencesHead">
            <div>
              <p className="priceLabel">Skutečné realizace</p>
              <h2>Nejen teoretický ceník.</h2>
            </div>
            <p>Podívejte se na hotové weby různých oborů. Každý odkaz vede na skutečnou realizaci.</p>
          </div>
          <div className="priceReferences">
            {examples.map(([name, field, url]) => (
              <a href={url} target="_blank" rel="noreferrer" key={name}>
                <span>{field}</span>
                <strong>{name}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </div>
          <p className="priceBack"><Link href="/#ukazky">Prohlédnout také ukázkové koncepty různých oborů →</Link></p>
        </div>
      </section>

      <section className="priceSection" aria-labelledby="price-faq-title">
        <div className="priceWrap priceFaqGrid">
          <div>
            <p className="priceLabel">Časté otázky</p>
            <h2 id="price-faq-title">Cena webu bez drobného písma.</h2>
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
            <p className="priceLabel priceLabelDark">Další krok</p>
            <h2>Stačí zjistit, jestli se váš web do tohoto rozsahu vejde.</h2>
            <p>Krátce probereme, co má web obsahovat. Pokud je cena 8 900 Kč pro vaše zadání platná, řeknu to rovnou.</p>
          </div>
          <div className="priceContactActions">
            <a href="tel:+420705911941"><span>Zavolat</span><strong>+420 705 911 941</strong><i aria-hidden="true">→</i></a>
            <a href="mailto:kontakt@spustweb.cz"><span>Napsat e-mail</span><strong>kontakt@spustweb.cz</strong><i aria-hidden="true">→</i></a>
          </div>
        </div>
      </section>

      <style>{`
        .pricePage{--pp-ink:#171717;--pp-muted:#6f6f69;--pp-line:#deded7;--pp-soft:#f5f5f1;--pp-acid:#efff63;--pp-paper:#fff;color:var(--pp-ink);font-family:Arial,Helvetica,sans-serif;background:var(--pp-paper)}
        .pricePage *{box-sizing:border-box}.pricePage a{color:inherit}.priceWrap{width:min(1040px,calc(100% - 44px));margin:0 auto}
        .priceHero{padding:126px 0 44px;background:#fff}.priceHeroGrid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(270px,.55fr);gap:64px;align-items:end;padding-bottom:34px}
        .priceLabel{margin:0 0 14px;font-size:10px;line-height:1.2;letter-spacing:.11em;text-transform:uppercase;color:var(--pp-muted);font-weight:700}.pricePage h1,.pricePage h2{margin:0;font-weight:500;letter-spacing:-.045em}.pricePage h1{font-size:clamp(2.8rem,5.4vw,4.8rem);line-height:.94;max-width:680px}.pricePage h2{font-size:clamp(2.25rem,4vw,3.55rem);line-height:.98}.priceHeroLead{max-width:590px;margin:22px 0 0;font-size:15px;line-height:1.62;color:#4d4d48}.priceHeroSide{border-top:1px solid var(--pp-ink);padding-top:18px}.priceAmount{margin:0 0 13px;font-size:clamp(2.2rem,4vw,3.6rem);line-height:.92;letter-spacing:-.05em}.priceAmount span{display:block;margin-top:9px;font-size:11px;letter-spacing:.04em;color:var(--pp-muted)}.priceHeroSide>p:not(.priceAmount){font-size:13px;line-height:1.5;max-width:300px;color:#4e4e49}.priceActions{display:flex;gap:8px;margin-top:20px;flex-wrap:wrap}.priceActions a{min-height:42px;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-size:11px;font-weight:800}.pricePrimary{background:var(--pp-acid)}.priceSecondary{border:1px solid var(--pp-ink)}
        .priceFacts{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--pp-line);border-bottom:1px solid var(--pp-line)}.priceFacts span{padding:16px 16px 16px 0;font-size:10.5px;line-height:1.4;color:var(--pp-muted);border-right:1px solid var(--pp-line)}.priceFacts span+span{padding-left:16px}.priceFacts span:last-child{border-right:0}.priceFacts strong{display:block;color:var(--pp-ink);font-size:12px;margin-bottom:3px}
        .priceSection{padding:82px 0}.priceSoft{background:var(--pp-soft)}.priceIntroGrid{display:grid;grid-template-columns:.92fr 1.08fr;gap:74px;align-items:end;margin-bottom:38px}.priceIntroText{margin:0;font-size:14px;line-height:1.65;color:#55554f;max-width:540px}.priceIncluded{border-top:3px solid var(--pp-ink)}.priceIncludedRow{display:grid;grid-template-columns:58px .78fr 1.22fr;gap:28px;padding:24px 0;border-bottom:1px solid var(--pp-line);align-items:start}.priceIncludedRow>span{font-size:10px;font-weight:800;color:var(--pp-muted);padding-top:4px}.priceIncludedRow h3{font-size:20px;line-height:1.15;letter-spacing:-.025em;margin:0}.priceIncludedRow p{font-size:12.5px;line-height:1.6;color:#60605a;margin:0;max-width:520px}
        .priceSplit{display:grid;grid-template-columns:.88fr 1.12fr;gap:84px}.priceSplitHead h2{max-width:460px}.priceDefinition>p{font-size:14px;line-height:1.65;color:#50504b;margin:0 0 24px}.priceTags{display:flex;gap:7px;flex-wrap:wrap;padding:22px 0;border-top:1px solid #d7d7d0;border-bottom:1px solid #d7d7d0;margin-bottom:22px}.priceTags span{padding:7px 10px;background:#fff;border:1px solid #d8d8d1;font-size:10px;font-weight:700}.priceDefinition .priceNote{font-size:12px;color:#6b6b65;margin-bottom:0}
        .priceCostsGrid{display:grid;grid-template-columns:.72fr 1.28fr;gap:76px;align-items:start}.priceSmallLead{font-size:12.5px;line-height:1.6;color:var(--pp-muted);max-width:350px;margin:18px 0 0}.priceCosts{border-top:3px solid var(--pp-ink)}.priceCosts>div{display:grid;grid-template-columns:.75fr .72fr 1.15fr;gap:22px;padding:20px 0;border-bottom:1px solid var(--pp-line);align-items:start}.priceCosts span{font-size:11px;font-weight:800}.priceCosts strong{font-size:13px}.priceCosts p{margin:0;font-size:11.5px;line-height:1.55;color:var(--pp-muted)}
        .priceDark{background:#171717;color:#fff}.priceBoundary{display:grid;grid-template-columns:.85fr 1.15fr;gap:84px}.priceLabelDark{color:#a7a7a0}.priceBoundary h2{max-width:450px}.priceBoundary>div:last-child>p{margin:0 0 20px;font-size:14px;line-height:1.65;color:#d0d0ca}.priceBoundary ul{list-style:none;margin:0 0 24px;padding:0;border-top:1px solid #444}.priceBoundary li{padding:12px 0;border-bottom:1px solid #3e3e3b;font-size:12px}.priceBoundary .priceBoundaryNote{font-size:11.5px;color:#a9a9a3;margin-bottom:0}
        .priceProcessGrid{display:grid;grid-template-columns:.68fr 1.32fr;gap:80px}.priceProcess{display:grid;grid-template-columns:repeat(3,1fr);border-top:3px solid var(--pp-ink)}.priceProcess>div{padding:20px 22px 0 0;border-right:1px solid var(--pp-line);min-height:190px}.priceProcess>div+div{padding-left:22px}.priceProcess>div:last-child{border-right:0}.priceProcess span{display:block;font-size:9px;color:var(--pp-muted);margin-bottom:28px}.priceProcess strong{display:block;font-size:14px;line-height:1.35;margin-bottom:9px}.priceProcess p{font-size:11px;line-height:1.55;color:var(--pp-muted);margin:0}
        .priceReferencesHead{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end;margin-bottom:30px}.priceReferencesHead>p{font-size:12.5px;line-height:1.6;color:var(--pp-muted);margin:0;max-width:430px}.priceReferences{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--pp-ink);border-bottom:1px solid var(--pp-ink)}.priceReferences a{position:relative;min-height:145px;padding:20px 26px 20px 0;text-decoration:none;border-right:1px solid #d3d3cd}.priceReferences a+a{padding-left:26px}.priceReferences a:last-child{border-right:0}.priceReferences span{display:block;font-size:9.5px;color:var(--pp-muted);margin-bottom:38px}.priceReferences strong{font-size:24px;letter-spacing:-.04em}.priceReferences i{position:absolute;right:20px;bottom:20px;font-style:normal;font-size:18px}.priceBack{margin:18px 0 0;font-size:10.5px}.priceBack a{text-underline-offset:4px}
        .priceFaqGrid{display:grid;grid-template-columns:.72fr 1.28fr;gap:80px}.priceFaq{border-top:3px solid var(--pp-ink)}.priceFaq details{border-bottom:1px solid var(--pp-line)}.priceFaq summary{list-style:none;cursor:pointer;padding:18px 30px 18px 0;font-size:13px;font-weight:700;position:relative}.priceFaq summary::-webkit-details-marker{display:none}.priceFaq summary:after{content:'+';position:absolute;right:0;font-size:18px;font-weight:400}.priceFaq details[open] summary:after{content:'−'}.priceFaq p{font-size:12px;line-height:1.62;color:var(--pp-muted);max-width:590px;margin:0;padding:0 28px 20px 0}
        .priceContact{background:#171717;color:#fff;padding:72px 0}.priceContactGrid{display:grid;grid-template-columns:1fr .86fr;gap:80px;align-items:center}.priceContact h2{max-width:590px}.priceContactGrid>div:first-child>p:last-child{font-size:12.5px;line-height:1.6;color:#bdbdb6;max-width:520px;margin:18px 0 0}.priceContactActions{border-top:1px solid #4a4a46}.priceContactActions a{display:grid;grid-template-columns:1fr auto auto;gap:12px;align-items:center;padding:18px 0;border-bottom:1px solid #43433f;text-decoration:none}.priceContactActions span{font-size:10px;color:#aaa}.priceContactActions strong{font-size:13px}.priceContactActions i{font-style:normal;font-size:17px;color:var(--pp-acid)}
        @media(max-width:820px){.priceHeroGrid,.priceIntroGrid,.priceSplit,.priceCostsGrid,.priceBoundary,.priceProcessGrid,.priceFaqGrid,.priceContactGrid{grid-template-columns:1fr;gap:34px}.priceFacts{grid-template-columns:1fr 1fr}.priceFacts span:nth-child(2){border-right:0}.priceFacts span:nth-child(3),.priceFacts span:nth-child(4){border-top:1px solid var(--pp-line)}.priceIncludedRow{grid-template-columns:44px 1fr}.priceIncludedRow p{grid-column:2}.priceCosts>div{grid-template-columns:1fr 1fr}.priceCosts p{grid-column:1/-1}.priceProcess{grid-template-columns:1fr}.priceProcess>div,.priceProcess>div+div{padding:18px 0;min-height:0;border-right:0;border-bottom:1px solid var(--pp-line)}.priceProcess>div:last-child{border-bottom:0}.priceProcess span{margin-bottom:12px}.priceReferencesHead{grid-template-columns:1fr;gap:16px}}
        @media(max-width:620px){.priceWrap{width:min(100% - 30px,1040px)}.priceHero{padding:104px 0 34px}.pricePage h1{font-size:clamp(2.65rem,14vw,4rem)}.pricePage h2{font-size:clamp(2.1rem,10vw,3rem)}.priceHeroGrid{padding-bottom:26px}.priceActions a{width:100%}.priceFacts{grid-template-columns:1fr}.priceFacts span,.priceFacts span+span{padding:13px 0;border-right:0;border-top:1px solid var(--pp-line)}.priceFacts span:first-child{border-top:0}.priceSection{padding:60px 0}.priceIncludedRow{grid-template-columns:34px 1fr;gap:18px}.priceIncludedRow h3{font-size:18px}.priceCosts>div{grid-template-columns:1fr;gap:6px}.priceCosts p{grid-column:1}.priceReferences{grid-template-columns:1fr}.priceReferences a,.priceReferences a+a{padding:18px 0;min-height:115px;border-right:0;border-bottom:1px solid #d3d3cd}.priceReferences a:last-child{border-bottom:0}.priceReferences span{margin-bottom:25px}.priceContact{padding:58px 0}.priceContactActions a{grid-template-columns:1fr auto}.priceContactActions strong{grid-column:1}.priceContactActions i{grid-column:2;grid-row:1/3}}
      `}</style>
    </div>
  )
}
