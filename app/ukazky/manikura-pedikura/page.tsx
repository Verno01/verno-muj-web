import type { Metadata } from 'next'
import { ArrowRight, CalendarDays, Check, Clock3, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ukázkový web pro manikúru a pedikúru | SpustWeb.cz',
  description: 'Ukázka webu pro manikúru a pedikúru: ceník, ukázky práce, hygiena, studio, provozovna a online rezervace.',
  alternates: { canonical: 'https://spustweb.cz/ukazky/manikura-pedikura/' },
  robots: { index: true, follow: true },
}

const manicure = [
  ['Manikúra', '590 Kč', 'Úprava nehtů a kůžičky, závěrečná péče.'],
  ['Gel lak', '890 Kč', 'Manikúra a gel lak v jedné barvě.'],
  ['Zpevnění přírodních nehtů', '1 090 Kč', 'Zpevnění gelem nebo builder bází.'],
  ['Doplnění gelových nehtů', '990 Kč', 'Doplnění odrostu a nová barevná úprava.'],
]

const pedicure = [
  ['Přístrojová pedikúra', '990 Kč', 'Nehty, chodidla, ztvrdlá kůže a závěrečná péče.'],
  ['Pedikúra + gel lak', '1 390 Kč', 'Kompletní pedikúra a gel lak na nehtech.'],
  ['Odstranění gel laku', '250 Kč', 'Odstranění materiálu a základní úprava nehtů.'],
]

const work = [
  ['https://images.pexels.com/photos/13038494/pexels-photo-13038494.jpeg?auto=compress&cs=tinysrgb&w=1400', 'Hotová francouzská manikúra s bílými špičkami'],
  ['https://images.pexels.com/photos/5871311/pexels-photo-5871311.jpeg?auto=compress&cs=tinysrgb&w=1400', 'Barevná hotová manikúra na růžovém pozadí'],
  ['https://images.pexels.com/photos/5871817/pexels-photo-5871817.jpeg?auto=compress&cs=tinysrgb&w=1400', 'Hotový barevný nail art na zeleném pozadí'],
  ['https://images.pexels.com/photos/5083710/pexels-photo-5083710.jpeg?auto=compress&cs=tinysrgb&w=1400', 'Oranžová manikúra s prsteny'],
]

