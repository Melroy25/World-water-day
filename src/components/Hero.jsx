import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
    const textRef = useRef(null)

    useEffect(() => {
        const el = textRef.current
        if (!el) return
        el.style.opacity = '0'
        el.style.transform = 'translateY(40px)'
        setTimeout(() => {
            el.style.transition = 'opacity 1.2s ease, transform 1.2s ease'
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
        }, 300)
    }, [])

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20"
        >
            <div
                ref={textRef}
                className="relative max-w-4xl w-full mx-auto"
            >
                {/* Top Badge */}
                <div className="flex items-center gap-3 mb-8 text-[#2dd4bf] tracking-widest text-sm font-semibold uppercase">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                        <line x1="4" y1="22" x2="4" y2="15"></line>
                    </svg>
                    MARCH 22, 2026
                </div>

                {/* Big headline */}
                <h1 className="font-display font-bold leading-[1.1] mb-8">
                    <span
                        className="block text-6xl sm:text-8xl md:text-[110px] text-white tracking-tight"
                    >
                        Valuing Every
                    </span>
                    <span
                        className="block text-6xl sm:text-8xl md:text-[110px] text-[#5eead4] tracking-tight mt-2"
                    >
                        Drop
                    </span>
                </h1>

                <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                    2.2 billion people still lack safely managed drinking water. On World
                    Water Day 2026, we spotlight the crisis and champion the solutions that
                    will define our future.
                </p>
                
                {/* Theme Box */}
                <div className="inline-block px-6 py-3 rounded-full border border-[#1e293b] bg-[#0f172a]/50 backdrop-blur-md mb-12">
                    <span className="text-[#2dd4bf] font-medium text-sm md:text-base">
                        2026 Theme: Glacier Preservation — Water for Tomorrow
                    </span>
                </div>

                <br />

                {/* Scroll CTA */}
                <a
                    href="#importance"
                    className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-[#020617] text-lg transition-transform hover:scale-105"
                    style={{
                        background: '#5eead4',
                        boxShadow: '0 0 30px rgba(94, 234, 212, 0.3)',
                    }}
                >
                    Dive In
                </a>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#2dd4bf]/60 animate-bounce">
                <ChevronDown size={24} />
            </div>
        </section>
    )
}
