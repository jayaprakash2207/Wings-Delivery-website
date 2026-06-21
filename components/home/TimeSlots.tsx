'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const slots = [
  { meal: 'Lunch',  time: '12:00 PM', cutoff: '11:30 AM', label: 'Batch 01' },
  { meal: 'Lunch',  time: '1:00 PM',  cutoff: '12:30 PM', label: 'Batch 02' },
  { meal: 'Dinner', time: '6:30 PM',  cutoff: '6:00 PM',  label: 'Batch 03' },
  { meal: 'Dinner', time: '7:30 PM',  cutoff: '7:00 PM',  label: 'Batch 04' },
]

export default function TimeSlots() {
  return (
    <section className="relative py-24 md:py-36" style={{ background: '#141825' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <span className="font-barlow font-semibold text-[10px] uppercase tracking-[0.3em] text-accent block mb-5">
            Batch schedule
          </span>
          <h2 className="font-playfair text-text leading-[1.05]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 600 }}>
            4 batches daily.<br />
            <em className="italic text-accent">Order before the cutoff.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slots.map(({ meal, time, cutoff, label }, i) => (
            <motion.div key={`${meal}-${time}`}
              className="card p-5 sm:p-7 flex flex-col gap-5"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}>
              <div className="flex items-center justify-between">
                <span className="font-barlow font-semibold text-[10px] uppercase tracking-[0.3em] text-accent">{meal}</span>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(249,115,22,0.1)' }}>
                  <Clock size={14} className="text-accent" />
                </div>
              </div>
              <div>
                <span className="font-bebas block leading-none text-accent" style={{ fontSize: 'clamp(2rem, 7vw, 3rem)' }}>{time}</span>
                <span className="font-barlow font-semibold text-[9px] uppercase tracking-[0.3em] text-muted mt-1 block">{label}</span>
              </div>
              <div className="mt-auto pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <span className="font-barlow font-semibold text-[9px] uppercase tracking-[0.3em] text-muted block mb-0.5">Order cutoff</span>
                <span className="font-barlow font-bold text-sm text-text">{cutoff}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className="mt-8 text-center font-inter text-xs text-muted"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Open every day &middot; 11:00 AM – 9:00 PM &middot; +91 76038 14870
        </motion.p>
      </div>
    </section>
  )
}
