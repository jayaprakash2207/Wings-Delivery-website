'use client'

import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 30, suffix: '+', label: 'Villages', sub: 'Along the route' },
  { value: 25, suffix: '+ km', label: 'Route', sub: 'Uthukottai → Periyapalayam' },
  { value: 4, suffix: '', label: 'Languages', sub: 'Tamil · Tanglish · Telugu · English' },
  { value: 32, suffix: '', label: 'Pickup Points', sub: 'One for every village' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.max(1, Math.ceil(target / 40))
    const timer = setInterval(() => {
      start = Math.min(start + step, target)
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsBar() {
  return (
    <section className="relative py-16 md:py-20" style={{ background: '#141825' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map(({ value, suffix, label, sub }, i) => (
            <motion.div key={label}
              className="flex flex-col gap-2 py-8 px-6 md:px-8"
              style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}>
              <div className="font-bebas leading-none text-[#F97316]" style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4rem)' }}>
                <CountUp target={value} suffix={suffix} />
              </div>
              <div>
                <p className="font-barlow font-bold text-xs uppercase tracking-[0.1em] text-[#EFF2F7]">{label}</p>
                <p className="font-inter text-[11px] text-[#7E8A9E] mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
