import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import RouteTicker from '@/components/home/RouteTicker'
import BatchDelivery from '@/components/home/BatchDelivery'
import HowItWorks from '@/components/home/HowItWorks'
import Features from '@/components/home/Features'
import CoveragePreview from '@/components/home/CoveragePreview'
import TimeSlots from '@/components/home/TimeSlots'
import Trust from '@/components/home/Trust'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Wings Delivery — Food Delivery Across 30+ Villages in Tamil Nadu',
  description:
    'Wings Delivery: Tamil Nadu\'s first WhatsApp AI-powered food delivery for rural villages. Serving Uthukottai, Periyapalayam, Thandalam and 30+ more villages in Tiruvallur. Order in Tamil. 4 batches daily.',
  alternates: { canonical: 'https://wings-delivery.com' },
  openGraph: {
    title:       'Wings Delivery — Food That Flies to Your Village',
    description: 'Order food via WhatsApp in Tamil, Tanglish, Telugu, or English. 32 pickup points across 30+ villages in Uthukottai–Periyapalayam corridor, Tiruvallur.',
    url:         'https://wings-delivery.com',
    type:        'website',
  },
}

const HOME_LD = {
  '@context': 'https://schema.org',
  '@type':    'WebPage',
  '@id':      'https://wings-delivery.com/#webpage',
  url:        'https://wings-delivery.com',
  name:       'Wings Delivery — Food Delivery Across 30+ Villages in Tamil Nadu',
  isPartOf:   { '@id': 'https://wings-delivery.com/#website' },
  about:      { '@id': 'https://wings-delivery.com/#business' },
  description:
    "Tamil Nadu's first WhatsApp AI-powered food delivery for rural villages in Uthukottai and Tiruvallur District.",
  breadcrumb: {
    '@type':           'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wings-delivery.com' }],
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_LD) }} />
      <Hero />
      <StatsBar />
      <RouteTicker />
      <BatchDelivery />
      <HowItWorks />
      <Features />
      <CoveragePreview />
      <TimeSlots />
      <Trust />
      <CTABanner />
    </>
  )
}
