'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Instagram, Clock, Award, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const contactCards = [
  { icon: Phone, label: 'WhatsApp', value: '+91 91235 38768', href: 'https://wa.me/919123538768', color: '#25D366' },
  { icon: Mail, label: 'Email', value: 'wingsdelivery95@gmail.com', href: 'mailto:wingsdelivery95@gmail.com', color: '#F97316' },
  { icon: Instagram, label: 'Instagram', value: '@wingsdelivere', href: 'https://instagram.com/wingsdelivere', color: '#F97316' },
  { icon: Clock, label: 'Hours', value: '11:00 AM – 9:00 PM, All days', href: null, color: '#F97316' },
  { icon: MapPin, label: 'Address', value: '35, Sakthikal Street, Perandur, Uthukottai, Tiruvallur, TN 602026', href: 'https://maps.google.com/?q=Uthukottai,Tamil+Nadu', color: '#F97316' },
  { icon: Award, label: 'MSME', value: 'UDYAM-TN-24-0181981', href: null, color: '#F97316' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[\d\s+\-()]{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    const text = encodeURIComponent(
      `Hi Wings Delivery!\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage: ${form.message}`
    )
    setTimeout(() => {
      window.open(`https://wa.me/919123538768?text=${text}`, '_blank')
      setLoading(false)
      setForm({ name: '', phone: '', message: '' })
    }, 500)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow text-[#F97316] mb-5 block">Get In Touch</span>
          <h1 className="font-playfair text-[#EFF2F7] mb-4 leading-tight" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 600 }}>
            Talk to Us
          </h1>
          <p className="font-inter text-[#7E8A9E] text-base max-w-md mx-auto">
            Questions, feedback, or a new order — we&apos;re here on WhatsApp.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact form */}
            <motion.div
              className="card rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-barlow font-black text-2xl uppercase text-[#EFF2F7] mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div>
                  <label className="font-barlow font-bold text-xs uppercase tracking-[0.14em] text-[#7E8A9E] block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-[#F97316]/50 outline-none text-[#EFF2F7] font-inter text-sm px-4 py-3 rounded-xl transition-colors placeholder:text-[#3D4556]"
                  />
                  {errors.name && <p className="font-inter text-xs mt-1 text-[#FB923C]">{errors.name}</p>}
                </div>
                <div>
                  <label className="font-barlow font-bold text-xs uppercase tracking-[0.14em] text-[#7E8A9E] block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 9XXXXXXXXX"
                    className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-[#F97316]/50 outline-none text-[#EFF2F7] font-inter text-sm px-4 py-3 rounded-xl transition-colors placeholder:text-[#3D4556]"
                  />
                  {errors.phone && <p className="font-inter text-xs mt-1 text-[#FB923C]">{errors.phone}</p>}
                </div>
                <div>
                  <label className="font-barlow font-bold text-xs uppercase tracking-[0.14em] text-[#7E8A9E] block mb-2">
                    Message *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What's on your mind?"
                    rows={4}
                    className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-[#F97316]/50 outline-none text-[#EFF2F7] font-inter text-sm px-4 py-3 rounded-xl transition-colors placeholder:text-[#3D4556] resize-none"
                  />
                  {errors.message && <p className="font-inter text-xs mt-1 text-[#FB923C]">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] disabled:opacity-60 text-white font-barlow font-black text-sm uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-200"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {loading ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                </button>
                <p className="font-inter text-xs text-[#7E8A9E] text-center">
                  This will open WhatsApp with your message pre-filled.
                </p>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {contactCards.map(({ icon: Icon, label, value, href, color }) => (
                <div
                  key={label}
                  className="card rounded-xl p-5 flex items-start gap-4 hover:-translate-y-0.5 transition-transform duration-250"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}12`, border: `1px solid ${color}22` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="font-barlow font-semibold text-xs uppercase tracking-[0.14em] text-[#7E8A9E] mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-inter text-sm text-[#EFF2F7] hover:text-[#F97316] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-inter text-sm text-[#EFF2F7]">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden h-48 mt-2" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                <iframe
                  src="https://maps.google.com/maps?q=Uthukottai,+Tiruvallur,+Tamil+Nadu+602026&z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wings Delivery Location Map"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
