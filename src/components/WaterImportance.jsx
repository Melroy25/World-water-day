import { useEffect, useRef } from 'react'
import { Droplet, Sprout, Fish, HeartPulse } from 'lucide-react'

const stats = [
    { value: '2.2B', label: 'People lack safe\ndrinking water', source: 'WHO / UNICEF 2023' },
    { value: '1,000+', label: 'Children die daily\nfrom unsafe water', source: 'GLOBAL HEALTH REPORT' },
    { value: '40%', label: 'Of the world faces\nwater stress', source: 'UN WATER 2025' },
]

const whyCards = [
    {
        title: 'Life Itself',
        img: '/img_life.png',
        body: 'Every living cell depends on water. From regulating body temperature to enabling chemical reactions, water is the molecule of life.',
        Icon: Droplet,
    },
    {
        title: 'Food & Agriculture',
        img: '/img_agri.png',
        body: 'Agriculture accounts for 70% of freshwater use globally. Without irrigation, modern food production would collapse overnight.',
        Icon: Sprout,
    },
    {
        title: 'Ocean Ecosystems',
        img: '/img_eco.png',
        body: 'Oceans produce 50% of Earth\'s oxygen and absorb 30% of CO2. Coral reefs support 25% of all marine species.',
        Icon: Fish,
    },
    {
        title: 'Health & Sanitation',
        img: '/img_health.png',
        body: 'Clean water and sanitation could prevent over a million deaths annually. Access to it is a fundamental human right.',
        Icon: HeartPulse,
    },
]

function RevealCard({ children, delay = 0 }) {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.style.opacity = '0'
        el.style.transform = 'translateY(50px)'
        el.style.transition = `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = '1'
                    el.style.transform = 'translateY(0)'
                }
            },
            { threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [delay])
    return <div ref={ref} className="h-full">{children}</div>
}

export default function WaterImportance() {
    return (
        <section id="importance" className="relative py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <span className="text-[#2dd4bf] text-sm font-bold uppercase tracking-[0.2em]">The Crisis</span>
                    <h2 className="font-display font-bold text-5xl md:text-6xl text-white mt-4 tracking-tight">
                        Why Water Is Irreplaceable
                    </h2>
                </div>

                {/* 3 Stats bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {stats.map((s, i) => (
                        <RevealCard key={s.value} delay={i * 100}>
                            <div className="bg-[#0f172a]/80 backdrop-blur-sm border border-[#1e293b] rounded-2xl p-8 h-full flex flex-col hover:border-[#2dd4bf]/40 transition-colors">
                                <div
                                    className="font-display font-bold text-5xl md:text-6xl mb-4"
                                    style={{
                                        background: 'linear-gradient(135deg, #5eead4, #2dd4bf)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {s.value}
                                </div>
                                <div className="text-white text-lg font-medium leading-relaxed mb-6 whitespace-pre-line flex-1">
                                    {s.label}
                                </div>
                                <div className="text-[#64748b] text-xs font-bold uppercase tracking-widest mt-auto">
                                    {s.source}
                                </div>
                            </div>
                        </RevealCard>
                    ))}
                </div>

                {/* 4 Image Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {whyCards.map((c, i) => (
                        <RevealCard key={c.title} delay={i * 150}>
                            <div className="group relative rounded-3xl overflow-hidden h-[400px]">
                                <img
                                    src={c.img}
                                    alt={c.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent opacity-90" />
                                
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="w-12 h-12 rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 backdrop-blur-md flex items-center justify-center mb-6">
                                        <c.Icon className="text-[#5eead4]" size={24} />
                                    </div>
                                    <h3 className="font-display font-bold text-3xl text-white mb-3">
                                        {c.title}
                                    </h3>
                                    <p className="text-[#94a3b8] leading-relaxed max-w-md">
                                        {c.body}
                                    </p>
                                </div>
                            </div>
                        </RevealCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
