import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:'#0B0E14', surface:'#141825', 'surface-2':'#1C2133', 'surface-3':'#252A3E',
        text:'#EFF2F7', muted:'#7E8A9E', dim:'#3D4556',
        accent:{ DEFAULT:'#F97316', light:'#FB923C', dark:'#EA580C', glow:'rgba(249,115,22,0.12)' },
        whatsapp:'#25D366',
        black:'#0B0E14', gold:'#F97316', cream:'#EFF2F7',
        ivory:{ DEFAULT:'#EFF2F7', pure:'#FFFFFF' },
        red:{ DEFAULT:'#F97316', glow:'#FB923C', dark:'#EA580C' },
        amber:{ DEFAULT:'#FB923C', glow:'#FCD34D' },
        saffron:'#F97316',
        white:{ DEFAULT:'#EFF2F7', pure:'#FFFFFF' },
      },
      fontFamily: {
        playfair:['var(--font-playfair)','serif'], barlow:['var(--font-barlow)','sans-serif'],
        inter:['var(--font-inter)','sans-serif'], bebas:['var(--font-bebas)','sans-serif'],
      },
      keyframes: {
        'ambient-breathe':{'0%,100%':{opacity:'0.4',transform:'scale(1)'},'50%':{opacity:'0.7',transform:'scale(1.05)'}},
        ticker:{'0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'}},
        float:{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-18px)'}},
        'glow-pulse':{'0%,100%':{boxShadow:'0 0 0 0 rgba(37,211,102,.35)'},'50%':{boxShadow:'0 0 0 14px rgba(37,211,102,0)'}},
        'dot-move':{'0%':{top:'0%'},'100%':{top:'100%'}},
        'ring-pulse':{'0%':{transform:'scale(1)',opacity:'0.7'},'100%':{transform:'scale(2.2)',opacity:'0'}},
        'fade-up':{'0%':{opacity:'0',transform:'translateY(22px)'},'100%':{opacity:'1',transform:'translateY(0)'}},
        shimmer:{'0%':{backgroundPosition:'-400% center'},'100%':{backgroundPosition:'400% center'}},
      },
      animation: {
        'ambient-breathe':'ambient-breathe 8s ease-in-out infinite',
        ticker:'ticker 55s linear infinite', float:'float 9s ease-in-out infinite',
        'glow-pulse':'glow-pulse 2.8s ease-in-out infinite',
        'dot-move':'dot-move 4s ease-in-out infinite alternate',
        'ring-pulse':'ring-pulse 2.8s ease-out infinite',
        'fade-up':'fade-up .7s ease-out forwards', shimmer:'shimmer 5s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
