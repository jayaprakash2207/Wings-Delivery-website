import type { Metadata } from 'next'
import { Award, Users, Store, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title:       'About Wings Delivery — Founded in Uthukottai, Tamil Nadu',
  description:
    'Wings Delivery was founded in 2026 by Sinivasan I in Uthukottai, Tiruvallur District to solve rural last-mile food delivery. MSME-registered (UDYAM-TN-24-0181981), serving 30+ villages via WhatsApp AI batch delivery.',
  alternates:  { canonical: 'https://wings-delivery.com/about' },
  keywords: [
    'Wings Delivery about', 'Sinivasan Wings Delivery founder',
    'Wings Delivery Uthukottai story', 'MSME food delivery Tamil Nadu',
    'rural food delivery startup Tamil Nadu', 'Uthukottai entrepreneur',
    'UDYAM-TN-24-0181981', 'Wings Delivery MSME',
  ],
  openGraph: {
    title:       'About Wings Delivery — Born in Uthukottai, Built for Tamil Nadu',
    description: 'Founded in 2026 by Sinivasan I. MSME-registered. Serving 30+ villages in Tiruvallur District via WhatsApp AI food delivery.',
    url:         'https://wings-delivery.com/about',
  },
}

const ABOUT_LD = [
  {
    '@context': 'https://schema.org',
    '@type':    'AboutPage',
    '@id':      'https://wings-delivery.com/about#webpage',
    url:        'https://wings-delivery.com/about',
    name:       'About Wings Delivery',
    isPartOf:   { '@id': 'https://wings-delivery.com/#website' },
    about:      { '@id': 'https://wings-delivery.com/#business' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',  item: 'https://wings-delivery.com' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://wings-delivery.com/about' },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type':    'Person',
    name:       'Sinivasan I',
    jobTitle:   'Founder & Operator',
    worksFor:   { '@id': 'https://wings-delivery.com/#business' },
    description:'Entrepreneur from Uthukottai, Tiruvallur who founded Wings Delivery in 2026 to bridge the rural food delivery gap using WhatsApp AI technology.',
    knowsAbout: ['Food Delivery', 'Rural Technology', 'WhatsApp Business', 'Batch Logistics'],
    homeLocation: {
      '@type':           'Place',
      name:              'Uthukottai',
      containedInPlace:  { '@type': 'AdministrativeArea', name: 'Tiruvallur District, Tamil Nadu' },
    },
  },
]

const values = [
  {
    icon: MapPin,
    title: 'Local First',
    description: 'Built in Uthukottai, for Uthukottai. We partner exclusively with local restaurants.',
  },
  {
    icon: Users,
    title: 'Affordable',
    description: 'Batch delivery splits costs. Premium service at village-friendly prices.',
  },
  {
    icon: Award,
    title: 'Reliable',
    description: 'MSME-registered. Committed operations. 4 delivery batches every day.',
  },
  {
    icon: Store,
    title: 'Tech-Powered',
    description: 'WhatsApp AI that speaks Tamil. Real-time updates. Zero friction ordering.',
  },
]

const stats = [
  { number: '30+', label: 'Villages Covered' },
  { number: '32', label: 'Pickup Points' },
  { number: '10+', label: 'Restaurant Partners' },
  { number: '2026', label: 'Founded' },
]

export default function AboutPage() {
  return (
    <>
      {ABOUT_LD.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(249,115,22,0.12) 0%, transparent 65%)' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow text-[#F97316] mb-5 block">Our Story</span>
          <h1 className="font-playfair text-[#EFF2F7] mb-8 leading-tight" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 600 }}>
            Born in Uthukottai.<br />
            <em className="italic text-[#F97316]">Built for Tamil Nadu.</em>
          </h1>
          <blockquote className="font-playfair italic text-xl md:text-2xl text-[#7E8A9E] leading-relaxed max-w-3xl mx-auto text-left pl-6" style={{ borderLeft: '3px solid #F97316' }}>
            &ldquo;Every village deserves premium food delivery. Not just cities. Not just highways.
            Every single village — with dignity, speed, and care.&rdquo;
          </blockquote>
          <p className="mt-4 font-inter text-sm text-[#7E8A9E]">— Sinivasan I, Founder</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#141825' }} className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ number, label }) => (
              <div key={label} className="text-center">
                <span className="font-bebas text-[#F97316] block mb-1" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
                  {number}
                </span>
                <span className="font-barlow font-semibold text-xs uppercase tracking-[0.16em] text-[#7E8A9E]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-playfair text-[#EFF2F7] mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600 }}>
                Why We Started
              </h2>
              <div className="space-y-4 font-inter text-[#7E8A9E] leading-relaxed text-sm md:text-base">
                <p>
                  Growing up in Uthukottai, founder Sinivasan I watched villagers travel kilometres
                  just to pick up food from towns. There was no reliable delivery service — not because
                  demand didn&apos;t exist, but because no one had solved the last-mile problem for rural areas.
                </p>
                <p>
                  Wings Delivery was born from a simple insight: batch delivery changes the economics.
                  By grouping orders along a single route, we make delivery affordable even in
                  low-density villages.
                </p>
                <p>
                  Add WhatsApp ordering in Tamil, and you have something truly accessible —
                  technology that serves people, not the other way around.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-playfair text-[#EFF2F7] mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600 }}>
                Our Mission
              </h2>
              <div className="space-y-4 font-inter text-[#7E8A9E] leading-relaxed text-sm md:text-base">
                <p>
                  To make quality food delivery accessible to every village in Tamil Nadu —
                  starting with the Uthukottai-to-Periyapalayam corridor.
                </p>
                <p>
                  We believe rural communities deserve the same quality of service as urban centres.
                  Wings Delivery is our commitment to that belief, one batch at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSME Badge */}
      <section style={{ background: '#141825' }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl p-8 text-center" style={{ border: '2px solid rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.04)' }}>
            <Award size={40} className="mx-auto mb-4" style={{ color: '#F97316' }} />
            <h3 className="font-barlow font-black text-xl uppercase text-[#EFF2F7] mb-2">
              MSME Registered Business
            </h3>
            <p className="font-bebas text-2xl tracking-widest mb-2 text-[#F97316]">
              UDYAM-TN-24-0181981
            </p>
            <p className="font-inter text-sm text-[#7E8A9E]">
              Government of India registered Micro, Small & Medium Enterprise.
              Operating under the MSME Development Act.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow text-[#F97316] mb-6 block">The Founder</span>
          <div className="card rounded-2xl p-6 sm:p-8 md:p-10 inline-block text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(249,115,22,0.12)', border: '2px solid rgba(249,115,22,0.28)' }}>
              <span className="font-barlow font-black text-3xl text-[#F97316]">SI</span>
            </div>
            <h3 className="font-barlow font-black text-2xl uppercase text-[#EFF2F7] mb-1">Sinivasan I</h3>
            <p className="font-inter text-sm mb-4 text-[#F97316]">Founder & Operator, Wings Delivery</p>
            <p className="font-inter text-sm text-[#7E8A9E] leading-relaxed max-w-sm mx-auto">
              Entrepreneur from Uthukottai with a vision to bridge the rural delivery gap using
              accessible technology. Passionate about local communities and sustainable business.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#141825' }} className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="eyebrow text-[#F97316] mb-4 block">Our Values</span>
            <h2 className="font-playfair text-[#EFF2F7]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600 }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card rounded-[14px] p-6 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.18)' }}>
                  <Icon size={20} style={{ color: '#F97316' }} />
                </div>
                <h3 className="font-barlow font-black text-sm uppercase tracking-wider text-[#EFF2F7] mb-2">{title}</h3>
                <p className="font-inter text-sm text-[#7E8A9E] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
