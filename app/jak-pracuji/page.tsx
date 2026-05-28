import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jak pracuji | Tvorba webu krok za krokem - VERNO',
  description:
    'Celý postup tvorby webových stránek. Co od vás budu potřebovat a proč. Texty, fotky, logo. Průběžně ukazuji rozpracovanou verzi, ne screenshoty.',
  alternates: { canonical: 'https://verno.cz/jak-pracuji' },
  openGraph: {
    title: 'Jak pracuji | Tvorba webu krok za krokem - VERNO',
    description: 'Celý postup tvorby webových stránek. Průběžně ukazuji rozpracovanou verzi, ne screenshoty.',
    url: 'https://verno.cz/jak-pracuji',
  },
}

const steps = [
  {
    n: '01',
    title: 'Ozvete se',
    text: 'Napíšete mi pár vět o tom, co děláte, jaký web si představujete a co už máte připravené. Do dvou pracovních dnů se ozvu zpět.',
  },
  {
    n: '02',
    title: 'Domluvíme se na zadání',
    text: 'Projdeme spolu, k čemu má web sloužit, koho má oslovit a co má návštěvník udělat. Určíme rozsah, rozdělíme si podklady a domluvíme pevnou cenu předem.',
  },
  {
    n: '03',
    title: 'Tvořím a průběžně ukazuji',
    text: 'Začnu stavět. Místo posílání screenshotů dostanete přístup na rozpracovanou verzi webu, takže vidíte vše přímo v reálném provozu.',
  },
  {
    n: '04',
    title: 'Zapracuji připomínky',
    text: 'Po každé ukázce si řekneme, co doladit. Dvě kola běžných úprav jsou součástí ceny. Pokud by šlo o větší změny mimo původní zadání, řeknu vám to dopředu.',
  },
  {
    n: '05',
    title: 'Spustíme web',
    text: 'Hotový web nasadím na vaši doménu, zkontroluji zobrazení na mobilu i počítači a napojím na vyhledávač Google.',
  },
  {
    n: '06',
    title: 'Předám',
    text: 'Dostanete hotový funkční web a vysvětlení základních věcí kolem něj. Když budete někdy potřebovat něco upravit nebo doplnit, stačí se ozvat.',
  },
]

const needs = [
  {
    title: 'Informace o tom, co děláte',
    text: 'Čím se zabýváte a jaký další krok od návštěvníka vašeho webu čekáte. Stačí mi to i v bodech, informace jsou důležité.',
  },
  {
    title: 'Fotografie',
    text: 'Ideálně vaše vlastní. Vaše práce, prostředí nebo vy sami působíte vždy důvěryhodněji než fotky z databanky. Dodané fotografie upravím tak, aby spolu vizuálně ladily.',
  },
  {
    title: 'Logo a barvy, pokud je máte',
    text: 'Máte logo nebo dané barvy? Web na ně navážu. Jestli ne, nevadí, navrhnu vizuální směr.',
  },
  {
    title: 'Doménu',
    text: 'Adresa webu (například vasefirma.cz). Pokud ji ještě nemáte, pomohu vám s výběrem i registrací.',
  },
  {
    title: 'Máte představu?',
    text: 'Oblíbené weby, styl nebo naopak něco, co se vám nelíbí - řekněte mi to. I drobné poznámky pomůžou k tomu, aby vám web opravdu seděl',
  },
]

const dontExpect = [
  'Levnou kopii cizích webů.',
  'Web přeplněný animacemi jen proto, aby se „něco hýbalo".',
  'Editaci webu stylem klikání v administraci jako u WordPressu.',
  'Týdny bez komunikace.',
  'E-shop nebo rozsáhlý portál.',
]

