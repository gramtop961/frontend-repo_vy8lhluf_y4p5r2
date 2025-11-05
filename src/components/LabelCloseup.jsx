import { motion } from 'framer-motion'

export default function LabelCloseup() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.92, 1, 1.02, 1.08] }}
        transition={{ duration: 6, times: [0, 0.2, 0.8, 1], delay: 12, ease: 'easeInOut' }}
        className="rounded-2xl border border-amber-200/40 bg-gradient-to-br from-white/70 to-amber-50/40 p-8 shadow-xl backdrop-blur-md"
      >
        <div className="text-center">
          <div className="text-3xl font-semibold tracking-wide text-[#2A2A2A]">
            Emerald Secrets
          </div>
          <div className="mt-1 text-xs uppercase tracking-[0.25em] text-[#7a5b2f]">
            Discover the Secrets of Radiance
          </div>
          <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
          <div className="mt-4 text-sm text-[#4f3b1a]">
            Glass clarity • Matte label contrast • Metallic gold lid • Fine powder glow
          </div>
        </div>
      </motion.div>
    </div>
  )
}
