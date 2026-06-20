'use client'

import { motion } from 'framer-motion'
import { MessageSquare, UtensilsCrossed, CreditCard, MapPin } from 'lucide-react'

const steps = [
  { n: '01', icon: MessageSquare, title: 'Message on WhatsApp', body: 'Send a text, voice note, or photo to +91 91235 38768. Our Gemini AI detects your language and responds naturally.' },
  { n: '02', icon: UtensilsCrossed, title: 'Pick from the menu', body: 'AI shares today\'s menu from local restaurants. Pick items — even from multiple kitchens in one order.' },
  { n: '03', icon: CreditCard, title: 'Pay inside WhatsApp', body: 'Razorpay sends a payment link right in the chat. UPI, GPay, PhonePe, cards — or choose cash at hub.' },
  { n: '04', icon: MapPin, title: 'Collect at your village pickup', body: 'Every village has a designated pickup point. You get a WhatsApp ping with an OTP when your food arrives. Walk over, show OTP, collect fresh.' },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 md:py-36" style={{ background: '#0B0E14' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        <motion.div className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <span className="eyebrow block mb-5">
            Simple process
          </span>
          <h2 className="font-playfair text-[#EFF2F7] leading-[1.05]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 600 }}>
            WhatsApp to fresh food<br />
            <em className="italic text-[#F97316]">in 4 steps.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ n, icon: Icon, title, body }, i) => (
            <motion.div key={n}
              className="card p-7 flex flex-col gap-5 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}>

              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}>
                  <Icon size={19} className="text-[#F97316]" />
                </div>
                <span className="font-bebas text-4xl text-[#F97316]/[0.15]">{n}</span>
              </div>

              <div>
                <h3 className="font-barlow font-black text-sm uppercase tracking-wider text-[#EFF2F7] mb-2">{title}</h3>
                <p className="font-inter text-sm text-[#7E8A9E] leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
