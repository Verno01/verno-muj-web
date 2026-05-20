# VERNO — verno.cz

## Spuštění
```bash
npm install
npm run dev
```

## Struktura
```
app/
  page.tsx              — Domovská stránka
  nabidka/page.tsx      — Nabídka
  jak-pracuji/page.tsx  — Jak pracuji
  proc-takhle/page.tsx  — Proč takhle (+ FAQ)
  kontakt/page.tsx      — Kontakt s formulářem
  globals.css           — Design system
  layout.tsx            — Hlavní layout
components/
  Navigation.tsx
  Footer.tsx
public/
  screens/              — Screenshoty referenčních webů
  hana.jpg              — Fotka pro O mně
  og-verno.jpg          — Open Graph
```

## Public složka
Přidej do public/screens/:
- 5class.jpg
- rovino.jpg
- ambiente.jpg

## Formulář
Kontaktní formulář je nutné napojit na backend (Formspree, Resend apod.)
