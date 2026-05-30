'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const services = [
  { id: 'webova-vizitka',  name: 'Webová vizitka',          short: 'Přehledný jednostránkový web. Kontakt, služby a základní informace na jednom místě.' },
  { id: 'maly-web',        name: 'Malý web',                 short: 'Vícestránkový web pro živnostníka s jednou hlavní službou. Pro ty, kdo chtějí být na internetu a působit důvěryhodně.' },
  { id: 'landing-page',    name: 'Landing page',             short: 'Jedna stránka navržená pro konkrétní nabídku, kampaň nebo službu.' },
  { id: 'akce-spolek',     name: 'Web pro akci nebo spolek', short: 'Web pro festival, spolek nebo projekt. Program, info, kontakt. Vše přehledné.' },
  { id: 'prezentacni-web', name: 'Prezentační web',          short: 'Web pro živnostníka nebo firmu s více službami či širší nabídkou. Promyšlená struktura, která zákazníka provede a přesvědčí.' },
]

const steps = [
  { n: '01', title: 'Ozvete se',    desc: 'Napíšete mi přes formulář (nebo zavoláte) pár vět o tom, co děláte a co od nového webu čekáte.' },
  { n: '02', title: 'Domluvíme se', desc: 'Projdeme rozsah a cíle webu. Určíme si, co připravíte vy a co já. Předem vám zašlu pevnou cenu.' },
  { n: '03', title: 'Tvořím',       desc: 'Pustím se do tvorby webu. Průběžně vám posílám odkaz na reálnou rozpracovanou verzi, ne pouhé screenshoty.' },
  { n: '04', title: 'Předám',       desc: 'Hotové webové stránky nasadím na vaši doménu a napojím na vyhledávač Google.' },
]

