import { useState, useEffect } from 'react'
import { Droplets, Menu, X } from 'lucide-react'

const links = [
    { label: 'History', href: '#timeline' },
    { label: 'Smart Tech', href: '#tech' },
    { label: 'Eco Missions', href: '#missions' },
    { label: 'Join Us', href: '#roles' },
    { label: 'Gallery', href: '#gallery' },
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
                <a href="#hero" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-full bg-ocean-600/30 border border-ocean-400/40 flex items-center justify-center group-hover:bg-ocean-500/40 transition-colors">
                        <Droplets size={18} className="text-ocean-300" />
                    </div>
                    <span className="font-display font-bold text-white text-sm leading-tight">
                        WWD <span className="text-ocean-400">2026</span>
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-6">
                    {links.map(l => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="text-sm text-ocean-200 hover:text-white transition-colors font-medium"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a href="#roles" className="hidden md:block btn-primary text-sm py-2 px-4">
                    Join Eco Club
                </a>

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
                                    className="block text-ocean-200 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#roles" onClick={() => setOpen(false)} className="btn-primary block text-center text-sm mt-1">
                                Join Eco Club
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}
