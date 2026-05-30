import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jak pracuji | Tvorba webu krok za krokem',
  description: 'Od první zprávy po hotový web. Šest kroků, transparentní cena, živý odkaz na rozpracovanou verzi po celou dobu tvorby.',
  alternates: { canonical: 'https://verno.cz/jak-pracuji' },
  openGraph: {
    title: 'Jak pracuji | Tvorba webu krok za krokem',
    description: 'Od první zprávy po hotový web. Šest kroků, transparentní cena, živý odkaz na rozpracovanou verzi po celou dobu tvorby.',
    url: 'https://verno.cz/jak-pracuji',
    images: [{ url: '/og-verno-2.jpg', width: 1200, height: 630, alt: 'VERNO - Tvorba moderních webových prezentací' }],
  },
  robots: { index: true, follow: true },
}

const steps = [
  {
    n: '01',
    title: 'Ozvete se',
    body: (
      <p>
        Napíšete přes formulář, e-mailem nebo zavoláte. Stačí pár vět o tom, co děláte, co od webu čekáte a pro jaké návštěvníky je určený.
      </p>
    ),
  },
  {
    n: '02',
    title: 'Domluvíme se',
    body: (
      <>
        <p>Společně si ujasníme:</p>
        <ul>
          <li>co má web splnit,</li>
          <li>komu je určený,</li>
          <li>jaké služby nabízíte,</li>
          <li>jak má působit,</li>
          <li>a jaké informace na něm mají být.</li>
        </ul>
        <p>
          Ve většině případů stačí e-mail. Je to rychlé, přehledné a můžeme se k informacím kdykoliv vrátit. Když je potřeba probrat něco důkladněji, zavoláme si nebo domluvíme schůzku.
        </p>
      </>
    ),
  },
  {
    n: '03',
    title: 'Dodáte podklady a domluvíme cenu',
    body: (
      <>
        <p>Od vás budu potřebovat:</p>
        <ul>
          <li>texty nebo alespoň základní podklady k obsahu,</li>
          <li>fotografie,</li>
          <li>kontaktní údaje,</li>
          <li>reference nebo ukázky práce, pokud máte,</li>
          <li>doménu, případně pomohu s jejím výběrem a nastavením.</li>
        </ul>
        <p>
          Když nemáte texty nebo nevíte, co napsat, nevadí. Vycházím z toho, co mi pošlete.
        </p>
        <p>
          Jakmile mám podklady a přehled o rozsahu, pošlu pevnou cenu za celý web.
        </p>
        <p>
          Před zahájením prací se hradí záloha 50 %. Doplatek probíhá před spuštěním hotového webu.
        </p>
      </>
    ),
  },
  {
    n: '04',
    title: 'Tvořím a průběžně informuji',
    body: (
      <>
        <p>Navrhnu strukturu, upravím texty, vytvořím design a celý web postavím.</p>
        <p>
          Dostanete živý odkaz na rozpracovaný web. Můžete si ho otevřít na mobilu a projít si ho. Vidíte, jak vzniká.
        </p>
        <p>
          Ozvu se, když potřebuji něco potvrdit nebo doladit. Vy se ozvete, když budete chtít něco upravit.
        </p>
        <p>Web stavím v čistém kódu bez složitých systémů a pluginů. Díky tomu je:</p>
        <ul>
          <li>rychlý,</li>
          <li>přehledný,</li>
          <li>bezpečný,</li>
          <li>stabilní,</li>
          <li>a připravený fungovat dlouhodobě bez technických problémů.</li>
        </ul>
        <p>
          Místo desítek pluginů, které se mezi sebou hádají, je u čistého kódu riziko, že web zničehonic přestane fungovat, minimální.
        </p>
      </>
    ),
  },
  {
    n: '05',
    title: 'Předám vám web',
    body: (
      <>
        <p>
          Ve chvíli, kdy si web společně odsouhlasíme, přesunu ho z testovací adresy na vaši doménu a vše finálně nastavím.
        </p>
        <p>Dostanete:</p>
        <ul>
          <li>hotový funkční web,</li>
          <li>napojení domény,</li>
          <li>zabezpečené HTTPS,</li>
          <li>základní SEO nastavení,</li>
          <li>propojení s analytickým nástrojem,</li>
          <li>responzivní zobrazení pro mobil i počítač,</li>
          <li>kompletní zdrojový kód,</li>
          <li>stručnou dokumentaci.</li>
        </ul>
        <p>
          Po spuštění si web ještě jednou společně projdeme a ověříme, že vše funguje tak, jak má.
        </p>
        <p>
          Web je váš. Kód i obsah. Pokud se někdy rozhodnete pokračovat jinak, můžete si web převést kamkoliv. K jinému webaři, na vlastní hosting nebo pod vlastní správu.
        </p>
      </>
    ),
  },
  {
    n: '06',
    title: 'Hosting, péče a drobné úpravy',
    body: (
      <>
        <p>
          Celou technickou správu a hosting řeším za vás. Web běží na infrastruktuře VERNO, která využívá moderní technologie pro Next.js s vysokým zabezpečením a rychlostí. Samotný hosting u běžných firemních webů neúčtuji, protože provoz v tomto rozsahu je zdarma.
        </p>
        <p>Platíte pouze doménu u svého registrátora.</p>
        <p>
          Kdykoliv budete potřebovat cokoliv upravit, stačí napsat. Změna textu, výměna fotky, doplnění služby nebo drobné rozšíření většinou zabere chvíli a řeším to formou hodinové sazby.
        </p>
        <p>
          Dokud web běží u mě, technické chyby řeším bezplatně. Pokud by se něco rozbilo kvůli změnám prohlížečů, aktualizacím nebo chybě v kódu. Úpravy obsahu a nové funkce už jsou běžně placené změny.
        </p>
        <p>
          Web běží na stejné infrastruktuře, kterou využívají velké světové firmy a služby s vysokými nároky na rychlost a bezpečnost.
        </p>
      </>
    ),
  },
]

