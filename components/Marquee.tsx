'use client'
import React from 'react'

interface MarqueeProps {
  children: React.ReactNode
}

export default function Marquee({children}: MarqueeProps){
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
      <div className="flex gap-6 animate-[marquee_25s_linear_infinite]">
        {children}
        {children}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          to {
            transform: translateX(-50%)
          }
        }
      `}</style>
    </div>
  )
}
