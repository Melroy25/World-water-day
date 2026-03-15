import { useEffect } from 'react'

const tips = [
    {
        icon: '🚿',
        title: 'Take Shorter Showers',
        desc: 'Try limiting your shower to 5 minutes. Even reducing by 2–3 minutes can save a lot of water every day.',
        bg: '/img_health.png',
    },
    {
        icon: '🪥',
        title: 'Turn Off While Brushing',
        desc: 'Don’t let water run while brushing teeth. Turn it on only when rinsing.',
        bg: '/stat_children.png',
    },
    {
        icon: '🔧',
        title: 'Fix Leaking Taps',
        desc: 'A small leak can waste hundreds of liters of water a month. If you notice one at home, college, or hostel, report it.',
        bg: '/img_iot.png',
    },
    {
        icon: '🚗',
        title: 'Bucket Over Hose',
        desc: 'Use a bucket instead of a hose for washing vehicles. Buckets use much less water than a running hose.',
        bg: '/stat_stress.png',
    },
    {
        icon: '♻️',
        title: 'Reuse Water',
        desc: 'Water used for washing vegetables or rice can be reused to water plants.',
        bg: '/img_eco.png',
    },
    {
        icon: '👕',
        title: 'Full Washing Loads',
        desc: 'Run washing machines only with full loads. Washing fewer clothes at once wastes water and electricity.',
        bg: '/stat_2_2b.png',
    },
    {
        icon: '🧴',
        title: 'Refillable Bottles',
        desc: 'Use refillable water bottles. This reduces plastic waste and helps you value water instead of wasting half-full bottles.',
        bg: '/img_life.png',
    },
    {
        icon: '📱',
        title: 'Spread Awareness',
        desc: 'Share tips, reels, or posts about saving water to influence friends and followers.',
        bg: '/img_health.png',
    },
    {
        icon: '🌱',
        title: 'Water Plants Smartly',
        desc: 'Water plants early morning or evening. This reduces evaporation so plants actually absorb the water.',
        bg: '/img_agri.png',
    },
    {
        icon: '🥤',
        title: 'No Cafeteria Waste',
        desc: 'Don’t waste drinking water in cafeterias or events. Take only what you will drink instead of filling cups and leaving them half full.',
        bg: '/sjec_green.png',
    },
]

export default function GenZTips() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-[#010816] pt-32 pb-24 px-6 md:px-12 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#2dd4bf] text-sm font-bold uppercase tracking-[0.2em] bg-[#020617]/50 px-4 py-1 rounded-full border border-[#2dd4bf]/20">
                        Take Action
                    </span>
                    <h1 className="font-display font-bold text-5xl md:text-6xl text-white mt-6 mb-6">
                        What Gen Z Can Do
                    </h1>
                    <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed">
                        We are the generation that will feel the impact of the water crisis the most. 
                        But we are also the most powerful. Here is how you can make a real difference starting today.
                    </p>
                </div>

                {/* 10 Action Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {tips.map((tip, i) => (
                        <div 
                            key={i} 
                            className="group relative rounded-3xl overflow-hidden min-h-[300px] shadow-2xl transition-transform duration-500 hover:-translate-y-2 border border-[#1e293b] hover:border-[#2dd4bf]/40"
                        >
                            {/* Background Image */}
                            <img 
                                src={tip.bg} 
                                alt="" 
                                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]/40"></div>
                            
                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="text-4xl mb-4 transform transition-transform duration-500 group-hover:scale-110 origin-bottom-left">
                                    {tip.icon}
                                </div>
                                <h3 className="font-display font-bold text-2xl text-white mb-3 tracking-wide drop-shadow-lg">
                                    {tip.title}
                                </h3>
                                <p className="text-[#94a3b8] text-base leading-relaxed">
                                    {tip.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 11th Item: Simple Idea Banner */}
                <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 mb-16 border border-[#2dd4bf]/30 max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0284c7]/20 to-[#2dd4bf]/20"></div>
                    <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-xl"></div>
                    <div className="relative z-10 text-center flex flex-col items-center">
                        <div className="w-16 h-16 bg-[#2dd4bf]/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
                            <span className="text-3xl">💡</span>
                        </div>
                        <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                            The Power of Collective Action
                        </h3>
                        <p className="text-[#94a3b8] text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                            If every student saves just <strong className="text-[#2dd4bf]">1–2 liters a day</strong>, thousands of liters can be saved in a single college every month.
                        </p>
                    </div>
                </div>

                {/* Back to Home CTA */}
                <div className="text-center">
                    <a href="/" className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
                        style={{
                            background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                            boxShadow: '0 10px 30px rgba(2, 132, 199, 0.3)',
                        }}>
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    )
}
