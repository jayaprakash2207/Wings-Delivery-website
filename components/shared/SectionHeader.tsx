'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  titleClass?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  titleClass = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
    >
      {eyebrow && (
        <span className="eyebrow inline-block font-barlow font-semibold tracking-[0.28em] uppercase mb-4 text-[#F97316]"
          style={{ fontSize: '0.65rem' }}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-playfair text-[#EFF2F7] leading-tight ${titleClass}`}
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 600 }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#7E8A9E] font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
