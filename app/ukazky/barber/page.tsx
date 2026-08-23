import type { Metadata } from 'next'
import { ArrowRight, CalendarDays, Clock3, MapPin, Phone, Scissors } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ukázkový web pro barber shop | SpustWeb.cz',
  description: 'Ukázka webu pro barber shop: střihy, vousy, ceník, barbeři, práce, provozovna a online rezervace.',
  alternates: { canonical: 'https://spustweb.cz/ukazky/barber/' },
  robots: { index: true, follow: true },
}

const services = [
  ['Pánský střih', '650 Kč', 'Střih nůžkami a strojkem, mytí a styling.'],
  ['Střih strojkem', '450 Kč', 'Krátký střih bez práce nůžkami.'],
  ['Střih + vousy', '950 Kč', 'Kompletní střih vlasů a úprava vousů při jedné návštěvě.'],
  ['Úprava vousů', '450 Kč', 'Zastřižení, tvar, kontury a závěrečná péče.'],
  ['Holení břitvou', '550 Kč', 'Napaření, holení břitvou a ošetření pokožky.'],
  ['Dětský střih do 12 let', '490 Kč', 'Klasický pánský střih pro mladší klienty.'],
]

const work = [
  ['https://images.pexels.com/photos/7781848/pexels-photo-7781848.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Hotový krátký pánský střih s čistou konturou'],
  ['https://images.pexels.com/photos/4625632/pexels-photo-4625632.jpeg?auto=compress&cs=tinysrgb&w=1400', 'Detail strojkového střihu při práci'],
  ['https://images.pexels.com/photos/2035310/pexels-photo-2035310.jpeg?auto=compress&cs=tinysrgb&w=1500', 'Úprava vousů v barbershopu'],
  ['https://images.pexels.com/photos/10003357/pexels-photo-10003357.jpeg?auto=compress&cs=tinysrgb&w=1500', 'Hotový střih a upravené vousy'],
]

const barbers = [
  ['Marek', 'fade · delší vlasy', 'https://images.pexels.com/photos/4625614/pexels-photo-4625614.jpeg?auto=compress&cs=tinysrgb&w=1500'],
  ['David', 'vousy · břitva · klasika', 'https://images.pexels.com/photos/7518735/pexels-photo-7518735.jpeg?auto=compress&cs=tinysrgb&w=1500'],
  ['Tomáš', 'krátké střihy · crop · styling', 'https://images.pexels.com/photos/9992818/pexels-photo-9992818.jpeg?auto=compress&cs=tinysrgb&w=1500'],
]

