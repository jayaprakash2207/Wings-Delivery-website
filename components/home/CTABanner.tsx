'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden" style={{ background: '#0B0E14' }}>
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh]"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.06) 0%, transparent 60%)' }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 hero-grid pointer-events-none opacity-50" />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.div className="flex flex-col items-center gap-10"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 1 }}>

          <span className="eyebrow text-[#F97316]/60">Ready to try?</span>

          {/* Headline */}
          <div className="leading-none">
            <div className="overflow-hidden">
              <motion.span className="block font-playfair text-[#EFF2F7] leading-[0.95]"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)', fontWeight: 700 }}
                initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
                Save our number.
              </motion.span>
            </div>
            <div className="overflow-hidden mt-2">
              <motion.span className="block font-playfair italic shimmer leading-[0.95]"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)', fontWeight: 700 }}
                initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
                Order anytime.
              </motion.span>
            </div>
          </div>

          <p className="font-inter text-[#7E8A9E] text-sm max-w-md leading-relaxed">
            Message us on WhatsApp in Tamil, Tanglish, Telugu, or English.
            Voice notes work too. Collect at your village pickup point.
          </p>

          {/* Big phone number */}
          <motion.div className="flex items-center gap-3 px-6 py-3 rounded-2xl"
            style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.15)' }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(249,115,22,0.3)' }}>
            <Phone size={20} className="text-[#F97316]" />
            <span className="font-bebas text-3xl md:text-4xl text-[#EFF2F7] tracking-wider">+91 76038 14870</span>
          </motion.div>

          {/* CTA */}
          <motion.a
            href="https://wa.me/917603814870?text=Hi%20Wings%20Delivery!%20I%20want%20to%20order%20food."
            target="_blank" rel="noopener noreferrer"
            className="btn-shine flex items-center gap-3 bg-[#25D366] text-white font-barlow font-black uppercase tracking-[0.16em] px-10 py-5 rounded-full shadow-lg shadow-[#25D366]/25"
            style={{ fontSize: '1.05rem' }}
            whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(37,211,102,0.45)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 350 }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <MessageCircle size={20} />
            Order on WhatsApp
          </motion.a>

          <span className="font-inter text-[11px] text-[#EFF2F7]/15">
            Open 11 AM – 9 PM, every day &middot; Uthukottai to Periyapalayam
          </span>
        </motion.div>
      </div>
    </section>
  )
}
