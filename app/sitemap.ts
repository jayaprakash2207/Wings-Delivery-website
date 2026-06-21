import { MetadataRoute } from 'next'

const BASE = 'https://wingsdelivery.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE,                           lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/coverage`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/how-it-works`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`,                lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/for-restaurants`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/privacy-policy`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms`,                lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