const marquee = [
  'tvorba webu',
  'prezentační weby na míru',
  'pro živnostníky a malé firmy',
  'bez šablon',
  'rychlé načítání',
  'responzivní web',
  'bezplatný hosting',
  'Třeboň · ČR',
]

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

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', background: 'var(--cloud)', position: 'relative', overflow: 'hidden' }}>
        {/* Světelná hloubka */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {/* Fialová — vpravo nahoře, viditelná i na mobilu */}
          <div style={{ position: 'absolute', width: '90vw', height: '90vw', top: '-10%', right: '-10%', background: 'rgba(168,125,184,.13)', filter: 'blur(72px)', animation: 'driftA 58s ease-in-out infinite alternate' }} />
          {/* Teplá — vlevo dole */}
          <div style={{ position: 'absolute', width: '70vw', height: '70vw', bottom: '-10%', left: '-10%', background: 'rgba(200,182,155,.2)', filter: 'blur(80px)', animation: 'driftB 72s ease-in-out infinite alternate' }} />
          {/* Horní tah — jemný světelný přechod přes celou šířku */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(180deg, rgba(168,125,184,.07) 0%, transparent 100%)', pointerEvents: 'none' }} />
        </div>
        <div className="noise" />

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', maxWidth: 1320, margin: '0 auto', width: '100%', padding: 'clamp(90px,10vw,110px) clamp(22px,5vw,62px) clamp(20px,3vw,40px)', gap: 40 }} className="hero-grid-wrap">

          {/* Left text */}
          <div style={{ flex: '0 0 52%', maxWidth: '52%', position: 'relative', zIndex: 2 }} className="hero-left-col">
            <p className="eyebrow" style={{ marginBottom: 18, opacity: 0, animation: 'fadeUp .8s .06s cubic-bezier(.16,1,.3,1) forwards' }}>
              Tvorba webů · Hana Fraňková
            </p>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2.8rem,5.8vw,5.6rem)', fontWeight: 800, lineHeight: .92, letterSpacing: '-.05em', color: 'var(--ink)', margin: '0 0 22px', opacity: 0, animation: 'fadeUp .9s .14s cubic-bezier(.16,1,.3,1) forwards' }}>
              <span style={{ background: 'linear-gradient(90deg,#9B4FCC 0%,#FF7A00 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Moderní weby</span> pro<br />živnostníky<br />a menší<br />firmy.
            </h1>
            <p style={{ fontSize: 'clamp(.93rem,1.1vw,1.04rem)', lineHeight: 1.82, color: 'var(--ink-s)', maxWidth: 460, margin: '0 0 30px', opacity: 0, animation: 'fadeUp .9s .24s cubic-bezier(.16,1,.3,1) forwards' }}>
              Lidé vás dnes hledají na internetu. Web obvykle rozhoduje o důvěře ještě před prvním kontaktem.
              Tvořím stránky, které lidem přehledně ukážou, co nabízíte a jak fungujete.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 26, opacity: 0, animation: 'fadeUp .9s .32s cubic-bezier(.16,1,.3,1) forwards' }}>
              <Link href="/nabidka" className="btn btn-ink">Co nabízím →</Link>
              <Link href="/jak-pracuji" className="btn btn-ghost">Jak pracuji</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, opacity: 0, animation: 'fadeUp .9s .4s cubic-bezier(.16,1,.3,1) forwards' }}>
              {[
                'Čistý kód, žádné pluginy',
                'Hosting v ceně',
                'Rychlé načítání i na mobilu',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'var(--dim)' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--orchid)', flexShrink: 0 }} />{t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating cards */}
          <div className="hero-cards-col" style={{ flex: 1, position: 'relative', height: 460, opacity: 0, animation: 'fadeIn 1.1s .48s cubic-bezier(.16,1,.3,1) forwards', minWidth: 0 }}>
            <div className="fl-a" style={{ position: 'absolute', top: 10, left: '30%', width: 260, height: 178, zIndex: 3, background: '#070707', borderRadius: 10, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,0,0,.42),0 8px 22px rgba(0,0,0,.28)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', background: '#0a0906', borderBottom: '1px solid rgba(201,168,76,.12)' }}>
                {[0,1,2].map(k => <span key={k} style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(201,168,76,.45)', flexShrink: 0 }} />)}
                <span style={{ marginLeft: 6, fontSize: 7.5, color: 'rgba(201,168,76,.3)', letterSpacing: '.04em' }}>5class.cz</span>
              </div>
              <Image src="/screens/5class-card.jpg" alt="Ukázka webu pro VIP dopravu s řidičem 5class.cz – tvorba VERNO" width={260} height={149} style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div className="fl-b" style={{ position: 'absolute', top: '38%', left: 0, width: 242, height: 166, zIndex: 2, background: '#0c0a1a', borderRadius: 10, overflow: 'hidden', boxShadow: '0 22px 60px rgba(0,0,0,.38),0 5px 16px rgba(0,0,0,.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', background: '#0e0c1e', borderBottom: '1px solid rgba(180,80,255,.1)' }}>
                {[0,1,2].map(k => <span key={k} style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(180,80,255,.3)', flexShrink: 0 }} />)}
                <span style={{ marginLeft: 6, fontSize: 7.5, color: 'rgba(180,150,255,.25)', letterSpacing: '.04em' }}>ambientelight.eu</span>
              </div>
              <Image src="/screens/ambiente-card.jpg" alt="Web Ambiente Light – světelný design, v procesu tvorby VERNO" width={242} height={137} style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div className="fl-c" style={{ position: 'absolute', bottom: 10, left: '28%', width: 248, height: 168, zIndex: 1, background: '#fff', borderRadius: 10, overflow: 'hidden', boxShadow: '0 22px 56px rgba(210,70,0,.2),0 5px 16px rgba(0,0,0,.14)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', background: '#fafafa', borderBottom: '1px solid rgba(0,0,0,.07)' }}>
                {[0,1,2].map(k => <span key={k} style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(230,90,10,.4)', flexShrink: 0 }} />)}
                <span style={{ marginLeft: 6, fontSize: 7.5, color: 'rgba(100,80,60,.35)', letterSpacing: '.04em' }}>rovino.cz</span>
              </div>
              <Image src="/screens/rovino-card.jpg" alt="Ukázka webu pro zemní a stavební práce Rovino – tvorba VERNO" width={248} height={139} style={{ objectFit: 'cover', objectPosition: 'top' }} />
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

      {/* ── CO DĚLÁM ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--deep)', padding: 'clamp(80px,11vw,140px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.14),transparent 70%)', right: -80, top: -100, filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,154,196,.1),transparent 70%)', left: -60, bottom: -60, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 'clamp(20px,5vw,80px)', top: '50%', transform: 'translateY(-50%)', fontFamily: "'Syne',sans-serif", fontSize: 'clamp(12rem,22vw,22rem)', fontWeight: 800, letterSpacing: '-.06em', lineHeight: 1, color: 'rgba(255,255,255,.025)', pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap' }} aria-hidden>01</div>
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 24 }}>Co dělám</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4.8vw,4rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--cloud)', margin: '0 0 clamp(30px,4vw,52px)', maxWidth: 850 }}>
            Spousta dobrých firem přichází o zákazníky kvůli webu. Ne kvůli ceně nebo konkurenci.
            Kvůli webu.
          </h2>
          <div className="reveal d2" style={{ maxWidth: 560 }}>
            <p style={{ fontSize: '1.01rem', lineHeight: 1.82, color: 'rgba(240,237,232,.5)', margin: '0 0 16px' }}>
              Dobrá práce si zaslouží dobrý web.
            </p>
          </div>
        </div>
      </section>

      {/* ── NABÍDKA ──────────────────────────────────────────────── */}
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

      {/* ── KALKULAČKA ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--deep)', padding: 'clamp(80px,11vw,140px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,154,196,.1),transparent 70%)', left: -120, top: -120, filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.1),transparent 70%)', right: -60, bottom: -60, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="noise" />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }} className="kalk-promo-grid">
            <div>
              <p className="eyebrow reveal" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 20 }}>navíc: Bezplatná kalkulačka hodinové sazby</p>
              <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.8rem,3.8vw,3rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--cloud)', margin: '0 0 20px' }}>
                Znát svou reálnou hodinovou sazbu je základ úspěchu.
              </h2>
              <p className="reveal d2" style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(240,237,232,.5)', margin: '0 0 32px', maxWidth: 480 }}>
                Jednoduchá orientační kalkulačka pro podnikatele. Zadejte své výdaje a časové možnosti a během 3 minut uvidíte, jaká odměna v roce 2026 bezpečně pokryje váš provoz, daně, odvody i rezervy. Nástroj slouží pro vaši osobní byznysovou rozvahu.
              </p>
              <div className="reveal d3">
                <Link href="/kalkulacka" className="btn btn-lt" style={{ display: 'inline-block', marginBottom: 24 }}>
                  Zjistit svou hodinovou sazbu →
                </Link>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 24px' }}>
                  {[
                    { label: 'Legislativa 2026', sub: 'Aktuální parametry' },
                    { label: 'Orientační výpočet', sub: 'Výsledky ihned' },
                    { label: 'Zdarma', sub: 'Bez registrace' },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--capri)', flexShrink: 0 }} />
                      <span style={{ fontSize: 12.5, color: 'rgba(240,237,232,.6)' }}>
                        <strong style={{ color: 'var(--cloud)', fontWeight: 600 }}>{item.label}</strong>
                        {' — '}{item.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="reveal d2" style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(240,237,232,.08)', borderRadius: 8, padding: 'clamp(28px,4vw,44px)' }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(240,237,232,.3)', margin: '0 0 20px' }}>Příklad výstupu</p>
              {[
                { label: 'Minimální sazba', value: '480 Kč/h', color: '#E0304A' },
                { label: 'Zdravá sazba',     value: '620 Kč/h', color: '#7AB830' },
                { label: 'Rozvojová sazba',  value: '790 Kč/h', color: '#A87DB8' },
              ].map((r) => (
                <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(240,237,232,.06)' }}>
                  <span style={{ fontSize: 13, color: 'rgba(240,237,232,.5)' }}>{r.label}</span>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, color: r.color, letterSpacing: '-.03em' }}>{r.value}</span>
                </div>
              ))}
              <p style={{ fontSize: 11, color: 'rgba(240,237,232,.2)', margin: '16px 0 0', lineHeight: 1.6 }}>
                Ilustrační hodnoty. Váš výsledek závisí na Vašich konkrétních výdajích a pracovních podmínkách.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:720px){ .kalk-promo-grid{ grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── JAK PRACUJI ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--cloud-1)', padding: 'clamp(80px,11vw,140px) 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--line-s)' }}>
        <div className="noise" />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(var(--line-s) 1px,transparent 1px),linear-gradient(90deg,var(--line-s) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="inner" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ marginBottom: 24 }}>Jak pracuji</p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--ink)', margin: '0 0 clamp(30px,4vw,52px)' }}>
            Od první zprávy po hotový web. Vždy víte, kde se právě nacházíme.
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

      {/* ── REFERENCE ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--deep)', padding: 'clamp(80px,11vw,140px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(245,138,0,.08),transparent 70%)', right: -80, bottom: -80, filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div className="noise" />
        <div className="inner-wide" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow reveal" style={{ color: 'rgba(240,237,232,.4)', marginBottom: 24 }}>Reference</p>
          <p className="reveal d2" style={{ fontSize: 'clamp(1rem,1.6vw,1.22rem)', lineHeight: 1.7, color: 'rgba(240,237,232,.45)', fontStyle: 'italic', margin: '0 0 24px', maxWidth: 680, borderLeft: '2px solid var(--orchid)', paddingLeft: 20 }}>
            „Bylo vidět, že cílem nebylo jen vytvořit web, ale vytvořit web, který bude firmě opravdu sloužit. Výsledek je krásný." Pavla H.
          </p>
          <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3.4rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.06, color: 'var(--cloud)', margin: '0 0 clamp(30px,4vw,52px)' }}>
            Ukázka z tvorby.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="refs-grid">
            {[
              { img: '/screens/5class.jpg',   name: 'Web pro VIP dopravu s řidičem 5class.cz',        type: 'VIP doprava s řidičem, Praha · 3 jazyky',   href: 'https://5class.cz' },
              { img: '/screens/rovino.jpg',   name: 'Web pro zemní a stavební práce Rovino',        type: 'Zemní práce, jižní Čechy · Firemní web',    href: 'https://rovino.cz' },
              { img: '/screens/ambiente.jpg', name: 'Web Ambiente Light – světelný design',          type: 'Světelný design · Prezentační web',          href: 'https://ambientelight.eu' },
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
          <div style={{ padding: 'clamp(60px,8vw,100px) clamp(32px,5vw,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="eyebrow reveal" style={{ marginBottom: 24 }}>O mně</p>
            <h2 className="reveal d1" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2.2rem,3.8vw,3.4rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1, color: 'var(--ink)', margin: '0 0 26px' }}>
              Jmenuji se Hana Fraňková.
            </h2>
            <div className="reveal d2">
              <p style={{ fontSize: '1rem', lineHeight: 1.84, color: 'var(--ink-s)', margin: '0 0 16px' }}>
                Každý web řeším sama od začátku do konce, takže vždy víte, kdo sedí za klávesnicí.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.84, color: 'var(--ink-s)', margin: '0 0 16px' }}>
                Webům se věnuji několik let a průběžně se v oboru dál vzdělávám. Záleží mi na tom, aby web dobře vypadal, byl přehledný a spolehlivě fungoval i dlouhodobě.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ position: 'relative', overflow: 'hidden', background: 'var(--cloud)' }}>
            <Image
              src="/verno_weby-pro-firmy_hana.png"
              alt="Hana Fraňková, tvůrce webů VERNO – prezentační weby pro živnostníky"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
            />
            {/* Přechod doleva – zapuštění do stránky */}
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,var(--cloud),transparent)', pointerEvents: 'none' }} />
            {/* Přechod dolů */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '20%', background: 'linear-gradient(to top,var(--cloud),transparent)', pointerEvents: 'none' }} />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cloud)', padding: 'clamp(80px,11vw,140px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.09),transparent 70%)', right: '-4%', top: '-20%', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: -30, fontFamily: "'Syne',sans-serif", fontSize: 'clamp(8rem,18vw,18rem)', fontWeight: 800, letterSpacing: '-.06em', color: 'rgba(25,23,20,.025)', pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap' }} aria-hidden>VERNO</div>
        <div className="inner-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 className="reveal" style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2.4rem,5vw,4.4rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.02, color: 'var(--ink)', margin: '0 0 18px' }}>
            Napište mi pár vět<br /><em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--orchid)' }}>o tom, co děláte.</em>
          </h2>
          <p className="reveal d1" style={{ fontSize: '1.01rem', lineHeight: 1.76, color: 'var(--dim)', margin: '0 0 34px' }}>
            Co nejdříve se vám ozvu.
          </p>
          <Link href="/kontakt" className="btn btn-ink reveal d2">Napište mi →</Link>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes driftA { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(-4%,6%) scale(1.07)} }
        @keyframes driftB { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(5%,-5%) scale(1.05)} }
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
