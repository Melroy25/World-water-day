import { useState, useEffect } from 'react'
import { Droplets, Menu, X, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const links = [
    { label: 'WHY WATER', href: '/#importance' },
    { label: 'HISTORY', href: '/#history' },
    { label: 'SOLUTIONS', href: '/#engineering' },
    { label: 'WATCH', href: '/#videos' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const isSpecialPage = location.pathname !== '/'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isSpecialPage ? 'glass-dark py-3 shadow-xl shadow-ocean-900/40' : 'py-5 bg-transparent'
                }`}
        >
            <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full border border-[#2dd4bf] flex items-center justify-center group-hover:bg-[#2dd4bf]/20 transition-colors">
                        <Droplets size={18} className="text-[#2dd4bf]" />
                    </div>
                    <span className="font-display font-bold text-white text-lg tracking-wide leading-tight flex flex-col pt-1">
                        <span>World Water</span>
                        <span>Day</span>
                    </span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8 ml-8">
                    {!isSpecialPage && links.map(l => (
                        <li key={l.href}>
                            <a
                                href={l.href.replace('/', '')} // native scroll on same page
                                className="text-[13px] tracking-widest text-[#94a3b8] hover:text-white transition-colors font-medium uppercase"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                    {isSpecialPage && links.map(l => (
                        <li key={l.href}>
                            <Link
                                to={l.href}
                                className="text-[13px] tracking-widest text-[#94a3b8] hover:text-white transition-colors font-medium uppercase"
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right side CTA & Gen Z Link */}
                <div className="hidden md:flex items-center gap-6">
                    {!isSpecialPage ? (
                        <Link 
                            to="/action" 
                            className="flex items-center gap-2 bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 hover:bg-[#2dd4bf]/20 text-[#2dd4bf] px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all hover:scale-105"
                        >
                            Gen Z Action <ArrowRight size={16} />
                        </Link>
                    ) : (
                        <Link 
                            to="/" 
                            className="flex items-center gap-2 bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 hover:bg-[#2dd4bf]/20 text-[#2dd4bf] px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all hover:scale-105"
                        >
                            Back Home <ArrowRight size={16} />
                        </Link>
                    )}
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile menu - Highly Opaque Background to fix visibility overlap */}
            {open && (
                <div className="md:hidden bg-[#040e25]/95 backdrop-blur-2xl border border-[#1e293b] shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-4 mt-2 rounded-2xl p-6 relative z-[100]">
                    <ul className="flex flex-col gap-3">
                        {!isSpecialPage ? links.map(l => (
                            <li key={l.href}>
                                <a
                                    href={l.href.replace('/', '')}
                                    onClick={() => setOpen(false)}
                                    className="block text-[#94a3b8] hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors tracking-widest text-[13px] uppercase"
                                >
                                    {l.label}
                                </a>
                            </li>
                        )) : links.map(l => (
                            <li key={l.href}>
                                <Link
                                    to={l.href}
                                    onClick={() => setOpen(false)}
                                    className="block text-[#94a3b8] hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors tracking-widest text-[13px] uppercase"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link 
                                to={isSpecialPage ? "/" : "/action"}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between w-full mt-4 bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 text-[#2dd4bf] px-4 py-3 rounded-xl font-bold tracking-wide"
                            >
                                {isSpecialPage ? 'Back Home' : 'Gen Z Action'} <ArrowRight size={18} />
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}
