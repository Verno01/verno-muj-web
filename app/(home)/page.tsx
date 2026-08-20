import Image from 'next/image'

const included = [
  'Jednostránkový nebo menší vícestránkový prezentační web',
  'Responzivní zobrazení pro mobil, tablet i počítač',
  'Kontaktní formulář nebo přímý kontakt podle potřeby',
  'Základní technické SEO a nastavení pro vyhledávače',
  'Napojení na Google Analytics 4',
  'Nasazení na doménu a spuštění webu',
]

const references = [
  {
    name: 'Rovino',
    url: 'https://rovino.cz',
    image: '/screens/rovino.jpg',
    alt: 'Náhled webu Rovino pro zemní a stavební práce',
    description: 'Prezentační web pro firmu zaměřenou na zemní a stavební práce.',
  },
  {
    name: '5class',
    url: 'https://5class.cz',
    image: '/screens/5class.jpg',
    alt: 'Náhled webu 5class pro prémiovou osobní dopravu',
    description: 'Prezentační web pro prémiovou osobní dopravu s řidičem.',
  },
  {
    name: 'Pětilistá',
    url: 'https://www.petilista.cz',
    image: 'https://www.petilista.cz/og-nahled.jpg',
    alt: 'Náhled webu Pětilistá pro péči o hrobová místa',
    description: 'Web služby péče o hrobová místa s online objednávkou.',
  },
]

