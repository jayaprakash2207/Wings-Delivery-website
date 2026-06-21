import type { Metadata } from 'next'
import CoverageContent from './CoverageContent'

export const metadata: Metadata = {
  title:       'Coverage Area — 32 Villages, Uthukottai to Periyapalayam',
  description:
    'Wings Delivery covers 32 villages across the Uthukottai–Periyapalayam corridor in Tiruvallur, Tamil Nadu. Every village has its own pickup landmark — temple, bus stop, dairy, or junction.',
  alternates:  { canonical: 'https://wingsdelivery.in/coverage' },
  keywords: [
    'food delivery coverage Uthukottai', 'delivery villages Tiruvallur',
    'Wings Delivery villages', 'Uthukottai Periyapalayam food delivery',
    'Thandalam food delivery', 'Endrapalayam food delivery',
    'Mukkarambakkam delivery', 'Periyapalayam food delivery',
    'village pickup points Tamil Nadu', '32 village delivery',
  ],
  openGraph: {
    title:       'Coverage — 32 Villages Across Uthukottai to Periyapalayam',
    description: 'Wings Delivery serves 32 villages in Tiruvallur District, Tamil Nadu. View all pickup points on our route map.',
    url:         'https://wingsdelivery.in/coverage',
  },
}

const COVERAGE_LD = [
  {
    '@context': 'https://schema.org',
    '@type':    'WebPage',
    '@id':      'https://wingsdelivery.in/coverage#webpage',
    url:        'https://wingsdelivery.in/coverage',
    name:       'Coverage Area — Wings Delivery',
    isPartOf:   { '@id': 'https://wingsdelivery.in/#website' },
    about:      { '@id': 'https://wingsdelivery.in/#business' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://wingsdelivery.in' },
        { '@type': 'ListItem', position: 2, name: 'Coverage', item: 'https://wingsdelivery.in/coverage' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type':    'Service',
    '@id':      'https://wingsdelivery.in/coverage#service',
    name:       'Batch Food Delivery — Uthukottai to Periyapalayam',
    description:
      'Wings Delivery provides WhatsApp-based batch food delivery across 32 villages in the Uthukottai–Periyapalayam corridor, Tiruvallur District, Tamil Nadu.',
    provider:   { '@id': 'https://wingsdelivery.in/#business' },
    areaServed: [
      { '@type': 'City', name: 'Uthukottai',        containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Tharatchi',         containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Perandur',          containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Endrapalayam',      containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Mettukandigai',     containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Sennankaranai',     containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Karadipudur',       containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Palavakkam',        containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Ananderi',          containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Vadathillai',       containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Thandalam',         containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Senneri',           containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Pudukuppam',        containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Thondukuli',        containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Mambakkam',         containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Pondavakkam',       containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Sengarai',          containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Kaiyadi',           containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Mukkarambakkam',    containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Tholavedu',         containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Enambakkam',        containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Melmaligaipattu',   containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Malanthur',         containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Sengunram',         containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Gurugambakkam',     containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Gurupuram',         containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Kakkavakkam',       containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Thumbakkam',        containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Paruthimerikuppam', containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Kalpattu',          containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Alappakkam',        containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
      { '@type': 'City', name: 'Periyapalayam',     containedInPlace: { '@type': 'AdministrativeArea', name: 'Tiruvallur' } },
    ],
    availableChannel: {
      '@type':            'ServiceChannel',
      serviceUrl:         'https://wa.me/917603814870',
      servicePhone:       '+917603814870',
      availableLanguage:  [{ '@type': 'Language', name: 'Tamil' }, { '@type': 'Language', name: 'English' }],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type':    'Map',
    name:       'Wings Delivery Coverage Map — Uthukottai to Periyapalayam',
    url:        'https://maps.google.com/maps?q=Uthukottai+to+Periyapalayam,+Tiruvallur,+Tamil+Nadu',
    mapType:    'https://schema.org/SeatingMap',
    description: '32 village pickup points across the Uthukottai–Periyapalayam corridor, Tiruvallur District, Tamil Nadu.',
  },
]

export default function CoveragePage() {
  return (
    <>
      {COVERAGE_LD.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <CoverageContent />
    </>
  )
}
