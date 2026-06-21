import type { Metadata } from 'next'
import HowItWorksContent from './HowItWorksContent'

export const metadata: Metadata = {
  title:       'How It Works — Order Food via WhatsApp in Tamil',
  description:
    'Learn how Wings Delivery works: WhatsApp us in Tamil, Tanglish, Telugu, or English. Browse the menu, pay via UPI, and collect at your village pickup point. 4 delivery batches daily.',
  alternates:  { canonical: 'https://wings-delivery.com/how-it-works' },
  keywords: [
    'how to order food WhatsApp Tamil Nadu', 'Wings Delivery order process',
    'WhatsApp food order Tamil', 'food delivery steps Uthukottai',
    'UPI food payment Tamil Nadu', 'Tamil food delivery order',
    'village pickup food Tiruvallur', 'batch delivery schedule',
    'food order cutoff time Wings Delivery',
  ],
  openGraph: {
    title:       'How Wings Delivery Works — Order in Tamil via WhatsApp',
    description: '4 simple steps: WhatsApp → Menu → Pay → Collect at your village point. Order in Tamil, Tanglish, Telugu, or English.',
    url:         'https://wings-delivery.com/how-it-works',
  },
}

const faqs = [
  { q: 'What if I miss the order cutoff time?',         a: 'No worries! You can place your order for the next batch slot. We have 4 slots daily — 12 PM, 1 PM, 6:30 PM, and 7:30 PM.' },
  { q: 'Can I order from multiple restaurants?',         a: 'Yes! You can combine orders from different restaurant partners in a single WhatsApp message. We handle the coordination.' },
  { q: 'How do I know when my food is ready at the hub?',a: 'You\'ll receive a WhatsApp notification at each stage: Order Received, Packed, At Hub, Ready for Pickup.' },
  { q: 'What if I can\'t come to the hub on time?',     a: 'Your order is held at the hub for 2 hours. If you can\'t collect within that window, please contact us immediately on WhatsApp.' },
  { q: 'Do you deliver to my door?',                    a: 'Currently we use a hub-pickup model to keep delivery costs low for everyone. This allows us to serve 30+ villages affordably.' },
  { q: 'What languages does the WhatsApp bot understand?',a: 'Tamil, Tanglish (Tamil in English letters), Telugu, and English. Voice notes in Tamil also work!' },
  { q: 'Is payment safe?',                              a: 'Yes. We use UPI-based payments which are fully secured by the respective payment providers. We don\'t store any payment data.' },
  { q: 'How do I become a restaurant partner?',         a: 'Visit our "For Restaurants" page or WhatsApp us directly. We\'re always looking for new local kitchen partners.' },
]

const HOW_LD = [
  {
    '@context': 'https://schema.org',
    '@type':    'WebPage',
    '@id':      'https://wings-delivery.com/how-it-works#webpage',
    url:        'https://wings-delivery.com/how-it-works',
    name:       'How Wings Delivery Works',
    isPartOf:   { '@id': 'https://wings-delivery.com/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://wings-delivery.com' },
        { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://wings-delivery.com/how-it-works' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type':    'HowTo',
    name:       'How to Order Food via Wings Delivery WhatsApp',
    description:'Order food from Wings Delivery in 4 simple steps via WhatsApp in Tamil, Tanglish, Telugu, or English.',
    totalTime:  'PT10M',
    tool:       [{ '@type': 'HowToTool', name: 'WhatsApp' }, { '@type': 'HowToTool', name: 'UPI / GPay / PhonePe' }],
    step: [
      {
        '@type':    'HowToStep',
        position:   1,
        name:       'Message Wings Delivery on WhatsApp',
        text:       'Open WhatsApp and send a message to +91 76038 14870. Type in Tamil, Tanglish, Telugu, or English — even voice notes work.',
        url:        'https://wings-delivery.com/how-it-works#step-1',
      },
      {
        '@type':    'HowToStep',
        position:   2,
        name:       'Browse Menu & Place Order',
        text:       'Our AI shares the day\'s menu from local restaurant partners. Pick your items — you can combine from multiple restaurants in one message.',
        url:        'https://wings-delivery.com/how-it-works#step-2',
      },
      {
        '@type':    'HowToStep',
        position:   3,
        name:       'Confirm & Pay',
        text:       'Receive your order summary with total. Pay via UPI, GPay, PhonePe, or opt for cash at pickup. Confirmation is instant via WhatsApp.',
        url:        'https://wings-delivery.com/how-it-works#step-3',
      },
      {
        '@type':    'HowToStep',
        position:   4,
        name:       'Collect at Your Village Pickup Point',
        text:       'Your food arrives at your nearest village pickup landmark within the batch slot time. Get a WhatsApp ping and collect fresh food.',
        url:        'https://wings-delivery.com/how-it-works#step-4',
      },
    ],
  },
  {
    '@context':   'https://schema.org',
    '@type':      'FAQPage',
    mainEntity:   faqs.map(({ q, a }) => ({
      '@type':    'Question',
      name:       q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {HOW_LD.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <HowItWorksContent />
    </>
  )
}
