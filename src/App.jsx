import OceanCanvas from './components/OceanCanvas'
import Hero from './components/Hero'
import WaterImportance from './components/WaterImportance'
import HistorySection from './components/HistorySection'
import EngineeringSection from './components/EngineeringSection'
import VideosSection from './components/VideosSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#010d1f] overflow-x-hidden">
      {/* Persistent animated ocean background */}
      <OceanCanvas />
      <main className="relative z-10">
        <Hero />
        <WaterImportance />
        <HistorySection />
        <EngineeringSection />
        <VideosSection />
      </main>
      <Footer />
    </div>
  )
}
