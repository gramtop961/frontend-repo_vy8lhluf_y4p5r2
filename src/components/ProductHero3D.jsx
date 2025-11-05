import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function ProductHero3D() {
  const controls = useAnimation()
  const lidControls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      controls.start({ rotateY: [0, 360], transition: { duration: 20, ease: 'linear', repeat: Infinity } })
      while (true) {
        await lidControls.start({ y: [0, 0, -24, -36, -24], rotateZ: [0, 0, -12, -18, -12], transition: { times: [0, 0.2, 0.45, 0.6, 0.75], duration: 10, ease: 'easeInOut' } })
        await lidControls.start({ y: [-24, -10, 0], rotateZ: [-12, -4, 0], transition: { duration: 2.2, ease: [0.22, 1, 0.36, 1] } })
        await lidControls.start({ y: [0, -2, 0], rotateZ: [0, -1, 0], transition: { duration: 0.8, ease: 'easeOut' } })
        await new Promise((r) => setTimeout(r, 3000))
      }
    }
    sequence()
  }, [controls, lidControls])

  return (
    <div className="relative pointer-events-none select-none">
      <div className="absolute inset-x-0 -bottom-2 mx-auto h-12 w-56 rounded-full bg-gradient-to-t from-yellow-900/20 to-transparent blur-xl" />
      <div className="[perspective:1200px]">
        <motion.div aria-label="Emerald Secrets Sandalwood Powder Jar" animate={controls} style={{ transformStyle: 'preserve-3d' }} className="relative mx-auto h-[360px] w-[260px]">
          <div className="absolute inset-0 rounded-[24px] border border-white/40 bg-gradient-to-br from-white/70 to-amber-50/50 backdrop-blur-[2px]" style={{ boxShadow: 'inset 0 0 40px rgba(255,255,255,0.6), 0 10px 40px rgba(185, 143, 94, 0.18)' }} />
          <div className="absolute left-3 right-3 top-10 bottom-8 rounded-[20px] bg-gradient-to-b from-[#E9D9BE]/70 via-[#D9C4A0]/70 to-[#BFA47C]/70" />
          <div className="absolute left-4 right-4 top-6 h-6 rounded-t-[16px] bg-gradient-to-b from-[#F7EACB] to-[#B08A3C] shadow-md" />
          <div className="absolute left-6 right-6 top-24 rounded-xl border border-[#e9dfc7]/60 bg-gradient-to-br from-white/70 to-[#f6f1e7]/60 p-5 shadow">
            <div className="text-center">
              <div className="text-xl font-semibold tracking-wide text-[#2A2A2A]">Emerald Secrets</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-[#7a5b2f]">Discover the Secrets of Radiance</div>
            </div>
          </div>
          <motion.div aria-hidden animate={lidControls} className="absolute left-2 right-2 top-0 h-12 rounded-t-[18px] bg-gradient-to-b from-[#F5E7C5] via-[#E7CE8A] to-[#A87C2F] shadow-[0_10px_22px_rgba(168,124,47,0.35)]">
            <div className="pointer-events-none absolute inset-0 rounded-t-[18px] bg-gradient-to-r from-white/50 via-transparent to-white/30 mix-blend-screen" />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-tr from-white/30 via-transparent to-white/10 mix-blend-screen" />
        </motion.div>
      </div>
    </div>
  )
}
