'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const services = [
  { id: 'webova-vizitka',  name: 'Webová vizitka',          short: 'Jednostránkový web s tím nejdůležitějším.' },
  { id: 'maly-web',        name: 'Malý web',                 short: 'Více prostoru pro služby, reference a tým.' },
  { id: 'landing-page',    name: 'Landing page',             short: 'Jedna stránka vedená k jediné akci.' },
  { id: 'akce-spolek',     name: 'Web pro akci nebo spolek', short: 'Přehledně předané informace, rychle.' },
  { id: 'prezentacni-web', name: 'Prezentační web',          short: 'Web jako důležitá součást značky.' },
]

const steps = [
  { n: '01', title: 'Ozvete se',    desc: 'Napíšete mi přes formulář (nebo zavoláte) pár vět o tom, co děláte a co od webu čekáte.' },
  { n: '02', title: 'Domluvíme se', desc: 'Projdeme rozsah a cíl webu. Řekneme si, co připravíte vy a co udělám já. Zašlu vám cenu.' },
  { n: '03', title: 'Tvořím',       desc: 'Pustím se do práce. Průběžně vám ukazuji rozpracovanou verzi, ne screenshoty.' },
  { n: '04', title: 'Předám',       desc: 'Hotový web spustím na vaší doméně a předám i s přihlášením do Googlu.' },
]

const marquee = ['prezentační weby', 'živnostníci', 'malé firmy', 'hosting zdarma', 'moderní technologie', 'přímá komunikace', 'žádné e-shopy', 'Třeboň · ČR']

