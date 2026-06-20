import type { Metadata } from 'next'
import { Playfair_Display, Barlow_Condensed, Inter, Bebas_Neue } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wingsdelivery.in'),
  title: {
    template: '%s | Wings Delivery — Uthukottai',
    default: 'Wings Delivery — Fast Food Delivery Across 30+ Villages in Tamil Nadu',
  },
  description:
    'Order food via WhatsApp in Tamil, Tanglish or Telugu. Batch delivery across 30+ villages in Uthukottai, Tiruvallur District. Fast · Local · Reliable.',
  keywords: [
    'Wings Delivery', 'Uthukottai food delivery', 'WhatsApp food order', 'Tamil Nadu delivery',
    'rural food delivery', 'Periyapalayam delivery', 'Tiruvallur delivery', 'batch delivery',
  ],
  openGraph: {
    title: 'Wings Delivery — Food That Flies to Your Village',
    description: 'Order via WhatsApp in Tamil, Tanglish or Telugu. 30+ villages. 30 min delivery.',
    url: 'https://wingsdelivery.in',
    siteName: 'Wings Delivery',
    images: [{ url: '/wings-delivery-logo.png', width: 800, height: 600, alt: 'Wings Delivery' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wings Delivery — Food That Flies to Your Village',
    description: 'Order via WhatsApp in Tamil, Tanglish or Telugu. 30+ villages. 30 min delivery.',
    images: ['/wings-delivery-logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/wings-delivery-logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${barlow.variable} ${inter.variable} ${bebas.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Wings Delivery',
              description:
                'WhatsApp AI-powered food ordering and batch delivery service across 30+ villages in Tamil Nadu.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '35, Sakthikal Street, Perandur',
                addressLocality: 'Uthukottai',
                addressRegion: 'Tamil Nadu',
                postalCode: '602026',
                addressCountry: 'IN',
              },
              telephone: '+919123538768',
              email: 'wingsdelivery95@gmail.com',
              openingHours: 'Mo-Su 11:00-21:00',
              url: 'https://wingsdelivery.in',
              sameAs: ['https://instagram.com/wingsdelivere'],
              founder: {
                '@type': 'Person',
                name: 'Sinivasan I',
              },
            }),
          }}
        />
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