const dostanete = [
  'prezentační web na míru postavený od základu,',
  'pevnou cenu domluvenou předem,',
  'preview odkaz na dobu tvorby,',
  'kompletně upravené texty,',
  'zdrojový kód po předání,',
  'hosting bez měsíčních poplatků,',
  'technickou záruku po dobu spolupráce,',
  'jednoho člověka, který celý web řeší od začátku do konce.',
]

const nedostanete = [
  'e-shop s košíkem a skladovým systémem,',
  'rozsáhlý redakční systém pro tým lidí,',
  'správu sociálních sítí nebo placených reklamních kampaní,',
]

const faq = [
  {
    q: 'Jak dlouho trvá, než bude web hotový?',
    a: 'To záleží na rozsahu a také rychlosti dodání podkladů. Menší web bývá hotový během několika týdnů. Větší prezentační web obvykle za měsíc až dva. Přesnější odhad dostanete po první domluvě.',
  },
  {
    q: 'Co když nemám texty ani jasnou představu?',
    a: 'To je celkem běžné. Hodně lidí nepřijde s hotovým zadáním. Vysvětlíte mi, co děláte, pro koho a jak chcete působit. Zbytek společně poskládáme.',
  },
  {
    q: 'Co když po předání budu chtít něco změnit?',
    a: 'Menší úpravy řeším průběžně formou hodinové sazby. Větší změny nebo nové sekce řešíme jako navazující projekt.',
  },
  {
    q: 'Co se stane, když u vás nechci dál hostovat?',
    a: 'Web je váš a můžete si ho kdykoliv přesunout jinam. S technickým přesunem na jiné místo vám ráda pomůžu, aby všechno běželo bez výpadku dál.',
  },
  {
    q: 'Proč nedělám e-shopy?',
    a: 'Protože e-shop je jiný typ projektu než prezentační web. Vyžaduje jinou technickou specializaci.',
  },
  {
    q: 'Můžu si web spravovat sám/sama?',
    a: 'Vlastní administraci k webu nedávám, protože bývá u stránek nejčastějším zdrojem problémů a chyb. Kdykoliv budete potřebovat cokoliv změnit, stačí mi napsat. Všechny menší úpravy dělám obratem v rámci hodinové sazby. Vy máte jistotu, že web zůstane technicky čistý a rychlý.',
  },
]

