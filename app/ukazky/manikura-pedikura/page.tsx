import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'

const metaDescription = 'Ukázkový návrh prezentačního webu pro manikúru a pedikúru od SpustWeb.cz. Příklad struktury s ceníkem, ukázkami práce, informacemi o studiu a kontaktem.'

export const metadata: Metadata = {
  title: 'Ukázkový web pro manikúru a pedikúru | SpustWeb.cz',
  description: metaDescription,
  alternates: { canonical: 'https://spustweb.cz/ukazky/manikura-pedikura/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://spustweb.cz/ukazky/manikura-pedikura/',
    title: 'Ukázkový web pro manikúru a pedikúru | SpustWeb.cz',
    description: metaDescription,
    images: [{ url: '/og-verno-2.jpg', width: 1200, height: 630, alt: 'SpustWeb.cz – ukázkový web pro manikúru a pedikúru' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ukázkový web pro manikúru a pedikúru | SpustWeb.cz',
    description: metaDescription,
    images: ['/og-verno-2.jpg'],
  },
}

const manicure = [
  ['Manikúra', '590 Kč', 'Úprava nehtů a kůžičky, závěrečná péče.'],
  ['Manikúra + gel lak', '890 Kč', 'Kompletní manikúra a gel lak v jedné barvě.'],
  ['Zpevnění přírodních nehtů', '1 090 Kč', 'Zpevnění přírodních nehtů gelem nebo builder bází.'],
  ['Nová gelová modeláž', '1 290 Kč', 'Modeláž a barevná úprava podle zvolené délky a tvaru.'],
  ['Doplnění gelové modeláže', '990 Kč', 'Doplnění odrostu, úprava tvaru a nová barva.'],
]

const pedicure = [
  ['Přístrojová pedikúra', '990 Kč', 'Úprava nehtů a chodidel, ošetření ztvrdlé kůže a závěrečná péče.'],
  ['Pedikúra + gel lak', '1 390 Kč', 'Přístrojová pedikúra a gel lak na nehtech.'],
  ['Odstranění gel laku', '250 Kč', 'Odstranění materiálu a základní úprava nehtů.'],
]

const work = [
  ['https://images.pexels.com/photos/13038494/pexels-photo-13038494.jpeg?auto=compress&cs=tinysrgb&w=1500', 'Hotová francouzská manikúra s jemným nude základem'],
  ['https://images.pexels.com/photos/5871311/pexels-photo-5871311.jpeg?auto=compress&cs=tinysrgb&w=1400', 'Hotová barevná manikúra v teplých odstínech'],
  ['https://images.pexels.com/photos/5871817/pexels-photo-5871817.jpeg?auto=compress&cs=tinysrgb&w=1400', 'Hotový barevný nail art'],
  ['https://images.pexels.com/photos/5083710/pexels-photo-5083710.jpeg?auto=compress&cs=tinysrgb&w=1400', 'Hotová oranžová manikúra'],
]

export default function NailShowcase() {
  return (
    <div className="n5" id="top">
      <style>{`
        body:has(.n5) > .verno-nav-shell,body:has(.n5) > .footer{display:none!important}
        body:has(.n5) main{padding:0!important;margin:0!important}
        body:has(.n5){background:#fff!important}
        .n5{--ink:#101010;--paper:#fff;--pink:#ff6680;--lime:#d9ff69;--blue:#ccecf2;--cream:#f6f2eb;--line:#d7d7d2;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--paper)}
        .n5 *{box-sizing:border-box}.n5 a{color:inherit;text-decoration:none}.n5 img{display:block;width:100%}.n5Wrap{width:min(1240px,calc(100% - 56px));margin:0 auto}
        .n5Demo{min-height:24px;padding:5px 12px;background:#111;color:#ddd;text-align:center;font-size:9px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.n5Demo a{color:#fff!important;text-decoration:underline;text-underline-offset:3px;margin-left:8px}
        .n5Nav{background:#fff;border-bottom:1px solid #111}.n5NavInner{height:52px;display:flex;align-items:center;justify-content:space-between;gap:24px}.n5Brand{font-size:18px;font-weight:900;letter-spacing:-.05em}.n5NavLinks{display:flex;align-items:center;gap:24px;font-size:10px;font-weight:800}.n5ContactTop{background:#111;color:#fff!important;padding:9px 12px}
        .n5Hero{background:var(--cream);overflow:hidden}.n5HeroGrid{height:calc(100svh - 76px);min-height:620px;max-height:820px;position:relative;display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:1fr 1fr;gap:12px;padding:22px 0 26px}.n5HeroWord{position:absolute;left:0;top:50%;transform:translateY(-54%);z-index:5;font-size:clamp(78px,12.2vw,176px);line-height:.72;letter-spacing:-.095em;font-weight:600;pointer-events:none;max-width:860px}.n5HeroWord span{display:block}.n5HeroWord .n5Pink{color:var(--pink)}.n5HeroMeta{position:absolute;left:0;top:42px;z-index:6;font-size:10px;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.n5HeroA{grid-column:7/13;grid-row:1/3;margin:0;overflow:hidden;background:#ddd}.n5HeroA img{height:100%;object-fit:cover;object-position:center 48%}.n5HeroB{grid-column:5/8;grid-row:2;margin:0 0 12px;overflow:hidden;z-index:6;border:9px solid var(--cream);align-self:end;height:250px}.n5HeroB img{height:100%;object-fit:cover}.n5HeroCopy{position:absolute;left:0;bottom:34px;z-index:7;width:370px;font-size:14px;line-height:1.55}.n5HeroCopy p{margin:0 0 14px}.n5HeroCopy a{font-size:11px;font-weight:900;border-bottom:1px solid #111;padding-bottom:3px}.n5HeroTag{position:absolute;right:18px;bottom:18px;background:var(--lime);z-index:7;padding:13px 16px;font-size:9px;line-height:1.25;font-weight:900;text-align:center;transform:rotate(-2deg)}
        .n5Facts{border-top:1px solid #111;border-bottom:1px solid #111}.n5FactsInner{min-height:58px;display:flex;align-items:center;justify-content:space-between;gap:26px;flex-wrap:wrap;font-size:11px}.n5FactsInner span,.n5FactsInner a{display:flex;align-items:center;gap:7px}
        .n5Menu{padding:78px 0 92px}.n5MenuTop{display:grid;grid-template-columns:.7fr 1.3fr;gap:80px;align-items:end;margin-bottom:44px}.n5MenuTop h2{font-size:clamp(54px,6vw,82px);line-height:.84;letter-spacing:-.075em;font-weight:500;margin:0}.n5MenuTop p{max-width:500px;font-size:14px;line-height:1.6;color:#555;margin:0}.n5MenuGrid{display:grid;grid-template-columns:1fr 1fr;gap:64px}.n5MenuCol{border-top:3px solid #111}.n5MenuCol h3{font-size:25px;margin:16px 0 10px}.n5Price{display:grid;grid-template-columns:1fr auto;gap:8px 22px;padding:17px 0;border-top:1px solid var(--line)}.n5Price strong{font-size:15px}.n5Price b{font-size:14px}.n5Price p{grid-column:1/-1;margin:0;font-size:12px;line-height:1.5;color:#666}.n5MenuNote{margin-top:24px;font-size:11px;color:#666}
        .n5Work{padding:4px 0 96px}.n5WorkHead{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:32px}.n5WorkHead h2{font-size:clamp(60px,7.8vw,108px);line-height:.8;letter-spacing:-.085em;font-weight:500;margin:0}.n5WorkHead p{max-width:420px;font-size:13px;line-height:1.6;color:#666;margin:0}.n5Portfolio{display:grid;grid-template-columns:1.32fr .88fr .88fr;grid-template-rows:300px 250px;gap:10px}.n5Portfolio figure{margin:0;overflow:hidden;background:#eee;position:relative}.n5Portfolio figure:nth-child(1){grid-column:1;grid-row:1/3}.n5Portfolio figure:nth-child(2){grid-column:2;grid-row:1}.n5Portfolio figure:nth-child(3){grid-column:3;grid-row:1/3}.n5Portfolio figure:nth-child(4){grid-column:2;grid-row:2}.n5Portfolio img{height:100%;object-fit:cover}.n5Portfolio figcaption{position:absolute;left:10px;bottom:10px;background:#fff;padding:6px 8px;font-size:9px;font-weight:900}.n5WorkFoot{display:flex;justify-content:space-between;gap:30px;margin-top:16px;font-size:10px;color:#777}
        .n5Hygiene{background:var(--lime);border-top:1px solid #111;border-bottom:1px solid #111}.n5HygieneInner{min-height:78px;display:grid;grid-template-columns:140px 1fr 1fr;gap:28px;align-items:center;font-size:11px;line-height:1.45}.n5HygieneInner strong{font-size:14px}.n5HygieneInner span+span{border-left:1px solid rgba(0,0,0,.28);padding-left:28px}
        .n5Studio{padding:86px 0;background:var(--blue)}.n5StudioTitle{display:flex;align-items:end;justify-content:space-between;gap:40px;margin-bottom:26px}.n5StudioTitle h2{font-size:clamp(54px,6.5vw,88px);line-height:.84;letter-spacing:-.075em;font-weight:500;margin:0}.n5StudioTitle p{max-width:430px;font-size:13px;line-height:1.6;margin:0}.n5StudioPhoto{height:560px;overflow:hidden;background:#ddd}.n5StudioPhoto img{height:100%;object-fit:cover}.n5StudioData{display:grid;grid-template-columns:1.3fr 1fr 1fr 1fr;gap:24px;border-top:1px solid #111;margin-top:18px;padding-top:15px;font-size:11px}
        .n5Contact{padding:74px 0 82px;background:#fff}.n5ContactTopline{display:flex;align-items:end;justify-content:space-between;gap:50px;margin-bottom:30px}.n5ContactTopline h2{font-size:clamp(52px,6.3vw,86px);font-weight:500;letter-spacing:-.075em;line-height:.84;margin:0}.n5ContactTopline p{max-width:430px;font-size:13px;line-height:1.55;margin:0;color:#555}.n5ContactGrid{display:grid;grid-template-columns:1.35fr .65fr;gap:58px;align-items:start}.n5Form{border-top:2px solid #111}.n5Field{display:grid;grid-template-columns:170px 1fr;border-bottom:1px solid #111;min-height:64px}.n5Field label{padding:20px 16px 18px 0;font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.n5Field input,.n5Field select,.n5Field textarea{border:0;background:transparent;padding:17px 0;font:inherit;font-size:13px;outline:none}.n5Field textarea{min-height:110px;resize:vertical}.n5Form button{width:100%;min-height:48px;border:0;background:#111;color:#fff;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.06em}.n5FormNote{font-size:9px;color:#777;margin-top:9px}.n5Direct{border-top:2px solid #111;padding-top:18px}.n5Direct h3{font-size:24px;margin:0 0 18px}.n5Direct a{display:flex;align-items:center;gap:9px;font-size:14px;font-weight:800;padding:13px 0;border-bottom:1px solid var(--line)}.n5Direct p{font-size:11px;line-height:1.55;color:#666;margin:18px 0 0}
        .n5Footer{background:#111;color:#fff;padding:38px 0}.n5FooterGrid{display:grid;grid-template-columns:1.2fr 1fr auto;gap:48px;align-items:center}.n5FooterName{font-size:28px;font-weight:800;letter-spacing:-.05em}.n5FooterText{font-size:10px;line-height:1.6;color:#aaa}.n5FooterText strong{color:#fff}.n5FooterCta{background:var(--lime);color:#111!important;padding:11px 13px;font-size:10px;font-weight:900;white-space:nowrap}
        @media(max-width:980px){.n5HeroGrid{height:auto;min-height:700px}.n5HeroWord{font-size:clamp(76px,14vw,132px)}.n5HeroA{grid-column:6/13}.n5HeroB{grid-column:4/8}.n5MenuTop{grid-template-columns:1fr;gap:24px}.n5MenuGrid,.n5ContactGrid{grid-template-columns:1fr}.n5Portfolio{grid-template-columns:1fr 1fr;grid-template-rows:360px 300px 300px}.n5Portfolio figure:nth-child(1){grid-column:1/2;grid-row:1/3}.n5Portfolio figure:nth-child(2){grid-column:2;grid-row:1}.n5Portfolio figure:nth-child(3){grid-column:2;grid-row:2}.n5Portfolio figure:nth-child(4){grid-column:1/-1;grid-row:3}.n5HygieneInner{grid-template-columns:1fr 1fr}.n5HygieneInner strong{grid-column:1/-1}.n5HygieneInner span+span{border-left:0;padding-left:0}.n5StudioData{grid-template-columns:1fr 1fr}.n5FooterGrid{grid-template-columns:1fr 1fr}.n5FooterCta{grid-column:1/-1;justify-self:start}}
        @media(max-width:680px){.n5Wrap{width:min(100% - 28px,1240px)}.n5Demo{font-size:7.5px}.n5NavLinks>a:not(.n5ContactTop){display:none}.n5HeroGrid{min-height:660px}.n5HeroWord{top:37%;font-size:clamp(70px,22vw,98px)}.n5HeroA{grid-column:3/13}.n5HeroB{grid-column:1/6;height:180px}.n5HeroCopy{width:84%;font-size:13px}.n5FactsInner{padding:12px 0;justify-content:flex-start}.n5Menu{padding:60px 0 70px}.n5Work{padding-bottom:68px}.n5WorkHead,.n5StudioTitle,.n5ContactTopline{display:block}.n5WorkHead p,.n5StudioTitle p,.n5ContactTopline p{margin-top:18px}.n5Portfolio{grid-template-columns:1fr 1fr;grid-template-rows:auto}.n5Portfolio figure:nth-child(n){grid-column:auto;grid-row:auto;height:230px}.n5Portfolio figure:nth-child(1){grid-column:1/-1;height:360px}.n5HygieneInner{grid-template-columns:1fr;padding:18px 0;gap:10px}.n5Studio{padding:62px 0}.n5StudioPhoto{height:430px}.n5StudioData{grid-template-columns:1fr}.n5Contact{padding:58px 0}.n5Field{grid-template-columns:1fr}.n5Field label{padding-bottom:0}.n5Field input,.n5Field select,.n5Field textarea{padding-top:8px}.n5FooterGrid{grid-template-columns:1fr;gap:18px}}
      `}</style>

      <div className="n5Demo">UKÁZKOVÝ KONCEPT SPUSTWEB.CZ · NEJDE O SKUTEČNOU FIRMU <a href="/">ZPĚT NA SPUSTWEB.CZ</a></div>
      <nav className="n5Nav" aria-label="Navigace ukázkového studia"><div className="n5Wrap n5NavInner"><a className="n5Brand" href="#top">STUDIO LÍNA</a><div className="n5NavLinks"><a href="#cenik">Ceník</a><a href="#prace">Práce</a><a href="#studio">Studio</a><a className="n5ContactTop" href="#kontakt">Kontakt</a></div></div></nav>

      <header className="n5Hero"><div className="n5Wrap n5HeroGrid"><div className="n5HeroMeta">MANIKÚRA / PEDIKÚRA · ČESKÉ BUDĚJOVICE</div><div className="n5HeroWord"><span>STUDIO</span><span className="n5Pink">LÍNA</span></div><figure className="n5HeroA"><img src="https://images.pexels.com/photos/13038494/pexels-photo-13038494.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Hotová francouzská manikúra"/></figure><figure className="n5HeroB"><img src="https://images.pexels.com/photos/4677856/pexels-photo-4677856.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Manikérka pracuje s klientkou"/></figure><div className="n5HeroCopy"><p>Manikúra, gel lak, gelová modeláž a přístrojová pedikúra. Objednání telefonicky, e-mailem nebo přes kontaktní formulář.</p><a href="#cenik">Prohlédnout služby →</a></div><div className="n5HeroTag">MANIKÚRA<br/>PEDIKÚRA</div></div></header>

      <div className="n5Facts"><div className="n5Wrap n5FactsInner"><span><MapPin size={14}/> centrum Českých Budějovic</span><a href="tel:+420705911941"><Phone size={14}/> +420 705 911 941</a><a href="mailto:kontakt@spustweb.cz"><Mail size={14}/> kontakt@spustweb.cz</a></div></div>

      <section className="n5Menu" id="cenik"><div className="n5Wrap"><div className="n5MenuTop"><h2>Ceník.</h2><p>Cena je známá předem. Zdobení, oprava jednotlivého nehtu nebo nestandardní délka se připočítává podle rozsahu.</p></div><div className="n5MenuGrid"><div className="n5MenuCol"><h3>Manikúra</h3>{manicure.map(([name,price,text])=><div className="n5Price" key={name}><strong>{name}</strong><b>{price}</b><p>{text}</p></div>)}</div><div className="n5MenuCol"><h3>Pedikúra</h3>{pedicure.map(([name,price,text])=><div className="n5Price" key={name}><strong>{name}</strong><b>{price}</b><p>{text}</p></div>)}</div></div><div className="n5MenuNote">Nail art od 50 Kč / nehet podle náročnosti. Ceny jsou součástí fiktivního konceptu.</div></div></section>

      <section className="n5Work" id="prace"><div className="n5Wrap"><div className="n5WorkHead"><h2>Hotové práce.</h2><p>Ukázky různých délek, tvarů a barevných úprav.</p></div><div className="n5Portfolio">{work.map(([src,alt],i)=><figure key={src}><img src={src} alt={alt}/><figcaption>0{i+1}</figcaption></figure>)}</div><div className="n5WorkFoot"><span>Ilustrační fotografie z Pexels · nejde o realizace skutečného studia.</span></div></div></section>

      <section className="n5Hygiene"><div className="n5Wrap n5HygieneInner"><strong>Hygiena</strong><span>Kovové nástroje se po použití čistí, dezinfikují a sterilizují.</span><span>Jednorázové pilníky a pomůcky se mezi klientkami nepoužívají opakovaně.</span></div></section>

      <section className="n5Studio" id="studio"><div className="n5Wrap"><div className="n5StudioTitle"><h2>Studio Lína.</h2><p>Jedno pracovní místo pro manikúru a samostatné křeslo pro pedikúru.</p></div><div className="n5StudioPhoto"><img src="https://images.pexels.com/photos/36328527/pexels-photo-36328527.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="Interiér menšího nehtového studia"/></div><div className="n5StudioData"><div><strong>České Budějovice</strong><br/>centrum</div><div><strong>Po–Pá</strong><br/>9:00–19:00</div><div><strong>Telefon</strong><br/>+420 705 911 941</div><div><strong>E-mail</strong><br/>kontakt@spustweb.cz</div></div></div></section>

      <section className="n5Contact" id="kontakt"><div className="n5Wrap"><div className="n5ContactTopline"><h2>Napište.</h2><p>Pro objednání uveďte službu, telefon a e-mail. Termín se domluví následně.</p></div><div className="n5ContactGrid"><form className="n5Form"><div className="n5Field"><label htmlFor="n5-name">Jméno</label><input id="n5-name" type="text" placeholder="Vaše jméno"/></div><div className="n5Field"><label htmlFor="n5-phone">Telefon</label><input id="n5-phone" type="tel" placeholder="Např. +420 777 123 456"/></div><div className="n5Field"><label htmlFor="n5-email">E-mail</label><input id="n5-email" type="email" placeholder="vas@email.cz"/></div><div className="n5Field"><label htmlFor="n5-service">Služba</label><select id="n5-service" defaultValue=""><option value="" disabled>Vyberte službu</option><option>Manikúra</option><option>Manikúra + gel lak</option><option>Gelová modeláž</option><option>Pedikúra</option></select></div><div className="n5Field"><label htmlFor="n5-message">Zpráva</label><textarea id="n5-message" placeholder="Například preferovaný den nebo doplňující informace"/></div><button type="button">Odeslat poptávku</button><div className="n5FormNote">Ukázkový formulář na této demonstrační stránce se neodesílá.</div></form><div className="n5Direct"><h3>Nebo přímo.</h3><a href="tel:+420705911941"><Phone size={17}/> +420 705 911 941</a><a href="mailto:kontakt@spustweb.cz"><Mail size={17}/> kontakt@spustweb.cz</a><p>Kontaktní údaje v této ukázce vedou na SpustWeb.cz. Studio Lína je fiktivní koncept.</p></div></div></div></section>

      <footer className="n5Footer"><div className="n5Wrap n5FooterGrid"><div className="n5FooterName">STUDIO LÍNA</div><div className="n5FooterText"><strong>Ukázkový koncept</strong><br/>Manikúra · pedikúra · České Budějovice</div><a className="n5FooterCta" href="/#kontakt">Podobný web pro moje podnikání</a></div></footer>
    </div>
  )
}
