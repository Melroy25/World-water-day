import { useState, useRef, useEffect } from 'react'
import { Play } from 'lucide-react'

const videos = [
    {
        id: 'AxfEVXNm_-4',
        title: 'Water Scarcity — A Global Crisis',
        subtitle: 'Documentary · Water Crisis Explained',
        desc: 'A compelling, data-driven documentary on how water scarcity is affecting billions worldwide and what engineering solutions exist.',
        thumb: 'https://img.youtube.com/vi/AxfEVXNm_-4/maxresdefault.jpg',
        color: 'from-cyan-900/60 to-blue-900/40',
        border: 'border-cyan-400/30',
    },
    {
        id: 'Hmn8-4HA5Bc',
        title: 'The Future of Water',
        subtitle: 'Engineering Solutions · Water Innovation',
        desc: 'How scientists and engineers are revolutionising water treatment, harvesting, and distribution to solve the global water crisis.',
        thumb: 'https://img.youtube.com/vi/Hmn8-4HA5Bc/maxresdefault.jpg',
        color: 'from-teal-900/60 to-emerald-900/40',
        border: 'border-teal-400/30',
    },
]

function VideoCard({ video }) {
    const [playing, setPlaying] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
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
        <div ref={ref} className="flex flex-col gap-4">
            {/* Video frame */}
            <div
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${video.color} border ${video.border} group`}
                style={{
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
                }}
            >
                {playing ? (
                    <iframe
                        className="w-full aspect-video"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&color=white`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <div className="relative w-full aspect-video cursor-pointer" onClick={() => setPlaying(true)}>
                        {/* Thumbnail */}
                        <img
                            src={video.thumb}
                            alt={video.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => { e.target.style.display = 'none' }}
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-[#010d1f]/60 group-hover:bg-[#010d1f]/40 transition-colors" />

                        {/* Water ripple effect overlay */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute left-1/2 top-1/2 rounded-full border border-cyan-400/20 -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        width: `${100 + i * 80}px`,
                                        height: `${100 + i * 80}px`,
                                        animation: `ripplePulse 3s ease-out ${i * 1}s infinite`,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                style={{
                                    background: 'rgba(0, 150, 220, 0.85)',
                                    backdropFilter: 'blur(4px)',
                                    boxShadow: '0 0 40px rgba(0, 180, 255, 0.6), 0 0 80px rgba(0, 120, 200, 0.3)',
                                }}
                            >
                                <Play size={30} className="text-white translate-x-1" fill="white" />
                            </div>
                        </div>

                        {/* Label */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#010d1f] to-transparent">
                            <p className="text-white font-bold text-lg">{video.title}</p>
                            <p className="text-cyan-300 text-xs">{video.subtitle}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Description */}
            <p className="text-cyan-100/65 text-sm leading-relaxed px-1">{video.desc}</p>
        </div>
    )
}

export default function VideosSection() {
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
        <section id="videos" className="relative py-24 px-4">
            <style>{`
        @keyframes ripplePulse {
          0%   { transform: translate(-50%, -50%) scale(0.5); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(2);   opacity: 0; }
        }
      `}</style>

            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-14">
                    <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">Watch & Learn</span>
                    <h2
                        className="font-display font-black text-4xl md:text-5xl text-white mt-3 mb-4"
                        style={{ textShadow: '0 0 40px rgba(0,200,255,0.3)' }}
                    >
                        See It to Believe It
                    </h2>
                    <p className="text-cyan-100/70 text-lg">
                        Two essential videos that bring the water crisis to life — watch, share, and act.
                    </p>
                </div>

                {/* Video grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videos.map(v => (
                        <VideoCard key={v.id} video={v} />
                    ))}
                </div>

                {/* Call to action */}
                <div
                    className="mt-14 rounded-2xl p-8 text-center"
                    style={{
                        background: 'rgba(0, 30, 60, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(0, 180, 255, 0.15)',
                        boxShadow: '0 0 40px rgba(0, 100, 200, 0.1)',
                    }}
                >
                    <div className="text-5xl mb-4">🌊</div>
                    <h3 className="font-display font-bold text-white text-2xl mb-3">
                        Every Drop You Save Matters
                    </h3>
                    <p className="text-cyan-100/70 text-base max-w-xl mx-auto leading-relaxed mb-2">
                        Turn off the tap while brushing. Fix leaks immediately. Use collected rainwater.
                        Eat less water-intensive food. Share this page with someone who needs to see it.
                    </p>
                    <p className="text-cyan-400 font-semibold text-sm mt-4">
                        🏛️ World Water Day — March 22, 2026 · Eco Club SJEC, Mangaluru
                    </p>
                </div>
            </div>
        </section>
    )
}
