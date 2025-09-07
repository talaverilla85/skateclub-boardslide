'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroUrban(){
  return (
    <section className="relative h-[78vh]">
      <Image src="/hero-skatepark.webp" alt="Arinaga Skatepark" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1 
          initial={{y:20,opacity:0}} 
          animate={{y:0,opacity:1}}
          className="spray-underline text-white text-5xl md:text-6xl font-extrabold"
        >
          Skate Club Boardslide
        </motion.h1>
        <p className="text-white/90 mt-4 text-lg md:text-xl max-w-2xl">
          Iniciación · Street · Bowl · Club federado
        </p>
        <motion.div 
          initial={{scale:.9,opacity:0}} 
          animate={{scale:1,opacity:1}} 
          transition={{delay:.1}}
          className="mt-6"
        >
          <Link 
            href="/contacto#formulario"
            className="inline-block bg-white text-black px-6 py-3 rounded-2xl shadow-[6px_6px_0_#000] hover:-translate-y-0.5 transition"
          >
            Reserva tu clase
          </Link>
        </motion.div>
      </div>
      {/* flecha graffitera */}
      <Image 
        src="/textures/arrow.svg" 
        alt="" 
        width={160} 
        height={80}
        className="absolute bottom-10 right-6 rotate-6 opacity-80 pointer-events-none" 
      />
    </section>
  )
}
