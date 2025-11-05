import { useEffect, useRef } from 'react'

// Golden powder particles swirling around center and gently returning.
export default function PowderParticles({ duration = 20 }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * DPR
    canvas.height = height * DPR
    ctx.scale(DPR, DPR)

    const center = { x: width / 2, y: height / 2 + 10 }

    const count = Math.floor((width * height) / 12000) + 180 // adaptive density

    const particles = Array.from({ length: count }).map(() => {
      const r = 30 + Math.random() * Math.min(width, height) * 0.35
      const a = Math.random() * Math.PI * 2
      return {
        baseRadius: r,
        angle: a,
        size: 0.8 + Math.random() * 2.2,
        hue: 42 + Math.random() * 18,
        sat: 80 + Math.random() * 20,
        light: 55 + Math.random() * 25,
        drift: (Math.random() - 0.5) * 0.8,
        spin: 0.3 + Math.random() * 0.9,
        z: Math.random(),
      }
    })

    let start = performance.now()

    function draw(time) {
      const t = ((time - start) / 1000) % duration
      const phase = t / duration // 0..1

      ctx.clearRect(0, 0, width, height)

      // Warm ambient glow
      const grad = ctx.createRadialGradient(center.x, center.y, 10, center.x, center.y, Math.max(width, height) * 0.7)
      grad.addColorStop(0, 'rgba(255,236,179,0.25)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      particles.forEach((p, i) => {
        // Timeline: rise (0-0.35), swirl (0.35-0.75), fall back (0.75-1)
        let local = 0
        if (phase < 0.35) local = phase / 0.35
        else if (phase < 0.75) local = 1
        else local = 1 - (phase - 0.75) / 0.25

        const angle = p.angle + (t * p.spin + i * 0.0007)
        const radius = p.baseRadius * (0.7 + 0.3 * local)
        const x = center.x + Math.cos(angle) * radius + Math.sin(t + i) * 0.5
        const y = center.y + Math.sin(angle * 1.05) * radius * 0.6 - local * 40 + Math.cos(t * 0.7 + i) * 0.3

        const size = p.size * (0.6 + p.z * 0.8)
        const alpha = 0.7 * (0.6 + local * 0.4) * (0.6 + p.z * 0.4)

        ctx.save()
        ctx.globalCompositeOperation = 'lighter'
        ctx.shadowBlur = 8 + p.z * 16
        ctx.shadowColor = `hsla(${p.hue}, ${p.sat}%, ${p.light}%, ${alpha})`
        ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light}%, ${alpha})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    const onResize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * DPR
      canvas.height = height * DPR
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(DPR, DPR)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [duration])

  return (
    <div className="absolute inset-0">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
