import { useEffect, useRef } from 'react'

// Fish class for canvas animation
class Fish {
    constructor(canvas, direction = 1) {
        this.canvas = canvas
        this.direction = direction // 1 = right, -1 = left
        this.reset()
    }

    reset() {
        const c = this.canvas
        this.size = 18 + Math.random() * 32
        this.speed = (0.4 + Math.random() * 1.2) * this.direction
        this.y = 80 + Math.random() * (c.height * 0.75)
        this.x = this.direction === 1 ? -this.size * 5 : c.width + this.size * 5
        this.yOff = Math.random() * Math.PI * 2
        this.yAmp = 8 + Math.random() * 18
        this.yFreq = 0.015 + Math.random() * 0.02
        // Color variety: teal, cyan, golden, blue-silver
        const palettes = [
            ['#2dd4bf', '#0d9488', '#99f6e4'],
            ['#38bdf8', '#0ea5e9', '#bae6fd'],
            ['#fb923c', '#f97316', '#fed7aa'],
            ['#a78bfa', '#8b5cf6', '#ddd6fe'],
            ['#34d399', '#10b981', '#a7f3d0'],
        ]
        const p = palettes[Math.floor(Math.random() * palettes.length)]
        this.bodyColor = p[0]
        this.finColor = p[1]
        this.shineColor = p[2]
        this.tailWag = 0
        this.opacity = 0.55 + Math.random() * 0.45
    }

    update(frame) {
        this.x += this.speed
        this.tailWag = Math.sin(frame * 0.12 + this.yOff) * 0.4
        this.y += Math.sin(frame * this.yFreq + this.yOff) * 0.4

        const c = this.canvas
        const gone = this.direction === 1 ? this.x > c.width + this.size * 5
            : this.x < -this.size * 5
        if (gone) this.reset()
    }

    draw(ctx) {
        const { x, y, size, direction, tailWag, bodyColor, finColor, shineColor, opacity } = this
        ctx.save()
        ctx.globalAlpha = opacity
        ctx.translate(x, y)
        if (direction === -1) ctx.scale(-1, 1)

        const s = size

        // Tail
        ctx.save()
        ctx.rotate(tailWag)
        ctx.beginPath()
        ctx.moveTo(-s * 0.6, 0)
        ctx.lineTo(-s * 1.4, -s * 0.55)
        ctx.lineTo(-s * 1.5, 0)
        ctx.lineTo(-s * 1.4, s * 0.55)
        ctx.closePath()
        ctx.fillStyle = finColor
        ctx.fill()
        ctx.restore()

        // Body
        ctx.beginPath()
        ctx.ellipse(0, 0, s * 0.9, s * 0.42, 0, 0, Math.PI * 2)
        ctx.fillStyle = bodyColor
        ctx.fill()

        // Dorsal fin
        ctx.beginPath()
        ctx.moveTo(-s * 0.1, -s * 0.42)
        ctx.quadraticCurveTo(s * 0.2, -s * 0.85, s * 0.5, -s * 0.42)
        ctx.closePath()
        ctx.fillStyle = finColor
        ctx.globalAlpha = opacity * 0.8
        ctx.fill()
        ctx.globalAlpha = opacity

        // Pectoral fin
        ctx.beginPath()
        ctx.ellipse(s * 0.1, s * 0.22, s * 0.3, s * 0.15, 0.5, 0, Math.PI * 2)
        ctx.fillStyle = finColor
        ctx.globalAlpha = opacity * 0.7
        ctx.fill()
        ctx.globalAlpha = opacity

        // Eye
        ctx.beginPath()
        ctx.arc(s * 0.52, -s * 0.07, s * 0.1, 0, Math.PI * 2)
        ctx.fillStyle = '#000'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(s * 0.54, -s * 0.09, s * 0.04, 0, Math.PI * 2)
        ctx.fillStyle = '#fff'
        ctx.fill()

        // Shine
        ctx.beginPath()
        ctx.ellipse(s * 0.15, -s * 0.1, s * 0.22, s * 0.1, -0.4, 0, Math.PI * 2)
        ctx.fillStyle = shineColor
        ctx.globalAlpha = opacity * 0.25
        ctx.fill()

        ctx.restore()
    }
}

