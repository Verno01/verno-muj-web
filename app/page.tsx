'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const packages = [
  { name: 'Webová vizitka', from: 'od 11 900 Kč', line: 'Jednostránkový web s tím nejdůležitějším.', href: '/nabidka#webova-vizitka' },
  { name: 'Malý web', from: 'od 18 900 Kč', line: 'Více prostoru pro služby, reference a tým.', href: '/nabidka#maly-web', popular: true },
  { name: 'Landing page', from: 'od 14 900 Kč', line: 'Jedna stránka vedená k jediné akci.', href: '/nabidka#landing-page' },
  { name: 'Web pro akci nebo spolek', from: 'od 15 900 Kč', line: 'Přehledně předané informace, rychle.', href: '/nabidka#akce-spolek' },
  { name: 'Prezentační web', from: 'od 34 900 Kč', line: 'Web jako důležitá součást značky.', href: '/nabidka#prezentacni-web' },
]

const steps = [
  { n: '01', t: 'Ozvete se', d: 'Napíšete mi přes formulář nebo zavoláte pár vět o tom, co děláte a co od webu čekáte.' },
  { n: '02', t: 'Domluvíme se', d: 'Projdeme rozsah a cíl webu. Řekneme si, co připravíte vy a co udělám já. Zašlu vám cenu.' },
  { n: '03', t: 'Tvořím', d: 'Pustím se do práce. Průběžně vám ukazuji rozpracovanou verzi, ne screenshoty.' },
  { n: '04', t: 'Předám', d: 'Hotový web spustím na vaší doméně a předám i s přihlášením do Googlu.' },
]

