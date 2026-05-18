# VERNO — web (Hana Fraňková)

Next.js 14 · statický export · Cloudflare Pages

## Stránky
Domů · Nabídka · Jak pracuji · Proč takhle · Kontakt

## SEO (hotové)
- sitemap.xml (app/sitemap.ts) — automaticky
- robots.txt (app/robots.ts) — automaticky
- strukturovaná data JSON-LD (app/layout.tsx) — ProfessionalService, Lišov, kontakt
- Open Graph + Twitter karty, meta titulky/popisy na každé stránce
- og-verno.jpg (náhled při sdílení)

## PŘED SPUŠTĚNÍM doplnit Formspree (kontaktní formulář)
1. formspree.io → účet zdarma
2. New Form → cíl info@verno.cz
3. zkopíruj Form ID (např. xabcdef1)
4. app/kontakt/page.tsx → nahraď 'XXXX':
   const FORMSPREE_ID = 'xabcdef1'

## Lokálně
npm install && npm run dev

## Build
npm run build → složka out/

## Cloudflare Pages
1. nahraj projekt na GitHub
2. dash.cloudflare.com → Pages → Connect to Git
3. Build command: npm run build · Output: out
4. Deploy. Každý push do main = nové nasazení.
5. Custom Domains → verno.cz + www.verno.cz
6. Po nasazení: Google Search Console → přidej web,
   odešli sitemapu https://www.verno.cz/sitemap.xml

© Hana Fraňková — VERNO
