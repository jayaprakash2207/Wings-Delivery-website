'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mic, Users, MapPin, Bell, Store } from 'lucide-react'

const features = [
  { icon: MessageCircle, title: 'WhatsApp ordering', body: 'No app download. No signup. Just message us on WhatsApp — the app already on your phone.' },
  { icon: Mic, title: 'Voice notes work', body: "Can't type? Send a voice note in Tamil. Our Axithor AI Conversation engine transcribes and understands it perfectly." },
  { icon: Users, title: 'Shared delivery cost', body: "Batch delivery splits the cost across all orders on the route. Everyone pays less. That's the model." },
  { icon: MapPin, title: 'Village pickup points', body: 'Every village has a designated pickup landmark. Your food is dropped at the one nearest to you.' },
  { icon: Bell, title: 'Real-time updates', body: 'Order placed → Kitchen preparing → On the way → At your hub. A WhatsApp message at every step.' },
  { icon: Store, title: 'Local kitchens only', body: 'Every meal comes from a real Uthukottai restaurant. Fresh, trusted, genuinely local food.' },
]

export default function Features() {
  return (
    <section className="relative py-24 md:py-36" style={{ background: '#141825' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        <motion.div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <div>
            <span className="font-barlow font-semibold text-[10px] uppercase tracking-[0.3em] text-accent block mb-5">
              Built for your village
            </span>
            <h2 className="font-playfair text-text leading-[1.05]"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 600 }}>
              Not a Swiggy clone.<br />
              <em className="italic text-accent">Something better.</em>
            </h2>
          </div>
          <p className="font-inter text-muted text-sm leading-relaxed max-w-xs md:mb-3">
            Swiggy and Zomato don&apos;t operate in your village. We do. And we built everything around how you actually live.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, body }, i) => (
            <motion.div key={title}
              className="card p-5 sm:p-7 flex flex-col gap-5 group cursor-default"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.15)' }}>
                <Icon size={19} className="text-accent" />
              </div>
              <div>
                <h3 className="font-barlow font-black text-sm uppercase tracking-wider text-text mb-2">{title}</h3>
                <p className="font-inter text-sm text-muted leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