export default function NailShowcase() {
  return (
    <div className="n3" id="top">
      <style>{`
        body:has(.n3) > .verno-nav-shell,body:has(.n3) > .footer{display:none!important}
        body:has(.n3) main{padding:0!important;margin:0!important}
        body:has(.n3){background:#fff!important}
        .n3{--ink:#101010;--paper:#fff;--pink:#ff6680;--lime:#d9ff69;--blue:#ccecf2;--cream:#f6f2eb;--line:#d7d7d2;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--paper)}
        .n3 *{box-sizing:border-box}.n3 a{color:inherit;text-decoration:none}.n3 img{display:block;width:100%}.n3Wrap{width:min(1240px,calc(100% - 56px));margin:0 auto}
        .n3Demo{min-height:24px;padding:5px 12px;background:#111;color:#ddd;text-align:center;font-size:9px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.n3Demo a{color:#fff!important;text-decoration:underline;text-underline-offset:3px;margin-left:8px}
        .n3Nav{border-bottom:1px solid #111;background:#fff}.n3NavInner{height:66px;display:flex;align-items:center;justify-content:space-between;gap:24px}.n3Brand{font-size:20px;font-weight:900;letter-spacing:-.05em}.n3NavLinks{display:flex;align-items:center;gap:28px;font-size:11px;font-weight:800}.n3Book{background:#111;color:#fff!important;padding:12px 15px;display:inline-flex;align-items:center;gap:7px}

        .n3Hero{background:var(--cream);min-height:720px;overflow:hidden}.n3HeroGrid{display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:110px 440px 120px;gap:14px;height:calc(100svh - 90px);min-height:720px;max-height:860px;padding:26px 0}.n3HeroTitle{grid-column:1/9;grid-row:1/3;z-index:3;align-self:center;pointer-events:none}.n3HeroMeta{font-size:10px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;margin-bottom:22px}.n3Hero h1{font-size:clamp(78px,10vw,146px);font-weight:500;letter-spacing:-.09em;line-height:.73;margin:0;max-width:900px}.n3HeroText{grid-column:1/5;grid-row:3;align-self:end;font-size:15px;line-height:1.55;max-width:450px}.n3HeroText p{margin:0 0 18px}.n3HeroText a{font-size:11px;font-weight:900;border-bottom:1px solid #111;padding-bottom:4px}.n3HeroA{grid-column:7/13;grid-row:1/4;overflow:hidden;position:relative}.n3HeroA img{height:100%;object-fit:cover}.n3HeroB{grid-column:5/8;grid-row:2/4;overflow:hidden;border:10px solid var(--cream);z-index:4}.n3HeroB img{height:100%;object-fit:cover}.n3HeroSticker{grid-column:10/13;grid-row:3;z-index:5;background:var(--lime);align-self:end;justify-self:end;width:150px;height:74px;display:flex;align-items:center;justify-content:center;text-align:center;font-size:10px;font-weight:900;transform:rotate(-3deg)}

        .n3InfoBar{border-top:1px solid #111;border-bottom:1px solid #111}.n3Info{min-height:62px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;font-size:11px}.n3Info span{display:flex;align-items:center;gap:7px}

        .n3Menu{padding:86px 0 96px}.n3MenuIntro{display:flex;align-items:end;justify-content:space-between;gap:50px;margin-bottom:46px}.n3MenuIntro h2{font-size:clamp(54px,6.4vw,88px);line-height:.84;letter-spacing:-.075em;font-weight:500;margin:0}.n3MenuIntro p{max-width:460px;font-size:14px;line-height:1.6;color:#555;margin:0}.n3MenuGrid{display:grid;grid-template-columns:1fr 1fr;gap:60px}.n3MenuCol{border-top:4px solid #111}.n3MenuCol h3{font-size:26px;margin:18px 0 12px}.n3Price{display:grid;grid-template-columns:1fr auto;gap:9px 24px;padding:18px 0;border-top:1px solid var(--line)}.n3Price strong{font-size:16px}.n3Price b{font-size:14px}.n3Price p{grid-column:1/-1;margin:0;font-size:12px;line-height:1.5;color:#666;max-width:520px}.n3MenuNote{margin-top:26px;font-size:11px;color:#666}

        .n3Work{padding:0 0 100px;overflow:hidden}.n3WorkTitle{font-size:clamp(62px,8vw,112px);line-height:.8;letter-spacing:-.085em;font-weight:500;margin:0 0 32px}.n3WorkStrip{display:grid;grid-template-columns:1.35fr .9fr 1.05fr .8fr;gap:10px;align-items:end}.n3WorkStrip figure{margin:0;overflow:hidden;background:#eee;position:relative}.n3WorkStrip figure:nth-child(1){height:520px}.n3WorkStrip figure:nth-child(2){height:390px}.n3WorkStrip figure:nth-child(3){height:470px}.n3WorkStrip figure:nth-child(4){height:340px}.n3WorkStrip img{height:100%;object-fit:cover}.n3WorkStrip figcaption{position:absolute;left:10px;bottom:10px;background:#fff;padding:6px 8px;font-size:9px;font-weight:900}.n3WorkFoot{display:flex;justify-content:space-between;gap:30px;margin-top:18px;font-size:11px;color:#666}.n3WorkFoot strong{color:#111}

        .n3Visit{background:#111;color:#fff;padding:78px 0}.n3VisitGrid{display:grid;grid-template-columns:1fr 1.15fr;gap:80px;align-items:start}.n3Visit h2{font-size:clamp(50px,6vw,82px);font-weight:500;letter-spacing:-.07em;line-height:.86;margin:0}.n3VisitList{border-top:1px solid #555}.n3VisitRow{display:grid;grid-template-columns:34px 1fr;gap:18px;padding:19px 0;border-bottom:1px solid #444}.n3VisitRow span{font-size:11px;color:#aaa}.n3VisitRow strong{font-size:14px;display:block;margin-bottom:5px}.n3VisitRow p{font-size:12px;line-height:1.5;color:#bbb;margin:0}.n3Hygiene{margin-top:34px;background:var(--lime);color:#111;padding:22px 24px;display:grid;grid-template-columns:150px 1fr 1fr;gap:24px;align-items:start}.n3Hygiene strong{font-size:14px}.n3Hygiene span{font-size:11px;line-height:1.5}

        .n3Studio{background:var(--blue);padding:0}.n3StudioImage{height:620px;overflow:hidden;position:relative}.n3StudioImage img{height:100%;object-fit:cover}.n3StudioCard{position:absolute;left:max(28px,calc((100% - 1240px)/2));bottom:36px;background:#fff;width:min(430px,calc(100% - 56px));padding:28px}.n3StudioCard h2{font-size:38px;letter-spacing:-.055em;margin:0 0 14px}.n3StudioCard p{font-size:13px;line-height:1.6;color:#555;margin:0}.n3StudioData{margin-top:18px;padding-top:16px;border-top:1px solid #111;display:grid;gap:8px;font-size:11px}.n3StudioData span{display:flex;align-items:center;gap:7px}

        .n3BookSection{background:var(--pink);padding:88px 0}.n3BookTop{display:flex;align-items:end;justify-content:space-between;gap:50px;margin-bottom:38px}.n3BookTop h2{font-size:clamp(58px,7.2vw,100px);font-weight:500;letter-spacing:-.08em;line-height:.8;margin:0}.n3BookTop p{max-width:430px;font-size:14px;line-height:1.6;margin:0}.n3BookFlow{background:#fff;border:1px solid #111;display:grid;grid-template-columns:1.15fr .85fr .85fr auto}.n3BookCell{padding:22px;border-right:1px solid #111;min-height:96px}.n3BookCell small{display:block;font-size:9px;text-transform:uppercase;letter-spacing:.1em;color:#666;margin-bottom:10px}.n3BookCell strong{font-size:15px}.n3BookButton{border:0;background:#111;color:#fff;padding:0 28px;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center;gap:8px}.n3BookHint{margin-top:12px;font-size:9px;color:#6d3942}

        .n3Footer{background:#111;color:#fff;padding:44px 0}.n3FooterGrid{display:grid;grid-template-columns:1fr 1fr auto;gap:50px;align-items:end}.n3Footer h3{font-size:28px;margin:0 0 8px}.n3Footer p,.n3Footer div{font-size:11px;line-height:1.6;color:#aaa}.n3Footer strong{color:#fff}.n3FooterCta{background:var(--lime);color:#111!important;padding:12px 14px;font-weight:900;white-space:nowrap}

        @media(max-width:980px){.n3HeroGrid{height:auto;max-height:none;min-height:760px;grid-template-rows:140px 420px 140px}.n3HeroTitle{grid-column:1/11}.n3HeroA{grid-column:6/13}.n3HeroB{grid-column:4/8}.n3MenuGrid,.n3VisitGrid{grid-template-columns:1fr}.n3WorkStrip{grid-template-columns:1fr 1fr}.n3WorkStrip figure:nth-child(n){height:380px}.n3Hygiene{grid-template-columns:1fr 1fr}.n3Hygiene strong{grid-column:1/-1}.n3BookFlow{grid-template-columns:1fr 1fr}.n3BookCell:nth-child(2){border-right:0}.n3BookCell{border-bottom:1px solid #111}.n3BookButton{min-height:58px;grid-column:1/-1}.n3FooterGrid{grid-template-columns:1fr 1fr}.n3FooterCta{grid-column:1/-1;justify-self:start}}
        @media(max-width:680px){.n3Wrap{width:min(100% - 28px,1240px)}.n3Demo{font-size:7.5px}.n3NavLinks>a:not(.n3Book){display:none}.n3NavInner{height:58px}.n3HeroGrid{grid-template-rows:auto 380px auto;min-height:0;padding:34px 0 24px}.n3HeroTitle{grid-column:1/-1;grid-row:1;padding-bottom:26px}.n3Hero h1{font-size:clamp(68px,21vw,96px)}.n3HeroA{grid-column:2/13;grid-row:2}.n3HeroB{grid-column:1/6;grid-row:2;height:190px;align-self:end}.n3HeroText{grid-column:1/-1;grid-row:3;padding-top:24px}.n3HeroSticker{grid-column:8/13;grid-row:2;width:120px;height:62px}.n3Info{padding:14px 0;justify-content:flex-start}.n3Menu{padding:62px 0}.n3MenuIntro,.n3BookTop{display:block}.n3MenuIntro p,.n3BookTop p{margin-top:20px}.n3MenuGrid{gap:42px}.n3Work{padding-bottom:68px}.n3WorkStrip{grid-template-columns:1fr 1fr}.n3WorkStrip figure:nth-child(n){height:250px}.n3WorkStrip figure:nth-child(1){grid-column:1/-1;height:370px}.n3WorkFoot{display:block}.n3WorkFoot span{display:block;margin-top:8px}.n3Visit{padding:62px 0}.n3Hygiene{grid-template-columns:1fr}.n3StudioImage{height:560px}.n3StudioCard{left:14px;bottom:18px;width:calc(100% - 28px)}.n3BookSection{padding:64px 0}.n3BookFlow{grid-template-columns:1fr}.n3BookCell{border-right:0}.n3FooterGrid{grid-template-columns:1fr;gap:24px}}
      `}</style>

      <div className="n3Demo">UKÁZKOVÝ KONCEPT SPUSTWEB.CZ · NEJDE O SKUTEČNOU FIRMU <a href="/">ZPĚT NA SPUSTWEB.CZ</a></div>
      <nav className="n3Nav" aria-label="Navigace ukázkového studia"><div className="n3Wrap n3NavInner"><a className="n3Brand" href="#top">STUDIO LÍNA</a><div className="n3NavLinks"><a href="#cenik">Ceník</a><a href="#prace">Práce</a><a href="#studio">Studio</a><a className="n3Book" href="#rezervace">Rezervace <CalendarDays size={13}/></a></div></div></nav>

      <header className="n3Hero"><div className="n3Wrap n3HeroGrid"><div className="n3HeroTitle"><div className="n3HeroMeta">MANIKÚRA · PEDIKÚRA · ČESKÉ BUDĚJOVICE</div><h1>Nehty,<br/>které jsou<br/>vidět.</h1></div><figure className="n3HeroA"><img src="https://images.pexels.com/photos/5871311/pexels-photo-5871311.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Hotová barevná manikúra"/></figure><figure className="n3HeroB"><img src="https://images.pexels.com/photos/13038494/pexels-photo-13038494.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Hotová francouzská manikúra"/></figure><div className="n3HeroText"><p>Manikúra, gel lak, zpevnění přírodních nehtů a přístrojová pedikúra. Návštěvy pouze na objednání.</p><a href="#rezervace">Vybrat termín →</a></div><div className="n3HeroSticker">ONLINE REZERVACE<br/>24 / 7</div></div></header>

      <div className="n3InfoBar"><div className="n3Wrap n3Info"><span><MapPin size={14}/> centrum Českých Budějovic</span><span><Clock3 size={14}/> Po–Pá 9:00–19:00</span><span><Check size={14}/> pouze na objednání</span><span><Phone size={14}/> 777 000 000</span></div></div>

      <section className="n3Menu" id="cenik"><div className="n3Wrap"><div className="n3MenuIntro"><h2>Ceník.</h2><p>Cena je známá předem. Zdobení nebo oprava jednotlivého nehtu se připočítává podle rozsahu.</p></div><div className="n3MenuGrid"><div className="n3MenuCol"><h3>Manikúra</h3>{manicure.map(([name,price,text])=><div className="n3Price" key={name}><strong>{name}</strong><b>{price}</b><p>{text}</p></div>)}</div><div className="n3MenuCol"><h3>Pedikúra</h3>{pedicure.map(([name,price,text])=><div className="n3Price" key={name}><strong>{name}</strong><b>{price}</b><p>{text}</p></div>)}</div></div><div className="n3MenuNote">Nail art od 50 Kč / nehet podle náročnosti. Ceny jsou součástí fiktivního konceptu.</div></div></section>

      <section className="n3Work" id="prace"><div className="n3Wrap"><h2 className="n3WorkTitle">Hotové práce.</h2><div className="n3WorkStrip">{work.map(([src,alt],i)=><figure key={src}><img src={src} alt={alt}/><figcaption>0{i+1}</figcaption></figure>)}</div><div className="n3WorkFoot"><strong>Barva, tvar i zdobení se volí při návštěvě.</strong><span>Ilustrační fotografie z Pexels · nejde o realizace skutečného studia.</span></div></div></section>

      <section className="n3Visit"><div className="n3Wrap"><div className="n3VisitGrid"><h2>Jak probíhá návštěva.</h2><div className="n3VisitList"><div className="n3VisitRow"><span>01</span><div><strong>Výběr úpravy</strong><p>Domluvíme tvar, délku, barvu a případné zdobení.</p></div></div><div className="n3VisitRow"><span>02</span><div><strong>Příprava nehtů</strong><p>Úprava kůžičky a nehtové ploténky podle zvolené služby.</p></div></div><div className="n3VisitRow"><span>03</span><div><strong>Materiál a barva</strong><p>Gel lak, zpevnění nebo modelace podle rezervované služby.</p></div></div><div className="n3VisitRow"><span>04</span><div><strong>Závěrečná péče</strong><p>Kontrola tvaru, olejíček na kůžičku a doporučení domácí péče.</p></div></div></div></div><div className="n3Hygiene"><strong>Hygiena</strong><span>Kovové nástroje se po použití čistí, dezinfikují a sterilizují.</span><span>Jednorázové pilníky a pomůcky se mezi klientkami nepoužívají opakovaně.</span></div></div></section>

      <section className="n3Studio" id="studio"><div className="n3StudioImage"><img src="https://images.pexels.com/photos/36328527/pexels-photo-36328527.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="Interiér moderního menšího nehtového studia"/><div className="n3StudioCard"><h2>Studio Lína.</h2><p>Jedno pracovní místo pro manikúru a samostatné křeslo pro pedikúru. Studio funguje pouze na objednání.</p><div className="n3StudioData"><span><MapPin size={14}/> České Budějovice · centrum</span><span><Clock3 size={14}/> Po–Pá 9:00–19:00</span><span><Phone size={14}/> 777 000 000</span></div></div></div></section>

      <section className="n3BookSection" id="rezervace"><div className="n3Wrap"><div className="n3BookTop"><h2>Rezervace.</h2><p>Vyberte službu, den a čas. Ukázkové rezervační rozhraní není aktivní.</p></div><div className="n3BookFlow"><div className="n3BookCell"><small>Služba</small><strong>Gel lak</strong></div><div className="n3BookCell"><small>Den</small><strong>Úterý 25. 8.</strong></div><div className="n3BookCell"><small>Čas</small><strong>13:00</strong></div><button className="n3BookButton" type="button">Pokračovat <ArrowRight size={13}/></button></div><div className="n3BookHint">Fiktivní studio · rezervace nelze skutečně odeslat.</div></div></section>

      <footer className="n3Footer"><div className="n3Wrap n3FooterGrid"><div><h3>Studio Lína</h3><p>Fiktivní studio vytvořené jako ukázkový koncept.</p></div><div><strong>Manikúra · pedikúra</strong><br/>České Budějovice · Po–Pá 9:00–19:00<br/>777 000 000</div><a className="n3FooterCta" href="/#kontakt">Podobný web pro moje podnikání</a></div></footer>
    </div>
  )
}