const refs = [
  { url: 'https://www.5class.cz', d: '5class.cz', t: 'VIP doprava s řidičem, Praha', k: 'Prezentační web · 3 jazyky' },
  { url: 'https://www.rovino.cz', d: 'rovino.cz', t: 'Zemní a výkopové práce, jižní Čechy', k: 'Firemní web' },
  { url: 'https://www.ambientelight.eu', d: 'ambientelight.eu', t: 'Světelný design a osvětlení', k: 'Prezentační web' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100svh', display: 'grid', gridTemplateColumns: '1.5fr 1fr', overflow: 'hidden', background: 'var(--cream)' }} className="hero-grid">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px clamp(22px,5vw,62px) 96px', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ margin: '0 0 42px' }}>Tvorba webů — Hana Fraňková</p>
          <h1 className="serif reveal d1" style={{ fontWeight: 300, fontSize: 'clamp(3rem,7.6vw,7.2rem)', lineHeight: .96, letterSpacing: '-.026em', margin: 0, color: 'var(--ink)' }}>
            Weby,<br />kterých si<br />
            <span style={{ WebkitTextStroke: '1.4px var(--green-lt)', color: 'transparent', fontWeight: 400 }}>lidé</span>{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--terra)' }}>všimnou.</span>
          </h1>
          <p className="reveal d2" style={{ marginTop: 40, maxWidth: 432, fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--dim)' }}>
            Navrhuji a stavím prezentační weby pro živnostníky, řemeslníky a malé firmy. Sama — od prvního kontaktu po předání hotového webu.
          </p>
          <div className="reveal d3" style={{ marginTop: 46, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 18 }}>
            <Link href="/nabidka" className="btn btn-green">Co nabízím <ArrowRight size={16} className="arr" /></Link>
            <Link href="/jak-pracuji" className="btn btn-line">Jak pracuji <ArrowRight size={15} className="arr" /></Link>
          </div>
        </div>

        <div className="hero-photo" style={{ position: 'relative', overflow: 'hidden', background: 'var(--sand)' }}>
          <Image src="/hana-duo.jpg" alt="Hana Fraňková" fill priority sizes="(max-width:900px) 0px, 40vw" style={{ objectFit: 'cover', objectPosition: 'center 13%' }} />
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, var(--cream) 0%, rgba(243,235,224,.5) 22%, transparent 52%)' }} />
          <span style={{ position: 'absolute', right: 30, top: '50%', transform: 'translateY(-50%) rotate(180deg)', writingMode: 'vertical-rl', fontSize: 10.5, letterSpacing: '.36em', textTransform: 'uppercase', color: 'var(--dim)', zIndex: 4 }}>
            Praxe · Reference · Lišov
          </span>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'var(--green)', color: 'var(--cream)', padding: '13px 0', overflow: 'hidden', zIndex: 5, whiteSpace: 'nowrap' }}>
          <div style={{ display: 'inline-block', animation: 'tk 30s linear infinite' }}>
            {[...Array(2)].map((_, r) => (
              <span key={r}>
                {['Webová vizitka', 'Malý web', 'Landing page', 'Web pro spolek', 'Prezentační web', 'Hosting zdarma', 'Bez e-shopů'].map((t, i) => (
                  <span key={t} className="serif" style={{ fontSize: '.95rem', fontStyle: 'italic', padding: '0 28px', borderRight: '1px solid rgba(243,235,224,.22)', color: i % 2 ? 'var(--green-lt)' : 'var(--cream)' }}>{t}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CO DĚLÁM */}
      <section style={{ background: 'var(--cream-2)', padding: 'clamp(76px,11vw,130px) clamp(22px,5vw,62px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="eyebrow reveal" style={{ marginBottom: 36 }}>Co dělám</p>
          <p className="serif reveal d1" style={{ fontSize: 'clamp(1.7rem,3.4vw,2.9rem)', fontWeight: 300, lineHeight: 1.32, letterSpacing: '-.012em', color: 'var(--ink)', margin: '0 0 48px', maxWidth: 880 }}>
            Pomáhám lidem, kteří odvádějí dobrou práci, aby to bylo vidět i&nbsp;online.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(28px,4vw,64px)' }}>
            <p className="reveal d2" style={{ fontSize: '1.04rem', lineHeight: 1.85, color: 'var(--ink-soft)', margin: 0 }}>
              Spousta živnostníků a malých firem má slabý nebo žádný web — ne proto, že by jejich práce za to nestála, ale protože na to nebyl čas, rozpočet nebo někdo, kdo to zařídí.
            </p>
            <p className="reveal d3" style={{ fontSize: '1.04rem', lineHeight: 1.85, color: 'var(--ink-soft)', margin: 0 }}>
              Tady přicházím já. Web nepostavím jen „aby byl“. Promyslím strukturu, texty, to, koho má oslovit a co má návštěvník udělat. Vy dodáte informace. Zbytek je na mně.
            </p>
          </div>
        </div>
      </section>

      {/* NABÍDKA */}
      <section style={{ padding: 'clamp(76px,11vw,130px) clamp(22px,5vw,62px)', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(44px,6vw,70px)', maxWidth: 720 }}>
            <p className="eyebrow" style={{ marginBottom: 22 }}>Nabídka</p>
            <h2 className="serif" style={{ fontSize: 'clamp(2.1rem,4.6vw,3.6rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-.018em', margin: '0 0 20px', color: 'var(--ink)' }}>
              Pět typů webů.<br />Každý pro jiný záměr.
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--dim)', margin: 0 }}>
              Od jednoduché vizitky po firemní prezentaci. Žádné e-shopy.
            </p>
          </div>

          <div className="pkg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {packages.map((p, i) => (
              <Link key={i} href={p.href} className="reveal pkg-card" style={{ background: 'var(--cream)', padding: 'clamp(30px,3vw,42px) clamp(26px,2.5vw,36px)', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', transition: 'background .3s', minHeight: 230 }}>
                {p.popular && (
                  <span style={{ position: 'absolute', top: 22, right: 22, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--terra)', border: '1px solid var(--terra)', padding: '4px 9px', borderRadius: 100 }}>Nejčastější</span>
                )}
                <p className="serif" style={{ fontSize: 12, letterSpacing: '.1em', color: 'var(--green-lt)', margin: 0 }}>0{i + 1}</p>
                <h3 className="serif" style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--ink)', margin: 0, lineHeight: 1.22 }}>{p.name}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0, flex: 1 }}>{p.line}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                  <span className="serif" style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--green)' }}>{p.from}</span>
                  <ArrowUpRight size={17} color="var(--ink-soft)" className="arr" />
                </div>
              </Link>
            ))}
            <div style={{ background: 'var(--green)', padding: 'clamp(30px,3vw,42px) clamp(26px,2.5vw,36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14, minHeight: 230 }}>
              <p className="serif" style={{ fontSize: '1.4rem', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.32, margin: 0 }}>Nevíte, co potřebujete?</p>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(243,235,224,.72)', margin: 0 }}>Napište mi pár vět o tom, co děláte. Poradíme si spolu.</p>
              <Link href="/kontakt" className="btn btn-cream" style={{ marginTop: 10, alignSelf: 'flex-start', padding: '12px 22px', fontSize: 13 }}>
                Napsat mi <ArrowRight size={15} className="arr" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JAK PRACUJI */}
      <section style={{ background: 'var(--slate)', padding: 'clamp(76px,11vw,130px) clamp(22px,5vw,62px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(46px,6vw,76px)' }}>
            <p className="eyebrow" style={{ marginBottom: 22, color: 'rgba(243,235,224,.55)' }}>Jak pracuji</p>
            <h2 className="serif" style={{ fontSize: 'clamp(2.1rem,4.6vw,3.6rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-.018em', margin: 0, color: 'var(--cream)' }}>
              Čtyři kroky k hotovému webu.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'clamp(30px,3.5vw,54px)' }}>
            {steps.map((s, i) => (
              <div key={i} className={`reveal d${i + 1}`}>
                <p className="serif" style={{ fontSize: '2.7rem', fontWeight: 300, color: 'rgba(243,235,224,.22)', margin: '0 0 14px', lineHeight: 1 }}>{s.n}</p>
                <div style={{ width: 30, height: 1.5, background: 'var(--terra)', margin: '0 0 18px' }} />
                <h3 className="serif" style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--cream)', margin: '0 0 12px' }}>{s.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'rgba(243,235,224,.62)', margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="reveal d5" style={{ marginTop: 'clamp(44px,5vw,64px)' }}>
            <Link href="/jak-pracuji" style={{ fontSize: 15, color: 'var(--green-lt)', textDecoration: 'none', fontWeight: 500, borderBottom: '1.5px solid rgba(133,173,121,.4)', paddingBottom: 2, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Celý postup a co od vás budu potřebovat <ArrowRight size={15} className="arr" />
            </Link>
          </div>
        </div>
      </section>

      {/* REFERENCE */}
      <section style={{ padding: 'clamp(76px,11vw,130px) clamp(22px,5vw,62px)', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 'clamp(42px,6vw,66px)' }}>
            <p className="eyebrow" style={{ marginBottom: 22 }}>Ukázky</p>
            <h2 className="serif" style={{ fontSize: 'clamp(2.1rem,4.6vw,3.6rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-.018em', margin: 0, color: 'var(--ink)' }}>
              Weby, které tvořím.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(16px,2vw,24px)' }}>
            {refs.map((r, i) => (
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className={`reveal d${i + 1} ref-card`}
                style={{ background: 'var(--cream-2)', border: '1px solid var(--line)', borderRadius: 4, padding: 'clamp(28px,3vw,40px)', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 14, transition: 'transform .3s, border-color .3s, background .3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="serif" style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--green)' }}>{r.d}</span>
                  <ArrowUpRight size={16} color="var(--ink-soft)" className="arr" />
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--ink)', margin: 0, fontWeight: 500 }}>{r.t}</p>
                <p style={{ fontSize: 12.5, letterSpacing: '.05em', color: 'var(--dim)', margin: 0 }}>{r.k}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section style={{ background: 'var(--cream-2)', padding: 'clamp(76px,11vw,130px) clamp(22px,5vw,62px)' }}>
        <div className="about-grid" style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 'clamp(44px,6vw,92px)', alignItems: 'center' }}>
          <div className="reveal" style={{ position: 'relative', width: '100%', maxWidth: 380, justifySelf: 'center' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 5', borderRadius: 4, overflow: 'hidden', background: 'var(--sand)' }}>
              <Image src="/hana-duo.jpg" alt="Hana Fraňková" fill sizes="380px" style={{ objectFit: 'cover', objectPosition: 'center 14%' }} />
            </div>
          </div>
          <div>
            <p className="eyebrow reveal" style={{ marginBottom: 24 }}>O mně</p>
            <h2 className="serif reveal d1" style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, lineHeight: 1.16, letterSpacing: '-.018em', margin: '0 0 30px', color: 'var(--ink)' }}>
              Jmenuji se<br />Hana Fraňková.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <p className="reveal d2" style={{ fontSize: '1.04rem', lineHeight: 1.85, color: 'var(--ink-soft)', margin: 0 }}>
                Weby tvořím sama, od první zprávy až po předání mluvíte se mnou, ne s někým z týmu, kdo „to vyřídí“.
              </p>
              <p className="reveal d3" style={{ fontSize: '1.04rem', lineHeight: 1.85, color: 'var(--ink-soft)', margin: 0 }}>
                Kromě webů se věnuji malbě a grafice. I díky tomu vidím barvu, kompozici a to, jak na člověka stránka působí dřív, než si vůbec něco přečte.
              </p>
              <p className="reveal d4" style={{ fontSize: '1.04rem', lineHeight: 1.85, color: 'var(--ink-soft)', margin: 0 }}>
                Pracuji volněji a pořádně než rychle a odbytě. Nejde mi o počet webů, ale o to, aby každý, který odevzdám, dělal své práci čest — té vaší i té mojí.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', background: 'var(--green)', padding: 'clamp(82px,12vw,150px) clamp(22px,5vw,62px)', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', right: '-150px', top: '-150px', width: 440, height: 440, borderRadius: '50%', border: '1px solid rgba(243,235,224,.08)' }} />
        <div aria-hidden style={{ position: 'absolute', right: '-75px', top: '-75px', width: 290, height: 290, borderRadius: '50%', border: '1px solid rgba(243,235,224,.06)' }} />
        <div className="reveal" style={{ position: 'relative', maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <p className="serif" style={{ fontSize: '1.05rem', fontStyle: 'italic', fontWeight: 300, color: 'rgba(243,235,224,.55)', margin: '0 0 22px' }}>
            Máte něco na mysli?
          </p>
          <h2 className="serif" style={{ fontSize: 'clamp(2.5rem,5.6vw,4.6rem)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-.02em', color: 'var(--cream)', margin: '0 0 26px' }}>
            Napište mi.
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(243,235,224,.65)', margin: '0 0 42px' }}>
            Stačí pár vět — co děláte a co od webu čekáte. Ozvu se a domluvíme se na postupu. Nezávazně.
          </p>
          <Link href="/kontakt" className="btn btn-cream" style={{ padding: '17px 36px', fontSize: 15 }}>
            Napsat mi <ArrowRight size={17} className="arr" />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes tk { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .pkg-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1120px) {
          .pkg-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        .pkg-card:hover { background: var(--cream-2) !important; }
        .ref-card:hover { transform: translateY(-3px); border-color: var(--green) !important; background: var(--cream) !important; }
      `}</style>
    </>
  )
}
