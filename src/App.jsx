import { motion } from 'framer-motion'
import ProductHero3D from './components/ProductHero3D'
import PowderParticles from './components/PowderParticles'
import LabelCloseup from './components/LabelCloseup'
import OutroText from './components/OutroText'

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#F8F3EA] via-[#F2E7D6] to-[#E9DFC9] text-[#2A2A2A]">
      {/* Ambient vignette and flares */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,233,163,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(210,169,108,0.28),transparent_60%)] blur-2xl" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="z-10 mb-8 text-center"
        >
          <h1 className="text-2xl font-medium tracking-[0.35em] text-[#7a5b2f] sm:text-3xl">
            EMERALD SECRETS
          </h1>
          <p className="mt-2 text-sm text-[#5c4724]">
            Sandalwood Powder • Luxurious Nature-Inspired Minimalism
          </p>
        </motion.div>

        {/* Scene container */}
        <div className="relative z-0 grid w-full grid-cols-1 place-items-center">
          <div className="relative h-[520px] w-full max-w-[820px]">
            {/* Particles behind product */}
            <PowderParticles duration={20} />

            {/* Product in the middle */}
            <div className="relative z-10 flex h-full items-center justify-center">
              <ProductHero3D />
            </div>

            {/* Label close-up pass */}
            <LabelCloseup />

            {/* Final text shimmer */}
            <OutroText />
          </div>
        </div>
      </main>

      {/* Footer mini credits */}
      <footer className="relative z-10 pb-6 text-center text-xs text-[#6b5736]">
        <span>Fragrance of purity, touch of calm</span>
      </footer>
    </div>
  )
}

export default App
