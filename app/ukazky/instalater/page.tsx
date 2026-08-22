import type { Metadata } from 'next'
import { ArrowRight, Bath, Camera, Check, Droplets, Flame, MapPin, Phone, Pipette, ShieldCheck, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ukázkový web pro instalatéra a topenáře',
  description: 'Ukázka promyšleného webu pro instalatéra a topenáře. Struktura pro akutní opravy, plánované zakázky, realizace, lokální služby a snadný kontakt.',
  alternates: { canonical: 'https://spustweb.cz/ukazky/instalater/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Ukázkový web pro instalatéra a topenáře | SpustWeb.cz',
    description: 'Jak může vypadat přehledný a obchodně funkční web pro instalatéra a topenáře.',
    url: 'https://spustweb.cz/ukazky/instalater/',
    type: 'website',
  },
}

const services = [
  { icon: Droplets, no: '01', title: 'Voda', text: 'Opravy a nové rozvody vody, baterie, WC, bojlery a napojení spotřebičů.' },
  { icon: Flame, no: '02', title: 'Topení', text: 'Radiátory, rozvody, podlahové vytápění a úpravy topných soustav.' },
  { icon: Bath, no: '03', title: 'Koupelny', text: 'Příprava vody a odpadů, montáž sanity a instalace při rekonstrukcích.' },
  { icon: Pipette, no: '04', title: 'Odpady', text: 'Opravy a výměny odpadního potrubí, napojení a běžné závady.' },
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
        body:has(.plumberPage){background:#e9e6dc!important}

        .plumberPage{--ink:#17201d;--warm:#e9e6dc;--paper:#f6f4ed;--signal:#e85f36;--acid:#d8f765;--line:#bcb9af;--muted:#68706b;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--warm);overflow:hidden}
        .plumberPage *{box-sizing:border-box}.plumberPage a{color:inherit;text-decoration:none}.plumberPage svg{stroke-width:1.8}
        .shell{width:min(1260px,calc(100% - 48px));margin:auto}
        .demoBar{height:31px;background:#111815;color:#d9ddd9;display:flex;align-items:center;justify-content:center;gap:8px;font-size:10px;letter-spacing:.07em;text-transform:uppercase}.demoBar a{color:var(--acid);border-bottom:1px solid rgba(216,247,101,.55)}
        .siteNav{height:72px;border-bottom:1px solid var(--line);display:grid;grid-template-columns:1fr auto 1fr;align-items:center}.brand{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:-.045em;font-size:20px}.brandMark{width:18px;height:25px;border:2px solid var(--signal);border-radius:55% 55% 62% 62%;transform:rotate(7deg)}.brand small{font-size:9px;display:block;letter-spacing:.12em;font-weight:700;color:var(--muted);margin-top:2px}.navLinks{display:flex;gap:28px;font-size:12px;font-weight:700}.navActions{justify-self:end;display:flex;align-items:center;gap:8px}.phoneMini{font-size:12px;font-weight:800;padding:12px 5px}.btn{min-height:43px;padding:0 17px;border:1px solid var(--ink);display:inline-flex;align-items:center;justify-content:center;gap:8px;font-size:12px;font-weight:900;letter-spacing:.01em;transition:.18s ease;background:transparent}.btn:hover{transform:translateY(-2px)}.btnSignal{background:var(--signal);color:#fff;border-color:var(--signal)}.btnDark{background:var(--ink);color:#fff}.btnAcid{background:var(--acid)}

        .hero{position:relative;padding:26px 0 18px}.heroGrid{display:grid;grid-template-columns:1.12fr .88fr;grid-template-rows:auto 122px;gap:10px;min-height:690px}.heroCopy{position:relative;background:var(--paper);border:1px solid var(--line);padding:54px 52px 38px;display:flex;flex-direction:column;overflow:hidden}.eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:.1em;font-weight:900;display:flex;align-items:center;gap:9px}.eyebrow:before{content:'';width:9px;height:9px;background:var(--signal)}.hero h1{font-size:clamp(60px,7.5vw,104px);line-height:.84;letter-spacing:-.075em;margin:36px 0 29px;max-width:760px}.heroLead{font-size:17px;line-height:1.55;max-width:590px;margin:0 0 27px;color:#424a46}.heroCtas{display:flex;gap:9px;flex-wrap:wrap}.heroNote{margin-top:auto;padding-top:24px;border-top:1px solid var(--line);font-size:11px;color:var(--muted);display:flex;gap:8px;align-items:center}.heroNote strong{color:var(--ink)}
        .heroVisual{position:relative;overflow:hidden;border:1px solid var(--line);background:#8c8e87;min-height:545px}.heroVisual img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;filter:saturate(.55) contrast(1.08) brightness(.88)}.heroVisual:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 52%,rgba(10,15,13,.68))}.heroStamp{position:absolute;z-index:2;right:18px;top:18px;width:104px;height:104px;border-radius:50%;background:var(--acid);display:flex;align-items:center;justify-content:center;text-align:center;font-size:11px;line-height:1.25;font-weight:900;transform:rotate(8deg);padding:14px}.heroCaption{position:absolute;left:20px;right:20px;bottom:18px;z-index:2;color:#fff;display:flex;justify-content:space-between;align-items:end;gap:20px}.heroCaption strong{font-size:17px}.heroCaption span{display:block;font-size:11px;color:#cfd4d1;margin-top:4px}.heroCaption .circle{width:42px;height:42px;border-radius:50%;background:var(--signal);display:grid;place-items:center;flex:none}
        .heroProof{grid-column:1/-1;display:grid;grid-template-columns:1.35fr repeat(4,1fr);border:1px solid var(--line);background:#d8d4c8}.proofIntro{padding:20px 24px;font-size:12px;font-weight:900;display:flex;align-items:center}.proof{padding:18px 20px;border-left:1px solid var(--line);font-size:11px;font-weight:900;display:flex;flex-direction:column;justify-content:center}.proof span{color:var(--muted);font-weight:500;margin-top:5px;line-height:1.35}

        .section{padding:96px 0}.sectionHead{display:grid;grid-template-columns:.6fr 1.4fr;gap:50px;margin-bottom:42px}.kicker{font-size:11px;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.sectionHead h2{font-size:clamp(40px,5.1vw,70px);line-height:.92;letter-spacing:-.058em;margin:0;max-width:840px}.sectionHead p{font-size:15px;line-height:1.65;color:var(--muted);max-width:640px;margin:19px 0 0}

        .situations{display:grid;grid-template-columns:1fr 1fr;gap:10px}.situation{min-height:390px;padding:34px;display:flex;flex-direction:column;position:relative;overflow:hidden}.situation.hot{background:var(--signal);color:#151b18}.situation.calm{background:#17201d;color:#fff}.situationTop{display:flex;justify-content:space-between;align-items:start}.situationNo{font-size:11px;font-weight:900;letter-spacing:.12em}.situationIcon{width:52px;height:52px;border:1px solid currentColor;display:grid;place-items:center}.situation h3{font-size:clamp(37px,4vw,55px);line-height:.92;letter-spacing:-.05em;margin:72px 0 21px;max-width:470px}.tagRow{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:28px}.tagRow span{font-size:10px;font-weight:800;border:1px solid currentColor;padding:8px 9px}.situation .btn{align-self:flex-start;margin-top:auto}.calm .btn{border-color:#fff;color:#fff}

        .servicesGrid{display:grid;grid-template-columns:repeat(4,1fr);border-left:1px solid var(--line);border-top:1px solid var(--line)}.service{position:relative;min-height:330px;padding:25px 24px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--paper);display:flex;flex-direction:column}.serviceNo{font-size:10px;letter-spacing:.12em;color:var(--muted);font-weight:900}.serviceIcon{width:50px;height:50px;border:1px solid var(--ink);display:grid;place-items:center;margin:36px 0 auto}.service h3{font-size:26px;letter-spacing:-.04em;margin:0 0 11px}.service p{font-size:12px;line-height:1.65;color:var(--muted);margin:0}

        .workSection{background:#1a211e;color:#fff}.workWrap{padding:94px 0}.workSection .sectionHead p{color:#aeb7b2}.projects{display:grid;grid-template-columns:1.25fr .75fr;grid-template-rows:330px 270px;gap:10px}.project{position:relative;overflow:hidden;background:#3d423f}.project:first-child{grid-row:1/3}.project img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.55) contrast(1.08)}.project:after{content:'';position:absolute;inset:35% 0 0;background:linear-gradient(transparent,rgba(8,12,10,.86))}.projectText{position:absolute;z-index:2;left:24px;right:24px;bottom:22px}.projectText small{font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:#d7ded9}.projectText h3{font-size:24px;letter-spacing:-.035em;margin:6px 0 0}.project:first-child .projectText h3{font-size:34px;max-width:520px}.workNote{display:flex;justify-content:space-between;gap:24px;border-top:1px solid #424b46;margin-top:26px;padding-top:18px;font-size:11px;color:#aeb7b2}.workNote strong{color:#fff}

        .promiseGrid{display:grid;grid-template-columns:repeat(4,1fr);border-left:1px solid var(--line);border-top:1px solid var(--line)}.promise{background:var(--paper);padding:28px 24px;min-height:230px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.promiseMark{font-size:45px;line-height:1;color:var(--signal);font-weight:900;letter-spacing:-.08em}.promise strong{display:block;font-size:19px;letter-spacing:-.03em;margin:45px 0 10px}.promise p{font-size:12px;line-height:1.65;color:var(--muted);margin:0}

        .person{display:grid;grid-template-columns:.92fr 1.08fr;background:#d6f05f}.personPhoto{min-height:560px;position:relative;overflow:hidden;background:#8e928d}.personPhoto img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.58) contrast(1.06)}.personPhotoTag{position:absolute;left:18px;bottom:18px;background:#17201d;color:#fff;padding:13px 16px;font-size:11px;font-weight:800}.personCopy{padding:64px 60px;display:flex;flex-direction:column;justify-content:center}.personCopy h2{font-size:clamp(50px,5vw,70px);line-height:.9;letter-spacing:-.06em;margin:24px 0 22px}.personCopy p{font-size:15px;line-height:1.65;max-width:600px}.personFacts{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:34px}.personFact{border-top:1px solid rgba(23,32,29,.45);padding-top:14px;font-size:12px;font-weight:900}.personFact span{display:block;font-weight:500;font-size:10px;margin-top:5px;color:#4f574f}

        .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.step{background:var(--paper);border:1px solid var(--line);min-height:285px;padding:28px;display:flex;flex-direction:column}.stepNo{font-size:52px;font-weight:900;letter-spacing:-.07em;color:var(--signal)}.step h3{font-size:21px;letter-spacing:-.03em;margin:auto 0 10px}.step p{font-size:12px;line-height:1.65;color:var(--muted);margin:0}

        .areaFaq{display:grid;grid-template-columns:.9fr 1.1fr;gap:10px}.areaBox{background:var(--signal);padding:38px;min-height:505px;display:flex;flex-direction:column}.areaBox h3{font-size:42px;line-height:.96;letter-spacing:-.05em;margin:0 0 20px}.areaBox p{font-size:13px;line-height:1.6;max-width:430px}.towns{display:flex;flex-wrap:wrap;gap:6px;margin-top:24px}.towns span{border:1px solid var(--ink);padding:8px 9px;font-size:10px;font-weight:800}.mapSketch{position:relative;margin-top:auto;height:190px;border-top:1px solid rgba(23,32,29,.45);overflow:hidden}.mapSketch:before,.mapSketch:after{content:'';position:absolute;width:280px;height:1px;background:rgba(23,32,29,.35);left:20%;top:48%;transform:rotate(20deg)}.mapSketch:after{transform:rotate(-27deg);left:8%;top:59%}.mapDot{position:absolute;left:52%;top:49%;width:12px;height:12px;background:var(--ink);border-radius:50%}.mapRadius{position:absolute;left:52%;top:49%;width:145px;height:145px;border:1px solid rgba(23,32,29,.5);border-radius:50%;transform:translate(-50%,-50%)}.mapLabel{position:absolute;left:calc(52% + 18px);top:44%;font-size:10px;font-weight:900}.faq{background:var(--paper);border-top:1px solid var(--line)}.faqItem{padding:21px 23px;border:1px solid var(--line);border-top:0}.faqItem h3{font-size:14px;margin:0 0 8px}.faqItem p{font-size:11px;line-height:1.6;color:var(--muted);margin:0}

        .contactPanel{background:#111815;color:#fff;padding:72px 0}.contactGrid{display:grid;grid-template-columns:1fr .82fr;gap:72px;align-items:start}.contactPanel h2{font-size:clamp(50px,6vw,82px);line-height:.88;letter-spacing:-.065em;margin:0 0 23px}.contactPanel p{font-size:14px;line-height:1.65;color:#bdc5c0;max-width:560px}.contactChoices{display:flex;gap:8px;flex-wrap:wrap;margin-top:28px}.contactChoices .btn{border-color:#fff}.contactChoices .btnSignal{border-color:var(--signal)}.fakeForm{background:#f3f1e9;color:var(--ink);padding:24px;display:grid;grid-template-columns:1fr 1fr;gap:8px}.fakeField{height:47px;border:1px solid #c2c0b7;padding:0 12px;display:flex;align-items:center;font-size:11px;color:#767b77}.fakeField.wide{grid-column:1/-1}.fakeField.big{height:84px;align-items:flex-start;padding-top:13px}.fakeForm .btn{grid-column:1/-1;width:100%}.formNote{grid-column:1/-1;font-size:9px;color:#7c817e;line-height:1.4}
        .demoFooter{background:#090d0b;color:#aeb6b1;border-top:1px solid #2e3632}.demoFooterInner{padding:23px 0;display:grid;grid-template-columns:1fr auto;gap:20px;font-size:10px;line-height:1.5}.demoFooter strong{color:#fff}.demoFooter a{color:var(--acid)}

        @media(max-width:980px){.siteNav{grid-template-columns:1fr auto}.navLinks{display:none}.heroGrid{grid-template-columns:1fr;grid-template-rows:auto 480px auto}.heroProof{grid-column:1;grid-template-columns:repeat(2,1fr)}.proofIntro{grid-column:1/-1}.proof:nth-child(even){border-left:0}.sectionHead{grid-template-columns:1fr;gap:16px}.servicesGrid,.promiseGrid{grid-template-columns:repeat(2,1fr)}.projects{grid-template-columns:1fr 1fr;grid-template-rows:420px 260px}.project:first-child{grid-column:1/-1;grid-row:1}.person,.contactGrid,.areaFaq{grid-template-columns:1fr}.personPhoto{min-height:460px}}
        @media(max-width:680px){.shell{width:min(100% - 28px,1260px)}.demoBar{height:auto;min-height:31px;text-align:center;padding:7px 12px;line-height:1.35}.siteNav{height:62px}.brand{font-size:17px}.brand small{display:none}.phoneMini{display:none}.navActions .btn{min-height:37px;padding:0 12px}.hero{padding-top:14px}.heroGrid{grid-template-rows:auto 390px auto}.heroCopy{padding:32px 24px 26px}.hero h1{font-size:clamp(50px,16vw,76px);margin:28px 0 22px}.heroLead{font-size:15px}.heroCtas{flex-direction:column}.heroCtas .btn{width:100%}.heroVisual{min-height:390px}.heroStamp{width:82px;height:82px;font-size:9px}.heroProof{grid-template-columns:1fr 1fr}.proofIntro{padding:17px}.proof{padding:15px}.section{padding:68px 0}.sectionHead h2{font-size:44px}.situations{grid-template-columns:1fr}.situation{min-height:350px;padding:26px}.situation h3{margin-top:50px;font-size:41px}.servicesGrid,.promiseGrid{grid-template-columns:1fr}.service{min-height:260px}.projects{display:grid;grid-template-columns:1fr;grid-template-rows:420px 260px 260px}.project:first-child{grid-column:1;grid-row:1}.workNote{flex-direction:column}.personPhoto{min-height:390px}.personCopy{padding:40px 25px}.personFacts{grid-template-columns:1fr}.steps{grid-template-columns:1fr}.step{min-height:220px}.areaBox{padding:28px;min-height:470px}.contactGrid{gap:35px}.fakeForm{grid-template-columns:1fr}.fakeField,.fakeField.wide,.fakeForm .btn,.formNote{grid-column:1}.demoFooterInner{grid-template-columns:1fr}.heroCaption{left:14px;right:14px}.heroCaption strong{font-size:15px}}
      `}</style>

      <div className="demoBar">Ukázkový koncept SpustWeb.cz · nejde o skutečnou firmu <a href="/">Zpět na SpustWeb.cz</a></div>

      <div className="shell">
        <nav className="siteNav" aria-label="Navigace ukázkového webu">
          <a className="brand" href="#top" aria-label="Novák voda a topení"><span className="brandMark"/><span>NOVÁK<small>VODA & TOPENÍ</small></span></a>
          <div className="navLinks"><a href="#sluzby">Služby</a><a href="#realizace">Realizace</a><a href="#o-nas">O nás</a><a href="#faq">Časté dotazy</a></div>
          <div className="navActions"><a className="phoneMini" href="tel:+420777000000">777 000 000</a><a className="btn btnSignal" href="#kontakt">Poptávka</a></div>
        </nav>
      </div>

      <header className="hero" id="top">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">České Budějovice a okolí</div>
            <h1>Voda a topení. Bez zbytečného čekání.</h1>
            <p className="heroLead">Opravy, nové rozvody, koupelny a topné systémy pro domy a byty. Akutní závady řešíme telefonicky, plánované práce můžete jednoduše poptat online.</p>
            <div className="heroCtas"><a className="btn btnSignal" href="tel:+420777000000"><Phone size={16}/> Potřebuji rychlou pomoc</a><a className="btn btnAcid" href="#kontakt">Plánuji zakázku <ArrowRight size={16}/></a></div>
            <div className="heroNote"><Camera size={15}/><span><strong>Pošlete fotografii závady.</strong> Často podle ní poznáme, co bude potřeba.</span></div>
          </div>
          <div className="heroVisual">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=86" alt="Instalatér pracující na rozvodech v technickém prostoru"/>
            <div className="heroStamp">MENŠÍ OPRAVY I CELÉ REALIZACE</div>
            <div className="heroCaption"><div><strong>Nejdřív zjistit problém. Pak teprve řešit.</strong><span>Voda · topení · koupelny · odpady</span></div><div className="circle"><Wrench size={18}/></div></div>
          </div>
          <div className="heroProof"><div className="proofIntro">Co chcete vědět ještě před prvním telefonátem:</div><div className="proof">15 let praxe<span>voda a topení</span></div><div className="proof">Cena předem<span>ne až po práci</span></div><div className="proof">Pojištění<span>odpovědnost za škodu</span></div><div className="proof">30 km<span>běžná oblast výjezdu</span></div></div>
        </div>
      </header>

      <section className="section" aria-labelledby="situace-title">
        <div className="shell">
          <div className="sectionHead"><div className="kicker">Podle situace</div><div><h2 id="situace-title">Jiný postup, když teče voda. Jiný, když plánujete koupelnu.</h2><p>Na webu nemusíte hledat, pod jakou službu váš problém patří. Stačí začít podle toho, co právě potřebujete.</p></div></div>
          <div className="situations">
            <article className="situation hot"><div className="situationTop"><span className="situationNo">01 · AKUTNÍ ZÁVADA</span><span className="situationIcon"><Phone size={22}/></span></div><h3>Něco nefunguje?</h3><div className="tagRow"><span>prasklá voda</span><span>únik vody</span><span>topení netopí</span><span>bojler</span><span>ucpaný odpad</span></div><a className="btn btnDark" href="tel:+420777000000">Zavolat 777 000 000</a></article>
            <article className="situation calm"><div className="situationTop"><span className="situationNo">02 · PLÁNOVANÁ PRÁCE</span><span className="situationIcon"><Camera size={22}/></span></div><h3>Chystáte rekonstrukci nebo novou instalaci?</h3><div className="tagRow"><span>nové rozvody</span><span>koupelna</span><span>podlahové topení</span><span>technická místnost</span></div><a className="btn" href="#kontakt">Poslat poptávku a fotografie <ArrowRight size={15}/></a></article>
          </div>
        </div>
      </section>

      <section className="section" id="sluzby">
        <div className="shell">
          <div className="sectionHead"><div className="kicker">Co řešíme</div><div><h2>Od kapající baterie po nové rozvody v celém domě.</h2><p>Čtyři hlavní oblasti. U každé rovnou vidíte, jaké práce pod ni běžně patří.</p></div></div>
          <div className="servicesGrid">{services.map(({icon:Icon,no,title,text})=><article className="service" key={title}><span className="serviceNo">{no}</span><div className="serviceIcon"><Icon size={23}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="workSection" id="realizace">
        <div className="shell workWrap">
          <div className="sectionHead"><div className="kicker">Z posledních prací</div><div><h2>Práci je lepší ukázat než popisovat.</h2><p>Tři různé typy zakázek. Fotografie tu nejsou dekorace, ale rychlý důkaz rozsahu a způsobu práce.</p></div></div>
          <div className="projects">
            <article className="project"><img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=84" alt="Rozvody vody a topení při rekonstrukci domu"/><div className="projectText"><small>České Budějovice · rekonstrukce</small><h3>Nové rozvody vody v rodinném domě</h3></div></article>
            <article className="project"><img src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1000&q=84" alt="Technická místnost s rozvody"/><div className="projectText"><small>Rudolfov · voda + topení</small><h3>Technická místnost rodinného domu</h3></div></article>
            <article className="project"><img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=84" alt="Koupelna po dokončení instalatérských prací"/><div className="projectText"><small>Hluboká nad Vltavou · rekonstrukce</small><h3>Instalace pro novou koupelnu</h3></div></article>
          </div>
          <div className="workNote"><span><strong>Ukázkový obsah.</strong> Firma ani uvedené realizace nejsou skutečné.</span><span>Na skutečném webu by byly fotografie přímo z vašich zakázek.</span></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHead"><div className="kicker">Co můžete čekat</div><div><h2>Ne sliby. Konkrétní pravidla spolupráce.</h2></div></div>
          <div className="promiseGrid"><article className="promise"><div className="promiseMark">01</div><strong>Cena před zahájením práce</strong><p>U běžných oprav cenu nebo způsob účtování domluvíme předem. U větší realizace připravíme nabídku.</p></article><article className="promise"><div className="promiseMark">02</div><strong>Domluvený termín platí</strong><p>Pokud se něco změní, dáme vědět. Bez celodenního čekání na neurčitý příjezd.</p></article><article className="promise"><div className="promiseMark">03</div><strong>Po práci uklidíme</strong><p>Místo předáme tak, aby po nás nezůstala zbytečná práce navíc.</p></article><article className="promise"><div className="promiseMark">04</div><strong>Odborná práce a pojištění</strong><p>Na skutečném webu zde patří konkrétní oprávnění, pojištění a záruka na provedenou práci.</p></article></div>
        </div>
      </section>

      <section className="section" id="o-nas">
        <div className="shell person">
          <div className="personPhoto"><img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1100&q=86" alt="Řemeslník při práci"/><div className="personPhotoTag">UKÁZKOVÁ FOTOGRAFIE · NA OSTRÉM WEBU SKUTEČNÝ ČLOVĚK</div></div>
          <div className="personCopy"><div className="kicker">Kdo přijede</div><h2>Jan Novák</h2><p>Instalatér a topenář z Českých Budějovic. Menší opravy řeší osobně, na větší realizace jezdí ve dvou. Tahle část webu má ukázat konkrétního člověka, ne anonymní „náš tým“.</p><div className="personFacts"><div className="personFact">15 let<span>praxe v oboru</span></div><div className="personFact"><ShieldCheck size={16}/> Pojištění<span>odpovědnosti</span></div><div className="personFact"><MapPin size={16}/> Budějovice<span>a okolí</span></div></div></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHead"><div className="kicker">Jak zakázka probíhá</div><div><h2>Tři kroky. Nic složitějšího není potřeba.</h2></div></div>
          <div className="steps"><article className="step"><div className="stepNo">1</div><h3>Ozvete se</h3><p>Telefonicky nebo formulářem. U plánované práce můžete rovnou přiložit fotografie.</p></article><article className="step"><div className="stepNo">2</div><h3>Domluvíme rozsah</h3><p>U větší zakázky proběhne obhlídka a cenová nabídka. U malé opravy domluvíme postup rovnou.</p></article><article className="step"><div className="stepNo">3</div><h3>Přijedeme a provedeme práci</h3><p>Domluvený rozsah, termín a následné předání bez zbytečných mezikroků.</p></article></div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="shell areaFaq">
          <div className="areaBox"><h3>České Budějovice + okolí</h3><p>Běžně vyjíždíme přibližně do 30 km od Českých Budějovic. Větší realizace řešíme po dohodě i dále.</p><div className="towns"><span>České Budějovice</span><span>Rudolfov</span><span>Hluboká nad Vltavou</span><span>Lišov</span><span>Borovany</span><span>Třeboň</span></div><div className="mapSketch"><div className="mapRadius"/><div className="mapDot"/><div className="mapLabel">ČESKÉ BUDĚJOVICE</div></div></div>
          <div><div className="kicker" style={{marginBottom:18}}>Časté dotazy</div><div className="faq">{faqs.map(([q,a])=><article className="faqItem" key={q}><h3>{q}</h3><p>{a}</p></article>)}</div></div>
        </div>
      </section>

      <section className="contactPanel" id="kontakt">
        <div className="shell contactGrid">
          <div><div className="kicker" style={{color:'#d8f765',marginBottom:22}}>Kontakt</div><h2>Teče voda? Volejte. Plánujete práci? Napište.</h2><p>U skutečného webu by tady vedly dvě jasné cesty podle situace. Telefon pro akutní problém a krátká poptávka pro plánovanou zakázku.</p><div className="contactChoices"><a className="btn btnSignal" href="tel:+420777000000"><Phone size={16}/> 777 000 000</a><a className="btn" href="mailto:ukazka@spustweb.cz">ukazka@spustweb.cz</a></div></div>
          <div className="fakeForm" aria-label="Ukázka poptávkového formuláře"><div className="fakeField">Jméno</div><div className="fakeField">Telefon</div><div className="fakeField wide">Obec</div><div className="fakeField wide big">Co potřebujete?</div><div className="fakeField wide"><Camera size={14}/> &nbsp; Přiložit fotografie</div><div className="btn btnDark">Odeslat poptávku <ArrowRight size={15}/></div><div className="formNote">Ukázkový formulář není aktivní. Tato stránka představuje možnou podobu webu pro instalatéra.</div></div>
        </div>
      </section>

      <footer className="demoFooter"><div className="shell demoFooterInner"><div><strong>NOVÁK VODA & TOPENÍ</strong><br/>Fiktivní firma vytvořená pouze jako ukázkový koncept.</div><div>Tento web vytvořil <a href="/">SpustWeb.cz</a> · <a href="/#kontakt">Chci web pro své podnikání</a></div></div></footer>
    </div>
  )
}
