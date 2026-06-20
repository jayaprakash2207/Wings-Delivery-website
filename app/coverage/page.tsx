'use client'

import { MapPin, MessageCircle, Navigation } from 'lucide-react'
import { motion } from 'framer-motion'

const pickupPoints = [
  { village: 'Uthukottai', landmark: 'Main Road Junction', zone: 1 },
  { village: 'Tharatchi', landmark: 'Bus Stop', zone: 1 },
  { village: 'Perandur', landmark: 'Village Center', zone: 1 },
  { village: 'Endrapalayam', landmark: 'Junction', zone: 2 },
  { village: 'Mettukandigai', landmark: 'Temple Street', zone: 2 },
  { village: 'Sennankaranai', landmark: 'Dairy', zone: 2 },
  { village: 'Karadipudur', landmark: 'Bus Stop', zone: 2 },
  { village: 'Palavakkam RF', landmark: 'Main Road', zone: 2 },
  { village: 'Ananderi', landmark: 'Village Center', zone: 2 },
  { village: 'Vadathillai', landmark: 'Temple', zone: 2 },
  { village: 'Thandalam', landmark: 'Main Road', zone: 3 },
  { village: 'Senneri', landmark: 'Bus Stop', zone: 3 },
  { village: 'Pudukuppam', landmark: 'Panchayat Office', zone: 3 },
  { village: 'Thondukuli', landmark: 'Village Center', zone: 3 },
  { village: 'Mambakkam', landmark: 'Temple', zone: 3 },
  { village: 'Pondavakkam', landmark: 'Junction', zone: 3 },
  { village: 'Sengarai', landmark: 'Dairy', zone: 3 },
  { village: 'Kaiyadi', landmark: 'Bus Stop', zone: 3 },
  { village: 'Mukkarambakkam', landmark: 'Center', zone: 4 },
  { village: 'Tholavedu', landmark: 'Temple', zone: 4 },
  { village: 'Enambakkam', landmark: 'Bus Stop', zone: 4 },
  { village: 'Melmaligaipattu', landmark: 'Main Road', zone: 4 },
  { village: 'Malanthur', landmark: 'Village Center', zone: 4 },
  { village: 'Sengunram', landmark: 'Junction', zone: 4 },
  { village: 'Gurugambakkam', landmark: 'Temple', zone: 4 },
  { village: 'Gurupuram', landmark: 'Dairy', zone: 4 },
  { village: 'Kakkavakkam', landmark: 'Bus Stop', zone: 5 },
  { village: 'Thumbakkam', landmark: 'Village Center', zone: 5 },
  { village: 'Paruthimerikuppam', landmark: 'Main Road', zone: 5 },
  { village: 'Kalpattu', landmark: 'Junction', zone: 5 },
  { village: 'Alappakkam', landmark: 'Temple', zone: 5 },
  { village: 'Periyapalayam', landmark: 'Main Area', zone: 5 },
]

const zones = [
  { number: 1, name: 'Uthukottai', area: '602026', color: '#F97316' },
  { number: 2, name: 'Endrapalayam', area: '602026', color: '#FB923C' },
  { number: 3, name: 'Thandalam', area: '602105', color: '#F97316' },
  { number: 4, name: 'Mukkarambakkam', area: '602105', color: '#FB923C' },
  { number: 5, name: 'Periyapalayam', area: '600072', color: '#F97316' },
]

