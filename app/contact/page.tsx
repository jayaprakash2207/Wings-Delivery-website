import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title:       'Contact Us — WhatsApp, Email & Location',
  description:
    'Contact Wings Delivery: WhatsApp +91 76038 14870, email wingsdelivery95@gmail.com, or visit us at 35, Sakthikal Street, Perandur, Uthukottai, Tiruvallur, Tamil Nadu 602026. Open 11 AM – 9 PM daily.',
  alternates:  { canonical: 'https://wingsdelivery.in/contact' },
  keywords: [
    'Wings Delivery contact', 'Wings Delivery WhatsApp number', 'Wings Delivery phone number',
    'food delivery contact Uthukottai', 'Wings Delivery address',
    'contact food delivery Tiruvallur', 'Wings Delivery email',
  ],
  openGraph: {
    title:       'Contact Wings Delivery',
    description: 'Reach Wings Delivery via WhatsApp (+91 76038 14870), email, or visit our Uthukottai office. Open 11 AM – 9 PM every day.',
    url:         'https://wingsdelivery.in/contact',
  },
}

const CONTACT_LD = [
  {
    '@context': 'https://schema.org',
    '@type':    'WebPage',
    '@id':      'https://wingsdelivery.in/contact#webpage',
    url:        'https://wingsdelivery.in/contact',
    name:       'Contact Wings Delivery',
    isPartOf:   { '@id': 'https://wingsdelivery.in/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',    item: 'https://wingsdelivery.in' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://wingsdelivery.in/contact' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type':    'ContactPage',
    name:       'Contact Wings Delivery',
    url:        'https://wingsdelivery.in/contact',
    mainEntity: { '@id': 'https://wingsdelivery.in/#business' },
    description:'Contact Wings Delivery for food orders, feedback, or partnership enquiries. Available via WhatsApp in Tamil, English, and Telugu.',
  },
]

export default function ContactPage() {
  return (
    <>
      {CONTACT_LD.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <ContactContent />
    </>
  )
}
