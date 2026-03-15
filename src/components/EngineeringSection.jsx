import { useEffect, useRef } from 'react'
import { Leaf, Droplet, TreePine, Wind } from 'lucide-react'

const initiatives = [
    {
        title: 'Rainwater Harvesting Systems across campus buildings',
        Icon: Droplet,
    },
    {
        title: 'Water conservation drives reducing usage by 35%',
        Icon: Leaf,
    },
    {
        title: 'Pollution-free campus with extensive green cover',
        Icon: TreePine,
    },
    {
        title: 'Sustainable waste management and recycling programs',
        Icon: Wind,
    },
]

function RevealCard({ children, delay = 0 }) {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
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

export default function EngineeringSection() {
    return (
        <section id="engineering" className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#010816]">
            <div className="max-w-4xl mx-auto flex flex-col gap-8">
                
                {/* Future of Water Card */}
                <RevealCard>
                    <div className="bg-[#0f172a] rounded-3xl p-10 border border-[#1e293b] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/50 to-transparent z-0"></div>
                        <div className="relative z-10">
                            <h3 className="font-display font-bold text-3xl text-white mb-4">
                                The Future of Water
                            </h3>
                            <p className="text-[#94a3b8] text-lg">
                                How technology and policy are coming together to solve the water crisis.
                            </p>
                        </div>
                    </div>
                </RevealCard>

                {/* SJEC Green Initiatives Main Card */}
                <RevealCard delay={100}>
                    <div className="bg-[#0f172a] rounded-3xl p-10 md:p-14 border border-[#1e293b]">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 flex items-center justify-center">
                                <Leaf className="text-[#2dd4bf]" size={18} />
                            </div>
                            <span className="text-[#2dd4bf] text-sm font-bold uppercase tracking-[0.2em]">
                                Campus Green Policy
                            </span>
                        </div>
                        
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
                            SJEC Green Initiatives
                        </h2>
                        
                        <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                            St Joseph Engineering College, Mangaluru, is committed to environmental 
                            stewardship through comprehensive green policies. The campus integrates 
                            rainwater harvesting systems, promotes water conservation awareness among 
                            students, and maintains a pollution-free environment through sustainable 
                            practices.
                        </p>
                        
                        <p className="text-[#94a3b8] text-lg leading-relaxed mb-12">
                            As a recognized green campus, SJEC actively engages students in eco-drives, 
                            tree plantation campaigns, and water audit programs — fostering the next 
                            generation of environmentally conscious engineers.
                        </p>

                        {/* 4 List Items */}
                        <div className="flex flex-col gap-4">
                            {initiatives.map((item, i) => (
                                <RevealCard key={i} delay={200 + (i * 100)}>
                                    <div className="bg-[#020617]/50 border border-[#1e293b] rounded-2xl p-6 flex items-center gap-6 hover:border-[#2dd4bf]/30 transition-colors">
                                        <item.Icon className="text-[#2dd4bf] flex-shrink-0" size={24} />
                                        <span className="text-white text-lg font-medium">{item.title}</span>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </RevealCard>

            </div>
        </section>
    )
}
