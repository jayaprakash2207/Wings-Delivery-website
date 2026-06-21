import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Clock, Award } from 'lucide-react'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Coverage', href: '/coverage' },
  { label: 'For Restaurants', href: '/for-restaurants' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="relative" style={{ background: '#141825' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-12 md:gap-8 mb-16">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src="/wings-delivery-logo.png" alt="Wings Delivery" fill className="object-contain" sizes="40px" />
              </div>
              <div>
                <p className="font-barlow font-black text-lg uppercase tracking-[0.12em] text-[#EFF2F7]">Wings Delivery</p>
                <p className="font-inter text-[9px] text-[#7E8A9E]/50 tracking-[0.25em] uppercase">Uthukottai, Tamil Nadu</p>
              </div>
            </div>
            <p className="font-inter text-xs text-[#7E8A9E]/70 leading-relaxed max-w-xs">
              WhatsApp AI-powered food delivery across 30+ villages along the Uthukottai-Periyapalayam corridor.
            </p>
            <div className="flex items-center gap-2 rounded-lg px-3 py-2 w-fit"
              style={{ border: '1px solid rgba(249,115,22,0.2)', background: 'rgba(249,115,22,0.06)' }}>
              <Award size={12} style={{ color: '#F97316' }} />
              <span className="font-inter text-[10px] tracking-wider" style={{ color: 'rgba(249,115,22,0.7)' }}>UDYAM-TN-24-0181981</span>
            </div>
          </div>

          {/* Pages column */}
          <div>
            <p className="font-barlow font-semibold text-[10px] uppercase tracking-[0.3em] text-[#F97316]/55 mb-5">Pages</p>
            <ul className="flex flex-col gap-2.5">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-inter text-xs text-[#7E8A9E]/60 hover:text-[#EFF2F7]/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="font-barlow font-semibold text-[10px] uppercase tracking-[0.3em] text-[#F97316]/55 mb-5">Contact</p>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                { icon: Mail, text: 'wingsdelivery95@gmail.com', href: 'mailto:wingsdelivery95@gmail.com' },
                { icon: Clock, text: '11:00 AM – 9:00 PM, All days', href: null },
                { icon: MapPin, text: '35, Sakthikal St, Perandur, Uthukottai, TN 602026', href: 'https://maps.google.com/?q=Uthukottai,Tamil+Nadu' },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon size={12} className="flex-shrink-0 mt-0.5" style={{ color: '#F97316' }} />
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-inter text-xs text-[#7E8A9E]/60 hover:text-[#EFF2F7]/70 transition-colors leading-relaxed">{text}</a>
                  ) : (
                    <span className="font-inter text-xs text-[#7E8A9E]/50 leading-relaxed">{text}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex gap-2.5">
              <a href="https://wa.me/917603814870" target="_blank" rel="noopener noreferrer"
                className="font-barlow font-black text-[10px] uppercase tracking-wider text-[#25D366] border border-[#25D366]/25 hover:border-[#25D366]/50 px-3 py-1.5 rounded-full transition-colors">
                WhatsApp
              </a>
              <a href="https://instagram.com/wingsdelivere" target="_blank" rel="noopener noreferrer"
                className="font-barlow font-black text-[10px] uppercase tracking-wider text-[#7E8A9E]/50 border border-white/[0.08] hover:border-white/20 hover:text-[#EFF2F7]/55 px-3 py-1.5 rounded-full transition-colors">
                @wingsdelivere
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="font-inter text-[10px] text-[#7E8A9E]/40">
            &copy; {new Date().getFullYear()} Wings Delivery &middot; MSME: UDYAM-TN-24-0181981
          </p>
          <p className="font-inter text-[10px] text-[#7E8A9E]/40">Uthukottai, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  )
}
