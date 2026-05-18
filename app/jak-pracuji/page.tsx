'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  { n: '01', t: 'Ozvete se', d: 'Kontaktujete a vyplníte formulář — pár vět o tom, co děláte, jaký web si představujete a co už máte připravené (texty, fotky, logo). Do dvou pracovních dnů se ozvu.' },
  { n: '02', t: 'Domluvíme se na zadání', d: 'Projdeme spolu, k čemu web má sloužit, koho má oslovit a co má návštěvník udělat. Určíme rozsah, rozdělíme si, co připravíte vy a co udělám já, a domluvíme cenu — písemně, předem.' },
  { n: '03', t: 'Tvořím a průběžně ukazuji', d: 'Začnu stavět. Místo posílání obrázků vás průběžně oslovím s rozpracovanou verzí webu na dočasné adrese — můžete se podívat, jak roste, a hned říct, co upravit.' },
  { n: '04', t: 'Zapracuji připomínky', d: 'Po každé ukázané verzi si řekneme, co doladit. Dvě kola úprav jsou součástí ceny. Když přijdou větší změny nad rámec původního zadání, řeknu vám to dopředu — ne potichu na faktuře.' },
  { n: '05', t: 'Spustíme web', d: 'Hotový web nasadím na vaši doménu, projdu, že vše funguje na počítači i mobilu, a přihlásím vás do Google Search Console.' },
  { n: '06', t: 'Předám', d: 'Dostanete funkční web a vysvětlím vám základní věci kolem něj. Když budete někdy potřebovat něco upravit, ozvete se — řeší se to jednorázově, nejste na ničem závislí.' },
]

const need = [
  ['Informace o tom, co děláte', 'Čím se zabýváte, pro koho pracujete, co vás odlišuje, co má návštěvník udělat. Nemusíte to umět hezky napsat, od toho jsem tu já. Ale ty informace musí přijít od vás, nikdo jiný je nezná.'],
  ['Fotografie', 'Ideálně vaše vlastní — vaše práce, vy, vaše prostředí. Působí to nesrovnatelně líp než fotky z databáze, kde každý druhý web má stejného usměvavého člověka u notebooku. Fotky, které dodáte, můžu upravit (ořez, světlo, barvy, sjednocení). Když vlastní nemáte, vybereme spolu vhodné placené a řeknu vám předem, když to bude potřeba.'],
  ['Logo a barvy, pokud je máte', 'Když máte logo nebo zavedené barvy, web na ně navážu. Když nemáte, není to problém, navrhnu vizuální podobu tak, aby seděla k tomu, co děláte.'],
  ['Doménu', 'Adresu webu (např. vasefirma.cz). Když ji ještě nemáte, pomohu vám si ji jednoduše pořídit, je to otázka pár stovek ročně.'],
  ['Vaši představu — pokud nějakou máte', 'Jestli máte v hlavě, jak by web měl působit, co se vám líbí, čeho se vyvarovat, řekněte mi to, beru to vážně. Když konkrétní představu nemáte, navrhnu směr já a vysvětlím proč. Texty obvykle připravuji já, pokud máte vlastní a chcete je použít, použijeme je.'],
]

