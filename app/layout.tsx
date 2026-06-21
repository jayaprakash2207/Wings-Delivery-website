import type { Metadata } from 'next'
import { Playfair_Display, Barlow_Condensed, Inter, Bebas_Neue } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','600','700'], style: ['normal','italic'], variable: '--font-playfair', display: 'swap' })
const barlow   = Barlow_Condensed({ subsets: ['latin'], weight: ['400','600','700','800','900'], variable: '--font-barlow', display: 'swap' })
const inter    = Inter({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-inter', display: 'swap' })
const bebas    = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-bebas', display: 'swap' })

const BASE_URL = 'https://wingsdelivery.in'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | Wings Delivery — Uthukottai',
    default:  'Wings Delivery — Food Delivery Across 30+ Villages in Tamil Nadu',
  },
  description:
    'Wings Delivery is Tamil Nadu\'s first WhatsApp AI-powered food delivery service for rural villages. Serving 30+ villages in Uthukottai, Tiruvallur District. Order in Tamil, Tanglish, Telugu, or English. Batch delivery to your village pickup point.',
  keywords: [
    'Wings Delivery', 'Wings Delivery Uthukottai', 'food delivery Uthukottai',
    'food delivery Tiruvallur', 'food delivery Tamil Nadu villages',
    'WhatsApp food delivery Tamil Nadu', 'rural food delivery Tamil Nadu',
    'food delivery Periyapalayam', 'food delivery Thandalam',
    'food delivery Endrapalayam', 'food delivery Mukkarambakkam',
    'batch delivery Tamil Nadu', 'village food delivery',
    'lunch delivery Uthukottai', 'dinner delivery Tiruvallur',
    'Tamil food order WhatsApp', 'AI food delivery Tamil Nadu',
    'Uthukottai restaurants', 'Tiruvallur food delivery',
    'MSME food delivery Tamil Nadu', 'Sinivasan Wings Delivery',
  ],
  authors:   [{ name: 'Sinivasan I', url: `${BASE_URL}/about` }],
  creator:   'Wings Delivery',
  publisher: 'Wings Delivery',
  category:  'Food & Beverage',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: BASE_URL,
    languages: { 'en-IN': BASE_URL, 'ta-IN': BASE_URL, 'te-IN': BASE_URL },
  },
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         BASE_URL,
    siteName:    'Wings Delivery',
    title:       'Wings Delivery — Food That Flies to Your Village',
    description: 'Tamil Nadu\'s first WhatsApp AI-powered batch food delivery across 30+ villages in Uthukottai, Tiruvallur. Order in Tamil, Tanglish, Telugu, or English.',
    images: [{
      url:    '/wings-delivery-logo.png',
      width:  512,
      height: 512,
      alt:    'Wings Delivery — Uthukottai, Tamil Nadu',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Wings Delivery — Food That Flies to Your Village',
    description: 'Tamil Nadu\'s first WhatsApp AI-powered batch food delivery across 30+ villages. Order in Tamil!',
    images:      ['/wings-delivery-logo.png'],
    creator:     '@wingsdelivere',
  },
  icons: {
    icon:  [{ url: '/wings-delivery-logo.png', type: 'image/png', sizes: '512x512' }],
    apple: '/wings-delivery-logo.png',
  },
  manifest: '/manifest.json',
  other: {
    'geo.region':      'IN-TN',
    'geo.placename':   'Uthukottai, Tiruvallur, Tamil Nadu',
    'geo.position':    '13.3767;79.8828',
    'ICBM':            '13.3767, 79.8828',
    'og:locality':     'Uthukottai',
    'og:region':       'Tamil Nadu',
    'og:country-name': 'India',
    'og:postal-code':  '602026',
  },
}

