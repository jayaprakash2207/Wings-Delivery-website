import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'Terms of Service — Wings Delivery',
  description:
    'Wings Delivery terms of service. Learn about our ordering process, cancellation policy, refund rules, hub-pickup responsibility, and governing law for Tiruvallur, Tamil Nadu.',
  alternates:  { canonical: 'https://wings-delivery.com/terms' },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Terms of Service — Wings Delivery',
    description: 'Read the Wings Delivery terms of service: ordering, payments, cancellations, refunds, and more.',
    url:         'https://wings-delivery.com/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="py-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <span className="eyebrow text-[#F97316] mb-4 block">
            Legal
          </span>
          <h1 className="font-playfair text-[#EFF2F7] mb-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 600 }}>
            Terms of Service
          </h1>
          <p className="font-inter text-[#7E8A9E] text-sm">
            Last Updated: <strong className="text-[#EFF2F7]">June 2026</strong>
          </p>
        </div>

        {/* Content */}
        <div className="py-12 space-y-10 font-inter text-[#7E8A9E] leading-relaxed">
          <p className="text-[#EFF2F7] text-base">
            By using Wings Delivery services, you agree to these Terms of Service. Please read them carefully.
            These terms govern your use of our WhatsApp-based food ordering and batch delivery service.
          </p>

          {[
            {
              title: '1. Service Description',
              content: [
                'Wings Delivery provides a WhatsApp-based food ordering and batch delivery service across villages in Tiruvallur District, Tamil Nadu',
                'We operate batch delivery slots — orders are grouped and delivered to pickup hubs at scheduled times',
                'Service hours: 11:00 AM – 9:00 PM, all days of the week',
                'Service area: Uthukottai to Periyapalayam route, 30+ villages',
                'MSME Registration: UDYAM-TN-24-0181981',
              ],
            },
            {
              title: '2. Order Placement',
              content: [
                'Orders must be placed via WhatsApp at +91 76038 14870',
                'Orders must be confirmed before the batch cutoff time',
                'Batch cutoffs: 11:30 AM (12 PM batch), 12:30 PM (1 PM batch), 6:00 PM (6:30 PM batch), 7:00 PM (7:30 PM batch)',
                'Late orders will be scheduled for the next available batch',
                'An order is confirmed only after you receive a confirmation message from us',
                'We reserve the right to refuse orders at our discretion',
              ],
            },
            {
              title: '3. Pricing and Payment',
              content: [
                'Food prices are as listed on our menu, shared via WhatsApp',
                'A delivery fee may be applied per order; this will be communicated at order placement',
                'Accepted payment methods: UPI, Google Pay, PhonePe, Cash at hub pickup',
                'Payment must be completed before the batch cutoff time for prepaid orders',
                'All prices are in Indian Rupees (INR) and inclusive of applicable taxes',
              ],
            },
            {
              title: '4. Order Cancellation Policy',
              content: [
                'You may cancel your order before the batch cutoff time for a full refund',
                'Cancellations after cutoff time are not eligible for a refund as food preparation has begun',
                'To cancel, message us on WhatsApp as soon as possible',
                'We reserve the right to cancel orders due to restaurant unavailability or operational issues, with full refund',
              ],
            },
            {
              title: '5. Refund Policy',
              content: [
                'Refunds are processed within 24 hours via the original payment method',
                'Eligible refund situations: order cancelled before cutoff, item not available (not informed in advance), significantly incorrect order',
                'Refunds for UPI payments are returned to the originating UPI account',
                'Cash refunds are processed at the hub or via UPI transfer',
                'Contact: wingsdelivery95@gmail.com for refund requests',
                'We do not offer refunds for taste preferences or minor variations from expected',
              ],
            },
            {
              title: '6. Hub Pickup Responsibility',
              content: [
                'Orders must be collected from the designated pickup hub within 2 hours of the batch delivery',
                'Uncollected orders after 2 hours will be disposed of; no refund will be issued',
                'You are responsible for identifying and collecting your correct order at the hub',
                'We are not responsible for orders damaged after collection',
                'Hub locations and operating times are subject to change with notice via WhatsApp',
              ],
            },
            {
              title: '7. Food Quality and Safety',
              content: [
                'We work with verified local restaurant partners who maintain food safety standards',
                'We are not a restaurant — we are a delivery intermediary',
                'Final responsibility for food quality and preparation lies with the restaurant partner',
                'For quality complaints, contact us within 2 hours of collection',
                'We take quality complaints seriously and investigate with our restaurant partners',
              ],
            },
            {
              title: '8. Limitation of Liability',
              content: [
                'Wings Delivery\'s maximum liability is limited to the order value of the disputed order',
                'We are not liable for indirect, incidental, or consequential damages',
                'We are not responsible for delays caused by traffic, weather, or force majeure',
                'We are not liable for allergic reactions — always inform us of allergies before ordering',
                'Our liability for restaurant partner errors is limited to mediation and refund where applicable',
              ],
            },
            {
              title: '9. User Conduct',
              content: [
                'Users must provide accurate information when placing orders',
                'Abusive, threatening, or inappropriate communication with our team is grounds for service termination',
                'Fraudulent orders or chargebacks without valid reason will result in account suspension',
              ],
            },
            {
              title: '10. Governing Law',
              content: [
                'These terms are governed by the laws of the State of Tamil Nadu, India',
                'Any disputes shall be resolved in courts of competent jurisdiction in Tiruvallur District, Tamil Nadu',
                'By using our service, you consent to this jurisdiction',
              ],
            },
            {
              title: '11. Changes to Terms',
              content: [
                'We may update these terms periodically',
                'Significant changes will be communicated via WhatsApp',
                'Continued use of our service after changes constitutes acceptance of new terms',
              ],
            },
            {
              title: '12. Contact',
              content: [
                'Email: wingsdelivery95@gmail.com',
                'WhatsApp: +91 76038 14870',
                'Address: 35, Sakthikal Street, Perandur, Uthukottai, Tiruvallur, Tamil Nadu — 602026',
              ],
            },
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="font-barlow font-extrabold text-xl uppercase text-[#EFF2F7] mb-4 border-l-2 border-[#F97316] pl-4">
                {title}
              </h2>
              <ul className="space-y-2 pl-4">
                {content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[#F97316] mt-1 flex-shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
