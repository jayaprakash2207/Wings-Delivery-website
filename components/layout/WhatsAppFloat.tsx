'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const pathname = usePathname()
  const hidden = pathname === '/contact'

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div className="fixed bottom-6 right-6 z-50 group"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}>
          <a href="https://wa.me/917603814870?text=Hi%20Wings%20Delivery!%20I%20want%20to%20order%20food."
            target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full wa-glow hover:scale-110 transition-transform duration-200">
            <span className="wa-ring-1 absolute inset-0 rounded-full bg-[#25D366]/40" />
            <span className="wa-ring-2 absolute inset-0 rounded-full bg-[#25D366]/25" />
            <MessageCircle size={24} className="text-white relative z-10" fill="white" />
          </a>
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#141825] border border-white/[0.07] text-[#EFF2F7] text-xs font-barlow font-black uppercase tracking-wider px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Order Now
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