class Bubble {
    constructor(canvas) {
        this.canvas = canvas
        this.reset()
    }
    reset() {
        const c = this.canvas
        this.x = Math.random() * c.width
        this.y = c.height + 10
        this.r = 2 + Math.random() * 7
        this.speed = 0.4 + Math.random() * 0.8
        this.xDrift = (Math.random() - 0.5) * 0.4
        this.opacity = 0.1 + Math.random() * 0.25
    }
    update() {
        this.y -= this.speed
        this.x += this.xDrift
        if (this.y < -20) this.reset()
    }
    draw(ctx) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(150, 220, 255, ${this.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
        // shine
        ctx.beginPath()
        ctx.arc(this.x - this.r * 0.3, this.y - this.r * 0.3, this.r * 0.25, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${this.opacity * 1.5})`
        ctx.fill()
        ctx.restore()
    }
}

class Particle {
    constructor(canvas) {
        this.canvas = canvas
        this.reset()
    }
    reset() {
        const c = this.canvas
        this.x = Math.random() * c.width
        this.y = Math.random() * c.height
        this.r = 0.5 + Math.random() * 1.5
        this.opacity = 0.05 + Math.random() * 0.2
        this.speed = 0.05 + Math.random() * 0.15
        this.angle = Math.random() * Math.PI * 2
    }
    update() {
        this.y -= this.speed
        this.x += Math.sin(this.angle) * 0.2
        if (this.y < 0) this.reset()
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100,200,255,${this.opacity})`
        ctx.fill()
    }
}

export default function OceanCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let frame = 0
        let raf

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Spawn entities
        const numFish = 18
        const numBubbles = 40
        const numParticles = 60

        const fishes = Array.from({ length: numFish }, (_, i) =>
            new Fish(canvas, i % 2 === 0 ? 1 : -1)
        )
        // stagger starting positions
        fishes.forEach((f, i) => {
            f.x = (canvas.width / numFish) * i * f.direction
            f.y = 80 + (i * 67) % (canvas.height * 0.75)
        })

        const bubbles = Array.from({ length: numBubbles }, () => { const b = new Bubble(canvas); b.y = Math.random() * canvas.height; return b })
        const particles = Array.from({ length: numParticles }, () => { const p = new Particle(canvas); p.y = Math.random() * canvas.height; return p })

        const drawBackground = () => {
            const { width, height } = canvas
            // Deep ocean gradient
            const bg = ctx.createLinearGradient(0, 0, 0, height)
            bg.addColorStop(0, '#010d1f')
            bg.addColorStop(0.3, '#01152e')
            bg.addColorStop(0.7, '#011828')
            bg.addColorStop(1, '#020f22')
            ctx.fillStyle = bg
            ctx.fillRect(0, 0, width, height)

            // Caustic light rays from top
            for (let i = 0; i < 6; i++) {
                const rx = (width * 0.1) + (width * 0.16 * i)
                const rw = 30 + i * 15
                const grad = ctx.createLinearGradient(rx, 0, rx, height * 0.6)
                grad.addColorStop(0, `rgba(0,180,255,${0.04 + Math.sin(frame * 0.008 + i) * 0.02})`)
                grad.addColorStop(1, 'rgba(0,180,255,0)')
                ctx.beginPath()
                ctx.moveTo(rx - rw / 2, 0)
                ctx.lineTo(rx + rw / 2, 0)
                ctx.lineTo(rx + rw * 1.5, height * 0.6)
                ctx.lineTo(rx - rw * 1.5, height * 0.6)
                ctx.closePath()
                ctx.fillStyle = grad
                ctx.fill()
            }
        }

