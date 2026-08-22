import type { Metadata } from 'next'
import { ArrowRight, Bike, CalendarDays, Car, Clock3, Coffee, MapPin, PawPrint, Phone, Wifi } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ukázkový web pro penzion | SpustWeb.cz',
  description: 'Ukázka webu pro menší penzion: pokoje, vybavení, snídaně, okolí, praktické informace a rezervace pobytu.',
  alternates: { canonical: 'https://spustweb.cz/ukazky/penzion/' },
  robots: { index: true, follow: true },
}

const rooms = [
  {
    no: '01',
    name: 'Pokoj U zahrady',
    meta: '2 hosté · 24 m²',
    price: 'od 2 190 Kč / noc',
    text: 'Pokoj v přízemí s okny do zahrady. Vlastní koupelna, malá lednice a místo k posezení.',
    image: 'https://images.pexels.com/photos/15699340/pexels-photo-15699340.jpeg?auto=compress&cs=tinysrgb&w=1800',
    alt: 'Dvoulůžkový pokoj s dřevěnými trámy a světlým povlečením',
  },
  {
    no: '02',
    name: 'Pokoj Pod střechou',
    meta: '2 hosté · 28 m²',
    price: 'od 2 390 Kč / noc',
    text: 'Prostornější pokoj v podkroví. Dřevěné trámy, koupelna se sprchou a výhled do dvora.',
    image: 'https://images.pexels.com/photos/11933083/pexels-photo-11933083.jpeg?auto=compress&cs=tinysrgb&w=1800',
    alt: 'Světlý podkrovní pokoj s manželskou postelí',
  },
  {
    no: '03',
    name: 'Rodinný pokoj',
    meta: '2–4 hosté · 36 m²',
    price: 'od 3 090 Kč / noc',
    text: 'Dvě navazující části pro rodiče a děti. Vlastní koupelna, úložný prostor a dost místa i na delší pobyt.',
    image: 'https://images.pexels.com/photos/28297757/pexels-photo-28297757.jpeg?auto=compress&cs=tinysrgb&w=1800',
    alt: 'Rodinný pokoj s dřevěnými prvky a dvěma lůžkovými částmi',
  },
]

const practical = [
  ['Check-in', '15:00–19:00'],
  ['Check-out', 'do 10:30'],
  ['Snídaně', '8:00–10:00'],
  ['Parkování', 'zdarma u domu'],
  ['Kola', 'uzamykatelná kolárna'],
  ['Pes', 'po předchozí dohodě'],
]

