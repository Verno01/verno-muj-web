'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import {
  loadConsent,
  saveConsent,
  initConsentMode,
  applyConsentToGtag,
  type ConsentChoice,
} from '@/lib/cookieConsent'

type Mode = 'hidden' | 'banner' | 'detail'

/**
 * CookieBanner — vykresluje se v <body> přes layout.tsx.
 * Stavy: hidden (uživatel již rozhodl) / banner (úvodní stav) / detail (přepínače).
 *
 * Globální `window.openCookieSettings()` umožňuje znovuotevření z patičky
 * nebo ze stránky /cookies.
 */
export default function CookieBanner() {
  const [mode, setMode] = useState<Mode>('hidden')
  const [analytics, setAnalytics] = useState(false)
  const firstFocusRef = useRef<HTMLButtonElement>(null)

  // 1) Při montu: inicializovat Consent Mode (vždy, i bez souhlasu)
  //    a načíst uloženou volbu, pokud existuje.
  useEffect(() => {
    initConsentMode()
    const existing = loadConsent()
    if (existing) {
      // Uživatel už dříve zvolil — aplikujeme volbu a banner neukazujeme.
      applyConsentToGtag(existing)
      setAnalytics(existing.analytics)
    } else {
      // První návštěva nebo zastaralá verze — zobrazíme banner.
      setMode('banner')
    }

    // 2) Registrace globálního handleru pro znovuotevření z jiných míst.
    ;(window as any).openCookieSettings = () => {
      const cur = loadConsent()
      setAnalytics(cur?.analytics ?? false)
      setMode('detail')
    }

    return () => {
      delete (window as any).openCookieSettings
    }
  }, [])

  // 3) Focus management — po zobrazení dej focus na první tlačítko.
  useEffect(() => {
    if (mode !== 'hidden' && firstFocusRef.current) {
      firstFocusRef.current.focus()
    }
  }, [mode])

  // 4) Esc → zavře detail zpět na banner (pokud bylo zobrazené z banneru),
  //    nebo zavře úplně (pokud bylo otevřeno z patičky).
  useEffect(() => {
    if (mode === 'hidden') return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Esc nezavírá banner při první návštěvě, jen detail
        if (mode === 'detail' && loadConsent()) {
          setMode('hidden')
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mode])

  const acceptAll = useCallback(() => {
    saveConsent(true)
    setAnalytics(true)
    setMode('hidden')
  }, [])

  const rejectAll = useCallback(() => {
    saveConsent(false)
    setAnalytics(false)
    setMode('hidden')
  }, [])

  const saveDetail = useCallback(() => {
    saveConsent(analytics)
    setMode('hidden')
  }, [analytics])

  if (mode === 'hidden') return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="cookie-banner"
    >
      <div className="cookie-banner-inner">
        {mode === 'banner' && (
          <>
            <div className="cookie-banner-text">
              <p id="cookie-banner-title" className="cookie-banner-title">
                Cookies na verno.cz
              </p>
              <p id="cookie-banner-desc" className="cookie-banner-desc">
                Web používá nezbytné cookies pro provoz a — pokud souhlasíte — analytické cookies pro měření návštěvnosti.{' '}
                <Link href="/cookies">Podrobnosti</Link>.
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button
                ref={firstFocusRef}
                type="button"
                className="cb-btn cb-btn-primary"
                onClick={acceptAll}
              >
                Přijmout vše
              </button>
              <button
                type="button"
                className="cb-btn cb-btn-secondary"
                onClick={rejectAll}
              >
                Odmítnout vše
              </button>
              <button
                type="button"
                className="cb-btn cb-btn-text"
                onClick={() => setMode('detail')}
              >
                Nastavit podrobně
              </button>
            </div>
          </>
        )}

        {mode === 'detail' && (
          <>
            <div className="cookie-banner-text">
              <p id="cookie-banner-title" className="cookie-banner-title">
                Nastavení cookies
              </p>
              <p id="cookie-banner-desc" className="cookie-banner-desc">
                Vyberte si, které kategorie chcete povolit. Nezbytné cookies jsou nutné pro fungování webu a nelze je vypnout.
              </p>
            </div>

            <div className="cookie-cats">
              <div className="cookie-cat">
                <div className="cookie-cat-head">
                  <span className="cookie-cat-name">Nezbytné</span>
                  <span className="cookie-cat-locked" aria-label="Vždy zapnuto">Vždy zapnuto</span>
                </div>
                <p className="cookie-cat-desc">
                  Nutné pro fungování webu a jeho bezpečnost (uložení vaší volby, ochrana proti botům).
                </p>
              </div>

              <div className="cookie-cat">
                <div className="cookie-cat-head">
                  <label htmlFor="cb-analytics" className="cookie-cat-name">Analytické</label>
                  <label className="switch">
                    <input
                      id="cb-analytics"
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                    />
                    <span className="slider" aria-hidden="true" />
                  </label>
                </div>
                <p className="cookie-cat-desc">
                  Google Analytics 4 — pseudonymizované měření návštěvnosti pro zlepšování webu. Cloudflare Web Analytics (bez cookies) běží i bez souhlasu.
                </p>
              </div>
            </div>

            <div className="cookie-banner-actions">
              <button
                ref={firstFocusRef}
                type="button"
                className="cb-btn cb-btn-primary"
                onClick={saveDetail}
              >
                Uložit volbu
              </button>
              <button
                type="button"
                className="cb-btn cb-btn-secondary"
                onClick={acceptAll}
              >
                Přijmout vše
              </button>
              <button
                type="button"
                className="cb-btn cb-btn-text"
                onClick={rejectAll}
              >
                Odmítnout vše
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        .cookie-banner {
          position: fixed;
          left: clamp(16px, 3vw, 32px);
          right: clamp(16px, 3vw, 32px);
          bottom: clamp(16px, 3vw, 32px);
          z-index: 9999;
          background: var(--cloud);
          color: var(--ink);
          border: 1px solid rgba(28,28,30,.08);
          border-radius: 6px;
          box-shadow: 0 12px 40px rgba(28,28,30,.18), 0 2px 8px rgba(28,28,30,.06);
          max-width: 920px;
          margin: 0 auto;
          animation: cookie-slide-up .4s cubic-bezier(.22,1,.36,1);
        }
        @keyframes cookie-slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .cookie-banner-inner {
          padding: clamp(20px, 3vw, 28px) clamp(22px, 3vw, 32px);
        }
        .cookie-banner-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 8px;
          letter-spacing: -.01em;
        }
        .cookie-banner-desc {
          font-size: .92rem;
          line-height: 1.6;
          color: var(--ink-s);
          margin: 0 0 18px;
          max-width: 720px;
        }
        .cookie-banner-desc a {
          color: var(--ink);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: var(--orchid);
        }
        .cookie-banner-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
        }
        .cb-btn {
          font-family: 'Syne', sans-serif;
          font-size: .88rem;
          font-weight: 600;
          letter-spacing: .01em;
          padding: 10px 18px;
          border-radius: 4px;
          cursor: pointer;
          transition: background .2s, color .2s, border-color .2s;
          border: 1px solid transparent;
        }
        .cb-btn:focus-visible {
          outline: 2px solid var(--orchid);
          outline-offset: 2px;
        }
        .cb-btn-primary {
          background: var(--ink);
          color: var(--cloud);
        }
        .cb-btn-primary:hover { background: var(--orchid); }
        .cb-btn-secondary {
          background: transparent;
          color: var(--ink);
          border-color: rgba(28,28,30,.18);
        }
        .cb-btn-secondary:hover {
          border-color: var(--ink);
          background: rgba(28,28,30,.04);
        }
        .cb-btn-text {
          background: transparent;
          color: var(--ink-s);
          padding: 10px 12px;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: var(--orchid);
        }
        .cb-btn-text:hover { color: var(--ink); }

        .cookie-cats {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin: 8px 0 22px;
          padding: 18px;
          background: rgba(28,28,30,.03);
          border-radius: 4px;
        }
        .cookie-cat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 6px;
        }
        .cookie-cat-name {
          font-family: 'Syne', sans-serif;
          font-size: .95rem;
          font-weight: 700;
          color: var(--ink);
        }
        .cookie-cat-locked {
          font-size: .78rem;
          color: var(--ink-s);
          padding: 4px 10px;
          background: rgba(28,28,30,.06);
          border-radius: 999px;
          letter-spacing: .02em;
        }
        .cookie-cat-desc {
          font-size: .85rem;
          line-height: 1.55;
          color: var(--ink-s);
          margin: 0;
        }
        /* Switch toggle */
        .switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
          flex-shrink: 0;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          inset: 0;
          background: rgba(28,28,30,.2);
          border-radius: 24px;
          cursor: pointer;
          transition: background .25s;
        }
        .slider::before {
          content: '';
          position: absolute;
          width: 18px;
          height: 18px;
          left: 3px;
          top: 3px;
          background: var(--cloud);
          border-radius: 50%;
          transition: transform .25s;
        }
        .switch input:checked + .slider {
          background: var(--orchid);
        }
        .switch input:checked + .slider::before {
          transform: translateX(20px);
        }
        .switch input:focus-visible + .slider {
          outline: 2px solid var(--orchid);
          outline-offset: 2px;
        }

        @media (max-width: 640px) {
          .cookie-banner {
            left: 12px; right: 12px; bottom: 12px;
          }
          .cookie-banner-inner { padding: 20px; }
          .cookie-banner-actions { flex-direction: column; align-items: stretch; }
          .cb-btn { width: 100%; text-align: center; }
        }
      `}</style>
    </div>
  )
}
