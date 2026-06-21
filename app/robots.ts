import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://wings-delivery.com/sitemap.xml',
    host:    'https://wings-delivery.com',
  }
}