export default function JakPracuji() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Jak dlouho trvá, než bude web hotový?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To záleží na rozsahu a také rychlosti dodání podkladů. Menší web bývá hotový během několika týdnů. Větší prezentační web obvykle za měsíc až dva. Přesnější odhad dostanete po první domluvě.',
        },
      },
      {
        '@type': 'Question',
        name: 'Co když nemám texty ani jasnou představu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To je celkem běžné. Hodně lidí nepřijde s hotovým zadáním. Vysvětlíte mi, co děláte, pro koho a jak chcete působit. Zbytek společně poskládáme.',
        },
      },
      {
        '@type': 'Question',
        name: 'Co když po předání budu chtít něco změnit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Menší úpravy řeším průběžně formou hodinové sazby. Větší změny nebo nové sekce řešíme jako navazující projekt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Co se stane, když u vás nechci dál hostovat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Web je váš a můžete si ho kdykoliv přesunout jinam. S technickým přesunem na jiné místo vám ráda pomůžu, aby všechno běželo bez výpadku dál.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proč nedělám e-shopy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Protože e-shop je jiný typ projektu než prezentační web. Vyžaduje jinou technickou specializaci.',
        },
      },
      {
        '@type': 'Question',
        name: 'Můžu si web spravovat sám/sama?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vlastní administraci k webu nedávám, protože bývá u stránek nejčastějším zdrojem problémů a chyb. Kdykoliv budete potřebovat cokoliv změnit, stačí mi napsat. Všechny menší úpravy dělám obratem v rámci hodinové sazby. Vy máte jistotu, že web zůstane technicky čistý a rychlý.',
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero-orb" />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 20 }}>
            Od první zprávy po hotový web
          </p>
          <h1 className="page-hero-title">Jak pracuji</h1>
          <p className="page-hero-sub">
            Žádné nekonečné porady přes Zoom. Píšeme si a vy během tvorby vidíte rozpracovaný web. Jak je to krok po kroku?
          </p>
        </div>
      </div>

      {/* Kroky */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(72px,10vw,128px) 0' }}>
        <div className="inner">
          <div className="jp-steps">
            {steps.map((s, i) => (
              <article key={s.n} className="jp-step reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="jp-step-num">
                  <span className="jp-step-num-label">Krok</span>
                  <span className="jp-step-num-digits">{s.n}</span>
                </div>
                <div className="jp-step-body">
                  <h2 className="jp-step-title">{s.title}</h2>
                  <div className="jp-step-text">{s.body}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dostanete / nedostanete */}
      <section style={{ background: 'var(--deep)', padding: 'clamp(72px,10vw,128px) 0', color: 'var(--cloud)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,154,196,.10),transparent 70%)', right: -80, top: 40, filter: 'blur(50px)', pointerEvents: 'none' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <div className="jp-twocol">
            <div className="reveal">
              <p className="eyebrow" style={{ color: 'var(--capri)', marginBottom: 20 }}>Co dostanete</p>
              <h2 className="jp-h2 jp-h2-lt">Co všechno je v ceně</h2>
              <ul className="jp-list jp-list-plus">
                {dostanete.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="reveal d1">
              <p className="eyebrow" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 20 }}>Co se mnou nedostanete</p>
              <h2 className="jp-h2 jp-h2-lt">A co u mě nehledejte</h2>
              <ul className="jp-list jp-list-minus">
                {nedostanete.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(72px,10vw,128px) 0' }}>
        <div className="inner">
          <div style={{ marginBottom: 'clamp(40px,6vw,72px)' }}>
            <p className="eyebrow reveal" style={{ marginBottom: 20 }}>Otázky a odpovědi</p>
            <h2 className="jp-h2 reveal d1">Co by vás mohlo zajímat</h2>
          </div>
          <div className="jp-faq">
            {faq.map((item, i) => (
              <details key={i} className="jp-faq-item reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <summary className="jp-faq-q">
                  <span>{item.q}</span>
                  <span className="jp-faq-icon" aria-hidden="true">+</span>
                </summary>
                <div className="jp-faq-a">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--cloud)', padding: '0 0 clamp(72px,10vw,128px)' }}>
        <div className="inner">
          <div className="jp-cta reveal">
            <h2 className="jp-cta-title">Nečekejte na „někdy“.</h2>
            <p className="jp-cta-sub">
              Váš nový web můžeme začít plánovat už dnes.
            </p>
            <a href="/kontakt" className="btn btn-ink jp-cta-btn">Napište mi →</a>
          </div>
        </div>
      </section>

      <style>{`
        /* ========== KROKY ========== */
        .jp-steps {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 5vw, 64px);
          max-width: 880px;
          margin: 0 auto;
        }
        .jp-step {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: clamp(20px, 3vw, 48px);
          padding-bottom: clamp(40px, 5vw, 64px);
          border-bottom: 1px solid rgba(28,28,30,.08);
        }
        .jp-step:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .jp-step-num {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .jp-step-num-label {
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          letter-spacing: .24em;
          text-transform: uppercase;
          color: var(--dim);
          margin-bottom: 4px;
        }
        .jp-step-num-digits {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 7vw, 4.8rem);
          font-weight: 800;
          letter-spacing: -.05em;
          line-height: 1;
          color: var(--capri);
        }
        .jp-step-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.45rem, 3vw, 2rem);
          font-weight: 800;
          letter-spacing: -.03em;
          line-height: 1.1;
          color: var(--ink);
          margin: 8px 0 20px;
        }
        .jp-step-text {
          font-size: 1rem;
          line-height: 1.78;
          color: var(--ink-s);
        }
        .jp-step-text p {
          margin: 0 0 14px;
        }
        .jp-step-text p:last-child {
          margin-bottom: 0;
        }
        .jp-step-text ul {
          margin: 4px 0 14px;
          padding-left: 22px;
        }
        .jp-step-text li {
          margin: 0 0 6px;
          color: var(--ink-s);
        }

        @media (max-width: 720px) {
          .jp-step {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .jp-step-num-digits {
            font-size: 3rem;
          }
        }

        /* ========== DOSTANETE / NEDOSTANETE ========== */
        .jp-twocol {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          max-width: 1080px;
          margin: 0 auto;
        }
        @media (max-width: 760px) {
          .jp-twocol { grid-template-columns: 1fr; gap: 56px; }
        }
        .jp-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3.3vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -.035em;
          line-height: 1.1;
          margin: 0 0 28px;
          color: var(--ink);
        }
        .jp-h2-lt {
          color: var(--cloud);
        }
        .jp-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .jp-list li {
          position: relative;
          padding-left: 28px;
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(240,237,232,.75);
          margin-bottom: 12px;
        }
        .jp-list-plus li::before {
          content: '+';
          position: absolute;
          left: 0;
          top: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          color: var(--capri);
          font-size: 1.15rem;
          line-height: 1.5;
        }
        .jp-list-minus li::before {
          content: '−';
          position: absolute;
          left: 0;
          top: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          color: rgba(240,237,232,.4);
          font-size: 1.15rem;
          line-height: 1.5;
        }

        /* ========== FAQ ========== */
        .jp-faq {
          max-width: 820px;
          margin: 0 auto;
        }
        .jp-faq-item {
          border-bottom: 1px solid rgba(28,28,30,.10);
        }
        .jp-faq-item[open] {
          border-bottom-color: rgba(28,28,30,.18);
        }
        .jp-faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 22px 0;
          cursor: pointer;
          list-style: none;
          font-family: 'Syne', sans-serif;
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -.015em;
          transition: color .2s;
        }
        .jp-faq-q:hover {
          color: var(--capri);
        }
        .jp-faq-q::-webkit-details-marker { display: none; }
        .jp-faq-icon {
          font-family: 'Syne', sans-serif;
          font-weight: 400;
          font-size: 1.6rem;
          color: var(--capri);
          line-height: 1;
          transition: transform .25s ease;
          flex-shrink: 0;
        }
        .jp-faq-item[open] .jp-faq-icon {
          transform: rotate(45deg);
        }
        .jp-faq-a {
          padding: 0 0 24px;
          max-width: 720px;
        }
        .jp-faq-a p {
          margin: 0;
          font-size: .98rem;
          line-height: 1.78;
          color: var(--ink-s);
        }

        /* ========== CTA ========== */
        .jp-cta {
          max-width: 760px;
          margin: 0 auto;
          padding: clamp(48px, 7vw, 80px) clamp(28px, 5vw, 64px);
          background: var(--ink);
          color: var(--cloud);
          border-radius: 4px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .jp-cta-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -.04em;
          line-height: 1.05;
          margin: 0 0 18px;
          color: var(--cloud);
        }
        .jp-cta-sub {
          font-size: 1.02rem;
          line-height: 1.7;
          color: rgba(240,237,232,.7);
          margin: 0 0 32px;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
        }
        .jp-cta-btn {
          background: var(--capri);
          color: var(--cloud);
          padding: 14px 32px;
          font-size: .95rem;
        }
        .jp-cta-btn:hover {
          background: var(--cloud);
          color: var(--ink);
        }
      `}</style>
    </>
  )
}
