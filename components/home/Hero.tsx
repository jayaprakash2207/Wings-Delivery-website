'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, ArrowDown, Sparkles } from 'lucide-react'

const STAGGER = { hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } } }
const LIFT = {
  hidden: { y: '100%', opacity: 0 },
  show: { y: '0%', opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const logoY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: '#0B0E14' }}>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-[-10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] ambient-breathe"
          style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(249,115,22,0.13) 0%, rgba(249,115,22,0.04) 45%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px]"
          style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(249,115,22,0.08) 0%, transparent 60%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh]"
          style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.03) 0%, transparent 60%)' }} />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 lg:px-16 pt-28 pb-16 md:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-8 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-7 md:gap-9">

            {/* Badge */}
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1.5 font-barlow font-bold text-[10px] uppercase tracking-[0.2em] text-[#F97316] border border-[#F97316]/25 bg-[#F97316]/[0.08] px-3 py-1.5 rounded-full">
                <Sparkles size={10} />
                First in rural Tamil Nadu
              </span>
              <span className="font-inter text-[11px] text-[#EFF2F7]/30">Uthukottai &rarr; Periyapalayam corridor</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={STAGGER} initial="hidden" animate="show">
              <div className="overflow-hidden">
                <motion.span variants={LIFT}
                  className="block font-playfair text-[#EFF2F7] leading-[1.02]"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700 }}>
                  Your village
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={LIFT}
                  className="block font-playfair italic shimmer leading-[1.02]"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 700 }}>
                  deserves food delivery.
                </motion.span>
              </div>
              <div className="overflow-hidden mt-5">
                <motion.span variants={LIFT}
                  className="block font-inter text-[#7E8A9E] leading-relaxed max-w-lg"
                  style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)' }}>
                  Wings Delivery is the first AI-powered food ordering service for rural Tamil Nadu.
                  WhatsApp us in Tamil. Collect at your village pickup point. Affordable batch delivery.
                </motion.span>
              </div>
            </motion.h1>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}>
              <motion.a
                href="https://wa.me/917603814870?text=Hi%20Wings%20Delivery!%20I%20want%20to%20order%20food."
                target="_blank" rel="noopener noreferrer"
                className="btn-shine flex items-center gap-2.5 bg-[#25D366] text-white font-barlow font-black text-sm uppercase tracking-[0.14em] px-8 py-4 rounded-full shadow-lg shadow-[#25D366]/20"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37,211,102,0.4)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 380 }}>
                <MessageCircle size={17} />
                Order on WhatsApp
              </motion.a>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/how-it-works"
                  className="flex items-center gap-2 border border-[#F97316]/25 hover:border-[#F97316]/60 hover:bg-[#F97316]/[0.06] text-[#F97316] font-barlow font-bold text-sm uppercase tracking-[0.14em] px-8 py-4 rounded-full transition-all duration-300">
                  How It Works
                </Link>
              </motion.div>
            </motion.div>

            {/* Language pills */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
              className="flex items-center gap-2.5 flex-wrap">
              <span className="font-inter text-[10px] text-[#7E8A9E]/50 uppercase tracking-wider">Order in:</span>
              {['Tamil', 'Tanglish', 'Telugu', 'English', 'Voice notes'].map((lang) => (
                <span key={lang} className="font-inter text-[10px] text-[#EFF2F7]/25 border border-white/[0.06] hover:border-[#F97316]/25 hover:text-[#EFF2F7]/50 px-2.5 py-1 rounded-full transition-all duration-300 cursor-default">
                  {lang}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — logo */}
          <motion.div className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: logoY }}>
            {/* Outer ring */}
            <motion.div className="absolute rounded-full"
              style={{ width: 400, height: 400, border: '1px solid rgba(249,115,22,0.1)' }}
              animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }} />
            {/* Inner dashed ring */}
            <motion.div className="absolute rounded-full"
              style={{ width: 320, height: 320, border: '1px dashed rgba(249,115,22,0.06)' }}
              animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} />
            {/* Glow */}
            <div className="absolute rounded-full ambient-breathe"
              style={{ width: 280, height: 280, background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.03) 50%, transparent 70%)' }} />
            {/* Logo */}
            <motion.div className="relative z-10 float" style={{ width: 260, height: 260 }}>
              <Image src="/wings-delivery-logo.png" alt="Wings Delivery" fill className="object-contain"
                style={{ filter: 'drop-shadow(0 0 50px rgba(249,115,22,0.2)) drop-shadow(0 25px 60px rgba(0,0,0,0.6))' }} priority />
            </motion.div>
            {/* Accent dots */}
            <motion.div className="absolute w-2.5 h-2.5 rounded-full bg-[#F97316] glow-dot"
              style={{ top: '10%', right: '15%' }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }} />
            <motion.div className="absolute w-1.5 h-1.5 rounded-full bg-[#FB923C]"
              style={{ bottom: '18%', left: '12%', boxShadow: '0 0 10px rgba(251,146,60,0.7)' }}
              animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div className="mt-20 md:mt-24 flex items-center justify-between gap-6 pt-7"
          style={{ borderTop: '1px solid rgba(249,115,22,0.1)' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          <div className="flex items-baseline gap-8 flex-wrap">
            {[['30+', 'Villages'], ['30 min', 'Delivery'], ['4', 'Languages'], ['32', 'Pickup Points']].map(([num, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-bebas text-2xl text-[#F97316]">{num}</span>
                <span className="font-barlow font-semibold text-[9px] uppercase tracking-[0.25em] text-[#EFF2F7]/20">{label}</span>
              </div>
            ))}
          </div>
          <motion.div className="flex flex-col items-center gap-1 text-[#F97316]/30"
            animate={{ y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <span className="font-barlow font-semibold text-[9px] uppercase tracking-[0.3em]">Scroll</span>
            <ArrowDown size={11} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}
