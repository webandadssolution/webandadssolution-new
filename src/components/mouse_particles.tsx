"use client"

import { useEffect, useRef } from "react"

const MouseParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Disable particles on touch screens to save performance/battery
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Mouse coordinates tracker
    const mouse: { x: number | null; y: number | null } = { x: null, y: null }

    // Colors matching Web and Ads Solutions palette
    const colors = [
      "rgba(251, 135, 36, ", // Orange/Gold
      "rgba(0, 212, 255, ",  // Cyber Blue
      "rgba(255, 255, 255, "  // White accent
    ]

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Set initial size
    handleResize()
    window.addEventListener("resize", handleResize)

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      colorPrefix: string
      alpha: number
      decay: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        // Smaller sizes for a delicate, premium sparkle look
        this.size = Math.random() * 3 + 1
        // Random slight velocities
        this.speedX = (Math.random() - 0.5) * 1.5
        this.speedY = (Math.random() - 0.5) * 1.5 - 0.5 // Default upward float drift
        // Color choice
        const colorIndex = Math.floor(Math.random() * colors.length)
        this.colorPrefix = colors[colorIndex]
        this.alpha = 1
        this.decay = Math.random() * 0.015 + 0.01 // Soft decay rate
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.alpha -= this.decay
        if (this.size > 0.2) this.size -= 0.02
      }

      draw() {
        ctx!.save()
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fillStyle = `${this.colorPrefix}${this.alpha})`
        // Subtle neon glow drop shadow effect
        ctx!.shadowBlur = 8
        ctx!.shadowColor = this.colorPrefix === colors[0] ? "#fb8724" : "#00d4ff"
        ctx!.fill()
        ctx!.restore()
      }
    }

    let particles: Particle[] = []

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      // Spawn 2 particles per mouse movement tick for perfect density
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(mouse.x, mouse.y))
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.update()
        if (p.alpha <= 0) {
          particles.splice(i, 1)
        } else {
          p.draw()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
      }}
    />
  )
}

export default MouseParticles
