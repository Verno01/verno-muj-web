import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.verno.cz'
  const now = new Date()
  const routes = ['', '/nabidka', '/jak-pracuji', '/proc-takhle', '/kontakt']
  return routes.map((r) => ({
    url: `${base}${r}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1 : 0.8,
  }))
}
