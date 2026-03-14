import { useEffect, useRef } from 'react'

const stats = [
    { value: '71%', label: 'of Earth Is Water', icon: '🌍', detail: 'Yet only 3% is freshwater — the rest is saltwater in oceans.' },
    { value: '2.2B', label: 'Lack Safe Drinking Water', icon: '🔴', detail: 'Over 2.2 billion people drink contaminated or unsafe water daily.' },
    {
        value: '3.6B', label: 'Face Water Scarcity', icon: '⚠️', detail: 'Half the world\'s population experiences severe water scarcity at least one month per year.'
    },
    { value: '785M', label: 'Have No Basic Service', icon: '💧', detail: '785 million people lack even a basic drinking-water service close to home.' },
    { value: '1,000+', label: 'Children Die Daily', icon: '🧒', detail: 'More than 1,000 children die every day from diarrhoea caused by unsafe water.' },
    { value: '40%', label: 'Global Water Stress', icon: '🌡️', detail: 'About 40% of the world\'s population is affected by water scarcity today.' },
]

const whyCards = [
    {
        title: 'Life Itself',
        img: '/img_life.png',
        body: 'The human body is 60% water. Every cell, organ, and tissue depends on it. Without water, life ceases within days.',
        color: 'from-cyan-900/50 to-blue-900/30',
        border: 'border-cyan-500/30',
    },
    {
        title: 'Food & Agriculture',
        img: '/img_agri.png',
        body: 'Agriculture consumes 70% of all freshwater withdrawals globally. Smart irrigation and precision farming can reduce usage by 50%.',
        color: 'from-emerald-900/50 to-teal-900/30',
        border: 'border-emerald-500/30',
    },
    {
        title: 'Ocean Ecosystems',
        img: '/img_eco.png',
        body: 'Rivers, lakes, and wetlands support biodiversity for millions of species. Water ecosystems are our planet\'s lungs and food source.',
        color: 'from-blue-900/50 to-indigo-900/30',
        border: 'border-blue-500/30',
    },
    {
        title: 'Health & Sanitation',
        img: '/img_health.png',
        body: 'Safe water and sanitation can prevent 80% of all diseases in developing countries. Clean water saves more lives than medicine.',
        color: 'from-violet-900/50 to-purple-900/30',
        border: 'border-violet-500/30',
    },
    {
        title: 'Water Treatment Engineering',
        img: '/img_plant.png',
        body: 'Civil and environmental engineers design water treatment plants, reverse osmosis systems, and UV purification to deliver safe water at scale.',
        color: 'from-sky-900/50 to-cyan-900/30',
        border: 'border-sky-500/30',
    },
    {
        title: 'Glaciers Under Threat',
        img: '/img_glacier.png',
        body: 'Glaciers hold 69% of the world\'s freshwater. Climate change is melting them 3× faster — threatening billions who depend on glacier-fed rivers.',
        color: 'from-slate-900/50 to-blue-900/30',
        border: 'border-slate-500/30',
    },
]

function useScrollReveal(ref) {
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = '1'
                    el.style.transform = 'translateY(0)'
                }
            },
            { threshold: 0.1 }
        )
        el.style.opacity = '0'
        el.style.transform = 'translateY(50px)'
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        observer.observe(el)
        return () => observer.disconnect()
    }, [])
}

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
    return <div ref={ref}>{children}</div>
}

export default function WaterImportance() {
    const headerRef = useRef(null)
    useScrollReveal(headerRef)

    return (
        <section id="importance" className="relative py-24 px-4">
            {/* Frosted section header */}
            <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">Why Water Matters</span>
                <h2
                    className="font-display font-black text-4xl md:text-5xl text-white mt-3 mb-4"
                    style={{ textShadow: '0 0 40px rgba(0,200,255,0.3)' }}
                >
                    The Crisis Beneath the Surface
                </h2>
                <p className="text-cyan-100/70 text-lg leading-relaxed">
                    Water isn't just a resource — it's the foundation of life, health, food, and the economy.
                    Yet a global crisis is deepening silently.
                </p>
            </div>

            {/* Stats bar */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {stats.map((s, i) => (
                        <RevealCard key={s.label} delay={i * 80}>
                            <div
                                className="group relative rounded-2xl p-5 text-center cursor-default overflow-hidden hover:-translate-y-2 transition-all duration-300"
                                style={{
                                    background: 'rgba(0, 30, 60, 0.6)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(0, 180, 255, 0.15)',
                                    boxShadow: '0 0 20px rgba(0,100,200,0.1)',
                                }}
                            >
                                <div className="text-3xl mb-1">{s.icon}</div>
                                <div
                                    className="font-display font-black text-3xl md:text-4xl mb-1"
                                    style={{
                                        background: 'linear-gradient(90deg, #22d3ee, #2dd4bf)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {s.value}
                                </div>
                                <div className="text-cyan-200 text-xs font-semibold uppercase tracking-wide">{s.label}</div>
                                {/* Tooltip on hover */}
                                <div className="absolute inset-0 bg-[#001428]/90 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                                    <p className="text-cyan-100 text-xs leading-relaxed">{s.detail}</p>
                                </div>
                            </div>
                        </RevealCard>
                    ))}
                </div>
            </div>

            {/* Why cards */}
            <div className="max-w-6xl mx-auto">
                <RevealCard>
                    <h3 className="text-center font-display font-bold text-2xl text-white mb-8">
                        🌊 Why Water Is Irreplaceable
                    </h3>
                </RevealCard>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {whyCards.map((c, i) => (
                        <RevealCard key={c.title} delay={i * 100}>
                            <div
                                className={`bg-gradient-to-br ${c.color} border ${c.border} rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full`}
                                style={{
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                                }}
                            >
                                {/* Card image */}
                                <div className="relative w-full h-40 overflow-hidden">
                                    <img
                                        src={c.img}
                                        alt={c.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#010d1f]/80 via-transparent to-transparent" />
                                </div>
                                {/* Card text */}
                                <div className="p-5 flex flex-col gap-2 flex-1">
                                    <h4 className="font-display font-bold text-white text-lg">{c.title}</h4>
                                    <p className="text-cyan-100/75 text-sm leading-relaxed">{c.body}</p>
                                </div>
                            </div>
                        </RevealCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