        const drawSeafloor = () => {
            const { width, height } = canvas
            // Sandy bottom gradient
            const floorGrad = ctx.createLinearGradient(0, height * 0.88, 0, height)
            floorGrad.addColorStop(0, 'rgba(0,40,80,0)')
            floorGrad.addColorStop(0.5, 'rgba(0,30,65,0.5)')
            floorGrad.addColorStop(1, 'rgba(2,18,42,0.95)')
            ctx.fillStyle = floorGrad
            ctx.fillRect(0, height * 0.88, width, height * 0.12)

            // Seaweed
            const weeds = [0.05, 0.12, 0.25, 0.35, 0.5, 0.62, 0.75, 0.85, 0.93]
            weeds.forEach((wx, i) => {
                const baseX = width * wx
                const baseY = height
                const weedH = 40 + (i % 4) * 25
                const sway = Math.sin(frame * 0.02 + i * 1.2) * 8
                ctx.beginPath()
                ctx.moveTo(baseX, baseY)
                for (let s = 0; s < weedH; s += 5) {
                    const t = s / weedH
                    const cx = baseX + Math.sin(frame * 0.02 + i * 1.2 + t * 3) * 10 * t
                    ctx.lineTo(cx, baseY - s)
                }
                const wgrd = ctx.createLinearGradient(baseX, baseY - weedH, baseX, baseY)
                wgrd.addColorStop(0, '#2dd4bf')
                wgrd.addColorStop(1, '#065f46')
                ctx.strokeStyle = wgrd
                ctx.lineWidth = 2 + (i % 3)
                ctx.lineCap = 'round'
                ctx.stroke()
            })

            // Coral shapes
            const corals = [
                { x: 0.08, color: '#f97316' }, { x: 0.22, color: '#ec4899' },
                { x: 0.45, color: '#a855f7' }, { x: 0.68, color: '#f97316' },
                { x: 0.88, color: '#ec4899' },
            ]
            corals.forEach(({ x, color }) => {
                const cx = width * x
                const cy = height - 8
                for (let b = -3; b <= 3; b++) {
                    const bh = 10 + Math.abs(b) * 3
                    ctx.beginPath()
                    ctx.moveTo(cx + b * 6, cy)
                    ctx.lineTo(cx + b * 6, cy - bh)
                    ctx.arc(cx + b * 6, cy - bh, 4, 0, Math.PI * 2)
                    ctx.fillStyle = color
                    ctx.globalAlpha = 0.7
                    ctx.fill()
                    ctx.globalAlpha = 1
                }
            })
        }

        const drawWaves = () => {
            const { width, height } = canvas
            for (let layer = 0; layer < 4; layer++) {
                const yBase = height * (0.55 + layer * 0.06)
                const amp = 12 + layer * 5
                const period = 0.007 - layer * 0.0005
                const speed = 0.012 + layer * 0.003
                const alpha = 0.06 + layer * 0.04

                ctx.beginPath()
                ctx.moveTo(0, yBase)
                for (let x = 0; x <= width; x += 2) {
                    const y = yBase
                        + Math.sin(x * period + frame * speed) * amp
                        + Math.sin(x * 0.004 + frame * 0.008 + layer) * amp * 0.5
                    ctx.lineTo(x, y)
                }
                ctx.lineTo(width, height)
                ctx.lineTo(0, height)
                ctx.closePath()

                const wg = ctx.createLinearGradient(0, yBase, 0, height)
                wg.addColorStop(0, `rgba(0, 130, 200, ${alpha + 0.05})`)
                wg.addColorStop(0.5, `rgba(0, 100, 170, ${alpha})`)
                wg.addColorStop(1, `rgba(0, 60, 120, ${alpha - 0.02})`)
                ctx.fillStyle = wg
                ctx.fill()
            }
        }

        const loop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            drawBackground()

            // Particles
            particles.forEach(p => { p.update(); p.draw(ctx) })

            // Bubbles
            bubbles.forEach(b => { b.update(); b.draw(ctx) })

            // Waves (mid-distance)
            drawWaves()

            // Fish
            fishes.forEach(f => { f.update(frame); f.draw(ctx) })

            // Seafloor + seaweed + coral
            drawSeafloor()

            frame++
            raf = requestAnimationFrame(loop)
        }

        loop()

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        />
    )
}
