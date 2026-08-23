const showcases = [
  {
    href: '/ukazky/instalater/',
    eyebrow: 'Instalatér a topenář',
    title: 'Ukázkový web pro instalatéra a topenáře',
    description: 'Služby, oblast výjezdu, realizace, časté dotazy a poptávka.',
    image: '/screens/showcase-instalater.webp',
    alt: 'Náhled ukázkového webu pro instalatéra a topenáře od SpustWeb.cz',
  },
  {
    href: '/ukazky/autoservis/',
    eyebrow: 'Autoservis',
    title: 'Ukázkový web pro autoservis',
    description: 'Servisní úkony, orientační ceny, průběh zakázky a kontakt.',
    image: '/screens/showcase-autoservis.webp',
    alt: 'Náhled ukázkového webu pro autoservis od SpustWeb.cz',
  },
  {
    href: '/ukazky/penzion/',
    eyebrow: 'Penzion',
    title: 'Ukázkový web pro penzion',
    description: 'Pokoje, vybavení, okolí, praktické informace a poptávka pobytu.',
    image: '/screens/showcase-penzion.webp',
    alt: 'Náhled ukázkového webu pro penzion od SpustWeb.cz',
  },
  {
    href: '/ukazky/manikura-pedikura/',
    eyebrow: 'Manikúra a pedikúra',
    title: 'Ukázkový web pro manikúru a pedikúru',
    description: 'Ceník, ukázky práce, studio a kontakt.',
    image: '/screens/showcase-manikura-pedikura.webp',
    alt: 'Náhled ukázkového webu pro manikúru a pedikúru od SpustWeb.cz',
  },
  {
    href: '/ukazky/barber/',
    eyebrow: 'Barber shop',
    title: 'Ukázkový web pro barber shop',
    description: 'Služby, ceník, barbeři, provozovna a objednání přes kontakt.',
    image: '/screens/showcase-barber.webp',
    alt: 'Náhled ukázkového webu pro barber shop od SpustWeb.cz',
  },
  {
    href: '/ukazky/fitness-trenerka/',
    eyebrow: 'Fitness trenérka',
    title: 'Ukázkový web pro fitness trenérku',
    description: 'Lekce, rozvrh, ceny, informace pro první návštěvu a kontakt.',
    image: '/screens/showcase-fitness-trenerka.webp',
    alt: 'Náhled ukázkového webu pro fitness trenérku od SpustWeb.cz',
  },
]

export default function ShowcaseConcepts() {
  return (
    <section id="ukazky" className="showcase-concepts section" aria-labelledby="showcase-concepts-title">
      <div className="wrap">
        <div className="showcase-concepts-head">
          <div>
            <p className="label">Ukázkové koncepty</p>
            <h2 id="showcase-concepts-title">Jak může nový web vypadat.</h2>
          </div>
          <p>
            Připravila jsem několik ukázkových webů pro různé obory. Nejde o šablony. Každý ukazuje jednu z možností, jak lze uspořádat obsah, služby, fotografie a kontakt podle konkrétního podnikání.
          </p>
        </div>

        <div className="showcase-concepts-grid">
          {showcases.map((showcase) => (
            <a className="showcase-concept" href={showcase.href} key={showcase.href}>
              <div className="showcase-concept-visual">
                <img src={showcase.image} alt={showcase.alt} width="1400" height="864" loading="lazy" decoding="async" />
                <span>{showcase.eyebrow}</span>
              </div>
              <div className="showcase-concept-copy">
                <div>
                  <h3>{showcase.title}</h3>
                  <p>{showcase.description}</p>
                </div>
                <span aria-hidden="true">Prohlédnout koncept →</span>
              </div>
            </a>
          ))}
        </div>

        <p className="showcase-concepts-note">
          <strong>Výsledný web navrhnu podle vašeho podnikání.</strong> Ukázky nejsou hotové šablony k převzetí.
        </p>
      </div>

      <style>{`
        .showcase-concepts{background:#fff}
        .showcase-concepts-head{display:grid;grid-template-columns:.8fr 1.2fr;gap:64px;align-items:end;margin-bottom:30px}
        .showcase-concepts-head>p{max-width:560px;margin:0;font-size:12px;line-height:1.62;color:var(--muted)}
        .showcase-concepts-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .showcase-concept{display:block;padding:18px 18px 20px;color:inherit;text-decoration:none;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
        .showcase-concept-visual{position:relative;overflow:hidden;background:#ecece8;aspect-ratio:1.62/1}
        .showcase-concept-visual:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 62%,rgba(0,0,0,.46))}
        .showcase-concept-visual img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .28s ease}
        .showcase-concept:hover .showcase-concept-visual img{transform:scale(1.012)}
        .showcase-concept-visual>span{position:absolute;left:12px;bottom:10px;z-index:1;color:#fff;font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        .showcase-concept-copy{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:end;padding-top:13px}
        .showcase-concept-copy h3{margin:0 0 6px;font-size:14px;line-height:1.25;font-weight:600;color:var(--ink)}
        .showcase-concept-copy p{max-width:390px;margin:0;font-size:10.5px;line-height:1.5;color:var(--muted)}
        .showcase-concept-copy>span{padding-bottom:1px;font-size:9.5px;font-weight:600;color:#53534f;white-space:nowrap}
        .showcase-concepts-note{margin:22px 0 0;padding-top:18px;border-top:1px solid var(--line);font-size:11px;line-height:1.55;color:var(--muted)}
        .showcase-concepts-note strong{color:var(--ink);font-weight:600}
        @media(max-width:820px){
          .showcase-concepts-head{grid-template-columns:1fr;gap:18px}
          .showcase-concepts-grid{grid-template-columns:1fr 1fr}
          .showcase-concept{padding:14px}
          .showcase-concept-copy{grid-template-columns:1fr;gap:10px}
          .showcase-concept-copy>span{white-space:normal}
        }
        @media(max-width:560px){
          .showcase-concepts-grid{grid-template-columns:1fr}
          .showcase-concept{padding:13px}
          .showcase-concept-copy h3{font-size:13px}
        }
      `}</style>
    </section>
  )
}
