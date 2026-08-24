/**
 * Cookie consent — utility pro správu souhlasu a Google Consent Mode v2.
 */

export const CONSENT_VERSION = 1
export const CONSENT_KEY = 'verno_cookie_consent'

export type ConsentChoice = {
  necessary: true
  analytics: boolean
  version: number
  timestamp: number
}

export const DEFAULT_CONSENT: ConsentChoice = {
  necessary: true,
  analytics: false,
  version: CONSENT_VERSION,
  timestamp: 0,
}

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

export function saveConsent(analytics: boolean): ConsentChoice {
  const choice: ConsentChoice = {
    necessary: true,
    analytics,
    version: CONSENT_VERSION,
    timestamp: Date.now(),
  }
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(choice))
  } catch {}
  applyConsentToGtag(choice)
  applyConsentToClarity(choice)
  return choice
}

export function initConsentMode() {
  if (typeof window === 'undefined') return
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
}

export function applyConsentToGtag(choice: ConsentChoice) {
  if (typeof window === 'undefined') return
  const w = window as any
  if (!w.gtag) return

  w.gtag('consent', 'update', {
    analytics_storage: choice.analytics ? 'granted' : 'denied',
  })

  if (choice.analytics) loadGoogleAnalytics()
}

export function applyConsentToClarity(choice: ConsentChoice) {
  if (typeof window === 'undefined') return

  if (choice.analytics) {
    loadClarity()
    ;(window as any).clarity?.('consentv2', {
      ad_Storage: 'denied',
      analytics_Storage: 'granted',
    })
    return
  }

  if (typeof (window as any).clarity === 'function') {
    ;(window as any).clarity('consentv2', {
      ad_Storage: 'denied',
      analytics_Storage: 'denied',
    })
  }
}

let gaLoaded = false
function loadGoogleAnalytics() {
  if (gaLoaded || typeof window === 'undefined') return
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-JXQX45XH7R'

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


let clarityLoaded = false
function loadClarity() {
  if (clarityLoaded || typeof window === 'undefined') return

  const w = window as any
  w.clarity = w.clarity || function (...args: any[]) {
    ;(w.clarity.q = w.clarity.q || []).push(args)
  }

  const s = document.createElement('script')
  s.async = true
  s.src = 'https://www.clarity.ms/tag/y7e3iax4hl'
  document.head.appendChild(s)
  clarityLoaded = true
}
