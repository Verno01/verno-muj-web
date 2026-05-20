export default function LegalPage() {
  const titles: Record<string,string> = {
    'obchodni-podminky': 'Obchodní podmínky',
    'ochrana-osobnich-udaju': 'Ochrana osobních údajů',
    'cookies': 'Cookies',
  }
  return (
    <div style={{ paddingTop: 'clamp(110px,14vw,160px)', paddingBottom: 'clamp(80px,10vw,120px)' }}>
      <div className="inner">
        <p className="eyebrow" style={{ marginBottom: 24 }}>Právní informace</p>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(2rem,4vw,3rem)', fontWeight:800, letterSpacing:'-.04em', color:'var(--ink)', margin:'0 0 32px' }}>
          Stránka se připravuje
        </h1>
        <p style={{ fontSize:'1rem', lineHeight:1.82, color:'var(--ink-s)', maxWidth:560 }}>
          Tato stránka bude obsahovat aktuální právní text. Kontaktujte nás na info@verno.cz.
        </p>
      </div>
    </div>
  )
}
