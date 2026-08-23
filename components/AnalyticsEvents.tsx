'use client'

import { useEffect } from 'react'

function analyticsReady() {
  if (typeof window === 'undefined') return false
  const hasGtag = typeof (window as any).gtag === 'function'
  const hasGaScript = !!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')
  return hasGtag && hasGaScript
}

function sendEvent(name: string, params: Record<string, string>) {
  if (!analyticsReady()) return
  ;(window as any).gtag('event', name, params)
}

export default function AnalyticsEvents() {
  useEffect(() => {
    if (window.location.pathname.startsWith('/ukazky/')) return

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const link = target?.closest('a') as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute('href') || ''
      const text = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120)

      if (href.startsWith('tel:')) {
        sendEvent('contact_phone', {
          link_text: text,
          link_url: href,
          page_location: window.location.href,
        })
        return
      }

      if (href.startsWith('mailto:')) {
        sendEvent('contact_email', {
          link_text: text,
          link_url: href,
          page_location: window.location.href,
        })
        return
      }

      if (href.startsWith('/ukazky/')) {
        sendEvent('view_showcase', {
          link_text: text,
          link_url: href,
          page_location: window.location.href,
        })
        return
      }

      try {
        const url = new URL(link.href, window.location.href)
        const isExternal = url.hostname !== window.location.hostname
        if (isExternal) {
          sendEvent('outbound_reference', {
            link_text: text,
            link_url: url.href,
            page_location: window.location.href,
          })
        }
      } catch {}
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
