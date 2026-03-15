import { useEffect } from 'react'

const tips = [
    {
        icon: '🚿',
        title: 'Shorter Showers, Better Playlists',
        desc: 'Cutting your shower time by just 2 minutes saves up to 10 gallons of water. Pick a 5-minute banger and get out when it ends.',
    },
    {
        icon: '🥩',
        title: 'Meatless Mondays (or more)',
        desc: 'It takes 1,800 gallons of water to produce one pound of beef. Swapping meat for plant-based options once a week makes a massive dent in your water footprint.',
    },
    {
        icon: '💧',
        title: 'Turn It Off While Brushing',
        desc: 'Leaving the tap running while you brush your teeth wastes up to 4 gallons a minute. Turn it off and save 200+ gallons a month.',
    },
    {
        icon: '👖',
        title: 'Thrift Your Fits',
        desc: 'A single pair of jeans takes 2,000 gallons of water to make. Buying secondhand or vintage saves water and keeps clothes out of landfills.',
    },
    {
        icon: '📱',
        title: 'Influence for Good',
        desc: 'Use your socials. Share facts about the water crisis, promote sustainable brands, and call out wasteful practices. Awareness is your superpower.',
    },
    {
        icon: '🌱',
        title: 'Support Eco-Friendly Brands',
        desc: 'Vote with your wallet. Support companies that prioritize sustainable water management and use recycled materials in their supply chains.',
    },
]

export default function GenZTips() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-[#010816] pt-32 pb-24 px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tips.map((tip, i) => (
                        <div 
                            key={i} 
                            className="bg-[#0f172a]/60 backdrop-blur-md border border-[#1e293b] rounded-3xl p-8 hover:border-[#2dd4bf]/40 transition-colors hover:-translate-y-1 duration-300 shadow-xl"
                        >
                            <div className="text-4xl mb-4">{tip.icon}</div>
                            <h3 className="font-display font-bold text-2xl text-white mb-3">
                                {tip.title}
                            </h3>
                            <p className="text-[#94a3b8] leading-relaxed">
                                {tip.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Back to Home */}
                <div className="mt-16 text-center">
                    <a href="/" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
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
