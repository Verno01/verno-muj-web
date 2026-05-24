'use client'
import { useState, useEffect, useMemo, useRef, useCallback } from 'react'

// ─────────────────────────────────────────────────────────────
// KONSTANTY 2026
// ─────────────────────────────────────────────────────────────
const K = {
  zdravotniPct: 0.135,
  minZdravotni: 3306,
  socialniPct: 0.292,
  minSocialni: 5720,
  maxVZSocialni: 2350416,
  rozhodnacastkaVedlejci: 117521,
  danPct: 0.15,
  danPctVysoka: 0.23,
  prahVysokaDan: 1762812,
  slevaPoplatnik: 30840,
  slevaDetiSazby: [15204, 22320, 27840],
  slevaManzel: 24840,
  slevaInvaliditaI: 2520,
  slevaInvaliditaIII: 5040,
  vymZakladPct: 0.50,
  pausalni: {
    1: { mesic: 9984,  rocni: 119808, limit: 'do 1 000 000 Kč/rok' },
    2: { mesic: 16745, rocni: 200940, limit: 'do 1 500 000 Kč/rok' },
    3: { mesic: 27139, rocni: 325668, limit: 'do 2 000 000 Kč/rok' },
  } as Record<number, { mesic: number; rocni: number; limit: string }>,
  pausalVydaje: {
    80: { label: '80 % — řemeslo, výroba, zemědělství', obory: 'zedník, instalatér, kadeřnice, zahradník, truhlář, svářeč, pekař' },
    60: { label: '60 % — volné živnosti', obory: 'účetní, obchodní zástupce, průvodce, lektor, realitní makléř' },
    40: { label: '40 % — svobodná povolání', obory: 'lékař, architekt, daňový poradce, notář, umělec, spisovatel' },
  } as Record<number, { label: string; obory: string }>,
  svatky: 13,
}

// ─────────────────────────────────────────────────────────────
// VÝPOČETNÍ FUNKCE
// ─────────────────────────────────────────────────────────────
interface Slevy { deti: number; manzel: boolean; invaliditaIII: boolean; invaliditaI?: boolean; vedlejci: boolean }
interface Odvody { zdravotni: number; socialni: number; dan: number; celkemRocne: number; mesicne: number; rezim: string }

function vypocitejOdvody(rocniPrijem: number, rocniNaklady: number, rezim: string, pausalPct: number, pausmoPasmo: number, extSlevy: Slevy): Odvody {
  if (rezim === 'pausalni') {
    const d = K.pausalni[pausmoPasmo]
    return { zdravotni: 0, socialni: 0, dan: 0, celkemRocne: d.rocni, mesicne: d.mesic, rezim: 'pausalni' }
  }
  let zakladDane = 0
  if (rezim === 'skutecne') {
    zakladDane = Math.max(0, rocniPrijem - rocniNaklady)
  } else {
    const stropy: Record<number, number> = { 80: 1600000, 60: 1200000, 40: 800000 }
    const maxVydaje = stropy[pausalPct] || (rocniPrijem * pausalPct / 100)
    const pausVydaje = Math.min(rocniPrijem * (pausalPct / 100), maxVydaje)
    zakladDane = Math.max(0, rocniPrijem - pausVydaje)
  }
  const vymZaklad = zakladDane * K.vymZakladPct
  const jeVedlejci = extSlevy?.vedlejci
  const minZdrav = jeVedlejci ? 0 : K.minZdravotni * 12
  const zdravotniRocne = Math.max(vymZaklad * K.zdravotniPct, minZdrav)
  const vymZakladSoc = Math.min(vymZaklad, K.maxVZSocialni)
  const minSoc = jeVedlejci ? 0 : K.minSocialni * 12
  const socialniVedlejci = jeVedlejci && (zakladDane < K.rozhodnacastkaVedlejci) ? 0 : Math.max(vymZakladSoc * K.socialniPct, minSoc)
  let danRocne = zakladDane <= K.prahVysokaDan
    ? zakladDane * K.danPct
    : K.prahVysokaDan * K.danPct + (zakladDane - K.prahVysokaDan) * K.danPctVysoka
  let celkemSlevy = K.slevaPoplatnik
  if (extSlevy) {
    const deti = extSlevy.deti || 0
    if (deti >= 1) celkemSlevy += K.slevaDetiSazby[0]
    if (deti >= 2) celkemSlevy += K.slevaDetiSazby[1]
    if (deti >= 3) celkemSlevy += K.slevaDetiSazby[2] * (deti - 2)
    if (extSlevy.manzel) celkemSlevy += K.slevaManzel
    if (extSlevy.invaliditaIII) celkemSlevy += K.slevaInvaliditaIII
    else if (extSlevy.invaliditaI) celkemSlevy += K.slevaInvaliditaI
  }
  danRocne = Math.max(0, danRocne - celkemSlevy)
  const celkemRocne = zdravotniRocne + socialniVedlejci + danRocne
  return { zdravotni: zdravotniRocne, socialni: socialniVedlejci, dan: danRocne, celkemRocne, mesicne: celkemRocne / 12, rezim }
}

interface CasResult { hrubeDniRok: number; dostupneDniRok: number; hrubHodinRok: number; fakturHodinRok: number; fakturHodinMesic: number; hrubHodinMesic: number; svatkyPracovni: number }
interface CasInput { dnyTydne: number; hodinyDenne: number; dovolena: number; nemoc: number; fakturovatelnost: number }

function vypocitejRealneCasy(cas: CasInput): CasResult {
  const { dnyTydne, hodinyDenne, dovolena, nemoc, fakturovatelnost } = cas
  const svatkyPracovni = Math.round(K.svatky * (dnyTydne / 5))
  const hrubeDniRok = dnyTydne * 52
  const dostupneDniRok = Math.max(0, hrubeDniRok - dovolena - nemoc - svatkyPracovni)
  const hrubHodinRok = dostupneDniRok * hodinyDenne
  const fakturHodinRok = hrubHodinRok * (fakturovatelnost / 100)
  const fakturHodinMesic = fakturHodinRok / 12
  const hrubHodinMesic = hrubHodinRok / 12
  return { hrubeDniRok, dostupneDniRok, hrubHodinRok, fakturHodinRok, fakturHodinMesic, hrubHodinMesic, svatkyPracovni }
}

interface VyslResult { minSazba: number; zdravaSazba: number; komfortSazba: number; celkMesicVcOdvodu: number; odvody: Odvody; cas: CasResult }

function vypocitejSazbu(celkOsoMesic: number, celkProMesic: number, casObj: CasInput, rezim: string, pausalPct: number, pausPasmo: number, extSlevy: Slevy): VyslResult | null {
  const zakladMesic = celkOsoMesic + celkProMesic
  const zakladRocne = zakladMesic * 12
  const cas = vypocitejRealneCasy(casObj)
  if (cas.fakturHodinMesic <= 0) return null
  let rocniPrijem = zakladRocne * 1.40
  let prevPrijem = 0
  for (let i = 0; i < 20; i++) {
    prevPrijem = rocniPrijem
    const od = vypocitejOdvody(rocniPrijem, celkProMesic * 12, rezim, pausalPct, pausPasmo, extSlevy)
    rocniPrijem = zakladRocne + od.celkemRocne
    if (Math.abs(rocniPrijem - prevPrijem) < 1) break
  }
  const odvody = vypocitejOdvody(rocniPrijem, celkProMesic * 12, rezim, pausalPct, pausPasmo, extSlevy)
  const celkMesicVcOdvodu = zakladMesic + odvody.mesicne
  const minSazba = Math.ceil(celkMesicVcOdvodu / cas.fakturHodinMesic / 10) * 10
  const zdravaSazba = Math.ceil(minSazba * 1.30 / 10) * 10
  const komfortSazba = Math.ceil(minSazba * 1.65 / 10) * 10
  return { minSazba, zdravaSazba, komfortSazba, celkMesicVcOdvodu, odvody, cas }
}

const fmt = (n: number) => Math.round(n).toLocaleString('cs-CZ')
const fmtH = (n: number) => `${fmt(n)} Kč/h`

// ─────────────────────────────────────────────────────────────
// PODKOMPONENTY
// ─────────────────────────────────────────────────────────────
function T({ text }: { text: string }) {
  return (
    <span className="kalk-tip" data-tip={text}>?</span>
  )
}

interface FProps { label: string; hint?: string; tip?: string; value: number; onChange: (v: number) => void; sfx?: string; auto?: boolean; rocni?: boolean }
function F({ label, hint, tip, value, onChange, sfx = 'Kč', auto, rocni }: FProps) {
  return (
    <div className="kalk-field">
      <div className="kalk-fl">
        {label}
        {tip && <T text={tip} />}
        {auto && <span className="kalk-atag">✓ auto</span>}
        {rocni && <span className="kalk-atag">÷12</span>}
      </div>
      <div className="kalk-iw">
        <input type="number" min={0} value={value || ''} placeholder="0"
          onChange={e => onChange(Number(e.target.value) || 0)} />
        <span className="kalk-sfx">{sfx}</span>
      </div>
      {hint && <div className="kalk-fh">{hint}</div>}
    </div>
  )
}

interface SlProps { label: string; value: number; min: number; max: number; step?: number; unit?: string; onChange: (v: number) => void; marks?: string[]; tip?: string; color?: string; hint?: string }
function Sl({ label, value, min, max, step = 1, unit = '', onChange, marks, tip, color = 'var(--koc)', hint }: SlProps) {
  return (
    <div className="kalk-srow">
      <div className="kalk-sh">
        <span className="kalk-sl">{label}{tip && <T text={tip} />}</span>
        <span className="kalk-sv" style={{ color }}>{fmt(value)}{unit}</span>
      </div>
      <input type="range" className="kalk-range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ '--thumb': color } as React.CSSProperties} />
      {marks && (
        <div className="kalk-sm">
          {marks.map((m, i) => <span key={i} className="kalk-smk">{m}</span>)}
        </div>
      )}
      {hint && <div className="kalk-fh" style={{ marginTop: 5 }}>{hint}</div>}
    </div>
  )
}

