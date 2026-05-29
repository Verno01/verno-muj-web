import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů',
  description: 'Jaké osobní údaje zpracováváme, proč, komu je předáváme a jaká máte práva. V souladu s GDPR.',
  alternates: { canonical: 'https://verno.cz/ochrana-osobnich-udaju' },
  robots: { index: false, follow: true },
}

export default function OchranaOsobnichUdaju() {
  return (
    <LegalLayout
      eyebrow="Právní informace"
      title={<>Ochrana<br />osobních údajů</>}
      intro="Jaké údaje zpracováváme, proč, komu je předáváme a jaká máte jako subjekt údajů práva. V souladu s GDPR a zákonem č. 110/2019 Sb."
      effectiveFrom="27. května 2026"
    >
      <p className="lead">
        Tyto zásady popisují, jaké osobní údaje shromažďujeme, proč je zpracováváme, komu je předáváme a jaká máte jako subjekt údajů práva. Jsou v souladu s nařízením (EU) 2016/679 (GDPR) a se zákonem č. 110/2019 Sb., o zpracování osobních údajů.
      </p>

      <div className="toc">
        <p>Obsah</p>
        <ol>
          <li><a href="#g-1">Kdo je správce</a></li>
          <li><a href="#g-2">Jaké údaje zpracováváme a proč</a></li>
          <li><a href="#g-3">Komu údaje předáváme</a></li>
          <li><a href="#g-4">Vaše práva</a></li>
          <li><a href="#g-5">Zabezpečení údajů</a></li>
          <li><a href="#g-6">Děti</a></li>
          <li><a href="#g-7">Změny zásad</a></li>
        </ol>
      </div>

      <h2 id="g-1">1. Kdo je správce</h2>
      <p>
        Správcem osobních údajů je společnost <strong>Rovino s.r.o.</strong>, IČO 235 26 629, se sídlem Na Blatech 637, 378 16 Lomnice nad Lužnicí, zapsaná v obchodním rejstříku vedeném Krajským soudem v Českých Budějovicích, oddíl C, vložka 35567 (dále <em>„Správce"</em>).
      </p>
      <p>
        Pro komunikaci se Správcem v záležitostech ochrany osobních údajů použijte e-mail <a href="mailto:info@verno.cz">info@verno.cz</a> nebo poštovní adresu sídla.
      </p>
      <p>
        Správce nejmenoval pověřence pro ochranu osobních údajů; nemá k tomu zákonnou povinnost.
      </p>

      <h2 id="g-2">2. Jaké údaje zpracováváme a proč</h2>

      <h3>2.1. Návštěva webu verno.cz</h3>
      <p>
        Při běžné návštěvě webu zpracováváme v omezeném rozsahu provozní údaje (zejména IP adresu, typ prohlížeče, čas přístupu, navštívenou URL). Tyto údaje jsou nezbytné pro fungování a zabezpečení webu a jsou zpracovávány na základě <strong>oprávněného zájmu Správce</strong> na bezpečném provozu webové prezentace (čl. 6 odst. 1 písm. f) GDPR).
      </p>
      <p>
        Provozní logy jsou uchovávány po dobu nezbytně nutnou, zpravidla nejvýše 30 dnů.
      </p>

      <h3>2.2. Kontaktní formulář a e-mailová komunikace</h3>
      <p>
        Pokud nás kontaktujete prostřednictvím formuláře na webu, e-mailem nebo telefonicky, zpracováváme údaje, které nám sami sdělíte (zejména jméno, e-mail, telefon, obsah zprávy).
      </p>
      <p>
        Odeslání kontaktního formuláře probíhá prostřednictvím služby <strong>Formspree</strong>, která data ze zařízení odesílatele předá Správci na e-mailovou adresu. Formspree v této roli vystupuje jako zpracovatel.
      </p>
      <ul>
        <li><strong>Účel:</strong> odpověď na váš dotaz, jednání o uzavření smlouvy, případně plnění smlouvy.</li>
        <li><strong>Právní základ:</strong> plnění smlouvy nebo opatření před uzavřením smlouvy (čl. 6 odst. 1 písm. b) GDPR), případně oprávněný zájem na vyřízení vaší poptávky (čl. 6 odst. 1 písm. f) GDPR).</li>
        <li><strong>Doba uchování:</strong> zpravidla 12 měsíců od ukončení komunikace; vznikne-li smluvní vztah, po dobu jeho trvání a následně po zákonné archivační lhůty.</li>
      </ul>

      <h3>2.3. Klienti a fakturace</h3>
      <p>
        Pokud s vámi navážeme spolupráci, zpracováváme identifikační, kontaktní a fakturační údaje nezbytné pro uzavření a plnění smlouvy a pro splnění zákonných povinností.
      </p>
      <ul>
        <li><strong>Účel:</strong> plnění smlouvy, vystavování daňových dokladů, vedení účetnictví, plnění daňových povinností.</li>
        <li><strong>Právní základ:</strong> plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR) a plnění právních povinností Správce (čl. 6 odst. 1 písm. c) GDPR).</li>
        <li><strong>Doba uchování:</strong> po dobu trvání smluvního vztahu a následně po zákonné archivační lhůty, zejména 10 let pro daňové doklady dle zákona o DPH a zákona o účetnictví.</li>
      </ul>

      <h3>2.4. Kalkulačka OSVČ na webu</h3>
      <p>
        Webová kalkulačka ukládá vámi vložené údaje výhradně lokálně ve vašem prohlížeči (technologie localStorage). Tyto údaje <strong>nejsou odesílány Správci</strong> ani třetí straně a Správce k nim nemá přístup. Údaje můžete kdykoli odstranit smazáním dat webu v nastavení prohlížeče.
      </p>

      <h3>2.5. Analytika návštěvnosti</h3>
      <p>
        Pokud k tomu udělíte souhlas v cookie liště, zpracováváme pseudonymizované údaje o vašem chování na webu prostřednictvím služby Google Analytics 4. Bližší popis je v dokumentu <a href="/cookies">Zásady používání cookies</a>.
      </p>
      <ul>
        <li><strong>Účel:</strong> měření návštěvnosti, vyhodnocení obsahu, zlepšování webu.</li>
        <li><strong>Právní základ:</strong> váš souhlas (čl. 6 odst. 1 písm. a) GDPR).</li>
        <li><strong>Doba uchování:</strong> podle nastavení Google Analytics, nejdéle však 14 měsíců.</li>
      </ul>
      <p>
        Bez vašeho souhlasu používáme pouze službu <strong>Cloudflare Web Analytics</strong>, která pracuje bez cookies a bez identifikace návštěvníka.
      </p>

      <h2 id="g-3">3. Komu údaje předáváme</h2>
      <p>
        Vaše údaje předáváme jen v nezbytném rozsahu zpracovatelům, kteří nám pomáhají s provozem služeb. Se všemi zpracovateli jsou uzavřeny smlouvy odpovídající požadavkům GDPR.
      </p>
      <table>
        <thead>
          <tr>
            <th>Zpracovatel</th>
            <th>Účel</th>
            <th>Sídlo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Cloudflare, Inc.</strong></td>
            <td>provoz webu (CDN), bezpečnost, analytika bez cookies</td>
            <td>USA / EU</td>
          </tr>
          <tr>
            <td><strong>GitHub, Inc.</strong></td>
            <td>správa zdrojového kódu webu</td>
            <td>USA</td>
          </tr>
          <tr>
            <td><strong>Formspree, Inc.</strong></td>
            <td>technické odeslání kontaktního formuláře</td>
            <td>USA</td>
          </tr>
          <tr>
            <td><strong>Wedos Internet, a.s.</strong></td>
            <td>správa domény</td>
            <td>ČR</td>
          </tr>
          <tr>
            <td><strong>Seznam.cz, a.s.</strong> (Email Pro)</td>
            <td>provoz firemní e-mailové schránky</td>
            <td>ČR</td>
          </tr>
          <tr>
            <td><strong>Google Ireland Limited</strong></td>
            <td>analytika návštěvnosti (GA4) — pouze se souhlasem</td>
            <td>Irsko / EHP</td>
          </tr>
        </tbody>
      </table>
      <p>
        V odůvodněných případech mohou být údaje předány účetní kanceláři, daňovému poradci nebo právnímu zástupci. Na vyžádání mohou být údaje předány orgánům veřejné moci, pokud tak stanoví zákon.
      </p>

      <h3>3.1. Předávání mimo EU/EHP</h3>
      <p>
        Společnosti Cloudflare, Inc., GitHub, Inc. a Google LLC mají sídlo ve Spojených státech. Předávání údajů těmto společnostem probíhá na základě rámce <strong>EU–U.S. Data Privacy Framework</strong>, jehož jsou tyto společnosti certifikovanými účastníky (rámec byl uznán Evropskou komisí jako odpovídající úroveň ochrany rozhodnutím z 10. července 2023), a doplňkově na základě <strong>standardních smluvních doložek</strong> schválených Evropskou komisí.
      </p>
      <p>
        Společnost Formspree, Inc. má rovněž sídlo ve Spojených státech; předávání údajů této společnosti probíhá na základě <strong>standardních smluvních doložek</strong> schválených Evropskou komisí (rozhodnutí 2021/914) a doplňkových technických opatření v souladu se zásadami GDPR.
      </p>
      <p>
        Aktuální status certifikace v rámci DPF lze ověřit v seznamu na{' '}
        <a href="https://www.dataprivacyframework.gov" target="_blank" rel="noopener noreferrer">dataprivacyframework.gov</a>.
      </p>

      <h2 id="g-4">4. Vaše práva</h2>
      <p>Jako subjekt údajů máte právo:</p>
      <ul>
        <li><strong>na přístup</strong> k osobním údajům a na jejich kopii,</li>
        <li><strong>na opravu</strong> nepřesných nebo neúplných údajů,</li>
        <li><strong>na výmaz</strong> údajů („právo být zapomenut"), pokud nepřevažuje jiný zákonný titul,</li>
        <li><strong>na omezení zpracování</strong>,</li>
        <li><strong>na přenositelnost</strong> údajů,</li>
        <li><strong>vznést námitku</strong> proti zpracování založenému na oprávněném zájmu,</li>
        <li><strong>odvolat udělený souhlas</strong> kdykoli, bez vlivu na zákonnost zpracování před jeho odvoláním,</li>
        <li><strong>podat stížnost</strong> u Úřadu pro ochranu osobních údajů (Pplk. Sochora 27, 170 00 Praha 7,{' '}
          <a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer">uoou.gov.cz</a>).</li>
      </ul>
      <p>
        Své právo uplatníte zasláním žádosti na <a href="mailto:info@verno.cz">info@verno.cz</a>. Žádosti vyřizujeme bezplatně, v zákonné lhůtě jednoho měsíce, kterou lze v odůvodněných případech prodloužit nejvýše o další dva měsíce (čl. 12 odst. 3 GDPR).
      </p>

      <h2 id="g-5">5. Zabezpečení údajů</h2>
      <p>
        Správce přijal přiměřená technická a organizační opatření k ochraně osobních údajů, zejména proti jejich ztrátě, neoprávněnému přístupu, změně nebo zveřejnění. Komunikace s webem probíhá prostřednictvím šifrovaného protokolu HTTPS.
      </p>

      <h2 id="g-6">6. Děti</h2>
      <p>
        Web není určen osobám mladším 16 let. Vědomě nezpracováváme osobní údaje dětí mladších 16 let bez souhlasu zákonného zástupce.
      </p>

      <h2 id="g-7">7. Změny zásad</h2>
      <p>
        Tyto zásady mohou být aktualizovány, zejména v souvislosti se změnou zpracování, nasazením nových služeb nebo legislativními změnami. Aktuální verze je vždy k dispozici na adrese verno.cz/ochrana-osobnich-udaju.
      </p>
    </LegalLayout>
  )
}
