'use client'
import { motion } from "framer-motion"; 
import Image from "next/image";

interface PosterCardProps {
  title: string;
  desc: string;
  icon: string;
}

export default function PosterCard({title, desc, icon}: PosterCardProps){
  return (
    <motion.div 
      whileHover={{rotate:-1.5, scale:1.02}}
      className="relative bg-[#fff] rounded-2xl p-5 shadow-[8px_8px_0_#000] border-2 border-black"
    >
      <Image 
        src="/textures/tape.svg" 
        alt="" 
        width={80} 
        height={40}
        className="absolute -top-3 left-4 w-20 rotate-[-6deg] pointer-events-none" 
      />
      <Image 
        src="/textures/tape.svg" 
        alt="" 
        width={80} 
        height={40}
        className="absolute -top-3 right-4 w-20 rotate-[6deg] pointer-events-none" 
      />
      <div className="flex items-start gap-3">
        <Image src={icon} alt="" width={36} height={36} />
        <div>
          <h3 className="text-xl font-extrabold">{title}</h3>
          <p className="text-gray-700">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}