export default function GuesthouseShowcase() {
  return (
    <div className="gh3" id="top">
      <style>{`
        body:has(.gh3) > .verno-nav-shell,body:has(.gh3) > .footer{display:none!important}
        body:has(.gh3) main{padding:0!important;margin:0!important}
        body:has(.gh3){background:#f7f7f4!important}
        .gh3{--ink:#17231f;--forest:#17372f;--forest2:#21483d;--white:#f7f7f4;--paper:#fff;--blue:#b8ced0;--wine:#8a4351;--line:rgba(23,35,31,.16);font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--white)}
        .gh3 *{box-sizing:border-box}.gh3 a{color:inherit;text-decoration:none}.gh3 img{display:block;width:100%}.gh3Wrap{width:min(1280px,calc(100% - 54px));margin:0 auto}.gh3Serif{font-family:Georgia,'Times New Roman',serif}.gh3Meta{font-size:9px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.gh3Muted{color:#6d746f}

        .gh3Demo{min-height:24px;padding:5px 12px;background:#0f1a17;color:#cfd7d2;display:flex;justify-content:center;align-items:center;font-size:8.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.gh3Demo a{color:#fff!important;text-decoration:underline;text-underline-offset:3px;margin-left:8px}
        .gh3NavShell{position:sticky;top:0;z-index:150;background:rgba(23,55,47,.94);backdrop-filter:blur(14px);color:#fff;border-bottom:1px solid rgba(255,255,255,.12)}.gh3Nav{height:64px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:28px}.gh3Brand{display:flex;align-items:baseline;gap:14px}.gh3Brand strong{font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:400;font-style:italic}.gh3Brand span{font-size:8px;letter-spacing:.13em;text-transform:uppercase;color:#b9c7c0}.gh3NavRight{display:flex;align-items:center;gap:26px}.gh3Links{display:flex;gap:24px;font-size:10px;font-weight:700}.gh3Links a{opacity:.82}.gh3Links a:hover{opacity:1}.gh3BookSmall{min-height:36px;padding:0 14px;background:#fff;color:var(--forest)!important;display:inline-flex;align-items:center;gap:7px;font-size:9.5px;font-weight:900}

        .gh3Hero{position:relative;min-height:760px;background:#243a34;color:#fff;overflow:hidden}.gh3Hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 50%;filter:saturate(.66) contrast(1.04) brightness(.72)}.gh3Hero:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,19,16,.14),rgba(10,19,16,.18) 42%,rgba(10,19,16,.76) 100%),linear-gradient(90deg,rgba(10,19,16,.56),transparent 60%)}.gh3HeroInner{position:relative;z-index:2;min-height:760px;display:grid;grid-template-columns:1fr 360px;align-items:end;gap:70px;padding-bottom:56px}.gh3HeroTitle{max-width:860px}.gh3HeroTitle .gh3Meta{color:#d7e2dd;margin-bottom:18px}.gh3Hero h1{font-family:Georgia,'Times New Roman',serif;font-size:clamp(66px,8vw,112px);font-weight:400;line-height:.84;letter-spacing:-.055em;margin:0}.gh3HeroLead{font-size:13px;line-height:1.62;color:#eef1ee;max-width:540px;margin:24px 0 0}.gh3HeroBook{background:rgba(247,247,244,.95);color:var(--ink);padding:22px}.gh3HeroBookTop{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:16px}.gh3HeroBookTop strong{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:22px}.gh3HeroBookTop span{font-size:8.5px;color:#69716c}.gh3HeroFields{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line);border-left:1px solid var(--line)}.gh3HeroField{padding:13px 12px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:64px}.gh3HeroField small{display:block;font-size:7.5px;text-transform:uppercase;letter-spacing:.11em;color:#7b817d;margin-bottom:6px}.gh3HeroField strong{font-size:11px}.gh3HeroBookBtn{margin-top:12px;width:100%;min-height:44px;border:0;background:var(--wine);color:#fff;font-size:10px;font-weight:900;display:flex;align-items:center;justify-content:center;gap:7px}

        .gh3Facts{background:#fff;border-bottom:1px solid var(--line)}.gh3FactsInner{min-height:76px;display:grid;grid-template-columns:repeat(5,1fr);align-items:center}.gh3Fact{padding:0 22px;border-right:1px solid var(--line);font-size:10px;line-height:1.4}.gh3Fact:first-child{padding-left:0}.gh3Fact:last-child{border-right:0}.gh3Fact strong{display:block;font-size:11px;margin-bottom:3px}.gh3Fact span{color:#737a75}

        .gh3Rooms{padding:84px 0 108px;background:#f7f7f4;overflow:hidden}.gh3RoomsHead{display:flex;justify-content:space-between;align-items:end;gap:50px;margin-bottom:44px}.gh3RoomsHead h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(52px,6.3vw,86px);line-height:.88;font-weight:400;letter-spacing:-.05em;margin:0;max-width:760px}.gh3RoomsHead p{max-width:430px;font-size:12px;line-height:1.65;color:#606863;margin:0 0 8px}
        .gh3RoomCanvas{position:relative;min-height:1260px}.gh3RoomCard{position:absolute}.gh3RoomCard img{width:100%;height:100%;object-fit:cover;filter:saturate(.72) contrast(1.02)}.gh3RoomCard:nth-child(1){left:0;top:0;width:58%;height:510px}.gh3RoomCard:nth-child(2){right:0;top:360px;width:44%;height:460px}.gh3RoomCard:nth-child(3){left:9%;top:760px;width:48%;height:430px}.gh3RoomText{position:absolute;background:#fff;padding:22px 24px;width:330px;box-shadow:0 12px 30px rgba(18,30,26,.06)}.gh3RoomCard:nth-child(1) .gh3RoomText{right:-250px;bottom:34px}.gh3RoomCard:nth-child(2) .gh3RoomText{left:-260px;top:44px}.gh3RoomCard:nth-child(3) .gh3RoomText{right:-280px;bottom:28px}.gh3RoomText .gh3Meta{color:var(--wine);margin-bottom:8px}.gh3RoomText h3{font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:400;line-height:1;margin:0 0 8px}.gh3RoomText p{font-size:10.5px;line-height:1.55;color:#5e6661;margin:0 0 13px}.gh3RoomLine{display:flex;justify-content:space-between;gap:15px;border-top:1px solid var(--line);padding-top:11px;font-size:9.5px}.gh3RoomLine strong{font-size:10.5px}

        .gh3Included{background:var(--forest);color:#fff;padding:38px 0}.gh3IncludedInner{display:flex;align-items:center;gap:38px;overflow:hidden}.gh3IncludedTitle{font-family:Georgia,'Times New Roman',serif;font-size:27px;font-weight:400;white-space:nowrap}.gh3Amenities{display:flex;gap:28px;flex-wrap:wrap}.gh3Amenity{display:flex;align-items:center;gap:8px;font-size:10px;color:#d7e1dc}.gh3Amenity strong{color:#fff;font-size:10px}

        .gh3Place{padding:96px 0 110px;background:#fff;overflow:hidden}.gh3PlaceIntro{display:grid;grid-template-columns:.74fr 1.26fr;gap:90px;align-items:start}.gh3PlaceIntro h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(58px,7vw,96px);line-height:.86;font-weight:400;letter-spacing:-.055em;margin:0}.gh3PlaceIntroText{padding-top:18px}.gh3PlaceIntroText p{font-size:12.5px;line-height:1.65;color:#5e6762;max-width:480px;margin:0}.gh3PlaceStory{margin-top:56px;display:grid;grid-template-columns:1fr .72fr;gap:18px;align-items:start}.gh3PlaceTall{height:650px;overflow:hidden}.gh3PlaceTall img{height:100%;object-fit:cover;filter:saturate(.72)}.gh3PlaceSide{display:grid;gap:18px}.gh3PlaceSide figure{margin:0}.gh3PlaceSide img{height:300px;object-fit:cover;filter:saturate(.72)}.gh3PlaceSide figcaption{display:flex;justify-content:space-between;gap:20px;padding:11px 2px 0;font-size:9.5px;color:#59615d}.gh3PlaceSide figcaption strong{font-family:Georgia,'Times New Roman',serif;font-size:16px;font-weight:400;color:var(--ink)}.gh3PlaceNote{margin-top:30px;margin-left:14%;max-width:590px;border-left:1px solid var(--wine);padding-left:22px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.24;color:#24312c}

        .gh3Breakfast{padding:86px 0;background:#dce7e7}.gh3BreakfastHead{display:grid;grid-template-columns:.72fr 1.28fr;gap:70px;align-items:end;margin-bottom:34px}.gh3BreakfastHead h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(48px,5.8vw,78px);line-height:.9;font-weight:400;letter-spacing:-.05em;margin:0}.gh3BreakfastHead p{font-size:12px;line-height:1.65;color:#53605c;max-width:480px;margin:0 0 4px}.gh3BreakfastStrip{display:grid;grid-template-columns:1.2fr .7fr .7fr;gap:10px}.gh3BreakfastStrip img{height:310px;object-fit:cover;filter:saturate(.76)}.gh3BreakfastStrip img:nth-child(2),.gh3BreakfastStrip img:nth-child(3){height:230px;align-self:end}.gh3BreakfastBottom{display:flex;justify-content:space-between;gap:40px;margin-top:20px;border-top:1px solid rgba(23,35,31,.22);padding-top:14px;font-size:10px}.gh3BreakfastBottom strong{font-size:11px}

        .gh3Review{background:#8a4351;color:#fff;padding:74px 0}.gh3ReviewInner{display:grid;grid-template-columns:220px 1fr;gap:60px;align-items:start}.gh3Score strong{font-family:Georgia,'Times New Roman',serif;font-size:94px;font-weight:400;line-height:.8}.gh3Score span{display:block;font-size:9px;color:#f1dfe3;margin-top:11px}.gh3Quote{font-family:Georgia,'Times New Roman',serif;font-size:clamp(34px,4vw,54px);line-height:1.08;font-weight:400;margin:0;max-width:900px}.gh3QuoteBy{font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:#efd8de;margin-top:20px}.gh3ReviewRow{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:30px;padding-top:22px;border-top:1px solid rgba(255,255,255,.3)}.gh3ReviewRow p{font-size:10.5px;line-height:1.55;color:#f5e9ec;margin:0}.gh3DemoLabel{display:inline-block;margin-top:20px;border:1px solid rgba(255,255,255,.35);padding:5px 7px;font-size:8px;color:#f0dfe3}

        .gh3Owners{padding:100px 0;background:#fff}.gh3OwnersScene{position:relative;min-height:560px}.gh3OwnersPhoto{position:absolute;right:0;top:0;width:58%;height:560px;overflow:hidden}.gh3OwnersPhoto img{height:100%;object-fit:cover;filter:saturate(.62) contrast(1.03)}.gh3OwnersText{position:absolute;left:0;top:110px;width:49%;z-index:2;background:#17372f;color:#fff;padding:42px 46px}.gh3OwnersText h2{font-family:Georgia,'Times New Roman',serif;font-size:52px;font-weight:400;line-height:.93;margin:0 0 18px}.gh3OwnersText p{font-size:12px;line-height:1.65;color:#d9e2de;margin:0}.gh3OwnersText small{display:block;margin-top:18px;font-size:9px;color:#b9c9c2}

        .gh3Practical{padding:88px 0;background:#f7f7f4}.gh3PracticalGrid{display:grid;grid-template-columns:.72fr 1.28fr;gap:80px}.gh3PracticalIntro h2{font-family:Georgia,'Times New Roman',serif;font-size:48px;font-weight:400;line-height:.94;margin:0}.gh3PracticalIntro p{font-size:11.5px;line-height:1.6;color:#626a65;max-width:360px;margin:17px 0 0}.gh3PracticalList{border-top:1px solid var(--line)}.gh3PracticalRow{display:grid;grid-template-columns:1fr auto;gap:25px;padding:15px 0;border-bottom:1px solid var(--line);font-size:11px}.gh3PracticalRow strong{font-weight:800}

        .gh3MapSection{background:#dce7e7;padding:56px 0}.gh3MapGrid{display:grid;grid-template-columns:1.3fr .7fr;gap:18px}.gh3Map{position:relative;min-height:430px;background:#cbd7d6;overflow:hidden}.gh3Map:before{content:'';position:absolute;inset:-15%;background:repeating-linear-gradient(24deg,transparent 0 42px,#b7c6c5 43px 45px),repeating-linear-gradient(118deg,transparent 0 68px,#b9c8c6 69px 72px)}.gh3Map:after{content:'';position:absolute;width:24px;height:24px;border:8px solid var(--wine);border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:56%;top:44%;background:#fff}.gh3Road{position:absolute;left:-5%;right:-5%;top:52%;height:13px;background:#f5f7f6;transform:rotate(-8deg);box-shadow:0 0 0 1px #aebdbc}.gh3Road2{position:absolute;top:-15%;bottom:-10%;left:44%;width:12px;background:#f5f7f6;transform:rotate(14deg);box-shadow:0 0 0 1px #aebdbc}.gh3MapCopy{background:#fff;padding:34px;display:flex;flex-direction:column;justify-content:space-between}.gh3MapCopy h2{font-family:Georgia,'Times New Roman',serif;font-size:38px;font-weight:400;line-height:.95;margin:0 0 18px}.gh3MapCopy p{font-size:11px;line-height:1.6;color:#5b645f;margin:0}.gh3MapDetails{display:grid;gap:10px;margin-top:28px;font-size:10px}.gh3MapDetails span{display:flex;align-items:center;gap:8px}

        .gh3ReserveEnd{padding:88px 0 78px;background:#17372f;color:#fff}.gh3ReserveGrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:80px;align-items:start}.gh3ReserveCopy h2{font-family:Georgia,'Times New Roman',serif;font-size:clamp(56px,6.5vw,88px);font-weight:400;line-height:.86;letter-spacing:-.055em;margin:0 0 20px}.gh3ReserveCopy p{font-size:12px;line-height:1.6;color:#d5e0db;max-width:430px}.gh3ReservePanel{background:#fff;color:var(--ink);padding:24px}.gh3ReserveFields{display:grid;grid-template-columns:1fr 1fr 1fr;border-top:1px solid var(--line);border-left:1px solid var(--line)}.gh3ReserveField{padding:14px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:70px}.gh3ReserveField small{display:block;font-size:7.5px;text-transform:uppercase;letter-spacing:.1em;color:#7a827d;margin-bottom:7px}.gh3ReserveField strong{font-size:11px}.gh3ReserveBtn{width:100%;margin-top:12px;min-height:46px;background:var(--wine);border:0;color:#fff;font-size:10px;font-weight:900;display:flex;justify-content:center;align-items:center;gap:7px}.gh3ReserveNote{margin-top:9px;font-size:8.5px;color:#757d78}

        .gh3Footer{background:#0d1714;color:#aebbb5}.gh3FooterInner{min-height:112px;padding:24px 0;display:grid;grid-template-columns:1fr auto;gap:30px;align-items:center;font-size:9.5px}.gh3Footer strong{color:#fff;font-family:Georgia,'Times New Roman',serif;font-size:16px;font-weight:400}.gh3FooterRight{display:flex;gap:14px;align-items:center}.gh3Footer a{text-decoration:underline;text-underline-offset:3px}.gh3FooterCta{border:1px solid #46564f;padding:9px 11px;color:#fff!important;text-decoration:none!important;font-weight:800}

        @media(max-width:980px){.gh3Wrap{width:min(100% - 36px,1280px)}.gh3Links{display:none}.gh3HeroInner{grid-template-columns:1fr;align-content:end}.gh3HeroBook{max-width:440px}.gh3FactsInner{grid-template-columns:repeat(3,1fr)}.gh3Fact{padding:14px;border-bottom:1px solid var(--line)}.gh3RoomCanvas{min-height:auto;display:grid;gap:70px}.gh3RoomCard,.gh3RoomCard:nth-child(n){position:relative;left:auto;right:auto;top:auto;width:72%;height:460px}.gh3RoomCard:nth-child(2){margin-left:auto}.gh3RoomCard:nth-child(3){margin-left:8%}.gh3RoomCard:nth-child(n) .gh3RoomText{right:-32%;left:auto;top:auto;bottom:28px}.gh3RoomCard:nth-child(2) .gh3RoomText{left:-32%;right:auto}.gh3PlaceIntro{grid-template-columns:1fr 1fr;gap:40px}.gh3BreakfastHead{grid-template-columns:1fr 1fr}.gh3OwnersText{width:54%}.gh3OwnersPhoto{width:62%}.gh3ReserveGrid{gap:40px}}
        @media(max-width:720px){.gh3Wrap{width:min(100% - 26px,1280px)}.gh3Demo{font-size:7.5px;text-align:center;line-height:1.3}.gh3Nav{height:58px}.gh3Brand span{display:none}.gh3NavRight{gap:0}.gh3Hero,.gh3HeroInner{min-height:680px}.gh3HeroInner{padding-bottom:28px}.gh3Hero h1{font-size:clamp(56px,16vw,80px)}.gh3HeroBook{width:100%;padding:16px}.gh3HeroFields{grid-template-columns:1fr 1fr}.gh3FactsInner{grid-template-columns:1fr 1fr}.gh3Rooms{padding:60px 0 76px}.gh3RoomsHead{display:block}.gh3RoomsHead p{margin-top:20px}.gh3RoomCanvas{gap:54px}.gh3RoomCard,.gh3RoomCard:nth-child(n){width:100%;height:auto;display:grid;grid-template-columns:1fr}.gh3RoomCard img{height:360px}.gh3RoomCard:nth-child(n) .gh3RoomText{position:relative;left:auto;right:auto;bottom:auto;top:auto;width:92%;margin:-36px auto 0}.gh3IncludedInner{align-items:flex-start;flex-direction:column}.gh3Amenities{gap:16px 22px}.gh3Place{padding:68px 0}.gh3PlaceIntro{grid-template-columns:1fr;gap:24px}.gh3PlaceStory{grid-template-columns:1fr}.gh3PlaceTall{height:460px}.gh3PlaceSide{grid-template-columns:1fr 1fr}.gh3PlaceSide img{height:210px}.gh3PlaceNote{margin-left:0;font-size:23px}.gh3Breakfast{padding:66px 0}.gh3BreakfastHead{grid-template-columns:1fr;gap:20px}.gh3BreakfastStrip{grid-template-columns:1fr 1fr}.gh3BreakfastStrip img{height:280px}.gh3BreakfastStrip img:nth-child(1){grid-column:1/-1}.gh3BreakfastStrip img:nth-child(2),.gh3BreakfastStrip img:nth-child(3){height:180px}.gh3ReviewInner{grid-template-columns:1fr;gap:30px}.gh3Owners{padding:70px 0}.gh3OwnersScene{min-height:auto;display:flex;flex-direction:column}.gh3OwnersPhoto{position:relative;width:100%;height:420px;order:1}.gh3OwnersText{position:relative;left:auto;top:auto;width:92%;margin:-55px auto 0;order:2;padding:30px}.gh3OwnersText h2{font-size:42px}.gh3PracticalGrid{grid-template-columns:1fr;gap:34px}.gh3MapGrid{grid-template-columns:1fr}.gh3Map{min-height:330px}.gh3ReserveGrid{grid-template-columns:1fr;gap:28px}.gh3ReserveFields{grid-template-columns:1fr}.gh3FooterInner{grid-template-columns:1fr}.gh3FooterRight{flex-wrap:wrap}}
      `}</style>

      <div className="gh3Demo">UKÁZKOVÝ KONCEPT SPUSTWEB.CZ · NEJDE O SKUTEČNOU FIRMU <a href="/">ZPĚT NA SPUSTWEB.CZ</a></div>

      <div className="gh3NavShell">
        <div className="gh3Wrap">
          <nav className="gh3Nav" aria-label="Navigace ukázkového penzionu">
            <a className="gh3Brand" href="#top"><strong>U Tiché vody</strong><span>penzion · Třeboňsko</span></a>
            <div className="gh3NavRight">
              <div className="gh3Links"><a href="#pokoje">Pokoje</a><a href="#okoli">Okolí</a><a href="#prakticke">Praktické</a></div>
              <a className="gh3BookSmall" href="#rezervace">Rezervace <CalendarDays size={12}/></a>
            </div>
          </nav>
        </div>
      </div>

      <header className="gh3Hero">
        <img src="https://images.pexels.com/photos/15699340/pexels-photo-15699340.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Pokoj menšího venkovského penzionu s dřevěnými trámy"/>
        <div className="gh3Wrap gh3HeroInner">
          <div className="gh3HeroTitle">
            <div className="gh3Meta">PENZION · TŘEBOŇSKO</div>
            <h1>U Tiché<br/>vody.</h1>
            <p className="gh3HeroLead">Osm pokojů v opraveném venkovském domě. Snídaně v ceně, zahrada, kolárna a Třeboň deset minut autem.</p>
          </div>
          <div className="gh3HeroBook">
            <div className="gh3HeroBookTop"><strong>Termín pobytu</strong><span>ukázková rezervace</span></div>
            <div className="gh3HeroFields"><div className="gh3HeroField"><small>Příjezd</small><strong>Vyberte datum</strong></div><div className="gh3HeroField"><small>Odjezd</small><strong>Vyberte datum</strong></div><div className="gh3HeroField"><small>Hosté</small><strong>2 osoby</strong></div><div className="gh3HeroField"><small>Pokoje</small><strong>1 pokoj</strong></div></div>
            <button className="gh3HeroBookBtn" type="button">Zjistit dostupnost <ArrowRight size={12}/></button>
          </div>
        </div>
      </header>

      <div className="gh3Facts"><div className="gh3Wrap gh3FactsInner"><div className="gh3Fact"><strong>8 pokojů</strong><span>dvoulůžkové i rodinné</span></div><div className="gh3Fact"><strong>Snídaně v ceně</strong><span>každé ráno 8:00–10:00</span></div><div className="gh3Fact"><strong>Parkování u domu</strong><span>bez příplatku</span></div><div className="gh3Fact"><strong>Kolárna</strong><span>uzamykatelná</span></div><div className="gh3Fact"><strong>Třeboň 8 km</strong><span>autem přibližně 10 minut</span></div></div></div>

      <section className="gh3Rooms" id="pokoje"><div className="gh3Wrap"><div className="gh3RoomsHead"><h2>Vyberte si pokoj.</h2><p>Každý pokoj má vlastní koupelnu, Wi-Fi a snídani v ceně. Níže jsou tři ukázkové typy pokojů.</p></div><div className="gh3RoomCanvas">{rooms.map((room)=><article className="gh3RoomCard" key={room.no}><img src={room.image} alt={room.alt}/><div className="gh3RoomText"><div className="gh3Meta">POKOJ {room.no} · {room.meta}</div><h3>{room.name}</h3><p>{room.text}</p><div className="gh3RoomLine"><strong>{room.price}</strong><a href="#rezervace">Rezervovat</a></div></div></article>)}</div></div></section>

      <section className="gh3Included"><div className="gh3Wrap gh3IncludedInner"><div className="gh3IncludedTitle">V ceně pobytu</div><div className="gh3Amenities"><div className="gh3Amenity"><Coffee size={14}/><span><strong>Snídaně</strong> 8:00–10:00</span></div><div className="gh3Amenity"><Car size={14}/><span><strong>Parkování</strong> u domu</span></div><div className="gh3Amenity"><Wifi size={14}/><span><strong>Wi-Fi</strong> pokoje i zahrada</span></div><div className="gh3Amenity"><Bike size={14}/><span><strong>Kolárna</strong> uzamykatelná</span></div><div className="gh3Amenity"><PawPrint size={14}/><span><strong>Pes</strong> po dohodě</span></div></div></div></section>

      <section className="gh3Place" id="okoli"><div className="gh3Wrap"><div className="gh3PlaceIntro"><h2>Třeboňsko<br/>za domem.</h2><div className="gh3PlaceIntroText"><p>Rybníky, rovné cyklotrasy a Třeboň v krátké dojezdové vzdálenosti. Kolo lze uložit v uzamykatelné kolárně přímo u penzionu.</p></div></div><div className="gh3PlaceStory"><div className="gh3PlaceTall"><img src="https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Venkovská cesta a krajina vhodná pro cyklistiku"/></div><div className="gh3PlaceSide"><figure><img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Venkovský dům se zahradou"/><figcaption><strong>Třeboň</strong><span>8 km · centrum, zámek, restaurace</span></figcaption></figure><figure><img src="https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Klidná krajina u vody"/><figcaption><strong>Rožmberk</strong><span>12 km · cyklotrasa kolem rybníka</span></figcaption></figure></div></div><div className="gh3PlaceNote">Cyklostezka vede přibližně 600 metrů od domu. Na Třeboňsku se dá většina výletů zvládnout bez auta.</div></div></section>

      <section className="gh3Breakfast"><div className="gh3Wrap"><div className="gh3BreakfastHead"><h2>Snídaně je v ceně pokoje.</h2><p>Pečivo, vejce, sýry, šunka, jogurt, ovoce, něco sladkého, káva a čaj. Podává se každé ráno mezi osmou a desátou.</p></div><div className="gh3BreakfastStrip"><img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Snídaně připravená na společném stole"/><img src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Šálek kávy ke snídani"/><img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Čerstvé pečivo ke snídani"/></div><div className="gh3BreakfastBottom"><strong>Snídaně 8:00–10:00</strong><span>V případě časného odjezdu lze předem domluvit balíček s sebou.</span></div></div></section>

      <section className="gh3Review"><div className="gh3Wrap gh3ReviewInner"><div className="gh3Score"><strong>9,4</strong><span>/ 10 · UKÁZKOVÉ HODNOCENÍ</span></div><div><p className="gh3Quote">„Klidné místo, výborná snídaně a dobrá poloha na výlety na kole.“</p><div className="gh3QuoteBy">MARTINA K. · DEMO RECENZE</div><div className="gh3ReviewRow"><p>„Pokoj byl čistý, postel pohodlná a večer byl na zahradě opravdu klid.“</p><p>„Do Třeboně jsme dojeli za pár minut a kola jsme mohli nechat zamčená přímo u domu.“</p></div><span className="gh3DemoLabel">Hodnocení je součástí fiktivního konceptu.</span></div></div></section>

      <section className="gh3Owners"><div className="gh3Wrap"><div className="gh3OwnersScene"><div className="gh3OwnersPhoto"><img src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Dva lidé připravují snídani v kuchyni menšího ubytování"/></div><div className="gh3OwnersText"><h2>Jana a Petr.</h2><p>O penzion se starají od roku 2018. Jana řeší rezervace a snídaně, Petr dům, zahradu a kola.</p><small>Fiktivní majitelé ukázkového penzionu.</small></div></div></div></section>

      <section className="gh3Practical" id="prakticke"><div className="gh3Wrap gh3PracticalGrid"><div className="gh3PracticalIntro"><h2>Praktické informace.</h2><p>Věci, které je dobré vědět ještě před rezervací nebo příjezdem.</p></div><div className="gh3PracticalList">{practical.map(([label,value])=><div className="gh3PracticalRow" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>

      <section className="gh3MapSection"><div className="gh3Wrap gh3MapGrid"><div className="gh3Map" aria-label="Ilustrační mapa příjezdu"><div className="gh3Road"/><div className="gh3Road2"/></div><div className="gh3MapCopy"><div><div className="gh3Meta gh3Muted">PŘÍJEZD</div><h2>U Tiché vody · Třeboňsko</h2><p>Fiktivní adresa v okolí Třeboně. U skutečného penzionu by zde byla přesná mapa, fotografie vjezdu a pokyny k příjezdu.</p></div><div className="gh3MapDetails"><span><MapPin size={14}/> Třeboňsko · 8 km od Třeboně</span><span><Car size={14}/> parkování u domu</span><span><Phone size={14}/> 777 000 000</span></div></div></div></section>

      <section className="gh3ReserveEnd" id="rezervace"><div className="gh3Wrap gh3ReserveGrid"><div className="gh3ReserveCopy"><h2>Vyberte termín pobytu.</h2><p>Zvolte datum příjezdu, odjezdu a počet hostů. Dostupnost pokojů by se na skutečném webu ověřila přímo v rezervačním systému.</p></div><div className="gh3ReservePanel"><div className="gh3ReserveFields"><div className="gh3ReserveField"><small>Příjezd</small><strong>Vyberte datum</strong></div><div className="gh3ReserveField"><small>Odjezd</small><strong>Vyberte datum</strong></div><div className="gh3ReserveField"><small>Hosté</small><strong>2 osoby</strong></div></div><button className="gh3ReserveBtn" type="button">Zjistit dostupnost <ArrowRight size={12}/></button><div className="gh3ReserveNote">Ukázkové rezervační rozhraní není aktivní.</div></div></div></section>

      <footer className="gh3Footer"><div className="gh3Wrap gh3FooterInner"><div><strong>U Tiché vody</strong><br/>Fiktivní penzion vytvořený pouze jako ukázkový koncept.</div><div className="gh3FooterRight">Tento koncept vytvořil <a href="/">SpustWeb.cz</a><a className="gh3FooterCta" href="/#kontakt">Web pro moje podnikání</a></div></div></footer>
    </div>
  )
}