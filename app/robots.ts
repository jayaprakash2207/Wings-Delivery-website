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
    sitemap: 'https://wingsdelivery.in/sitemap.xml',
    host:    'https://wingsdelivery.in',
  }
}
