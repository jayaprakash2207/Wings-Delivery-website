'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stops = [
  { name: 'Uthukottai', hub: true, km: '0 km' },
  { name: 'Tharatchi', hub: false, km: '2 km' },
  { name: 'Endrapalayam', hub: true, km: '5 km' },
  { name: 'Mettukandigai', hub: false, km: '8 km' },
  { name: 'Thandalam', hub: true, km: '12 km' },
  { name: 'Mambakkam', hub: false, km: '16 km' },
  { name: 'Mukkarambakkam', hub: true, km: '20 km' },
  { name: 'Enambakkam', hub: false, km: '24 km' },
  { name: 'Periyapalayam', hub: true, km: '28 km' },
]

export default function CoveragePreview() {
  return (
    <section className="relative py-24 md:py-36" style={{ background: '#0B0E14' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT -- route visual */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative pl-10 flex flex-col gap-0">
              {/* Orange spine line */}
              <div className="absolute left-[18px] top-4 bottom-4 w-[2px]"
                style={{ background: 'linear-gradient(to bottom, #F97316, rgba(249,115,22,0.15))' }} />
              {/* Animated dot */}
              <div className="absolute left-[14px] route-dot z-10">
                <div className="w-3 h-3 rounded-full"
                  style={{ background: '#F97316', boxShadow: '0 0 12px rgba(249,115,22,0.6)' }} />
              </div>

              {stops.map(({ name, hub, km }, i) => (
                <motion.div key={name} className="relative flex items-center gap-5 py-3"
                  initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <div className="absolute left-[-28px] z-10 flex-shrink-0">
                    {hub ? (
                      <div className="w-4 h-4 rounded-full"
                        style={{ background: '#0B0E14', border: '2px solid #F97316', boxShadow: '0 0 8px rgba(249,115,22,0.3)' }} />
                    ) : (
                      <div className="w-2 h-2 rounded-full ml-1" style={{ background: '#3D4556' }} />
                    )}
                  </div>
                  <div className="flex items-baseline justify-between w-full">
                    <span className={`font-barlow uppercase tracking-wider ${hub ? 'font-black text-base text-text' : 'font-bold text-sm text-muted'}`}>
                      {name}
                    </span>
                    <span className="font-bebas text-sm" style={{ color: hub ? '#F97316' : '#3D4556' }}>{km}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="flex flex-col gap-8">
            <div>
              <span className="font-barlow font-semibold text-[10px] uppercase tracking-[0.3em] text-accent block mb-5">Coverage area</span>
              <h2 className="font-playfair text-text leading-[1.05]"
                style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 600 }}>
                One route.<br />
                <em className="italic text-accent">30+ villages.</em>
              </h2>
            </div>
            <p className="font-inter text-muted text-sm leading-relaxed max-w-sm">
              A linear highway corridor connecting Uthukottai to Periyapalayam — perfect for batch delivery.
              One agent covers all stops in a single straight run.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[['25–35 km', 'Route length'], ['32', 'Pickup points'], ['30+', 'Villages'], ['4', 'Daily batches']].map(([num, label]) => (
                <div key={label} className="card p-5">
                  <span className="font-bebas text-2xl block text-accent">{num}</span>
                  <span className="font-inter text-xs text-muted mt-0.5 block">{label}</span>
                </div>
              ))}
            </div>
            <Link href="/coverage"
              className="inline-flex items-center gap-2 font-barlow font-black text-sm uppercase tracking-[0.16em] text-accent group">
              View full coverage
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