const LD_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'FoodEstablishment', 'DeliveryService'],
      '@id':   `${BASE_URL}/#business`,
      name:    'Wings Delivery',
      alternateName: ['Wings Food Delivery', 'Wings Delivery Uthukottai', 'வின்ஸ் டெலிவரி'],
      description:
        "Tamil Nadu's first WhatsApp AI-powered food delivery service for rural villages. Serving 30+ villages in Uthukottai, Tiruvallur District via batch delivery. Order in Tamil, Tanglish, Telugu, or English.",
      url:   BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/wings-delivery-logo.png`, width: 512, height: 512 },
      image: `${BASE_URL}/wings-delivery-logo.png`,
      telephone: '+917603814870',
      email:     'wingsdelivery95@gmail.com',
      address: {
        '@type':           'PostalAddress',
        streetAddress:     '35, Sakthikal Street, Perandur',
        addressLocality:   'Uthukottai',
        addressRegion:     'Tamil Nadu',
        postalCode:        '602026',
        addressCountry:    'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 13.3767, longitude: 79.8828 },
      hasMap: 'https://maps.google.com/?q=Uthukottai,Tamil+Nadu',
      openingHoursSpecification: [{
        '@type':     'OpeningHoursSpecification',
        dayOfWeek:   ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens:       '11:00',
        closes:      '21:00',
      }],
      servesCuisine:      ['South Indian', 'North Indian', 'Chinese', 'Biryani', 'Snacks & Tiffin'],
      priceRange:         '₹',
      currenciesAccepted: 'INR',
      paymentAccepted:    'UPI, GPay, PhonePe, Cash on Pickup',
      areaServed: [
        'Uthukottai','Tharatchi','Perandur','Endrapalayam','Mettukandigai',
        'Sennankaranai','Karadipudur','Palavakkam','Ananderi','Vadathillai',
        'Thandalam','Senneri','Pudukuppam','Thondukuli','Mambakkam',
        'Pondavakkam','Sengarai','Kaiyadi','Mukkarambakkam','Tholavedu',
        'Enambakkam','Melmaligaipattu','Malanthur','Sengunram',
        'Gurugambakkam','Gurupuram','Kakkavakkam','Thumbakkam',
        'Paruthimerikuppam','Kalpattu','Alappakkam','Periyapalayam',
      ],
      founder:      { '@type': 'Person', name: 'Sinivasan I', jobTitle: 'Founder & Operator' },
      foundingDate: '2026',
      identifier: {
        '@type': 'PropertyValue',
        name:    'MSME Registration Number',
        value:   'UDYAM-TN-24-0181981',
      },
      sameAs: [`${BASE_URL}`, 'https://instagram.com/wingsdelivere'],
      contactPoint: [
        {
          '@type':       'ContactPoint',
          telephone:     '+917603814870',
          contactType:   'customer service',
          availableLanguage: [
            { '@type': 'Language', name: 'Tamil',   alternateName: 'ta' },
            { '@type': 'Language', name: 'English', alternateName: 'en' },
            { '@type': 'Language', name: 'Telugu',  alternateName: 'te' },
          ],
          hoursAvailable: {
            '@type':     'OpeningHoursSpecification',
            opens:       '11:00',
            closes:      '21:00',
            dayOfWeek:   ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          },
        },
        {
          '@type':       'ContactPoint',
          email:         'wingsdelivery95@gmail.com',
          contactType:   'customer support',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name:    'Daily Delivery Batches',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lunch Batch 01 — 12:00 PM', description: 'Order cutoff 11:30 AM. Delivery at 12:00 PM to all village pickup points.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lunch Batch 02 — 1:00 PM',  description: 'Order cutoff 12:30 PM. Delivery at 1:00 PM to all village pickup points.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dinner Batch 03 — 6:30 PM', description: 'Order cutoff 6:00 PM. Delivery at 6:30 PM to all village pickup points.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dinner Batch 04 — 7:30 PM', description: 'Order cutoff 7:00 PM. Delivery at 7:30 PM to all village pickup points.' } },
        ],
      },
      potentialAction: {
        '@type':  'OrderAction',
        target:   'https://wa.me/917603814870?text=Hi%20Wings%20Delivery!%20I%20want%20to%20order%20food.',
        name:     'Order on WhatsApp',
      },
    },
    {
      '@type':     'WebSite',
      '@id':       `${BASE_URL}/#website`,
      url:         BASE_URL,
      name:        'Wings Delivery',
      description: "Tamil Nadu's first rural food delivery via WhatsApp AI",
      inLanguage:  ['en-IN', 'ta-IN', 'te-IN'],
      publisher:   { '@id': `${BASE_URL}/#business` },
      potentialAction: {
        '@type':      'SearchAction',
        target:       { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/coverage?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type':  'Organization',
      '@id':    `${BASE_URL}/#org`,
      name:     'Wings Delivery',
      url:      BASE_URL,
      logo:     `${BASE_URL}/wings-delivery-logo.png`,
      sameAs:   ['https://instagram.com/wingsdelivere'],
      contactPoint: {
        '@type':     'ContactPoint',
        telephone:   '+917603814870',
        contactType: 'customer service',
      },
      address: {
        '@type':         'PostalAddress',
        addressLocality: 'Uthukottai',
        addressRegion:   'Tamil Nadu',
        postalCode:      '602026',
        addressCountry:  'IN',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${barlow.variable} ${inter.variable} ${bebas.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LD_GRAPH) }}
        />
        <meta name="theme-color" content="#0B0E14" />
        <meta name="msapplication-TileColor" content="#0B0E14" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0B0E14] text-[#EFF2F7] font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
