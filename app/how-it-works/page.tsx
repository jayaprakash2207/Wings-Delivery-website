'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle, CreditCard, Wallet, Banknote, Smartphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Message Wings Delivery on WhatsApp',
    description: 'Open WhatsApp and send a message to +91 91235 38768. You can type in Tamil, Tanglish, Telugu, or English. Even a voice note works!',
  },
  {
    number: '02',
    title: 'Browse the Menu & Place Your Order',
    description: 'Our AI will share the day\'s menu. Pick your items. You can order from multiple restaurants in a single message.',
  },
  {
    number: '03',
    title: 'Confirm & Pay',
    description: 'Receive your order summary with the total amount. Pay via UPI, GPay, PhonePe, or cash at pickup. You\'ll get a confirmation instantly.',
  },
  {
    number: '04',
    title: 'Collect at Your Nearest Hub',
    description: 'Your food arrives at the nearest hub within the batch slot time. You\'ll get a WhatsApp notification when it\'s ready. Walk over and collect!',
  },
]

const languages = [
  { lang: 'Tamil', example: 'Meals vennum' },
  { lang: 'Tanglish', example: 'Anna oru meals parcel pannunga' },
  { lang: 'Telugu', example: 'Oka meals parcel kavali' },
  { lang: 'English', example: 'I want one meals parcel' },
]

const payments = [
  { icon: Smartphone, name: 'UPI', desc: 'Any UPI app' },
  { icon: Wallet, name: 'GPay', desc: 'Google Pay' },
  { icon: CreditCard, name: 'PhonePe', desc: 'PhonePe' },
  { icon: Banknote, name: 'Cash', desc: 'At hub pickup' },
]

const faqs = [
  { q: 'What if I miss the order cutoff time?', a: 'No worries! You can place your order for the next batch slot. We have 4 slots daily — 12 PM, 1 PM, 6:30 PM, and 7:30 PM.' },
  { q: 'Can I order from multiple restaurants?', a: 'Yes! You can combine orders from different restaurant partners in a single WhatsApp message. We handle the coordination.' },
  { q: 'How do I know when my food is ready at the hub?', a: 'You\'ll receive a WhatsApp notification at each stage: Order Received, Packed, At Hub, Ready for Pickup.' },
  { q: 'What if I can\'t come to the hub on time?', a: 'Your order is held at the hub for 2 hours. If you can\'t collect within that window, please contact us immediately on WhatsApp.' },
  { q: 'Do you deliver to my door?', a: 'Currently we use a hub-pickup model to keep delivery costs low for everyone. This allows us to serve 30+ villages affordably.' },
  { q: 'What languages does the WhatsApp bot understand?', a: 'Tamil, Tanglish (Tamil in English letters), Telugu, and English. Voice notes in Tamil also work!' },
  { q: 'Is payment safe?', a: 'Yes. We use UPI-based payments which are fully secured by the respective payment providers. We don\'t store any payment data.' },
  { q: 'How do I become a restaurant partner?', a: 'Visit our "For Restaurants" page or WhatsApp us directly. We\'re always looking for new local kitchen partners.' },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(249,115,22,0.1)' }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-barlow font-bold text-sm md:text-base uppercase text-[#EFF2F7] pr-4">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          style={{ color: '#F97316' }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 font-inter text-sm text-[#7E8A9E] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow text-[#F97316] mb-5 block">Simple Process</span>
          <h1 className="font-playfair text-[#EFF2F7] mb-4 leading-tight" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 600 }}>
            How Wings Delivery Works
          </h1>
          <p className="font-inter text-[#7E8A9E] text-base md:text-lg max-w-xl mx-auto">
            From WhatsApp message to fresh food at your hub — in 4 simple steps.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: '#141825' }} className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-0">
            {steps.map(({ number, title, description }, i) => (
              <motion.div
                key={number}
                className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
              >
                {/* Left -- number + line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bebas text-2xl"
                    style={{ color: '#F97316', background: 'rgba(249,115,22,0.1)', border: '2px solid rgba(249,115,22,0.28)' }}
                  >
                    {number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[1px] flex-1 mt-2" style={{ background: 'linear-gradient(to bottom, rgba(249,115,22,0.25), transparent)' }} />
                  )}
                </div>

                {/* Right -- content */}
                <div className="flex-1 pt-3 pb-4">
                  <h3 className="font-barlow font-black text-xl md:text-2xl uppercase text-[#EFF2F7] mb-2">
                    {title}
                  </h3>
                  <p className="font-inter text-sm md:text-base text-[#7E8A9E] leading-relaxed max-w-lg">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Mockup */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow text-[#F97316] mb-4 block">Real Conversation</span>
              <h2 className="font-playfair text-[#EFF2F7] mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600 }}>
                Order in Tamil.<br />
                <em className="italic text-[#F97316]">Perfectly understood.</em>
              </h2>
              <p className="font-inter text-[#7E8A9E] leading-relaxed text-sm md:text-base">
                Our AI understands natural Tamil conversation. No rigid commands, no confusing menus.
                Just chat the way you normally would.
              </p>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="w-72 rounded-3xl overflow-hidden shadow-2xl" style={{ background: '#141825', border: '1px solid rgba(255,255,255,0.07)' }}>
                {/* Phone header */}
                <div className="px-4 py-3 flex items-center gap-3" style={{ background: '#1a1f2e', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                    <MessageCircle size={16} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-barlow font-bold text-xs text-[#EFF2F7]">Wings Delivery</p>
                    <p className="font-inter text-[10px] text-[#25D366]">Online</p>
                  </div>
                </div>

                {/* Chat */}
                <div className="p-4 flex flex-col gap-3" style={{ background: '#0B0E14' }}>
                  {[
                    { from: 'user', text: 'Anna, oru meals parcel panunga' },
                    { from: 'bot', text: 'Vanakkam! Ungal area ku next batch 12 PM. Menu paakalama?' },
                    { from: 'user', text: 'Soru, sambar, rasam set kudunga' },
                    { from: 'bot', text: 'Order confirm!\nPayment link sent.\nPickup: Uthukottai Main Road' },
                  ].map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs font-inter leading-relaxed ${
                          msg.from === 'user'
                            ? 'bg-[#25D366]/20 text-[#EFF2F7] rounded-br-sm'
                            : 'text-[#EFF2F7] rounded-bl-sm'
                        }`}
                        style={msg.from !== 'user' ? { background: '#1a1f2e' } : undefined}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section style={{ background: '#141825' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-[#EFF2F7]" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600 }}>
              Order In Any Language
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {languages.map(({ lang, example }) => (
              <div key={lang} className="card rounded-[14px] p-5 text-center">
                <h3 className="font-barlow font-black text-sm uppercase text-[#EFF2F7] mb-2">{lang}</h3>
                <p className="font-playfair text-xs text-[#7E8A9E] italic">&ldquo;{example}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-[#EFF2F7] mb-10" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600 }}>
            Secure Payment Methods
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {payments.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="card rounded-[14px] p-6 text-center hover:-translate-y-1 transition-transform duration-250">
                <Icon size={28} className="mx-auto mb-3" style={{ color: '#F97316' }} />
                <p className="font-barlow font-bold text-sm uppercase text-[#EFF2F7]">{name}</p>
                <p className="font-inter text-xs text-[#7E8A9E] mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#141825' }} className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="eyebrow text-[#F97316] mb-4 block">FAQ</span>
            <h2 className="font-playfair text-[#EFF2F7]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600 }}>
              Got Questions?
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
