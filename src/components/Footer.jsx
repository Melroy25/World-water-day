import { Droplets, Instagram, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
    { label: 'Why Water', href: '/#importance' },
    { label: 'History', href: '/#history' },
    { label: 'Watch', href: '/#videos' },
]

export default function Footer() {
    return (
        <footer className="relative pt-12 pb-6 px-4 border-t border-cyan-900/30 z-10 w-full mt-auto bg-[#010816]">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
                
                {/* Links Row */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {/* Logo & Info */}
                    <div className="flex items-center gap-3 mr-auto md:mr-0">
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{
                                background: 'rgba(0, 119, 190, 0.25)',
                                border: '1px solid rgba(0, 200, 255, 0.35)',
                                boxShadow: '0 0 20px rgba(0, 190, 255, 0.2)',
                            }}
                        >
                            <Droplets size={20} className="text-[#2dd4bf]" />
                        </div>
                        <div className="text-left">
                            <p className="font-display font-bold text-white leading-none">World Water Day</p>
                            <p className="text-[#2dd4bf] text-xs mt-1">March 22, 2026</p>
                        </div>
                    </div>

                    <div className="flex-1 min-w-full md:min-w-0" />

                    {/* Nav links */}
                    <div className="flex gap-6 flex-wrap justify-center">
                        {navLinks.map(l => (
                            <Link
                                key={l.href}
                                to={l.href}
                                className="text-cyan-300/70 hover:text-[#2dd4bf] text-sm transition-colors uppercase tracking-wider font-semibold"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex-1 min-w-full md:min-w-0" />

                    {/* Socials & Forms */}
                    <div className="flex items-center gap-4 border-l border-[#1e293b] pl-6 ml-auto md:ml-0">
                        <a 
                            href="https://www.instagram.com/eco.sjec?igsh=MTdpam11bTF0ZTZrYw==" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#1e293b]/50 hover:bg-[#ec4899]/20 border border-[#1e293b] hover:border-[#ec4899]/50 flex items-center justify-center transition-all text-[#94a3b8] hover:text-[#ec4899]"
                            title="Follow us on Instagram"
                        >
                            <Instagram size={18} />
                        </a>
                        <a 
                            href="https://forms.gle/A2w3pBHaHuvUaXtE8" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#2dd4bf]/10 hover:bg-[#2dd4bf]/20 border border-[#2dd4bf]/30 px-5 py-2 rounded-full transition-all text-[#2dd4bf] font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(45,212,191,0.1)] hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                        >
                            Join Eco Club <ExternalLink size={14} />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent w-3/4 max-w-xl" />

                {/* Credit */}
                <div className="flex flex-col gap-1 items-center">
                    <p className="text-[#94a3b8] text-sm">
                        Developed by{' '}
                        <span className="text-[#2dd4bf] font-bold text-base tracking-wide" style={{ textShadow: '0 0 12px rgba(45, 212, 191, 0.4)' }}>Eco Club SJEC</span>
                    </p>
                    <p className="text-[#64748b] text-xs">
                        St. Joseph Engineering College, Mangaluru
                    </p>
                    <p className="text-[#475569] text-xs mt-3">
                        © 2026 · "Every drop counts. Start counting."
                    </p>
                </div>
            </div>
        </footer>
    )
}
