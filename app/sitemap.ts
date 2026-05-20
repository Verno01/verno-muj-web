import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.verno.cz'
  const pages = ['', '/nabidka', '/jak-pracuji', '/proc-takhle', '/kontakt']
  return pages.map(path => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
