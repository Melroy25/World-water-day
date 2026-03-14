import { Droplets } from 'lucide-react'

const navLinks = [
    { label: 'Why Water', href: '#importance' },
    { label: 'History', href: '#history' },
    { label: 'Watch', href: '#videos' },
]

export default function Footer() {
    return (
        <footer className="relative pt-12 pb-6 px-4 border-t border-cyan-900/30 z-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                            background: 'rgba(0, 119, 190, 0.25)',
                            border: '1px solid rgba(0, 200, 255, 0.35)',
                            boxShadow: '0 0 20px rgba(0, 190, 255, 0.2)',
                        }}
                    >
                        <Droplets size={20} className="text-cyan-300" />
                    </div>
                    <div className="text-left">
                        <p className="font-display font-bold text-white leading-none">World Water Day</p>
                        <p className="text-cyan-400 text-xs">March 22, 2026</p>
                    </div>
                </div>

                {/* Nav links */}
                <div className="flex gap-6 flex-wrap justify-center">
                    {navLinks.map(l => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-cyan-300/70 hover:text-cyan-200 text-sm transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="https://www.un.org/en/observances/water-day"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300/70 hover:text-cyan-200 text-sm transition-colors"
                    >
                        UN Water ↗
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-cyan-700/40 to-transparent" />

                {/* Credit */}
                <p className="text-cyan-500/70 text-sm mt-2">
                    Developed by{' '}
                    <span className="text-cyan-300 font-bold text-base tracking-wide" style={{ textShadow: '0 0 12px rgba(34, 211, 238, 0.5)' }}>Eco Club SJEC</span>
                    <span className="block text-xs text-cyan-500/50 mt-1">St. Joseph Engineering College, Mangaluru</span>
                </p>
                <p className="text-cyan-600/40 text-xs">
                    © 2026 · "Every drop counts. Start counting."
                </p>
            </div>
        </footer>
    )
}
