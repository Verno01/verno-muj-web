import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Obchodní podmínky',
  description: 'Obchodní podmínky pro tvorbu webových stránek a souvisejících služeb. Rovino s.r.o., obchodní značka Verno.',
  robots: { index: true, follow: true },
}

export default function ObchodniPodminky() {
  return (
    <LegalLayout
      eyebrow="Právní informace"
      title={<>Obchodní<br />podmínky</>}
      intro="Pravidla pro tvorbu webových stránek a souvisejících služeb. Vztahy mezi klientem a Rovino s.r.o. (značka Verno)."
      effectiveFrom="27. května 2026"
    >
      <p className="lead">
        <strong>Společnost:</strong> Rovino s.r.o., se sídlem Na Blatech 637, 378 16 Lomnice nad Lužnicí, IČO 235 26 629, DIČ CZ23526629, zapsaná v obchodním rejstříku vedeném Krajským soudem v Českých Budějovicích, oddíl C, vložka 35567 (dále jen <em>„Poskytovatel"</em>).
      </p>
      <p>
        <strong>Označení Verno</strong> je obchodní značkou Poskytovatele používanou pro prezentaci služeb a komunikaci s klienty. Nejde o samostatný právní subjekt. Veškeré smluvní vztahy vznikají vždy se společností Rovino s.r.o.
      </p>
      <p>
        <strong>Kontakt pro smluvní a reklamační záležitosti:</strong>{' '}
        <a href="mailto:info@verno.cz">info@verno.cz</a>
      </p>
      <p>
        Tyto obchodní podmínky upravují vztahy mezi Poskytovatelem a klientem při tvorbě webových stránek a souvisejících službách. Jsou veřejně dostupné na verno.cz a tvoří součást každého smluvního vztahu, ledaže byla mezi stranami písemně sjednána odchylná úprava.
      </p>

      <div className="toc">
        <p>Obsah</p>
        <ol>
          <li><a href="#cl-1">Úvodní ustanovení</a></li>
          <li><a href="#cl-2">Vznik smluvního vztahu</a></li>
          <li><a href="#cl-3">Předmět služeb</a></li>
          <li><a href="#cl-4">Ceny a platební podmínky</a></li>
          <li><a href="#cl-5">Dokončení a předání díla</a></li>
          <li><a href="#cl-6">Autorská práva, předání kódu a provozní zázemí</a></li>
          <li><a href="#cl-7">Pokračování spolupráce po předání díla</a></li>
          <li><a href="#cl-8">Ukončení spolupráce</a></li>
          <li><a href="#cl-9">Odpovědnost za obsah a právní náležitosti</a></li>
          <li><a href="#cl-10">Zvláštní ustanovení pro spotřebitele</a></li>
          <li><a href="#cl-11">Ochrana osobních údajů</a></li>
          <li><a href="#cl-12">Závěrečná ustanovení</a></li>
          <li><a href="#priloha">Příloha — vzorový formulář pro odstoupení</a></li>
        </ol>
      </div>

      <h2 id="cl-1">1. Úvodní ustanovení</h2>
      <p className="clause"><span className="clause-num">1.1.</span> Tyto obchodní podmínky upravují vztahy mezi Poskytovatelem a klientem, jejichž předmětem je tvorba webových stránek, landing pages a souvisejících digitálních služeb.</p>
      <p className="clause"><span className="clause-num">1.2.</span> Klientem se rozumí podnikající fyzická osoba, právnická osoba nebo spotřebitel ve smyslu § 419 občanského zákoníku, který si u Poskytovatele objedná služby.</p>
      <p className="clause"><span className="clause-num">1.3.</span> Tam, kde tyto podmínky upravují odlišný režim pro spotřebitele a pro podnikatele, je tak výslovně uvedeno. V ostatních ujednáních platí stejná pravidla pro obě skupiny.</p>
      <p className="clause"><span className="clause-num">1.4.</span> Smluvní vztahy se řídí právním řádem České republiky, zejména zákonem č. 89/2012 Sb., občanským zákoníkem, a v případě spotřebitelských smluv též zákonem č. 634/1992 Sb., o ochraně spotřebitele.</p>

      <h2 id="cl-2">2. Vznik smluvního vztahu</h2>
      <p className="clause"><span className="clause-num">2.1.</span> Smluvní vztah mezi klientem a Poskytovatelem může vzniknout prostřednictvím e-mailové nebo jiné prokazatelné elektronické komunikace, ve které dojde k odsouhlasení rozsahu služeb a ceny.</p>
      <p className="clause"><span className="clause-num">2.2.</span> Pokud není sjednáno jinak, není pro vznik smluvního vztahu vyžadován podpis samostatné písemné smlouvy.</p>
      <p className="clause"><span className="clause-num">2.3.</span> K závaznému ujednání dochází před zahájením práce a před zaplacením první faktury, a to odsouhlasením zadání a cenové nabídky některou z prokazatelných forem komunikace (zejména e-mailem).</p>
      <p className="clause"><span className="clause-num">2.4.</span> V průběhu spolupráce může dojít k dohodě na vícepracích nebo změnách zadání. Takové úpravy a s nimi spojené navýšení ceny musí být před jejich provedením odsouhlaseny oběma stranami prokazatelnou elektronickou formou.</p>

      <h2 id="cl-3">3. Předmět služeb</h2>
      <p className="clause"><span className="clause-num">3.1.</span> Poskytovatel zajišťuje zejména tvorbu prezentačních webových stránek, landing pages, drobné technické úpravy a související digitální služby.</p>
      <p className="clause"><span className="clause-num">3.2.</span> Webové stránky jsou vytvářeny jako dílo na zakázku dle individuálního zadání klienta.</p>
      <p className="clause"><span className="clause-num">3.3.</span> Poskytovatel nenabízí software formou SaaS, neprovozuje e-shopová řešení ani komplexní informační systémy.</p>
      <p className="clause"><span className="clause-num">3.4.</span> <strong>Externí služby zvolené klientem.</strong> Klient si může v rámci díla zvolit nebo doobjednat napojení na externí služby třetích osob (zejména redakční systém pro správu obsahu, marketingové nebo analytické nástroje). U těchto služeb vystupuje klient jako správce osobních údajů ve vztahu ke koncovým uživatelům a je povinen si s daným poskytovatelem zajistit potřebnou dokumentaci (zejména smlouvu o zpracování osobních údajů) a uvést ji ve svých zásadách zpracování osobních údajů. Poskytovatel klienta technicky napojí a poskytne mu základní informace o použité službě.</p>

      <h2 id="cl-4">4. Ceny a platební podmínky</h2>
      <p className="clause"><span className="clause-num">4.1.</span> Ceny jsou uváděny bez DPH. Poskytovatel je plátcem DPH; daň bude účtována v zákonné sazbě platné ke dni vystavení daňového dokladu.</p>
      <p className="clause"><span className="clause-num">4.2.</span> Pokud není sjednáno jinak, je spolupráce zahajována po uhrazení zálohové faktury ve výši 50 % sjednané ceny.</p>
      <p className="clause"><span className="clause-num">4.3.</span> Doplatek ceny je splatný před předáním hotového díla, pokud není dohodnuto jinak.</p>
      <p className="clause"><span className="clause-num">4.4.</span> Splatnost faktur je uvedena přímo na faktuře. Není-li uvedeno jinak, činí 14 dnů od vystavení.</p>
      <p className="clause"><span className="clause-num">4.5.</span> V případě prodlení s úhradou je Poskytovatel oprávněn účtovat zákonný úrok z prodlení podle nařízení vlády č. 351/2013 Sb.</p>
      <p className="clause"><span className="clause-num">4.6.</span> V případě předčasného ukončení spolupráce ze strany klienta má Poskytovatel nárok na úhradu skutečně provedených prací. Uhrazená záloha se nevrací a slouží jako minimální vyúčtování odvedené práce; pokud rozsah skutečně provedených prací zálohu přesahuje, doúčtuje se podle skutečnosti. Vůči spotřebiteli se toto ujednání uplatní v rozsahu povoleném zákonem; vyúčtování odvedené práce vždy odpovídá jejímu skutečnému rozsahu a hodnotě.</p>

      <h2 id="cl-5">5. Dokončení a předání díla</h2>
      <p className="clause"><span className="clause-num">5.1.</span> Dílo se považuje za dokončené ve chvíli, kdy odpovídá předem odsouhlasenému rozsahu, funkčnosti a zadání a nevykazuje vady bránící běžnému užívání.</p>
      <p className="clause"><span className="clause-num">5.2.</span> Za vady se nepovažují nové požadavky, změny zadání ani dodatečné úpravy uplatněné po schválení projektu klientem.</p>
      <p className="clause"><span className="clause-num">5.3.</span> <strong>Předáním díla projekt končí.</strong> Klient hradí závěrečnou fakturu a získává licenci a zdrojový kód podle čl. 6. Předáním díla nezaniká spolupráce — strany mohou dál pokračovat formou hostingu webu u Poskytovatele, drobných úprav nebo dalších služeb dle čl. 7.</p>
      <p className="clause"><span className="clause-num">5.4.</span> Po předání díla řeší Poskytovatel přiměřené technické vady vzniklé při tvorbě webu po dobu 30 dnů od předání (ve vztahu k podnikateli). Tímto ujednáním nejsou dotčena zákonná práva spotřebitele z vadného plnění podle občanského zákoníku.</p>
      <p className="clause"><span className="clause-num">5.5.</span> Odpovědnost Poskytovatele se v rozsahu povoleném zákonem nevztahuje zejména na:</p>
      <ul>
        <li>zásahy klienta nebo třetích osob do díla po předání,</li>
        <li>změny hostingového prostředí provedené po předání,</li>
        <li>aktualizace nebo výpadky externích pluginů, knihoven, služeb či systémů třetích osob,</li>
        <li>změny prohlížečů, technologií nebo webových standardů,</li>
        <li>běžný technologický vývoj internetu.</li>
      </ul>

      <h2 id="cl-6">6. Autorská práva, předání kódu a provozní zázemí</h2>
      <p className="clause"><span className="clause-num">6.1.</span> Po úplném uhrazení sjednané ceny díla získává klient k vytvořenému webu výhradní, časově a územně neomezenou licenci pro vlastní potřebu a podnikání. Klient je oprávněn web provozovat, upravovat, dále rozvíjet a svěřit jeho správu třetí osobě.</p>
      <p className="clause"><span className="clause-num">6.2.</span> Spolu s předáním díla získává klient kompletní zdrojový kód webu i veškerý obsah, který do webu vložil, v podobě umožňující další provoz a úpravy. Forma předání (GitHub repozitář, archiv ZIP) se sjednává individuálně.</p>
      <p className="clause"><span className="clause-num">6.3.</span> Z licence jsou vyňaty obecné know-how, opakovaně použitelné komponenty, šablony, knihovny a technická řešení, která Poskytovatel používá i v jiných projektech. K těmto prvkům klient získává nevýhradní licenci v rozsahu nezbytném pro provoz a úpravy díla.</p>
      <p className="clause"><span className="clause-num">6.4.</span> <strong>Provozní zázemí.</strong> Web je v průběhu projektu a následně po dobu, kdy se klient rozhodne využívat hosting Poskytovatele, provozován na infrastruktuře Poskytovatele (hosting Cloudflare, správa kódu GitHub). Klient bere tuto skutečnost na vědomí. Doménu si po celou dobu spolupráce i po jejím skončení zajišťuje a hradí klient přímo u příslušného registrátora; doména je v dispozici klienta a netvoří součást díla.</p>
      <p className="clause"><span className="clause-num">6.5.</span> Poskytovatel není poskytovatelem hostingových ani registračních služeb a v rozsahu povoleném zákonem nenese odpovědnost za výpadky, omezení nebo technické problémy služeb třetích osob (zejména Cloudflare, GitHub, registrátor domény).</p>
      <p className="clause"><span className="clause-num">6.6.</span> Poskytovatel je oprávněn uvést dokončený projekt ve svém portfoliu jako referenci, pokud si klient před zahájením prací písemně nevyhradí jinak.</p>

      <h2 id="cl-7">7. Pokračování spolupráce po předání díla</h2>
      <p className="clause"><span className="clause-num">7.1.</span> Po předání díla může klient pokračovat ve spolupráci s Poskytovatelem zejména v těchto formách:</p>
      <ul>
        <li>provoz webu na infrastruktuře Poskytovatele (Cloudflare + GitHub),</li>
        <li>drobné úpravy textu, fotografií a údajů hodinovou sazbou podle aktuálního ceníku,</li>
        <li>rozšíření webu nad rámec původního zadání (samostatně sjednávané),</li>
        <li>konzultace k provozu webu.</li>
      </ul>
      <p className="clause"><span className="clause-num">7.2.</span> Pokračující spolupráce nevyžaduje samostatnou smlouvu; uzavírá se formou objednávky e-mailem nebo jinou prokazatelnou elektronickou komunikací.</p>
      <p className="clause"><span className="clause-num">7.3.</span> <strong>Záruka po dobu aktivní spolupráce.</strong> Po celou dobu, kdy je web hostován na infrastruktuře Poskytovatele a klient řádně hradí dohodnuté služby, Poskytovatel bezplatně řeší technické vady webu vzniklé z jeho strany — zejména chyby v kódu, problémy s vykreslováním, nefunkční odkazy, narušení původní funkčnosti díla. Tato záruka nahrazuje a rozšiřuje 30denní lhůtu podle čl. 5.4.</p>
      <p className="clause"><span className="clause-num">7.4.</span> Záruka podle čl. 7.3 se nevztahuje na:</p>
      <ul>
        <li>nové požadavky, změny zadání ani úpravy obsahu (jde o placené úpravy podle čl. 7.1),</li>
        <li>vady vzniklé zásahem klienta, třetí osoby nebo změnou na straně služeb třetích osob (Cloudflare, GitHub, registrátor domény),</li>
        <li>důsledky změn prohlížečů, technologií či webových standardů.</li>
      </ul>
      <p className="clause"><span className="clause-num">7.5.</span> Záruka podle čl. 7.3 končí ukončením aktivní spolupráce podle čl. 8 nebo přechodem webu k jinému poskytovateli.</p>

      <h2 id="cl-8">8. Ukončení spolupráce</h2>
      <p className="clause"><span className="clause-num">8.1.</span> Tento článek upravuje úplné ukončení vztahu mezi klientem a Poskytovatelem po předání díla — tedy stav, kdy klient přestává využívat infrastrukturu a služby Poskytovatele.</p>
      <p className="clause"><span className="clause-num">8.2.</span> Spolupráci může ukončit kterákoli ze stran kdykoli, písemně, prokazatelnou elektronickou formou (zejména e-mailem na kontaktní adresu druhé strany).</p>
      <p className="clause"><span className="clause-num">8.3.</span> <strong>Ukončení ze strany klienta — odchod jinam.</strong> Pokud chce klient pokračovat v provozu webu mimo infrastrukturu Poskytovatele, dohodnou strany formu předání. Klient si může zvolit z těchto variant:</p>
      <ul>
        <li><strong>(a)</strong> klient si založí vlastní účty Cloudflare a GitHub a Poskytovatel mu předá kompletní zdrojový kód s návodem na nasazení,</li>
        <li><strong>(b)</strong> převod stávajícího repozitáře a projektu na klientův účet (vyžaduje, aby klient měl účty u Cloudflare a GitHub a převod přijal),</li>
        <li><strong>(c)</strong> archiv ZIP se zdrojovým kódem a základní dokumentací — klient si nasazení zařídí sám nebo přes jiného dodavatele.</li>
      </ul>
      <p className="clause"><span className="clause-num">8.4.</span> Předání podle čl. 8.3 proběhne do 14 dnů od dohody na formě. Poskytovatel poskytne součinnost při přechodu v rozsahu jedné hodiny bez dalšího poplatku; další součinnost nad tento rozsah je zpoplatněna dohodnutou hodinovou sazbou.</p>
      <p className="clause"><span className="clause-num">8.5.</span> <strong>Ukončení ze strany Poskytovatele.</strong> Poskytovatel oznámí ukončení provozu webu na své infrastruktuře nejméně 60 dnů předem. V této lhůtě umožní klientovi zvolit některou z variant podle čl. 8.3 a poskytne přiměřenou součinnost při přechodu.</p>
      <p className="clause"><span className="clause-num">8.6.</span> Po ukončení spolupráce:</p>
      <ul>
        <li>klient má veškerá práva k dílu podle čl. 6 a může s webem libovolně nakládat,</li>
        <li>Poskytovatel přestává odpovídat za technické fungování webu (záruka podle čl. 7.3 končí),</li>
        <li>klient si dále zajišťuje hosting, správu a údržbu samostatně nebo přes jiného dodavatele,</li>
        <li>doména zůstává v dispozici klienta beze změny.</li>
      </ul>
      <p className="clause"><span className="clause-num">8.7.</span> Ukončení spolupráce nemá vliv na již vystavené faktury ani na nárok Poskytovatele na úhradu skutečně provedených prací podle čl. 4.6.</p>

      <h2 id="cl-9">9. Odpovědnost za obsah a právní náležitosti</h2>
      <p className="clause"><span className="clause-num">9.1.</span> Klient odpovídá za správnost, zákonnost a oprávněnost podkladů, textů, fotografií, obchodních podmínek a dalších materiálů dodaných nebo odsouhlasených pro tvorbu webu, včetně oprávnění k užití autorských děl a osobních údajů třetích osob.</p>
      <p className="clause"><span className="clause-num">9.2.</span> Poskytovatel v rozsahu povoleném zákonem nenese odpovědnost za právní správnost podkladů a obsahu dodaného klientem ani za soulad podnikání klienta s právními předpisy, pokud nebylo výslovně sjednáno jinak.</p>
      <p className="clause"><span className="clause-num">9.3.</span> Poskytovatel není advokátem ani advokátní kanceláří a neposkytuje právní služby.</p>

      <h2 id="cl-10">10. Zvláštní ustanovení pro spotřebitele</h2>
      <p className="clause"><span className="clause-num">10.1.</span> Tento článek se uplatní v případě, že je klientem spotřebitel ve smyslu § 419 občanského zákoníku.</p>
      <p className="clause"><span className="clause-num">10.2.</span> <strong>Právo na odstoupení od smlouvy.</strong> Spotřebitel má právo odstoupit od smlouvy uzavřené distančním způsobem (zejména prostřednictvím e-mailové komunikace) ve lhůtě 14 dnů ode dne jejího uzavření, a to bez udání důvodu. Odstoupení lze zaslat na adresu sídla Poskytovatele nebo na e-mail <a href="mailto:info@verno.cz">info@verno.cz</a>. Pro odstoupení může spotřebitel využít vzorový formulář, který je přílohou těchto podmínek.</p>
      <p className="clause"><span className="clause-num">10.3.</span> <strong>Zánik práva na odstoupení.</strong> V souladu s § 1837 písm. l) občanského zákoníku právo na odstoupení zaniká, pokud spotřebitel <strong>(a)</strong> udělí Poskytovateli výslovný předchozí souhlas se zahájením plnění před uplynutím 14denní lhůty a zároveň <strong>(b)</strong> výslovně vezme na vědomí, že udělením tohoto souhlasu právo na odstoupení od smlouvy zaniká, jakmile bylo dílo úplně dokončeno. Tyto skutečnosti spotřebitel potvrzuje aktivním krokem před zahájením prací (zejména potvrzením v e-mailové komunikaci nebo zaškrtnutím odpovídajícího pole v objednávkovém procesu).</p>
      <p className="clause"><span className="clause-num">10.4.</span> <strong>Zákonná práva z vad.</strong> Vůči spotřebiteli platí zákonná odpovědnost za vady díla podle občanského zákoníku v plném rozsahu. Lhůty a omezení podle čl. 5, 6 a 7 se na spotřebitele uplatní pouze v rozsahu, v jakém nejsou v rozporu s kogentními ustanoveními zákona.</p>
      <p className="clause"><span className="clause-num">10.5.</span> <strong>Mimosoudní řešení sporů.</strong> K mimosoudnímu řešení spotřebitelských sporů z této smlouvy je příslušná Česká obchodní inspekce, se sídlem Štěpánská 567/15, 120 00 Praha 2, internetová adresa{' '}
        <a href="https://adr.coi.gov.cz" target="_blank" rel="noopener noreferrer">adr.coi.gov.cz</a>. Spotřebitel může využít rovněž evropskou platformu pro řešení sporů on-line dostupnou na{' '}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.
      </p>
      <p className="clause"><span className="clause-num">10.6.</span> <strong>Dozorové orgány.</strong> Dozor nad dodržováním povinností Poskytovatele vykonávají Česká obchodní inspekce a příslušný živnostenský úřad.</p>

      <h2 id="cl-11">11. Ochrana osobních údajů</h2>
      <p className="clause"><span className="clause-num">11.1.</span> Zpracování osobních údajů klienta i osob komunikujících přes kontaktní formulář se řídí samostatným dokumentem <a href="/ochrana-osobnich-udaju">Zásady zpracování osobních údajů</a>.</p>
      <p className="clause"><span className="clause-num">11.2.</span> Pravidla použití cookies a obdobných technologií upravuje dokument <a href="/cookies">Zásady používání cookies</a>.</p>

      <h2 id="cl-12">12. Závěrečná ustanovení</h2>
      <p className="clause"><span className="clause-num">12.1.</span> Smluvní vztah se řídí právním řádem České republiky. Případné spory budou strany řešit přednostně smírnou cestou. Nedojde-li ke smíru, bude spor rozhodovat věcně a místně příslušný soud podle sídla Poskytovatele, vyjma případů, kdy je klientem spotřebitel — v takovém případě se příslušnost soudu řídí § 87 občanského soudního řádu, resp. nařízením Brusel I bis.</p>
      <p className="clause"><span className="clause-num">12.2.</span> Stane-li se některé ustanovení těchto podmínek neplatným nebo neúčinným, nemá to vliv na platnost zbývajících ustanovení.</p>
      <p className="clause"><span className="clause-num">12.3.</span> Poskytovatel si vyhrazuje právo tyto obchodní podmínky jednostranně měnit. Nové znění bude vždy dostupné na webových stránkách Poskytovatele. Na již uzavřené smluvní vztahy se vztahují obchodní podmínky platné ke dni vzniku smluvního vztahu, ledaže se strany dohodnou jinak.</p>

      <h2 id="priloha">Příloha — Vzorový formulář pro odstoupení od smlouvy</h2>
      <p><em>(určeno spotřebiteli)</em></p>
      <div className="annex">
        <p><strong>Adresát:</strong> Rovino s.r.o., Na Blatech 637, 378 16 Lomnice nad Lužnicí, e-mail: info@verno.cz</p>
        <p>Oznamuji, že tímto odstupuji od smlouvy o tvorbě webových stránek uzavřené dne ____________.</p>
        <p>Jméno a příjmení spotřebitele: ____________</p>
        <p>Adresa spotřebitele: ____________</p>
        <p>Datum: ____________</p>
        <p>Podpis (pouze pokud je formulář zasílán v listinné podobě): ____________</p>
      </div>
    </LegalLayout>
  )
}
