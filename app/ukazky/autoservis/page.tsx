import type { Metadata } from 'next'
import {
  ArrowRight,
  CalendarDays,
  Car,
  Check,
  ChevronRight,
  Clock3,
  Gauge,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ukázkový web pro autoservis | SpustWeb.cz',
  description:
    'Ukázka webu pro autoservis: servisní úkony, diagnostika, pneuservis, orientační ceny, průběh zakázky, tým, lokalita a rezervace.',
  alternates: { canonical: 'https://spustweb.cz/ukazky/autoservis/' },
  robots: { index: true, follow: true },
}

const needs = [
  {
    no: '01',
    title: 'Pravidelný servis',
    text: 'Výměna oleje a filtrů, servisní prohlídky a běžná údržba podle nájezdu a stáří vozu.',
    tags: ['olej a filtry', 'servisní prohlídka'],
  },
  {
    no: '02',
    title: 'Diagnostika a závady',
    text: 'Kontrolky, hluk, vibrace, ztráta výkonu a další závady. Zjistíme příčinu a navrhneme opravu.',
    tags: ['diagnostika', 'hledání závady'],
  },
  {
    no: '03',
    title: 'Brzdy a podvozek',
    text: 'Brzdy, tlumiče, čepy, ložiska a geometrie. Kontrola, výměna opotřebených dílů a seřízení.',
    tags: ['brzdy', 'podvozek'],
  },
  {
    no: '04',
    title: 'Klimatizace',
    text: 'Kontrola funkce, servis, doplnění chladiva a dezinfekce klimatizace.',
    tags: ['servis A/C', 'dezinfekce'],
  },
  {
    no: '05',
    title: 'Pneuservis',
    text: 'Přezutí, vyvážení, kontrola stavu pneumatik a opravy běžných defektů.',
    tags: ['přezutí', 'vyvážení'],
  },
]

const prices = [
  ['Základní diagnostika', 'od 690 Kč'],
  ['Výměna motorového oleje', 'od 590 Kč + materiál'],
  ['Servis klimatizace', 'od 990 Kč'],
  ['Přezutí 16–18″', 'od 1 290 Kč'],
  ['Kontrola vozu před koupí', 'od 1 490 Kč'],
]

const rules = [
  ['01', 'Změnu ceny řešíme předem.', 'Pokud se během práce ukáže další závada nebo větší rozsah opravy, před pokračováním zavoláme.'],
  ['02', 'U nejasné závady začínáme diagnostikou.', 'Po zjištění příčiny sdělíme navrženou opravu, potřebné díly a cenu.'],
  ['03', 'Vyměněné díly můžeme nechat k nahlédnutí.', 'Na požádání ukážeme, co se na autě měnilo.'],
  ['04', 'Při převzetí dostanete přehled práce.', 'Uvedeme provedené úkony a použitý materiál.'],
]

const steps = [
  ['01', 'Objednání termínu', 'Vyberete službu a den, který vám vyhovuje.'],
  ['02', 'Příjem vozu', 'Při převzetí projdeme, co má servis řešit.'],
  ['03', 'Kontrola nebo diagnostika', 'Podle zakázky ověříme stav vozu a rozsah práce.'],
  ['04', 'Potvrzení opravy', 'U větších nebo nejasných oprav potvrdíme cenu předem.'],
  ['05', 'Převzetí auta', 'Předáme auto a přehled provedených prací.'],
]

const reviews = [
  ['„Objednaný termín seděl. Před výměnou brzd mi zavolali s cenou a auto bylo odpoledne hotové.“', 'Martin K.'],
  ['„Přijela jsem s kontrolkou motoru. Po diagnostice mi zavolali, co našli a kolik bude oprava stát.“', 'Petra S.'],
  ['„Na přezutí jsem byl objednaný na osmou a vzali mě hned. Za půl hodiny hotovo.“', 'Jakub M.'],
]

