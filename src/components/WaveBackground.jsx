export default function WaveBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Radial glow top */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-ocean-700/20 blur-[120px]" />
            {/* Radial glow bottom */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-teal-600/10 blur-[100px]" />
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#0077be 1px, transparent 1px), linear-gradient(90deg, #0077be 1px, transparent 1px)`,
                    backgroundSize: '64px 64px',
                }}
            />
        </div>
    )
}
