const villages = [
  'Uthukottai','Tharatchi','Perandur','Endrapalayam','Mettukandigai',
  'Sennankaranai','Thandalam','Senneri','Pudukuppam','Thondukuli',
  'Karadipudur','Palavakkam RF','Ananderi','Vadathillai','Mambakkam',
  'Pondavakkam','Sengarai','Kaiyadi','Mukkarambakkam','Tholavedu',
  'Enambakkam','Melmaligaipattu','Malanthur','Kalpattu','Alappakkam',
  'Sengunram','Gurugambakkam','Gurupuram','Kakkavakkam','Thumbakkam',
  'Paruthimerikuppam','Periyapalayam',
]

export default function RouteTicker() {
  const items = [...villages, ...villages]
  return (
    <div className="relative overflow-hidden py-4" style={{ background: '#0B0E14', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0B0E14, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0B0E14, transparent)' }} />

      <div className="ticker-wrap">
        <div className="ticker-inner">
          {items.map((v, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-2">
              <span className="font-bebas text-sm tracking-[0.22em] text-[#EFF2F7]/25 whitespace-nowrap uppercase">{v}</span>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#F97316', opacity: 0.4 }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
