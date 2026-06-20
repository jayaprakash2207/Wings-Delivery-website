'use client'

import { motion } from 'framer-motion'
import { Award, Cpu, CreditCard, Shield } from 'lucide-react'

const items = [
  {
    icon: Award,
    title: 'MSME Registered',
    sub: 'Government of India',
    detail: 'UDYAM-TN-24-0181981',
  },
  {
    icon: Cpu,
    title: 'Google Gemini AI',
    sub: 'Conversation engine',
    detail: 'Tamil · Tanglish · Telugu · English · Voice notes',
  },
  {
    icon: CreditCard,
    title: 'Razorpay Payments',
    sub: 'Secure transactions',
    detail: 'UPI · GPay · PhonePe · Cards · Cash at pickup',
  },
  {
    icon: Shield,
    title: 'Founded by Sinivasan I',
    sub: 'Local entrepreneur',
    detail: 'Born in Uthukottai. Building the delivery his village never had.',
  },
]

export default function Trust() {
  return (
    <section className="relative py-24 md:py-36" style={{ background: '#141825' }}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        <motion.div className="mb-14 md:mb-20 text-center"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <span className="eyebrow block mb-5">Built to last</span>
          <h2 className="font-playfair text-[#EFF2F7] leading-[1.1]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 700 }}>
            Local business.<br />
            <em className="italic shimmer">Serious technology.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, sub, detail }, i) => (
            <motion.div key={title}
              className="glow-card p-7 text-center group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65 }}>

              <div className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.04))', border: '1px solid rgba(249,115,22,0.18)' }}>
                <Icon size={24} className="text-[#F97316]" />
              </div>

              <p className="font-barlow font-black text-sm uppercase tracking-wider text-[#EFF2F7] mb-1">{title}</p>
              <p className="font-inter text-[11px] text-[#F97316]/60 uppercase tracking-wider mb-3">{sub}</p>
              <p className="font-inter text-xs text-[#7E8A9E] leading-relaxed">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}
