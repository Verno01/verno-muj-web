import type { Metadata } from 'next'
import { ArrowRight, Check, MapPin, Phone, ShieldCheck, Wrench, Droplets, Flame, Bath, Pipette, Camera, Clock3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ukázkový web pro instalatéra',
  description: 'Ukázkový koncept moderního webu pro instalatéra a topenáře od SpustWeb.cz.',
  alternates: { canonical: 'https://spustweb.cz/ukazky/instalater/' },
  robots: { index: true, follow: true },
}

const services = [
  { icon: Droplets, title: 'Voda', text: 'Opravy a nové rozvody vody, baterie, WC, bojlery, napojení praček a myček.' },
  { icon: Flame, title: 'Topení', text: 'Radiátory, rozvody, podlahové vytápění a úpravy topných soustav.' },
  { icon: Bath, title: 'Koupelny', text: 'Příprava vody a odpadů, montáž sanity a instalace při rekonstrukcích.' },
  { icon: Pipette, title: 'Odpady', text: 'Opravy a výměny odpadního potrubí, napojení a běžné závady.' },
]

const faqs = [
  ['Kolik stojí příjezd instalatéra?', 'Cenu výjezdu a způsob účtování si potvrdíme předem. U plánovaných prací připravíme nabídku podle rozsahu.'],
  ['Děláte i malé opravy?', 'Ano. Řešíme běžné opravy v domácnostech i větší plánované instalace.'],
  ['Jak rychle přijedete při havárii?', 'Akutní závady řešíme telefonicky. Podle situace rovnou řekneme nejbližší možný termín výjezdu.'],
  ['Mohu poslat fotografie závady?', 'Ano. Fotografie často pomohou předem určit rozsah práce i potřebný materiál.'],
  ['Dostanu cenu předem?', 'U běžné opravy předem domluvíme cenu nebo způsob účtování. U větší realizace dostanete cenovou nabídku.'],
  ['Kam vyjíždíte?', 'Běžně do Českých Budějovic a přibližně 30 km od města. Větší realizace řešíme po dohodě i dál.'],
]

