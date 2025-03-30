"use client"

import { useState, useEffect, useRef } from "react"

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const animationRef = useRef<number | null>(null)
  const particlesRef = useRef<any[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      baseSpeedX: number
      baseSpeedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 4 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.baseSpeedX = this.speedX
        this.baseSpeedY = this.speedY

        const gradients = [
          { start: "rgba(20, 184, 166, 0.4)", end: "rgba(59, 130, 246, 0.2)" },
          { start: "rgba(245, 158, 11, 0.4)", end: "rgba(234, 179, 8, 0.2)" },
          { start: "rgba(244, 63, 94, 0.4)", end: "rgba(219, 39, 119, 0.2)" },
          { start: "rgba(16, 185, 129, 0.4)", end: "rgba(5, 150, 105, 0.2)" },
        ]
        this.color = gradients[Math.floor(Math.random() * gradients.length)]
      }

      update() {
        // Mouse interaction
        const dx = this.x - mouseRef.current.x
        const dy = this.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          this.speedX = this.baseSpeedX + (dx / distance) * force * 2
          this.speedY = this.baseSpeedY + (dy / distance) * force * 2
        } else {
          this.speedX += (this.baseSpeedX - this.speedX) * 0.1
          this.speedY += (this.baseSpeedY - this.speedY) * 0.1
        }

        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
      }

      draw() {
        if (!ctx) return
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        )
        gradient.addColorStop(0, this.color.start)
        gradient.addColorStop(1, this.color.end)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    const particleCount = Math.min(150, Math.floor((dimensions.width * dimensions.height) / 8000))
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle())

    function connectParticles() {
      if (!ctx) return
      const maxDistance = 120

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, p1.color.start)
            gradient.addColorStop(1, p2.color.end)

            ctx.strokeStyle = gradient
            ctx.lineWidth = opacity
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      if (!ctx) return
      // Subtle background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      bgGradient.addColorStop(0, "rgba(17, 24, 39, 0.1)")
      bgGradient.addColorStop(1, "rgba(31, 41, 55, 0.1)")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const particle of particlesRef.current) {
        particle.update()
        particle.draw()
      }

      connectParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions])

  return (
    <canvas 
    ref={canvasRef} 
    className="fixed top-0 left-0 w-full h-full z-0 opacity-60 pointer-events-auto"
  />
  )
}