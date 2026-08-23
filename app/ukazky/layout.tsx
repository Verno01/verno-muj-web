import type { ReactNode } from 'react'

export default function ShowcaseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="showcaseFrame">
      <style>{`
        .showcaseFrame{--sw-ink:#111;--sw-paper:#f6f4ee;--sw-line:rgba(17,17,17,.18);font-family:Arial,Helvetica,sans-serif;color:var(--sw-ink)}
        .showcaseFrame *{box-sizing:border-box}
        .showcaseFrame .plbDemo,.showcaseFrame .asg3Demo,.showcaseFrame .gh5Demo,.showcaseFrame .n5Demo,.showcaseFrame .br6Demo,.showcaseFrame .ft2Demo{display:none!important}
        .swShowcaseTop{position:relative;z-index:500;background:#111;color:#fff;border-bottom:1px solid #2c2c2c}
        .swShowcaseTopInner{width:min(1380px,calc(100% - 40px));min-height:68px;margin:0 auto;display:grid;grid-template-columns:auto minmax(300px,1fr) auto;align-items:center;gap:28px}
        .swShowcaseBrand{font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
        .swShowcaseBrand strong{color:#fff}.swShowcaseBrand span{color:#8f8f8f;margin-left:8px}
        .swShowcaseExplain{font-size:12px;line-height:1.45;color:#c8c8c8;max-width:760px}
        .swShowcaseExplain strong{color:#fff;font-weight:700}
        .swShowcaseActions{display:flex;align-items:center;gap:8px;white-space:nowrap}
        .swShowcaseActions a{min-height:36px;padding:0 12px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none!important;font-size:10px;font-weight:900;border:1px solid #555;color:#fff!important}
        .swShowcaseActions a:last-child{background:#fff;color:#111!important;border-color:#fff}
        .swShowcaseEnd{background:var(--sw-paper);border-top:1px solid #111;padding:72px 0 64px}
        .swShowcaseEndInner{width:min(1180px,calc(100% - 40px));margin:0 auto}
        .swShowcaseEndLabel{font-size:9px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px;color:#666}
        .swShowcaseEndHead{display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;align-items:end;padding-bottom:32px;border-bottom:1px solid var(--sw-line)}
        .swShowcaseEnd h2{font-size:clamp(42px,5.2vw,72px);font-weight:500;letter-spacing:-.055em;line-height:.92;margin:0;max-width:620px}
        .swShowcaseEndLead{font-size:15px;line-height:1.62;color:#4f4f4f;margin:0;max-width:620px}
        .swShowcaseEndLead strong{color:#111}
        .swShowcaseValues{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--sw-line)}
        .swShowcaseValue{padding:26px 30px 28px 0;border-right:1px solid var(--sw-line)}
        .swShowcaseValue+.swShowcaseValue{padding-left:30px}.swShowcaseValue:last-child{border-right:0}
        .swShowcaseValue strong{display:block;font-size:14px;margin-bottom:8px}
        .swShowcaseValue p{font-size:11.5px;line-height:1.55;color:#626262;margin:0;max-width:320px}
        .swShowcaseBottom{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;padding-top:28px}
        .swShowcaseNote{font-size:10.5px;line-height:1.55;color:#707070;max-width:720px;margin:0}
        .swShowcaseCta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end}
        .swShowcaseCta a{min-height:42px;padding:0 15px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none!important;font-size:10.5px;font-weight:900;border:1px solid #111;color:#111!important}
        .swShowcaseCta a:first-child{background:#111;color:#fff!important}
        @media(max-width:980px){.swShowcaseTopInner{grid-template-columns:auto 1fr}.swShowcaseExplain{grid-column:1/-1;grid-row:2;padding-bottom:12px}.swShowcaseActions{grid-column:2;grid-row:1;justify-self:end}.swShowcaseEndHead{grid-template-columns:1fr;gap:22px}.swShowcaseValues{grid-template-columns:1fr 1fr}.swShowcaseValue:nth-child(2){border-right:0}.swShowcaseValue:last-child{grid-column:1/-1;border-top:1px solid var(--sw-line);padding-left:0}.swShowcaseBottom{grid-template-columns:1fr}}
        @media(max-width:680px){.swShowcaseTopInner{width:min(100% - 24px,1380px);display:flex;flex-wrap:wrap;gap:8px 14px;padding:10px 0 12px}.swShowcaseBrand{width:100%;font-size:8.5px}.swShowcaseExplain{order:2;width:100%;font-size:10.5px}.swShowcaseActions{order:3;width:100%;justify-content:flex-start}.swShowcaseActions a{min-height:32px;font-size:9px}.swShowcaseEnd{padding:54px 0 48px}.swShowcaseEndInner{width:min(100% - 28px,1180px)}.swShowcaseEnd h2{font-size:42px}.swShowcaseEndLead{font-size:13px}.swShowcaseValues{grid-template-columns:1fr}.swShowcaseValue,.swShowcaseValue+.swShowcaseValue,.swShowcaseValue:last-child{grid-column:auto;border-right:0;border-top:1px solid var(--sw-line);padding:20px 0}.swShowcaseValue:first-child{border-top:0}.swShowcaseBottom{gap:20px}.swShowcaseCta{justify-content:flex-start}.swShowcaseCta a{width:100%}}
      `}</style>

      <aside className="swShowcaseTop" aria-label="Informace k ukázkovému konceptu">
        <div className="swShowcaseTopInner">
          <div className="swShowcaseBrand"><strong>SPUSTWEB.CZ</strong><span>UKÁZKOVÝ KONCEPT</span></div>
          <div className="swShowcaseExplain"><strong>Jedna z možností, jak může nový web vypadat.</strong> Nejde o šablonu ani skutečnou firmu. Váš web navrhneme podle vašeho podnikání, nabídky a toho, co potřebují vaši zákazníci.</div>
          <div className="swShowcaseActions"><a href="/">Zpět na SpustWeb</a><a href="/#kontakt">Chci vlastní web</a></div>
        </div>
      </aside>

      {children}

      <aside className="swShowcaseEnd" aria-label="Jak vznikne váš web">
        <div className="swShowcaseEndInner">
          <div className="swShowcaseEndLabel">KONEC UKÁZKOVÉHO KONCEPTU · SPUSTWEB.CZ</div>
          <div className="swShowcaseEndHead">
            <h2>Váš web nebude kopie této stránky.</h2>
            <p className="swShowcaseEndLead">Tato ukázka představuje <strong>jeden možný směr</strong>. U vašeho webu navrhneme obsah, strukturu, vzhled i způsob kontaktu podle konkrétní firmy — tak, aby návštěvník rychle našel to, kvůli čemu přišel, a věděl, co má udělat dál.</p>
          </div>

          <div className="swShowcaseValues">
            <div className="swShowcaseValue"><strong>Obsah podle vašeho podnikání</strong><p>Služby, ceny, lokalita, reference, důležité podmínky i odpovědi na otázky vybíráme podle toho, co skutečně nabízíte a co vaši zákazníci potřebují vědět.</p></div>
            <div className="swShowcaseValue"><strong>Vzhled podle vás</strong><p>Barvy, typografie, fotografie, rozložení i celkový charakter webu nevycházejí z jedné univerzální šablony. Návrh přizpůsobíme oboru i tomu, jak chcete působit.</p></div>
            <div className="swShowcaseValue"><strong>Jen funkce, které dávají smysl</strong><p>Kontakty, formulář, mapa, ceník nebo další prvky použijeme tam, kde mají pro váš web hodnotu a kde je můžeme v domluveném rozsahu spolehlivě dodat.</p></div>
          </div>

          <div className="swShowcaseBottom">
            <p className="swShowcaseNote">Názvy firem, osoby, ceny, reference a část fotografií v ukázkách jsou fiktivní nebo ilustrační. Kontaktní údaje vedou na SpustWeb.cz a ukázkové formuláře se neodesílají.</p>
            <div className="swShowcaseCta"><a href="/#kontakt">Chci probrat svůj web</a><a href="tel:+420705911941">+420 705 911 941</a><a href="mailto:kontakt@spustweb.cz">kontakt@spustweb.cz</a></div>
          </div>
        </div>
      </aside>
    </div>
  )
}
