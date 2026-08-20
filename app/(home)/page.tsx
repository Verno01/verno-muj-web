import Image from 'next/image'

const references = [
  {
    name: 'Rovino',
    url: 'https://www.rovino.cz',
    image: '/screens/rovino.jpg',
    alt: 'Náhled webu Rovino',
    description: 'Firemní web pro zemní a stavební práce.',
  },
  {
    name: '5class',
    url: 'https://5class.cz',
    image: '/screens/5class.jpg',
    alt: 'Náhled webu 5class',
    description: 'Web pro osobní dopravu s řidičem.',
  },
  {
    name: 'Pětilistá',
    url: 'https://www.petilista.cz',
    image: 'https://www.petilista.cz/og-nahled.jpg',
    alt: 'Náhled webu Pětilistá',
    description: 'Web služby péče o hrobová místa s online objednávkou.',
  },
]

const scope = [
  'Návrh a zpracování webu',
  'Zobrazení pro telefon, tablet i počítač',
  'Kontaktní formulář nebo přímé kontakty',
  'Základní technické SEO',
  'Google Analytics 4',
  'Nasazení na vaši doménu',
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-main">
            <h1>Prezentační web pro živnostníky a malé firmy.</h1>
          </div>
          <div className="hero-side">
            <p className="price">8 900 Kč <span>bez DPH</span></p>
            <p className="intro">Návrh, zpracování a spuštění webu v jedné ceně.</p>
            <div className="hero-contact">
              <a href="tel:+420705911941">+420 705 911 941</a>
              <a href="mailto:info@verno.cz">info@verno.cz</a>
            </div>
          </div>
        </div>
      </section>

      <section id="nabidka" className="section offer">
        <div className="wrap section-grid">
          <div>
            <h2>Prezentační web</h2>
            <p className="muted">Jednostránkový nebo menší vícestránkový web podle rozsahu obsahu.</p>
          </div>
          <div>
            <ul className="scope">
              {scope.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="delivery">Dodání obvykle do 1 až 2 týdnů od dodání podkladů.</p>
          </div>
        </div>
      </section>

      <section id="reference" className="section work">
        <div className="wrap">
          <h2>Vybrané práce</h2>
          <div className="work-list">
            {references.map((item, index) => (
              <a className="work-item" href={item.url} target="_blank" rel="noreferrer" key={item.name}>
                <div className="work-meta">
                  <span className="work-number">0{index + 1}</span>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="work-open" aria-hidden="true">↗</span>
                </div>
                <div className="work-image">
                  {item.image.startsWith('http') ? (
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  ) : (
                    <Image src={item.image} alt={item.alt} width={1400} height={900} sizes="(max-width: 800px) 100vw, 1200px" />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="postup" className="section process">
        <div className="wrap section-grid">
          <h2>Domluva</h2>
          <div className="process-copy">
            <p>Nejrychlejší je krátký telefonát. Pokud vám vyhovuje spíš e mail, napište.</p>
            <p>Po úvodní domluvě pošlu přesný seznam podkladů, které budu pro přípravu webu potřebovat.</p>
          </div>
        </div>
      </section>

      <section id="kontakt" className="contact">
        <div className="wrap contact-grid">
          <h2>Kontakt</h2>
          <div className="contact-links">
            <a href="tel:+420705911941">+420 705 911 941</a>
            <a href="mailto:info@verno.cz">info@verno.cz</a>
          </div>
        </div>
      </section>

      <style>{`
        :global(body){background:#fff;color:#151515;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif}
        .wrap{width:min(1240px,calc(100% - 64px));margin:0 auto}
        .hero{padding:190px 0 120px;background:#fff}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(280px,.65fr);gap:80px;align-items:end}
        .hero h1{margin:0;max-width:920px;font-size:clamp(3.5rem,7.4vw,7.2rem);font-weight:500;line-height:.96;letter-spacing:-.065em;color:#111}
        .hero-side{padding-bottom:8px}
        .price{margin:0 0 28px;font-size:clamp(2rem,3.4vw,3.25rem);line-height:1;letter-spacing:-.045em;font-weight:500;color:#111}
        .price span{display:block;margin-top:8px;font-size:13px;letter-spacing:0;font-weight:400;color:#777}
        .intro{max-width:360px;margin:0 0 32px;font-size:17px;line-height:1.55;color:#444}
        .hero-contact{display:flex;flex-direction:column;align-items:flex-start;gap:7px}
        .hero-contact a,.contact-links a{color:#111;text-decoration:none;border-bottom:1px solid #bdbdbd;padding-bottom:2px}
        .hero-contact a{font-size:14px}
        .section{padding:110px 0;border-top:1px solid #dedede;background:#fff}
        .section-grid{display:grid;grid-template-columns:minmax(240px,.72fr) minmax(0,1.28fr);gap:90px}
        .section h2,.contact h2{margin:0;font-size:clamp(2rem,3.6vw,3.4rem);font-weight:500;line-height:1;letter-spacing:-.045em;color:#111}
        .muted{max-width:360px;margin:24px 0 0;font-size:15px;line-height:1.6;color:#707070}
        .scope{list-style:none;padding:0;margin:0;border-top:1px solid #d9d9d9}
        .scope li{padding:17px 0;border-bottom:1px solid #d9d9d9;font-size:16px;line-height:1.45;color:#222}
        .delivery{margin:25px 0 0;font-size:14px;line-height:1.55;color:#666}
        .work{background:#f5f5f2}
        .work> .wrap > h2{margin-bottom:62px}
        .work-list{display:flex;flex-direction:column;gap:84px}
        .work-item{display:block;color:inherit;text-decoration:none}
        .work-meta{display:grid;grid-template-columns:52px 1fr auto;gap:20px;align-items:start;margin-bottom:18px}
        .work-number{padding-top:4px;font-size:12px;color:#888}
        .work-meta h3{margin:0 0 5px;font-size:20px;font-weight:500;letter-spacing:-.02em;color:#111}
        .work-meta p{margin:0;font-size:14px;line-height:1.5;color:#696969}
        .work-open{font-size:20px;font-weight:300;color:#777}
        .work-image{height:min(63vw,690px);max-height:690px;background:#e9e9e6;overflow:hidden;border:1px solid #d8d8d4}
        .work-image img{display:block;width:100%;height:100%;object-fit:cover;object-position:top;transition:transform .45s ease}
        .work-item:hover .work-image img{transform:scale(1.008)}
        .process-copy{max-width:660px}
        .process-copy p{margin:0 0 18px;font-size:17px;line-height:1.65;color:#333}
        .contact{padding:110px 0 120px;border-top:1px solid #dedede;background:#111;color:#fff}
        .contact-grid{display:grid;grid-template-columns:minmax(240px,.72fr) minmax(0,1.28fr);gap:90px;align-items:start}
        .contact h2{color:#fff}
        .contact-links{display:flex;flex-direction:column;align-items:flex-start;gap:16px}
        .contact-links a{font-size:clamp(1.55rem,3vw,2.8rem);letter-spacing:-.035em;color:#fff;border-bottom-color:#555}
        .contact-links a:hover{border-bottom-color:#fff}
        @media(max-width:900px){
          .wrap{width:min(100% - 40px,1240px)}
          .hero{padding:145px 0 84px}
          .hero-grid,.section-grid,.contact-grid{grid-template-columns:1fr;gap:48px}
          .hero-side{max-width:520px}
          .section{padding:82px 0}
          .work-list{gap:62px}
          .work-image{height:62vw}
          .contact{padding:82px 0 92px}
        }
        @media(max-width:520px){
          .wrap{width:min(100% - 28px,1240px)}
          .hero{padding:120px 0 68px}
          .hero h1{font-size:clamp(3rem,15vw,4.75rem)}
          .section{padding:66px 0}
          .work> .wrap > h2{margin-bottom:44px}
          .work-meta{grid-template-columns:36px 1fr auto;gap:10px}
          .work-image{height:66vw}
        }
      `}</style>
    </>
  )
}