export default function Home() {
  const glowRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const glow = glowRef.current; if (!glow) return
    let raf: number
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px' })
    }
    window.addEventListener('mousemove', move)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={glowRef} style={{ position: 'fixed', width: 420, height: 420, borderRadius: '50%', pointerEvents: 'none', zIndex: 0, transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle,rgba(168,125,184,.055),transparent 70%)', transition: 'left .14s ease-out,top .14s ease-out', left: '-50%', top: '-50%' }} aria-hidden />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', background: 'var(--cloud)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 65% 55% at 78% 25%,rgba(168,125,184,.09),transparent 70%),radial-gradient(ellipse 45% 40% at 18% 85%,rgba(0,154,196,.07),transparent 65%)' }} />
        <div className="noise" />

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', maxWidth: 1320, margin: '0 auto', width: '100%', padding: 'clamp(90px,10vw,110px) clamp(22px,5vw,62px) clamp(40px,5vw,60px)', gap: 40 }} className="hero-grid-wrap">

          {/* Left text */}
          <div style={{ flex: '0 0 52%', maxWidth: '52%', position: 'relative', zIndex: 2 }} className="hero-left-col">
            <p className="eyebrow" style={{ marginBottom: 18, opacity: 0, animation: 'fadeUp .8s .06s cubic-bezier(.16,1,.3,1) forwards' }}>Tvorba webů - Hana Fraňková</p>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2.8rem,5.8vw,5.6rem)', fontWeight: 800, lineHeight: .92, letterSpacing: '-.05em', color: 'var(--ink)', margin: '0 0 22px', opacity: 0, animation: 'fadeUp .9s .14s cubic-bezier(.16,1,.3,1) forwards' }}>
              Weby,<br />kterých<br />si lidé<br /><span className="grad-text">všimnou.</span>
            </h1>
            <p style={{ fontSize: 'clamp(.93rem,1.1vw,1.04rem)', lineHeight: 1.82, color: 'var(--ink-s)', maxWidth: 400, margin: '0 0 30px', opacity: 0, animation: 'fadeUp .9s .24s cubic-bezier(.16,1,.3,1) forwards' }}>
              Navrhuji a stavím prezentační weby pro živnostníky, řemeslníky a malé firmy.
              Sama&nbsp;- od prvního kontaktu po předání hotového webu.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 26, opacity: 0, animation: 'fadeUp .9s .32s cubic-bezier(.16,1,.3,1) forwards' }}>
              <Link href="/nabidka" className="btn btn-ink">Co nabízím →</Link>
              <Link href="/jak-pracuji" className="btn btn-ghost">Jak pracuji</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, opacity: 0, animation: 'fadeUp .9s .4s cubic-bezier(.16,1,.3,1) forwards' }}>
              {['Rychlé a stabilní weby na moderní technologii', 'Hosting zdarma, platíte jen doménu', 'Každá změna webu se dá vrátit zpět'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'var(--dim)' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--orchid)', flexShrink: 0 }} />{t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating cards */}
          <div className="hero-cards-col" style={{ flex: 1, position: 'relative', height: 460, opacity: 0, animation: 'fadeIn 1.1s .48s cubic-bezier(.16,1,.3,1) forwards', minWidth: 0 }}>
            {/* 5class */}
            <div className="fl-a" style={{ position: 'absolute', top: 10, left: '30%', width: 260, height: 178, zIndex: 3, background: '#070707', borderRadius: 10, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,0,0,.42),0 8px 22px rgba(0,0,0,.28)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', background: '#0a0906', borderBottom: '1px solid rgba(201,168,76,.12)' }}>
                {[0,1,2].map(k => <span key={k} style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(201,168,76,.45)', flexShrink: 0 }} />)}
                <span style={{ marginLeft: 6, fontSize: 7.5, color: 'rgba(201,168,76,.3)', letterSpacing: '.04em' }}>5class.cz</span>
              </div>
              <Image src="/screens/5class-card.jpg" alt="5class.cz" width={260} height={149} style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            {/* ambientelight */}
            <div className="fl-b" style={{ position: 'absolute', top: '38%', left: 0, width: 242, height: 166, zIndex: 2, background: '#0c0a1a', borderRadius: 10, overflow: 'hidden', boxShadow: '0 22px 60px rgba(0,0,0,.38),0 5px 16px rgba(0,0,0,.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', background: '#0e0c1e', borderBottom: '1px solid rgba(180,80,255,.1)' }}>
                {[0,1,2].map(k => <span key={k} style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(180,80,255,.3)', flexShrink: 0 }} />)}
                <span style={{ marginLeft: 6, fontSize: 7.5, color: 'rgba(180,150,255,.25)', letterSpacing: '.04em' }}>ambientelight.eu</span>
              </div>
              <Image src="/screens/ambiente-card.jpg" alt="ambientelight.eu" width={242} height={137} style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            {/* rovino */}
            <div className="fl-c" style={{ position: 'absolute', bottom: 10, left: '28%', width: 248, height: 168, zIndex: 1, background: '#fff', borderRadius: 10, overflow: 'hidden', boxShadow: '0 22px 56px rgba(210,70,0,.2),0 5px 16px rgba(0,0,0,.14)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', background: '#fafafa', borderBottom: '1px solid rgba(0,0,0,.07)' }}>
                {[0,1,2].map(k => <span key={k} style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(230,90,10,.4)', flexShrink: 0 }} />)}
                <span style={{ marginLeft: 6, fontSize: 7.5, color: 'rgba(100,80,60,.35)', letterSpacing: '.04em' }}>rovino.cz</span>
              </div>
              <Image src="/screens/rovino-card.jpg" alt="rovino.cz" width={248} height={139} style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div style={{ borderTop: '1px solid var(--line-s)', padding: '12px 0', overflow: 'hidden', userSelect: 'none', position: 'relative', zIndex: 5 }}>
          <div className="marquee-inner">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} style={{ fontSize: 10.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--dim)', padding: '0 24px' }}>
                {t} <span style={{ color: 'var(--orchid)', opacity: .5 }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CO DĚLÁM ───────────────────────────────────────────────── */}
      <section style={{ background: 'var(--deep)', padding: 'clamp(80px,11vw,140px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.14),transparent 70%)', right: -80, top: -100, filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,154,196,.1),transparent 70%)', left: -60, bottom: -60, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 'clamp(20px,5vw,80px)', top: '50%', transform: 'translateY(-50%)', fontFamily: "'Syne',sans-serif", fontSize: 'clamp(12rem,22vw,22rem)', fontWeight: 800, letterSpacing: '-.06em', lineHeight: 1, color: 'rgba(255,255,255,.025)', pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap' }} aria-hidden>01</div>
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 24 }}>Co dělám</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4.8vw,4rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--cloud)', margin: '0 0 clamp(30px,4vw,52px)', maxWidth: 800 }}>
            Pomáhám lidem, kteří odvádějí dobrou práci, aby to bylo vidět i online.
          </h2>
          <div className="reveal d2" style={{ maxWidth: 520 }}>
            <p style={{ fontSize: '1.01rem', lineHeight: 1.82, color: 'rgba(240,237,232,.5)', margin: '0 0 16px' }}>Spousta živnostníků a malých firem má slabý nebo žádný web - ne proto, že by jejich práce za to nestála, ale protože na to nebyl čas, rozpočet nebo někdo, kdo to zařídí.</p>
            <p style={{ fontSize: '1.01rem', lineHeight: 1.82, color: 'rgba(240,237,232,.5)', margin: 0 }}>Tady přicházím já. Web nepostavím jen „aby byl". Promyslím strukturu, texty, to, koho má oslovit a co má návštěvník udělat. Vy dodáte informace. Zbytek je na mně.</p>
          </div>
        </div>
      </section>

      {/* ── NABÍDKA ────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(80px,11vw,140px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg,var(--orchid),var(--capri),var(--marigold))', opacity: .4 }} />
        <div className="inner">
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>Nabídka</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--ink)', margin: '0 0 clamp(30px,4vw,52px)', maxWidth: 680 }}>
            Pět typů webů.{' '}
            <span style={{ color: 'var(--dim)', fontWeight: 400, fontSize: '.82em' }}>Každý pro jiný záměr.</span>
          </h2>
          {services.map((s, i) => (
            <Link key={s.id} href={`/nabidka#${s.id}`} className={`reveal d${i + 1}`}
              style={{ display: 'grid', gridTemplateColumns: '2.2rem 1fr', gap: '0 24px', alignItems: 'center', padding: 'clamp(18px,2.2vw,26px) 0', borderBottom: '1px solid var(--line)', textDecoration: 'none', color: 'inherit', transition: 'padding-left .3s cubic-bezier(.16,1,.3,1),background .25s', borderRadius: 2 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.paddingLeft = '18px'; (e.currentTarget as HTMLElement).style.background = 'rgba(168,125,184,.05)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.paddingLeft = '0'; (e.currentTarget as HTMLElement).style.background = '' }}
            >
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.14em', color: 'var(--orchid)', alignSelf: 'start', paddingTop: 4, fontFamily: "'Syne',sans-serif" }}>0{i + 1}</span>
              <div>
                <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1rem,1.6vw,1.28rem)', fontWeight: 700, color: 'var(--ink)', margin: '0 0 3px', letterSpacing: '-.02em' }}>{s.name}</p>
                <p style={{ fontSize: 13, color: 'var(--dim)', margin: 0 }}>{s.short}</p>
              </div>
            </Link>
          ))}
          <div className="reveal" style={{ marginTop: 44 }}>
            <Link href="/nabidka" className="btn btn-ink">Celá nabídka →</Link>
          </div>
        </div>
      </section>

      {/* ── JAK PRACUJI ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cloud-1)', padding: 'clamp(80px,11vw,140px) 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--line-s)' }}>
        <div className="noise" />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(var(--line-s) 1px,transparent 1px),linear-gradient(90deg,var(--line-s) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>Jak pracuji</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--ink)', margin: '0 0 clamp(30px,4vw,52px)' }}>
            Čtyři kroky. Vždy víte, kde jsme.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(16px,3vw,36px)' }} className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className={`reveal d${i + 1}`} style={{ padding: 'clamp(20px,3vw,32px)', background: 'var(--cloud)', border: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,var(--orchid),transparent)' }} />
                <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(3rem,5vw,4.5rem)', fontWeight: 800, letterSpacing: '-.06em', color: 'rgba(25,23,20,.07)', margin: '0 0 16px', lineHeight: 1 }}>{s.n}</p>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1rem,1.5vw,1.2rem)', fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-.015em' }}>{s.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--dim)', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal d5" style={{ marginTop: 44 }}>
            <Link href="/jak-pracuji" className="btn btn-ink">Celý postup →</Link>
          </div>
        </div>
      </section>

      {/* ── REFERENCE ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--deep)', padding: 'clamp(80px,11vw,140px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(245,138,0,.08),transparent 70%)', right: -80, bottom: -80, filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div className="noise" />
        <div className="inner-wide" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 24 }}>Reference</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--cloud)', margin: '0 0 clamp(30px,4vw,52px)' }}>
            Ukázka z tvorby.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="refs-grid">
            {[
              { img: '/screens/5class.jpg',    name: '5class.cz',         type: 'VIP doprava s řidičem, Praha · 3 jazyky',        href: 'https://5class.cz' },
              { img: '/screens/rovino.jpg',    name: 'rovino.cz',         type: 'Zemní práce, jižní Čechy · Firemní web',         href: 'https://rovino.cz' },
              { img: '/screens/ambiente.jpg',  name: 'ambientelight.eu',  type: 'Světelný design · Prezentační web',              href: 'https://ambientelight.eu' },
            ].map((r, i) => (
              <a key={i} href={r.href} target="_blank" rel="noopener" className={`reveal d${i + 1}`}
                style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid rgba(240,237,232,.08)', transition: 'transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s', background: 'rgba(255,255,255,.03)', textDecoration: 'none' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-8px)'; el.style.boxShadow = '0 32px 80px rgba(0,0,0,.4)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '' }}
              >
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <Image src={r.img} alt={r.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(240,237,232,.08)' }}>
                  <div>
                    <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--cloud)', margin: '0 0 2px' }}>{r.name}</p>
                    <p style={{ fontSize: 11.5, color: 'rgba(240,237,232,.4)', margin: 0 }}>{r.type}</p>
                  </div>
                  <span style={{ color: 'rgba(240,237,232,.3)', fontSize: 20 }}>↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── O MNĚ ────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cloud)', padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 600 }} className="about-grid">
          <div className="reveal" style={{ position: 'relative', overflow: 'hidden', background: 'var(--cloud-2)' }}>
            <Image src="/hana.jpg" alt="Hana Fraňková" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top,var(--cloud),transparent)', pointerEvents: 'none' }} />
          </div>
          <div style={{ padding: 'clamp(60px,8vw,100px) clamp(32px,5vw,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="eyebrow reveal" style={{ marginBottom: 24 }}>O mně</p>
            <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2.2rem,3.8vw,3.4rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1, color: 'var(--ink)', margin: '0 0 26px' }}>
              Jmenuji se Hana Fraňková.
            </h2>
            <div className="reveal d2">
              <p style={{ fontSize: '1rem', lineHeight: 1.84, color: 'var(--ink-s)', margin: '0 0 16px' }}>Weby tvořím sama, od první zprávy až po předání mluvíte se mnou, ne s někým z týmu, kdo „to vyřídí".</p>
              <p style={{ fontSize: '1rem', lineHeight: 1.84, color: 'var(--ink-s)', margin: '0 0 16px' }}>Kromě webů se věnuji malbě a grafice. I díky tomu vidím barvu, kompozici a to, jak na člověka stránka působí dřív, než si vůbec něco přečte.</p>
              <p style={{ fontSize: '1rem', lineHeight: 1.84, color: 'var(--ink-s)', margin: '0 0 28px' }}>Pracuji volněji a pořádně než rychle a odbytě. Nejde mi o počet webů, ale o to, aby každý, který odevzdám, dělal své práci čest - té vaší i té mojí.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(80px,11vw,140px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.09),transparent 70%)', right: '-4%', top: '-20%', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: -30, fontFamily: "'Syne',sans-serif", fontSize: 'clamp(8rem,18vw,18rem)', fontWeight: 800, letterSpacing: '-.06em', color: 'rgba(25,23,20,.025)', pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap' }} aria-hidden>VERNO</div>
        <div className="inner-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 className="reveal" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2.4rem,5vw,4.4rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.02, color: 'var(--ink)', margin: '0 0 18px' }}>
            Máte nápad?<br /><em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--orchid)' }}>Napište mi.</em>
          </h2>
          <p className="reveal d1" style={{ fontSize: '1.01rem', lineHeight: 1.76, color: 'var(--dim)', margin: '0 0 34px' }}>
            Stačí pár vět - co děláte a co od webu čekáte. Ozvu se a domluvíme se na postupu.
          </p>
          <Link href="/kontakt" className="btn btn-ink reveal d2">Napište mi →</Link>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @media(max-width:860px){
          .hero-grid-wrap{flex-direction:column !important;align-items:flex-start !important;padding-top:clamp(68px,11vw,86px) !important}
          .hero-left-col{flex:none !important;max-width:100% !important;width:100% !important}
          .hero-cards-col{display:none !important}
          .steps-grid{grid-template-columns:1fr 1fr !important}
          .refs-grid{grid-template-columns:1fr !important}
          .about-grid{grid-template-columns:1fr !important;min-height:auto !important}
        }
        @media(max-width:540px){
          .steps-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
