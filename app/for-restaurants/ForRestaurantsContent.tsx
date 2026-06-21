'use client'

import { useState } from 'react'
import { TrendingUp, Package, BarChart2, DollarSign, MessageCircle, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  { icon: TrendingUp, title: 'More Orders',          description: 'Reach 30+ villages you couldn\'t serve before. Our batch delivery brings your food to new customers every day.' },
  { icon: Package,    title: 'No Delivery Headache', description: 'You cook, we deliver. No need for your own delivery staff or vehicles. Focus on what you do best.' },
  { icon: BarChart2,  title: 'Simple Dashboard',     description: 'Receive orders clearly via WhatsApp. Know exactly what to prepare and when. No complicated software.' },
  { icon: DollarSign, title: 'Weekly Settlements',   description: 'Transparent weekly payouts directly to your bank account. Clear commission structure, no hidden fees.' },
]

const partnerSteps = [
  { number: '01', title: 'Register Interest',  description: 'Fill the form below or WhatsApp us directly. Share your restaurant details.' },
  { number: '02', title: 'We Visit You',       description: 'Our team visits your kitchen to understand your menu and capacity.' },
  { number: '03', title: 'Onboarding',         description: 'Simple WhatsApp setup. Menu listing. Trial period to calibrate orders.' },
  { number: '04', title: 'Start Earning',      description: 'Go live! Receive batch orders daily. We handle delivery, you handle cooking.' },
]

const cuisines = ['South Indian', 'North Indian', 'Chinese', 'Biryani', 'Snacks & Tiffin', 'Beverages', 'Sweets & Desserts', 'Other']

export default function ForRestaurantsContent() {
  const [form, setForm] = useState({ restaurant: '', owner: '', phone: '', location: '', cuisine: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.restaurant.trim()) e.restaurant = 'Restaurant name is required'
    if (!form.owner.trim())      e.owner      = 'Owner name is required'
    if (!form.phone.trim())      e.phone      = 'Phone number is required'
    if (!form.location.trim())   e.location   = 'Location is required'
    return e
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    const text = encodeURIComponent(
      `Hi Wings Delivery! I want to partner with you.\n\nRestaurant: ${form.restaurant}\nOwner: ${form.owner}\nPhone: ${form.phone}\nLocation: ${form.location}\nCuisine: ${form.cuisine || 'Not specified'}`
    )
    setTimeout(() => {
      window.open(`https://wa.me/917603814870?text=${text}`, '_blank')
      setLoading(false)
      setForm({ restaurant: '', owner: '', phone: '', location: '', cuisine: '' })
    }, 500)
  }

  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(249,115,22,0.12) 0%, transparent 65%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <span className="eyebrow text-[#F97316] mb-5 block">Restaurant Partners</span>
          <h1 className="font-playfair text-[#EFF2F7] mb-6 leading-tight" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 600 }}>
            Partner with<br />
            <em className="italic text-[#F97316]">Wings Delivery.</em>
          </h1>
          <p className="font-inter text-[#7E8A9E] text-base md:text-xl max-w-xl leading-relaxed">
            Grow your restaurant business with zero delivery hassle. Reach 30+ villages.
            Weekly settlements. Simple WhatsApp integration.
          </p>
          <div className="mt-6">
            <span className="font-bebas text-[#F97316]" style={{ fontSize: '3.2rem' }}>10+</span>
            <span className="font-inter text-[#7E8A9E] text-sm ml-2">Restaurant partners and growing</span>
          </div>
        </div>
      </section>

      <section style={{ background: '#141825' }} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-[#EFF2F7]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600 }}>Why Partner With Us?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map(({ icon: Icon, title, description }, i) => (
              <motion.div key={title} className="card rounded-[14px] p-6 hover:-translate-y-1 transition-transform duration-300"
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.18)' }}>
                  <Icon size={20} style={{ color: '#F97316' }} />
                </div>
                <h3 className="font-barlow font-black text-sm uppercase tracking-wider text-[#EFF2F7] mb-2">{title}</h3>
                <p className="font-inter text-sm text-[#7E8A9E] leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="eyebrow text-[#F97316] mb-4 block">Process</span>
            <h2 className="font-playfair text-[#EFF2F7]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600 }}>How It Works</h2>
          </div>
          <div className="flex flex-col gap-8">
            {partnerSteps.map(({ number, title, description }, i) => (
              <motion.div key={number} className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bebas text-2xl"
                  style={{ color: '#F97316', background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)' }}>
                  {number}
                </div>
                <div className="pt-3">
                  <h3 className="font-barlow font-black text-xl uppercase text-[#EFF2F7] mb-1">{title}</h3>
                  <p className="font-inter text-sm text-[#7E8A9E] leading-relaxed max-w-md">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#141825' }} className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-[#EFF2F7]" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600 }}>Register Your Restaurant</h2>
            <p className="font-inter text-[#7E8A9E] text-sm mt-3">Fill this form and we&apos;ll reach out within 24 hours.</p>
          </div>
          <form onSubmit={handleSubmit} noValidate className="card rounded-2xl p-8 flex flex-col gap-5">
            {[
              { key: 'restaurant', label: 'Restaurant Name',   type: 'text', placeholder: 'Your restaurant name' },
              { key: 'owner',      label: 'Owner Name',        type: 'text', placeholder: 'Your full name' },
              { key: 'phone',      label: 'Phone Number',      type: 'tel',  placeholder: '+91 9XXXXXXXXX' },
              { key: 'location',   label: 'Location / Village', type: 'text', placeholder: 'Your area in Uthukottai / Tiruvallur' },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="font-barlow font-bold text-xs uppercase tracking-[0.14em] text-[#7E8A9E] block mb-2">{label} *</label>
                <input type={type} value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-[#F97316]/50 outline-none text-[#EFF2F7] font-inter text-sm px-4 py-3 rounded-xl transition-colors placeholder:text-[#3D4556]" />
                {errors[key] && <p className="font-inter text-xs mt-1 text-[#FB923C]">{errors[key]}</p>}
              </div>
            ))}
            <div>
              <label className="font-barlow font-bold text-xs uppercase tracking-[0.14em] text-[#7E8A9E] block mb-2">Cuisine Type</label>
              <select value={form.cuisine} onChange={(e) => setForm({ ...form, cuisine: e.target.value })}
                className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-[#F97316]/50 outline-none text-[#EFF2F7] font-inter text-sm px-4 py-3 rounded-xl transition-colors appearance-none">
                <option value="" style={{ background: '#141825' }}>Select cuisine type</option>
                {cuisines.map(c => <option key={c} value={c} style={{ background: '#141825' }}>{c}</option>)}
              </select>
            </div>
            <button type="submit" disabled={loading}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] disabled:opacity-60 text-white font-barlow font-black text-sm uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-200">
              {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={16} />}
              {loading ? 'Opening WhatsApp...' : 'Submit via WhatsApp'}
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="font-inter text-[#7E8A9E] text-sm mb-3">Prefer to call directly?</p>
            <a href="https://wa.me/917603814870?text=Hi%20Wings%20Delivery!%20I%20want%20to%20become%20a%20restaurant%20partner."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#25D366]/35 hover:border-[#25D366] text-[#25D366] font-barlow font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200">
              <MessageCircle size={16} />
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
