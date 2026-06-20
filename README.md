# Wings Delivery — Website

**Fast · Local · Reliable** | WhatsApp AI-powered food delivery across 30+ villages in Uthukottai, Tiruvallur District, Tamil Nadu.

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (custom "Midnight Spice" palette)
- **Framer Motion** (all animations)
- **Lucide React** (icons)
- **Google Fonts** — Playfair Display, Barlow Condensed, Inter, Bebas Neue

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 3. Add your logo
# Replace public/wings-delivery-logo.svg with your actual logo file
# (PNG or SVG accepted — update references in components if switching to PNG)

# 4. Run development server
npm run dev
# Open http://localhost:3000
```

---

## Logo Setup

The repo ships with a placeholder SVG logo at `public/wings-delivery-logo.svg`.

**To use your actual Wings Delivery logo:**

**Option A — Replace the SVG** (simplest):
```bash
cp /path/to/wings-delivery-logo.svg public/wings-delivery-logo.svg
```

**Option B — Use a PNG logo:**
1. Copy your PNG to `public/wings-delivery-logo.png`
2. Find/replace `wings-delivery-logo.svg` → `wings-delivery-logo.png` in:
   - `app/layout.tsx`
   - `components/layout/Navbar.tsx`
   - `components/layout/Footer.tsx`
   - `components/home/Hero.tsx`

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Stats, Ticker, How It Works, Features, Coverage, Slots, Testimonials, CTA |
| `/about` | Company story, founder, values, MSME badge |
| `/how-it-works` | Step guide, WhatsApp chat mockup, FAQ |
| `/coverage` | Map, 5 hubs, 30+ village grid |
| `/contact` | WhatsApp form, business info, map |
| `/for-restaurants` | Partnership benefits, registration form |
| `/privacy-policy` | Full privacy policy |
| `/terms` | Full terms of service |

---

## Deployment on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Or via GitHub:**
1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Framework: Next.js (auto-detected)
4. Add Environment Variables from `.env.example`
5. Deploy

**Environment Variables to set in Vercel:**
```
NEXT_PUBLIC_SITE_URL=https://wingsdelivery.in
NEXT_PUBLIC_WA_NUMBER=917603814870
```

---

## Custom Domain

After deployment in Vercel:
1. Go to Project Settings → Domains
2. Add `wingsdelivery.in`
3. Update your domain registrar DNS:
   - `A` record: `76.76.21.21` (Vercel)
   - `CNAME` record: `cname.vercel-dns.com`

---

## Business Info

| | |
|---|---|
| **Company** | Wings Delivery |
| **WhatsApp** | +91 76038 14870 |
| **Email** | wingsdelivery95@gmail.com |
| **Instagram** | [@wingsdelivere](https://instagram.com/wingsdelivere) |
| **Address** | 35, Sakthikal Street, Perandur, Uthukottai, Tiruvallur, TN 602026 |
| **MSME** | UDYAM-TN-24-0181981 |
| **Hours** | 11:00 AM – 9:00 PM, All days |
| **Founder** | Sinivasan I |

---

Made with ❤️ in Uthukottai, Tamil Nadu.
