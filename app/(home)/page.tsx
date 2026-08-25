import Image from 'next/image'
import ShowcaseConcepts from '@/components/ShowcaseConcepts'

const references = [
  {
    name: 'Rovino',
    url: 'https://rovino.cz',
    image: '/screens/reference-rovino.webp',
    width: 1400,
    height: 688,
    alt: 'Aktuální web Rovino pro zemní a stavební práce',
    description: 'Zemní práce. Přehled služeb a realizací pro rychlou poptávku.',
  },
  {
    name: '5class',
    url: 'https://5class.cz',
    image: '/screens/reference-5class.webp',
    width: 1400,
    height: 688,
    alt: 'Aktuální web 5class pro osobní dopravu s řidičem',
    description: 'Osobní doprava. Jasný výběr služeb a přímý kontakt.',
  },
  {
    name: 'Pětilistá',
    url: 'https://www.petilista.cz',
    image: '/screens/reference-petilista.webp',
    width: 1400,
    height: 696,
    alt: 'Aktuální web Pětilistá pro péči o hrobová místa',
    description: 'Péče o hrobová místa. Služby, lokální obsah a online objednávka.',
  },
]

const included = [
  ['01', 'Návrh a zpracování', 'Struktura a vzhled podle konkrétního podnikání, ne z hotové šablony.'],
  ['02', 'Mobilní verze', 'Plnohodnotné zobrazení na telefonu, tabletu i počítači.'],
  ['03', 'Kontaktní prvky', 'Kontaktní formulář, klikací telefon, e-mail a další prvky podle potřeb webu.'],
  ['04', 'Základní SEO a měření', 'Metadata, sitemap, nastavení pro vyhledávače, Search Console a základní měření návštěvnosti.'],
  ['05', 'Spuštění a hosting', 'Nasazení na vlastní doménu a základní hosting webu bez pravidelného poplatku za správu.'],
  ['06', 'Firemní e-mail', 'Nastavení e-mailu na vlastní doméně, například kontakt@vasefirma.cz.'],
]

