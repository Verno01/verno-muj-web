/**
 * Cookie consent — utility pro správu souhlasu a Google Consent Mode v2.
 *
 * Klíčové principy:
 * - Defaultně VŠECHNO denied (GA se nespustí dokud uživatel nesvolí).
 * - Volba se ukládá do localStorage pod klíčem `verno_cookie_consent`.
 * - Verzování přes CONSENT_VERSION — zvýšením čísla se uživatelům
 *   lišta zobrazí znovu (typicky při změně seznamu zpracovatelů).
 * - Cloudflare Web Analytics běží trvale, bez souhlasu (nepoužívá cookies).
 */

export const CONSENT_VERSION = 1
export const CONSENT_KEY = 'verno_cookie_consent'

export type ConsentChoice = {
  necessary: true // vždy true
  analytics: boolean
  version: number
  timestamp: number
}

/** Defaultní stav před udělením souhlasu — vše krom nezbytných odmítnuto. */
export const DEFAULT_CONSENT: ConsentChoice = {
  necessary: true,
  analytics: false,
  version: CONSENT_VERSION,
  timestamp: 0,
}

/** Načte uložený souhlas. Vrací null, pokud uživatel ještě nezvolil
 *  nebo je uložená verze starší než aktuální (lišta se zobrazí znovu). */
export function loadConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentChoice
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

/** Uloží volbu a propíše ji do Google Consent Mode. */
export function saveConsent(analytics: boolean): ConsentChoice {
  const choice: ConsentChoice = {
    necessary: true,
    analytics,
    version: CONSENT_VERSION,
    timestamp: Date.now(),
  }
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(choice))
  } catch {
    /* localStorage může být zablokovaný — tichá ignorace */
  }
  applyConsentToGtag(choice)
  return choice
}

/**
 * Inicializace Google Consent Mode v2.
 * Volá se VŽDY a hned (i bez souhlasu), aby gtag měl správný stav,
 * než se vůbec načte GA skript. Defaultně vše denied.
 */
export function initConsentMode() {
  if (typeof window === 'undefined') return
  // dataLayer + gtag stub (gtag.js se načte teprve PO udělení souhlasu)
  const w = window as any
  w.dataLayer = w.dataLayer || []
  function gtag(..._args: any[]) {
    w.dataLayer.push(arguments)
  }
  w.gtag = w.gtag || gtag
  w.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500,
  })
  w.gtag('set', 'developer_id.dZWE3MjE', true)
}

/** Aplikuje souhlas do Consent Mode (update) a případně načte GA skript. */
export function applyConsentToGtag(choice: ConsentChoice) {
  if (typeof window === 'undefined') return
  const w = window as any
  if (!w.gtag) return

  w.gtag('consent', 'update', {
    analytics_storage: choice.analytics ? 'granted' : 'denied',
  })

  if (choice.analytics) {
    loadGoogleAnalytics()
  }
}

/**
 * Načte GA skript JEN tehdy, když máme souhlas.
 * GA_ID se bere z process.env.NEXT_PUBLIC_GA_ID (doplníte v Cloudflare Pages).
 * Bez nastaveného ID se nic nestane — bezpečné default chování.
 */
let gaLoaded = false
function loadGoogleAnalytics() {
  if (gaLoaded) return
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  if (!GA_ID || typeof window === 'undefined') return

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)

  const w = window as any
  w.gtag('js', new Date())
  w.gtag('config', GA_ID, {
    anonymize_ip: true,
    send_page_view: true,
  })
  gaLoaded = true
}
