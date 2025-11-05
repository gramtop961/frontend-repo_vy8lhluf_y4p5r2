import { motion } from 'framer-motion'

export default function OutroText() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -6] }}
        transition={{ duration: 6, delay: 14.5, times: [0, 0.15, 0.85, 1], ease: 'easeInOut' }}
        className="text-center"
      >
        <div className="relative inline-block">
          <span className="bg-gradient-to-r from-[#A87C2F] via-[#F0D68A] to-[#A87C2F] bg-clip-text text-transparent">
            Fragrance of purity, touch of calm
          </span>
          <span className="sr-only">Fragrance of purity, touch of calm</span>
          <motion.span
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3 }}
            className="pointer-events-none absolute -inset-1 rounded-lg bg-gradient-to-r from-white/10 via-white/40 to-white/10 blur-[2px]"
          />
        </div>
      </motion.div>
    </div>
  )
}