export default function BarberShowcase() {
  return (
    <div className="br5" id="top">
      <style>{`
        body:has(.br5) > .verno-nav-shell,body:has(.br5) > .footer{display:none!important}
        body:has(.br5) main{padding:0!important;margin:0!important}
        body:has(.br5){background:#f1ede4!important}
        .br5{--ink:#111;--paper:#f1ede4;--blue:#1844c7;--rust:#bd5d34;--acid:#d8f64c;--white:#fff;--line:rgba(17,17,17,.22);font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--paper)}
        .br5 *{box-sizing:border-box}.br5 a{color:inherit;text-decoration:none}.br5 img{display:block;width:100%}.br5Wrap{width:min(1320px,calc(100% - 56px));margin:0 auto}
        .br5Demo{min-height:24px;padding:5px 12px;background:#111;color:#d8d8d8;text-align:center;font-size:8.5px;font-weight:800;letter-spacing:.09em;text-transform:uppercase}.br5Demo a{color:#fff!important;text-decoration:underline;text-underline-offset:3px;margin-left:8px}
        .br5Nav{background:var(--paper);border-bottom:1px solid #111}.br5NavIn{height:54px;display:flex;align-items:center;justify-content:space-between;gap:24px}.br5Brand{font-size:19px;font-weight:900;letter-spacing:-.05em}.br5Links{display:flex;align-items:center;gap:24px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.04em}.br5BookTop{background:#111;color:#fff!important;padding:9px 12px;display:inline-flex;align-items:center;gap:7px}

        .br5Hero{overflow:hidden;background:var(--paper)}.br5HeroGrid{height:calc(100svh - 78px);min-height:650px;max-height:850px;display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:1fr 1fr;gap:12px;position:relative;padding:24px 0 28px}.br5HeroMeta{position:absolute;left:0;top:26px;font-size:9.5px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;z-index:5}.br5HeroWord{position:absolute;left:0;top:46%;transform:translateY(-50%);z-index:6;font-size:clamp(86px,12.5vw,182px);font-weight:900;line-height:.69;letter-spacing:-.1em;max-width:920px;pointer-events:none}.br5HeroWord span{display:block}.br5HeroWord .br5Num{color:var(--blue);-webkit-text-stroke:0}.br5HeroMain{grid-column:7/13;grid-row:1/3;margin:0;overflow:hidden;background:#ccc}.br5HeroMain img{height:100%;object-fit:cover;object-position:center 42%;filter:saturate(.8) contrast(1.02)}.br5HeroDetail{grid-column:5/8;grid-row:2;margin:0 0 12px;height:230px;align-self:end;overflow:hidden;border:9px solid var(--paper);z-index:7}.br5HeroDetail img{height:100%;object-fit:cover}.br5HeroCopy{position:absolute;left:0;bottom:34px;width:390px;z-index:8;font-size:14px;line-height:1.58}.br5HeroCopy p{margin:0 0 14px}.br5HeroCopy a{font-size:10.5px;font-weight:900;border-bottom:1px solid #111;padding-bottom:3px}.br5HeroTag{position:absolute;right:20px;bottom:20px;background:var(--rust);color:#fff;z-index:8;padding:14px 17px;font-size:9px;font-weight:900;line-height:1.25;transform:rotate(2deg)}

        .br5Facts{background:var(--blue);color:#fff}.br5FactsIn{min-height:58px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;font-size:10.5px}.br5FactsIn span{display:flex;align-items:center;gap:7px}

        .br5Menu{padding:82px 0 96px;background:var(--paper)}.br5MenuTop{display:flex;justify-content:space-between;align-items:end;gap:50px;margin-bottom:38px}.br5MenuTop h2{font-size:clamp(58px,6.8vw,94px);font-weight:900;letter-spacing:-.085em;line-height:.78;margin:0}.br5MenuTop p{max-width:470px;font-size:13.5px;line-height:1.6;color:#555;margin:0}.br5MenuList{border-top:4px solid #111}.br5Service{display:grid;grid-template-columns:1fr auto;gap:7px 30px;padding:22px 0 20px;border-bottom:1px solid var(--line)}.br5Service strong{font-size:clamp(24px,2.4vw,34px);letter-spacing:-.045em}.br5Service b{font-size:15px;align-self:center}.br5Service p{grid-column:1/-1;margin:0;font-size:12px;line-height:1.5;color:#626262;max-width:620px}

        .br5Work{background:#fff;padding:80px 0 96px}.br5WorkTop{display:grid;grid-template-columns:.78fr 1.22fr;gap:70px;align-items:end;margin-bottom:30px}.br5Work h2{font-size:clamp(62px,8vw,110px);font-weight:900;line-height:.77;letter-spacing:-.09em;margin:0}.br5WorkTop p{max-width:480px;font-size:13px;line-height:1.6;color:#666;margin:0}.br5WorkGrid{display:grid;grid-template-columns:1.28fr .72fr 1fr;grid-template-rows:310px 245px;gap:10px}.br5WorkGrid figure{margin:0;position:relative;overflow:hidden;background:#ddd}.br5WorkGrid figure:nth-child(1){grid-column:1;grid-row:1/3}.br5WorkGrid figure:nth-child(2){grid-column:2;grid-row:1}.br5WorkGrid figure:nth-child(3){grid-column:3;grid-row:1/3}.br5WorkGrid figure:nth-child(4){grid-column:2;grid-row:2}.br5WorkGrid img{height:100%;object-fit:cover;filter:saturate(.82)}.br5WorkGrid figcaption{position:absolute;left:10px;bottom:10px;background:var(--acid);padding:6px 8px;font-size:8px;font-weight:900}.br5WorkFoot{margin-top:14px;display:flex;justify-content:space-between;gap:30px;font-size:10px;color:#777}

        .br5People{padding:90px 0 100px;background:var(--paper);overflow:hidden}.br5PeopleIntro{display:flex;align-items:end;justify-content:space-between;gap:50px;margin-bottom:34px}.br5PeopleIntro h2{font-size:clamp(58px,7vw,96px);font-weight:900;letter-spacing:-.085em;line-height:.78;margin:0}.br5PeopleIntro p{max-width:460px;font-size:13px;line-height:1.6;color:#555;margin:0}.br5PeopleCanvas{display:grid;grid-template-columns:1.12fr .78fr .92fr;gap:18px;align-items:start}.br5Person{position:relative}.br5Person:nth-child(2){margin-top:120px}.br5Person:nth-child(3){margin-top:42px}.br5PersonPhoto{overflow:hidden;background:#ccc}.br5Person:nth-child(1) .br5PersonPhoto{height:600px}.br5Person:nth-child(2) .br5PersonPhoto{height:420px}.br5Person:nth-child(3) .br5PersonPhoto{height:510px}.br5PersonPhoto img{height:100%;object-fit:cover;filter:saturate(.68) contrast(1.03)}.br5PersonName{font-size:30px;font-weight:900;letter-spacing:-.05em;margin-top:11px}.br5PersonRole{font-size:10px;color:#666;margin-top:3px}

        .br5Shop{background:#111;color:#fff;padding:0 0 54px}.br5ShopPhoto{height:650px;overflow:hidden}.br5ShopPhoto img{height:100%;object-fit:cover;object-position:center;filter:saturate(.72) contrast(1.03)}.br5ShopInfo{display:grid;grid-template-columns:1.1fr .9fr .9fr .9fr;gap:28px;padding-top:22px;border-top:1px solid #555;margin-top:22px}.br5ShopName{font-size:44px;font-weight:900;letter-spacing:-.065em;line-height:.88}.br5ShopInfo div:not(.br5ShopName){font-size:10.5px;line-height:1.55;color:#aaa}.br5ShopInfo strong{color:#fff;font-size:10.5px}

        .br5Booking{background:var(--blue);color:#fff;padding:58px 0}.br5BookingIn{display:grid;grid-template-columns:.65fr 1.35fr;gap:60px;align-items:center}.br5BookingTitle{font-size:clamp(48px,5.6vw,76px);font-weight:900;letter-spacing:-.075em;line-height:.82}.br5BookFlow{display:grid;grid-template-columns:1fr 1fr 1fr auto;border-top:1px solid rgba(255,255,255,.7);border-bottom:1px solid rgba(255,255,255,.7)}.br5BookCell{padding:16px 18px;border-right:1px solid rgba(255,255,255,.45)}.br5BookCell small{display:block;font-size:8px;text-transform:uppercase;letter-spacing:.11em;color:#cdd7ff;margin-bottom:8px}.br5BookCell strong{font-size:13px}.br5BookButton{border:0;background:var(--acid);color:#111;padding:0 24px;font-size:10px;font-weight:900;display:flex;align-items:center;justify-content:center;gap:8px}.br5BookHint{margin-top:9px;font-size:8.5px;color:#dce3ff}

        .br5Footer{background:#111;color:#fff;padding:38px 0}.br5FooterIn{display:grid;grid-template-columns:1.2fr 1fr auto;gap:45px;align-items:center}.br5FooterName{font-size:30px;font-weight:900;letter-spacing:-.06em}.br5FooterText{font-size:10px;line-height:1.6;color:#aaa}.br5FooterText strong{color:#fff}.br5FooterCta{background:var(--acid);color:#111!important;padding:11px 13px;font-size:10px;font-weight:900;white-space:nowrap}

        @media(max-width:980px){.br5HeroGrid{height:auto;min-height:720px}.br5HeroWord{font-size:clamp(82px,15vw,140px)}.br5HeroMain{grid-column:6/13}.br5HeroDetail{grid-column:4/8}.br5MenuTop,.br5PeopleIntro{display:block}.br5MenuTop p,.br5PeopleIntro p{margin-top:20px}.br5WorkTop{grid-template-columns:1fr;gap:22px}.br5PeopleCanvas{grid-template-columns:1fr 1fr}.br5Person:nth-child(1){grid-column:1/-1}.br5Person:nth-child(2),.br5Person:nth-child(3){margin-top:0}.br5Person:nth-child(n) .br5PersonPhoto{height:460px}.br5ShopPhoto{height:540px}.br5ShopInfo{grid-template-columns:1fr 1fr}.br5ShopName{grid-column:1/-1}.br5BookingIn{grid-template-columns:1fr}.br5BookFlow{grid-template-columns:1fr 1fr}.br5BookCell:nth-child(2){border-right:0}.br5BookCell{border-bottom:1px solid rgba(255,255,255,.45)}.br5BookButton{grid-column:1/-1;min-height:52px}.br5FooterIn{grid-template-columns:1fr 1fr}.br5FooterCta{grid-column:1/-1;justify-self:start}}
        @media(max-width:680px){.br5Wrap{width:min(100% - 28px,1320px)}.br5Demo{font-size:7.5px}.br5Links a:not(.br5BookTop){display:none}.br5NavIn{height:50px}.br5HeroGrid{min-height:660px;padding-top:18px}.br5HeroWord{top:37%;font-size:clamp(74px,23vw,102px)}.br5HeroMain{grid-column:3/13}.br5HeroDetail{grid-column:1/6;height:180px}.br5HeroCopy{width:84%;bottom:20px;font-size:13px}.br5HeroTag{right:7px;bottom:7px}.br5FactsIn{padding:12px 0;justify-content:flex-start}.br5Menu{padding:60px 0 68px}.br5Work{padding:60px 0 68px}.br5WorkGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}.br5WorkGrid figure:nth-child(n){grid-column:auto;grid-row:auto;height:240px}.br5WorkGrid figure:nth-child(1){grid-column:1/-1;height:380px}.br5WorkFoot{display:block}.br5WorkFoot span{display:block;margin-top:6px}.br5People{padding:62px 0 70px}.br5PeopleCanvas{grid-template-columns:1fr}.br5Person:nth-child(1){grid-column:auto}.br5Person:nth-child(n) .br5PersonPhoto{height:420px}.br5ShopPhoto{height:460px}.br5ShopInfo{grid-template-columns:1fr}.br5ShopName{grid-column:auto}.br5Booking{padding:48px 0}.br5BookFlow{grid-template-columns:1fr}.br5BookCell{border-right:0}.br5FooterIn{grid-template-columns:1fr;gap:18px}}
      `}</style>

      <div className="br5Demo">UKÁZKOVÝ KONCEPT SPUSTWEB.CZ · NEJDE O SKUTEČNOU FIRMU <a href="/">ZPĚT NA SPUSTWEB.CZ</a></div>
      <nav className="br5Nav" aria-label="Navigace ukázkového barber shopu"><div className="br5Wrap br5NavIn"><a className="br5Brand" href="#top">KŘESLO 39</a><div className="br5Links"><a href="#cenik">Ceník</a><a href="#prace">Práce</a><a href="#barberi">Barbeři</a><a href="#provozovna">Provozovna</a><a className="br5BookTop" href="#rezervace">Rezervace <CalendarDays size={12}/></a></div></div></nav>

      <header className="br5Hero"><div className="br5Wrap br5HeroGrid"><div className="br5HeroMeta">BARBERSHOP · BRNO · 2 KŘESLA</div><div className="br5HeroWord"><span>KŘESLO</span><span className="br5Num">39</span></div><figure className="br5HeroMain"><img src="https://images.pexels.com/photos/4625614/pexels-photo-4625614.jpeg?auto=compress&cs=tinysrgb&w=1900" alt="Barber při pánském střihu v menším barbershopu"/></figure><figure className="br5HeroDetail"><img src="https://images.pexels.com/photos/7781848/pexels-photo-7781848.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Hotový pánský střih"/></figure><div className="br5HeroCopy"><p>Pánské střihy, vousy a holení břitvou. Dva barbeři, dvě pracovní místa a rezervace online.</p><a href="#rezervace">Vybrat termín →</a></div><div className="br5HeroTag">VOLNÉ TERMÍNY<br/>ONLINE</div></div></header>

      <div className="br5Facts"><div className="br5Wrap br5FactsIn"><span><MapPin size={14}/> Brno–Žabovřesky</span><span><Clock3 size={14}/> Po–Pá 10:00–20:00 · So 9:00–15:00</span><span><Scissors size={14}/> 2 barbeři</span><span><Phone size={14}/> 777 000 000</span></div></div>

      <section className="br5Menu" id="cenik"><div className="br5Wrap"><div className="br5MenuTop"><h2>Ceník.</h2><p>Všechny ceny jsou za kompletní službu. Cena je známá před návštěvou.</p></div><div className="br5MenuList">{services.map(([name,price,text])=><div className="br5Service" key={name}><strong>{name}</strong><b>{price}</b><p>{text}</p></div>)}</div></div></section>

      <section className="br5Work" id="prace"><div className="br5Wrap"><div className="br5WorkTop"><h2>Střihy a vousy.</h2><p>Ukázky výsledků i detailů práce. Fotografie jsou ilustrační a slouží pouze pro tento koncept.</p></div><div className="br5WorkGrid">{work.map(([src,alt],i)=><figure key={src}><img src={src} alt={alt}/><figcaption>0{i+1}</figcaption></figure>)}</div><div className="br5WorkFoot"><span>Krátké střihy · fade · delší vlasy · vousy · břitva</span><span>Ilustrační fotografie z Pexels</span></div></div></section>

      <section className="br5People" id="barberi"><div className="br5Wrap"><div className="br5PeopleIntro"><h2>Barbeři.</h2><p>Při rezervaci si můžete vybrat konkrétního barbera nebo první volný termín.</p></div><div className="br5PeopleCanvas">{barbers.map(([name,role,image])=><article className="br5Person" key={name}><div className="br5PersonPhoto"><img src={image} alt={`Barber ${name} při práci`}/></div><div className="br5PersonName">{name}</div><div className="br5PersonRole">{role}</div></article>)}</div></div></section>

      <section className="br5Shop" id="provozovna"><div className="br5ShopPhoto"><img src="https://images.pexels.com/photos/4625614/pexels-photo-4625614.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Interiér menšího barbershopu s pracovním křeslem"/></div><div className="br5Wrap br5ShopInfo"><div className="br5ShopName">Křeslo 39.</div><div><strong>Adresa</strong><br/>Tábor 39 · Brno–Žabovřesky</div><div><strong>Otevírací doba</strong><br/>Po–Pá 10:00–20:00<br/>So 9:00–15:00</div><div><strong>Kontakt</strong><br/>777 000 000<br/>rezervace online</div></div></section>

      <section className="br5Booking" id="rezervace"><div className="br5Wrap br5BookingIn"><div className="br5BookingTitle">Rezervace.</div><div><div className="br5BookFlow"><div className="br5BookCell"><small>Služba</small><strong>Pánský střih</strong></div><div className="br5BookCell"><small>Barber</small><strong>Marek</strong></div><div className="br5BookCell"><small>Termín</small><strong>Úterý 25. 8. · 16:30</strong></div><button className="br5BookButton" type="button">Pokračovat <ArrowRight size={13}/></button></div><div className="br5BookHint">Ukázkové rezervační rozhraní není aktivní.</div></div></div></section>

      <footer className="br5Footer"><div className="br5Wrap br5FooterIn"><div className="br5FooterName">KŘESLO 39</div><div className="br5FooterText"><strong>Barbershop · Brno</strong><br/>Fiktivní ukázkový koncept.<br/>777 000 000</div><a className="br5FooterCta" href="/#kontakt">Podobný web pro moje podnikání</a></div></footer>
    </div>
  )
}
