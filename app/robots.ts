import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/'],
      },
    ],
    sitemap: 'https://hocvibecode.vercel.app/sitemap.xml',
    host: 'https://hocvibecode.vercel.app',
  }
}
