import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OceanCanvas from './components/OceanCanvas'
import Hero from './components/Hero'
import WaterImportance from './components/WaterImportance'
import HistorySection from './components/HistorySection'
import EngineeringSection from './components/EngineeringSection'
import VideosSection from './components/VideosSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import GenZTips from './components/GenZTips'

function LandingPage() {
    return (
        <>
            <Navbar />
            <main className="relative z-10 w-full">
                <Hero />
                <WaterImportance />
                <HistorySection />
                <EngineeringSection />
                <VideosSection />
            </main>
        </>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <div className="relative min-h-screen bg-[#010d1f] overflow-x-hidden selection:bg-[#2dd4bf]/30">
                {/* Persistent animated ocean background */}
                <OceanCanvas />
                
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/action" element={<><Navbar /><GenZTips /></>} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    )
}