const industryGroups = [
  ['Řemesla a stavba', 'stavební firmy, zemní práce, rekonstrukce, zednictví, elektroinstalace, voda a topení, střechy, truhlářství, kovovýroba'],
  ['Doprava a technika', 'autoservisy, pneuservisy, autodoprava, osobní doprava, odtahové služby, půjčovny aut, stavební techniky a nářadí'],
  ['Služby pro dům a firmu', 'úklidové firmy, zahradní práce, stěhování, vyklízení, správa nemovitostí, servisní a montážní firmy'],
  ['Odborné profese', 'účetní, daňoví poradci, projektanti, geodeti, revizní technici, finanční poradci, konzultanti a odborné kanceláře'],
  ['Péče a osobní služby', 'fyzioterapie, masáže, kosmetika, kadeřnictví, osobní trenéři, terapeuti, veterinární a další lokální služby'],
  ['Ubytování, gastro a volný čas', 'penziony, apartmány, restaurace, kavárny, catering, svatební služby, sportovní a zážitkové služby'],
]

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-top">
          <div className="hero-main">
            <p className="label">SpustWeb.cz · tvorba webových stránek</p>
            <h1 id="hero-title">Prezentační web pro živnostníky a malé firmy.</h1>
          </div>
          <div className="hero-side">
            <p className="price">8 900 Kč <span>bez DPH</span></p>
            <p className="lead">Návrh, zpracování a spuštění v jedné ceně.</p>
            <div className="hero-actions">
              <a className="cta" href="tel:+420705911941">Zavolat</a>
              <a className="cta-secondary" href="#ukazky">Prohlédnout ukázky</a>
            </div>
          </div>
        </div>

        <div className="wrap hero-image-wrap">
          <img
            src="/spustweb-hero-final.webp"
            alt="Ukázka prezentačního webu SpustWeb.cz na notebooku"
            width="1983"
            height="793"
            fetchPriority="high"
            className="hero-image"
          />
          <div className="accent-line" aria-hidden="true" />
          <div className="trust-strip" aria-label="Základní podmínky služby">
            <span>Pevná cena 8 900 Kč</span>
            <span>Obvykle 1 až 2 týdny</span>
            <span>Bez poplatku za správu</span>
            <span>Hotový web je váš</span>
          </div>
        </div>
      </section>

      <section id="sluzba" className="section compact-section">
        <div className="wrap offer-grid">
          <div className="offer-intro">
            <p className="label">Služba</p>
            <h2>Co je v ceně.</h2>
            <p>Plnohodnotný firemní web se vším potřebným pro běžnou prezentaci firmy. Rozsah přizpůsobím konkrétnímu podnikání. Bez e-shopu, rezervačního systému a jiných webových aplikací.</p>
          </div>
          <div className="service-cards" id="v-cene">
            {included.map(([num, title, text]) => (
              <div className="service-card" key={title}>
                <span>{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hosting-section" aria-labelledby="hosting-title">
        <div className="wrap hosting-grid">
          <div className="hosting-title-wrap">
            <p className="label hosting-label">Hosting</p>
            <h2 id="hosting-title">Proč nebudete platit za hosting <span>(a přesto získáte špičkovou kvalitu)?</span></h2>
          </div>
          <div className="hosting-copy">
            <p>Většina agentur a tvůrců staví weby na klasických redakčních systémech a využívá běžný placený webhosting. Já to dělám jinak.</p>
            <p>Váš web připravím jako vlastní, lehké řešení bez šablon. Díky tomu je nejen originální, ale hlavně rychlý a úsporný a může běžet přímo na technologické platformě, kterou využívají známé firmy a internetové služby po celém světě. Ta nabízí provoz menších firemních webů zcela zdarma, s bleskovým načítáním a velmi spolehlivým zabezpečením.</p>
          </div>
        </div>
      </section>

      <section className="section fit-section" aria-labelledby="fit-title">
        <div className="wrap fit-grid">
          <div className="fit-intro">
            <p className="label">Pro koho</p>
            <h2 id="fit-title">Web podle vašeho oboru.</h2>
          </div>
          <div className="fit-copy">
            <p>Tvořím nové webové stránky i kompletní náhrady starších firemních webů. Nejčastěji pro živnostníky, řemeslníky a malé firmy, které potřebují jasně představit služby, ukázat práci a usnadnit zákazníkům první kontakt.</p>
            <p>Struktura se přizpůsobí konkrétní firmě a tomu, co lidé při výběru skutečně hledají: služby, realizace, reference, ceník, oblast působnosti, kontakty nebo další důležité informace.</p>
          </div>
        </div>

        <div className="wrap industries">
          <div className="industries-head">
            <h3>Příklady oborů a služeb.</h3>
            <p>Přehled je orientační. Rozsah webu se vždy řeší podle konkrétního podnikání.</p>
          </div>
          <div className="industry-grid">
            {industryGroups.map(([title, text]) => (
              <div className="industry" key={title}>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="ukazky">
        <ShowcaseConcepts />
      </div>

      <section id="reference" className="section references-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label">Reference</p>
              <h2>Vybrané realizace.</h2>
            </div>
            <p>Každý náhled vede na hotový web.</p>
          </div>

          <div className="projects">
            {references.map((reference) => (
              <a className="project" href={reference.url} target="_blank" rel="noreferrer" key={reference.name}>
                <div className="project-image-wrap">
                  <Image
                    src={reference.image}
                    alt={reference.alt}
                    width={reference.width}
                    height={reference.height}
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className="project-image"
                  />
                </div>
                <div className="project-meta">
                  <h3>{reference.name}</h3>
                  <p>{reference.description}</p>
                  <span aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="postup" className="section soft compact-section">
        <div className="wrap info-grid">
          <div>
            <p className="label">Postup</p>
            <h2>Stačí se ozvat.</h2>
            <div className="steps">
              <div><span>01</span><p><strong>Ozvěte se.</strong> Nejrychlejší je krátký telefonát. Můžete také napsat e-mail.</p></div>
              <div><span>02</span><p><strong>Dostanete seznam podkladů.</strong> Pošlu vám přesně, co budu pro přípravu webu potřebovat.</p></div>
              <div><span>03</span><p><strong>Připravím web.</strong> Hotovou verzi společně projdeme, doladíme a web spustím.</p></div>
            </div>
          </div>

          <div id="faq">
            <p className="label">Informace</p>
            <div className="faq">
              <details open>
                <summary>Jak dlouho tvorba trvá?</summary>
                <p>Obvykle 1 až 2 týdny od dodání potřebných podkladů.</p>
              </details>
              <details>
                <summary>Musí být web jednostránkový?</summary>
                <p>Ne. Strukturu navrhnu podle toho, co vaše podnikání potřebuje. Může jít o jednu stránku i několik základních podstránek.</p>
              </details>
              <details>
                <summary>Co budu muset dodat?</summary>
                <p>Základní informace o firmě, služby, kontakty, logo a vlastní fotografie, pokud je máte. Po domluvě dostanete konkrétní seznam.</p>
              </details>
              <details>
                <summary>Jak probíhá platba?</summary>
                <p>50 % ceny se hradí před zahájením práce, zbývajících 50 % po dokončení webu před jeho spuštěním.</p>
              </details>
              <details>
                <summary>Platí se za web každý měsíc?</summary>
                <p>Za správu ani základní hosting webu ne. Samostatně se hradí vlastní doména podle ceníku registrátora.</p>
              </details>
              <details>
                <summary>Je cena pevná?</summary>
                <p>Ano, pro běžný prezentační web v domluveném rozsahu je cena 8 900 Kč bez DPH. Pokud zadání vyžaduje něco navíc, řeknu to předem.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="contact">
        <div className="wrap contact-grid">
          <div className="contact-intro">
            <p className="label dark-label">Kontakt</p>
            <h2>Probereme váš web.</h2>
            <p>Jmenuji se Hana Fraňková. Při krátkém telefonátu si ujasníme, co má váš web obsahovat, jaké podklady už máte a co bude potřeba dodat.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-call" href="tel:+420705911941">
              <span>Zavolat</span>
              <strong>+420 705 911 941</strong>
              <i aria-hidden="true">→</i>
            </a>
            <a className="contact-email" href="mailto:kontakt@spustweb.cz">
              <span>Napsat e-mail</span>
              <strong>kontakt@spustweb.cz</strong>
              <i aria-hidden="true">→</i>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        :root{--ink:#171717;--muted:#70706b;--line:#deded7;--soft:#f5f5f1;--acid:#efff63;--paper:#fff}
        *{box-sizing:border-box}
        .wrap{width:min(1040px,calc(100% - 44px));margin:0 auto}
        .hero{padding:88px 0 52px;background:var(--paper)}
        .hero-top{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(260px,.55fr);gap:58px;align-items:end;margin-bottom:28px}
        .label{margin:0 0 13px;font-size:10px;line-height:1.2;letter-spacing:.11em;text-transform:uppercase;color:var(--muted);font-weight:600}
        .hero h1,.section h2,.contact h2{margin:0;color:var(--ink);font-family:Arial,Helvetica,sans-serif;font-weight:500;letter-spacing:-.04em}
        .hero h1{max-width:620px;font-size:clamp(2.65rem,4.55vw,4.25rem);line-height:.99}
        .hero-side{padding-bottom:1px}
        .price{margin:0 0 11px;font-size:clamp(1.6rem,2.5vw,2.2rem);line-height:1;color:var(--ink);letter-spacing:-.03em}
        .price span{display:block;margin-top:5px;font-size:11px;letter-spacing:.03em;color:var(--muted)}
        .lead{max-width:300px;margin:0 0 18px;font-size:14px;line-height:1.5;color:#3d3d39}
        .hero-actions{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
        .cta,.cta-secondary{display:inline-flex;align-items:center;justify-content:center;min-height:37px;padding:0 18px;text-decoration:none;font-size:12px;font-weight:700}
        .cta{background:var(--acid);border:1px solid var(--acid);color:#111}
        .cta-secondary{padding-left:0;padding-right:0;border-bottom:1px solid #aaa;color:#4b4b47;font-weight:600}
        .hero-image-wrap{position:relative}
        .hero-image{display:block;width:100%;height:auto;aspect-ratio:2.5/1;object-fit:cover}
        .accent-line{height:8px;background:var(--acid);width:100%}
        .trust-strip{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid var(--line)}
        .trust-strip span{padding:11px 8px 10px 0;font-size:11px;line-height:1.3;color:#5d5d58}
        .section{padding:68px 0;border-top:1px solid var(--line);background:var(--paper)}
        .compact-section{padding:60px 0}
        .soft{background:var(--soft)}
        .section h2,.contact h2{font-size:clamp(1.95rem,3.25vw,3rem);line-height:1}
        .offer-grid{display:grid;grid-template-columns:.72fr 1.28fr;gap:64px;align-items:start}
        .offer-intro>p:last-child{max-width:320px;margin:17px 0 0;font-size:13px;line-height:1.58;color:var(--muted)}
        .service-cards{display:grid;gap:6px}
        .service-card{display:grid;grid-template-columns:34px 1fr;gap:14px;padding:15px 17px;background:#fafafa;border:1px solid #ecece8}
        .service-card>span{padding-top:2px;font-size:9px;color:#8c8c86}
        .service-card h3{margin:0 0 4px;font-size:13px;font-weight:600;color:var(--ink)}
        .service-card p{margin:0;font-size:12px;line-height:1.48;color:var(--muted)}
        .hosting-section{padding:54px 0;background:#171717;color:#fff;border-top:8px solid var(--acid)}
        .hosting-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:72px;align-items:start}
        .hosting-label{color:#989891}
        .hosting-section h2{margin:0;max-width:470px;font-family:Arial,Helvetica,sans-serif;font-size:clamp(2rem,3.25vw,3.05rem);line-height:.98;font-weight:500;letter-spacing:-.04em;color:#fff}
        .hosting-section h2 span{display:block;margin-top:7px;font-size:.52em;line-height:1.15;letter-spacing:-.025em;color:#bdbdb6}
        .hosting-copy{max-width:560px;padding-top:1px}
        .hosting-copy p{margin:0;font-size:13px;line-height:1.62;color:#d1d1ca}
        .hosting-copy p+p{margin-top:16px}
        .fit-section{background:#fafaf7}
        .fit-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:64px;align-items:start}
        .fit-copy{max-width:560px}
        .fit-copy p{margin:0;font-size:12px;line-height:1.58;color:var(--muted)}
        .fit-copy p+p{margin-top:10px}
        .industries{margin-top:34px;padding-top:24px;border-top:1px solid var(--line)}
        .industries-head{display:grid;grid-template-columns:.8fr 1.2fr;gap:64px;margin-bottom:20px}
        .industries-head h3{margin:0;font-size:14px;font-weight:600;color:var(--ink)}
        .industries-head p{margin:0;max-width:520px;font-size:11px;line-height:1.55;color:var(--muted)}
        .industry-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .industry{padding:15px 16px 16px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:rgba(255,255,255,.45)}
        .industry h4{margin:0 0 6px;font-size:11px;font-weight:600;color:var(--ink)}
        .industry p{margin:0;font-size:10.5px;line-height:1.52;color:var(--muted)}
        .section-head{display:flex;justify-content:space-between;align-items:end;gap:34px;margin-bottom:28px}
        .section-head>p{margin:0 0 3px;max-width:200px;font-size:11px;line-height:1.45;color:var(--muted)}
        .projects{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .project{text-decoration:none;color:inherit}
        .project-image-wrap{overflow:hidden;background:#eee;border:1px solid #ecece8}
        .project-image{display:block;width:100%;height:auto;object-fit:contain;transition:transform .3s ease}
        .project:hover .project-image{transform:scale(1.012)}
        .project-meta{display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:start;padding-top:9px}
        .project-meta h3{margin:0;font-size:12px;font-weight:600;color:var(--ink)}
        .project-meta p{margin:0;font-size:10px;line-height:1.45;color:var(--muted)}
        .project-meta span{font-size:12px}
        .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px}
        .steps{margin-top:21px;border-top:1px solid #cecec8}
        .steps>div{display:grid;grid-template-columns:28px 1fr;gap:12px;padding:13px 0;border-bottom:1px solid #d9d9d3}
        .steps span{font-size:9px;color:#8a8a84;padding-top:2px}
        .steps p{margin:0;font-size:12px;line-height:1.52;color:var(--muted)}
        .steps strong{color:var(--ink);font-weight:600}
        .faq{border-top:1px solid #cecec8}
        .faq details{border-bottom:1px solid #d9d9d3}
        .faq summary{list-style:none;cursor:pointer;padding:13px 30px 13px 0;font-size:12px;font-weight:600;position:relative}
        .faq summary::-webkit-details-marker{display:none}
        .faq summary:after{content:'+';position:absolute;right:0;top:11px;font-size:16px;font-weight:400}
        .faq details[open] summary:after{content:'−'}
        .faq details p{margin:0;padding:0 28px 13px 0;font-size:11px;line-height:1.52;color:var(--muted)}
        .contact{padding:88px 0 92px;background:#171717;color:#fff;border-top:8px solid var(--acid)}
        .contact-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:76px;align-items:stretch}
        .contact-intro{display:flex;flex-direction:column;justify-content:flex-end}
        .contact h2{color:#fff;font-size:clamp(2.8rem,5vw,4.5rem);line-height:.9;max-width:480px}
        .dark-label{color:#92928c}
        .contact-intro>p:last-child{max-width:430px;margin:25px 0 0;font-size:13px;line-height:1.62;color:#bcbcb5}
        .contact-actions{display:grid;border-top:1px solid #4a4a47}
        .contact-call,.contact-email{position:relative;display:grid;grid-template-columns:1fr auto;grid-template-rows:auto auto;gap:7px 22px;align-items:center;padding:24px 24px 23px;text-decoration:none;border-bottom:1px solid #4a4a47;transition:transform .18s ease,background .18s ease}
        .contact-call{background:var(--acid);color:#111}
        .contact-email{color:#fff}
        .contact-call span,.contact-email span{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        .contact-call strong,.contact-email strong{grid-column:1;font-size:clamp(1.45rem,2.5vw,2rem);line-height:1.05;letter-spacing:-.035em;font-weight:500}
        .contact-call i,.contact-email i{grid-column:2;grid-row:1/3;align-self:center;font-style:normal;font-size:26px}
        .contact-call:hover,.contact-email:hover{transform:translateX(4px)}
        .contact-email:hover{background:#222220}
        @media(max-width:820px){
          .hero-top,.offer-grid,.hosting-grid,.fit-grid,.industries-head,.info-grid,.contact-grid{grid-template-columns:1fr;gap:32px}
          .industry-grid{grid-template-columns:1fr 1fr}
          .projects{grid-template-columns:1fr 1fr}
          .hero{padding:80px 0 48px}
          .hero h1{font-size:clamp(2.55rem,9.5vw,4rem)}
          .hero-side{max-width:420px}
          .section,.compact-section{padding:54px 0}
          .hosting-section{padding:48px 0}
          .trust-strip{grid-template-columns:1fr 1fr}
          .industries{margin-top:30px}
          .contact{padding:70px 0 74px}
          .contact-intro>p:last-child{margin-top:20px}
        }
        @media(max-width:560px){
          .wrap{width:min(100% - 30px,1040px)}
          .hero{padding:72px 0 42px}
          .hero-top{margin-bottom:24px}
          .hero h1{font-size:clamp(2.35rem,11.5vw,3.5rem)}
          .hero-image{aspect-ratio:1.55/1;object-position:36% center}
          .accent-line{height:7px}
          .trust-strip span{font-size:10.5px;padding:9px 6px 9px 0}
          .hosting-section{padding:42px 0;border-top-width:7px}
          .hosting-section h2{font-size:clamp(1.95rem,9vw,2.65rem)}
          .hosting-copy p{font-size:12px}
          .industry-grid{grid-template-columns:1fr}
          .industry{padding:13px 14px}
          .projects{grid-template-columns:1fr}
          .section-head{display:block}
          .section-head>p{margin-top:10px}
          .contact{padding:58px 0 62px;border-top-width:7px}
          .contact h2{font-size:clamp(2.55rem,12vw,3.6rem)}
          .contact-call,.contact-email{padding:20px 17px 19px}
          .contact-call strong,.contact-email strong{font-size:1.25rem}
        }
      `}</style>
    </>
  )
}
