import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title:       'Contact Us — WhatsApp, Email & Location',
  description:
    'Contact Wings Delivery: WhatsApp +91 76038 14870, email wingsdelivery95@gmail.com, or visit us at 35, Sakthikal Street, Perandur, Uthukottai, Tiruvallur, Tamil Nadu 602026. Open 11 AM – 9 PM daily.',
  alternates:  { canonical: 'https://wings-delivery.com/contact' },
  keywords: [
    'Wings Delivery contact', 'Wings Delivery WhatsApp number', 'Wings Delivery phone number',
    'food delivery contact Uthukottai', 'Wings Delivery address',
    'contact food delivery Tiruvallur', 'Wings Delivery email',
  ],
  openGraph: {
    title:       'Contact Wings Delivery',
    description: 'Reach Wings Delivery via WhatsApp (+91 76038 14870), email, or visit our Uthukottai office. Open 11 AM – 9 PM every day.',
    url:         'https://wings-delivery.com/contact',
  },
}

const CONTACT_LD = [
  {
    '@context': 'https://schema.org',
    '@type':    'WebPage',
    '@id':      'https://wings-delivery.com/contact#webpage',
    url:        'https://wings-delivery.com/contact',
    name:       'Contact Wings Delivery',
    isPartOf:   { '@id': 'https://wings-delivery.com/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',    item: 'https://wings-delivery.com' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://wings-delivery.com/contact' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type':    'ContactPage',
    name:       'Contact Wings Delivery',
    url:        'https://wings-delivery.com/contact',
    mainEntity: { '@id': 'https://wings-delivery.com/#business' },
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
