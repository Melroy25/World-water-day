import { Code2, Megaphone, Users, BarChart2 } from 'lucide-react'

const roles = [
    {
        icon: Code2,
        title: 'Tech Lead',
        color: 'text-ocean-300',
        border: 'border-ocean-500/40',
        bg: 'bg-ocean-900/30',
        responsibilities: [
            'Maintain the GitHub repository and Vercel deployment',
            'Build and update the World Water Day website',
            'Develop IoT dashboard for campus water monitoring',
            'Manage CI/CD pipeline and code reviews',
        ],
        skills: ['React / Next.js', 'IoT / Arduino', 'Git', 'Vercel'],
        count: '2–3 students',
    },
    {
        icon: Megaphone,
        title: 'Content Creator',
        color: 'text-teal-300',
        border: 'border-teal-500/40',
        bg: 'bg-teal-900/30',
        responsibilities: [
            'Source and curate water-themed animations and videos',
            'Create social media graphics and reels about water facts',
            'Design posters and QR code display cards',
            'Write blog posts and caption copy for campaigns',
        ],
        skills: ['Canva / Figma', 'Video Editing', 'Social Media', 'Copywriting'],
        count: '2–4 students',
    },
    {
        icon: Users,
        title: 'Ground Volunteer',
        color: 'text-ocean-400',
        border: 'border-ocean-400/40',
        bg: 'bg-ocean-900/20',
        responsibilities: [
            'Manage physical Fingerprint Tree installation',
            'Operate sanitation stations on event day',
            'Coordinate student pledge drives and awareness walks',
            'Distribute informational leaflets across departments',
        ],
        skills: ['Event Management', 'Leadership', 'Communication', 'Teamwork'],
        count: '10+ students',
    },
    {
        icon: BarChart2,
        title: 'Data Analyst',
        color: 'text-teal-400',
        border: 'border-teal-400/40',
        bg: 'bg-teal-900/20',
        responsibilities: [
            'Track water usage metrics across SJEC campus',
            'Compile and visualise daily consumption reports',
            'Analyse IoT sensor data for leak patterns',
            'Present findings to faculty and Eco Club leadership',
        ],
        skills: ['Python / Excel', 'Power BI', 'IoT Data', 'Statistics'],
        count: '2–3 students',
    },
]

export default function StudentRoles() {
    return (
        <section id="roles" className="relative py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Get Involved</span>
                    <h2 className="section-title mt-2">Join the Movement</h2>
                    <p className="section-subtitle">Every student has a role to play. Find yours below.</p>
                </div>

                {/* Role cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {roles.map(role => {
                        const Icon = role.icon
                        return (
                            <div
                                key={role.title}
                                className={`glass ${role.bg} border ${role.border} p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group`}
                            >
                                {/* Icon + title */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                                        <Icon size={20} className={role.color} />
                                    </div>
                                    <h3 className={`font-display font-bold text-lg ${role.color}`}>{role.title}</h3>
                                </div>

                                {/* Responsibilities */}
                                <ul className="flex flex-col gap-2 flex-1">
                                    {role.responsibilities.map((r, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-ocean-200">
                                            <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-teal-500" />
                                            {r}
                                        </li>
                                    ))}
                                </ul>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                                    {role.skills.map(s => (
                                        <span key={s} className="text-xs bg-white/10 text-ocean-300 px-2 py-0.5 rounded-full">{s}</span>
                                    ))}
                                </div>

                                {/* Count */}
                                <p className="text-xs text-ocean-400 font-medium">👥 {role.count}</p>
                            </div>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <div className="glass inline-block px-8 py-6 rounded-2xl max-w-lg mx-auto">
                        <p className="text-ocean-200 text-sm mb-4">
                            Interested in joining the SJEC Eco Club for World Water Day 2026?<br />
                            Reach out to us through your department coordinator or drop a message below.
                        </p>
                        <a
                            href="mailto:ecoclub@sjec.ac.in"
                            className="btn-primary inline-flex items-center gap-2 text-sm"
                        >
                            📩 Contact the Eco Club
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