export default function AutoserviceShowcase() {
  return (
    <div className="asgPage" id="top">
      <style>{`
        body:has(.asgPage) > .verno-nav-shell,body:has(.asgPage) > .footer{display:none!important}
        body:has(.asgPage) main{padding:0!important;margin:0!important}
        body:has(.asgPage){background:#f5f3ed!important}
        .asgPage{--ink:#111514;--paper:#f5f3ed;--white:#fff;--muted:#68706b;--line:#d8d8d0;--blue:#3158ff;--blueDark:#1f3ec7;--soft:#e9ece8;--acid:#d9ff69;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--paper);font-size:16px}
        .asgPage *{box-sizing:border-box}.asgPage a{color:inherit;text-decoration:none}.asgPage svg{stroke-width:1.85}.asgWrap{width:min(1220px,calc(100% - 48px));margin:0 auto}
        .asgDemo{height:26px;background:#0e1211;color:#d7dbd8;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;letter-spacing:.09em;text-transform:uppercase}.asgDemo a{color:#fff!important;text-decoration:underline;text-underline-offset:3px;margin-left:8px}
        .asgNavShell{position:sticky;top:0;z-index:120;background:rgba(245,243,237,.96);backdrop-filter:blur(14px);border-bottom:1px solid rgba(17,21,20,.14)}
        .asgNav{height:74px;display:grid;grid-template-columns:minmax(205px,1fr) auto minmax(205px,1fr);align-items:center;gap:24px}.asgBrand{display:flex;align-items:center;gap:11px;font-weight:900;letter-spacing:-.04em;font-size:19px}.asgBrandMark{width:28px;height:28px;border:2px solid var(--ink);border-radius:50%;position:relative}.asgBrandMark:before,.asgBrandMark:after{content:'';position:absolute;background:var(--ink)}.asgBrandMark:before{width:2px;height:11px;left:12px;top:2px}.asgBrandMark:after{height:2px;width:11px;left:2px;top:12px}.asgBrand small{display:block;font-size:8px;letter-spacing:.15em;color:var(--muted);margin-top:1px}.asgLinks{display:flex;align-items:center;gap:28px;font-size:12px;font-weight:800}.asgLinks a{position:relative;padding:28px 0}.asgLinks a:after{content:'';position:absolute;left:0;right:100%;bottom:19px;height:2px;background:var(--blue);transition:right .2s ease}.asgLinks a:hover:after{right:0}.asgNavRight{justify-self:end;display:flex;align-items:center;gap:12px}.asgPhone{font-size:12px;font-weight:900}.asgNavCta,.asgBtn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-weight:900;transition:.2s ease}.asgNavCta{min-height:39px;padding:0 16px;background:var(--ink);color:#fff!important;font-size:11px}.asgNavCta:hover{background:var(--blue)}
        .asgHero{background:var(--paper);border-bottom:1px solid var(--line)}.asgHeroGrid{display:grid;grid-template-columns:.92fr 1.08fr;min-height:600px}.asgHeroCopy{padding:72px 58px 58px 0;display:flex;flex-direction:column;justify-content:center}.asgEyebrow{font-size:10px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;color:var(--blue);display:flex;align-items:center;gap:9px;margin-bottom:20px}.asgEyebrow:before{content:'';width:28px;height:2px;background:var(--blue)}.asgHero h1{font-size:clamp(49px,5.25vw,76px);line-height:.91;letter-spacing:-.058em;font-weight:500;margin:0 0 22px;max-width:670px}.asgHeroLead{font-size:15px;line-height:1.58;color:#3d4541;max-width:610px;margin:0 0 24px}.asgHeroActions{display:flex;gap:9px;flex-wrap:wrap}.asgBtn{min-height:44px;padding:0 18px;border:1px solid var(--ink);font-size:11px}.asgBtnBlue{background:var(--blue);border-color:var(--blue);color:#fff!important}.asgBtnBlue:hover{background:var(--blueDark)}.asgBtnLight{background:transparent}.asgBtnLight:hover{background:#fff}.asgHeroFacts{display:flex;gap:20px;flex-wrap:wrap;margin-top:28px;padding-top:18px;border-top:1px solid var(--line);font-size:10.5px;font-weight:800;color:#3a423e}.asgHeroFacts span{display:flex;align-items:center;gap:6px}.asgHeroPhoto{position:relative;min-height:600px;background:#d7dad4;overflow:hidden}.asgHeroPhoto img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 48%;filter:saturate(.82) contrast(1.02)}.asgHeroPhoto:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,12,11,.04) 45%,rgba(8,12,11,.72) 100%)}.asgPhotoCaption{position:absolute;z-index:2;left:26px;right:26px;bottom:24px;color:#fff;display:flex;justify-content:space-between;align-items:end;gap:20px}.asgPhotoCaption strong{font-size:15px}.asgPhotoCaption small{display:block;margin-top:4px;font-size:10px;color:#d9ddda}.asgPhotoBadge{width:52px;height:52px;border:1px solid rgba(255,255,255,.7);display:grid;place-items:center;border-radius:50%}
        .asgQuick{background:#111514;color:#fff}.asgQuickGrid{display:grid;grid-template-columns:1.1fr .9fr;min-height:92px}.asgQuickLeft{display:flex;align-items:center;gap:25px;padding:20px 0}.asgQuickLeft strong{font-size:14px}.asgQuickMeta{display:flex;align-items:center;gap:18px;font-size:10.5px;color:#c7ccc9}.asgQuickMeta span{display:flex;gap:6px;align-items:center}.asgQuickRight{background:var(--acid);color:var(--ink);padding:18px 24px;display:flex;align-items:center;justify-content:space-between;gap:18px}.asgQuickRight strong{font-size:13px}.asgQuickRight span{font-size:10.5px;color:#35402e;max-width:270px;line-height:1.4}
        .asgSection{padding:64px 0}.asgSectionWhite{background:#fff}.asgSectionSoft{background:#e9ece8}.asgSectionDark{background:#111514;color:#fff}.asgHead{display:grid;grid-template-columns:160px 1fr;gap:28px;align-items:start;margin-bottom:30px}.asgKicker{font-size:9.5px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:var(--blue);padding-top:7px}.asgSectionDark .asgKicker{color:var(--acid)}.asgHead h2{font-size:clamp(34px,4vw,52px);line-height:.96;letter-spacing:-.047em;font-weight:500;margin:0;max-width:800px}.asgHead p{font-size:13px;line-height:1.6;color:var(--muted);max-width:620px;margin:10px 0 0}.asgSectionDark .asgHead p{color:#aeb6b1}
        .asgNeeds{display:grid;grid-template-columns:repeat(12,1fr);gap:10px}.asgNeed{border:1px solid var(--line);background:var(--paper);padding:22px;min-height:205px;display:flex;flex-direction:column;position:relative;overflow:hidden;transition:transform .2s ease,border-color .2s ease}.asgNeed:hover{transform:translateY(-3px);border-color:#aeb1a9}.asgNeed:nth-child(1),.asgNeed:nth-child(2){grid-column:span 6}.asgNeed:nth-child(n+3){grid-column:span 4}.asgNeedNo{font-size:10px;font-weight:900;color:var(--blue);letter-spacing:.08em}.asgNeed h3{font-size:24px;line-height:1.02;letter-spacing:-.035em;font-weight:500;margin:24px 0 8px}.asgNeed p{font-size:11.5px;line-height:1.55;color:var(--muted);margin:0 0 17px;max-width:330px}.asgNeedTags{display:flex;gap:5px;flex-wrap:wrap;margin-top:auto}.asgNeedTags span{font-size:9px;font-weight:700;padding:5px 7px;border:1px solid #c9cbc4;background:#fff}.asgNeedArrow{position:absolute;right:18px;top:18px;width:34px;height:34px;border:1px solid #bfc2ba;display:grid;place-items:center;border-radius:50%}
        .asgPricesLayout{display:grid;grid-template-columns:1.05fr .95fr;gap:58px;align-items:start}.asgPriceList{border-top:1px solid var(--line)}.asgPriceRow{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center;padding:17px 0;border-bottom:1px solid var(--line)}.asgPriceRow span{font-size:13px;font-weight:700}.asgPriceRow strong{font-size:13px}.asgPriceNote{background:var(--blue);color:#fff;padding:30px 32px;min-height:100%;display:flex;flex-direction:column;justify-content:space-between}.asgPriceNote svg{margin-bottom:46px}.asgPriceNote h3{font-size:29px;line-height:1;letter-spacing:-.04em;font-weight:500;margin:0 0 12px}.asgPriceNote p{font-size:12px;line-height:1.6;color:#e2e6ff;margin:0}.asgPriceFine{font-size:9.5px;color:var(--muted);margin-top:10px}
        .asgWorkshop{display:grid;grid-template-columns:1.15fr .85fr;min-height:520px}.asgWorkshopPhoto{position:relative;overflow:hidden;background:#333}.asgWorkshopPhoto img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;filter:saturate(.78) contrast(1.04)}.asgWorkshopPhoto:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent 60%,rgba(17,21,20,.12))}.asgWorkshopCopy{background:#111514;color:#fff;padding:52px 50px;display:flex;flex-direction:column;justify-content:center}.asgWorkshopCopy .asgKicker{color:var(--acid)}.asgWorkshopCopy h2{font-size:48px;line-height:.93;letter-spacing:-.05em;font-weight:500;margin:16px 0}.asgWorkshopCopy p{font-size:13px;line-height:1.65;color:#b6bdb8;max-width:430px;margin:0}.asgWorkshopFacts{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:28px}.asgWorkshopFact{border-top:1px solid #3b413e;padding-top:10px;font-size:11px;font-weight:800}.asgWorkshopFact span{display:block;color:#909994;font-weight:500;font-size:9.5px;margin-top:3px}
        .asgRules{display:grid;grid-template-columns:1fr 1fr;column-gap:54px}.asgRule{display:grid;grid-template-columns:42px 1fr;gap:14px;padding:24px 0;border-top:1px solid var(--line)}.asgRuleNo{font-size:10px;font-weight:900;color:var(--blue);padding-top:3px}.asgRule strong{display:block;font-size:16px;line-height:1.25;margin-bottom:7px}.asgRule p{font-size:11px;line-height:1.55;color:var(--muted);margin:0;max-width:430px}
        .asgBrands{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:20px 0}.asgBrandsInner{display:grid;grid-template-columns:170px 1fr;gap:20px;align-items:center}.asgBrands strong{font-size:10px;letter-spacing:.12em;text-transform:uppercase}.asgBrandNames{display:flex;gap:20px;flex-wrap:wrap;color:#525a55;font-size:12px;font-weight:800}.asgBrandNames span{white-space:nowrap}
        .asgSteps{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.asgStep{padding:22px 20px 24px;border-right:1px solid var(--line);min-height:170px}.asgStep:last-child{border-right:0}.asgStepNo{font-size:26px;color:#b5b9b3;font-weight:500}.asgStep h3{font-size:14px;margin:26px 0 7px}.asgStep p{font-size:10.5px;line-height:1.5;color:var(--muted);margin:0}.asgStep:nth-child(4){background:#eef0ff}.asgStep:nth-child(4) .asgStepNo{color:var(--blue)}
        .asgReviewsTop{display:grid;grid-template-columns:.72fr 1.28fr;gap:40px;align-items:end;margin-bottom:22px}.asgRating{display:flex;align-items:end;gap:12px}.asgRating strong{font-size:62px;line-height:.85;letter-spacing:-.05em;font-weight:500}.asgRating span{font-size:11px;color:#b4bbb6;line-height:1.45}.asgReviewIntro h2{font-size:38px;line-height:1;letter-spacing:-.04em;font-weight:500;margin:0}.asgReviewIntro p{font-size:11px;color:#9ea6a1;margin:8px 0 0}.asgReviews{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #3a403d}.asgReview{padding:22px 25px 20px 0;border-right:1px solid #3a403d;min-height:170px}.asgReview+.asgReview{padding-left:25px}.asgReview:last-child{border-right:0}.asgReview p{font-size:14px;line-height:1.5;margin:0 0 24px}.asgReview small{font-size:9.5px;color:#a7afa9}.asgDemoLabel{display:inline-flex;margin-top:22px;font-size:9px;color:#838c86;border:1px solid #39403c;padding:6px 8px}
        .asgTeam{display:grid;grid-template-columns:.88fr 1.12fr;border:1px solid var(--line);background:#fff}.asgTeamPhoto{position:relative;min-height:390px;overflow:hidden;background:#ddd}.asgTeamPhoto img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 58%;filter:saturate(.72) contrast(1.02)}.asgTeamCopy{padding:44px 48px;display:flex;flex-direction:column;justify-content:center}.asgTeamCopy h2{font-size:42px;line-height:.95;letter-spacing:-.045em;font-weight:500;margin:13px 0}.asgTeamCopy p{font-size:12.5px;line-height:1.62;color:#48504c;max-width:580px;margin:0}.asgPeople{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:25px}.asgPerson{border-top:1px solid var(--line);padding-top:10px}.asgPerson strong{display:block;font-size:11px}.asgPerson span{font-size:9.5px;color:var(--muted)}
        .asgLocation{display:grid;grid-template-columns:.8fr 1.2fr;gap:12px}.asgLocCard{background:#fff;border:1px solid var(--line);padding:28px}.asgLocCard h3{font-size:25px;letter-spacing:-.03em;margin:0 0 12px}.asgLocData{display:grid;gap:12px;margin-top:24px}.asgLocLine{display:grid;grid-template-columns:24px 1fr;gap:9px;font-size:11px;line-height:1.45}.asgLocLine strong{display:block}.asgLocLine span{color:var(--muted)}.asgMap{min-height:330px;background:#dfe3de;position:relative;overflow:hidden;border:1px solid var(--line)}.asgMap:before{content:'';position:absolute;inset:-20%;background:repeating-linear-gradient(24deg,transparent 0 42px,#c9cec8 43px 45px),repeating-linear-gradient(118deg,transparent 0 68px,#c7ccc6 69px 72px);opacity:.86}.asgMap:after{content:'';position:absolute;width:22px;height:22px;border:7px solid var(--blue);border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:56%;top:46%;background:#fff}.asgMapLabel{position:absolute;z-index:2;left:22px;bottom:20px;background:#111514;color:#fff;padding:10px 12px;font-size:10px;font-weight:800}.asgMapRoad{position:absolute;z-index:1;left:-6%;right:-4%;top:48%;height:13px;background:#f5f3ed;transform:rotate(-9deg);box-shadow:0 0 0 1px #bfc4bd}.asgMapRoad2{position:absolute;z-index:1;top:-10%;bottom:-5%;left:43%;width:11px;background:#f5f3ed;transform:rotate(14deg);box-shadow:0 0 0 1px #bfc4bd}
        .asgBooking{background:var(--blue);color:#fff}.asgBookingGrid{display:grid;grid-template-columns:.9fr 1.1fr;gap:62px;align-items:center}.asgBookingCopy h2{font-size:clamp(42px,4.7vw,62px);line-height:.93;letter-spacing:-.052em;font-weight:500;margin:12px 0 18px}.asgBookingCopy p{font-size:13px;line-height:1.6;color:#e1e6ff;max-width:500px}.asgBookingAlt{display:flex;gap:18px;align-items:center;margin-top:25px;font-size:10.5px}.asgBookingAlt strong{font-size:13px}.asgBookingPanel{background:#fff;color:var(--ink);padding:24px}.asgBookingPanelTop{display:flex;justify-content:space-between;align-items:start;padding-bottom:18px;border-bottom:1px solid var(--line)}.asgBookingPanelTop strong{font-size:17px}.asgBookingPanelTop span{font-size:9.5px;color:var(--muted);max-width:220px;text-align:right}.asgFields{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}.asgField{min-height:48px;border:1px solid var(--line);padding:9px 11px}.asgFieldWide{grid-column:1/-1}.asgField label{display:block;font-size:8px;text-transform:uppercase;letter-spacing:.09em;color:var(--muted);margin-bottom:4px}.asgField span{font-size:11px;color:#3d4541}.asgBookingBtn{width:100%;min-height:44px;border:0;background:#111514;color:#fff;font-size:11px;font-weight:900;display:flex;justify-content:center;align-items:center;gap:8px}.asgBookingNote{font-size:8.5px;color:#7b837e;margin-top:8px}.asgFooter{background:#0b0e0d;color:#bfc5c1;border-top:3px solid var(--acid)}.asgFooterInner{min-height:130px;padding:28px 0;display:grid;grid-template-columns:1fr auto;gap:30px;align-items:center;font-size:10px}.asgFooter strong{font-size:14px;color:#fff}.asgFooterRight{display:flex;align-items:center;gap:16px}.asgFooter a{text-decoration:underline;text-underline-offset:3px}.asgFooterCta{border:1px solid #454b48;padding:10px 12px;color:#fff!important;text-decoration:none!important;font-weight:800}.asgFooterCta:hover{border-color:var(--acid)}
        @media(max-width:980px){.asgWrap{width:min(100% - 34px,1220px)}.asgNav{grid-template-columns:1fr auto}.asgLinks{display:none}.asgHeroGrid{grid-template-columns:1fr 1fr}.asgHeroCopy{padding-right:34px}.asgHero h1{font-size:48px}.asgQuickGrid{grid-template-columns:1fr}.asgQuickRight{display:none}.asgHead{grid-template-columns:120px 1fr}.asgNeed:nth-child(n){grid-column:span 6}.asgPricesLayout{gap:30px}.asgWorkshop{grid-template-columns:1fr 1fr}.asgWorkshopCopy{padding:38px}.asgWorkshopCopy h2{font-size:39px}.asgSteps{grid-template-columns:repeat(3,1fr)}.asgStep:nth-child(3){border-right:0}.asgStep:nth-child(n+4){border-top:1px solid var(--line)}.asgStep:nth-child(4){border-left:0}.asgReviews{grid-template-columns:1fr}.asgReview,.asgReview+.asgReview{padding:18px 0;border-right:0;border-bottom:1px solid #3a403d;min-height:auto}.asgReview:last-child{border-bottom:0}.asgTeam{grid-template-columns:.8fr 1.2fr}.asgTeamCopy{padding:34px}.asgLocation{grid-template-columns:.9fr 1.1fr}.asgBookingGrid{gap:34px}}
        @media(max-width:720px){.asgWrap{width:min(100% - 26px,1220px)}.asgDemo{height:auto;min-height:26px;text-align:center;padding:5px 10px;font-size:8px}.asgNav{height:62px}.asgBrand{font-size:16px}.asgBrandMark{width:24px;height:24px}.asgBrandMark:before{left:10px}.asgBrandMark:after{top:10px}.asgPhone{display:none}.asgNavCta{min-height:36px;padding:0 12px}.asgHeroGrid{grid-template-columns:1fr}.asgHeroCopy{padding:52px 0 36px}.asgHero h1{font-size:clamp(43px,13vw,60px);max-width:640px}.asgHeroPhoto{min-height:430px}.asgQuickLeft{flex-direction:column;align-items:flex-start;gap:10px}.asgQuickMeta{flex-wrap:wrap;gap:10px 16px}.asgSection{padding:50px 0}.asgHead{grid-template-columns:1fr;gap:10px;margin-bottom:22px}.asgKicker{padding:0}.asgNeed:nth-child(n){grid-column:span 12}.asgNeed{min-height:185px}.asgPricesLayout{grid-template-columns:1fr}.asgPriceNote{min-height:260px}.asgWorkshop{grid-template-columns:1fr}.asgWorkshopPhoto{min-height:420px}.asgWorkshopCopy{padding:38px 28px}.asgWorkshopCopy h2{font-size:41px}.asgRules{grid-template-columns:1fr}.asgBrandsInner{grid-template-columns:1fr;gap:11px}.asgBrandNames{gap:11px 16px}.asgSteps{grid-template-columns:1fr}.asgStep,.asgStep:nth-child(3),.asgStep:nth-child(4){border-right:0;border-left:0;border-top:1px solid var(--line);min-height:auto;display:grid;grid-template-columns:46px 1fr;gap:12px}.asgStep:first-child{border-top:0}.asgStep h3{margin:2px 0 6px}.asgStep p{grid-column:2}.asgReviewsTop{grid-template-columns:1fr;gap:22px}.asgTeam{grid-template-columns:1fr}.asgTeamPhoto{min-height:360px}.asgTeamCopy{padding:32px 26px}.asgPeople{grid-template-columns:1fr}.asgLocation{grid-template-columns:1fr}.asgMap{min-height:310px}.asgBookingGrid{grid-template-columns:1fr}.asgBookingCopy{padding-bottom:8px}.asgFields{grid-template-columns:1fr}.asgFieldWide{grid-column:auto}.asgFooterInner{grid-template-columns:1fr}.asgFooterRight{align-items:flex-start;flex-wrap:wrap}}
      `}</style>

      <div className="asgDemo">
        UKÁZKOVÝ KONCEPT SPUSTWEB.CZ · NEJDE O SKUTEČNOU FIRMU
        <a href="/">ZPĚT NA SPUSTWEB.CZ</a>
      </div>

      <div className="asgNavShell">
        <div className="asgWrap">
          <nav className="asgNav" aria-label="Navigace ukázkového autoservisu">
            <a className="asgBrand" href="#top">
              <span className="asgBrandMark" />
              <span>GARÁŽ 17<small>AUTOSERVIS · BRNO</small></span>
            </a>
            <div className="asgLinks">
              <a href="#servis">Servis</a>
              <a href="#cenik">Ceník</a>
              <a href="#jak-to-funguje">Jak to funguje</a>
              <a href="#o-nas">O nás</a>
              <a href="#kontakt">Kontakt</a>
            </div>
            <div className="asgNavRight">
              <a className="asgPhone" href="tel:+420777000000">777 000 000</a>
              <a className="asgNavCta" href="#rezervace">Objednat servis <ArrowRight size={13} /></a>
            </div>
          </nav>
        </div>
      </div>

      <header className="asgHero">
        <div className="asgWrap">
          <div className="asgHeroGrid">
            <div className="asgHeroCopy">
              <div className="asgEyebrow">AUTOSERVIS · BRNO SLATINA</div>
              <h1>Servis a opravy osobních aut v Brně-Slatině.</h1>
              <p className="asgHeroLead">
                Pravidelný servis, diagnostika, brzdy, podvozek, klimatizace a pneuservis pro většinu běžných značek.
                U větších oprav předem potvrdíme rozsah práce a cenu.
              </p>
              <div className="asgHeroActions">
                <a className="asgBtn asgBtnBlue" href="#rezervace">Objednat termín <CalendarDays size={15} /></a>
                <a className="asgBtn asgBtnLight" href="#cenik">Služby a ceny <ArrowRight size={14} /></a>
              </div>
              <div className="asgHeroFacts">
                <span><Clock3 size={14} /> Po–Pá 7:30–17:00</span>
                <span><MapPin size={14} /> Brno–Slatina</span>
                <span><Car size={14} /> většina běžných značek</span>
              </div>
            </div>
            <div className="asgHeroPhoto">
              <img
                src="https://images.unsplash.com/photo-1727893332539-95e491ba4d90?auto=format&fit=crop&fm=jpg&q=82&w=1800"
                alt="Mechanik při práci na voze v moderní autodílně"
              />
              <div className="asgPhotoCaption">
                <div><strong>Běžný servis i složitější opravy.</strong><small>Diagnostika, mechanické práce a pneuservis.</small></div>
                <div className="asgPhotoBadge"><Wrench size={21} /></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="asgQuick">
        <div className="asgWrap">
          <div className="asgQuickGrid">
            <div className="asgQuickLeft">
              <strong>Objednání a dotazy</strong>
              <div className="asgQuickMeta">
                <span><Phone size={13} /> 777 000 000</span>
                <span><Clock3 size={13} /> dnes do 17:00</span>
                <span><MapPin size={13} /> Řípská 17, Brno</span>
              </div>
            </div>
            <div className="asgQuickRight">
              <strong>Náhradní vůz po dohodě</strong>
              <span>U delších oprav lze po předchozí domluvě zajistit náhradní auto.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="asgSection asgSectionWhite" id="servis">
        <div className="asgWrap">
          <div className="asgHead">
            <div className="asgKicker">SERVIS A OPRAVY</div>
            <div>
              <h2>S čím k nám můžete přijet.</h2>
              <p>Od pravidelné údržby po hledání závady. Rozsah práce vždy závisí na konkrétním vozu a jeho stavu.</p>
            </div>
          </div>
          <div className="asgNeeds">
            {needs.map((item) => (
              <a className="asgNeed" href="#rezervace" key={item.no}>
                <span className="asgNeedNo">{item.no}</span>
                <span className="asgNeedArrow"><ChevronRight size={14} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="asgNeedTags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="asgSection" id="cenik">
        <div className="asgWrap">
          <div className="asgHead">
            <div className="asgKicker">ORIENTAČNÍ CENY</div>
            <div>
              <h2>Orientační ceny běžných úkonů.</h2>
              <p>Konečná cena závisí na konkrétním vozu a použitém materiálu. Před zahájením práce cenu potvrdíme.</p>
            </div>
          </div>
          <div className="asgPricesLayout">
            <div>
              <div className="asgPriceList">
                {prices.map(([service, price]) => (
                  <div className="asgPriceRow" key={service}><span>{service}</span><strong>{price}</strong></div>
                ))}
              </div>
              <div className="asgPriceFine">Ukázkové ceny fiktivního autoservisu. Nejde o skutečnou nabídku služby.</div>
            </div>
            <aside className="asgPriceNote">
              <Gauge size={32} />
              <div>
                <h3>U závady nejdřív určíme rozsah opravy.</h3>
                <p>Pokud není příčina zřejmá, začínáme diagnostikou. Po zjištění závady sdělíme cenu a další postup.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="asgWorkshop" aria-label="Prostředí ukázkového autoservisu">
        <div className="asgWorkshopPhoto">
          <img
            src="https://images.unsplash.com/photo-1727893416750-0b0bd7561f7a?auto=format&fit=crop&fm=jpg&q=82&w=1800"
            alt="Mechanik kontroluje vůz v servisní dílně"
          />
        </div>
        <div className="asgWorkshopCopy">
          <div className="asgKicker">DÍLNA</div>
          <h2>Dílna a vybavení.</h2>
          <p>Čtyři servisní stání, diagnostika, zvedáky a vybavení pro běžný servis a opravy osobních aut.</p>
          <div className="asgWorkshopFacts">
            <div className="asgWorkshopFact">4 servisní stání<span>běžný servis a opravy</span></div>
            <div className="asgWorkshopFact">Diagnostika vozů<span>většina evropských a asijských značek</span></div>
            <div className="asgWorkshopFact">Pneuservis<span>přezutí, vyvážení, defekty</span></div>
            <div className="asgWorkshopFact">Objednání na čas<span>příjem podle domluveného termínu</span></div>
          </div>
        </div>
      </section>

      <section className="asgSection asgSectionWhite">
        <div className="asgWrap">
          <div className="asgHead">
            <div className="asgKicker">JAK PRACUJEME</div>
            <div>
              <h2>Co platí při každé zakázce.</h2>
            </div>
          </div>
          <div className="asgRules">
            {rules.map(([no, title, text]) => (
              <article className="asgRule" key={no}>
                <div className="asgRuleNo">{no}</div>
                <div><strong>{title}</strong><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="asgBrands">
        <div className="asgWrap asgBrandsInner">
          <strong>Nejčastěji servisujeme</strong>
          <div className="asgBrandNames">
            {['Škoda','Volkswagen','Seat','Ford','Toyota','Hyundai','Kia','Peugeot','Renault','BMW','Mercedes','další'].map((name) => <span key={name}>{name}</span>)}
          </div>
        </div>
      </div>

      <section className="asgSection asgSectionSoft" id="jak-to-funguje">
        <div className="asgWrap">
          <div className="asgHead">
            <div className="asgKicker">PRŮBĚH ZAKÁZKY</div>
            <div>
              <h2>Jak probíhá servis.</h2>
              <p>Od objednání termínu po převzetí auta. U diagnostiky a větších oprav potvrzujeme rozsah práce předem.</p>
            </div>
          </div>
          <div className="asgSteps">
            {steps.map(([no,title,text]) => (
              <article className="asgStep" key={no}><div className="asgStepNo">{no}</div><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="asgSection asgSectionDark">
        <div className="asgWrap">
          <div className="asgReviewsTop">
            <div className="asgRating"><strong>4,9</strong><span>/ 5<br />286 hodnocení</span></div>
            <div className="asgReviewIntro"><h2>Ukázkové hodnocení servisu.</h2><p>Texty níže jsou součástí fiktivního konceptu a nepředstavují skutečné recenze.</p></div>
          </div>
          <div className="asgReviews">
            {reviews.map(([quote,name]) => <article className="asgReview" key={name}><p>{quote}</p><small>{name} · GOOGLE RECENZE / DEMO</small></article>)}
          </div>
          <span className="asgDemoLabel">Hodnocení a recenze jsou součástí ukázkového konceptu, nejde o skutečná zákaznická data.</span>
        </div>
      </section>

      <section className="asgSection" id="o-nas">
        <div className="asgWrap">
          <div className="asgTeam">
            <div className="asgTeamPhoto">
              <img
                src="https://images.unsplash.com/photo-1711386689622-1cda23e10217?auto=format&fit=crop&fm=jpg&q=82&w=1600"
                alt="Mechanik pracující na voze v běžné autodílně"
              />
            </div>
            <div className="asgTeamCopy">
              <div className="asgKicker">TÝM AUTOSERVISU</div>
              <h2>Lidé, kteří se starají o vaše auto.</h2>
              <p>U skutečného autoservisu by zde byly fotografie týmu, délka praxe a konkrétní specializace jednotlivých mechaniků.</p>
              <div className="asgPeople">
                <div className="asgPerson"><strong>David Horák</strong><span>vedoucí servisu · 16 let praxe</span></div>
                <div className="asgPerson"><strong>Marek Dvořák</strong><span>diagnostika · podvozek</span></div>
                <div className="asgPerson"><strong>Tomáš Jelínek</strong><span>servis · pneuservis</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="asgSection asgSectionSoft" id="kontakt">
        <div className="asgWrap">
          <div className="asgHead">
            <div className="asgKicker">KDE NÁS NAJDETE</div>
            <div><h2>Autoservis v Brně-Slatině.</h2><p>Na hotovém webu může být mapa, popis vjezdu, parkování i fotografie příjezdu k dílně.</p></div>
          </div>
          <div className="asgLocation">
            <div className="asgLocCard">
              <h3>Garáž 17 · Brno Slatina</h3>
              <div className="asgLocData">
                <div className="asgLocLine"><MapPin size={16}/><div><strong>Řípská 17, Brno</strong><span>vjezd z boční komunikace, parkování před dílnou</span></div></div>
                <div className="asgLocLine"><Clock3 size={16}/><div><strong>Po–Pá 7:30–17:00</strong><span>příjem vozů podle rezervovaného termínu</span></div></div>
                <div className="asgLocLine"><Phone size={16}/><div><strong>777 000 000</strong><span>v pracovní době</span></div></div>
                <div className="asgLocLine"><ShieldCheck size={16}/><div><strong>Pojištění odpovědnosti</strong><span>po dobu, kdy je vůz převzatý do servisu</span></div></div>
              </div>
            </div>
            <div className="asgMap" aria-label="Ilustrační mapa příjezdu">
              <div className="asgMapRoad"/><div className="asgMapRoad2"/><span className="asgMapLabel">ŘÍPSKÁ 17 · VJEZD DO SERVISU</span>
            </div>
          </div>
        </div>
      </section>

      <section className="asgSection asgBooking" id="rezervace">
        <div className="asgWrap asgBookingGrid">
          <div className="asgBookingCopy">
            <div className="asgKicker" style={{color:'#d9ff69'}}>OBJEDNÁNÍ</div>
            <h2>Objednání do servisu.</h2>
            <p>Vyberte službu, vůz a požadovaný den. Termín potvrdíme podle kapacity dílny a rozsahu práce.</p>
            <div className="asgBookingAlt"><Phone size={16}/><div><span>nebo zavolejte</span><br/><strong>777 000 000</strong></div></div>
          </div>
          <div className="asgBookingPanel">
            <div className="asgBookingPanelTop"><strong>Rezervace servisu</strong><span>Ukázka rezervačního rozhraní. Formulář není aktivní.</span></div>
            <div className="asgFields">
              <div className="asgField"><label>Služba</label><span>Vyberte službu</span></div>
              <div className="asgField"><label>Preferovaný den</label><span>Vyberte termín</span></div>
              <div className="asgField"><label>Vůz</label><span>Značka a model</span></div>
              <div className="asgField"><label>Telefon</label><span>+420 ...</span></div>
              <div className="asgField asgFieldWide"><label>Poznámka</label><span>Popis závady nebo požadované práce</span></div>
            </div>
            <button className="asgBookingBtn" type="button">Odeslat rezervaci <ArrowRight size={13}/></button>
            <div className="asgBookingNote">Tlačítko je v ukázkovém konceptu záměrně neaktivní. Nejde o skutečný autoservis.</div>
          </div>
        </div>
      </section>

      <footer className="asgFooter">
        <div className="asgWrap asgFooterInner">
          <div><strong>GARÁŽ 17 · AUTOSERVIS</strong><br/>Fiktivní firma vytvořená pouze jako ukázkový koncept.</div>
          <div className="asgFooterRight">Tento koncept vytvořil <a href="/">SpustWeb.cz</a><a className="asgFooterCta" href="/#kontakt">Web pro moje podnikání</a></div>
        </div>
      </footer>
    </div>
  )
}