export default function JakPracuji() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ background: 'var(--cream-2)', padding: 'clamp(70px,11vw,130px) clamp(22px,5vw,62px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 26 }}>Proces</p>
          <h1 className="serif" style={{ fontSize: 'clamp(2.6rem,6vw,5rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-.022em', color: 'var(--ink)', margin: '0 0 28px', maxWidth: 720 }}>
            Od první zprávy<br /><span style={{ fontStyle: 'italic', color: 'var(--terra)' }}>po hotový web.</span>
          </h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--ink-soft)', maxWidth: 600, margin: 0 }}>
            Web nevzniká tak, že zmizím na měsíc a pak něco pošlu. Pracuji po krocích a průběžně vám ukazuji, v jaké fázi web je. Tady je celý postup a hlavně to, co budu potřebovat od vás — protože i na tom stojí co nejlepší výsledek.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,8vw,96px) clamp(22px,5vw,62px)', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 940, margin: '0 auto' }}>
          {steps.map((s, i) => (
            <div key={i} className={`reveal step-row`} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 36, padding: '40px 0', borderBottom: i < steps.length - 1 ? '1px solid var(--line)' : 'none' }}>
              <p className="serif" style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--green-lt)', lineHeight: 1, margin: 0 }}>{s.n}</p>
              <div>
                <h2 className="serif" style={{ fontSize: '1.6rem', fontWeight: 500, margin: '0 0 12px', color: 'var(--ink)' }}>{s.t}</h2>
                <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--ink-soft)', margin: 0 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--slate)', padding: 'clamp(60px,9vw,116px) clamp(22px,5vw,62px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p className="eyebrow reveal" style={{ marginBottom: 22, color: 'rgba(243,235,224,.55)' }}>Váš díl</p>
          <h2 className="serif reveal d1" style={{ fontSize: 'clamp(1.9rem,4.2vw,3.1rem)', fontWeight: 300, color: 'var(--cream)', margin: '0 0 18px', letterSpacing: '-.015em' }}>
            Co od vás budu potřebovat a&nbsp;proč.
          </h2>
          <p className="reveal d2" style={{ fontSize: 14.5, lineHeight: 1.8, color: 'rgba(243,235,224,.6)', margin: '0 0 50px', maxWidth: 560 }}>
            Tohle je nejdůležitější část. Web je tak dobrý, jak dobré jsou podklady.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(243,235,224,.1)' }}>
            {need.map(([t, d], i) => (
              <div key={i} className={`reveal d${(i % 4) + 1} need-row`} style={{ background: 'var(--slate)', display: 'grid', gridTemplateColumns: '.7fr 1.3fr', gap: 32, padding: '30px 0' }}>
                <h3 className="serif" style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--cream)', margin: 0 }}>{t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(243,235,224,.62)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(56px,8vw,100px) clamp(22px,5vw,62px)', background: 'var(--cream)' }}>
        <div className="reveal" style={{ maxWidth: 760, margin: '0 auto', background: 'var(--cream-2)', borderRadius: 4, padding: 'clamp(32px,5vw,56px)', border: '1px solid var(--line)' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(1.6rem,3.4vw,2.4rem)', fontWeight: 400, color: 'var(--ink)', margin: '0 0 22px' }}>Jak dlouho to trvá</h2>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--ink-soft)', margin: 0 }}>
            Záleží na velikosti webu a hlavně na tom, jak rychle se sejdou podklady — texty a fotky bývají nejčastější brzda. Nedávám konkrétní datum spuštění, protože bych ho dávala naslepo a to nechci. Co vám slíbit můžu: budete pravidelně informováni, v jaké fázi vše je. Když máte pevný termín (otevíráte provozovnu, blíží se akce), řekněte mi to hned v první zprávě, podívám se, jestli to jde stihnout, a řeknu vám, jestli ano nebo ne.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(56px,9vw,110px) clamp(22px,5vw,62px)', textAlign: 'center', background: 'var(--cream)' }}>
        <div className="reveal" style={{ maxWidth: 540, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(2rem,4.4vw,3rem)', fontWeight: 300, color: 'var(--ink)', margin: '0 0 20px', letterSpacing: '-.018em' }}>Máte zájem?</h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--dim)', margin: '0 0 34px' }}>
            Napište mi pár vět o tom, co děláte a co od webu čekáte. Ozvu se vám.
          </p>
          <Link href="/kontakt" className="btn btn-green">Napsat mi <ArrowRight size={15} className="arr" /></Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .step-row { grid-template-columns: 60px 1fr !important; gap: 20px !important; }
          .need-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  )
}
