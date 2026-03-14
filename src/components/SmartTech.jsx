import { Wifi, Brain, Droplets, BarChart3, Smartphone, Shield } from 'lucide-react'

const techs = [
    {
        icon: Wifi,
        title: 'IoT Leak Detection',
        tag: 'Hardware',
        desc: 'Smart sensors placed across water mains detect micro-leaks in real time, alerting maintenance teams before significant water loss occurs.',
        metric: '30% water saved',
        color: 'from-ocean-700/40 to-ocean-600/20',
        border: 'border-ocean-500/30',
    },
    {
        icon: Brain,
        title: 'AI-Driven Irrigation',
        tag: 'Machine Learning',
        desc: 'Neural networks analyze soil moisture, weather forecasts, and crop type to deliver precise irrigation schedules — no overwatering.',
        metric: '45% efficiency gain',
        color: 'from-teal-700/40 to-teal-600/20',
        border: 'border-teal-500/30',
    },
    {
        icon: BarChart3,
        title: 'Smart Water Metering',
        tag: 'Data Analytics',
        desc: 'Advanced meters track usage patterns at the building level, flagging anomalies and enabling data-driven conservation policies.',
        metric: '25% usage reduction',
        color: 'from-ocean-800/40 to-ocean-600/20',
        border: 'border-ocean-400/30',
    },
    {
        icon: Droplets,
        title: 'Greywater Recycling Systems',
        tag: 'Infrastructure',
        desc: 'Automated greywater treatment cycles wash water from sinks and showers, routing it back for toilet flushing and garden irrigation.',
        metric: '50% less freshwater use',
        color: 'from-teal-800/40 to-ocean-700/20',
        border: 'border-teal-400/30',
    },
    {
        icon: Smartphone,
        title: 'Smart Bin & Campus IoT',
        tag: 'Campus Tech · SJEC',
        desc: 'SJEC\'s IoT lab prototype: sensor-equipped water points across campus monitor consumption and send alerts to a student-managed dashboard.',
        metric: 'Live campus data',
        color: 'from-ocean-600/40 to-teal-700/20',
        border: 'border-ocean-300/30',
    },
    {
        icon: Shield,
        title: 'Water Quality Monitoring',
        tag: 'Environmental',
        desc: 'Electrochemical sensors continuously measure pH, TDS, turbidity, and contaminants, ensuring distributed alerts for safe drinking water.',
        metric: 'Real-time alerts',
        color: 'from-teal-700/40 to-ocean-800/20',
        border: 'border-teal-300/30',
    },
]

export default function SmartTech() {
    return (
        <section id="tech" className="relative py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Innovation</span>
                    <h2 className="section-title mt-2">Smart Water Management</h2>
                    <p className="section-subtitle">How IoT, AI, and data are transforming the world's most precious resource.</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techs.map(tech => {
                        const Icon = tech.icon
                        return (
                            <div
                                key={tech.title}
                                className={`relative glass bg-gradient-to-br ${tech.color} border ${tech.border} p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group`}
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                                    <Icon size={24} className="text-teal-300" />
                                </div>

                                {/* Tag */}
                                <span className="text-xs text-ocean-300 font-medium uppercase tracking-wider">{tech.tag}</span>

                                {/* Title */}
                                <h3 className="font-display font-bold text-white text-lg leading-snug">{tech.title}</h3>

                                {/* Desc */}
                                <p className="text-ocean-200 text-sm leading-relaxed flex-1">{tech.desc}</p>

                                {/* Metric badge */}
                                <div className="mt-auto pt-3 border-t border-white/10">
                                    <span className="text-teal-400 text-sm font-semibold">✦ {tech.metric}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
