import { useEffect, useRef } from 'react'

/**
 * CPU-optimized Canvas 2D particle system replacing Three.js.
 * Updated for flat dark theme with bright green accents (#00B248)
 */
export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let mouse = { x: -9999, y: -9999 }
    const FPS = 30
    const INTERVAL = 1000 / FPS
    let lastTime = 0

    const COLORS = ['#00B248', '#00D154', '#008F38', '#14532D', '#042F2E']

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    function init() {
      particles = []
      const count = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 0.5, 
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.5 + 0.1,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    function drawParticle(p, t) {
      const pulse = 0.8 + 0.2 * Math.sin(t * p.pulseSpeed + p.pulseOffset)
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.alpha * pulse
      ctx.fill()
    }

    function drawConnections() {
      const DIST = 150
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < DIST) {
            const alpha = (1 - d / DIST) * 0.15 
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = '#00B248'
            ctx.lineWidth = 0.5
            ctx.globalAlpha = alpha
            ctx.stroke()
          }
        }
      }
    }

    function update(t) {
      particles.forEach(p => {
        // Mouse repulsion
        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const md = Math.sqrt(mdx * mdx + mdy * mdy)
        if (md < 120) {
          const force = (120 - md) / 120 * 0.5
          p.vx += (mdx / md) * force
          p.vy += (mdy / md) * force
        }

        // Damping
        p.vx *= 0.995
        p.vy *= 0.995

        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < -5) p.x = canvas.width + 5
        if (p.x > canvas.width + 5) p.x = -5
        if (p.y < -5) p.y = canvas.height + 5
        if (p.y > canvas.height + 5) p.y = -5
      })
    }

    function render(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1

      drawConnections()
      particles.forEach(p => drawParticle(p, t))

      ctx.globalAlpha = 1
    }

    function loop(ts) {
      animId = requestAnimationFrame(loop)
      const delta = ts - lastTime
      if (delta < INTERVAL) return
      lastTime = ts - (delta % INTERVAL)
      update(ts)
      render(ts)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    resize()
    loop(0)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="bg-canvas" />
}
