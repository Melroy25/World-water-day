import { useState, useEffect } from 'react'
import { Droplets, Menu, X } from 'lucide-react'

const links = [
    { label: 'WHY WATER', href: '#importance' },
    { label: 'HISTORY', href: '#history' },
    { label: 'SOLUTIONS', href: '#engineering' },
    { label: 'WATCH', href: '#videos' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-3 shadow-xl shadow-ocean-900/40' : 'py-5 bg-transparent'
                }`}
        >
            <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full border border-[#2dd4bf] flex items-center justify-center group-hover:bg-[#2dd4bf]/20 transition-colors">
                        <Droplets size={18} className="text-[#2dd4bf]" />
                    </div>
                    <span className="font-display font-bold text-white text-lg tracking-wide leading-tight flex flex-col pt-1">
                        <span>World Water</span>
                        <span>Day</span>
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8 ml-8">
                    {links.map(l => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="text-[13px] tracking-widest text-[#94a3b8] hover:text-white transition-colors font-medium uppercase"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA - Just Text for Eco Club as requested */}
                <span className="hidden md:flex items-center text-[#2dd4bf] font-medium tracking-wide">
                    &mdash; Eco Club
                </span>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden glass-dark mx-4 mt-2 rounded-2xl p-4">
                    <ul className="flex flex-col gap-3">
                        {links.map(l => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="block text-[#94a3b8] hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors tracking-widest text-[13px] uppercase"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <span className="block text-[#2dd4bf] py-2 px-3 tracking-wide">
                                &mdash; Eco Club
                            </span>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}