export default function PlumberShowcase() {
  return (
    <div className="plumberPage">
      <style>{`
        body:has(.plumberPage) > .verno-nav-shell,
        body:has(.plumberPage) > .footer{display:none!important}
        body:has(.plumberPage) main{padding:0!important;margin:0!important}
        body:has(.plumberPage){background:#f3f1e9!important}

        .plumberPage{--ink:#17201d;--cream:#f3f1e9;--paper:#fbfaf6;--acid:#d8ff52;--orange:#ef6d39;--line:#c9c7bd;--muted:#6d746f;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--cream);overflow:hidden}
        .plumberPage *{box-sizing:border-box}
        .plumberPage a{color:inherit;text-decoration:none}
        .demoBar{height:34px;background:#17201d;color:#f5f4ef;display:flex;align-items:center;justify-content:center;gap:10px;font-size:11px;letter-spacing:.045em;padding:0 16px}
        .demoBar a{text-decoration:underline;text-underline-offset:3px}
        .siteNav{height:72px;border-bottom:1px solid rgba(23,32,29,.14);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;width:min(1220px,calc(100% - 48px));margin:auto}
        .brand{font-weight:900;letter-spacing:-.045em;font-size:22px;display:flex;align-items:center;gap:8px}
        .brandMark{width:18px;height:18px;border-radius:50% 50% 0 50%;background:var(--orange);transform:rotate(45deg);display:inline-block}
        .navLinks{display:flex;gap:30px;font-size:13px;font-weight:700}
        .navActions{justify-self:end;display:flex;gap:8px}
        .btn{min-height:42px;padding:0 17px;border:1px solid var(--ink);display:inline-flex;align-items:center;justify-content:center;gap:8px;font-size:13px;font-weight:800;transition:.18s ease;background:transparent}
        .btn:hover{transform:translateY(-2px)}
        .btnAcid{background:var(--acid)}
        .btnDark{background:var(--ink);color:white}

        .hero{width:min(1220px,calc(100% - 48px));margin:0 auto;padding:42px 0 26px;display:grid;grid-template-columns:1.08fr .92fr;gap:18px;min-height:665px}
        .heroCopy{background:var(--paper);border:1px solid var(--line);padding:58px 56px 38px;display:flex;flex-direction:column;position:relative;overflow:hidden}
        .eyebrow{font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;display:flex;align-items:center;gap:9px;margin-bottom:28px}.eyebrow:before{content:'';width:8px;height:8px;background:var(--orange);border-radius:50%}
        h1{font-size:clamp(52px,6.8vw,92px);line-height:.88;letter-spacing:-.072em;margin:0 0 30px;font-weight:900;max-width:760px}
        .heroLead{font-size:18px;line-height:1.55;max-width:570px;margin:0 0 30px;color:#444c48}
        .heroCtas{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:36px}.heroCtas .btn{min-height:50px;padding:0 21px}
        .proofRow{margin-top:auto;padding-top:25px;border-top:1px solid var(--line);display:grid;grid-template-columns:repeat(4,1fr);gap:13px}.proof{font-size:11px;line-height:1.35;font-weight:800}.proof span{display:block;color:var(--muted);font-weight:500;margin-top:3px}
        .heroVisual{position:relative;min-height:620px;background:#b8b6ab;overflow:hidden;border:1px solid var(--line)}
        .heroVisual img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0;filter:saturate(.78) contrast(1.02)}
        .heroVisual:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 54%,rgba(14,20,18,.48))}
        .heroCard{position:absolute;z-index:2;left:20px;bottom:20px;width:calc(100% - 40px);background:rgba(244,242,234,.94);backdrop-filter:blur(7px);padding:17px 18px;display:flex;align-items:center;justify-content:space-between;gap:15px}.heroCard strong{font-size:15px}.heroCard span{font-size:12px;color:#59605c;display:block;margin-top:4px}.heroCard .round{width:44px;height:44px;border-radius:50%;background:var(--acid);display:grid;place-items:center;flex:0 0 auto}
        .scribble{position:absolute;right:-16px;top:22px;width:130px;height:130px;border:3px solid var(--orange);border-radius:45% 55% 60% 40%;transform:rotate(13deg);opacity:.85}

        .section{width:min(1220px,calc(100% - 48px));margin:auto;padding:92px 0}.sectionHead{display:grid;grid-template-columns:.7fr 1.3fr;gap:40px;margin-bottom:42px}.kicker{font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.sectionHead h2{font-size:clamp(38px,5vw,66px);line-height:.95;letter-spacing:-.055em;margin:0;max-width:800px}.sectionHead p{font-size:16px;color:var(--muted);line-height:1.55;max-width:610px;margin:18px 0 0}

        .situationGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.situation{min-height:360px;padding:36px;border:1px solid var(--line);display:flex;flex-direction:column;position:relative;overflow:hidden}.situation:first-child{background:var(--orange);color:#181818}.situation:last-child{background:var(--ink);color:#fff}.situationNum{font-size:11px;font-weight:900;letter-spacing:.09em}.situation h3{font-size:44px;line-height:.95;letter-spacing:-.045em;margin:66px 0 24px;max-width:430px}.miniList{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:28px}.miniList span{border:1px solid currentColor;padding:8px 10px;font-size:11px;font-weight:700}.situation .btn{margin-top:auto;align-self:flex-start}.situation:last-child .btn{border-color:white;color:white}.situationArrow{position:absolute;right:28px;top:26px;opacity:.35}

        .servicesGrid{display:grid;grid-template-columns:repeat(4,1fr);border-left:1px solid var(--line);border-top:1px solid var(--line)}.service{min-height:300px;padding:28px 25px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--paper);display:flex;flex-direction:column}.serviceIcon{width:46px;height:46px;border:1px solid var(--ink);display:grid;place-items:center;margin-bottom:56px}.service h3{font-size:25px;letter-spacing:-.035em;margin:0 0 13px}.service p{font-size:13px;line-height:1.6;color:var(--muted);margin:0}

        .workSection{background:#d6d3c8}.workWrap{width:min(1220px,calc(100% - 48px));margin:auto;padding:92px 0}.projects{display:grid;grid-template-columns:1.15fr .85fr;grid-template-rows:360px 290px;gap:12px}.project{position:relative;overflow:hidden;background:#aaa}.project:first-child{grid-row:1/3}.project img{width:100%;height:100%;object-fit:cover;filter:saturate(.72)}.projectOverlay{position:absolute;inset:auto 0 0;background:linear-gradient(transparent,rgba(15,20,18,.82));padding:60px 24px 22px;color:white}.projectOverlay small{font-size:10px;text-transform:uppercase;letter-spacing:.08em}.projectOverlay h3{font-size:25px;margin:7px 0 0;letter-spacing:-.035em}

        .promiseGrid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.promise{padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:180px;background:var(--paper)}.promise strong{font-size:22px;letter-spacing:-.03em}.promise p{font-size:13px;line-height:1.6;color:var(--muted);max-width:440px}

        .person{display:grid;grid-template-columns:.9fr 1.1fr;background:var(--ink);color:white}.personPhoto{min-height:520px;position:relative;overflow:hidden}.personPhoto img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.7)}.personCopy{padding:62px;display:flex;flex-direction:column;justify-content:center}.personCopy .kicker{color:var(--acid)}.personCopy h2{font-size:58px;line-height:.92;letter-spacing:-.055em;margin:18px 0 23px}.personCopy p{font-size:16px;line-height:1.65;color:#c9cfcb;max-width:590px}.personFacts{margin-top:30px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.personFacts div{border-top:1px solid #5e6863;padding-top:14px;font-size:12px;font-weight:800}.personFacts span{display:block;font-weight:500;color:#aeb7b2;margin-top:5px}

        .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.step{background:var(--paper);border:1px solid var(--line);padding:30px;min-height:250px}.stepNo{font-size:54px;font-weight:900;letter-spacing:-.06em;color:var(--orange)}.step h3{font-size:21px;margin:38px 0 10px}.step p{font-size:13px;line-height:1.6;color:var(--muted)}

        .area{display:grid;grid-template-columns:1fr 1fr;gap:12px}.areaMap{min-height:420px;background:#d8d5ca;position:relative;overflow:hidden;border:1px solid var(--line)}.mapLines{position:absolute;inset:0;background:radial-gradient(circle at 48% 50%,var(--orange) 0 7px,transparent 8px),linear-gradient(125deg,transparent 48%,rgba(23,32,29,.17) 49%,transparent 50%),linear-gradient(38deg,transparent 47%,rgba(23,32,29,.16) 48%,transparent 49%)}.mapLabel{position:absolute;left:50%;top:52%;transform:translate(-50%,-50%);background:var(--paper);padding:10px 13px;font-size:12px;font-weight:900}.areaCopy{background:var(--acid);padding:44px}.areaCopy h3{font-size:40px;line-height:1;letter-spacing:-.045em;margin:0 0 24px}.towns{display:flex;flex-wrap:wrap;gap:7px}.towns span{border:1px solid var(--ink);padding:9px 10px;font-size:11px;font-weight:800}.areaCopy p{font-size:14px;line-height:1.6;max-width:500px;margin:28px 0 0}

        .faq{border-top:1px solid var(--line)}.faqItem{display:grid;grid-template-columns:1fr 1.4fr;gap:30px;padding:23px 0;border-bottom:1px solid var(--line)}.faqItem h3{font-size:16px;margin:0}.faqItem p{font-size:13px;line-height:1.6;color:var(--muted);margin:0}

        .contactPanel{background:var(--orange);padding:58px;display:grid;grid-template-columns:1fr .85fr;gap:60px}.contactPanel h2{font-size:clamp(46px,6vw,78px);line-height:.9;letter-spacing:-.06em;margin:0 0 24px}.contactPanel p{font-size:15px;line-height:1.6;max-width:530px}.contactActions{display:flex;gap:9px;flex-wrap:wrap;margin-top:30px}.fakeForm{background:var(--paper);padding:25px;display:grid;gap:9px}.fakeField{height:47px;border:1px solid var(--line);display:flex;align-items:center;padding:0 13px;font-size:12px;color:#777}.fakeField.big{height:90px;align-items:flex-start;padding-top:14px}.fakeForm .btn{width:100%;margin-top:4px}

        .demoFooter{background:#0f1714;color:white;padding:28px 0}.demoFooterInner{width:min(1220px,calc(100% - 48px));margin:auto;display:flex;justify-content:space-between;align-items:center;gap:20px}.demoFooter p{margin:0;font-size:11px;color:#aab3ae;line-height:1.5}.demoFooter a{background:var(--acid);color:#111;padding:12px 15px;font-size:12px;font-weight:900}

        @media(max-width:900px){
          .siteNav{grid-template-columns:1fr auto}.navLinks{display:none}.navActions .btn:first-child{display:none}
          .hero{grid-template-columns:1fr;min-height:auto}.heroCopy{min-height:600px}.heroVisual{min-height:570px}
          .sectionHead{grid-template-columns:1fr}.servicesGrid{grid-template-columns:1fr 1fr}.projects{grid-template-columns:1fr;grid-template-rows:430px 280px 280px}.project:first-child{grid-row:auto}.person{grid-template-columns:1fr}.personPhoto{min-height:500px}.contactPanel{grid-template-columns:1fr}.area{grid-template-columns:1fr}.faqItem{grid-template-columns:1fr;gap:7px}
        }
        @media(max-width:620px){
          .demoBar{height:auto;min-height:34px;text-align:center;padding:8px 14px}.siteNav,.hero,.section,.workWrap,.demoFooterInner{width:min(100% - 28px,1220px)}.siteNav{height:62px}.brand{font-size:18px}.navActions .btn{min-height:36px;padding:0 11px;font-size:11px}
          .hero{padding-top:14px}.heroCopy{padding:35px 24px 24px;min-height:570px}.heroVisual{min-height:430px}.heroLead{font-size:16px}.proofRow{grid-template-columns:1fr 1fr}.heroCtas{flex-direction:column}.heroCtas .btn{width:100%}
          .section,.workWrap{padding:68px 0}.situationGrid{grid-template-columns:1fr}.situation{min-height:330px;padding:26px}.situation h3{font-size:36px;margin-top:48px}.servicesGrid{grid-template-columns:1fr}.service{min-height:230px}.serviceIcon{margin-bottom:36px}.projects{grid-template-rows:380px 250px 250px}.personCopy{padding:38px 24px}.personCopy h2{font-size:44px}.personFacts{grid-template-columns:1fr}.steps{grid-template-columns:1fr}.promiseGrid{grid-template-columns:1fr}.areaCopy{padding:30px 24px}.contactPanel{padding:38px 24px}.demoFooterInner{align-items:flex-start;flex-direction:column}
        }
      `}</style>

      <div className="demoBar">Ukázkový koncept SpustWeb.cz · nejde o skutečnou firmu <a href="/">zpět na SpustWeb.cz</a></div>

      <nav className="siteNav" aria-label="Navigace ukázkového webu">
        <a href="#top" className="brand"><span className="brandMark" />NOVÁK voda & topení</a>
        <div className="navLinks"><a href="#sluzby">Služby</a><a href="#realizace">Realizace</a><a href="#o-nas">O nás</a><a href="#faq">Časté dotazy</a></div>
        <div className="navActions"><a className="btn" href="tel:+420777000000"><Phone size={15}/> Zavolat</a><a className="btn btnAcid" href="#kontakt">Poslat poptávku</a></div>
      </nav>

      <header className="hero" id="top">
        <div className="heroCopy">
          <div className="scribble" aria-hidden="true" />
          <div className="eyebrow">České Budějovice a okolí</div>
          <h1>Voda a topení pro domy a byty.</h1>
          <p className="heroLead">Opravy, nové rozvody, koupelny a topné systémy. Akutní závady řešíme telefonicky, plánované práce můžete jednoduše poptat online.</p>
          <div className="heroCtas"><a className="btn btnDark" href="tel:+420777000000"><Phone size={17}/> Potřebuji rychlou pomoc</a><a className="btn btnAcid" href="#kontakt">Plánuji zakázku <ArrowRight size={17}/></a></div>
          <div className="proofRow"><div className="proof">15 let praxe<span>v oboru voda a topení</span></div><div className="proof">Pojištěná práce<span>odpovědnost za škodu</span></div><div className="proof">Cena předem<span>bez překvapení po práci</span></div><div className="proof">30 km<span>běžná oblast výjezdu</span></div></div>
        </div>
        <div className="heroVisual">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=88" alt="Instalatér při práci v technickém prostoru" />
          <div className="heroCard"><div><strong>Pošlete fotku závady.</strong><span>Často podle ní poznáme, co bude potřeba.</span></div><div className="round"><Camera size={19}/></div></div>
        </div>
      </header>

      <section className="section" aria-labelledby="situace-title">
        <div className="sectionHead"><div className="kicker">Podle toho, co řešíte</div><div><h2 id="situace-title">Jiný postup při havárii. Jiný při plánované práci.</h2><p>Nemusíte hledat správnou službu v dlouhém seznamu. Začněte podle situace, ve které jste.</p></div></div>
        <div className="situationGrid">
          <article className="situation"><ArrowRight className="situationArrow" size={68}/><div className="situationNum">01 / JE TO AKUTNÍ</div><h3>Něco nefunguje?</h3><div className="miniList"><span>prasklá voda</span><span>únik vody</span><span>topení netopí</span><span>závada bojleru</span><span>ucpaný odpad</span></div><a className="btn" href="tel:+420777000000"><Phone size={16}/> Zavolat instalatéra</a></article>
          <article className="situation"><ArrowRight className="situationArrow" size={68}/><div className="situationNum">02 / JE ČAS PLÁNOVAT</div><h3>Chystáte novou práci?</h3><div className="miniList"><span>nové rozvody</span><span>koupelna</span><span>podlahové topení</span><span>kotelna</span><span>rekonstrukce</span></div><a className="btn" href="#kontakt">Poslat poptávku a fotografie <ArrowRight size={16}/></a></article>
        </div>
      </section>

      <section className="section" id="sluzby">
        <div className="sectionHead"><div className="kicker">Co děláme</div><div><h2>Instalatérská práce popsaná normálně.</h2><p>Bez neurčitých balíčků. U každé služby má být na první pohled jasné, s čím se na nás můžete obrátit.</p></div></div>
        <div className="servicesGrid">{services.map(({icon:Icon,title,text})=><article className="service" key={title}><div className="serviceIcon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="workSection" id="realizace">
        <div className="workWrap">
          <div className="sectionHead"><div className="kicker">Z posledních prací</div><div><h2>Raději práci ukázat než o ní mluvit.</h2><p>Tři různé typy zakázek. Fotografie nejsou dekorace, ale důkaz rozsahu a způsobu práce.</p></div></div>
          <div className="projects">
            <article className="project"><img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1300&q=86" alt="Práce na rozvodech vody v domě"/><div className="projectOverlay"><small>České Budějovice · rekonstrukce</small><h3>Nové rozvody vody v rodinném domě</h3></div></article>
            <article className="project"><img src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1000&q=86" alt="Rozvody v technické místnosti"/><div className="projectOverlay"><small>Rudolfov · voda + topení</small><h3>Technická místnost rodinného domu</h3></div></article>
            <article className="project"><img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=86" alt="Dokončená koupelna po instalatérských pracích"/><div className="projectOverlay"><small>Hluboká nad Vltavou · rekonstrukce</small><h3>Instalace pro novou koupelnu</h3></div></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead"><div className="kicker">Co můžete čekat</div><div><h2>Ne sliby. Konkrétní způsob práce.</h2></div></div>
        <div className="promiseGrid">
          <article className="promise"><strong>Cena před zahájením práce</strong><p>U běžných oprav si předem potvrdíme cenu nebo způsob účtování. U větších realizací připravíme nabídku.</p></article>
          <article className="promise"><strong>Domluvený termín platí</strong><p>Když se kvůli předchozí havárii nebo jiné situaci něco změní, zavoláme. Nenecháme vás čekat bez informace.</p></article>
          <article className="promise"><strong>Po práci uklidíme</strong><p>Pracovní místo předáme tak, aby po nás nezůstala zbytečná práce a nepořádek.</p></article>
          <article className="promise"><strong>Odborná a pojištěná práce</strong><p>Oprávnění a pojištění mají být na webu dohledatelné konkrétně, ne schované za slovem „profesionální“.</p></article>
        </div>
      </section>

      <section className="section" id="o-nas">
        <div className="person">
          <div className="personPhoto"><img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1100&q=88" alt="Instalatér Jan Novák při práci"/></div>
          <div className="personCopy"><div className="kicker">Kdo přijede</div><h2>Jan Novák</h2><p>Instalatér a topenář z Českých Budějovic. Pracuji v rodinných domech, bytech a menších provozech. Menší opravy řeším osobně, na větší realizace jezdíme ve dvou.</p><div className="personFacts"><div>15 let<span>praxe v oboru</span></div><div><ShieldCheck size={17}/> Pojištění<span>odpovědnosti</span></div><div><MapPin size={17}/> Budějovice<span>a okolí</span></div></div></div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead"><div className="kicker">Jak to probíhá</div><div><h2>Tři kroky. Nic složitějšího není potřeba.</h2></div></div>
        <div className="steps"><article className="step"><div className="stepNo">01</div><h3>Ozvete se</h3><p>Telefonicky nebo formulářem. U plánované práce můžete rovnou přiložit fotografie.</p></article><article className="step"><div className="stepNo">02</div><h3>Domluvíme rozsah</h3><p>U větší zakázky proběhne obhlídka a připravíme cenovou nabídku.</p></article><article className="step"><div className="stepNo">03</div><h3>Přijedeme a provedeme práci</h3><p>Podle domluveného rozsahu a termínu. Po dokončení práci společně projdeme.</p></article></div>
      </section>

      <section className="section">
        <div className="sectionHead"><div className="kicker">Kam vyjíždíme</div><div><h2>České Budějovice a zhruba 30 km kolem.</h2></div></div>
        <div className="area"><div className="areaMap"><div className="mapLines"/><div className="mapLabel"><MapPin size={14} style={{verticalAlign:'middle',marginRight:5}}/>České Budějovice</div></div><div className="areaCopy"><h3>Nejčastěji jsme tady.</h3><div className="towns"><span>České Budějovice</span><span>Rudolfov</span><span>Hluboká n. V.</span><span>Lišov</span><span>Borovany</span><span>Třeboň</span></div><p>Větší realizace řešíme po dohodě i mimo běžnou oblast. U havárie vždy nejdřív ověříme, jestli jsme schopni přijet v rozumném čase.</p></div></div>
      </section>

      <section className="section" id="faq">
        <div className="sectionHead"><div className="kicker">Časté dotazy</div><div><h2>To, co potřebujete vědět před objednáním.</h2></div></div>
        <div className="faq">{faqs.map(([q,a])=><article className="faqItem" key={q}><h3>{q}</h3><p>{a}</p></article>)}</div>
      </section>

      <section className="section" id="kontakt">
        <div className="contactPanel"><div><div className="kicker">Kontakt</div><h2>Akutní problém? Zavolejte.</h2><p>Plánovanou práci můžete poslat formulářem. Přidejte obec, stručný popis a fotografie. Ozveme se s dalším postupem.</p><div className="contactActions"><a className="btn btnDark" href="tel:+420777000000"><Phone size={17}/> 777 000 000</a><a className="btn" href="mailto:ukazka@spustweb.cz">Napsat e-mail</a></div></div><div className="fakeForm" aria-label="Ukázkový poptávkový formulář"><div className="fakeField">Jméno a telefon</div><div className="fakeField">Obec</div><div className="fakeField big">Co potřebujete vyřešit?</div><div className="fakeField"><Camera size={15} style={{marginRight:7}}/> Přiložit fotografie</div><button className="btn btnDark" type="button">Odeslat poptávku <ArrowRight size={16}/></button></div></div>
      </section>

      <footer className="demoFooter"><div className="demoFooterInner"><p><strong>Ukázkový koncept SpustWeb.cz</strong><br/>Firma, telefon, realizace a uvedené údaje jsou demonstrační.</p><a href="/">Chci podobný web pro své podnikání →</a></div></footer>
    </div>
  )
}
