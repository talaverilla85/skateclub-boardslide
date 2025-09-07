'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className = '', href, onClick }: MagneticButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${className}`}
    >
      {href ? (
        <a
          href={href}
          className="inline-block bg-white text-black px-8 py-4 rounded-2xl shadow-[8px_8px_0_#000] border-2 border-black hover:shadow-[12px_12px_0_#000] hover:-translate-y-1 transition-all duration-300 font-bold text-lg"
        >
          {children}
        </a>
      ) : (
        <button
          onClick={onClick}
          className="inline-block bg-white text-black px-8 py-4 rounded-2xl shadow-[8px_8px_0_#000] border-2 border-black hover:shadow-[12px_12px_0_#000] hover:-translate-y-1 transition-all duration-300 font-bold text-lg"
        >
          {children}
        </button>
      )}
    </motion.div>
  )
}
