import { useState, useEffect } from 'react'
import { Droplets, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
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

                {/* Right side CTA */}
                <div className="flex items-center">
                    {!isSpecialPage ? (
                        <Link 
                            to="/action" 
                            className="flex items-center gap-2 bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 hover:bg-[#2dd4bf]/20 text-[#2dd4bf] px-4 py-2 rounded-full text-[13px] md:text-sm font-bold tracking-wide transition-all hover:scale-105"
                        >
                            Gen Z Action <ArrowRight size={16} />
                        </Link>
                    ) : (
                        <Link 
                            to="/" 
                            className="flex items-center gap-2 bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 hover:bg-[#2dd4bf]/20 text-[#2dd4bf] px-4 py-2 rounded-full text-[13px] md:text-sm font-bold tracking-wide transition-all hover:scale-105"
                        >
                            Back Home <ArrowRight size={16} />
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}
