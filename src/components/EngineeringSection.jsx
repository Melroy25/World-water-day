import { useEffect, useRef } from 'react'

const initiatives = [
    {
        title: 'Lush Green Campus',
        img: 'https://sjec.ac.in/storage/files/general/Cover%20photo%20Lush%20Green%20Campus.jpg',
    },
    {
        title: 'Vermicomposting',
        img: 'https://sjec.ac.in/storage/files/general/Vermicomposting%20(2).jpg',
    },
    {
        title: 'In-house Sewage Treatment Plant',
        img: 'https://sjec.ac.in/storage/files/general/In%20house%20Sewage%20treatment%20plant.jpg',
    },
    {
        title: 'Waste Segregation Unit',
        img: 'https://sjec.ac.in/storage/files/general/Waste%20Seggregation%20Unit.jpg',
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
    return <div ref={ref} className="h-full">{children}</div>
}

export default function EngineeringSection() {
    return (
        <section id="engineering" className="relative py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                
                {/* SJEC Green Initiatives Main Header */}
                <div className="text-center mb-16">
                    <span className="text-[#2dd4bf] text-sm font-bold uppercase tracking-[0.2em] bg-[#020617]/50 px-4 py-1 rounded-full border border-[#2dd4bf]/20 backdrop-blur-md">
                        Campus Green Policy
                    </span>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-6 mb-6">
                        SJEC Green Initiatives
                    </h2>
                    <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto leading-relaxed">
                        St Joseph Engineering College, Mangaluru, is committed to environmental 
                        stewardship through comprehensive green policies. From waste segregation to 
                        in-house sewage treatment, we are fostering a sustainable future.
                    </p>
                </div>

                {/* 4 Image Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {initiatives.map((item, i) => (
                        <RevealCard key={i} delay={i * 150}>
                            <div className="group relative bg-[#0f172a]/60 backdrop-blur-md border border-[#1e293b] rounded-3xl overflow-hidden h-[350px] hover:border-[#2dd4bf]/40 transition-colors shadow-2xl">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#010816] via-[#010816]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-75"></div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 transition-transform group-hover:translate-y-0">
                                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </RevealCard>
                    ))}
                </div>

            </div>
        </section>
    )
}
