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
        this.zDepth = 0.2 + Math.random() * 0.8 // For 3D parallax
        
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

    draw(ctx, mouseX, mouseY) {
        const { x, y, size, direction, tailWag, bodyColor, finColor, shineColor, opacity, zDepth } = this
        ctx.save()
        
        // Apply parallax offset based on zDepth
        const pX = x + mouseX * 50 * zDepth
        const pY = y + mouseY * 50 * zDepth
        
        ctx.globalAlpha = opacity
        ctx.translate(pX, pY)
        if (direction === -1) ctx.scale(-1, 1)

        const s = size * (0.5 + zDepth * 0.5) // Scale slightly by depth

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
        this.zDepth = 0.1 + Math.random() * 0.9
    }
    update() {
        this.y -= this.speed
        this.x += this.xDrift
        if (this.y < -20) this.reset()
    }
    draw(ctx, mouseX, mouseY) {
        ctx.save()
        const pX = this.x + mouseX * 30 * this.zDepth
        const pY = this.y + mouseY * 30 * this.zDepth
        
        ctx.beginPath()
        ctx.arc(pX, pY, this.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(150, 220, 255, ${this.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
        // shine
        ctx.beginPath()
        ctx.arc(pX - this.r * 0.3, pY - this.r * 0.3, this.r * 0.25, 0, Math.PI * 2)
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
        this.zDepth = Math.random()
    }
    update() {
        this.y -= this.speed
        this.x += Math.sin(this.angle) * 0.2
        if (this.y < 0) this.reset()
    }
    draw(ctx, mouseX, mouseY) {
        const pX = this.x + mouseX * 20 * this.zDepth
        const pY = this.y + mouseY * 20 * this.zDepth
        ctx.beginPath()
        ctx.arc(pX, pY, this.r, 0, Math.PI * 2)
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
        
        let mouseX = 0
        let mouseY = 0
        let targetMouseX = 0
        let targetMouseY = 0

        const handleMouseMove = (e) => {
            targetMouseX = (e.clientX / window.innerWidth) - 0.5
            targetMouseY = (e.clientY / window.innerHeight) - 0.5
        }
        window.addEventListener('mousemove', handleMouseMove)

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Spawn entities
        const numFish = 24
        const numBubbles = 60
        const numParticles = 80

        const fishes = Array.from({ length: numFish }, (_, i) =>
            new Fish(canvas, i % 2 === 0 ? 1 : -1)
        )
        fishes.forEach((f, i) => {
            f.x = (canvas.width / numFish) * i * f.direction
            f.y = 80 + (i * 67) % (canvas.height * 0.75)
        })

        const bubbles = Array.from({ length: numBubbles }, () => { const b = new Bubble(canvas); b.y = Math.random() * canvas.height; return b })
        const particles = Array.from({ length: numParticles }, () => { const p = new Particle(canvas); p.y = Math.random() * canvas.height; return p })

        const drawBackground = () => {
            const { width, height } = canvas
            const bg = ctx.createLinearGradient(0, 0, 0, height)
            bg.addColorStop(0, '#010816')
            bg.addColorStop(0.3, '#020f26')
            bg.addColorStop(0.7, '#041738')
            bg.addColorStop(1, '#020f26')
            ctx.fillStyle = bg
            ctx.fillRect(0, 0, width, height)

            // Caustic light rays
            for (let i = 0; i < 6; i++) {
                const rx = (width * 0.1) + (width * 0.16 * i) + (mouseX * 150)
                const rw = 40 + i * 20
                const grad = ctx.createLinearGradient(rx, 0, rx, height * 0.6)
                grad.addColorStop(0, `rgba(45,212,191,${0.03 + Math.sin(frame * 0.008 + i) * 0.02})`)
                grad.addColorStop(1, 'rgba(45,212,191,0)')
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
            const pX = mouseX * 80
            const pY = mouseY * 40

            ctx.save()
            ctx.translate(pX, pY)

            // Seaweed
            const weeds = [0.05, 0.12, 0.25, 0.35, 0.5, 0.62, 0.75, 0.85, 0.93]
            weeds.forEach((wx, i) => {
                const baseX = width * wx
                const baseY = height + 50 // draw slightly below due to parallax
                const weedH = 60 + (i % 4) * 35
                const sway = Math.sin(frame * 0.02 + i * 1.2) * 12
                ctx.beginPath()
                ctx.moveTo(baseX, baseY)
                for (let s = 0; s < weedH; s += 5) {
                    const t = s / weedH
                    const cx = baseX + Math.sin(frame * 0.02 + i * 1.2 + t * 3) * 15 * t + sway * t
                    ctx.lineTo(cx, baseY - s)
                }
                const wgrd = ctx.createLinearGradient(baseX, baseY - weedH, baseX, baseY)
                wgrd.addColorStop(0, '#2dd4bf')
                wgrd.addColorStop(1, '#064e3b')
                ctx.strokeStyle = wgrd
                ctx.lineWidth = 3 + (i % 3)
                ctx.lineCap = 'round'
                ctx.stroke()
            })

            // Coral clusters
            const corals = [
                { x: 0.1, color: '#f97316', scale: 1.2 }, 
                { x: 0.2, color: '#ec4899', scale: 0.8 },
                { x: 0.4, color: '#a855f7', scale: 1.5 }, 
                { x: 0.7, color: '#14b8a6', scale: 1.1 },
                { x: 0.85, color: '#ec4899', scale: 1.3 },
            ]
            
            corals.forEach(({ x, color, scale }) => {
                const cx = width * x
                const cy = height + 20
                for (let b = -4; b <= 4; b++) {
                    const bh = (15 + Math.abs(b) * 5) * scale
                    const sway = Math.sin(frame * 0.03 + b) * 3
                    ctx.beginPath()
                    ctx.moveTo(cx + b * 8, cy)
                    ctx.quadraticCurveTo(cx + b * 8 + sway, cy - bh/2, cx + b * 8 + sway*2, cy - bh)
                    ctx.arc(cx + b * 8 + sway*2, cy - bh, 6 * scale, 0, Math.PI * 2)
                    ctx.fillStyle = color
                    ctx.globalAlpha = 0.85 - Math.abs(b)*0.1
                    ctx.fill()
                }
                ctx.globalAlpha = 1
            })
            
            ctx.restore()
        }

        const loop = () => {
            // Smooth mouse interpolation for parallax
            mouseX += (targetMouseX - mouseX) * 0.05
            mouseY += (targetMouseY - mouseY) * 0.05

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            drawBackground()

            // Particles
            particles.forEach(p => { p.update(); p.draw(ctx, mouseX, mouseY) })

            // Seafloor elements (furthest back)
            drawSeafloor()

            // Fish (mid/front ground)
            fishes.forEach(f => { f.update(frame); f.draw(ctx, mouseX, mouseY) })

            // Bubbles (foreground)
            bubbles.forEach(b => { b.update(); b.draw(ctx, mouseX, mouseY) })

            frame++
            raf = requestAnimationFrame(loop)
        }

        loop()

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
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
