import { useRef, useState } from 'react'
import { Play, Pause, Volume2 } from 'lucide-react'

const YOUTUBE_ID = 'n84KV1scsQY'

// Animated water drop SVG
function WaterDropIcon({ size = 48 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M32 4C32 4 12 26 12 38a20 20 0 0040 0C52 26 32 4 32 4z"
                fill="url(#dropGrad)"
                className="animate-float"
            />
            <ellipse cx="25" cy="34" rx="4" ry="6" fill="white" fillOpacity="0.2" />
            <defs>
                <linearGradient id="dropGrad" x1="32" y1="4" x2="32" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#33a7df" />
                    <stop offset="1" stopColor="#0d9488" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const facts = [
    { emoji: '🌍', text: 'Only 3% of Earth\'s water is fresh — most of it locked in ice caps.' },
    { emoji: '🚰', text: 'A dripping tap can waste over 11,000 litres of water per year.' },
    { emoji: '👕', text: 'A single cotton T-shirt takes 2,700 litres of water to produce.' },
    { emoji: '🥩', text: '1 kg of beef requires 15,400 litres of water to produce.' },
    { emoji: '🏗️', text: 'By 2028, over 5 billion people could face water shortages.' },
]

export default function MediaGallery() {
    const [playing, setPlaying] = useState(false)
    const iframeRef = useRef(null)

    const togglePlay = () => {
        setPlaying(p => !p)
    }

    return (
        <section id="gallery" className="relative py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Media</span>
                    <h2 className="section-title mt-2">Why Water Matters</h2>
                    <p className="section-subtitle">Watch, learn, and share — because awareness is the first step to action.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* YouTube Video */}
                    <div className="flex flex-col gap-4">
                        <div className="glass rounded-2xl overflow-hidden relative group">
                            {playing ? (
                                <iframe
                                    ref={iframeRef}
                                    className="w-full aspect-video"
                                    src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                                    title="Importance of Water — UN Water"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="relative w-full aspect-video bg-gradient-to-br from-ocean-900 to-teal-900 flex flex-col items-center justify-center gap-6">
                                    {/* Animated drops */}
                                    <div className="flex gap-4 animate-float">
                                        {[0, 1, 2].map(i => (
                                            <div key={i} style={{ animationDelay: `${i * 0.4}s` }}>
                                                <WaterDropIcon size={40 + i * 8} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <p className="text-white font-display font-bold text-xl">Importance of Water</p>
                                        <p className="text-ocean-300 text-sm mt-1">UN Water — Official Documentary</p>
                                    </div>
                                    <button
                                        onClick={togglePlay}
                                        className="flex items-center gap-2 btn-primary mt-2"
                                        aria-label="Play video"
                                    >
                                        <Play size={18} /> Play Video
                                    </button>

                                    {/* Subtle wave overlay */}
                                    <svg
                                        className="absolute bottom-0 left-0 right-0 w-full"
                                        viewBox="0 0 600 60"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M0,30 C150,60 450,0 600,30 L600,60 L0,60 Z"
                                            fill="rgba(0, 119, 190, 0.2)"
                                        />
                                        <path
                                            d="M0,40 C200,10 400,50 600,20 L600,60 L0,60 Z"
                                            fill="rgba(13, 148, 136, 0.15)"
                                        />
                                    </svg>
                                </div>
                            )}

                            {playing && (
                                <button
                                    onClick={togglePlay}
                                    className="absolute top-3 right-3 glass p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
                                    aria-label="Stop video"
                                >
                                    <Pause size={16} />
                                </button>
                            )}
                        </div>
                        <p className="text-ocean-400 text-xs text-center">
                            Source: UN-Water Official · <a href={`https://youtu.be/${YOUTUBE_ID}`} target="_blank" rel="noopener noreferrer" className="text-ocean-300 underline">View on YouTube</a>
                        </p>
                    </div>

                    {/* Water Facts */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-display font-bold text-white text-xl mb-2">
                            💧 Did You Know?
                        </h3>
                        {facts.map((f, i) => (
                            <div
                                key={i}
                                className="glass p-4 rounded-xl flex items-start gap-3 hover:bg-white/8 transition-colors"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <span className="text-2xl">{f.emoji}</span>
                                <p className="text-ocean-200 text-sm leading-relaxed">{f.text}</p>
                            </div>
                        ))}

                        {/* Wave animation canvas */}
                        <div className="glass rounded-2xl p-5 mt-2 flex items-center gap-4 bg-gradient-to-r from-ocean-900/50 to-teal-900/30">
                            <Volume2 size={28} className="text-teal-400 shrink-0" />
                            <div>
                                <p className="text-white font-semibold text-sm">Sound of Change</p>
                                <p className="text-ocean-300 text-xs mt-0.5">
                                    Every conversation about water creates ripples of awareness that reach far beyond the classroom.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
