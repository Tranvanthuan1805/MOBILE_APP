import { MetadataRoute } from 'next'
import { COURSES } from './courses/data'

const BASE = 'https://hocvibecode.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/courses`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/free`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/design`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/login`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/register`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ]

  const courseRoutes: MetadataRoute.Sitemap = COURSES.map((c) => ({
    url: `${BASE}/courses/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  return [...staticRoutes, ...courseRoutes]
}
