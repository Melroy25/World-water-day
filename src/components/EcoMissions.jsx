import { Recycle, CloudRain, Leaf, Zap } from 'lucide-react'

const missions = [
    {
        icon: Recycle,
        title: 'Greywater Recycling at SJEC',
        desc: 'Pilot project to collect and treat water from hostel wash areas, redirecting it for campus garden irrigation — cutting freshwater demand by nearly 40%.',
        steps: ['Install greywater collection pipes in Block A hostels', 'Biofilter treatment unit in campus garden', 'Monitor output via IoT water meter'],
        tag: 'Infrastructure Mission',
        color: 'from-teal-900/50 to-ocean-900/30',
    },
    {
        icon: CloudRain,
        title: 'Rainwater Harvesting',
        desc: 'Revamping SJEC\'s existing rooftop catchment system with better filtration and a dedicated 50,000-litre underground tank for non-potable reuse.',
        steps: ['Audit current rooftop area (approx. 3000 m²)', 'Install leaf guards and first-flush diverters', 'Connect to campus toilet flushing network'],
        tag: 'Campus Project',
        color: 'from-ocean-900/50 to-teal-900/30',
    },
    {
        icon: Leaf,
        title: 'Fingerprint Tree Wall',
        desc: 'A physical installation in the college foyer — every student who pledges to conserve water adds their thumbprint to a growing tree mural.',
        steps: ['Design and print tree mural on canvas banner', 'Set up pledge station with ink pads', 'Photograph completed mural for social media'],
        tag: 'Awareness Campaign',
        color: 'from-teal-800/50 to-ocean-800/30',
    },
    {
        icon: Zap,
        title: 'Sanitation Stations',
        desc: 'Deploy touch-free, water-efficient handwashing stations near canteens and labs, using smart flow restrictors that save up to 60% water per wash cycle.',
        steps: ['Source sensor-based tap hardware', 'Install 5 stations across campus', 'Track usage data with embedded counter'],
        tag: 'Hardware Deployment',
        color: 'from-ocean-800/50 to-teal-800/30',
    },
]

export default function EcoMissions() {
    return (
        <section id="missions" className="relative py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Eco Club · SJEC</span>
                    <h2 className="section-title mt-2">Water-Saving Missions</h2>
                    <p className="section-subtitle">Real initiatives driving measurable impact right here on campus.</p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {missions.map(m => {
                        const Icon = m.icon
                        return (
                            <div
                                key={m.title}
                                className={`glass bg-gradient-to-br ${m.color} p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean-900/30 transition-all duration-300 group`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                        <Icon size={24} className="text-teal-300" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-ocean-400 uppercase tracking-wider font-medium">{m.tag}</span>
                                        <h3 className="font-display font-bold text-white text-lg mt-0.5">{m.title}</h3>
                                    </div>
                                </div>

                                <p className="text-ocean-200 text-sm leading-relaxed">{m.desc}</p>

                                {/* Steps */}
                                <ul className="flex flex-col gap-2 mt-1">
                                    {m.steps.map((s, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-ocean-300">
                                            <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full border border-teal-500/50 flex items-center justify-center text-teal-400 text-xs font-bold">
                                                {i + 1}
                                            </span>
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