export default function JakPracuji() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: '72svh',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--deep)',
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(90px,10vw,120px) 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 55% 45% at 78% 24%,rgba(168,125,184,.12),transparent 70%), radial-gradient(ellipse 45% 40% at 20% 85%,rgba(0,154,196,.08),transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div className="noise" />
        <div
          style={{
            position: 'absolute',
            right: 'clamp(20px,6vw,100px)',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: "'Syne',sans-serif",
            fontSize: 'clamp(10rem,20vw,22rem)',
            fontWeight: 800,
            letterSpacing: '-.06em',
            color: 'rgba(255,255,255,.025)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          aria-hidden
        >
          02
        </div>
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p
            className="eyebrow"
            style={{
              color: 'rgba(240,237,232,.42)',
              marginBottom: 22,
              opacity: 0,
              animation: 'fadeUp .8s .05s cubic-bezier(.16,1,.3,1) forwards',
            }}
          >
            Jak pracuji
          </p>
          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 'clamp(2.8rem,6vw,5.5rem)',
              fontWeight: 800,
              lineHeight: .92,
              letterSpacing: '-.055em',
              color: 'var(--cloud)',
              margin: '0 0 24px',
              maxWidth: 820,
              opacity: 0,
              animation: 'fadeUp .9s .14s cubic-bezier(.16,1,.3,1) forwards',
            }}
          >
            Web nevzniká tak,<br />
            že zmizím na měsíc.
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem,1.2vw,1.08rem)',
              lineHeight: 1.9,
              color: 'rgba(240,237,232,.52)',
              maxWidth: 620,
              margin: 0,
              opacity: 0,
              animation: 'fadeUp .9s .24s cubic-bezier(.16,1,.3,1) forwards',
            }}
          >
            Pracuji po krocích a průběžně ukazuji, v jaké fázi web je.
            Nečekáte týdny na „hotovo" bez jediné zprávy.
          </p>
        </div>
      </section>

      {/* KROKY */}
      <section
        style={{
          background: 'var(--cloud)',
          padding: 'clamp(80px,11vw,140px) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: 'linear-gradient(180deg,var(--orchid),var(--capri),transparent)',
            opacity: .4,
          }}
        />
        <div className="inner">
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>
            Postup krok za krokem
          </p>
          <h2
            className="reveal d1"
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              fontWeight: 700,
              letterSpacing: '-.045em',
              lineHeight: 1.04,
              color: 'var(--ink)',
              margin: '0 0 clamp(40px,5vw,70px)',
              maxWidth: 700,
            }}
          >
            V každé fázi víte,<br />co se právě děje.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((s, i) => (
              <div
                key={i}
                className={`reveal d${Math.min(i + 1, 5)}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '90px 1fr',
                  gap: '0 clamp(24px,4vw,56px)',
                  padding: 'clamp(34px,4vw,52px) 0',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'start',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: 'clamp(2rem,4vw,3.3rem)',
                      fontWeight: 800,
                      letterSpacing: '-.06em',
                      color: 'rgba(25,23,20,.08)',
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </p>
                  <div
                    style={{
                      width: 24,
                      height: 2,
                      background: 'var(--orchid)',
                      marginTop: 10,
                      opacity: .7,
                    }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: 'clamp(1.1rem,1.7vw,1.4rem)',
                      fontWeight: 700,
                      letterSpacing: '-.02em',
                      color: 'var(--ink)',
                      margin: '0 0 12px',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.84,
                      color: 'var(--ink-s)',
                      margin: 0,
                      maxWidth: 620,
                    }}
                  >
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO POTŘEBUJI */}
      <section
        style={{
          background: 'var(--cloud-1)',
          padding: 'clamp(80px,11vw,140px) 0',
          borderTop: '1px solid var(--line-s)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(var(--line-s) 1px,transparent 1px),linear-gradient(90deg,var(--line-s) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>
            Co od vás budu potřebovat
          </p>
          <h2
            className="reveal d1"
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 'clamp(1.9rem,4vw,3rem)',
              fontWeight: 700,
              letterSpacing: '-.04em',
              lineHeight: 1.06,
              color: 'var(--ink)',
              margin: '0 0 clamp(36px,5vw,60px)',
              maxWidth: 680,
            }}
          >
            Web je tak dobrý,<br />jak dobré jsou podklady.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 'clamp(16px,2.5vw,28px)',
            }}
          >
            {needs.map((n, i) => (
              <div
                key={i}
                className={`reveal d${Math.min(i + 1, 5)}`}
                style={{
                  padding: 'clamp(24px,3vw,36px)',
                  background: 'var(--cloud)',
                  border: '1px solid var(--line)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'linear-gradient(90deg,var(--orchid),transparent)',
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: '1.06rem',
                    fontWeight: 700,
                    color: 'var(--ink)',
                    margin: '0 0 12px',
                    letterSpacing: '-.01em',
                  }}
                >
                  {n.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: 'var(--dim)',
                    margin: 0,
                  }}
                >
                  {n.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO U MĚ NEČEKEJTE */}
      <section
        style={{
          background: 'var(--cloud)',
          padding: 'clamp(80px,11vw,130px) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="inner">
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>
            Co u mě nečekejte
          </p>
          <h2
            className="reveal d1"
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 'clamp(1.9rem,4vw,3rem)',
              fontWeight: 700,
              letterSpacing: '-.04em',
              lineHeight: 1.06,
              color: 'var(--ink)',
              margin: '0 0 clamp(34px,5vw,54px)',
              maxWidth: 620,
            }}
          >
            Není to pro každého.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 16,
            }}
          >
            {dontExpect.map((item, i) => (
              <div
                key={i}
                className={`reveal d${Math.min(i + 1, 5)}`}
                style={{
                  padding: '22px 24px',
                  border: '1px solid var(--line)',
                  background: 'var(--cloud-1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--orchid)',
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'var(--ink-s)',
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ČAS */}
      <section
        style={{
          background: 'var(--deep)',
          padding: 'clamp(80px,11vw,140px) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(168,125,184,.12),transparent 70%)',
            left: -100,
            bottom: -100,
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p
            className="eyebrow reveal"
            style={{ color: 'rgba(240,237,232,.42)', marginBottom: 24 }}
          >
            Časová náročnost tvorby webu
          </p>
          <h2
            className="reveal d1"
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 'clamp(2rem,4vw,3rem)',
              fontWeight: 700,
              letterSpacing: '-.045em',
              lineHeight: 1.04,
              color: 'var(--cloud)',
              margin: '0 0 26px',
              maxWidth: 620,
            }}
          >
            Jak dlouho to trvá?
          </h2>
          <p
            className="reveal d2"
            style={{
              fontSize: '1rem',
              lineHeight: 1.86,
              color: 'rgba(240,237,232,.5)',
              maxWidth: 600,
              margin: '0 0 16px',
            }}
          >
            Záleží na rozsahu webu a rychlosti dodání podkladů.
            Nejčastější brzdou totiž nebývají technologie, ale chybějící texty a fotky.
          </p>
          <p
            className="reveal d3"
            style={{
              fontSize: '1rem',
              lineHeight: 1.86,
              color: 'rgba(240,237,232,.5)',
              maxWidth: 600,
              margin: '0 0 34px',
            }}
          >
            Pevné termíny naslepo neslibuji.
            Pokud vás ale z nějakého důvodu tlačí čas, sdělte mi to hned na
            začátku a řekneme si, jestli je reálné to stihnout.
          </p>
          <Link href="/kontakt" className="btn btn-lt reveal d4">
            Začněme →
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: none; }
        }
        @media(max-width:720px) {
          .inner div[style*="grid-template-columns: 90px 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
        }
      `}</style>
    </>
  )
}
