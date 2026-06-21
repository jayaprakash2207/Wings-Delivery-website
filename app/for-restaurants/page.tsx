import type { Metadata } from 'next'
import ForRestaurantsContent from './ForRestaurantsContent'

export const metadata: Metadata = {
  title:       'For Restaurants — Partner with Wings Delivery',
  description:
    'Partner your restaurant with Wings Delivery. Reach 30+ villages in Tiruvallur District with zero delivery hassle. Weekly settlements, WhatsApp order integration, and growing customer base in Uthukottai and surrounding villages.',
  alternates:  { canonical: 'https://wingsdelivery.in/for-restaurants' },
  keywords: [
    'restaurant partner Wings Delivery', 'food delivery partner Tamil Nadu',
    'restaurant delivery Uthukottai', 'partner restaurant Tiruvallur',
    'food delivery partnership Tamil Nadu villages', 'Wings Delivery restaurant registration',
    'delivery partner Uthukottai', 'restaurant partner rural Tamil Nadu',
  ],
  openGraph: {
    title:       'Partner with Wings Delivery — Reach 30+ Villages',
    description: 'List your restaurant with Wings Delivery and reach 30+ villages in Tiruvallur. Zero delivery setup, weekly payouts, WhatsApp order management.',
    url:         'https://wingsdelivery.in/for-restaurants',
  },
}

const RESTAURANT_LD = [
  {
    '@context': 'https://schema.org',
    '@type':    'WebPage',
    '@id':      'https://wingsdelivery.in/for-restaurants#webpage',
    url:        'https://wingsdelivery.in/for-restaurants',
    name:       'For Restaurants — Wings Delivery',
    isPartOf:   { '@id': 'https://wingsdelivery.in/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',            item: 'https://wingsdelivery.in' },
        { '@type': 'ListItem', position: 2, name: 'For Restaurants', item: 'https://wingsdelivery.in/for-restaurants' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type':    'Service',
    name:       'Restaurant Partnership Program — Wings Delivery',
    description:'Wings Delivery restaurant partner program. List your restaurant and reach 30+ villages in Uthukottai and Tiruvallur District via WhatsApp batch delivery.',
    provider:   { '@id': 'https://wingsdelivery.in/#business' },
    serviceType:'Restaurant Delivery Partnership',
    areaServed: {
      '@type':           'AdministrativeArea',
      name:              'Tiruvallur District',
      containedInPlace:  { '@type': 'State', name: 'Tamil Nadu' },
    },
    availableChannel: {
      '@type':    'ServiceChannel',
      serviceUrl: 'https://wingsdelivery.in/for-restaurants',
      servicePhone: '+917603814870',
    },
    offers: {
      '@type':       'Offer',
      name:          'Restaurant Partner Registration',
      description:   'Register your restaurant with Wings Delivery. Free onboarding. Weekly settlements. No delivery fleet needed.',
      eligibleRegion: {
        '@type': 'AdministrativeArea',
        name:    'Tiruvallur District, Tamil Nadu',
      },
    },
  },
]

export default function ForRestaurantsPage() {
  return (
    <>
      {RESTAURANT_LD.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <ForRestaurantsContent />
    </>
  )
}
