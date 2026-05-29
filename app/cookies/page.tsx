import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Zásady cookies | VERNO',
  description: 'Co jsou cookies, jaké druhy na webu verno.cz používáme a jak můžete svou volbu kdykoli změnit.',
  alternates: { canonical: 'https://verno.cz/cookies' },
  robots: { index: false, follow: true },
}

export default function Cookies() {
  return (
    <LegalLayout
      eyebrow="Právní informace"
      title={<>Zásady<br />používání cookies</>}
      intro="Co jsou cookies, jaké druhy na webu používáme a jak můžete svou volbu kdykoli změnit."
      effectiveFrom="27. května 2026"
    >
      <div className="toc">
        <p>Obsah</p>
        <ol>
          <li><a href="#c-1">Co jsou cookies</a></li>
          <li><a href="#c-2">Jak nakládáme se souhlasem</a></li>
          <li><a href="#c-3">Jaké cookies používáme</a></li>
          <li><a href="#c-4">Jak cookies vypnout v prohlížeči</a></li>
          <li><a href="#c-5">Změny tohoto dokumentu</a></li>
        </ol>
      </div>

      <h2 id="c-1">1. Co jsou cookies</h2>
      <p>
        Cookies jsou krátké textové soubory, které web ukládá do vašeho prohlížeče při návštěvě. Pomáhají webu pamatovat si vaše nastavení a vyhodnocovat, jak je web používán. Vedle klasických cookies používáme i obdobné technologie (localStorage), na které se vztahují stejná pravidla podle § 89 zákona č. 127/2005 Sb., o elektronických komunikacích.
      </p>

      <h2 id="c-2">2. Jak nakládáme se souhlasem</h2>
      <p>Při první návštěvě webu se vám zobrazí cookie lišta s volbou:</p>
      <ul>
        <li><strong>Přijmout vše</strong> — povolíte všechny kategorie včetně analytických.</li>
        <li><strong>Odmítnout vše</strong> — ponecháte pouze nezbytné cookies. Analytika ani jiné nepovinné technologie se nespustí.</li>
        <li><strong>Nastavit podrobně</strong> — sami určíte, které kategorie chcete povolit.</li>
      </ul>
      <p>
        Vaši volbu si web zapamatuje a respektuje. <strong>Změnit nastavení můžete kdykoli</strong> kliknutím na tlačítko níže nebo na odkaz <em>Nastavení cookies</em> v patičce webu.
      </p>
      <p style={{ margin: '24px 0' }}>
        <button
          type="button"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).openCookieSettings) {
              (window as any).openCookieSettings()
            }
          }}
          style={{
            background: 'var(--ink)',
            color: 'var(--cloud)',
            border: 'none',
            padding: '12px 22px',
            fontFamily: "'Syne',sans-serif",
            fontWeight: 600,
            fontSize: '0.92rem',
            letterSpacing: '.02em',
            borderRadius: 4,
            cursor: 'pointer',
            transition: 'background .2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--orchid)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--ink)' }}
        >
          Změnit nastavení cookies ↗
        </button>
      </p>
      <p>
        Dokud nedáte souhlas s analytickou kategorií, analytické nástroje (Google Analytics) se vůbec nespouštějí. Cloudflare Web Analytics pracuje bez cookies a souhlas nevyžaduje.
      </p>

      <h2 id="c-3">3. Jaké cookies používáme</h2>

      <h3>3.1. Nezbytné (souhlas se nevyžaduje)</h3>
      <p>Tyto cookies jsou nutné pro fungování webu a jeho základní bezpečnost.</p>
      <table>
        <thead>
          <tr>
            <th>Název</th>
            <th>Účel</th>
            <th>Doba uchování</th>
            <th>Zpracovatel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>verno_cookie_consent</code></td>
            <td>uchování vaší volby v cookie liště</td>
            <td>12 měsíců</td>
            <td>Rovino s.r.o.</td>
          </tr>
          <tr>
            <td><code>__cf_bm</code></td>
            <td>rozlišení lidí od botů, ochrana před útoky</td>
            <td>30 minut</td>
            <td>Cloudflare, Inc.</td>
          </tr>
          <tr>
            <td><code>cf_clearance</code></td>
            <td>ověření, že prohlížeč prošel bezpečnostní kontrolou</td>
            <td>dle nastavení Cloudflare, ve výchozím stavu 30 minut</td>
            <td>Cloudflare, Inc.</td>
          </tr>
          <tr>
            <td><code>verno_kalk_v5</code> (localStorage)</td>
            <td>uchování rozpracovaných údajů v kalkulačce OSVČ na vašem zařízení</td>
            <td>trvale, dokud sami nesmažete</td>
            <td>data neopouští váš prohlížeč</td>
          </tr>
        </tbody>
      </table>

      <h3>3.2. Analytické (vyžadují souhlas)</h3>
      <p>Pomáhají nám pochopit, jak je web používán, abychom jej mohli zlepšovat. Spouští se až po vašem souhlasu.</p>
      <table>
        <thead>
          <tr>
            <th>Název</th>
            <th>Účel</th>
            <th>Doba uchování</th>
            <th>Zpracovatel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>_ga</code></td>
            <td>rozlišení návštěvníků (pseudonymizované)</td>
            <td>2 roky</td>
            <td>Google Ireland Limited</td>
          </tr>
          <tr>
            <td><code>_ga_*</code></td>
            <td>uchování stavu měření</td>
            <td>2 roky</td>
            <td>Google Ireland Limited</td>
          </tr>
        </tbody>
      </table>
      <p>
        Vedle toho běží trvale <strong>Cloudflare Web Analytics</strong>, která nepoužívá cookies, nesleduje vás napříč weby a neidentifikuje vás. Souhlas nevyžaduje.
      </p>

      <h2 id="c-4">4. Jak cookies vypnout v prohlížeči</h2>
      <p>Cookies můžete kdykoli smazat nebo blokovat přímo v nastavení svého prohlížeče. Návody pro nejčastější prohlížeče:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/cs/kb/cookies-informace-ktere-stranky-uchovavaji" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/cs-cz/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>
      <p>Plné zablokování cookies může omezit funkčnost některých částí webu.</p>

      <h2 id="c-5">5. Změny tohoto dokumentu</h2>
      <p>
        Seznam cookies se v čase mění — pokud nasadíme nebo odebereme některou ze služeb třetích osob, tabulky aktualizujeme. Aktuální verze je vždy k dispozici na verno.cz/cookies.
      </p>
    </LegalLayout>
  )
}
