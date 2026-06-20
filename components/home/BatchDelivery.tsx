'use client'

import { motion } from 'framer-motion'
import { Truck, Users, TrendingDown } from 'lucide-react'

export default function BatchDelivery() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: '#141825' }}>
      {/* Dividers */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        <motion.div className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <span className="eyebrow block mb-5">
            The Innovation
          </span>
          <h2 className="font-playfair text-[#EFF2F7] leading-[1.05]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', fontWeight: 600 }}>
            Why your food<br />
            <em className="italic text-[#F97316]">costs less with Wings.</em>
          </h2>
        </motion.div>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {/* Traditional */}
          <motion.div className="card p-8 md:p-10"
            initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="font-barlow font-bold text-xs uppercase tracking-wider text-red-400">Traditional delivery</span>
            </div>
            <div className="space-y-4 text-[#EFF2F7]/45 font-inter text-sm leading-relaxed">
              <p>1 order &rarr; 1 rider &rarr; 1 trip</p>
              <p>Rider drives kilometres for a single order</p>
              <p className="text-red-400/70 font-semibold">High cost per order</p>
              <p>Not viable in villages with low order density</p>
            </div>
          </motion.div>

          {/* Wings */}
          <motion.div className="relative card p-8 md:p-10 overflow-hidden"
            style={{ border: '1px solid rgba(249,115,22,0.2)' }}
            initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span className="font-barlow font-bold text-xs uppercase tracking-wider text-[#25D366]">Wings batch delivery</span>
            </div>
            <div className="space-y-4 text-[#EFF2F7]/60 font-inter text-sm leading-relaxed">
              <p>10+ orders &rarr; 1 rider &rarr; 1 route run</p>
              <p>All orders batched by time slot, delivered in sequence</p>
              <p className="text-[#25D366] font-semibold">Fraction of the cost per order</p>
              <p>Works in every village along the route</p>
            </div>
          </motion.div>
        </div>

        {/* The milkman analogy */}
        <motion.div className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <p className="font-playfair italic text-xl md:text-2xl text-[#EFF2F7]/55 leading-relaxed mb-4">
            &ldquo;Think of it like a milkman — one person, one route, all your neighbours served in one trip.
            That&apos;s batch delivery. We modernized it with WhatsApp AI and real-time payments.&rdquo;
          </p>
        </motion.div>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">
          {[
            { icon: Users, label: 'Shared cost', desc: 'Delivery split across all orders in the batch' },
            { icon: Truck, label: 'One route run', desc: 'Uthukottai → Periyapalayam in a single trip' },
            { icon: TrendingDown, label: 'Lower cost', desc: 'Batching makes delivery affordable for every village' },
          ].map(({ icon: Icon, label, desc }, i) => (
            <motion.div key={label} className="card p-6 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.18)' }}>
                <Icon size={18} className="text-[#F97316]" />
              </div>
              <div>
                <p className="font-barlow font-black text-sm uppercase tracking-wider text-[#EFF2F7] mb-1">{label}</p>
                <p className="font-inter text-xs text-[#7E8A9E] leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
