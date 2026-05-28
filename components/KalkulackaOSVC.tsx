'use client'
import { useState, useEffect, useMemo, useRef } from 'react'

/* ─── KONSTANTY 2026 ─────────────────────────────────────────── */
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
    1: { mesic: 9984,  rocni: 119808, limit: "do 1 000 000 Kč/rok" },
    2: { mesic: 16745, rocni: 200940, limit: "do 1 500 000 Kč/rok" },
    3: { mesic: 27139, rocni: 325668, limit: "do 2 000 000 Kč/rok" },
  } as Record<number, { mesic: number; rocni: number; limit: string }>,
  pausalVydaje: {
    80: { label: "80 % — řemeslo, výroba, zemědělství", obory: "zedník, instalatér, kadeřnice, zahradník, truhlář, svářeč, pekař" },
    60: { label: "60 % — volné živnosti", obory: "účetní, obchodní zástupce, průvodce, lektor, realitní makléř" },
    40: { label: "40 % — svobodná povolání", obory: "lékař, architekt, daňový poradce, notář, umělec, spisovatel" },
  } as Record<number, { label: string; obory: string }>,
  svatky: 13,
}

/* ─── VÝPOČTY ────────────────────────────────────────────────── */
function vypocitejOdvody(rocniPrijem: number, rocniNaklady: number, rezim: string, pausalPct: number, pausPasmo: number, extSlevy: any) {
  if (rezim === "pausalni") {
    const d = K.pausalni[pausPasmo]
    return { zdravotni: 0, socialni: 0, dan: 0, celkemRocne: d.rocni, mesicne: d.mesic, rezim: "pausalni" }
  }
  let zakladDane = 0
  if (rezim === "skutecne") {
    zakladDane = Math.max(0, rocniPrijem - rocniNaklady)
  } else {
    const stropy: Record<number, number> = { 80: 1600000, 60: 1200000, 40: 800000 }
    const maxVydaje = stropy[pausalPct] || (rocniPrijem * pausalPct / 100)
    const pausVydaje = Math.min(rocniPrijem * (pausalPct / 100), maxVydaje)
    zakladDane = Math.max(0, rocniPrijem - pausVydaje)
  }
  const vymZaklad = zakladDane * K.vymZakladPct
  const jeVedlejci = extSlevy && extSlevy.vedlejci
  const minZdrav = jeVedlejci ? 0 : K.minZdravotni * 12
  const zdravotniRocne = Math.max(vymZaklad * K.zdravotniPct, minZdrav)
  const vymZakladSoc = Math.min(vymZaklad, K.maxVZSocialni)
  const minSoc = jeVedlejci ? 0 : K.minSocialni * 12
  const socialniVedlejci = jeVedlejci && (zakladDane < K.rozhodnacastkaVedlejci) ? 0 : Math.max(vymZakladSoc * K.socialniPct, minSoc)
  const socialniRocne = socialniVedlejci
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
  const celkemRocne = zdravotniRocne + socialniRocne + danRocne
  return { zdravotni: zdravotniRocne, socialni: socialniRocne, dan: danRocne, celkemRocne, mesicne: celkemRocne / 12, rezim }
}

function vypocitejRealneCasy(cas: any) {
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

function vypocitejSazbu(celkOsoMesic: number, celkProMesic: number, casObj: any, rezim: string, pausalPct: number, pausPasmo: number, extSlevy: any) {
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

const fmt = (n: number) => Math.round(n).toLocaleString("cs-CZ")
const fmtH = (n: number) => `${fmt(n)} Kč/h`

/* ─── SUB-KOMPONENTY ─────────────────────────────────────────── */
function T({ text }: { text: string }) {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLSpanElement>(null)

  const show = (e: React.MouseEvent | React.TouchEvent) => {
    let x = 0, y = 0
    if ('touches' in e) {
      x = e.touches[0].clientX
      y = e.touches[0].clientY
    } else {
      x = (e as React.MouseEvent).clientX
      y = (e as React.MouseEvent).clientY
    }
    setPos({ x, y })
    setVisible(true)
  }
  const hide = () => setVisible(false)

  return (
    <>
      <span
        ref={ref}
        className="kalk-tip"
        onMouseEnter={show}
        onMouseMove={show}
        onMouseLeave={hide}
        onTouchStart={show}
        onTouchEnd={e => { e.preventDefault(); setTimeout(hide, 2200) }}
      >?</span>
      {visible && typeof window !== 'undefined' && (
        <span className="kalk-jtip-react" style={{
          position: "fixed",
          left: Math.min(pos.x - 120, window.innerWidth - 258),
          top: pos.y - 10 > 80 ? pos.y - 14 : pos.y + 28,
          transform: pos.y - 10 > 80 ? "translateY(-100%)" : "none",
          zIndex: 99999,
          pointerEvents: "none",
        }}>{text}</span>
      )}
    </>
  )
}

function F({ label, hint, tip, value, onChange, sfx = "Kč", auto, rocni }: any) {
  return (
    <div className="kalk-field">
      <div className="kalk-fl">
        {label}
        {tip && <T text={tip} />}
        {auto && <span className="kalk-atag">✓ auto</span>}
        {rocni && <span className="kalk-atag">÷12</span>}
      </div>
      <div className="kalk-iw">
        <input type="number" min={0} value={value || ""} placeholder="0"
          onChange={e => onChange(Number(e.target.value) || 0)}
          onFocus={e => (e.target.style.borderColor = "var(--oc)")}
          onBlur={e => (e.target.style.borderColor = "rgba(25,23,20,.12)")}
        />
        <span className="kalk-sfx">{sfx}</span>
      </div>
      {hint && <div className="kalk-fh">{hint}</div>}
    </div>
  )
}

function Sl({ label, value, min, max, step = 1, unit = "", onChange, marks, tip, color = "var(--oc)", hint }: any) {
  return (
    <div className="kalk-srow">
      <div className="kalk-sh">
        <span className="kalk-sl">{label}{tip && <T text={tip} />}</span>
        <span className="kalk-sv" style={{ color }}>{fmt(value)}{unit}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ "--thumb": color } as any} />
      {marks && <div className="kalk-sm">{marks.map((m: string, i: number) => <span key={i} className="kalk-smk">{m}</span>)}</div>}
      {hint && <div className="kalk-fh" style={{ marginTop: 5 }}>{hint}</div>}
    </div>
  )
}

function Acc({ title, sum, icon, open, onToggle, children }: any) {
  const ref = useRef<HTMLDivElement>(null)
  const [h, setH] = useState(open ? 2000 : 0)
  useEffect(() => { setH(open ? (ref.current?.scrollHeight || 2000) : 0) }, [open])
  return (
    <div>
      <div className="kalk-acc-h" onClick={onToggle}>
        <span className="kalk-acc-t"><span>{icon}</span>{title}</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          {sum > 0 && <span className="kalk-acc-s">{fmt(sum)} Kč</span>}
          <span className="kalk-acc-i" style={{ transform: open ? "rotate(180deg)" : "none" }}>▾</span>
        </div>
      </div>
      <div style={{ maxHeight: h, overflow: "hidden", transition: "max-height .35s cubic-bezier(.16,1,.3,1)" }} ref={ref}>
        <div style={{ paddingTop: 12, paddingBottom: 6 }}>{children}</div>
      </div>
    </div>
  )
}

/* ─── SHARE BLOCK ────────────────────────────────────────────── */
function ShareBlock({ minSazba, zdravaSazba, copied, onCopy, onPrint }: any) {
  return (
    <div style={{ background: "linear-gradient(135deg,var(--deep),#1a1820)", borderRadius: 8, padding: "clamp(16px,3vw,24px)", marginBottom: 14, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(168,125,184,.15),transparent 70%)", right: -60, top: -60, pointerEvents: "none" }} />
      <p style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.32)", margin: "0 0 12px" }}>Uložení výsledků</p>
      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1rem,2.5vw,1.3rem)", color: "#F0EDE8", lineHeight: 1.4, margin: "0 0 16px" }}>
        Vaše minimální ekonomická sazba vychází na{" "}
        <span style={{ color: "#E0304A" }}>{fmtH(minSazba)}</span>
        {", doporučená stabilní sazba činí "}
        <span style={{ color: "#7AB830" }}>{fmtH(zdravaSazba)}</span>.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={onCopy} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", background: copied ? "#7AB830" : "rgba(240,237,232,.1)", border: "1px solid rgba(240,237,232,.2)", borderRadius: 3, color: "#F0EDE8", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 12.5, cursor: "pointer", transition: "background .3s" }}>
          {copied ? "✓ Zkopírováno!" : "📋 Zkopírovat výsledek"}
        </button>
        <button onClick={onPrint} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", background: "rgba(240,237,232,.1)", border: "1px solid rgba(240,237,232,.2)", borderRadius: 3, color: "#F0EDE8", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 12.5, cursor: "pointer" }}>
          📄 Stáhnout PDF
        </button>
      </div>
      <p style={{ fontSize: 11, color: "rgba(240,237,232,.3)", margin: "8px 0 0" }}>PDF: v dialogu tisku zvolte "Uložit jako PDF".</p>
    </div>
  )
}

/**
 * Scroll na tab-bar kalkulačky.
 *
 * Pořadí v DOM:
 *   1) Navigace (fixed, ~64 px)
 *   2) Header kalkulačky (Jaká by měla být...)
 *   3) Live panel s mezivýsledky (sticky, top: 64)
 *   4) Tab-bar (Osobní | Provozní | Čas | Daně | Výsledky)
 *   5) Obsah kroku
 *
 * Při scrollu se navigace + sticky panel mezivýsledků zafixují nahoře,
 * pod nimi se objeví tab-bar a hned pod ním začíná obsah kroku.
 *
 * Offset: navigace (~64) + sticky panel mezivýsledků (~72) ≈ 136 px,
 * volíme 140 px pro malou rezervu.
 */
function scrollToTabBar() {
  setTimeout(() => {
    const el = document.getElementById("kalk-tab-bar")
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 140
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
  }, 50)
}

// Ponecháno pro zpětnou kompatibilitu — všechna volání teď
// stejně scrollují na tab-bar (lepší UX než skok na kotvu kroku,
// kterou by stejně překryl sticky panel mezivýsledků).
function scrollToId(_id: string) {
  scrollToTabBar()
}