export default function Home() {
  return (
    <>
      <section className="verno-hero">
        <div className="verno-shell">
          <p className="verno-kicker">Tvorba prezentačních webů</p>
          <h1>Jednoduchý firemní web.<br /><span>8 900 Kč bez DPH.</span></h1>
          <p className="verno-lead">Moderní prezentační web pro živnostníky a malé firmy. Jedna jasná cena a vše potřebné pro spuštění.</p>
          <div className="verno-actions">
            <a className="verno-primary" href="tel:+420705911941">Zavolat</a>
            <a className="verno-secondary" href="mailto:info@verno.cz">Napsat e mail</a>
          </div>
          <p className="verno-note">Dodání obvykle do 1 až 2 týdnů.</p>
        </div>
      </section>

      <section id="v-cene" className="verno-section">
        <div className="verno-shell verno-grid-two">
          <div>
            <p className="verno-kicker">Co dostanete</p>
            <h2>V ceně je vše potřebné.</h2>
          </div>
          <ul className="verno-included">
            {included.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section id="reference" className="verno-section verno-section-soft">
        <div className="verno-shell">
          <div className="verno-section-head">
            <p className="verno-kicker">Reference</p>
            <h2>Hotové weby.</h2>
          </div>
          <div className="verno-references">
            {references.map((reference) => (
              <a key={reference.name} href={reference.url} target="_blank" rel="noreferrer" className="verno-reference">
                <div className="verno-preview">
                  {reference.image.startsWith('http') ? (
                    <img src={reference.image} alt={reference.alt} loading="lazy" />
                  ) : (
                    <Image src={reference.image} alt={reference.alt} width={1200} height={760} sizes="(max-width: 760px) 100vw, 33vw" />
                  )}
                </div>
                <div className="verno-reference-copy">
                  <h3>{reference.name}</h3>
                  <p>{reference.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="postup" className="verno-section">
        <div className="verno-shell">
          <div className="verno-section-head">
            <p className="verno-kicker">Jak to probíhá</p>
            <h2>Tři jednoduché kroky.</h2>
          </div>
          <div className="verno-steps">
            <article><span>01</span><h3>Ozvete se</h3><p>Nejrychlejší je krátký telefonát. Pokud chcete, můžete nejdřív napsat.</p></article>
            <article><span>02</span><h3>Pošlu vám zadání</h3><p>Dostanete jasný seznam toho, co od vás potřebuji k přípravě webu.</p></article>
            <article><span>03</span><h3>Web připravím a spustím</h3><p>Hotový web společně zkontrolujeme, doladíme potřebné detaily a nasadím ho na doménu.</p></article>
          </div>
        </div>
      </section>

      <section id="kontakt" className="verno-contact">
        <div className="verno-shell verno-contact-inner">
          <p className="verno-kicker">Kontakt</p>
          <h2>Chcete nový web?</h2>
          <p>Stačí se ozvat. Nejlépe telefonicky.</p>
          <div className="verno-contact-links">
            <a href="tel:+420705911941">+420 705 911 941</a>
            <a href="mailto:info@verno.cz">info@verno.cz</a>
          </div>
        </div>
      </section>

      <style>{`
        .verno-shell{width:min(1180px,calc(100% - 44px));margin:0 auto}.verno-hero{min-height:78vh;display:flex;align-items:center;padding:150px 0 90px;background:#fbfbf9}.verno-kicker{margin:0 0 20px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#777}.verno-hero h1,.verno-section h2,.verno-contact h2{font-family:'Syne',sans-serif;color:#111;letter-spacing:-.055em}.verno-hero h1{max-width:960px;margin:0;font-size:clamp(3.1rem,8vw,7.6rem);line-height:.95;font-weight:700}.verno-hero h1 span{color:#6d56d8}.verno-lead{max-width:650px;margin:30px 0 0;font-size:clamp(1.05rem,1.6vw,1.25rem);line-height:1.65;color:#555}.verno-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}.verno-primary,.verno-secondary{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 24px;border-radius:999px;text-decoration:none;font-weight:600;font-size:14px}.verno-primary{background:#111;color:#fff}.verno-secondary{border:1px solid #d8d8d3;color:#111;background:#fff}.verno-note{margin:18px 0 0;font-size:13px;color:#777}.verno-section{padding:110px 0;background:#fff;border-top:1px solid #ecece8}.verno-section-soft{background:#f7f7f4}.verno-grid-two{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;align-items:start}.verno-section h2,.verno-contact h2{margin:0;font-size:clamp(2.1rem,4.7vw,4.6rem);line-height:1;font-weight:650}.verno-included{list-style:none;padding:0;margin:0}.verno-included li{padding:18px 0;border-bottom:1px solid #e5e5e1;font-size:17px;color:#282828}.verno-section-head{margin-bottom:48px}.verno-references{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.verno-reference{text-decoration:none;color:inherit}.verno-preview{aspect-ratio:16/10;background:#eaeae5;border:1px solid #e1e1dc;overflow:hidden;border-radius:18px}.verno-preview img{width:100%;height:100%;display:block;object-fit:cover;object-position:top;transition:transform .35s ease}.verno-reference:hover .verno-preview img{transform:scale(1.02)}.verno-reference-copy{padding:18px 2px 0}.verno-reference-copy h3{margin:0 0 7px;font-family:'Syne',sans-serif;font-size:20px;letter-spacing:-.02em;color:#111}.verno-reference-copy p{margin:0;font-size:14px;line-height:1.55;color:#666}.verno-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:36px}.verno-steps article{padding-top:22px;border-top:1px solid #cfcfca}.verno-steps span{font-size:11px;letter-spacing:.14em;color:#777}.verno-steps h3{margin:18px 0 8px;font-family:'Syne',sans-serif;font-size:21px;color:#111}.verno-steps p{margin:0;font-size:15px;line-height:1.65;color:#666}.verno-contact{padding:120px 0;background:#111;color:#fff}.verno-contact .verno-kicker{color:#929292}.verno-contact h2{color:#fff}.verno-contact-inner>p:not(.verno-kicker){margin:24px 0 34px;font-size:18px;color:#b8b8b8}.verno-contact-links{display:flex;gap:28px;flex-wrap:wrap}.verno-contact-links a{font-size:clamp(1.1rem,2vw,1.45rem);color:#fff;text-decoration:none;border-bottom:1px solid #555;padding-bottom:4px}.verno-primary:hover{background:#2a2a2a}.verno-secondary:hover{border-color:#999}.verno-contact-links a:hover{border-color:#fff}@media(max-width:820px){.verno-hero{min-height:auto;padding:125px 0 76px}.verno-grid-two{grid-template-columns:1fr;gap:34px}.verno-references,.verno-steps{grid-template-columns:1fr}.verno-reference+.verno-reference{margin-top:14px}.verno-section{padding:78px 0}.verno-contact{padding:82px 0}}@media(max-width:520px){.verno-shell{width:min(100% - 32px,1180px)}.verno-hero h1{font-size:clamp(2.7rem,15vw,4.7rem)}.verno-actions{flex-direction:column;align-items:stretch}.verno-primary,.verno-secondary{width:100%}}
      `}</style>
    </>
  )
}
