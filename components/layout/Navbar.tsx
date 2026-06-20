'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Coverage', href: '/coverage' },
  { label: 'Restaurants', href: '/for-restaurants' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(11,14,20,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3), 0 0 60px rgba(249,115,22,0.03)' : 'none',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">

            <Link href="/" className="flex items-center gap-3 group">
              <motion.div className="relative w-9 h-9 md:w-10 md:h-10 flex-shrink-0"
                whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 400 }}>
                <Image src="/wings-delivery-logo.png" alt="Wings Delivery" fill className="object-contain" sizes="40px" />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="font-barlow font-black text-base md:text-lg uppercase tracking-[0.14em] text-[#EFF2F7] group-hover:text-[#F97316] transition-colors duration-300">
                  Wings Delivery
                </span>
                <span className="font-inter text-[9px] text-[#7E8A9E] tracking-[0.25em] uppercase">
                  Uthukottai
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link key={link.href} href={link.href}
                  className={`relative font-barlow font-bold text-xs uppercase tracking-[0.2em] transition-colors duration-250 pb-0.5 ${
                    pathname === link.href
                      ? 'text-[#F97316]'
                      : 'text-[#EFF2F7]/50 hover:text-[#EFF2F7]'
                  }`}>
                  {link.label}
                  {pathname === link.href && (
                    <motion.span layoutId="nav-active"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F97316] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <motion.a href="https://wa.me/919123538768?text=Hi%20Wings%20Delivery!%20I%20want%20to%20order%20food."
                target="_blank" rel="noopener noreferrer"
                className="btn-shine hidden md:flex items-center gap-2 bg-[#25D366] text-white font-barlow font-black text-xs uppercase tracking-[0.16em] px-5 py-2.5 rounded-full"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400 }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Order Now
              </motion.a>
              <button onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center text-[#EFF2F7]"
                aria-label="Menu">
                <AnimatePresence mode="wait">
                  {menuOpen
                    ? <motion.span key="x" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><X size={20} /></motion.span>
                    : <motion.span key="m" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Menu size={20} /></motion.span>}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 z-40 flex flex-col justify-center items-center md:hidden"
            style={{ background: '#0B0E14' }}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <nav className="flex flex-col items-center gap-7 relative z-10">
              {links.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 + i * 0.07 }}>
                  <Link href={link.href}
                    className={`font-barlow font-black text-4xl uppercase tracking-wider ${
                      pathname === link.href ? 'text-[#F97316]' : 'text-[#EFF2F7]/60 hover:text-[#F97316]'
                    } transition-colors`}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a href="https://wa.me/919123538768" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 + links.length * 0.07 }}
                className="mt-4 flex items-center gap-2 bg-[#25D366] text-white font-barlow font-black text-lg uppercase tracking-[0.12em] px-8 py-3.5 rounded-full">
                Order on WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