/* ─── HLAVNÍ APP ─────────────────────────────────────────────── */
export default function KalkulackaOSVC() {
  const [krok, setKrok] = useState(1)
  const [acc, setAcc] = useState<Record<string, boolean>>({ byd: true })
  const tog = (k: string) => setAcc(p => ({ ...p, [k]: !p[k] }))

  const [os, setOs] = useState({ najem: 15000, energie: 3500, jidlo: 8000, drogerie: 1500, telef: 1200, autoPlatba: 0, autoPHM: 2500, autoPojiskaRoc: 6000, mhd: 0, pojistkaMesic: 1000, pojistkaRoc: 4000, zdravi: 1500, deti: 0, skola: 0, kultura: 1000, konickyMesic: 1500, dovRocne: 30000, streaming: 400, obleceni: 800, penzijko: 1000, stavebni: 0, investice: 2000, pujcky: 0 })
  const updOs = (k: string) => (v: number) => setOs(p => ({ ...p, [k]: Math.max(0, v || 0) }))

  const osMesic = useMemo(() => ({
    najem: os.najem, energie: os.energie, jidlo: os.jidlo, drogerie: os.drogerie, telef: os.telef,
    autoPlatba: os.autoPlatba, autoPHM: os.autoPHM, autoPojiska: Math.round(os.autoPojiskaRoc / 12),
    mhd: os.mhd, pojistka: os.pojistkaMesic + Math.round(os.pojistkaRoc / 12),
    zdravi: os.zdravi, deti: os.deti, skola: os.skola, kultura: os.kultura,
    konickyMesic: os.konickyMesic, dovolena: Math.round(os.dovRocne / 12),
    streaming: os.streaming, obleceni: os.obleceni, penzijko: os.penzijko,
    stavebni: os.stavebni, investice: os.investice, pujcky: os.pujcky,
  }), [os])
  const celkOs = useMemo(() => Object.values(osMesic).reduce((a, b) => a + b, 0), [osMesic])

  const [pr, setPr] = useState({ telefPrac: 800, autoLeas: 0, autoPHMprac: 3000, autoPojPracRoc: 5000, najemProv: 0, energieProv: 0, naradiFixni: 1000, odpisy: 500, material: 0, ucetni: 1500, software: 500, banka: 200, marketing: 500, web: 200, kurzy: 500, pojistkaOdpov: 500, pojistkaMap: 0, lide: 0, externisti: 0, rocniJednor: 0, ostatni: 0 })
  const updPr = (k: string) => (v: number) => setPr(p => ({ ...p, [k]: Math.max(0, v || 0) }))

  const prMesic = useMemo(() => ({
    telefPrac: pr.telefPrac, autoLeas: pr.autoLeas, autoPHMprac: pr.autoPHMprac,
    autoPojPrac: Math.round(pr.autoPojPracRoc / 12), najemProv: pr.najemProv, energieProv: pr.energieProv,
    naradiFixni: pr.naradiFixni, odpisy: pr.odpisy, material: pr.material,
    ucetni: pr.ucetni, software: pr.software, banka: pr.banka,
    marketing: pr.marketing, web: pr.web, kurzy: pr.kurzy,
    pojistkaOdpov: pr.pojistkaOdpov, pojistkaMap: pr.pojistkaMap,
    lide: pr.lide, externisti: pr.externisti,
    rocniJednor: Math.round(pr.rocniJednor / 12), ostatni: pr.ostatni,
  }), [pr])
  const celkPr = useMemo(() => Object.values(prMesic).reduce((a, b) => a + b, 0), [prMesic])

  const [cas, setCas] = useState({ dnyTydne: 5, hodinyDenne: 8, dovolena: 20, nemoc: 12, fakturovatelnost: 65 })
  const updCas = (k: string) => (v: number) => setCas(p => ({
    ...p,
    [k]: k === "dnyTydne" ? Math.min(7, Math.max(1, v || 1))
      : k === "hodinyDenne" ? Math.min(16, Math.max(1, v || 1))
      : k === "dovolena" ? Math.min(120, Math.max(0, v || 0))
      : k === "nemoc" ? Math.min(90, Math.max(0, v || 0))
      : k === "fakturovatelnost" ? Math.min(95, Math.max(10, v || 10))
      : Math.max(0, v || 0)
  }))

  const [dan, setDan] = useState({ rezim: "pausal_procento", pausalPct: 60, pausPasmo: 1 })
  const updDan = (k: string) => (v: any) => setDan(p => ({ ...p, [k]: v }))
  const [slevy, setSlevy] = useState<any>({ deti: 0, manzel: false, invaliditaIII: false, vedlejci: false })
  const updSlevy = (k: string) => (v: any) => setSlevy((p: any) => ({ ...p, [k]: v }))

  useEffect(() => {
    try {
      const saved = localStorage.getItem('verno_kalk_v5')
      if (saved) {
        const d = JSON.parse(saved)
        if (d.os) setOs((p: any) => ({ ...p, ...d.os }))
        if (d.pr) setPr((p: any) => ({ ...p, ...d.pr }))
        if (d.cas) setCas((p: any) => ({ ...p, ...d.cas }))
        if (d.dan) setDan((p: any) => ({ ...p, ...d.dan }))
        if (d.slevy) setSlevy((p: any) => ({ ...p, ...d.slevy }))
      }
    } catch (e) { }
  }, [])

  useEffect(() => {
    try { localStorage.setItem('verno_kalk_v5', JSON.stringify({ os, pr, cas, dan, slevy })) } catch (e) { }
  }, [os, pr, cas, dan, slevy])

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

  const handlePrint = () => {
    if (!vysl) return
    const datum = new Date().toLocaleDateString('cs-CZ')
    const rezimLabel = dan.rezim === "pausalni" ? `Paušální daň ${dan.pausPasmo}. pásmo` : dan.rezim === "skutecne" ? "Skutečné výdaje" : `Výdajový paušál ${dan.pausalPct} %`
    const sazby = [
      { l: "Minimální sazba", s: vysl.minSazba, c: "#E0304A", desc: "Pokrývá náklady a odvody." },
      { l: "Zdravá sazba", s: vysl.zdravaSazba, c: "#7AB830", desc: "Doporučené pásmo +30 % rezerva." },
      { l: "Rozvojová sazba", s: vysl.komfortSazba, c: "#A87DB8", desc: "Rozvojová hodnota +65 % rezerva." },
    ]
    const html = `<!DOCTYPE html><html lang="cs"><head><meta charset="UTF-8">
<title>VERNO – Kalkulačka sazby OSVČ</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  @page{size:A4;margin:0}
  body{font-family:'DM Sans',sans-serif;background:#fff;color:#191714;width:210mm;padding:14mm 16mm 12mm;font-size:10px}
  .hdr{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #191714;padding-bottom:10px;margin-bottom:16px}
  .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:22px;letter-spacing:.25em}
  .logo-sub{font-size:10px;color:#7A7268;letter-spacing:.12em;text-transform:uppercase;margin-top:2px}
  .hdr-r{text-align:right;font-size:10px;color:#7A7268}
  .sazby{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px}
  .sazba-box{border-radius:6px;padding:10px 12px;position:relative;border-width:2px;border-style:solid}
  .sazba-bar{position:absolute;top:0;left:0;right:0;height:3px;border-radius:6px 6px 0 0}
  .sazba-l{font-size:8.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-bottom:4px;margin-top:2px}
  .sazba-v{font-family:'Syne',sans-serif;font-weight:800;font-size:22px;letter-spacing:-.04em;color:#191714;margin-bottom:4px}
  .sazba-d{font-size:8.5px;color:#7A7268;line-height:1.4}
  .sazba-prijem{display:flex;justify-content:space-between;border-top:1px solid #f0ede8;padding-top:5px;margin-top:6px}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}
  .sec-title{font-family:'Syne',sans-serif;font-weight:700;font-size:11px;color:#191714;margin-bottom:8px;border-bottom:1px solid #e2dcd1;padding-bottom:4px}
  .row{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}
  .dot{width:8px;height:8px;border-radius:2px;flex-shrink:0;margin-right:6px}
  .row-l{display:flex;align-items:center;font-size:9px;color:#3A3630}
  .row-v{font-size:9.5px;font-weight:700;color:#191714}
  .total{display:flex;justify-content:space-between;border-top:1px solid #e2dcd1;padding-top:5px;margin-top:5px}
  .total-l{font-size:9px;font-weight:700;color:#191714}
  .total-v{font-size:10px;font-weight:800;color:#191714}
  .kv{display:flex;justify-content:space-between;margin-bottom:4px}
  .kv-l{font-size:9px;color:#7A7268}
  .kv-v{font-size:9.5px;font-weight:600;color:#191714}
  .odvody-box{background:#f8f6f2;border-radius:5px;padding:9px 12px;margin-bottom:10px}
  .odvody-title{font-family:'Syne',sans-serif;font-weight:700;font-size:10px;color:#191714;margin-bottom:6px}
  .odvody-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px}
  .odvod-item{text-align:center}
  .odvod-v{font-size:11px;font-weight:700;color:#191714}
  .odvod-l{font-size:8px;color:#7A7268}
  .footer{border-top:1px solid #e2dcd1;padding-top:8px;margin-top:16px}
  .footer p{font-size:7.5px;color:#9a9288;line-height:1.65}
</style>
</head><body>
<div class="hdr">
  <div><div class="logo">VERNO</div><div class="logo-sub">Kalkulačka reálné hodinové sazby OSVČ</div></div>
  <div class="hdr-r"><div>Datum výpočtu: ${datum}</div><div style="margin-top:2px">verno.cz/kalkulacka</div></div>
</div>
<div class="sazby">
  ${sazby.map(r => `
  <div class="sazba-box" style="border-color:${r.c}">
    <div class="sazba-bar" style="background:${r.c}"></div>
    <div class="sazba-l" style="color:${r.c}">${r.l}</div>
    <div class="sazba-v">${fmt(r.s)} Kč/h</div>
    <div class="sazba-d">${r.desc}</div>
    <div class="sazba-prijem">
      <span style="font-size:8.5px;color:#7A7268">Hrubý příjem / měs.</span>
      <span style="font-size:9px;font-weight:700;color:#191714">${fmt(r.s * cas2.fakturHodinMesic)} Kč</span>
    </div>
  </div>`).join('')}
</div>
<div class="grid2">
  <div>
    <div class="sec-title">Měsíční struktura nákladů</div>
    ${[{l:"Osobní náklady",v:celkOs,c:"#A87DB8"},{l:"Provozní náklady",v:celkPr,c:"#009AC4"},{l:"Daně a odvody",v:Math.round(vysl.odvody.mesicne),c:"#E0304A"}].map(r=>`
    <div class="row"><div class="row-l"><div class="dot" style="background:${r.c}"></div>${r.l}</div><span class="row-v">${fmt(r.v)} Kč</span></div>`).join('')}
    <div class="total"><span class="total-l">Celkem musíte vydělat</span><span class="total-v">${fmt(vysl.celkMesicVcOdvodu)} Kč</span></div>
  </div>
  <div>
    <div class="sec-title">Pracovní fond a kapacita</div>
    ${[{l:"Pracovní dny/týden",v:cas.dnyTydne+" dní"},{l:"Hodin denně",v:cas.hodinyDenne+" h"},{l:"Dovolená",v:cas.dovolena+" dní/rok"},{l:"Nemoc (odhad)",v:cas.nemoc+" dní/rok"},{l:"Fakturovatelnost",v:cas.fakturovatelnost+" %"},{l:"Fakt. hodin / měsíc",v:Math.round(cas2.fakturHodinMesic)+" h"}].map(r=>`
    <div class="kv"><span class="kv-l">${r.l}</span><span class="kv-v">${r.v}</span></div>`).join('')}
  </div>
</div>
${dan.rezim !== "pausalni" ? `
<div class="odvody-box">
  <div class="odvody-title">Odvody státu / měs. · ${rezimLabel}</div>
  <div class="odvody-grid">
    <div class="odvod-item"><div class="odvod-v">${fmt(Math.round(vysl.odvody.zdravotni/12))} Kč</div><div class="odvod-l">Zdravotní pojištění</div></div>
    <div class="odvod-item"><div class="odvod-v">${fmt(Math.round(vysl.odvody.socialni/12))} Kč</div><div class="odvod-l">Sociální pojištění</div></div>
    <div class="odvod-item"><div class="odvod-v">${fmt(Math.round(vysl.odvody.dan/12))} Kč</div><div class="odvod-l">Daň z příjmu</div></div>
  </div>
</div>` : `
<div class="odvody-box">
  <div class="odvody-title">Daňový režim: ${rezimLabel}</div>
  <div style="font-size:10px;color:#3A3630">Fixní platba státu: <strong>${fmt(vysl.odvody.mesicne)} Kč/měsíc</strong></div>
</div>`}
<div class="footer"><p>Výpočet vychází z veřejně dostupných parametrů OSVČ pro rok 2026 a slouží jako orientační ekonomický model. Výstupy mají informativní charakter a nenahrazují daňové, účetní či právní poradenství.</p></div>
</body></html>`
    const w = window.open('', '_blank', 'width=900,height=700')
    if (!w) return
    w.document.write(html)
    w.document.close()
    w.focus()
    setTimeout(() => { w.print() }, 600)
  }

  const handleCopy = () => {
    if (!vysl) return
    const text = "Moje minimální hodinová sazba: " + fmtH(vysl.minSazba) + ". Doporučená: " + fmtH(vysl.zdravaSazba) + ". Spočítáno na verno.cz/kalkulacka"
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500) })
    } else {
      const ta = document.createElement("textarea")
      ta.value = text; ta.style.position = "fixed"; ta.style.left = "-9999px"
      document.body.appendChild(ta); ta.focus(); ta.select()
      try { document.execCommand("copy"); setCopied(true); setTimeout(() => setCopied(false), 2500) } catch (e) { }
      ta.remove()
    }
  }

  return (
    <>
      <div style={{ minHeight: "100vh", background: "var(--cloud)", fontFamily: "'DM Sans',system-ui,sans-serif" }}>

        {/* HEADER kalkulačky */}
        <div style={{ background: "var(--deep)", padding: "clamp(28px,5vw,52px) clamp(16px,5vw,56px)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(168,125,184,.16),transparent 70%)", right: -80, top: -80, filter: "blur(60px)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(240,237,232,.35)", margin: "0 0 12px" }}>VERNO · Nástroj pro OSVČ · Model pro rok 2026</p>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.7rem,4.5vw,3rem)", lineHeight: .96, letterSpacing: "-.05em", color: "#F0EDE8", margin: "0 0 12px" }}>
              Jaká by měla být Vaše reálná hodinová sazba?
            </h2>
            <p style={{ fontSize: "clamp(.88rem,1.4vw,1rem)", lineHeight: 1.75, color: "rgba(240,237,232,.5)", maxWidth: 580, margin: "0 0 16px" }}>
              Zadejte své provozní výdaje a časové možnosti. Systém dopočítá orientační výši daní i odvodů a zobrazí doporučené pásmo odměny pro udržitelné podnikání.
            </p>
            <div style={{ background: "rgba(245,138,0,.12)", border: "1px solid rgba(245,138,0,.3)", borderRadius: 5, padding: "10px 14px", fontSize: 11.5, lineHeight: 1.65, color: "rgba(240,237,232,.65)" }}>
              Tento nástroj slouží výhradně jako orientační ekonomický model pro byznysovou rozvahu. Výpočty pracují s legislativními parametry schválenými pro rok 2026, zohledňují standardní situace a nenahrazují daňové, účetní či právní poradenství.
            </div>
          </div>
        </div>

        {/* BUG FIX: live panel posunut o výšku navigace (64px) aby nebyl překryt */}
        <div style={{ position: "sticky", top: 64, zIndex: 100, background: "var(--deep)", padding: "12px clamp(14px,4vw,52px)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", gap: "clamp(12px,3vw,32px)", flexWrap: "wrap", justifyContent: "space-between" }}>
            <div><div style={{ fontSize: 9.5, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.32)", margin: "0 0 2px" }}>Minimální sazba</div><div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(.95rem,2.5vw,1.4rem)", letterSpacing: "-.04em", color: "#E0304A" }}>{vysl ? fmtH(vysl.minSazba) : "—"}</div></div>
            <div><div style={{ fontSize: 9.5, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.32)", margin: "0 0 2px" }}>Doporučená sazba</div><div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(.95rem,2.5vw,1.4rem)", letterSpacing: "-.04em", color: "#7AB830" }}>{vysl ? fmtH(vysl.zdravaSazba) : "—"}</div></div>
            <div><div style={{ fontSize: 9.5, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.32)", margin: "0 0 2px" }}>Náklady celkem / měsíc</div><div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(.95rem,2.5vw,1.4rem)", letterSpacing: "-.04em", color: "rgba(240,237,232,.7)" }}>{vysl ? fmt(vysl.celkMesicVcOdvodu) + " Kč" : "—"}</div></div>
            <div><div style={{ fontSize: 9.5, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.32)", margin: "0 0 2px" }}>Fakt. hodiny / měsíc</div><div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(.95rem,2.5vw,1.4rem)", letterSpacing: "-.04em", color: "rgba(240,237,232,.7)" }}>{fmt(cas2.fakturHodinMesic) + " h"}</div></div>
          </div>
        </div>

        {/* PROGRESS / tab-bar — kotva pro scroll po kliknutí Pokračovat/Zpět */}
        <div id="kalk-tab-bar" style={{ display: "flex", background: "#fff", borderBottom: "1px solid rgba(25,23,20,.05)" }}>
          {[{ n: 1, l: "Osobní\nnáklady" }, { n: 2, l: "Provozní\nnáklady" }, { n: 3, l: "Čas\na práce" }, { n: 4, l: "Daně\na odvody" }, { n: 5, l: "Výsledky" }].map(s => (
            <button key={s.n}
              style={{ flex: 1, padding: "12px 4px", background: "none", border: "none", borderBottom: `2.5px solid ${krok === s.n ? "var(--oc)" : "transparent"}`, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 600, color: krok === s.n ? "var(--oc)" : krok > s.n ? "var(--gn)" : "var(--dim)", transition: "all .2s", textAlign: "center", lineHeight: 1.4 }}
              onClick={() => { setKrok(s.n); scrollToId("krok" + s.n) }}>
              {krok > s.n ? "✓ " : ""}{s.l.split("\n").map((l, i) => <span key={i} style={{ display: i > 0 ? "block" : "inline" }}>{l}</span>)}
            </button>
          ))}
        </div>

        {/* OBSAH KROKŮ */}
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(20px,4vw,40px) clamp(16px,4vw,52px)" }}>

          {/* KROK 1 */}
          {krok === 1 && (
            <div id="krok1">
              <div className="kalk-shdr">
                <div className="kalk-snum" style={{ background: "var(--oc)" }}><span>1</span></div>
                <div>
                  <h2 className="kalk-sh2">Váš osobní život a rodina</h2>
                  <p className="kalk-ssub">Položky, které měsíčně odcházejí z Vašeho soukromého rozpočtu. Roční platby přepočítá kalkulačka automaticky.</p>
                </div>
              </div>
              <div style={{ background: "rgba(168,125,184,.1)", border: "1px solid rgba(168,125,184,.25)", borderRadius: 7, padding: "16px 18px", marginBottom: 16 }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: "var(--ink)", margin: "0 0 8px" }}>Jak zadávat výdaje?</p>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--inks)", margin: "0 0 6px" }}>Uvádějte prosím částky, které <strong>reálně odcházejí z Vašeho rozpočtu</strong>. Pokud sdílíte náklady s partnerem, zadejte pouze Vaši polovinu. Daně a odvody systém dopočítá automaticky.</p>
              </div>
              <div className="kalk-card">
                <Acc title="Bydlení" icon="🏠" sum={osMesic.najem + osMesic.energie} open={acc.byd} onToggle={() => tog("byd")}>
                  <div className="kalk-irow">
                    <F label="Nájem nebo hypotéka" tip={"Splátka hypotéky nebo nájemné. Poplatky SVJ patří sem, energie zvlášť."} value={os.najem} onChange={updOs("najem")} />
                    <F label="Energie — elektřina, plyn, voda" tip={"Zálohy na elektřinu, plyn a vodu. Nebo roční vyúčtování vydělte 12."} value={os.energie} onChange={updOs("energie")} />
                  </div>
                </Acc>
                <Acc title="Jídlo a domácnost" icon="🛒" sum={osMesic.jidlo + osMesic.drogerie} open={acc.jidlo} onToggle={() => tog("jidlo")}>
                  <div className="kalk-irow">
                    <F label="Potraviny a supermarket" tip={"Realistický průměr za celou domácnost.\nJednočlenná: 5 000–8 000 Kč/měs.\nDvoučlenná: 8 000–14 000 Kč/měs.\nRodina s dětmi: 14 000–22 000 Kč/měs.\nVčetně restaurací a odběrných míst."} value={os.jidlo} onChange={updOs("jidlo")} />
                    <F label="Drogerie, čistidla, hygiena" tip={"Prací prášky, kosmetika, hygienické\npotřeby, čistidla, papírové potřeby.\nPrůměr domácnosti: 1 000–2 500 Kč/měs."} value={os.drogerie} onChange={updOs("drogerie")} />
                  </div>
                </Acc>
                <Acc title="Telefon a internet" icon="📱" sum={osMesic.telef} open={acc.telef} onToggle={() => tog("telef")}>
                  <div className="kalk-info" style={{ marginBottom: 10 }}>Zde zadejte soukromý telefon a domácí internet. Pracovní telefon a firemní internet patří do Kroku 2.</div>
                  <F label="Telefon + internet dohromady (měsíčně)" tip={"Jen soukromý telefon a domácí internet. Pracovní tarif patří do Kroku 2."} value={os.telef} onChange={updOs("telef")} />
                </Acc>
                <Acc title="Osobní doprava" icon="🚗" sum={osMesic.autoPlatba + osMesic.autoPHM + osMesic.autoPojiska + osMesic.mhd} open={acc.dop} onToggle={() => tog("dop")}>
                  <div className="kalk-info" style={{ marginBottom: 10 }}>Zde jen soukromé jízdy. Pracovní auto a pojistka patří do Kroku 2.</div>
                  <div className="kalk-irow">
                    <F label="Splátka osobního auta (měsíčně)" tip={"Splátka osobního auta. Pokud slouží i k práci, zadejte jen soukromý podíl."} value={os.autoPlatba} onChange={updOs("autoPlatba")} />
                    <F label="PHM — soukromé jízdy (měsíčně)" tip={"PHM na soukromé jízdy. Pracovní cesty patří do Kroku 2."} value={os.autoPHM} onChange={updOs("autoPHM")} />
                    <F label="Pojistka auta — povinné + havarijní (ročně)" tip={"Zadejte roční součet povinného a havarijního. Kalkulačka vydělí 12."} value={os.autoPojiskaRoc} onChange={updOs("autoPojiskaRoc")} sfx="Kč/rok" rocni />
                    <F label="MHD, vlak, bus (měsíčně)" tip={"Jízdné a předplatní jízdenky\npro soukromé cestování."} value={os.mhd} onChange={updOs("mhd")} />
                  </div>
                  {os.autoPojiskaRoc > 0 && <div className="kalk-good">Pojistka auta: {fmt(os.autoPojiskaRoc)} Kč/rok = {fmt(Math.round(os.autoPojiskaRoc / 12))} Kč/měsíc (přičteno automaticky)</div>}
                </Acc>
                <Acc title="Soukromé pojištění a finanční ochrana" icon="🛡️" sum={osMesic.pojistka} open={acc.poj} onToggle={() => tog("poj")}>
                  <div className="kalk-info" style={{ marginBottom: 10 }}>Pojistky mimo auto. Životní, úrazová, domácnost, odpovědnost občana.</div>
                  <div className="kalk-irow">
                    <F label="Pojistky — měsíční platby" tip={"Životní, úrazová, invalidity. Jen měsíční platby."} value={os.pojistkaMesic} onChange={updOs("pojistkaMesic")} />
                    <F label="Pojistky — roční platby (zadejte ročně)" tip={"Domácnost, majetek, odpovědnost občana, cestovní. Zadejte roční součet — vydělíme 12."} value={os.pojistkaRoc} onChange={updOs("pojistkaRoc")} sfx="Kč/rok" rocni />
                  </div>
                  {os.pojistkaRoc > 0 && <div className="kalk-good">Roční pojistky: {fmt(os.pojistkaRoc)} Kč/rok = {fmt(Math.round(os.pojistkaRoc / 12))} Kč/měsíc (přičteno automaticky)</div>}
                </Acc>
                <Acc title="Zdraví a osobní péče" icon="🏥" sum={osMesic.zdravi} open={acc.zdr} onToggle={() => tog("zdr")}>
                  <div className="kalk-info" style={{ marginBottom: 8 }}><span className="kalk-atag">✓ auto</span> Zdravotní pojištění je zahrnuto v odvodech.</div>
                  <F label="Zubař, léky, brýle, vitamíny, alternativa" tip={"Co pojišťovna nekryje: zubař, léky, brýle, alternativa. Průměr za měsíc."} value={os.zdravi} onChange={updOs("zdravi")} />
                </Acc>
                <Acc title="Rodina a děti" icon="👨‍👩‍👧" sum={osMesic.deti + osMesic.skola} open={acc.rod} onToggle={() => tog("rod")}>
                  <div className="kalk-irow">
                    <F label="Kroužky, sport, volný čas dětí" tip={"Taneční, sport, hudba, jazyky —\nvše dohromady za měsíc."} value={os.deti} onChange={updOs("deti")} />
                    <F label="Školné, školka, obědy, výlety" tip={"Školka: 0–8 000 Kč/měs.\nObědy: 500–1 500 Kč/měs.\nVýlety a akce: odhad ÷ 12."} value={os.skola} onChange={updOs("skola")} />
                  </div>
                </Acc>
                <Acc title="Životní styl a volný čas" icon="🎭" sum={osMesic.kultura + osMesic.konickyMesic + osMesic.dovolena + osMesic.streaming + osMesic.obleceni} open={acc.styl} onToggle={() => tog("styl")}>
                  <div className="kalk-irow">
                    <F label="Kultura, restaurace, zábava (měsíčně)" tip={"Kino, divadlo, kavárny, výlety,\nslavnosti — realisticky za měsíc."} value={os.kultura} onChange={updOs("kultura")} />
                    <F label="Koníčky a volný čas (měsíčně)" tip={"Sport, nástroje, vybavení, členství."} value={os.konickyMesic} onChange={updOs("konickyMesic")} />
                    <F label="Dovolená (zadejte roční částku)" tip={"Celkové výdaje na dovolenou za rok.\nTýden Chorvatsko (rodina): 30 000–60 000 Kč."} hint="Váš roční rozpočet na odpočinek a cestování. Systém částku sám rozpočítá do měsíců." value={os.dovRocne} onChange={updOs("dovRocne")} sfx="Kč/rok" rocni />
                    <F label="Streaming, předplatné (měsíčně)" tip={"Netflix, Spotify, Disney+, YouTube Premium, noviny online…"} value={os.streaming} onChange={updOs("streaming")} />
                    <F label="Oblečení a obuv (měsíčně)" tip={"Roční výdaje na oblečení a obuv.\nPrůměrný Čech: 8 000–20 000 Kč/rok.\nZadejte ročně — vydělíme 12."} hint="Průměrný měsíční výdaj. Sezonní nákupy vydělte 12." value={os.obleceni} onChange={updOs("obleceni")} />
                  </div>
                  {os.dovRocne > 0 && <div className="kalk-good">Dovolená: {fmt(os.dovRocne)} Kč/rok = {fmt(Math.round(os.dovRocne / 12))} Kč/měsíc (přičteno automaticky)</div>}
                </Acc>
                <Acc title="Spoření, dlouhodobé investice a úvěry" icon="💰" sum={osMesic.penzijko + osMesic.stavebni + osMesic.investice + osMesic.pujcky} open={acc.spor} onToggle={() => tog("spor")}>
                  <div className="kalk-irow">
                    <F label="Penzijní spoření (měsíčně)" tip={"Penzijní fond. Stát přidává až 1 710 Kč/měs. při vkladu alespoň 1 000 Kč."} value={os.penzijko} onChange={updOs("penzijko")} />
                    <F label="Stavební spoření (měsíčně)" tip={"Státní podpora: 10 % z ročního vkladu,\nmax. 2 000 Kč ročně."} value={os.stavebni} onChange={updOs("stavebni")} />
                    <F label="Investice — ETF, akcie, zlato (měsíčně)" tip={"ETF, akcie, zlato nebo jiné pravidelné investice."} value={os.investice} onChange={updOs("investice")} />
                    <F label="Splátky půjček a kreditek (měsíčně)" tip={"Měsíční splátky půjček a kreditek. Pracovní leasing patří do Kroku 2."} value={os.pujcky} onChange={updOs("pujcky")} />
                  </div>
                </Acc>
              </div>
              <div style={{ background: "var(--deep)", borderRadius: 6, padding: "16px 20px", marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "rgba(240,237,232,.55)" }}>Základní soukromé výdaje celkem / měsíc:</span>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: "#F0EDE8" }}>{fmt(celkOs)} Kč</span>
                </div>
                <div style={{ fontSize: 11, color: "rgba(240,237,232,.3)", marginTop: 3 }}>Bez daní a odvodů — ty se připočítají automaticky ve výsledcích</div>
              </div>
              <button className="kalk-btn" onClick={() => { setKrok(2); scrollToTabBar() }}>Pokračovat na provozní náklady →</button>
            </div>
          )}

          {/* KROK 2 */}
          {krok === 2 && (
            <div id="krok2">
              <div className="kalk-shdr">
                <div className="kalk-snum" style={{ background: "var(--ca)" }}><span>2</span></div>
                <div>
                  <h2 className="kalk-sh2">Náklady podnikání a živnosti</h2>
                  <p className="kalk-ssub">Pravidelné i jednorázové výdaje nutné pro zajištění Vaší profesní činnosti.</p>
                </div>
              </div>
              <div className="kalk-card">
                <Acc title="Pracovní komunikace a internet" icon="📱" sum={prMesic.telefPrac} open={acc.ptelef} onToggle={() => tog("ptelef")}>
                  <F label="Firemní telefon + internet (měsíčně)" tip={"Firemní telefon a mobilní internet."} value={pr.telefPrac} onChange={updPr("telefPrac")} />
                </Acc>
                <Acc title="Pracovní automobil a doprava" icon="🚐" sum={prMesic.autoLeas + prMesic.autoPHMprac + prMesic.autoPojPrac} open={acc.autopr} onToggle={() => tog("autopr")}>
                  <div className="kalk-info" style={{ marginBottom: 10 }}>Sdílíte auto se soukromým použitím? Zadejte pouze pracovní podíl.</div>
                  <div className="kalk-irow">
                    <F label="Splátka/leasing pracovního vozidla (měs.)" tip={"Leasing nebo úvěr na pracovní auto."} value={pr.autoLeas} onChange={updPr("autoLeas")} />
                    <F label="PHM — pracovní cesty (měsíčně)" tip={"PHM na pracovní jízdy. Zedník: 3–8 tis./měs., bagr: 5–15 tis./měs."} value={pr.autoPHMprac} onChange={updPr("autoPHMprac")} />
                    <F label="Pojistka pracovního vozidla (ročně)" tip={"Pojistka pracovního vozidla. Zadejte roční částku — vydělíme 12."} value={pr.autoPojPracRoc} onChange={updPr("autoPojPracRoc")} sfx="Kč/rok" rocni />
                  </div>
                  {pr.autoPojPracRoc > 0 && <div className="kalk-good">Pojistka prac. vozidla: {fmt(pr.autoPojPracRoc)} Kč/rok = {fmt(Math.round(pr.autoPojPracRoc / 12))} Kč/měsíc</div>}
                </Acc>
                <Acc title="Provozovna, kancelář nebo dílna" icon="🏭" sum={prMesic.najemProv + prMesic.energieProv} open={acc.prov} onToggle={() => tog("prov")}>
                  <div className="kalk-irow">
                    <F label="Nájem provozovny / dílny / salónu" value={pr.najemProv} onChange={updPr("najemProv")} />
                    <F label="Energie provozovny (měsíčně)" value={pr.energieProv} onChange={updPr("energieProv")} />
                  </div>
                </Acc>
                <Acc title="Nářadí, technika a odpisy" icon="🔧" sum={prMesic.naradiFixni + prMesic.odpisy} open={acc.nar} onToggle={() => tog("nar")}>
                  <div className="kalk-info" style={{ marginBottom: 10 }}>Drahé stroje: pořizovací cena ÷ měsíce životnosti. Bagr 1 mil / 120 měs. = 8 333 Kč/měs.</div>
                  <div className="kalk-irow">
                    <F label="Drobné nářadí, opravy, náhradní díly" tip={"Pravidelná údržba, drobné nákupy nářadí a náhradních dílů."} value={pr.naradiFixni} onChange={updPr("naradiFixni")} />
                    <F label="Odpisy drahého vybavení (měsíčně)" tip={"Pořizovací cena ÷ měsíce životnosti."} value={pr.odpisy} onChange={updPr("odpisy")} />
                  </div>
                </Acc>
                <Acc title="Materiál a zboží" icon="📦" sum={prMesic.material} open={acc.mat} onToggle={() => tog("mat")}>
                  <div className="kalk-info" style={{ marginBottom: 10 }}>Jen spotřební materiál, který klientovi nepřeúčtujete.</div>
                  <F label="Nespotřební materiál za měsíc" tip={"Čistidla, spojovací materiál, ochranné pomůcky…"} value={pr.material} onChange={updPr("material")} />
                </Acc>
                <Acc title="Administrativa, software a služby" icon="📋" sum={prMesic.ucetni + prMesic.software + prMesic.banka} open={acc.adm} onToggle={() => tog("adm")}>
                  <div className="kalk-irow">
                    <F label="Účetní / daňový poradce (měsíčně)" tip={"Měsíční paušál účetní nebo daňovému poradci."} value={pr.ucetni} onChange={updPr("ucetni")} />
                    <F label="Software a aplikace (měsíčně)" tip={"Účetní software, Adobe, MS365, CRM…"} value={pr.software} onChange={updPr("software")} />
                    <F label="Bankovní poplatky (měsíčně)" tip={"Firemní účet: 100–400 Kč/měs."} value={pr.banka} onChange={updPr("banka")} />
                  </div>
                </Acc>
                <Acc title="Marketing, prezentace a web" icon="📣" sum={prMesic.marketing + prMesic.web} open={acc.mkt} onToggle={() => tog("mkt")}>
                  <div className="kalk-irow">
                    <F label="Reklama — Google, Facebook, letáky" value={pr.marketing} onChange={updPr("marketing")} />
                    <F label="Web, doména, hosting (měsíčně)" tip={"Roční náklady ÷ 12.\nDoména: ~200–500 Kč/rok.\nHosting na Cloudflare Pages: zdarma."} value={pr.web} onChange={updPr("web")} />
                  </div>
                </Acc>
                <Acc title="Profesní vzdělávání a rozvoj" icon="📚" sum={prMesic.kurzy} open={acc.vzd} onToggle={() => tog("vzd")}>
                  <F label="Kurzy, školení, literatura (měsíčně)" tip={"Kurzy, školení, literatura. Daňově uznatelný náklad."} value={pr.kurzy} onChange={updPr("kurzy")} />
                </Acc>
                <Acc title="Podnikatelské pojištění" icon="🛡️" sum={prMesic.pojistkaOdpov + prMesic.pojistkaMap} open={acc.ppoj} onToggle={() => tog("ppoj")}>
                  <div className="kalk-irow">
                    <F label="Pojistka odpovědnosti z povolání" tip={"Chrání před škodami způsobenými při práci."} value={pr.pojistkaOdpov} onChange={updPr("pojistkaOdpov")} />
                    <F label="Pojistka majetku podnikání" tip={"Nářadí, vybavení dílny, počítač."} value={pr.pojistkaMap} onChange={updPr("pojistkaMap")} />
                  </div>
                </Acc>
                <Acc title="Spolupráce a lidské zdroje" icon="👥" sum={prMesic.lide + prMesic.externisti} open={acc.lid} onToggle={() => tog("lid")}>
                  <div className="kalk-irow">
                    <F label="Zaměstnanci, DPP, DPČ — hrubé náklady" tip={"Hrubá mzda + 34 % odvody zaměstnavatele."} value={pr.lide} onChange={updPr("lide")} />
                    <F label="Subdodavatelé a freelanceři" tip={"Co platíte jiným firmám nebo OSVČ za práci, kterou sami neděláte."} value={pr.externisti} onChange={updPr("externisti")} />
                  </div>
                </Acc>
                <Acc title="Jednorázové roční provozní výdaje" icon="📅" sum={prMesic.rocniJednor} open={acc.roc} onToggle={() => tog("roc")}>
                  <F label="Roční výdaje celkem (zadejte ročně)" hint="Silniční daň, dálniční známka, výroční pojistky, revize, větší nákupy…" tip={"Zadejte celkový roční součet.\nKalkulačka vydělí 12."} value={pr.rocniJednor} onChange={updPr("rocniJednor")} sfx="Kč/rok" rocni />
                  {pr.rocniJednor > 0 && <div className="kalk-good">Roční výdaje: {fmt(pr.rocniJednor)} Kč/rok = {fmt(Math.round(pr.rocniJednor / 12))} Kč/měsíc — rovnoměrně rozloženo do každého měsíce.</div>}
                </Acc>
                <Acc title="Ostatní specifické provozní výdaje" icon="➕" sum={prMesic.ostatni} open={acc.ost} onToggle={() => tog("ost")}>
                  <F label="Co jinde nezapadá (měsíčně)" value={pr.ostatni} onChange={updPr("ostatni")} />
                </Acc>
              </div>
              <div style={{ background: "var(--deep)", borderRadius: 6, padding: "16px 20px", marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: "rgba(240,237,232,.55)" }}>Provozní náklady podnikání / měsíc:</span>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, color: "#F0EDE8" }}>{fmt(celkPr)} Kč</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "rgba(240,237,232,.45)" }}>Celkové čisté měsíční výdaje (bez odvodů):</span>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: "rgba(240,237,232,.65)" }}>{fmt(celkOs + celkPr)} Kč</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="kalk-btnb" onClick={() => { setKrok(1); scrollToTabBar() }}>← Zpět</button>
                <button className="kalk-btn" style={{ flex: 1, marginTop: 0 }} onClick={() => { setKrok(3); scrollToTabBar() }}>Pokračovat na pracovní čas →</button>
              </div>
            </div>
          )}

          {/* KROK 3 */}
          {krok === 3 && (
            <div id="krok3">
              <div className="kalk-shdr">
                <div className="kalk-snum" style={{ background: "var(--or)" }}><span>3</span></div>
                <div>
                  <h2 className="kalk-sh2">Pracovní fond a časová realita</h2>
                  <p className="kalk-ssub">Hodinová sazba musí zohledňovat dny volna, neplánované výpadky a čas strávený administrativou.</p>
                </div>
              </div>
              <div className="kalk-card">
                <Sl label="Počet plánovaných pracovních dní v týdnu" value={cas.dnyTydne} min={1} max={7} unit=" dní" onChange={updCas("dnyTydne")} color="var(--or)" marks={["1", "2", "3", "4", "5", "6", "7"]} tip={"Kolik dní v týdnu chcete aktivně pracovat.\n5 = standardní pracovní týden.\nVíkendová práce je běžná u řemesel a gastro."} />
                <Sl label="Požadovaná denní doba strávená v práci" value={cas.hodinyDenne} min={2} max={14} unit=" h" onChange={updCas("hodinyDenne")} color="var(--or)" marks={["2", "4", "6", "8", "10", "12", "14"]} tip={"Celkový čas v práci včetně cesty, administrace, přípravy.\nREALISTICKY: kolik hodin denně práci věnujete celkem?"} />
                <Sl label="Plánované dny dovolené a volna za rok" value={cas.dovolena} min={0} max={120} unit=" dní" onChange={updCas("dovolena")} color="var(--ca)" marks={["0", "20", "40", "60", "90", "120"]} tip={"Jako OSVČ si dovolenou hradíte sami — každý den = den bez příjmu.\nDoporučení: min. 20 dní. Méně vede k vyhoření."} hint="Doporučení: minimálně 20 dní. Pod tím hrozí vyhoření." />
                <Sl label="Rezerva na dny nemoci a neschopnosti za rok" value={cas.nemoc} min={0} max={90} unit=" dní" onChange={updCas("nemoc")} color="var(--rd)" marks={["0", "10", "20", "30", "60", "90"]} tip={"Průměrná nemocnost v ČR: 12–15 dní ročně.\nJako OSVČ v nemoci nevyděláváte."} hint="Průměr ČR: 12–15 dní. Nezahrnuje hospitalizaci a úrazy." />
                <div className="kalk-info">
                  <span className="kalk-atag">✓ automaticky</span>&nbsp;
                  <strong>Státní svátky: {K.svatky} dní/rok</strong> (z toho přibližně {cas2.svatkyPracovni} připadá na Vaše pracovní dny). Systém je odečítá automaticky.
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div className="kalk-sh">
                    <span className="kalk-sl">Kolik hodin můžete fakturovat klientům<T text={"Procento pracovní doby, za které Vám klient skutečně zaplatí.\n\nZbytek jsou neplacené hodiny:\n• Cesta na místo a zpět\n• Administrativa, faktury, e-maily\n• Příprava pracoviště a údržba\n• Shánění nových zakázek"} /></span>
                    <span className="kalk-sv" style={{ color: "var(--oc)" }}>{cas.fakturovatelnost} %</span>
                  </div>
                  <input type="range" min={30} max={95} step={1} value={cas.fakturovatelnost} onChange={e => updCas("fakturovatelnost")(Number(e.target.value))} style={{ "--thumb": "var(--oc)" } as any} />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, marginBottom: 12 }}>
                    <span style={{ fontSize: 10, color: "var(--dim)" }}>30 % (vysoká režie)</span>
                    <span style={{ fontSize: 10, color: "var(--dim)" }}>95 % (téměř bez režie)</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="kalk-obory-grid">
                    {[
                      { l: "🔧 Řemeslné obory a výroba", h: "Příprava zakázek, logistika, zaměření", v: 70 },
                      { l: "🚜 Doprava a mechanizace", h: "Údržba techniky, přejezdy, prostoje", v: 65 },
                      { l: "✂️ Osobní služby a salony", h: "Pravidelný sled navazujících klientů", v: 78 },
                      { l: "💻 Konzultace a duševní činnost", h: "Vysoká režie na přípravu a administrativu", v: 55 },
                      { l: "🏗️ Projektové vedení a stavby", h: "Kooperace, kontrolní dny, příprava", v: 60 },
                      { l: "📦 Obchodní činnost a reality", h: "Akvizice, prohlídky, jednání bez výsledku", v: 50 },
                    ].map(o => (
                      <button key={o.v} onClick={() => updCas("fakturovatelnost")(o.v)}
                        style={{ padding: "9px 11px", border: `1.5px solid ${cas.fakturovatelnost === o.v ? "var(--oc)" : "var(--ln)"}`, borderRadius: 5, background: cas.fakturovatelnost === o.v ? "rgba(168,125,184,.08)" : "var(--cl)", cursor: "pointer", textAlign: "left", transition: "all .2s" }}>
                        <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 11.5, color: cas.fakturovatelnost === o.v ? "var(--oc)" : "var(--ink)", margin: "0 0 2px" }}>{o.l} · {o.v} %</p>
                        <p style={{ fontSize: 10, color: "var(--dim)", margin: 0, lineHeight: 1.4 }}>{o.h}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ background: "linear-gradient(135deg,var(--deep),#1a1820)", borderRadius: 8, padding: "18px 20px", color: "#F0EDE8" }}>
                  <p style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.35)", margin: "0 0 12px" }}>Orientační měsíční bilance fondu pracovní doby</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 12 }}>
                    {[
                      { l: "Pracovních dní/měsíc", v: Math.round(cas2.dostupneDniRok / 12 * 10) / 10 },
                      { l: "Hrubých hodin/měsíc", v: Math.round(cas2.hrubHodinMesic) },
                      { l: "Faktur. hodin/měsíc", v: Math.round(cas2.fakturHodinMesic), c: "#7AB830" },
                    ].map(s => (
                      <div key={s.l} style={{ textAlign: "center", background: "rgba(255,255,255,.05)", borderRadius: 5, padding: "10px 6px" }}>
                        <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(.9rem,2.5vw,1.2rem)", color: (s as any).c || "rgba(240,237,232,.8)", margin: "0 0 3px" }}>{s.v}</p>
                        <p style={{ fontSize: 10, color: "rgba(240,237,232,.35)", margin: 0, lineHeight: 1.4 }}>{s.l}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.7, margin: "0 0 5px" }}>
                    Z <strong>{Math.round(cas2.hrubHodinMesic)} hrubých hodin</strong> měsíčně Vám klient zaplatí jen za{" "}
                    <strong style={{ color: "#7AB830" }}>{Math.round(cas2.fakturHodinMesic)} hodin</strong>.
                  </p>
                  <p style={{ fontSize: 12, color: "rgba(240,237,232,.42)", margin: 0 }}>
                    {Math.round(cas2.hrubHodinMesic - cas2.fakturHodinMesic)} hodin měsíčně věnujete nepřímo svému provozu.
                  </p>
                </div>
              </div>
              {cas.dnyTydne * cas.hodinyDenne * (cas.fakturovatelnost / 100) * 4.33 < 10 && <div className="kalk-warn" style={{ marginBottom: 12 }}>Při tomto nastavení vychází méně než 10 fakturovatelných hodin měsíčně. Zkontrolujte prosím zadané hodnoty.</div>}
              {cas.fakturovatelnost > 85 && <div className="kalk-warn" style={{ marginBottom: 12 }}>Fakturovatelnost nad 85 % je v praxi výjimečná. Zkontrolujte, zda číslo reálně odpovídá Vašemu provozu.</div>}
              {cas.hodinyDenne > 12 && <div className="kalk-warn" style={{ marginBottom: 12 }}>Více než 12 hodin práce denně je dlouhodobě neudržitelné.</div>}
              {cas.dovolena < 10 && <div className="kalk-warn" style={{ marginBottom: 12 }}>Méně než 10 dní dovolené ročně zvyšuje riziko vyhoření. Standardní fond je 20 dní.</div>}
              <div className="kalk-card">
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: "var(--ink)", margin: "0 0 4px" }}>Modelové rozložení časového fondu v týdnu</p>
                <p style={{ fontSize: 12, color: "var(--dim)", margin: "0 0 14px" }}>Z celkového týdenního fondu činí orientační poměry:</p>
                {(() => {
                  const celkH = cas.dnyTydne * cas.hodinyDenne
                  const fakturH = Math.round(celkH * cas.fakturovatelnost / 100)
                  const adminH = Math.round(celkH * (1 - cas.fakturovatelnost / 100))
                  const volnoH = Math.round((7 * 24) - celkH - 8 * 7)
                  const rodinaH = Math.max(0, Math.round(volnoH * 0.4))
                  const cistyVolnoH = Math.max(0, volnoH - rodinaH)
                  const bars = [
                    { label: "Fakturovaná práce", h: fakturH, c: "#A87DB8", tc: "#fff" },
                    { label: "Administrativa a příprava", h: adminH, c: "#E2DCD1", tc: "#3A3630" },
                    { label: "Rodina a blízcí", h: rodinaH, c: "#7AB830", tc: "#fff" },
                    { label: "Volný čas", h: cistyVolnoH, c: "#F0EDE8", tc: "#3A3630" },
                  ]
                  return (
                    <div>
                      <div style={{ display: "flex", height: 44, borderRadius: 4, overflow: "hidden", marginBottom: 14 }}>
                        {bars.map(b => (
                          <div key={b.label} title={b.label + ": " + b.h + " h"} style={{ flex: b.h, background: b.c, display: "flex", alignItems: "center", justifyContent: "center", transition: "flex .5s", minWidth: b.h > 0 ? 2 : 0 }}>
                            {b.h >= 4 && <span style={{ fontSize: 10, fontWeight: 700, color: b.tc, whiteSpace: "nowrap" }}>{b.h}h</span>}
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px" }}>
                        {bars.map(b => (
                          <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 10, height: 10, borderRadius: 2, background: b.c, border: "1px solid rgba(25,23,20,.12)", flexShrink: 0 }} />
                            <span style={{ fontSize: 12, color: "var(--inks)" }}>{b.label}: <strong>{b.h} h</strong></span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })()}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="kalk-btnb" onClick={() => { setKrok(2); scrollToTabBar() }}>← Zpět</button>
                <button className="kalk-btn" style={{ flex: 1, marginTop: 0 }} onClick={() => { setKrok(4); scrollToTabBar() }}>Pokračovat na daňový režim →</button>
              </div>
            </div>
          )}

          {/* KROK 4 */}
          {krok === 4 && (
            <div id="krok4">
              <div className="kalk-shdr">
                <div className="kalk-snum" style={{ background: "var(--rd)" }}><span>4</span></div>
                <div>
                  <h2 className="kalk-sh2">Daně a odvody státu</h2>
                  <p className="kalk-ssub">Zvolte Váš plánovaný nebo aktuální daňový přístup.</p>
                </div>
              </div>
              <div className="kalk-card">
                <div className="kalk-info" style={{ marginBottom: 16 }}>
                  <span className="kalk-atag">✓ automaticky</span>&nbsp;
                  <strong>Zdravotní pojištění</strong> (min. {fmt(K.minZdravotni)} Kč/měs. nebo 13,5 % z vyměřovacího základu) · <strong>Sociální pojištění</strong> (min. {fmt(K.minSocialni)} Kč/měs. nebo 29,2 % z vyměřovacího základu) · <strong>Daň z příjmu</strong> (15 %, sleva {fmt(K.slevaPoplatnik)} Kč/rok). Parametry pro rok 2026.
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                  {[
                    { id: "skutecne", i: "🔧", l: "Skutečné výdaje — daňová evidence", h: "Vhodné při vyšších reálných nákladech a práci s doklady." },
                    { id: "pausal_procento", i: "📊", l: "Výdajový paušál procentem z příjmů", h: "Uplatnění fixního procenta nákladů bez dokládání účtenek." },
                    { id: "pausalni", i: "📋", l: "Paušální daň — 1., 2. nebo 3. pásmo", h: "Jedna pevná měsíční platba bez nutnosti podávat přiznání." },
                  ].map(r => (
                    <div key={r.id} onClick={() => updDan("rezim")(r.id)}
                      style={{ padding: "15px 17px", border: `2px solid ${dan.rezim === r.id ? "var(--rd)" : "var(--ln)"}`, borderRadius: 6, cursor: "pointer", background: dan.rezim === r.id ? "rgba(224,48,74,.06)" : "#fff", transition: "all .2s" }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: dan.rezim === r.id ? "var(--rd)" : "var(--ink)", margin: "0 0 4px" }}>{r.i} {r.l}</p>
                      <p style={{ fontSize: 12, color: "var(--dim)", margin: 0, lineHeight: 1.55 }}>{r.h}</p>
                    </div>
                  ))}
                </div>
                {dan.rezim === "pausal_procento" && (
                  <div style={{ background: "var(--cl1)", borderRadius: 6, padding: "14px 18px", marginBottom: 12 }}>
                    <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, color: "var(--ink)", margin: "0 0 10px" }}>Zvolte výši výdajového paušálu:</p>
                    {Object.entries(K.pausalVydaje).map(([pct, info]) => (
                      <div key={pct} onClick={() => updDan("pausalPct")(Number(pct))}
                        style={{ padding: "11px 13px", marginBottom: 7, border: `1.5px solid ${dan.pausalPct === Number(pct) ? "var(--oc)" : "var(--ln)"}`, borderRadius: 5, cursor: "pointer", background: dan.pausalPct === Number(pct) ? "rgba(168,125,184,.08)" : "#fff", transition: "all .2s" }}>
                        <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 12, color: dan.pausalPct === Number(pct) ? "var(--oc)" : "var(--ink)", margin: "0 0 2px" }}>{info.label}</p>
                        <p style={{ fontSize: 11, color: "var(--dim)", margin: 0 }}>Typické obory: {info.obory}</p>
                      </div>
                    ))}
                  </div>
                )}
                {dan.rezim === "pausalni" && (
                  <div style={{ background: "var(--cl1)", borderRadius: 6, padding: "14px 18px", marginBottom: 12 }}>
                    <div style={{ background: "rgba(245,138,0,.1)", border: "1px solid rgba(245,138,0,.3)", borderRadius: 4, padding: "10px 12px", marginBottom: 12, fontSize: 12, lineHeight: 1.6, color: "#7a4a00" }}>
                      V režimu paušální daně je nutné splnit zákonné podmínky. Výběr proveďte na základě očekávaného ročního obratu.
                    </div>
                    <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, color: "var(--ink)", margin: "0 0 10px" }}>Vyberte pásmo paušální daně (2026):</p>
                    {Object.entries(K.pausalni).map(([k, p]) => (
                      <div key={k} onClick={() => updDan("pausPasmo")(Number(k))}
                        style={{ padding: "11px 13px", marginBottom: 7, border: `1.5px solid ${dan.pausPasmo === Number(k) ? "var(--rd)" : "var(--ln)"}`, borderRadius: 5, cursor: "pointer", background: dan.pausPasmo === Number(k) ? "rgba(224,48,74,.06)" : "#fff", transition: "all .2s" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 12, color: dan.pausPasmo === Number(k) ? "var(--rd)" : "var(--ink)", margin: "0 0 2px" }}>{k}. pásmo — {p.limit}</p>
                            <p style={{ fontSize: 11, color: "var(--dim)", margin: 0 }}>{fmt(p.mesic)} Kč/měsíc = {fmt(p.rocni)} Kč/rok</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {vysl && (
                  <div style={{ background: "var(--deep)", borderRadius: 6, padding: "14px 18px", color: "#F0EDE8" }}>
                    <p style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(240,237,232,.32)", margin: "0 0 10px" }}>Orientační model měsíčních odvodů</p>
                    {dan.rezim === "pausalni" ? (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: "var(--or)", margin: "0 0 3px" }}>{fmt(vysl.odvody.mesicne)} Kč/měsíc</p>
                        <p style={{ fontSize: 12, color: "rgba(240,237,232,.4)" }}>Fixní paušální platba státu celkem</p>
                      </div>
                    ) : (
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                        {[{ l: "Zdravotní", v: Math.round(vysl.odvody.zdravotni / 12), c: "var(--ca)" }, { l: "Sociální", v: Math.round(vysl.odvody.socialni / 12), c: "var(--oc)" }, { l: "Daň z příjmu", v: Math.round(vysl.odvody.dan / 12), c: "var(--or)" }].map(o => (
                          <div key={o.l} style={{ textAlign: "center", background: "rgba(255,255,255,.06)", borderRadius: 5, padding: "10px 6px" }}>
                            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(.9rem,2vw,1.1rem)", color: o.c, margin: "0 0 2px" }}>{fmt(o.v)} Kč</p>
                            <p style={{ fontSize: 10, color: "rgba(240,237,232,.35)", margin: 0 }}>{o.l}/měs.</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="kalk-card">
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: "var(--ink)", margin: "0 0 4px" }}>Vaše specifická situace</p>
                <p style={{ fontSize: 12, color: "var(--dim)", margin: "0 0 14px" }}>Upřesněte své zázemí pro přesnější odhad daňové složky.</p>
                <div onClick={() => updSlevy("vedlejci")(!slevy.vedlejci)}
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", border: `1.5px solid ${slevy.vedlejci ? "var(--oc)" : "var(--ln)"}`, borderRadius: 5, cursor: "pointer", background: slevy.vedlejci ? "rgba(168,125,184,.07)" : "#fff", marginBottom: 10, transition: "all .2s" }}>
                  <div style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${slevy.vedlejci ? "var(--oc)" : "rgba(25,23,20,.2)"}`, background: slevy.vedlejci ? "var(--oc)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .2s" }}>
                    {slevy.vedlejci && <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>✓</span>}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, color: slevy.vedlejci ? "var(--oc)" : "var(--ink)", margin: "0 0 2px" }}>Výkon činnosti jako vedlejší zdroj příjmů</p>
                    <p style={{ fontSize: 11.5, color: "var(--dim)", margin: 0 }}>Při nižším zisku nemusí vzniknout povinnost platit sociální pojištění.</p>
                  </div>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 12.5, color: "var(--ink)", margin: "0 0 8px" }}>Počet vyživovaných dětí (daňové zvýhodnění)</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[0, 1, 2, 3, 4].map(n => (
                      <button key={n} onClick={() => updSlevy("deti")(n)}
                        style={{ padding: "8px 14px", border: `1.5px solid ${slevy.deti === n ? "var(--oc)" : "var(--ln)"}`, borderRadius: 4, background: slevy.deti === n ? "var(--oc)" : "#fff", color: slevy.deti === n ? "#fff" : "var(--ink)", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all .2s" }}>
                        {n}{n === 4 ? "+" : ""}
                      </button>
                    ))}
                  </div>
                  {slevy.deti > 0 && <p style={{ fontSize: 11.5, color: "var(--oc)", marginTop: 6 }}>
                    Sleva: {fmt(slevy.deti >= 1 ? K.slevaDetiSazby[0] : 0)} {slevy.deti >= 2 ? `+ ${fmt(K.slevaDetiSazby[1])}` : ""} {slevy.deti >= 3 ? `+ ${fmt(K.slevaDetiSazby[2] * (slevy.deti - 2))}` : ""} = {fmt((slevy.deti >= 1 ? K.slevaDetiSazby[0] : 0) + (slevy.deti >= 2 ? K.slevaDetiSazby[1] : 0) + (slevy.deti >= 3 ? K.slevaDetiSazby[2] * (slevy.deti - 2) : 0))} Kč/rok
                  </p>}
                </div>
                <div onClick={() => updSlevy("manzel")(!slevy.manzel)}
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", border: `1.5px solid ${slevy.manzel ? "var(--oc)" : "var(--ln)"}`, borderRadius: 5, cursor: "pointer", background: slevy.manzel ? "rgba(168,125,184,.07)" : "#fff", marginBottom: 10, transition: "all .2s" }}>
                  <div style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${slevy.manzel ? "var(--oc)" : "rgba(25,23,20,.2)"}`, background: slevy.manzel ? "var(--oc)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .2s" }}>
                    {slevy.manzel && <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>✓</span>}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, color: slevy.manzel ? "var(--oc)" : "var(--ink)", margin: "0 0 2px" }}>Sleva na manželku / manžela</p>
                    <p style={{ fontSize: 11.5, color: "var(--dim)", margin: 0 }}>Uplatnění slevy v případě splnění zákonné podmínky příjmů partnera do 68 000 Kč za rok.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { k: "invaliditaI", l: "Invalidita I./II. stupně", v: K.slevaInvaliditaI },
                    { k: "invaliditaIII", l: "Invalidita III. stupně", v: K.slevaInvaliditaIII },
                  ].map(inv => (
                    <div key={inv.k} onClick={() => updSlevy(inv.k)(!slevy[inv.k])}
                      style={{ flex: 1, padding: "10px 12px", border: `1.5px solid ${slevy[inv.k] ? "var(--oc)" : "var(--ln)"}`, borderRadius: 5, cursor: "pointer", background: slevy[inv.k] ? "rgba(168,125,184,.07)" : "#fff", transition: "all .2s" }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 11.5, color: slevy[inv.k] ? "var(--oc)" : "var(--ink)", margin: "0 0 2px" }}>{inv.l}</p>
                      <p style={{ fontSize: 10.5, color: "var(--dim)", margin: 0 }}>Sleva {fmt(inv.v)} Kč/rok</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="kalk-btnb" onClick={() => { setKrok(3); scrollToTabBar() }}>← Zpět</button>
                <button style={{ flex: 1, padding: "16px", background: "linear-gradient(135deg,var(--oc),var(--rd))", color: "#fff", border: "none", borderRadius: 3, fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15, cursor: "pointer" }}
                  onClick={() => { if (vysl) { setSimSazba(vysl.zdravaSazba); setSimDny(cas.dnyTydne); setSimHod(cas.hodinyDenne) } setKrok(5); scrollToTabBar() }}>
                  Zobrazit vyhodnocení sazby →
                </button>
              </div>
            </div>
          )}

          {/* KROK 5: VÝSLEDKY */}
          {krok === 5 && vysl && (
            <div id="krok5">
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem,3vw,1.8rem)", color: "var(--ink)", margin: "0 0 5px", letterSpacing: "-.04em" }}>Ekonomický rozbor podnikání</h2>
                <p style={{ fontSize: 13, color: "var(--dim)", margin: 0 }}>Přehled pásem hodinové sazby vypočtený na základě zadaných časových a nákladových parametrů.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 16, alignItems: "stretch" }} className="kalk-res3">
                {[
                  { l: "Minimální sazba", s: vysl.minSazba, c: "#E0304A", bg: "rgba(224,48,74,.06)", i: "⚠️", desc: "Pokrývá zadané provozní, osobní výdaje a odvody. Netvoří rezervační polštář na výpadky zakázek.", pri: Math.round(vysl.minSazba * cas2.fakturHodinMesic), preb: Math.round(vysl.minSazba * cas2.fakturHodinMesic - vysl.celkMesicVcOdvodu), main: false },
                  { l: "Doporučená sazba", s: vysl.zdravaSazba, c: "#7AB830", bg: "rgba(122,184,48,.08)", i: "✅", desc: "Udržitelná hladina odměny. Obsahuje 30% bezpečnostní rezervu pro klidnější provoz a stabilitu.", pri: Math.round(vysl.zdravaSazba * cas2.fakturHodinMesic), preb: Math.round(vysl.zdravaSazba * cas2.fakturHodinMesic - vysl.celkMesicVcOdvodu), main: true },
                  { l: "Rozvojová sazba", s: vysl.komfortSazba, c: "#A87DB8", bg: "rgba(168,125,184,.06)", i: "🚀", desc: "Zahrnuje 65% rozvojovou složku. Vytváří dostatečný kapitál pro investice, růst a rozvoj.", pri: Math.round(vysl.komfortSazba * cas2.fakturHodinMesic), preb: Math.round(vysl.komfortSazba * cas2.fakturHodinMesic - vysl.celkMesicVcOdvodu), main: false },
                ].map(r => (
                  <div key={r.l} style={{ background: r.bg, border: r.main ? `3px solid ${r.c}` : `1px solid ${r.c}33`, borderRadius: 8, padding: r.main ? "clamp(16px,2.5vw,24px)" : "clamp(13px,2vw,18px)", position: "relative", overflow: "hidden", opacity: r.main ? 1 : 0.72, boxShadow: r.main ? "0 8px 24px rgba(0,0,0,0.06)" : "none", transform: r.main ? "scale(1.02)" : "none", zIndex: r.main ? 2 : 1, transition: "all .3s" }}>
                    {r.main && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: r.c }} />}
                    <p style={{ fontSize: r.main ? 10.5 : 9.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: r.c, margin: "0 0 6px" }}>{r.i} {r.l}</p>
                    <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: r.main ? "clamp(1.4rem,3.5vw,2.1rem)" : "clamp(1.15rem,3vw,1.65rem)", color: "var(--ink)", margin: "0 0 12px", letterSpacing: "-.04em" }}>{fmtH(r.s)}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 12 }}>
                      <div style={{ textAlign: "center", background: "rgba(25,23,20,.05)", borderRadius: 4, padding: "7px 4px" }}>
                        <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 12.5, color: "var(--ink)", margin: 0 }}>{fmt(r.pri)} Kč</p>
                        <p style={{ fontSize: 9, color: "var(--dim)", margin: 0, lineHeight: 1.4 }}>příjem/měsíc</p>
                      </div>
                      <div style={{ textAlign: "center", background: "rgba(25,23,20,.05)", borderRadius: 4, padding: "7px 4px" }}>
                        <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 12.5, color: r.preb >= 0 ? r.c : "var(--rd)", margin: 0 }}>{r.preb >= 0 ? "+" : ""}{fmt(r.preb)} Kč</p>
                        <p style={{ fontSize: 9, color: "var(--dim)", margin: 0, lineHeight: 1.4 }}>přebytek/měs.</p>
                      </div>
                    </div>
                    <p style={{ fontSize: r.main ? 12 : 11, lineHeight: 1.6, color: "var(--inks)", margin: 0 }}>{r.desc}</p>
                  </div>
                ))}
              </div>

              <ShareBlock minSazba={vysl.minSazba} zdravaSazba={vysl.zdravaSazba} copied={copied} onPrint={handlePrint} onCopy={handleCopy} />

              {(() => {
                const fakturHodinDen = cas2.fakturHodinMesic / (cas.dnyTydne * 4.33)
                const dniNaKryti = (sazba: number) => { const hodNutnych = vysl.celkMesicVcOdvodu / sazba; const dniMesic = hodNutnych / fakturHodinDen; return Math.min(7, Math.round(dniMesic / 4.33 * 10) / 10) }
                const dnyMin = dniNaKryti(vysl.minSazba), dnyZdr = dniNaKryti(vysl.zdravaSazba), dnyRoz = dniNaKryti(vysl.komfortSazba)
                return (
                  <div style={{ background: "var(--deep)", borderRadius: 8, padding: "clamp(18px,3vw,28px)", marginBottom: 14 }}>
                    <p style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.32)", margin: "0 0 16px" }}>Srovnání efektivity: Kolik dní v týdnu musíte fakturovat k pokrytí potřeb</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                      {[
                        { label: "Minimální sazba", sazba: vysl.minSazba, dny: dnyMin, c: "#E0304A", bg: "rgba(224,48,74,.12)" },
                        { label: "Zdravá sazba", sazba: vysl.zdravaSazba, dny: dnyZdr, c: "#7AB830", bg: "rgba(122,184,48,.12)" },
                        { label: "Rozvojová sazba", sazba: vysl.komfortSazba, dny: dnyRoz, c: "#A87DB8", bg: "rgba(168,125,184,.12)" },
                      ].map(r => (
                        <div key={r.label} style={{ background: r.bg, borderRadius: 6, padding: "14px 12px", textAlign: "center" }}>
                          <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.1rem,3vw,1.6rem)", color: r.c, margin: "0 0 4px", letterSpacing: "-.04em" }}>{fmtH(r.sazba)}</p>
                          <p style={{ fontSize: 10, color: "rgba(240,237,232,.45)", margin: "0 0 10px", letterSpacing: ".06em" }}>{r.label.toUpperCase()}</p>
                          <div style={{ borderTop: "1px solid rgba(240,237,232,.1)", paddingTop: 10 }}>
                            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem,4vw,2.2rem)", color: "#F0EDE8", margin: "0 0 2px", lineHeight: 1 }}>{r.dny}</p>
                            <p style={{ fontSize: 11, color: "rgba(240,237,232,.45)", margin: 0 }}>dní v týdnu</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })()}

              <div className="kalk-card" style={{ marginBottom: 14 }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13.5, color: "var(--ink)", margin: "0 0 14px" }}>Měsíční přehled nákladových skupin</p>
                {[
                  { l: "Osobní život a rodina", v: celkOs, c: "var(--oc)" },
                  { l: "Provoz podnikání", v: celkPr, c: "var(--ca)" },
                  { l: "Daně a odvody státu", v: Math.round(vysl.odvody.mesicne), c: "var(--rd)" },
                ].map(b => (
                  <div key={b.l} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontSize: 12.5, color: "var(--inks)" }}>{b.l}</span>
                      <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: b.c }}>{fmt(b.v)} Kč ({Math.round(b.v / vysl.celkMesicVcOdvodu * 100)} %)</span>
                    </div>
                    <div style={{ height: 6, background: "rgba(25,23,20,.07)", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${Math.round(b.v / vysl.celkMesicVcOdvodu * 100)}%`, background: b.c, borderRadius: 3, transition: "width .6s" }} />
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--ln)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "var(--dim)" }}>Celková měsíční cílová částka:</span>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, color: "var(--ink)" }}>{fmt(vysl.celkMesicVcOdvodu)} Kč</span>
                </div>
              </div>

              {/* SIMULÁTOR */}
              <div style={{ background: "var(--deep)", borderRadius: 8, padding: "clamp(16px,3vw,24px)", marginBottom: 14 }}>
                <p style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,237,232,.32)", margin: "0 0 16px" }}>Interaktivní simulátor cílových hodnot</p>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: "rgba(240,237,232,.6)" }}>Hodinová sazba</span>
                    <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: simSazba && simSazba < vysl.minSazba ? "#E0304A" : "#7AB830" }}>{simSazba ? fmt(simSazba) : "-"} Kč/h</span>
                  </div>
                  <input type="range" min={Math.round(vysl.minSazba * 0.4 / 10) * 10} max={Math.round(vysl.komfortSazba * 2.5 / 10) * 10} step={10} value={simSazba || vysl.zdravaSazba} onChange={e => setSimSazba(Number(e.target.value))} style={{ "--thumb": simSazba && simSazba < vysl.minSazba ? "#E0304A" : "#7AB830" } as any} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "rgba(240,237,232,.28)", marginTop: 3 }}>
                    <span>min: {fmt(vysl.minSazba)} Kč/h</span>
                    <span>zdravá: {fmt(vysl.zdravaSazba)} Kč/h</span>
                    <span>rozvojová: {fmt(vysl.komfortSazba)} Kč/h</span>
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: "rgba(240,237,232,.6)" }}>Pracovních dní v týdnu</span>
                    <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "var(--ca)" }}>{simDny || cas.dnyTydne} dní</span>
                  </div>
                  <input type="range" min={1} max={7} step={1} value={simDny || cas.dnyTydne} onChange={e => setSimDny(Number(e.target.value))} style={{ "--thumb": "var(--ca)" } as any} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: "rgba(240,237,232,.6)" }}>Hodin denně v práci</span>
                    <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "var(--or)" }}>{simHod || cas.hodinyDenne} h</span>
                  </div>
                  <input type="range" min={2} max={14} step={1} value={simHod || cas.hodinyDenne} onChange={e => setSimHod(Number(e.target.value))} style={{ "--thumb": "var(--or)" } as any} />
                </div>
                {simVysl && (
                  <div>
                    <div style={{ background: "rgba(255,255,255,.04)", borderRadius: 6, padding: "13px 15px", marginBottom: 10 }}>
                      <p style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(240,237,232,.28)", margin: "0 0 10px" }}>
                        K pokrytí všech nákladů ({fmt(vysl.celkMesicVcOdvodu)} Kč/měs.) stačí pracovat:
                      </p>
                      {simVysl.staci ? (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                          {[
                            { l: "Dní v měsíci", v: `${simVysl.dniNaKrytí} dní`, c: simVysl.dniNaKrytí > 20 ? "#E0304A" : simVysl.dniNaKrytí > 15 ? "#F58A00" : "#7AB830" },
                            { l: "Dní v týdnu", v: `${simVysl.dniTydneNaKrytí} dní`, c: simVysl.dniTydneNaKrytí > 5.5 ? "#E0304A" : simVysl.dniTydneNaKrytí > 4 ? "#F58A00" : "#7AB830" },
                            { l: "Hodin denně", v: `${simVysl.hodDenneNaKrytí} h`, c: simVysl.hodDenneNaKrytí > 10 ? "#E0304A" : simVysl.hodDenneNaKrytí > 7 ? "#F58A00" : "#7AB830" },
                          ].map(s => (
                            <div key={s.l} style={{ textAlign: "center", background: "rgba(255,255,255,.05)", borderRadius: 5, padding: "9px 5px" }}>
                              <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(.9rem,2vw,1.1rem)", color: s.c, margin: "0 0 2px" }}>{s.v}</p>
                              <p style={{ fontSize: 9.5, color: "rgba(240,237,232,.32)", margin: 0 }}>{s.l}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div style={{ background: "rgba(224,48,74,.18)", border: "1px solid rgba(224,48,74,.35)", borderRadius: 5, padding: "10px 12px" }}>
                          <p style={{ fontSize: 13, color: "#ff7080", margin: 0, lineHeight: 1.6 }}>
                            ⚠️ Ani při plném pracovním měsíci ({simDny || cas.dnyTydne} dní/týden, {simHod || cas.hodinyDenne} h/den) tato sazba nepokryje náklady. Chybí <strong>{fmt(Math.abs(simVysl.prebytek))} Kč/měsíc</strong>.
                          </p>
                        </div>
                      )}
                      {simVysl.staci && <p style={{ fontSize: 11, color: "rgba(240,237,232,.28)", margin: "8px 0 0" }}>Zbyde {simVysl.volneDniTydne} dní/týden volna (z Vašich {simDny || cas.dnyTydne} prac. dní)</p>}
                    </div>
                    <div style={{ background: "rgba(255,255,255,.04)", borderRadius: 6, padding: "13px 15px" }}>
                      <p style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(240,237,232,.28)", margin: "0 0 10px" }}>
                        Při plném pracovním měsíci ({simDny || cas.dnyTydne} dní/týden, {simHod || cas.hodinyDenne} h/den = {simVysl.fakturMesic} fakt. h/měs.):
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                        <div style={{ textAlign: "center", background: "rgba(255,255,255,.05)", borderRadius: 5, padding: "10px 6px" }}>
                          <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(.95rem,2.5vw,1.2rem)", color: "rgba(240,237,232,.8)", margin: "0 0 3px" }}>{fmt(simVysl.prijem)} Kč</p>
                          <p style={{ fontSize: 10, color: "rgba(240,237,232,.32)", margin: 0 }}>Měsíční hrubý příjem</p>
                        </div>
                        <div style={{ textAlign: "center", background: "rgba(255,255,255,.05)", borderRadius: 5, padding: "10px 6px" }}>
                          <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(.95rem,2.5vw,1.2rem)", color: simVysl.prebytek >= 0 ? "#7AB830" : "#E0304A", margin: "0 0 3px" }}>{simVysl.prebytek >= 0 ? "+" : ""}{fmt(simVysl.prebytek)} Kč</p>
                          <p style={{ fontSize: 10, color: "rgba(240,237,232,.32)", margin: 0 }}>Disponibilní zůstatek / rezerva</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="kalk-card" style={{ background: "var(--cl1)", border: "1px solid var(--ln)" }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: "var(--ink)", margin: "0 0 6px" }}>O výpočtu</p>
                <p style={{ fontSize: 12, lineHeight: 1.7, color: "var(--dim)", margin: 0 }}>
                  Výpočet vychází z veřejně dostupných parametrů OSVČ pro rok 2026 a slouží jako orientační ekonomický model. Výstupy nemohou zachytit veškeré individuální daňové úlevy, plátcovství DPH, sezónní výkyvy ani souběhy různých typů příjmů. Nenahrazuje účetní či daňové poradenství.
                </p>
              </div>

              <button onClick={() => { setKrok(1); setSimSazba(null); setSimDny(null); setSimHod(null); try { localStorage.removeItem('verno_kalk_v5') } catch (e) { } scrollToTabBar() }}
                style={{ width: "100%", padding: "13px", background: "transparent", color: "var(--ink)", border: "1.5px solid var(--ln)", borderRadius: 3, fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
                ← Resetovat data a začít znovu
              </button>
              <p style={{ fontSize: 11, color: "var(--dim)", marginTop: 12, lineHeight: 1.7, textAlign: "center" }}>
                Tento ekonomický model vychází z veřejně dostupných legislativních parametrů MPSV a Finanční správy ČR platných pro rok 2026. Výstupy mají informativní charakter a zohledňují modelový průměr. Pro individuální daňové plánování doporučujeme konzultaci s certifikovaným účetním či daňovým poradcem.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        :root {
          --cl: #F0EDE8; --cl1: #EAE5DC; --cl2: #E2DCD1;
          --ink: #191714; --inks: #3A3630; --dim: #7A7268; --deep: #0F0E13;
          --oc: #A87DB8; --ca: #009AC4; --or: #F58A00; --rd: #E0304A; --gn: #7AB830;
          --ln: rgba(25,23,20,.09); --ls: rgba(25,23,20,.05);
        }
        .kalk-card { background: #fff; border: 1px solid var(--ln); border-radius: 8px; padding: clamp(18px,3vw,28px); margin-bottom: 14px; }
        .kalk-irow { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }
        @media(max-width:500px){ .kalk-irow { grid-template-columns: 1fr; } }
        .kalk-field { margin-bottom: 14px; }
        .kalk-fl { display: flex; align-items: center; gap: 6px; font-family: 'Syne',sans-serif; font-weight: 600; font-size: 13px; color: var(--ink); margin-bottom: 5px; }
        .kalk-fh { font-size: 11.5px; color: var(--dim); margin-top: 3px; line-height: 1.5; }
        .kalk-iw { position: relative; }
        .kalk-iw input { width: 100%; padding: 11px 44px 11px 12px; border: 1.5px solid rgba(25,23,20,.12); border-radius: 3px; font-family: 'DM Sans'; font-size: 15px; color: var(--ink); background: var(--cl); outline: none; transition: border-color .2s; }
        .kalk-iw input:focus { border-color: var(--oc); background: #fff; }
        .kalk-sfx { position: absolute; right: 11px; top: 50%; transform: translateY(-50%); font-size: 12px; color: var(--dim); pointer-events: none; }
        .kalk-tip { display: inline-flex; align-items: center; justify-content: center; width: 17px; height: 17px; border-radius: 50%; background: rgba(25,23,20,.1); font-size: 9px; font-weight: 700; color: var(--dim); cursor: help; flex-shrink: 0; position: relative; vertical-align: middle; user-select: none; }
        .kalk-jtip-react { display: block; background: #111; color: #f0ede8; font-size: 12px; line-height: 1.6; padding: 10px 14px; border-radius: 6px; white-space: pre-wrap; width: 240px; max-width: 90vw; box-shadow: 0 8px 32px rgba(0,0,0,.5); font-family: 'DM Sans',sans-serif; font-weight: 400; }
        .kalk-atag { display: inline-flex; align-items: center; gap: 4px; background: rgba(168,125,184,.12); border: 1px solid rgba(168,125,184,.22); border-radius: 20px; padding: 2px 9px; font-size: 10.5px; color: var(--oc); font-weight: 500; margin-left: 6px; }
        .kalk-acc-h { display: flex; justify-content: space-between; align-items: center; padding: 13px 0; cursor: pointer; border-bottom: 1px solid var(--ln); user-select: none; }
        .kalk-acc-t { font-family: 'Syne',sans-serif; font-weight: 700; font-size: 13.5px; color: var(--ink); display: flex; align-items: center; gap: 8px; transition: color .2s; }
        .kalk-acc-h:hover .kalk-acc-t { color: var(--oc); }
        .kalk-acc-s { font-size: 12px; color: var(--oc); font-weight: 600; margin-right: 8px; }
        .kalk-acc-i { font-size: 15px; color: var(--dim); transition: transform .25s; }
        .kalk-info { background: var(--cl1); border-left: 3px solid var(--oc); border-radius: 0 5px 5px 0; padding: 11px 15px; margin: 10px 0; font-size: 13px; line-height: 1.65; color: var(--inks); }
        .kalk-warn { background: rgba(224,48,74,.07); border-left: 3px solid var(--rd); border-radius: 0 5px 5px 0; padding: 11px 15px; margin: 10px 0; font-size: 13px; line-height: 1.65; color: #b02030; }
        .kalk-good { background: rgba(122,184,48,.08); border-left: 3px solid var(--gn); border-radius: 0 5px 5px 0; padding: 11px 15px; margin: 10px 0; font-size: 13px; line-height: 1.65; color: #4a7010; }
        .kalk-srow { margin-bottom: 20px; }
        .kalk-sh { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
        .kalk-sl { font-family: 'Syne',sans-serif; font-weight: 600; font-size: 13.5px; color: var(--ink); display: flex; align-items: center; gap: 6px; }
        .kalk-sv { font-family: 'Syne',sans-serif; font-weight: 700; font-size: 15px; }
        .kalk-sm { display: flex; justify-content: space-between; margin-top: 4px; }
        .kalk-smk { font-size: 10px; color: var(--dim); }
        .kalk-btn { width: 100%; padding: 16px; background: var(--ink); color: #F0EDE8; border: none; border-radius: 3px; font-family: 'Syne',sans-serif; font-weight: 700; font-size: 15px; cursor: pointer; transition: background .2s; margin-top: 6px; }
        .kalk-btn:hover { background: #2e2b26; }
        .kalk-btnb { padding: 13px 20px; background: transparent; color: var(--ink); border: 1.5px solid var(--ln); border-radius: 3px; font-family: 'Syne',sans-serif; font-weight: 600; font-size: 13px; cursor: pointer; }
        .kalk-btnb:hover { background: var(--cl1); }
        .kalk-shdr { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 20px; }
        .kalk-snum { width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .kalk-snum span { font-family: 'Syne',sans-serif; font-weight: 800; font-size: 16px; color: #fff; }
        .kalk-sh2 { font-family: 'Syne',sans-serif; font-weight: 800; font-size: clamp(1.05rem,2.5vw,1.35rem); color: var(--ink); margin: 0 0 3px; letter-spacing: -.03em; }
        .kalk-ssub { font-size: 13px; color: var(--dim); margin: 0; line-height: 1.5; }
        @media(max-width:600px){ .kalk-res3 { grid-template-columns: 1fr !important; } }
        @media(max-width:500px){ .kalk-obory-grid { grid-template-columns: 1fr !important; } }
        input[type=range] { -webkit-appearance: none; appearance: none; width: 100%; height: 4px; border-radius: 2px; background: rgba(25,23,20,.15); outline: none; cursor: pointer; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: var(--thumb, var(--oc)); cursor: pointer; border: 2.5px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,.22); transition: transform .15s; }
        input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.18); }
        input[type=number] { -moz-appearance: textfield; }
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; }
      `}</style>

    </>
  )
}