function VillageCard({ village, landmark, index }: { village: string; landmark: string; index: number }) {
  return (
    <motion.div
      className="group relative glow-card p-5 flex items-start gap-4 cursor-default"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {/* Animated pin icon */}
      <div className="relative flex-shrink-0 mt-0.5">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))', border: '1px solid rgba(249,115,22,0.2)' }}>
          <MapPin size={14} className="text-[#F97316]" />
        </div>
        {/* Pulse ring on hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: '0 0 15px rgba(249,115,22,0.3), 0 0 30px rgba(249,115,22,0.1)' }} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-barlow font-black text-sm uppercase tracking-wider text-[#EFF2F7] mb-0.5 truncate group-hover:text-[#F97316] transition-colors duration-300">
          {village}
        </p>
        <div className="flex items-center gap-1.5">
          <Navigation size={9} className="text-[#F97316]/50" />
          <p className="font-inter text-[11px] text-[#7E8A9E] group-hover:text-[#7E8A9E]/80 transition-colors">{landmark}</p>
        </div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 100% 0%, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />
    </motion.div>
  )
}

export default function CoveragePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-grid pointer-events-none opacity-50" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(249,115,22,0.12) 0%, transparent 60%)' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.span className="eyebrow text-[#F97316] mb-5 block"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Coverage Area
          </motion.span>

          <motion.h1 className="font-playfair text-[#EFF2F7] mb-6 leading-tight"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            32 Villages.<br />
            <em className="italic shimmer">One Route.</em>
          </motion.h1>

          <motion.p className="font-inter text-[#7E8A9E] text-base max-w-md mx-auto mb-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Every village on the Uthukottai–Periyapalayam corridor has a designated pickup landmark. Your food arrives there.
          </motion.p>

          {/* Route badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)' }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: 'spring' }}>
            <MapPin size={16} className="text-[#F97316]" />
            <span className="font-barlow font-bold text-sm uppercase tracking-wider text-[#EFF2F7]">
              Uthukottai
            </span>
            <div className="flex items-center gap-1">
              {[0,1,2].map(i => (
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-[#F97316]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} />
              ))}
            </div>
            <span className="font-barlow font-bold text-sm uppercase tracking-wider text-[#EFF2F7]">
              Periyapalayam
            </span>
            <span className="font-inter text-xs text-[#7E8A9E]">25–35 km</span>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="rounded-2xl overflow-hidden h-[400px] md:h-[500px]"
            style={{ border: '1px solid rgba(249,115,22,0.15)' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <iframe
              src="https://maps.google.com/maps?q=Uthukottai+to+Periyapalayam,+Tiruvallur,+Tamil+Nadu&z=12&output=embed"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Wings Delivery Coverage Map" />
          </motion.div>
        </div>
      </section>

      {/* ═══ 32 PICKUP POINTS — THE PREMIUM SECTION ═══ */}
      <section style={{ background: '#141825' }} className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider" />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.04) 0%, transparent 60%)' }} />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

          {/* Header with animated count */}
          <motion.div className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="eyebrow block mb-5">Every Village, One Landmark</span>
            <h2 className="font-playfair text-[#EFF2F7] mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700 }}>
              <span className="font-bebas text-[#F97316]" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}>32</span>
              <br />Pickup Points
            </h2>
            <p className="font-inter text-[#7E8A9E] text-sm max-w-lg mx-auto leading-relaxed">
              Each village has a well-known landmark — a temple, bus stop, dairy, or junction — where
              the delivery boy drops your food. A spot everyone already knows.
            </p>
          </motion.div>

          {/* Route timeline with zones */}
          <div className="relative">
            {/* Vertical route line — visible on desktop */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, rgba(249,115,22,0.4), rgba(249,115,22,0.1) 30%, rgba(249,115,22,0.1) 70%, rgba(249,115,22,0.4))' }} />

            {/* Moving dot on the line */}
            <div className="hidden lg:block absolute left-[29px] route-dot z-10">
              <div className="w-3 h-3 rounded-full glow-dot" style={{ background: '#F97316' }} />
            </div>

            <div className="space-y-16">
              {zones.map((zone, zi) => {
                const zonePoints = pickupPoints.filter(p => p.zone === zone.number)
                return (
                  <motion.div key={zone.number} className="relative"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.6, delay: zi * 0.1 }}>

                    {/* Zone header */}
                    <div className="flex items-center gap-4 mb-6 lg:ml-20">
                      {/* Zone number badge */}
                      <motion.div
                        className="relative w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))',
                          border: '1px solid rgba(249,115,22,0.3)',
                          boxShadow: '0 0 25px rgba(249,115,22,0.1)',
                        }}
                        whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(249,115,22,0.2)' }}>
                        <span className="font-bebas text-2xl text-[#F97316]">{zone.number}</span>
                      </motion.div>

                      <div>
                        <h3 className="font-barlow font-black text-lg uppercase tracking-wider text-[#EFF2F7]">
                          {zone.name}
                          <span className="font-inter font-normal text-xs text-[#7E8A9E] ml-3 normal-case tracking-normal">
                            Zone {zone.number} &middot; {zone.area}
                          </span>
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="font-inter text-[11px] text-[#F97316]/60">{zonePoints.length} pickup points</span>
                          <div className="h-px flex-1 max-w-[120px] ml-2" style={{ background: 'linear-gradient(90deg, rgba(249,115,22,0.2), transparent)' }} />
                        </div>
                      </div>
                    </div>

                    {/* Village cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:ml-20">
                      {zonePoints.map(({ village, landmark }, vi) => (
                        <VillageCard key={village} village={village} landmark={landmark} index={vi} />
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Route end marker */}
            <motion.div className="flex items-center gap-3 mt-12 lg:ml-20"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="w-3 h-3 rounded-full bg-[#25D366]" style={{ boxShadow: '0 0 12px rgba(37,211,102,0.5)' }} />
              <span className="font-barlow font-bold text-xs uppercase tracking-wider text-[#25D366]">
                Full route covered &middot; 32 villages &middot; Every day
              </span>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </section>

      {/* Not covered CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-playfair text-[#EFF2F7] mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600 }}>
              Not in our coverage area?
            </h2>
            <p className="font-inter text-[#7E8A9E] text-sm mb-8">
              We&apos;re expanding. Let us know your village and we&apos;ll prioritise adding it to our route.
            </p>
            <motion.a
              href="https://wa.me/919123538768?text=Hi%20Wings%20Delivery!%20I%20want%20to%20request%20delivery%20to%20my%20village."
              target="_blank" rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 bg-[#25D366] text-white font-barlow font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg shadow-[#25D366]/20"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37,211,102,0.35)' }}
              whileTap={{ scale: 0.97 }}>
              <MessageCircle size={17} />
              Request My Village
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
