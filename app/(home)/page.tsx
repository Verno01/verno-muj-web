import Image from 'next/image'

const references = [
  {
    name: 'Rovino',
    url: 'https://rovino.cz',
    image: '/screens/rovino-new.jpg',
    alt: 'Aktuální web Rovino pro zemní a stavební práce',
    description: 'Firemní web pro zemní a stavební práce.',
  },
  {
    name: '5class',
    url: 'https://5class.cz',
    image: '/screens/5class-new.jpg',
    alt: 'Aktuální web 5class pro osobní dopravu s řidičem',
    description: 'Web pro osobní dopravu s řidičem.',
  },
  {
    name: 'Pětilistá',
    url: 'https://www.petilista.cz',
    image: '/screens/petilista-new.jpg',
    alt: 'Aktuální web Pětilistá pro péči o hrobová místa',
    description: 'Web služby péče o hrobová místa s online objednávkou.',
  },
]

const included = [
  ['01', 'Návrh a zpracování', 'Struktura, vzhled a zpracování webu podle konkrétního podnikání.'],
  ['02', 'Mobilní verze', 'Plnohodnotné zobrazení na telefonu, tabletu i počítači.'],
  ['03', 'Kontakt a formulář', 'Kontaktní formulář, klikací telefon, e mail a další potřebné kontaktní prvky.'],
  ['04', 'Základní SEO a měření', 'Metadata, sitemap, nastavení pro vyhledávače, Search Console a základní měření návštěvnosti.'],
  ['05', 'Spuštění webu', 'Nasazení na doménu a základní hosting bez pravidelného poplatku za správu.'],
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
            <a className="cta" href="tel:+420705911941">Zavolat</a>
          </div>
        </div>

        <div className="wrap hero-image-wrap">
          <img
            src="/hero-verno-final.webp"
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
            <p>Plnohodnotný firemní web se vším potřebným pro běžnou prezentaci firmy. Rozsah přizpůsobím konkrétnímu podnikání. Bez e shopu, rezervačního systému a jiných webových aplikací.</p>
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
                  {reference.image.startsWith('http') ? (
                    <img src={reference.image} alt={reference.alt} loading="lazy" className="project-image" />
                  ) : (
                    <Image src={reference.image} alt={reference.alt} width={1200} height={760} sizes="(max-width: 760px) 100vw, 33vw" className="project-image" />
                  )}
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
            <p className="label">Spolupráce</p>
            <h2>Jak začít.</h2>
            <div className="steps">
              <div><span>01</span><p><strong>Ozvěte se.</strong> Nejrychlejší je krátký telefonát. Můžete také napsat e mail.</p></div>
              <div><span>02</span><p><strong>Pošlu zadání.</strong> Dostanete přesný seznam podkladů, které budu potřebovat.</p></div>
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
                <p>50 % ceny se hradí před zahájením práce, zbývajících 50 % po dokončení webu.</p>
              </details>
              <details>
                <summary>Platí se za web každý měsíc?</summary>
                <p>Za správu webu ne. Základní hosting je součástí služby. Samostatně se hradí vlastní doména podle ceníku registrátora.</p>
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
          <div>
            <p className="label dark-label">Kontakt</p>
            <h2>Probereme váš web.</h2>
          </div>
          <div className="contact-side">
            <p>Stačí krátce popsat vaše podnikání a co na webu potřebujete mít. Rovnou probereme rozsah, podklady a další postup.</p>
            <a className="contact-main" href="tel:+420705911941">+420 705 911 941</a>
            <a className="contact-mail" href="mailto:info@spustweb.cz">info@spustweb.cz</a>
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
        .cta{display:inline-flex;align-items:center;justify-content:center;min-height:37px;padding:0 18px;background:var(--acid);border:1px solid var(--acid);color:#111;text-decoration:none;font-size:12px;font-weight:700}
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
        .section-head{display:flex;justify-content:space-between;align-items:end;gap:34px;margin-bottom:28px}
        .section-head>p{margin:0 0 3px;max-width:200px;font-size:11px;line-height:1.45;color:var(--muted)}
        .projects{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .project{text-decoration:none;color:inherit}
        .project-image-wrap{overflow:hidden;background:#eee;border:1px solid #ecece8}
        .project-image{display:block;width:100%;aspect-ratio:1.45/1;object-fit:cover;object-position:top;transition:transform .3s ease}
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
        .contact{padding:62px 0;background:#171717;color:#fff}
        .contact-grid{display:grid;grid-template-columns:1fr .72fr;gap:64px;align-items:end}
        .contact h2{color:#fff}
        .dark-label{color:#85857e}
        .contact-side{display:flex;flex-direction:column;align-items:flex-start}
        .contact-side p{max-width:350px;margin:0 0 17px;font-size:12px;line-height:1.52;color:#bcbcb5}
        .contact-main{font-size:clamp(1.4rem,2.3vw,1.9rem);letter-spacing:-.025em;color:#fff;text-decoration:none;border-bottom:2px solid var(--acid);padding-bottom:3px}
        .contact-mail{margin-top:10px;font-size:12px;color:#cecec8;text-decoration:none}
        @media(max-width:820px){
          .hero-top,.offer-grid,.info-grid,.contact-grid{grid-template-columns:1fr;gap:32px}
          .projects{grid-template-columns:1fr 1fr}
          .hero{padding:80px 0 48px}
          .hero h1{font-size:clamp(2.55rem,9.5vw,4rem)}
          .hero-side{max-width:420px}
          .section,.compact-section{padding:54px 0}
          .trust-strip{grid-template-columns:1fr 1fr}
        }
        @media(max-width:560px){
          .wrap{width:min(100% - 30px,1040px)}
          .hero{padding:72px 0 42px}
          .hero-top{margin-bottom:24px}
          .hero h1{font-size:clamp(2.35rem,11.5vw,3.5rem)}
          .hero-image{aspect-ratio:1.55/1;object-position:36% center}
          .accent-line{height:7px}
          .trust-strip span{font-size:10.5px;padding:9px 6px 9px 0}
          .projects{grid-template-columns:1fr}
          .section-head{display:block}
          .section-head>p{margin-top:10px}
          .contact{padding:52px 0}
        }
      `}</style>
    </>
  )
}