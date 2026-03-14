import { useEffect, useRef } from 'react'

const innovations = [
    {
        title: 'Reverse Osmosis (RO) Desalination',
        desc: 'Engineering plants that force seawater through semi-permeable membranes at extreme high pressure, removing salt and impurities to create millions of gallons of fresh drinking water daily.',
        color: 'from-blue-600/20 to-cyan-600/10',
        border: 'border-blue-500/30',
    },
    {
        title: 'Atmospheric Water Generation',
        desc: 'Futuristic systems that use thermodynamics and advanced condensers to extract pure, drinkable water directly from the humidity in the ambient air, even in arid climates.',
        color: 'from-cyan-600/20 to-teal-600/10',
        border: 'border-cyan-500/30',
    },
    {
        title: 'Smart IoT Leak Detection',
        desc: 'Underground acoustic sensors and AI-driven flow meters that constantly monitor municipal pipelines, identifying micro-leaks in real time to prevent billions of gallons of lost water.',
        color: 'from-teal-600/20 to-emerald-600/10',
        border: 'border-teal-500/30',
    },
    {
        title: 'Wastewater Bioreactors',
        desc: 'Closed-loop ecological engineering systems combining membrane filtration with specific bacteria cultures to purify raw sewage back into ultra-clean, potable drinking water.',
        color: 'from-emerald-600/20 to-green-600/10',
        border: 'border-emerald-500/30',
    },
]

export default function EngineeringSection() {
    const headerRef = useRef(null)

    useEffect(() => {
        const el = headerRef.current
        if (!el) return
        el.style.opacity = '0'
        el.style.transform = 'translateY(40px)'
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
        }, { threshold: 0.1 })
        io.observe(el)
        return () => io.disconnect()
    }, [])

    return (
        <section id="engineering" className="relative py-24 px-4 border-t border-cyan-900/30 mt-12 bg-[#010a18]/40">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-16">
                    <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">The Solution</span>
                    <h2
                        className="font-display font-black text-4xl md:text-5xl text-white mt-3 mb-4"
                        style={{ textShadow: '0 0 40px rgba(0,200,255,0.3)' }}
                    >
                        Engineering the Future of Water
                    </h2>
                    <p className="text-cyan-100/70 text-lg max-w-3xl mx-auto leading-relaxed">
                        While the crisis is severe, human ingenuity is fighting back. Engineers and scientists are
                        developing revolutionary technologies to harvest, purify, and distribute water on a massive scale.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {innovations.map((inv, i) => (
                        <div
                            key={inv.title}
                            className={`bg-gradient-to-br ${inv.color} border ${inv.border} rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
                            style={{
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
                                animationDelay: `${i * 150}ms`,
                            }}
                        >
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 rounded-full border border-cyan-500/40 bg-[#010d1f]/50 flex items-center justify-center mb-2">
                                    <span className="text-cyan-300 font-bold font-display text-lg">0{i + 1}</span>
                                </div>
                                <h3 className="font-display font-bold text-white text-xl">{inv.title}</h3>
                                <p className="text-cyan-100/75 leading-relaxed text-sm">{inv.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Circuit graphic overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d8ff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>
        </section>
    )
}
