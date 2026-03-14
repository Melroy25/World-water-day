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
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20"
        >
            {/* Frosted glass card overlaying the ocean */}
            <div
                ref={textRef}
                className="relative max-w-3xl mx-auto"
            >
                {/* Glowing badge */}
                <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-cyan-400/40 bg-cyan-900/20 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping absolute" />
                    <span className="w-2 h-2 rounded-full bg-cyan-400 relative" />
                    <span className="text-cyan-300 text-sm font-semibold tracking-wide">March 22, 2026 · World Water Day</span>
                </div>

                {/* Big headline */}
                <h1 className="font-display font-black leading-[1.05] mb-6">
                    <span
                        className="block text-5xl sm:text-7xl md:text-8xl text-white"
                        style={{ textShadow: '0 0 60px rgba(0,200,255,0.4)' }}
                    >
                        Valuing
                    </span>
                    <span
                        className="block text-5xl sm:text-7xl md:text-8xl"
                        style={{
                            background: 'linear-gradient(90deg, #22d3ee, #06b6d4, #2dd4bf, #38bdf8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: 'none',
                        }}
                    >
                        Every Drop.
                    </span>
                </h1>

                <p className="text-cyan-100/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
                    Water is life. It covers 71% of our planet, yet billions live without
                    safe access. This World Water Day, let's understand why every drop counts.
                </p>
                <p className="text-cyan-400/70 text-sm mb-10 italic">
                    2026 Theme: "Glacier Preservation — Water for Tomorrow"
                </p>

                {/* Scroll CTA */}
                <a
                    href="#importance"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:scale-105"
                    style={{
                        background: 'linear-gradient(135deg, #0077be, #14b8a6)',
                        boxShadow: '0 0 30px rgba(0, 150, 200, 0.5), 0 0 60px rgba(0, 150, 200, 0.2)',
                    }}
                >
                    Dive In 🌊
                </a>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cyan-400/60 animate-bounce">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown size={18} />
            </div>
        </section>
    )
}
