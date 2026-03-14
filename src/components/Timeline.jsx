const events = [
    {
        year: '1993',
        title: 'World Water Day Established',
        desc: 'The United Nations General Assembly declared March 22 as World Water Day, first observed in 1993.',
        color: 'ocean-600',
    },
    {
        year: '2000',
        title: 'Millennium Development Goals',
        desc: 'World leaders pledged to halve the proportion of people without access to safe water by 2015.',
        color: 'ocean-500',
    },
    {
        year: '2010',
        title: 'Human Right to Water',
        desc: 'The UN recognized access to clean water and sanitation as a fundamental human right.',
        color: 'teal-600',
    },
    {
        year: '2015',
        title: 'Sustainable Development Goals',
        desc: 'SDG 6 — "Clean Water and Sanitation for All" — was adopted by all member nations.',
        color: 'teal-500',
    },
    {
        year: '2020',
        title: 'Water & Climate Change',
        desc: 'Theme focused on the relationship between water and climate, urging accelerated action.',
        color: 'ocean-400',
    },
    {
        year: '2023',
        title: 'UN 2023 Water Conference',
        desc: 'First major UN water conference in 46 years, producing the Water Action Agenda.',
        color: 'ocean-300',
    },
    {
        year: '2026',
        title: 'Valuing Every Drop 💧',
        desc: 'Theme: Glacier Preservation. SJEC Eco Club leads student-driven water action on campus.',
        color: 'teal-400',
        highlight: true,
    },
]

export default function Timeline() {
    return (
        <section id="timeline" className="relative py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">The Journey</span>
                    <h2 className="section-title mt-2">History of World Water Day</h2>
                    <p className="section-subtitle">From a UN resolution to a global movement — 30+ years of water advocacy.</p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line md:-translate-x-px" />

                    <div className="flex flex-col gap-10">
                        {events.map((e, i) => {
                            const isRight = i % 2 === 0
                            return (
                                <div
                                    key={e.year}
                                    className={`relative flex items-start gap-6 md:gap-0 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Card */}
                                    <div className={`ml-16 md:ml-0 md:w-[45%] ${isRight ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div
                                            className={`glass p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${e.highlight
                                                    ? 'border-teal-400/40 bg-teal-900/20 hover:shadow-teal-500/20'
                                                    : 'hover:shadow-ocean-600/20'
                                                }`}
                                        >
                                            <span
                                                className={`font-display font-black text-2xl ${e.highlight ? 'text-teal-300' : 'text-ocean-400'
                                                    }`}
                                            >
                                                {e.year}
                                            </span>
                                            <h3 className="font-semibold text-white mt-1 mb-2">{e.title}</h3>
                                            <p className="text-ocean-300 text-sm leading-relaxed">{e.desc}</p>
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                                        <div
                                            className={`w-4 h-4 rounded-full border-2 border-ocean-400 ${e.highlight ? 'bg-teal-400 scale-125' : 'bg-ocean-600'
                                                } transition-transform`}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
