import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'Privacy Policy — Wings Delivery',
  description:
    'Wings Delivery privacy policy: how we collect, use, and protect your personal data when you order food via WhatsApp. We do not sell or share your data with third parties.',
  alternates:  { canonical: 'https://wings-delivery.com/privacy-policy' },
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'Privacy Policy — Wings Delivery',
    description: 'How Wings Delivery handles your data, WhatsApp messages, and payment information.',
    url:         'https://wings-delivery.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="py-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <span className="eyebrow text-[#F97316] mb-4 block">
            Legal
          </span>
          <h1 className="font-playfair text-[#EFF2F7] mb-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 600 }}>
            Privacy Policy
          </h1>
          <p className="font-inter text-[#7E8A9E] text-sm">
            Last Updated: <strong className="text-[#EFF2F7]">June 2026</strong>
          </p>
        </div>

        {/* Content */}
        <div className="py-12 space-y-10 font-inter text-[#7E8A9E] leading-relaxed">
          <p className="text-[#EFF2F7] text-base">
            Wings Delivery (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your information when you
            use our food delivery services.
          </p>

          {[
            {
              title: '1. Information We Collect',
              content: [
                'Personal identification: Name, phone number (via WhatsApp)',
                'Order details: Food items, delivery hub preference, order time',
                'Payment reference: Transaction IDs for verification (we do NOT store card or UPI credentials)',
                'Communication: WhatsApp messages exchanged with our service for order processing',
                'Location (optional): Your preferred pickup hub location',
              ],
            },
            {
              title: '2. How We Use Your Information',
              content: [
                'To process and fulfil your food orders',
                'To send order status updates via WhatsApp',
                'To contact you about your orders or resolve issues',
                'To improve our service and route planning',
                'To comply with legal obligations',
              ],
            },
            {
              title: '3. WhatsApp Data Handling',
              content: [
                'We use WhatsApp as our primary ordering channel',
                'Messages are processed by our team to understand and fulfil orders',
                'We do not share your WhatsApp number with third parties without your consent',
                'WhatsApp\'s own privacy policy governs data processed through their platform',
                'You may opt out of our service at any time by messaging "STOP" to our number',
              ],
            },
            {
              title: '4. Payment Data',
              content: [
                'We accept UPI payments via GPay, PhonePe, and other UPI apps',
                'Payment processing is handled entirely by the respective payment providers',
                'We do NOT store any card numbers, UPI credentials, or sensitive payment data',
                'We only record transaction reference numbers for order verification',
                'Cash payments are recorded locally for accounting purposes only',
              ],
            },
            {
              title: '5. Data Sharing',
              content: [
                'We do NOT sell your personal data to any third parties',
                'We share order details (name, items) with restaurant partners only for order fulfilment',
                'We may disclose information if required by law enforcement or legal process',
                'Aggregated, anonymised data may be used for business analysis',
              ],
            },
            {
              title: '6. Data Retention',
              content: [
                'Order data is retained for 12 months for dispute resolution and accounting',
                'Communication records are retained for 6 months',
                'You may request deletion of your data at any time',
              ],
            },
            {
              title: '7. Your Rights',
              content: [
                'Access: Request a copy of personal data we hold about you',
                'Correction: Request correction of inaccurate data',
                'Deletion: Request deletion of your personal data',
                'Opt-out: Stop receiving marketing communications at any time',
                'To exercise these rights, contact: wingsdelivery95@gmail.com',
              ],
            },
            {
              title: '8. Security',
              content: [
                'We implement appropriate security measures to protect your information',
                'Access to personal data is restricted to authorised staff only',
                'We regularly review our data handling practices',
              ],
            },
            {
              title: '9. Changes to This Policy',
              content: [
                'We may update this policy periodically',
                'We will notify customers of significant changes via WhatsApp',
                'Continued use of our service after changes constitutes acceptance',
              ],
            },
            {
              title: '10. Contact Us',
              content: [
                'For privacy-related queries: wingsdelivery95@gmail.com',
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