interface AccProps { title: string; sum?: number; icon: string; open: boolean; onToggle: () => void; children: React.ReactNode }
function Acc({ title, sum, icon, open, onToggle, children }: AccProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [h, setH] = useState(open ? 2000 : 0)
  useEffect(() => { setH(open ? (ref.current?.scrollHeight || 2000) : 0) }, [open])
  return (
    <div>
      <div className="kalk-acc-h" onClick={onToggle}>
        <span className="kalk-acc-t"><span>{icon}</span>{title}</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {(sum || 0) > 0 && <span className="kalk-acc-s">{fmt(sum || 0)} Kč</span>}
          <span className="kalk-acc-i" style={{ transform: open ? 'rotate(180deg)' : 'none' }}>▾</span>
        </div>
      </div>
      <div style={{ maxHeight: h, overflow: 'hidden', transition: 'max-height .35s cubic-bezier(.16,1,.3,1)' }} ref={ref}>
        <div style={{ paddingTop: 12, paddingBottom: 6 }}>{children}</div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// PRINT PAGE (PDF)
// ─────────────────────────────────────────────────────────────
interface PrintPageProps { vysl: VyslResult; cas2: CasResult; cas: CasInput; celkOs: number; celkPr: number; dan: DanState; slevy: Slevy }
function PrintPage({ vysl, cas2, cas, celkOs, celkPr, dan }: PrintPageProps) {
  if (!vysl) return null
  const now = new Date()
  const datum = now.toLocaleDateString('cs-CZ')
  const rezimLabel = dan.rezim === 'pausalni' ? `Paušální daň ${dan.pausPasmo}. pásmo` : dan.rezim === 'skutecne' ? 'Skutečné výdaje' : `Výdajový paušál ${dan.pausalPct} %`
  return (
    <div id="kalk-pdf-page" style={{ display: 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid #191714', paddingBottom: 10, marginBottom: 16 }}>
        <div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: '.25em', color: '#191714' }}>VERNO</div>
          <div style={{ fontSize: 10, color: '#7A7268', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: 2 }}>Kalkulačka reálné hodinové sazby OSVČ</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 10, color: '#7A7268' }}>
          <div>Datum výpočtu: {datum}</div>
          <div style={{ marginTop: 2 }}>verno.cz/kalkulacka</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 14 }}>
        {[
          { l: 'Minimální sazba', s: vysl.minSazba, c: '#E0304A', desc: 'Pokrývá náklady a odvody.' },
          { l: 'Zdravá sazba', s: vysl.zdravaSazba, c: '#7AB830', desc: 'Doporučené pásmo +30% rezerva.' },
          { l: 'Rozvojová sazba', s: vysl.komfortSazba, c: '#A87DB8', desc: 'Rozvojová hodnota +65% rezerva.' },
        ].map(r => (
          <div key={r.l} style={{ border: `2px solid ${r.c}`, borderRadius: 6, padding: '10px 12px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: r.c, borderRadius: '6px 6px 0 0' }} />
            <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: r.c, marginBottom: 4, marginTop: 2 }}>{r.l}</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: '#191714', letterSpacing: '-.04em', marginBottom: 4 }}>{fmt(r.s)} Kč/h</div>
            <div style={{ fontSize: 8.5, color: '#7A7268', lineHeight: 1.4 }}>{r.desc}</div>
            <div style={{ marginTop: 6, display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f0ede8', paddingTop: 5 }}>
              <span style={{ fontSize: 8.5, color: '#7A7268' }}>Příjem / měsíc</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#191714' }}>{fmt(r.s * cas2.fakturHodinMesic)} Kč</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
        <div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 11, color: '#191714', marginBottom: 8, borderBottom: '1px solid #e2dcd1', paddingBottom: 4 }}>Měsíční struktura nákladů</div>
          {[
            { l: 'Osobní náklady', v: celkOs, c: '#A87DB8' },
            { l: 'Provozní náklady', v: celkPr, c: '#009AC4' },
            { l: 'Daně a odvody', v: Math.round(vysl.odvody.mesicne), c: '#E0304A' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: r.c, flexShrink: 0 }} />
                <span style={{ fontSize: 9, color: '#3A3630' }}>{r.l}</span>
              </div>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: '#191714' }}>{fmt(r.v)} Kč</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e2dcd1', paddingTop: 5, marginTop: 5 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#191714' }}>Celkem musíte vydělat</span>
            <span style={{ fontSize: 10, fontWeight: 800, color: '#191714' }}>{fmt(vysl.celkMesicVcOdvodu)} Kč</span>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 11, color: '#191714', marginBottom: 8, borderBottom: '1px solid #e2dcd1', paddingBottom: 4 }}>Pracovní fond</div>
          {[
            { l: 'Pracovní dny/týden', v: cas.dnyTydne + ' dní' },
            { l: 'Hodin denně', v: cas.hodinyDenne + ' h' },
            { l: 'Dovolená', v: cas.dovolena + ' dní/rok' },
            { l: 'Nemoc (odhad)', v: cas.nemoc + ' dní/rok' },
            { l: 'Fakturovatelnost', v: cas.fakturovatelnost + ' %' },
            { l: 'Fakt. hodin / měsíc', v: Math.round(cas2.fakturHodinMesic) + ' h' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 9, color: '#7A7268' }}>{r.l}</span>
              <span style={{ fontSize: 9.5, fontWeight: 600, color: '#191714' }}>{r.v}</span>
            </div>
          ))}
        </div>
      </div>
      {dan.rezim !== 'pausalni' && (
        <div style={{ background: '#f8f6f2', borderRadius: 5, padding: '9px 12px', marginBottom: 10 }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 10, color: '#191714', marginBottom: 6 }}>Odvody státu / měsíc · {rezimLabel}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
            {[
              { l: 'Zdravotní pojištění', v: Math.round(vysl.odvody.zdravotni / 12) },
              { l: 'Sociální pojištění', v: Math.round(vysl.odvody.socialni / 12) },
              { l: 'Daň z příjmu', v: Math.round(vysl.odvody.dan / 12) },
            ].map(o => (
              <div key={o.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#191714' }}>{fmt(o.v)} Kč</div>
                <div style={{ fontSize: 8, color: '#7A7268' }}>{o.l}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {dan.rezim === 'pausalni' && (
        <div style={{ background: '#f8f6f2', borderRadius: 5, padding: '9px 12px', marginBottom: 10 }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 10, color: '#191714', marginBottom: 4 }}>Daňový režim: {rezimLabel}</div>
          <div style={{ fontSize: 10, color: '#3A3630' }}>Fixní platba státu: <strong>{fmt(vysl.odvody.mesicne)} Kč/měsíc</strong></div>
        </div>
      )}
      <div style={{ borderTop: '1px solid #e2dcd1', paddingTop: 8, marginTop: 16 }}>
        <p style={{ fontSize: 7.5, color: '#9a9288', lineHeight: 1.65, margin: 0 }}>
          Výpočet vychází z veřejně dostupných parametrů OSVČ pro rok 2026. Výstupy mají informativní charakter a nenahrazují daňové ani účetní poradenství.
        </p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// SHARE BLOCK
// ─────────────────────────────────────────────────────────────
interface ShareBlockProps { minSazba: number; zdravaSazba: number; copied: boolean; onCopy: () => void; onPrint: () => void }
function ShareBlock({ minSazba, zdravaSazba, copied, onCopy, onPrint }: ShareBlockProps) {
  return (
    <div style={{ background: 'linear-gradient(135deg,var(--kdeep),#1a1820)', borderRadius: 8, padding: 'clamp(16px,3vw,24px)', marginBottom: 14, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,125,184,.15),transparent 70%)', right: -60, top: -60, pointerEvents: 'none' }} />
      <p style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(240,237,232,.32)', margin: '0 0 12px' }}>Uložení výsledků</p>
      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1rem,2.5vw,1.3rem)', color: '#F0EDE8', lineHeight: 1.4, margin: '0 0 16px' }}>
        Vaše minimální ekonomická sazba vychází na{' '}
        <span style={{ color: '#E0304A' }}>{fmtH(minSazba)}</span>
        {', doporučená stabilní sazba činí '}
        <span style={{ color: '#7AB830' }}>{fmtH(zdravaSazba)}</span>.
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button onClick={onCopy}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: copied ? '#7AB830' : 'rgba(240,237,232,.1)', border: '1px solid rgba(240,237,232,.2)', borderRadius: 3, color: '#F0EDE8', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 12.5, cursor: 'pointer', transition: 'background .3s' }}>
          {copied ? '✓ Zkopírováno!' : '📋 Zkopírovat výsledek'}
        </button>
        <button onClick={onPrint}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: 'rgba(240,237,232,.1)', border: '1px solid rgba(240,237,232,.2)', borderRadius: 3, color: '#F0EDE8', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 12.5, cursor: 'pointer' }}>
          📄 Stáhnout PDF
        </button>
      </div>
      <p style={{ fontSize: 11, color: 'rgba(240,237,232,.3)', margin: '8px 0 0' }}>PDF: v dialogu tisku zvolte &ldquo;Uložit jako PDF&rdquo;.</p>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// HLAVNÍ KOMPONENTA
// ─────────────────────────────────────────────────────────────
interface DanState { rezim: string; pausalPct: number; pausPasmo: number }

export default function KalkulackaOSVC() {
  const wrapRef = useRef<HTMLDivElement>(null)

  // ── Tooltip ──────────────────────────────────────────────
  const tipRef = useRef<HTMLDivElement>(null)
  const handleMouseOver = useCallback((e: React.MouseEvent) => {
    const el = (e.target as HTMLElement).closest('.kalk-tip')
    if (!el || !tipRef.current) return
    const text = (el as HTMLElement).dataset.tip || ''
    tipRef.current.textContent = text
    tipRef.current.style.display = 'block'
  }, [])
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const tip = tipRef.current; if (!tip || tip.style.display === 'none') return
    const x = e.clientX, y = e.clientY
    const tw = tip.offsetWidth, th = tip.offsetHeight
    const vw = window.innerWidth
    let top = y - th - 14; if (top < 8) top = y + 20
    let left = x - tw / 2; if (left < 8) left = 8; if (left + tw > vw - 8) left = vw - tw - 8
    tip.style.left = left + 'px'; tip.style.top = top + 'px'
  }, [])
  const handleMouseOut = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.kalk-tip') && tipRef.current) tipRef.current.style.display = 'none'
  }, [])

  // ── Navigace kroky ───────────────────────────────────────
  const [krok, setKrok] = useState(1)
  const [acc, setAcc] = useState<Record<string, boolean>>({ byd: true })
  const tog = (k: string) => setAcc(p => ({ ...p, [k]: !p[k] }))

  // ── Osobní náklady ───────────────────────────────────────
  const [os, setOs] = useState({ najem: 15000, energie: 3500, jidlo: 8000, drogerie: 1500, telef: 1200, autoPlatba: 0, autoPHM: 2500, autoPojiskaRoc: 6000, mhd: 0, pojistkaMesic: 1000, pojistkaRoc: 4000, zdravi: 1500, deti: 0, skola: 0, kultura: 1000, konickyMesic: 1500, dovRocne: 30000, streaming: 400, obleceni: 800, penzijko: 1000, stavebni: 0, investice: 2000, pujcky: 0 })
  const updOs = (k: string) => (v: number) => setOs(p => ({ ...p, [k]: Math.max(0, v || 0) }))
  const osMesic = useMemo(() => ({
    najem: os.najem, energie: os.energie, jidlo: os.jidlo, drogerie: os.drogerie, telef: os.telef,
    autoPlatba: os.autoPlatba, autoPHM: os.autoPHM, autoPojiska: Math.round(os.autoPojiskaRoc / 12),
    mhd: os.mhd, pojistka: os.pojistkaMesic + Math.round(os.pojistkaRoc / 12), zdravi: os.zdravi,
    deti: os.deti, skola: os.skola, kultura: os.kultura, konickyMesic: os.konickyMesic,
    dovolena: Math.round(os.dovRocne / 12), streaming: os.streaming, obleceni: os.obleceni,
    penzijko: os.penzijko, stavebni: os.stavebni, investice: os.investice, pujcky: os.pujcky,
  }), [os])
  const celkOs = useMemo(() => Object.values(osMesic).reduce((a, b) => a + b, 0), [osMesic])

  // ── Provozní náklady ─────────────────────────────────────
  const [pr, setPr] = useState({ telefPrac: 800, autoLeas: 0, autoPHMprac: 3000, autoPojPracRoc: 5000, najemProv: 0, energieProv: 0, naradiFixni: 1000, odpisy: 500, material: 0, ucetni: 1500, software: 500, banka: 200, marketing: 500, web: 200, kurzy: 500, pojistkaOdpov: 500, pojistkaMap: 0, lide: 0, externisti: 0, rocniJednor: 0, ostatni: 0 })
  const updPr = (k: string) => (v: number) => setPr(p => ({ ...p, [k]: Math.max(0, v || 0) }))
  const prMesic = useMemo(() => ({
    telefPrac: pr.telefPrac, autoLeas: pr.autoLeas, autoPHMprac: pr.autoPHMprac,
    autoPojPrac: Math.round(pr.autoPojPracRoc / 12), najemProv: pr.najemProv, energieProv: pr.energieProv,
    naradiFixni: pr.naradiFixni, odpisy: pr.odpisy, material: pr.material, ucetni: pr.ucetni,
    software: pr.software, banka: pr.banka, marketing: pr.marketing, web: pr.web, kurzy: pr.kurzy,
    pojistkaOdpov: pr.pojistkaOdpov, pojistkaMap: pr.pojistkaMap, lide: pr.lide, externisti: pr.externisti,
    rocniJednor: Math.round(pr.rocniJednor / 12), ostatni: pr.ostatni,
  }), [pr])
  const celkPr = useMemo(() => Object.values(prMesic).reduce((a, b) => a + b, 0), [prMesic])

  // ── Čas ──────────────────────────────────────────────────
  const [cas, setCas] = useState<CasInput>({ dnyTydne: 5, hodinyDenne: 8, dovolena: 20, nemoc: 12, fakturovatelnost: 65 })
  const updCas = (k: string) => (v: number) => setCas(p => ({
    ...p,
    [k]: k === 'dnyTydne' ? Math.min(7, Math.max(1, v || 1))
      : k === 'hodinyDenne' ? Math.min(16, Math.max(1, v || 1))
      : k === 'dovolena' ? Math.min(120, Math.max(0, v || 0))
      : k === 'nemoc' ? Math.min(90, Math.max(0, v || 0))
      : k === 'fakturovatelnost' ? Math.min(95, Math.max(10, v || 10))
      : Math.max(0, v || 0)
  }))

  // ── Daně ─────────────────────────────────────────────────
  const [dan, setDan] = useState<DanState>({ rezim: 'pausal_procento', pausalPct: 60, pausPasmo: 1 })
  const updDan = (k: string) => (v: number | string) => setDan(p => ({ ...p, [k]: v }))
  const [slevy, setSlevy] = useState<Slevy>({ deti: 0, manzel: false, invaliditaIII: false, invaliditaI: false, vedlejci: false })
  const updSlevy = (k: string) => (v: number | boolean) => setSlevy(p => ({ ...p, [k]: v }))

  // ── localStorage ─────────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem('verno_kalk_v5')
      if (saved) {
        const d = JSON.parse(saved)
        if (d.os) setOs(p => ({ ...p, ...d.os }))
        if (d.pr) setPr(p => ({ ...p, ...d.pr }))
        if (d.cas) setCas(p => ({ ...p, ...d.cas }))
        if (d.dan) setDan(p => ({ ...p, ...d.dan }))
        if (d.slevy) setSlevy(p => ({ ...p, ...d.slevy }))
      }
    } catch (e) {}
  }, [])
  useEffect(() => {
    try { localStorage.setItem('verno_kalk_v5', JSON.stringify({ os, pr, cas, dan, slevy })) } catch (e) {}
  }, [os, pr, cas, dan, slevy])

  // ── Výsledky ─────────────────────────────────────────────
  const vysl = useMemo(() => vypocitejSazbu(celkOs, celkPr, cas, dan.rezim, dan.pausalPct, dan.pausPasmo, slevy), [celkOs, celkPr, cas, dan, slevy])
  const [simSazba, setSimSazba] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const [simDny, setSimDny] = useState<number | null>(null)
  const [simHod, setSimHod] = useState<number | null>(null)
  useEffect(() => {
    if (vysl && simSazba === null) setSimSazba(vysl.zdravaSazba)
    if (simDny === null) setSimDny(cas.dnyTydne)
    if (simHod === null) setSimHod(cas.hodinyDenne)
  }, [vysl])

  const simVysl = useMemo(() => {
    if (!simSazba || !simDny || !simHod || !vysl) return null
    const simCas = { ...cas, dnyTydne: simDny, hodinyDenne: simHod }
    const simC = vypocitejRealneCasy(simCas)
    const fakturMesic = simC.fakturHodinMesic
    const prijem = simSazba * fakturMesic
    const potreb = vysl.celkMesicVcOdvodu
    const prebytek = prijem - potreb
    const hodNaKrytí = potreb / simSazba
    const hodHrubeNaKrytí = hodNaKrytí / (cas.fakturovatelnost / 100)
    const dniNaKrytí = hodHrubeNaKrytí / simHod
    const dniTydneNaKrytí = dniNaKrytí / 4.33
    const hodDenneNaKrytí = hodHrubeNaKrytí / (simDny * 4.33)
    return {
      fakturMesic: Math.round(fakturMesic), prijem: Math.round(prijem), prebytek: Math.round(prebytek),
      dniNaKrytí: Math.round(dniNaKrytí * 10) / 10,
      dniTydneNaKrytí: Math.min(7, Math.round(dniTydneNaKrytí * 10) / 10),
      hodDenneNaKrytí: Math.round(hodDenneNaKrytí * 10) / 10,
      volneDniTydne: Math.max(0, Math.round((simDny - dniTydneNaKrytí) * 10) / 10),
      staci: prijem >= potreb,
    }
  }, [simSazba, simDny, simHod, vysl, cas])

  const cas2 = vysl?.cas || vypocitejRealneCasy(cas)

  const scrollToTop = () => { if (wrapRef.current) wrapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); else window.scrollTo({ top: 0, behavior: 'smooth' }) }

  const handlePrint = () => {
    const el = document.getElementById('kalk-pdf-page')
    if (!el) return
    el.style.display = 'block'
    const h2p = (window as unknown as Record<string, unknown>)['html2pdf']
    if (typeof h2p === 'function') {
      (h2p as (o?: unknown) => { set: (o: unknown) => { from: (el: HTMLElement) => { save: () => Promise<void> } } })().set({
        margin: 0, filename: 'verno-kalkulacka-osvc-2026.pdf',
        image: { type: 'jpeg', quality: 0.97 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      }).from(el).save().then(() => { el.style.display = 'none' })
    } else {
      window.print()
      setTimeout(() => { el.style.display = 'none' }, 1500)
    }
  }

  const handleCopy = () => {
    if (!vysl) return
    const text = `Moje minimální hodinová sazba: ${fmtH(vysl.minSazba)}. Doporučená: ${fmtH(vysl.zdravaSazba)}. Spočítáno na verno.cz/kalkulacka`
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500) })
    } else {
      const ta = document.createElement('textarea')
      ta.value = text; ta.style.position = 'fixed'; ta.style.left = '-9999px'
      document.body.appendChild(ta); ta.focus(); ta.select()
      try { document.execCommand('copy'); setCopied(true); setTimeout(() => setCopied(false), 2500) } catch (e) {}
      ta.remove()
    }
  }

  // ─────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────
  return (
    <div ref={wrapRef} className="kalk" onMouseOver={handleMouseOver} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <style>{KALK_CSS}</style>

      {/* html2pdf script */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" defer />

      {/* LIVE PANEL */}
      <div className="kalk-live">
        <div className="kalk-li">
          <div><div className="kalk-ll">Minimální sazba</div><div className="kalk-lv" style={{ color: '#E0304A' }}>{vysl ? fmtH(vysl.minSazba) : '—'}</div></div>
          <div><div className="kalk-ll">Doporučená sazba</div><div className="kalk-lv" style={{ color: '#7AB830' }}>{vysl ? fmtH(vysl.zdravaSazba) : '—'}</div></div>
          <div><div className="kalk-ll">Náklady / měsíc</div><div className="kalk-lv" style={{ color: 'rgba(240,237,232,.7)' }}>{vysl ? fmt(vysl.celkMesicVcOdvodu) + ' Kč' : '—'}</div></div>
          <div><div className="kalk-ll">Fakt. hodin / měsíc</div><div className="kalk-lv" style={{ color: 'rgba(240,237,232,.7)' }}>{fmt(cas2.fakturHodinMesic)} h</div></div>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="kalk-prog">
        {[{ n: 1, l: 'Osobní\nnáklady' }, { n: 2, l: 'Provozní\nnáklady' }, { n: 3, l: 'Čas\na práce' }, { n: 4, l: 'Daně\na odvody' }, { n: 5, l: 'Výsledky' }].map(s => (
          <button key={s.n} className={`kalk-pb${krok === s.n ? ' kalk-act' : ''}${krok > s.n ? ' kalk-dn' : ''}`}
            onClick={() => { setKrok(s.n); scrollToTop() }}>
            {krok > s.n ? '✓ ' : ''}{s.l.split('\n').map((l, i) => <span key={i} style={{ display: i > 0 ? 'block' : 'inline' }}>{l}</span>)}
          </button>
        ))}
      </div>

      {/* MAIN */}
      <div className="kalk-main">

        {/* ── KROK 1: OSOBNÍ NÁKLADY ── */}
        {krok === 1 && (
          <div>
            <div className="kalk-shdr">
              <div className="kalk-snum" style={{ background: 'var(--koc)' }}><span>1</span></div>
              <div>
                <h2 className="kalk-sh2">Váš osobní život a rodina</h2>
                <p className="kalk-ssub">Položky, které měsíčně odcházejí z Vašeho soukromého rozpočtu. Roční platby přepočítá kalkulačka automaticky.</p>
              </div>
            </div>
            <div style={{ background: 'rgba(168,125,184,.1)', border: '1px solid rgba(168,125,184,.25)', borderRadius: 7, padding: '16px 18px', marginBottom: 16 }}>
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: 'var(--kink)', margin: '0 0 8px' }}>Jak zadávat výdaje?</p>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--kinks)', margin: 0 }}>Uvádějte prosím částky, které <strong>reálně odcházejí z Vašeho rozpočtu</strong>. Pokud sdílíte náklady s partnerem, zadejte pouze Vaši polovinu. Daně a odvody systém dopočítá automaticky.</p>
            </div>

            <div className="kalk-card">
              <Acc title="Bydlení" icon="🏠" sum={osMesic.najem + osMesic.energie} open={!!acc.byd} onToggle={() => tog('byd')}>
                <div className="kalk-irow">
                  <F label="Nájem nebo hypotéka" tip={'Splátka hypotéky nebo nájemné. Poplatky SVJ patří sem, energie zvlášť.'} value={os.najem} onChange={updOs('najem')} />
                  <F label="Energie — elektřina, plyn, voda" tip={'Zálohy na elektřinu, plyn a vodu.'} value={os.energie} onChange={updOs('energie')} />
                </div>
              </Acc>
              <Acc title="Jídlo a domácnost" icon="🛒" sum={osMesic.jidlo + osMesic.drogerie} open={!!acc.jidlo} onToggle={() => tog('jidlo')}>
                <div className="kalk-irow">
                  <F label="Potraviny a supermarket" tip={'Realistický průměr za celou domácnost.\nJednočlenná: 5 000–8 000 Kč/měs.\nDvoučlenná: 8 000–14 000 Kč/měs.\nRodina s dětmi: 14 000–22 000 Kč/měs.'} value={os.jidlo} onChange={updOs('jidlo')} />
                  <F label="Drogerie, čistidla, hygiena" tip={'Prací prášky, kosmetika, hygienické potřeby.\nPrůměr domácnosti: 1 000–2 500 Kč/měs.'} value={os.drogerie} onChange={updOs('drogerie')} />
                </div>
              </Acc>
              <Acc title="Telefon a internet" icon="📱" sum={osMesic.telef} open={!!acc.telef} onToggle={() => tog('telef')}>
                <div className="kalk-info" style={{ marginBottom: 10 }}>Zde zadejte soukromý telefon a domácí internet. Pracovní telefon patří do Kroku 2.</div>
                <F label="Telefon + internet dohromady (měsíčně)" tip={'Jen soukromý telefon a domácí internet.'} value={os.telef} onChange={updOs('telef')} />
              </Acc>
              <Acc title="Osobní doprava" icon="🚗" sum={osMesic.autoPlatba + osMesic.autoPHM + osMesic.autoPojiska + osMesic.mhd} open={!!acc.dop} onToggle={() => tog('dop')}>
                <div className="kalk-info" style={{ marginBottom: 10 }}>Zde jen soukromé jízdy. Pracovní auto patří do Kroku 2.</div>
                <div className="kalk-irow">
                  <F label="Splátka osobního auta (měsíčně)" tip={'Splátka osobního auta. Pokud slouží i k práci, zadejte jen soukromý podíl.'} value={os.autoPlatba} onChange={updOs('autoPlatba')} />
                  <F label="PHM — soukromé jízdy (měsíčně)" tip={'PHM na soukromé jízdy.'} value={os.autoPHM} onChange={updOs('autoPHM')} />
                  <F label="Pojistka auta ročně" tip={'Zadejte roční součet povinného a havarijního. Kalkulačka vydělí 12.'} value={os.autoPojiskaRoc} onChange={updOs('autoPojiskaRoc')} sfx="Kč/rok" rocni />
                  <F label="MHD, vlak, bus (měsíčně)" tip={'Jízdné a předplatní jízdenky pro soukromé cestování.'} value={os.mhd} onChange={updOs('mhd')} />
                </div>
                {os.autoPojiskaRoc > 0 && <div className="kalk-good">Pojistka auta: {fmt(os.autoPojiskaRoc)} Kč/rok = {fmt(Math.round(os.autoPojiskaRoc / 12))} Kč/měsíc (přičteno automaticky)</div>}
              </Acc>
              <Acc title="Soukromé pojištění" icon="🛡️" sum={osMesic.pojistka} open={!!acc.poj} onToggle={() => tog('poj')}>
                <div className="kalk-info" style={{ marginBottom: 10 }}>Pojistky mimo auto. Životní, úrazová, domácnost, odpovědnost občana.</div>
                <div className="kalk-irow">
                  <F label="Pojistky — měsíční platby" value={os.pojistkaMesic} onChange={updOs('pojistkaMesic')} />
                  <F label="Pojistky — roční platby" value={os.pojistkaRoc} onChange={updOs('pojistkaRoc')} sfx="Kč/rok" rocni />
                </div>
                {os.pojistkaRoc > 0 && <div className="kalk-good">Roční pojistky: {fmt(os.pojistkaRoc)} Kč/rok = {fmt(Math.round(os.pojistkaRoc / 12))} Kč/měsíc (přičteno automaticky)</div>}
              </Acc>
              <Acc title="Zdraví a osobní péče" icon="🏥" sum={osMesic.zdravi} open={!!acc.zdr} onToggle={() => tog('zdr')}>
                <div className="kalk-info" style={{ marginBottom: 8 }}><span className="kalk-atag">✓ auto</span> Zdravotní pojištění je zahrnuto v odvodech.</div>
                <F label="Lékaři, stomatolog, brýle, vitamíny (měsíčně)" tip={'Doplatky za léky, prohlídky.\nNezdravotní péče: masáže, kadeřník.'} value={os.zdravi} onChange={updOs('zdravi')} />
              </Acc>
              <Acc title="Děti a vzdělávání" icon="👶" sum={osMesic.deti + osMesic.skola} open={!!acc.deti} onToggle={() => tog('deti')}>
                <div className="kalk-irow">
                  <F label="Náklady na děti (měsíčně)" tip={'Jídlo, oblečení, hračky, kroužky.\nPlínky, kojenecká výživa u malých dětí.'} value={os.deti} onChange={updOs('deti')} />
                  <F label="Školné, kurzy, studium" value={os.skola} onChange={updOs('skola')} />
                </div>
              </Acc>
              <Acc title="Volný čas a koníčky" icon="🎭" sum={osMesic.kultura + osMesic.konickyMesic + Math.round(os.dovRocne / 12) + osMesic.streaming + osMesic.obleceni} open={!!acc.vol} onToggle={() => tog('vol')}>
                <div className="kalk-irow">
                  <F label="Kultura, sport, sociální výdaje" value={os.kultura} onChange={updOs('kultura')} />
                  <F label="Koníčky a pravidelné záliby" value={os.konickyMesic} onChange={updOs('konickyMesic')} />
                  <F label="Dovolená a výlety (ročně)" value={os.dovRocne} onChange={updOs('dovRocne')} sfx="Kč/rok" rocni />
                  <F label="Streaming a předplatné" value={os.streaming} onChange={updOs('streaming')} />
                  <F label="Oblečení a obuv" value={os.obleceni} onChange={updOs('obleceni')} />
                </div>
                {os.dovRocne > 0 && <div className="kalk-good">Dovolená: {fmt(os.dovRocne)} Kč/rok = {fmt(Math.round(os.dovRocne / 12))} Kč/měsíc (přičteno automaticky)</div>}
              </Acc>
              <Acc title="Spoření a závazky" icon="💰" sum={osMesic.penzijko + osMesic.stavebni + osMesic.investice + osMesic.pujcky} open={!!acc.spo} onToggle={() => tog('spo')}>
                <div className="kalk-irow">
                  <F label="Penzijní spoření (měsíčně)" value={os.penzijko} onChange={updOs('penzijko')} />
                  <F label="Stavební spoření (měsíčně)" value={os.stavebni} onChange={updOs('stavebni')} />
                  <F label="Investice (měsíčně)" tip={'ETF, podílové fondy, nemovitosti.'} value={os.investice} onChange={updOs('investice')} />
                  <F label="Splátky půjček a dluhů" value={os.pujcky} onChange={updOs('pujcky')} />
                </div>
              </Acc>
            </div>

            <div style={{ background: 'var(--kdeep)', borderRadius: 6, padding: '16px 20px', marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: 'rgba(240,237,232,.55)' }}>Osobní náklady / měsíc:</span>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, color: '#F0EDE8' }}>{fmt(celkOs)} Kč</span>
              </div>
            </div>
            <button className="kalk-btn" onClick={() => { setKrok(2); scrollToTop() }}>Pokračovat na provozní náklady →</button>
          </div>
        )}

        {/* ── KROK 2: PROVOZNÍ NÁKLADY ── */}
        {krok === 2 && (
          <div>
            <div className="kalk-shdr">
              <div className="kalk-snum" style={{ background: 'var(--kca)' }}><span>2</span></div>
              <div>
                <h2 className="kalk-sh2">Náklady na podnikání</h2>
                <p className="kalk-ssub">Co měsíčně platíte kvůli práci a provozu své firmy. Daně a pojištění systém dopočítá samostatně v Kroku 4.</p>
              </div>
            </div>
            <div className="kalk-card">
              <Acc title="Telefon a internet (pracovní)" icon="📱" sum={prMesic.telefPrac} open={!!acc.pt} onToggle={() => tog('pt')}>
                <F label="Pracovní telefon + firemní internet (měsíčně)" value={pr.telefPrac} onChange={updPr('telefPrac')} />
              </Acc>
              <Acc title="Pracovní auto a doprava" icon="🚙" sum={prMesic.autoLeas + prMesic.autoPHMprac + prMesic.autoPojPrac} open={!!acc.pa} onToggle={() => tog('pa')}>
                <div className="kalk-irow">
                  <F label="Leasing nebo splátka auta (měsíčně)" value={pr.autoLeas} onChange={updPr('autoLeas')} />
                  <F label="PHM — pracovní jízdy (měsíčně)" value={pr.autoPHMprac} onChange={updPr('autoPHMprac')} />
                  <F label="Pojistka pracovního auta (ročně)" value={pr.autoPojPracRoc} onChange={updPr('autoPojPracRoc')} sfx="Kč/rok" rocni />
                </div>
                {pr.autoPojPracRoc > 0 && <div className="kalk-good">Pojistka auta: {fmt(Math.round(pr.autoPojPracRoc / 12))} Kč/měsíc</div>}
              </Acc>
              <Acc title="Provozovna a kancelář" icon="🏢" sum={prMesic.najemProv + prMesic.energieProv} open={!!acc.prov} onToggle={() => tog('prov')}>
                <div className="kalk-irow">
                  <F label="Nájem provozovny nebo kanceláře" value={pr.najemProv} onChange={updPr('najemProv')} />
                  <F label="Energie provozovny (měsíčně)" value={pr.energieProv} onChange={updPr('energieProv')} />
                </div>
              </Acc>
              <Acc title="Vybavení a odpisy" icon="🔧" sum={prMesic.naradiFixni + prMesic.odpisy} open={!!acc.vyb} onToggle={() => tog('vyb')}>
                <div className="kalk-irow">
                  <F label="Nářadí a vybavení (průměrný měsíc)" tip={'Malé nákupy, které se neodepisují.'} value={pr.naradiFixni} onChange={updPr('naradiFixni')} />
                  <F label="Odpisy drahého vybavení (měsíčně)" tip={'Pořizovací cena ÷ měsíce životnosti.'} value={pr.odpisy} onChange={updPr('odpisy')} />
                </div>
              </Acc>
              <Acc title="Materiál a zboží" icon="📦" sum={prMesic.material} open={!!acc.mat} onToggle={() => tog('mat')}>
                <div className="kalk-info" style={{ marginBottom: 10 }}>Jen spotřební materiál, který klientovi nepřeúčtujete.</div>
                <F label="Spotřební materiál za měsíc" value={pr.material} onChange={updPr('material')} />
              </Acc>
              <Acc title="Administrativa a software" icon="📋" sum={prMesic.ucetni + prMesic.software + prMesic.banka} open={!!acc.adm} onToggle={() => tog('adm')}>
                <div className="kalk-irow">
                  <F label="Účetní / daňový poradce (měsíčně)" value={pr.ucetni} onChange={updPr('ucetni')} />
                  <F label="Software a aplikace (měsíčně)" tip={'Účetní software, Adobe, MS365, CRM...'} value={pr.software} onChange={updPr('software')} />
                  <F label="Bankovní poplatky (měsíčně)" value={pr.banka} onChange={updPr('banka')} />
                </div>
              </Acc>
              <Acc title="Marketing a web" icon="📣" sum={prMesic.marketing + prMesic.web} open={!!acc.mkt} onToggle={() => tog('mkt')}>
                <div className="kalk-irow">
                  <F label="Reklama — Google, Facebook, letáky" value={pr.marketing} onChange={updPr('marketing')} />
                  <F label="Web, doména, hosting (měsíčně)" tip={'Roční náklady ÷ 12.'} value={pr.web} onChange={updPr('web')} />
                </div>
              </Acc>
              <Acc title="Vzdělávání" icon="📚" sum={prMesic.kurzy} open={!!acc.vzd} onToggle={() => tog('vzd')}>
                <F label="Kurzy, školení, literatura (měsíčně)" value={pr.kurzy} onChange={updPr('kurzy')} />
              </Acc>
              <Acc title="Podnikatelské pojištění" icon="🛡️" sum={prMesic.pojistkaOdpov + prMesic.pojistkaMap} open={!!acc.ppoj} onToggle={() => tog('ppoj')}>
                <div className="kalk-irow">
                  <F label="Pojistka odpovědnosti z povolání" tip={'Chrání před škodami způsobenými při práci.'} value={pr.pojistkaOdpov} onChange={updPr('pojistkaOdpov')} />
                  <F label="Pojistka majetku podnikání" value={pr.pojistkaMap} onChange={updPr('pojistkaMap')} />
                </div>
              </Acc>
              <Acc title="Spolupráce a lidé" icon="👥" sum={prMesic.lide + prMesic.externisti} open={!!acc.lid} onToggle={() => tog('lid')}>
                <div className="kalk-irow">
                  <F label="Zaměstnanci, DPP, DPČ — hrubé náklady" tip={'Hrubá mzda + 34 % odvody zaměstnavatele.'} value={pr.lide} onChange={updPr('lide')} />
                  <F label="Subdodavatelé a freelanceři" value={pr.externisti} onChange={updPr('externisti')} />
                </div>
              </Acc>
              <Acc title="Jednorázové roční výdaje" icon="📅" sum={prMesic.rocniJednor} open={!!acc.roc} onToggle={() => tog('roc')}>
                <F label="Roční výdaje celkem (zadejte ročně)" hint="Silniční daň, dálniční známka, revize, větší nákupy…" tip={'Kalkulačka vydělí 12 a přičte k měsíčním nákladům.'} value={pr.rocniJednor} onChange={updPr('rocniJednor')} sfx="Kč/rok" rocni />
                {pr.rocniJednor > 0 && <div className="kalk-good">Roční výdaje: {fmt(Math.round(pr.rocniJednor / 12))} Kč/měsíc — rovnoměrně rozloženo</div>}
              </Acc>
              <Acc title="Ostatní specifické výdaje" icon="➕" sum={prMesic.ostatni} open={!!acc.ost} onToggle={() => tog('ost')}>
                <F label="Co jinde nezapadá (měsíčně)" value={pr.ostatni} onChange={updPr('ostatni')} />
              </Acc>
            </div>
            <div style={{ background: 'var(--kdeep)', borderRadius: 6, padding: '16px 20px', marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: 'rgba(240,237,232,.55)' }}>Provozní náklady / měsíc:</span>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, color: '#F0EDE8' }}>{fmt(celkPr)} Kč</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: 'rgba(240,237,232,.45)' }}>Celkové výdaje (bez odvodů):</span>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: 'rgba(240,237,232,.65)' }}>{fmt(celkOs + celkPr)} Kč</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="kalk-btnb" onClick={() => { setKrok(1); scrollToTop() }}>← Zpět</button>
              <button className="kalk-btn" style={{ flex: 1 }} onClick={() => { setKrok(3); scrollToTop() }}>Pokračovat na pracovní čas →</button>
            </div>
          </div>
        )}

        {/* ── KROK 3: ČAS ── */}
        {krok === 3 && (
          <div>
            <div className="kalk-shdr">
              <div className="kalk-snum" style={{ background: 'var(--kor)' }}><span>3</span></div>
              <div>
                <h2 className="kalk-sh2">Pracovní fond a časová realita</h2>
                <p className="kalk-ssub">Hodinová sazba musí zohledňovat dny volna, neplánované výpadky a čas strávený administrativou.</p>
              </div>
            </div>
            <div className="kalk-card">
              <Sl label="Počet plánovaných pracovních dní v týdnu" value={cas.dnyTydne} min={1} max={7} unit=" dní"
                onChange={updCas('dnyTydne')} color="var(--kor)" marks={['1', '2', '3', '4', '5', '6', '7']}
                tip={'Kolik dní v týdnu chcete aktivně pracovat.\n5 = standardní pracovní týden.'} />
              <Sl label="Požadovaná denní doba v práci" value={cas.hodinyDenne} min={2} max={14} unit=" h"
                onChange={updCas('hodinyDenne')} color="var(--kor)" marks={['2', '4', '6', '8', '10', '12', '14']}
                tip={'Celkový čas v práci včetně cesty, administrace, přípravy.\nNEjen hodiny kdy fakticky fakturujete.'} />
              <Sl label="Plánované dny dovolené a volna za rok" value={cas.dovolena} min={0} max={120} unit=" dní"
                onChange={updCas('dovolena')} color="var(--kca)" marks={['0', '20', '40', '60', '90', '120']}
                tip={'Jako OSVČ si dovolenou hradíte sami.\nDoporučení: min. 20 dní.'}
                hint="Doporučení: minimálně 20 dní. Pod tím hrozí vyhoření." />
              <Sl label="Rezerva na dny nemoci za rok" value={cas.nemoc} min={0} max={90} unit=" dní"
                onChange={updCas('nemoc')} color="var(--krd)" marks={['0', '10', '20', '30', '60', '90']}
                tip={'Průměrná nemocnost v ČR: 12–15 dní ročně.\nJako OSVČ v nemoci nevyděláváte.'}
                hint="Průměr ČR: 12–15 dní." />
              <div className="kalk-info">
                <span className="kalk-atag">✓ automaticky</span>&nbsp;
                <strong>Státní svátky: {K.svatky} dní/rok</strong> (z toho přibližně {cas2.svatkyPracovni} připadá na Vaše pracovní dny). Systém je odečítá automaticky.
              </div>
              <div style={{ marginBottom: 16 }}>
                <div className="kalk-sh">
                  <span className="kalk-sl">Kolik hodin můžete fakturovat klientům<T text={'Procento pracovní doby, za které Vám klient skutečně zaplatí.\n\nZbytek jsou neplacené hodiny:\n• Cesta na místo a zpět\n• Administrativa, faktury, e-maily\n• Příprava pracoviště\n• Shánění zakázek'} /></span>
                  <span className="kalk-sv" style={{ color: 'var(--koc)' }}>{cas.fakturovatelnost} %</span>
                </div>
                <input type="range" className="kalk-range" min={30} max={95} step={1} value={cas.fakturovatelnost}
                  onChange={e => updCas('fakturovatelnost')(Number(e.target.value))}
                  style={{ '--thumb': 'var(--koc)' } as React.CSSProperties} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, marginBottom: 12 }}>
                  <span style={{ fontSize: 10, color: 'var(--kdim)' }}>30 % (vysoká režie)</span>
                  <span style={{ fontSize: 10, color: 'var(--kdim)' }}>95 % (téměř bez režie)</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }}>
                  {[
                    { l: '🔧 Řemeslné obory a výroba', h: 'Příprava zakázek, logistika, zaměření', v: 70 },
                    { l: '🚜 Doprava a mechanizace', h: 'Údržba techniky, přejezdy, prostoje', v: 65 },
                    { l: '✂️ Osobní služby a salony', h: 'Pravidelný sled navazujících klientů', v: 78 },
                    { l: '💻 Konzultace a duševní činnost', h: 'Vysoká režie na přípravu a administrativu', v: 55 },
                    { l: '🏗️ Projektové vedení a stavby', h: 'Kooperace, kontrolní dny, příprava', v: 60 },
                    { l: '📦 Obchodní činnost a reality', h: 'Akvizice, prohlídky, jednání bez výsledku', v: 50 },
                  ].map(o => (
                    <button key={o.v} onClick={() => updCas('fakturovatelnost')(o.v)}
                      style={{ padding: '9px 11px', border: `1.5px solid ${cas.fakturovatelnost === o.v ? 'var(--koc)' : 'var(--kln)'}`, borderRadius: 5, background: cas.fakturovatelnost === o.v ? 'rgba(168,125,184,.08)' : 'var(--kcl)', cursor: 'pointer', textAlign: 'left', transition: 'all .2s' }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 11.5, color: cas.fakturovatelnost === o.v ? 'var(--koc)' : 'var(--kink)', margin: '0 0 2px' }}>{o.l} · {o.v} %</p>
                      <p style={{ fontSize: 10, color: 'var(--kdim)', margin: 0, lineHeight: 1.4 }}>{o.h}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ background: 'linear-gradient(135deg,var(--kdeep),#1a1820)', borderRadius: 8, padding: '18px 20px', color: '#F0EDE8' }}>
                <p style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(240,237,232,.35)', margin: '0 0 12px' }}>Orientační měsíční bilance fondu pracovní doby</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 12 }}>
                  {[
                    { l: 'Pracovních dní/měsíc', v: Math.round(cas2.dostupneDniRok / 12 * 10) / 10 },
                    { l: 'Hrubých hodin/měsíc', v: Math.round(cas2.hrubHodinMesic) },
                    { l: 'Faktur. hodin/měsíc', v: Math.round(cas2.fakturHodinMesic), c: '#7AB830' },
                  ].map(s => (
                    <div key={s.l} style={{ textAlign: 'center', background: 'rgba(255,255,255,.05)', borderRadius: 5, padding: '10px 6px' }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(.9rem,2.5vw,1.2rem)', color: (s as {c?: string}).c || 'rgba(240,237,232,.8)', margin: '0 0 3px' }}>{s.v}</p>
                      <p style={{ fontSize: 10, color: 'rgba(240,237,232,.35)', margin: 0, lineHeight: 1.4 }}>{s.l}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.7, margin: '0 0 5px' }}>
                  Z <strong>{Math.round(cas2.hrubHodinMesic)} hrubých hodin</strong> měsíčně Vám klient zaplatí jen za{' '}
                  <strong style={{ color: '#7AB830' }}>{Math.round(cas2.fakturHodinMesic)} hodin</strong>.
                </p>
              </div>
            </div>
            {cas.fakturovatelnost > 85 && <div className="kalk-warn" style={{ marginBottom: 12 }}>Fakturovatelnost nad 85 % je v praxi výjimečná. Zkontrolujte, zda číslo reálně odpovídá Vašemu provozu.</div>}
            {cas.hodinyDenne > 12 && <div className="kalk-warn" style={{ marginBottom: 12 }}>Více než 12 hodin práce denně je dlouhodobě neudržitelné.</div>}
            {cas.dovolena < 10 && <div className="kalk-warn" style={{ marginBottom: 12 }}>Méně než 10 dní dovolené ročně zvyšuje riziko vyhoření. Standardní fond je 20 dní.</div>}
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="kalk-btnb" onClick={() => { setKrok(2); scrollToTop() }}>← Zpět</button>
              <button className="kalk-btn" style={{ flex: 1 }} onClick={() => { setKrok(4); scrollToTop() }}>Pokračovat na daňový režim →</button>
            </div>
          </div>
        )}

        {/* ── KROK 4: DANĚ ── */}
        {krok === 4 && (
          <div>
            <div className="kalk-shdr">
              <div className="kalk-snum" style={{ background: 'var(--krd)' }}><span>4</span></div>
              <div>
                <h2 className="kalk-sh2">Daňový režim a odvody</h2>
                <p className="kalk-ssub">Kalkulačka dopočítá orientační výši daní, zdravotního a sociálního pojištění automaticky na základě Vašich příjmů.</p>
              </div>
            </div>
            <div className="kalk-card">
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: 'var(--kink)', margin: '0 0 4px' }}>Jaký daňový režim používáte?</p>
              <p style={{ fontSize: 12, color: 'var(--kdim)', margin: '0 0 14px' }}>Vyberte způsob, jakým uplatňujete výdaje a platíte daně.</p>
              <div className="kalk-chips">
                {[
                  { k: 'pausal_procento', l: 'Výdajový paušál' },
                  { k: 'skutecne', l: 'Skutečné výdaje' },
                  { k: 'pausalni', l: 'Paušální daň' },
                ].map(r => (
                  <button key={r.k} className={`kalk-chip${dan.rezim === r.k ? ' kalk-chip-on' : ''}`} onClick={() => updDan('rezim')(r.k)}>{r.l}</button>
                ))}
              </div>
              {dan.rezim === 'pausal_procento' && (
                <div>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 12.5, color: 'var(--kink)', margin: '0 0 10px' }}>Výše výdajového paušálu:</p>
                  <div className="kalk-chips">
                    {Object.entries(K.pausalVydaje).map(([k, info]) => (
                      <button key={k} className={`kalk-chip${dan.pausalPct === Number(k) ? ' kalk-chip-on' : ''}`} onClick={() => updDan('pausalPct')(Number(k))}>
                        {info.label}
                      </button>
                    ))}
                  </div>
                  {Object.entries(K.pausalVydaje).map(([k, info]) => dan.pausalPct === Number(k) && (
                    <div key={k} className="kalk-info">
                      <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6 }}>Typické obory: {info.obory}</p>
                    </div>
                  ))}
                </div>
              )}
              {dan.rezim === 'pausalni' && (
                <div style={{ background: 'var(--kcl1)', borderRadius: 6, padding: '14px 18px', marginBottom: 12 }}>
                  <div style={{ background: 'rgba(245,138,0,.1)', border: '1px solid rgba(245,138,0,.3)', borderRadius: 4, padding: '10px 12px', marginBottom: 12, fontSize: 12, lineHeight: 1.6, color: '#7a4a00' }}>
                    V režimu paušální daně je nutné splnit zákonné podmínky. Výběr proveďte na základě očekávaného ročního obratu.
                  </div>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, color: 'var(--kink)', margin: '0 0 10px' }}>Vyberte pásmo paušální daně (2026):</p>
                  {Object.entries(K.pausalni).map(([k, p]) => (
                    <div key={k} onClick={() => updDan('pausPasmo')(Number(k))}
                      style={{ padding: '11px 13px', marginBottom: 7, border: `1.5px solid ${dan.pausPasmo === Number(k) ? 'var(--krd)' : 'var(--kln)'}`, borderRadius: 5, cursor: 'pointer', background: dan.pausPasmo === Number(k) ? 'rgba(224,48,74,.06)' : '#fff', transition: 'all .2s' }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 12, color: dan.pausPasmo === Number(k) ? 'var(--krd)' : 'var(--kink)', margin: '0 0 2px' }}>{k}. pásmo — {p.limit}</p>
                      <p style={{ fontSize: 11, color: 'var(--kdim)', margin: 0 }}>{fmt(p.mesic)} Kč/měsíc = {fmt(p.rocni)} Kč/rok</p>
                    </div>
                  ))}
                </div>
              )}
              {vysl && (
                <div style={{ background: 'var(--kdeep)', borderRadius: 6, padding: '14px 18px', color: '#F0EDE8' }}>
                  <p style={{ fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(240,237,232,.32)', margin: '0 0 10px' }}>Orientační model měsíčních odvodů</p>
                  {dan.rezim === 'pausalni' ? (
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: 'var(--kor)', margin: '0 0 3px' }}>{fmt(vysl.odvody.mesicne)} Kč/měsíc</p>
                      <p style={{ fontSize: 12, color: 'rgba(240,237,232,.4)' }}>Fixní paušální platba státu</p>
                    </div>
                  ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                      {[{ l: 'Zdravotní', v: Math.round(vysl.odvody.zdravotni / 12), c: 'var(--kca)' }, { l: 'Sociální', v: Math.round(vysl.odvody.socialni / 12), c: 'var(--koc)' }, { l: 'Daň z příjmu', v: Math.round(vysl.odvody.dan / 12), c: 'var(--kor)' }].map(o => (
                        <div key={o.l} style={{ textAlign: 'center', background: 'rgba(255,255,255,.06)', borderRadius: 5, padding: '10px 6px' }}>
                          <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(.9rem,2vw,1.1rem)', color: o.c, margin: '0 0 2px' }}>{fmt(o.v)} Kč</p>
                          <p style={{ fontSize: 10, color: 'rgba(240,237,232,.35)', margin: 0 }}>{o.l}/měs.</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="kalk-card">
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: 'var(--kink)', margin: '0 0 4px' }}>Vaše specifická situace</p>
              <p style={{ fontSize: 12, color: 'var(--kdim)', margin: '0 0 14px' }}>Upřesněte své zázemí pro přesnější odhad daňové složky.</p>
              <div onClick={() => updSlevy('vedlejci')(!slevy.vedlejci)}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', border: `1.5px solid ${slevy.vedlejci ? 'var(--koc)' : 'var(--kln)'}`, borderRadius: 5, cursor: 'pointer', background: slevy.vedlejci ? 'rgba(168,125,184,.07)' : '#fff', marginBottom: 10, transition: 'all .2s' }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${slevy.vedlejci ? 'var(--koc)' : 'rgba(25,23,20,.2)'}`, background: slevy.vedlejci ? 'var(--koc)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .2s' }}>
                  {slevy.vedlejci && <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>✓</span>}
                </div>
                <div>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, color: slevy.vedlejci ? 'var(--koc)' : 'var(--kink)', margin: '0 0 2px' }}>Výkon jako vedlejší zdroj příjmů</p>
                  <p style={{ fontSize: 11.5, color: 'var(--kdim)', margin: 0 }}>Při nižším zisku nemusí vzniknout povinnost platit sociální pojištění.</p>
                </div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 12.5, color: 'var(--kink)', margin: '0 0 8px' }}>Počet vyživovaných dětí (daňové zvýhodnění)</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[0, 1, 2, 3, 4].map(n => (
                    <button key={n} onClick={() => updSlevy('deti')(n)}
                      style={{ padding: '8px 14px', border: `1.5px solid ${slevy.deti === n ? 'var(--koc)' : 'var(--kln)'}`, borderRadius: 4, background: slevy.deti === n ? 'var(--koc)' : '#fff', color: slevy.deti === n ? '#fff' : 'var(--kink)', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, cursor: 'pointer', transition: 'all .2s' }}>
                      {n}{n === 4 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>
              <div onClick={() => updSlevy('manzel')(!slevy.manzel)}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', border: `1.5px solid ${slevy.manzel ? 'var(--koc)' : 'var(--kln)'}`, borderRadius: 5, cursor: 'pointer', background: slevy.manzel ? 'rgba(168,125,184,.07)' : '#fff', marginBottom: 10, transition: 'all .2s' }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${slevy.manzel ? 'var(--koc)' : 'rgba(25,23,20,.2)'}`, background: slevy.manzel ? 'var(--koc)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .2s' }}>
                  {slevy.manzel && <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>✓</span>}
                </div>
                <div>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, color: slevy.manzel ? 'var(--koc)' : 'var(--kink)', margin: '0 0 2px' }}>Sleva na manželku / manžela</p>
                  <p style={{ fontSize: 11.5, color: 'var(--kdim)', margin: 0 }}>Partner/ka s příjmem do 68 000 Kč za rok.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[
                  { k: 'invaliditaI', l: 'Invalidita I./II. stupně', v: K.slevaInvaliditaI },
                  { k: 'invaliditaIII', l: 'Invalidita III. stupně', v: K.slevaInvaliditaIII },
                ].map(inv => (
                  <div key={inv.k} onClick={() => updSlevy(inv.k)(!slevy[inv.k as keyof Slevy])}
                    style={{ flex: 1, padding: '10px 12px', border: `1.5px solid ${slevy[inv.k as keyof Slevy] ? 'var(--koc)' : 'var(--kln)'}`, borderRadius: 5, cursor: 'pointer', background: slevy[inv.k as keyof Slevy] ? 'rgba(168,125,184,.07)' : '#fff', transition: 'all .2s' }}>
                    <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 11.5, color: slevy[inv.k as keyof Slevy] ? 'var(--koc)' : 'var(--kink)', margin: '0 0 2px' }}>{inv.l}</p>
                    <p style={{ fontSize: 10.5, color: 'var(--kdim)', margin: 0 }}>Sleva {fmt(inv.v)} Kč/rok</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="kalk-btnb" onClick={() => { setKrok(3); scrollToTop() }}>← Zpět</button>
              <button style={{ flex: 1, padding: '16px', background: 'linear-gradient(135deg,var(--koc),var(--krd))', color: '#fff', border: 'none', borderRadius: 3, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15, cursor: 'pointer' }}
                onClick={() => { if (vysl) { setSimSazba(vysl.zdravaSazba); setSimDny(cas.dnyTydne); setSimHod(cas.hodinyDenne) } setKrok(5); scrollToTop() }}>
                Zobrazit vyhodnocení sazby →
              </button>
            </div>
          </div>
        )}

        {/* ── KROK 5: VÝSLEDKY ── */}
        {krok === 5 && vysl && (
          <div>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.3rem,3vw,1.8rem)', color: 'var(--kink)', margin: '0 0 5px', letterSpacing: '-.04em' }}>Ekonomický rozbor podnikání</h2>
              <p style={{ fontSize: 13, color: 'var(--kdim)', margin: 0 }}>Přehled pásem hodinové sazby na základě zadaných časových a nákladových parametrů.</p>
            </div>
            {/* TŘI SAZBY */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 16, alignItems: 'stretch' }} className="kalk-res3">
              {[
                { l: 'Minimální sazba', s: vysl.minSazba, c: '#E0304A', bg: 'rgba(224,48,74,.06)', i: '⚠️', desc: 'Pokrývá zadané provozní, osobní výdaje a odvody. Netvoří rezervační polštář na výpadky zakázek.', pri: Math.round(vysl.minSazba * cas2.fakturHodinMesic), preb: Math.round(vysl.minSazba * cas2.fakturHodinMesic - vysl.celkMesicVcOdvodu), main: false },
                { l: 'Doporučená sazba', s: vysl.zdravaSazba, c: '#7AB830', bg: 'rgba(122,184,48,.08)', i: '✅', desc: 'Udržitelná hladina odměny. Obsahuje 30% bezpečnostní rezervu pro klidnější provoz a stabilitu.', pri: Math.round(vysl.zdravaSazba * cas2.fakturHodinMesic), preb: Math.round(vysl.zdravaSazba * cas2.fakturHodinMesic - vysl.celkMesicVcOdvodu), main: true },
                { l: 'Rozvojová sazba', s: vysl.komfortSazba, c: '#A87DB8', bg: 'rgba(168,125,184,.06)', i: '🚀', desc: 'Zahrnuje 65% rozvojovou složku. Vytváří dostatečný kapitál pro investice, růst a rozvoj.', pri: Math.round(vysl.komfortSazba * cas2.fakturHodinMesic), preb: Math.round(vysl.komfortSazba * cas2.fakturHodinMesic - vysl.celkMesicVcOdvodu), main: false },
              ].map(r => (
                <div key={r.l} style={{ background: r.bg, border: r.main ? `3px solid ${r.c}` : `1px solid ${r.c}33`, borderRadius: 8, padding: r.main ? 'clamp(16px,2.5vw,24px)' : 'clamp(13px,2vw,18px)', position: 'relative', overflow: 'hidden', opacity: r.main ? 1 : 0.72, boxShadow: r.main ? '0 8px 24px rgba(0,0,0,0.06)' : 'none', transform: r.main ? 'scale(1.02)' : 'none', zIndex: r.main ? 2 : 1, transition: 'all .3s' }}>
                  {r.main && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: r.c }} />}
                  <p style={{ fontSize: r.main ? 10.5 : 9.5, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: r.c, margin: '0 0 6px' }}>{r.i} {r.l}</p>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: r.main ? 'clamp(1.4rem,3.5vw,2.1rem)' : 'clamp(1.15rem,3vw,1.65rem)', color: 'var(--kink)', margin: '0 0 12px', letterSpacing: '-.04em' }}>{fmtH(r.s)}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 12 }}>
                    <div style={{ textAlign: 'center', background: 'rgba(25,23,20,.05)', borderRadius: 4, padding: '7px 4px' }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 12.5, color: 'var(--kink)', margin: 0 }}>{fmt(r.pri)} Kč</p>
                      <p style={{ fontSize: 9, color: 'var(--kdim)', margin: 0, lineHeight: 1.4 }}>příjem/měsíc</p>
                    </div>
                    <div style={{ textAlign: 'center', background: 'rgba(25,23,20,.05)', borderRadius: 4, padding: '7px 4px' }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 12.5, color: r.preb >= 0 ? r.c : 'var(--krd)', margin: 0 }}>{r.preb >= 0 ? '+' : ''}{fmt(r.preb)} Kč</p>
                      <p style={{ fontSize: 9, color: 'var(--kdim)', margin: 0, lineHeight: 1.4 }}>přebytek/měs.</p>
                    </div>
                  </div>
                  <p style={{ fontSize: r.main ? 12 : 11, lineHeight: 1.6, color: 'var(--kinks)', margin: 0 }}>{r.desc}</p>
                </div>
              ))}
            </div>

            <PrintPage vysl={vysl} cas2={cas2} cas={cas} celkOs={celkOs} celkPr={celkPr} dan={dan} slevy={slevy} />
            <ShareBlock minSazba={vysl.minSazba} zdravaSazba={vysl.zdravaSazba} copied={copied} onPrint={handlePrint} onCopy={handleCopy} />

            {/* Simulátor */}
            <div style={{ background: 'linear-gradient(135deg,var(--kdeep),#1a1820)', borderRadius: 8, padding: 'clamp(18px,3vw,28px)', marginBottom: 14, color: '#F0EDE8' }}>
              <p style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(240,237,232,.32)', margin: '0 0 16px' }}>Simulátor: kolik potřebuji vydělat</p>
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: 'rgba(240,237,232,.6)' }}>Simulovaná sazba: {simSazba ? fmtH(simSazba) : '—'}</span>
                </div>
                {simSazba !== null && <input type="range" className="kalk-range" min={100} max={Math.max((vysl.komfortSazba || 0) * 2, 2000)} step={10} value={simSazba}
                  onChange={e => setSimSazba(Number(e.target.value))}
                  style={{ '--thumb': '#A87DB8' } as React.CSSProperties} />}
              </div>
              {simVysl && (
                <div>
                  <div style={{ background: 'rgba(255,255,255,.04)', borderRadius: 6, padding: '13px 15px', marginBottom: 10 }}>
                    <p style={{ fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(240,237,232,.28)', margin: '0 0 10px' }}>
                      K pokrytí všech nákladů ({fmt(vysl.celkMesicVcOdvodu)} Kč/měs.) stačí pracovat:
                    </p>
                    {simVysl.staci ? (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                        {[
                          { l: 'Dní v měsíci', v: `${simVysl.dniNaKrytí} dní`, c: simVysl.dniNaKrytí > 20 ? '#E0304A' : simVysl.dniNaKrytí > 15 ? '#F58A00' : '#7AB830' },
                          { l: 'Dní v týdnu', v: `${simVysl.dniTydneNaKrytí} dní`, c: simVysl.dniTydneNaKrytí > 5.5 ? '#E0304A' : simVysl.dniTydneNaKrytí > 4 ? '#F58A00' : '#7AB830' },
                          { l: 'Hodin denně', v: `${simVysl.hodDenneNaKrytí} h`, c: simVysl.hodDenneNaKrytí > 10 ? '#E0304A' : simVysl.hodDenneNaKrytí > 7 ? '#F58A00' : '#7AB830' },
                        ].map(s => (
                          <div key={s.l} style={{ textAlign: 'center', background: 'rgba(255,255,255,.05)', borderRadius: 5, padding: '9px 5px' }}>
                            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(.9rem,2vw,1.1rem)', color: s.c, margin: '0 0 2px' }}>{s.v}</p>
                            <p style={{ fontSize: 9.5, color: 'rgba(240,237,232,.32)', margin: 0 }}>{s.l}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ background: 'rgba(224,48,74,.18)', border: '1px solid rgba(224,48,74,.35)', borderRadius: 5, padding: '10px 12px' }}>
                        <p style={{ fontSize: 13, color: '#ff7080', margin: 0, lineHeight: 1.6 }}>
                          ⚠️ Ani při plném pracovním měsíci tato sazba nepokryje náklady. Chybí <strong>{fmt(Math.abs(simVysl.prebytek))} Kč/měsíc</strong>.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* O výpočtu */}
            <div className="kalk-card" style={{ background: 'var(--kcl1)', border: '1px solid var(--kln)' }}>
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: 'var(--kink)', margin: '0 0 6px' }}>O výpočtu</p>
              <p style={{ fontSize: 12, lineHeight: 1.7, color: 'var(--kdim)', margin: 0 }}>
                Výpočet vychází z veřejně dostupných parametrů OSVČ pro rok 2026 a slouží jako orientační ekonomický model. Výstupy nemohou zachytit veškeré individuální daňové úlevy, plátcovství DPH, sezónní výkyvy ani souběhy různých typů příjmů. Nenahrazuje účetní či daňové poradenství.
              </p>
            </div>

            {/* CTA */}
            <div style={{ padding: '22px 24px', background: '#fff', border: '1px solid var(--kln)', borderRadius: 6, marginBottom: 14 }}>
              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14, color: 'var(--kink)', margin: '0 0 10px' }}>Představuje reálná sazba změnu oproti Vaší stávající praxi?</p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--kinks)', margin: '0 0 14px' }}>Mnoho živnostníků si dlouhodobě účtuje méně, než jejich podnikání skutečně stojí. Dobře nastavená prezentace pomáhá získávat klienty, kteří kvalitní práci chápou a respektují.</p>
              <div style={{ borderTop: '1px solid var(--kln)', paddingTop: 14 }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: 'var(--kink)', margin: '0 0 4px' }}>Hana Fraňková</p>
                <p style={{ fontSize: 12.5, color: 'var(--kdim)', lineHeight: 1.65, margin: '0 0 12px' }}>Navrhuji prezentační weby pro živnostníky a firmy. Pomáhám jim srozumitelně komunikovat skutečnou hodnotu jejich práce tak, aby získávali zákazníky, kteří odpovídající sazbu akceptují.</p>
                <a href="/kontakt" style={{ display: 'inline-block', padding: '12px 26px', background: 'var(--kink)', color: '#F0EDE8', borderRadius: 2, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>Kontaktovat Hanu →</a>
              </div>
            </div>

            <button onClick={() => { setKrok(1); setSimSazba(null); setSimDny(null); setSimHod(null); try { localStorage.removeItem('verno_kalk_v5') } catch (e) {} scrollToTop() }}
              style={{ width: '100%', padding: '13px', background: 'transparent', color: 'var(--kink)', border: '1.5px solid var(--kln)', borderRadius: 3, fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
              ← Resetovat data a začít znovu
            </button>
            <p style={{ fontSize: 11, color: 'var(--kdim)', marginTop: 12, lineHeight: 1.7, textAlign: 'center' }}>
              Model vychází z legislativních parametrů MPSV a Finanční správy ČR platných pro rok 2026. Výstupy mají informativní charakter. Pro individuální daňové plánování doporučujeme konzultaci s certifikovaným daňovým poradcem.
            </p>
          </div>
        )}

        {krok === 5 && !vysl && (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ color: 'var(--kdim)', fontSize: 14 }}>Vyplňte prosím předchozí kroky pro zobrazení výsledků.</p>
            <button className="kalk-btn" style={{ maxWidth: 300, margin: '16px auto 0' }} onClick={() => { setKrok(1); scrollToTop() }}>Začít od začátku</button>
          </div>
        )}

      </div>

      {/* TOOLTIP */}
      <div ref={tipRef} style={{ position: 'fixed', background: '#111', color: '#f0ede8', fontSize: 12, lineHeight: 1.6, padding: '10px 14px', borderRadius: 6, whiteSpace: 'pre-wrap', width: 240, maxWidth: '90vw', zIndex: 99999, boxShadow: '0 8px 32px rgba(0,0,0,.5)', fontFamily: "'DM Sans',sans-serif", fontWeight: 400, pointerEvents: 'none', display: 'none' }} />
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// SCOPED CSS
// ─────────────────────────────────────────────────────────────
const KALK_CSS = `
.kalk {
  --kcl: #F0EDE8; --kcl1: #EAE5DC; --kcl2: #E2DCD1;
  --kink: #191714; --kinks: #3A3630; --kdim: #7A7268; --kdeep: #0F0E13;
  --koc: #A87DB8; --kca: #009AC4; --kor: #F58A00; --krd: #E0304A; --kgn: #7AB830;
  --kln: rgba(25,23,20,.09); --kls: rgba(25,23,20,.05);
  background: var(--kcl);
  font-family: 'DM Sans', system-ui, sans-serif;
  color: var(--kink);
  -webkit-font-smoothing: antialiased;
}
.kalk-main {
  max-width: 1000px;
  margin: 0 auto;
  padding: clamp(20px,4vw,40px) clamp(16px,4vw,52px);
}
.kalk-live {
  position: sticky; top: 0; z-index: 100;
  background: var(--kdeep);
  padding: 12px clamp(14px,4vw,52px);
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.kalk-li {
  max-width: 1000px; margin: 0 auto;
  display: flex; align-items: center;
  gap: clamp(12px,3vw,32px);
  flex-wrap: wrap; justify-content: space-between;
}
.kalk-ll { font-size: 9.5px; letter-spacing: .18em; text-transform: uppercase; color: rgba(240,237,232,.32); margin: 0 0 2px; }
.kalk-lv { font-family: 'Syne',sans-serif; font-weight: 800; font-size: clamp(.95rem,2.5vw,1.4rem); letter-spacing: -.04em; }
.kalk-prog { display: flex; background: #fff; border-bottom: 1px solid var(--kls); }
.kalk-pb { flex: 1; padding: 12px 4px; background: none; border: none; border-bottom: 2.5px solid transparent; cursor: pointer; font-family: 'DM Sans',sans-serif; font-size: 11px; font-weight: 600; color: var(--kdim); transition: all .2s; text-align: center; line-height: 1.4; }
.kalk-pb.kalk-act { color: var(--koc); border-bottom-color: var(--koc); }
.kalk-pb.kalk-dn { color: var(--kgn); }
.kalk-card { background: #fff; border: 1px solid var(--kln); border-radius: 8px; padding: clamp(18px,3vw,28px); margin-bottom: 14px; }
.kalk-irow { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }
.kalk-field { margin-bottom: 14px; }
.kalk-fl { display: flex; align-items: center; gap: 6px; font-family: 'Syne',sans-serif; font-weight: 600; font-size: 13px; color: var(--kink); margin-bottom: 5px; }
.kalk-fh { font-size: 11.5px; color: var(--kdim); margin-top: 3px; line-height: 1.5; }
.kalk-iw { position: relative; }
.kalk-iw input { width: 100%; padding: 11px 44px 11px 12px; border: 1.5px solid rgba(25,23,20,.12); border-radius: 3px; font-family: 'DM Sans'; font-size: 15px; color: var(--kink); background: var(--kcl); outline: none; transition: border-color .2s; -moz-appearance: textfield; }
.kalk-iw input::-webkit-inner-spin-button, .kalk-iw input::-webkit-outer-spin-button { -webkit-appearance: none; }
.kalk-iw input:focus { border-color: var(--koc); background: #fff; }
.kalk-sfx { position: absolute; right: 11px; top: 50%; transform: translateY(-50%); font-size: 12px; color: var(--kdim); pointer-events: none; }
.kalk-tip { display: inline-flex; align-items: center; justify-content: center; width: 17px; height: 17px; border-radius: 50%; background: rgba(25,23,20,.1); font-size: 9px; font-weight: 700; color: var(--kdim); cursor: help; flex-shrink: 0; }
.kalk-atag { display: inline-flex; align-items: center; gap: 4px; background: rgba(168,125,184,.12); border: 1px solid rgba(168,125,184,.22); border-radius: 20px; padding: 2px 9px; font-size: 10.5px; color: var(--koc); font-weight: 500; margin-left: 6px; }
.kalk-acc-h { display: flex; justify-content: space-between; align-items: center; padding: 13px 0; cursor: pointer; border-bottom: 1px solid var(--kln); user-select: none; }
.kalk-acc-t { font-family: 'Syne',sans-serif; font-weight: 700; font-size: 13.5px; color: var(--kink); display: flex; align-items: center; gap: 8px; transition: color .2s; }
.kalk-acc-h:hover .kalk-acc-t { color: var(--koc); }
.kalk-acc-s { font-size: 12px; color: var(--koc); font-weight: 600; margin-right: 8px; }
.kalk-acc-i { font-size: 15px; color: var(--kdim); transition: transform .25s; }
.kalk-chips { display: flex; flex-wrap: wrap; gap: 7px; margin: 6px 0 12px; }
.kalk-chip { padding: 6px 13px; border: 1.5px solid var(--kln); border-radius: 30px; font-size: 12px; font-weight: 500; cursor: pointer; transition: all .2s; background: #fff; color: var(--kinks); user-select: none; }
.kalk-chip:hover { border-color: var(--koc); color: var(--koc); }
.kalk-chip.kalk-chip-on { background: var(--koc); border-color: var(--koc); color: #fff; }
.kalk-info { background: var(--kcl1); border-left: 3px solid var(--koc); border-radius: 0 5px 5px 0; padding: 11px 15px; margin: 10px 0; font-size: 13px; line-height: 1.65; color: var(--kinks); }
.kalk-warn { background: rgba(224,48,74,.07); border-left: 3px solid var(--krd); border-radius: 0 5px 5px 0; padding: 11px 15px; margin: 10px 0; font-size: 13px; line-height: 1.65; color: #b02030; }
.kalk-good { background: rgba(122,184,48,.08); border-left: 3px solid var(--kgn); border-radius: 0 5px 5px 0; padding: 11px 15px; margin: 10px 0; font-size: 13px; line-height: 1.65; color: #4a7010; }
.kalk-srow { margin-bottom: 20px; }
.kalk-sh { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.kalk-sl { font-family: 'Syne',sans-serif; font-weight: 600; font-size: 13.5px; color: var(--kink); display: flex; align-items: center; gap: 6px; }
.kalk-sv { font-family: 'Syne',sans-serif; font-weight: 700; font-size: 15px; }
.kalk-sm { display: flex; justify-content: space-between; margin-top: 4px; }
.kalk-smk { font-size: 10px; color: var(--kdim); }
.kalk-range { -webkit-appearance: none; appearance: none; width: 100%; height: 4px; border-radius: 2px; background: rgba(25,23,20,.15); outline: none; cursor: pointer; }
.kalk-range::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: var(--thumb, var(--koc)); cursor: pointer; border: 2.5px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,.22); transition: transform .15s; }
.kalk-range::-webkit-slider-thumb:hover { transform: scale(1.18); }
.kalk-btn { width: 100%; padding: 16px; background: var(--kink); color: #F0EDE8; border: none; border-radius: 3px; font-family: 'Syne',sans-serif; font-weight: 700; font-size: 15px; cursor: pointer; transition: background .2s; margin-top: 6px; }
.kalk-btn:hover { background: #2e2b26; }
.kalk-btnb { padding: 13px 20px; background: transparent; color: var(--kink); border: 1.5px solid var(--kln); border-radius: 3px; font-family: 'Syne',sans-serif; font-weight: 600; font-size: 13px; cursor: pointer; }
.kalk-btnb:hover { background: var(--kcl1); }
.kalk-shdr { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 20px; }
.kalk-snum { width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.kalk-snum span { font-family: 'Syne',sans-serif; font-weight: 800; font-size: 16px; color: #fff; }
.kalk-sh2 { font-family: 'Syne',sans-serif; font-weight: 800; font-size: clamp(1.05rem,2.5vw,1.35rem); color: var(--kink); margin: 0 0 3px; letter-spacing: -.03em; }
.kalk-ssub { font-size: 13px; color: var(--kdim); margin: 0; line-height: 1.5; }
@media(max-width:600px){ .kalk-res3 { grid-template-columns: 1fr !important; } }
@media(max-width:500px){ .kalk-irow { grid-template-columns: 1fr !important; } }
@media print {
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  body { background: #fff !important; }
  .kalk > *:not(#kalk-pdf-page) { display: none !important; }
  #kalk-pdf-page { display: block !important; width: 210mm; min-height: 297mm; padding: 14mm 16mm 12mm; box-sizing: border-box; background: #fff; color: #191714; }
  @page { size: A4; margin: 0; }
}
`
