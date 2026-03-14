import { useEffect, useRef } from 'react'

const events = [
    {
        year: '1977',
        title: 'Mar del Plata Conference',
        desc: 'The first UN Water Conference is held in Argentina — the earliest global recognition of the water crisis.',
        icon: '🌐',
        color: '#22d3ee',
    },
    {
        year: '1992',
        title: 'Earth Summit, Rio de Janeiro',
        desc: 'World leaders at the Rio Summit endorse a global framework for sustainable water management.',
        icon: '🌿',
        color: '#34d399',
    },
    {
        year: '1993',
        title: 'World Water Day Born',
        desc: 'The UN General Assembly officially designates March 22 as World Water Day, first observed in 1993.',
        icon: '💧',
        color: '#38bdf8',
    },
    {
        year: '2000',
        title: 'Millennium Development Goals',
        desc: 'World leaders pledge to halve the proportion of people without safe water access by 2015.',
        icon: '🎯',
        color: '#a78bfa',
    },
    {
        year: '2010',
        title: 'A Human Right',
        desc: 'The UN declares access to clean water and sanitation as a fundamental human right — a historic milestone.',
        icon: '⚖️',
        color: '#fb923c',
    },
    {
        year: '2015',
        title: 'SDG Goal 6 Adopted',
        desc: '"Clean Water and Sanitation for All" — SDG 6 is adopted by all 193 UN member nations.',
        icon: '🌱',
        color: '#4ade80',
    },
    {
        year: '2020',
        title: 'Water & Climate Change',
        desc: 'WWD theme highlights the deep link between water and the climate crisis, urguing faster action.',
        icon: '🌡️',
        color: '#f472b6',
    },
    {
        year: '2023',
        title: 'UN 2023 Water Conference',
        desc: 'The first major UN Water Conference in 46 years — the Water Action Agenda commits $300 billion in pledges.',
        icon: '🏛️',
        color: '#60a5fa',
    },
    {
        year: '2026',
        title: 'Glacier Preservation 💧',
        desc: 'Theme: Protecting glaciers — the freshwater towers of the world — for billions of future lives.',
        icon: '🏔️',
        color: '#2dd4bf',
        highlight: true,
    },
]

function RevealItem({ children, delay = 0 }) {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.style.opacity = '0'
        el.style.transform = 'translateX(-30px)'
        el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                el.style.opacity = '1'
                el.style.transform = 'translateX(0)'
            }
        }, { threshold: 0.15 })
        io.observe(el)
        return () => io.disconnect()
    }, [delay])
    return <div ref={ref}>{children}</div>
}

export default function HistorySection() {
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
        <section id="history" className="relative py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-16">
                    <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">The Journey</span>
                    <h2
                        className="font-display font-black text-4xl md:text-5xl text-white mt-3 mb-4"
                        style={{ textShadow: '0 0 40px rgba(0,200,255,0.3)' }}
                    >
                        History of World Water Day
                    </h2>
                    <p className="text-cyan-100/70 text-lg">
                        From the first UN water conference in 1977 to the global movement it is today — here's how it all began.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Glowing center line */}
                    <div
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
                        style={{
                            background: 'linear-gradient(to bottom, transparent, #22d3ee 10%, #0d9488 90%, transparent)',
                            boxShadow: '0 0 8px rgba(0, 200, 255, 0.4)',
                        }}
                    />

                    <div className="flex flex-col gap-10">
                        {events.map((ev, i) => {
                            const isRight = i % 2 === 0
                            return (
                                <RevealItem key={ev.year} delay={i * 80}>
                                    <div className={`relative flex items-start gap-6 md:gap-0 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        {/* Card */}
                                        <div className={`ml-16 md:ml-0 md:w-[45%] ${isRight ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                            <div
                                                className={`relative p-5 rounded-2xl hover:-translate-y-1 transition-all duration-300 ${ev.highlight ? 'border border-teal-400/50' : 'border border-white/8'
                                                    }`}
                                                style={{
                                                    background: ev.highlight
                                                        ? 'rgba(0, 60, 80, 0.7)'
                                                        : 'rgba(0, 20, 50, 0.65)',
                                                    backdropFilter: 'blur(12px)',
                                                    boxShadow: ev.highlight
                                                        ? `0 0 30px rgba(45, 212, 191, 0.2), 0 4px 20px rgba(0,0,0,0.4)`
                                                        : '0 4px 20px rgba(0,0,0,0.3)',
                                                }}
                                            >
                                                <div className="flex items-center gap-2 mb-2 flex-wrap" style={{ justifyContent: isRight ? 'flex-end' : 'flex-start' }}>
                                                    <span className="text-xl">{ev.icon}</span>
                                                    <span
                                                        className="font-display font-black text-2xl"
                                                        style={{ color: ev.color }}
                                                    >
                                                        {ev.year}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-white text-base mb-1">{ev.title}</h3>
                                                <p className="text-cyan-100/65 text-sm leading-relaxed">{ev.desc}</p>
                                            </div>
                                        </div>

                                        {/* Dot */}
                                        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                                            <div
                                                className={`w-4 h-4 rounded-full border-2 transition-transform ${ev.highlight ? 'scale-125' : ''}`}
                                                style={{
                                                    borderColor: ev.color,
                                                    backgroundColor: ev.highlight ? ev.color : '#010d1f',
                                                    boxShadow: `0 0 10px ${ev.color}80`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </RevealItem>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
