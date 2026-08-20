import Image from 'next/image'

const references = [
  {
    name: 'Rovino',
    url: 'https://rovino.cz',
    image: '/screens/rovino.jpg',
    alt: 'Web Rovino pro zemní a stavební práce',
    description: 'Firemní web pro zemní a stavební práce.',
  },
  {
    name: '5class',
    url: 'https://5class.cz',
    image: '/screens/5class.jpg',
    alt: 'Web 5class pro osobní dopravu s řidičem',
    description: 'Web pro osobní dopravu s řidičem.',
  },
  {
    name: 'Pětilistá',
    url: 'https://www.petilista.cz',
    image: 'https://www.petilista.cz/og-nahled.jpg',
    alt: 'Web Pětilistá pro péči o hrobová místa',
    description: 'Web služby péče o hrobová místa s online objednávkou.',
  },
]

const included = [
  ['Návrh a zpracování', 'Struktura, vzhled a zpracování běžného prezentačního webu.'],
  ['Mobilní verze', 'Plnohodnotné zobrazení na telefonu, tabletu i počítači.'],
  ['Základní SEO', 'Technické nastavení, metadata, sitemap a indexace pro vyhledávače.'],
  ['Google Analytics', 'Napojení základního měření návštěvnosti.'],
  ['Nasazení', 'Spuštění na vaší doméně a základní hosting bez pravidelného poplatku za správu webu.'],
]

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-copy">
          <div>
            <p className="label">VERNO · tvorba webových stránek</p>
            <h1 id="hero-title">Prezentační web pro živnostníky a malé firmy.</h1>
          </div>
          <div className="hero-side">
            <p className="price">8 900 Kč <span>bez DPH</span></p>
            <p className="lead">Návrh, zpracování a spuštění webu v jedné ceně.</p>
            <a className="cta" href="tel:+420705911941">Zavolat</a>
          </div>
        </div>
        <div className="wrap hero-image-wrap">
          <img
            src="/hero-verno.webp"
            alt="Ukázka prezentačního webu VERNO na notebooku"
            width="1600"
            height="640"
            fetchPriority="high"
            className="hero-image"
          />
          <div className="accent-line" aria-hidden="true" />
        </div>
      </section>

      <section id="sluzba" className="section">
        <div className="wrap split">
          <div>
            <p className="label">Prezentační web</p>
            <h2>Jedna služba. Jedna cena.</h2>
          </div>
          <div className="body-copy">
            <p>Pro řemeslníky, živnostníky a menší firmy, které potřebují přehledně představit svou práci, služby, reference a kontakt.</p>
            <p>Cena platí pro běžný prezentační web. E shop, rezervační systém, členská sekce nebo jiná webová aplikace jsou samostatná zakázka.</p>
          </div>
        </div>
      </section>

      <section id="v-cene" className="section soft">
        <div className="wrap split">
          <div>
            <p className="label">8 900 Kč bez DPH</p>
            <h2>V ceně.</h2>
          </div>
          <div className="service-list">
            {included.map(([title, text]) => (
              <div className="service-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reference" className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label">Reference</p>
              <h2>Vybrané realizace.</h2>
            </div>
            <p>Každý náhled vede na hotový web.</p>
          </div>

          <div className="projects">
            {references.map((reference, index) => (
              <a className="project" href={reference.url} target="_blank" rel="noreferrer" key={reference.name}>
                <div className="project-image-wrap">
                  {reference.image.startsWith('http') ? (
                    <img src={reference.image} alt={reference.alt} loading="lazy" className="project-image" />
                  ) : (
                    <Image src={reference.image} alt={reference.alt} width={1400} height={880} sizes="(max-width: 820px) 100vw, 50vw" className="project-image" />
                  )}
                  {index === 0 && <span className="project-accent" aria-hidden="true" />}
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

      <section id="postup" className="section soft">
        <div className="wrap split">
          <div>
            <p className="label">Spolupráce</p>
            <h2>Jak začít.</h2>
          </div>
          <div className="steps">
            <div><span>01</span><h3>Ozvěte se</h3><p>Nejrychlejší je krátký telefonát. Pokud vám vyhovuje e mail, napište.</p></div>
            <div><span>02</span><h3>Pošlu zadání</h3><p>Dostanete přesný seznam podkladů, které budu pro přípravu webu potřebovat.</p></div>
            <div><span>03</span><h3>Připravím web</h3><p>Hotovou verzi společně projdeme, doladíme potřebné detaily a web spustím.</p></div>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="wrap split">
          <div>
            <p className="label">Prakticky</p>
            <h2>Co je dobré vědět.</h2>
          </div>
          <div className="faq">
            <details open>
              <summary>Jak dlouho tvorba trvá?</summary>
              <p>Obvykle 1 až 2 týdny od dodání potřebných podkladů.</p>
            </details>
            <details>
              <summary>Co budu muset dodat?</summary>
              <p>Základní informace o firmě, služby, kontakty, logo a vlastní fotografie, pokud je máte. Po domluvě dostanete konkrétní seznam.</p>
            </details>
            <details>
              <summary>Platí se za web potom každý měsíc?</summary>
              <p>Za správu webu ne. Základní hosting je součástí služby. Samostatně se hradí vlastní doména podle ceníku registrátora.</p>
            </details>
            <details>
              <summary>Je cena opravdu pevná?</summary>
              <p>Ano, pro běžný prezentační web v domluveném rozsahu je cena 8 900 Kč bez DPH. Pokud zadání vyžaduje funkce mimo tuto službu, řeknu to předem.</p>
            </details>
            <details>
              <summary>Bude web připravený pro Google?</summary>
              <p>Ano. Součástí je základní technické SEO, responzivní zobrazení, metadata, sitemap, nastavení indexace a napojení Google Analytics.</p>
            </details>
          </div>
        </div>
      </section>

      <section id="kontakt" className="contact">
        <div className="wrap contact-grid">
          <div>
            <p className="label dark-label">Kontakt</p>
            <h2>Potřebujete nový web?</h2>
          </div>
          <div className="contact-side">
            <p>Nejrychlejší je zavolat. Pokud chcete začít písemně, použijte e mail.</p>
            <a className="contact-main" href="tel:+420705911941">+420 705 911 941</a>
            <a className="contact-mail" href="mailto:info@verno.cz">info@verno.cz</a>
          </div>
        </div>
      </section>

      <style>{`
        :root{--ink:#171717;--muted:#6a6a66;--line:#deded8;--soft:#f5f5f1;--acid:#edff5a;--paper:#fff}
        *{box-sizing:border-box}.wrap{width:min(1180px,calc(100% - 48px));margin:0 auto}.hero{padding:138px 0 92px;background:var(--paper)}.hero-copy{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(280px,.75fr);gap:72px;align-items:end;margin-bottom:58px}.label{margin:0 0 21px;font-size:11px;line-height:1.2;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:600}.hero h1,.section h2,.contact h2{margin:0;color:var(--ink);font-family:Arial,Helvetica,sans-serif;font-weight:500;letter-spacing:-.045em}.hero h1{max-width:760px;font-size:clamp(3rem,6vw,5.7rem);line-height:.98}.hero-side{padding-bottom:5px}.price{margin:0 0 18px;font-size:clamp(1.75rem,3vw,2.7rem);line-height:1;color:var(--ink);letter-spacing:-.035em}.price span{display:block;margin-top:7px;font-size:12px;letter-spacing:.04em;color:var(--muted)}.lead{max-width:390px;margin:0 0 28px;font-size:17px;line-height:1.6;color:#373733}.cta{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:0 22px;background:var(--acid);border:1px solid var(--acid);color:#121212;text-decoration:none;font-size:13px;font-weight:700;transition:background .2s,border-color .2s}.cta:hover{background:#e4f64f;border-color:#e4f64f}.hero-image-wrap{position:relative}.hero-image{display:block;width:100%;height:auto;aspect-ratio:2.5/1;object-fit:cover}.accent-line{height:11px;background:var(--acid);width:100%}.section{padding:112px 0;border-top:1px solid var(--line);background:var(--paper)}.soft{background:var(--soft)}.split{display:grid;grid-template-columns:minmax(260px,.72fr) minmax(0,1.28fr);gap:96px}.section h2,.contact h2{font-size:clamp(2.4rem,4.5vw,4.6rem);line-height:.98}.body-copy{max-width:670px}.body-copy p{margin:0 0 20px;font-size:17px;line-height:1.7;color:#3f3f3b}.body-copy p:last-child{margin-bottom:0}.service-list{border-top:1px solid #bdbdb6}.service-row{display:grid;grid-template-columns:210px 1fr;gap:38px;padding:25px 0;border-bottom:1px solid #d6d6d0}.service-row h3{margin:0;font-size:15px;font-weight:600;color:var(--ink)}.service-row p{margin:0;font-size:14px;line-height:1.65;color:var(--muted)}.section-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:52px}.section-head>p{margin:0 0 4px;max-width:230px;font-size:13px;line-height:1.55;color:var(--muted)}.projects{display:grid;grid-template-columns:1fr 1fr;gap:62px 26px}.project{text-decoration:none;color:inherit}.project-image-wrap{position:relative;overflow:hidden;background:#eee}.project-image{display:block;width:100%;aspect-ratio:1.55/1;object-fit:cover;object-position:top;transition:transform .35s ease}.project:hover .project-image{transform:scale(1.012)}.project-accent{position:absolute;left:0;right:0;bottom:0;height:8px;background:var(--acid)}.project-meta{display:grid;grid-template-columns:auto 1fr auto;gap:24px;align-items:start;padding-top:15px}.project-meta h3{margin:0;font-size:16px;font-weight:600;color:var(--ink)}.project-meta p{margin:1px 0 0;font-size:13px;line-height:1.5;color:var(--muted)}.project-meta span{font-size:16px}.steps{border-top:1px solid #bdbdb6}.steps>div{display:grid;grid-template-columns:52px 180px 1fr;gap:22px;padding:26px 0;border-bottom:1px solid #d6d6d0;align-items:start}.steps span{font-size:11px;color:var(--muted)}.steps h3{margin:0;font-size:15px;font-weight:600}.steps p{margin:0;font-size:14px;line-height:1.6;color:var(--muted)}.faq{border-top:1px solid var(--line)}.faq details{border-bottom:1px solid var(--line)}.faq summary{list-style:none;cursor:pointer;padding:23px 40px 23px 0;font-size:16px;font-weight:600;position:relative}.faq summary::-webkit-details-marker{display:none}.faq summary:after{content:'+';position:absolute;right:2px;top:20px;font-size:21px;font-weight:400}.faq details[open] summary:after{content:'−'}.faq details p{max-width:650px;margin:0;padding:0 40px 24px 0;font-size:14px;line-height:1.65;color:var(--muted)}.contact{padding:108px 0;background:#171717;color:#fff}.contact-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,.75fr);gap:90px;align-items:end}.contact h2{color:#fff}.dark-label{color:#8d8d86}.contact-side{display:flex;flex-direction:column;align-items:flex-start}.contact-side p{max-width:430px;margin:0 0 30px;font-size:15px;line-height:1.6;color:#b9b9b2}.contact-main{font-size:clamp(1.7rem,3vw,2.6rem);letter-spacing:-.03em;color:#fff;text-decoration:none;border-bottom:3px solid var(--acid);padding-bottom:4px}.contact-mail{margin-top:15px;font-size:14px;color:#cfcfc8;text-decoration:none;border-bottom:1px solid #555;padding-bottom:3px}.contact-main:hover,.contact-mail:hover{color:var(--acid)}
        @media(max-width:900px){.hero-copy,.split,.contact-grid{grid-template-columns:1fr;gap:38px}.hero-side{max-width:520px}.section{padding:82px 0}.projects{grid-template-columns:1fr}.service-row{grid-template-columns:180px 1fr}.steps>div{grid-template-columns:46px 145px 1fr}.section-head{align-items:start}}
        @media(max-width:620px){.wrap{width:min(100% - 32px,1180px)}.hero{padding:108px 0 68px}.hero-copy{margin-bottom:38px}.hero h1{font-size:clamp(2.65rem,13vw,4.2rem)}.hero-image{aspect-ratio:1.45/1;object-position:35% center}.accent-line{height:8px}.section{padding:68px 0}.section h2,.contact h2{font-size:clamp(2.25rem,11vw,3.6rem)}.service-row{grid-template-columns:1fr;gap:8px}.steps>div{grid-template-columns:38px 1fr;gap:12px 10px}.steps>div p{grid-column:2}.section-head{display:block}.section-head>p{margin-top:18px}.project-meta{grid-template-columns:1fr auto;gap:8px}.project-meta p{grid-column:1/2}.project-meta span{grid-column:2;grid-row:1/3}.contact{padding:76px 0}}
      `}</style>
    </>
  )
}
