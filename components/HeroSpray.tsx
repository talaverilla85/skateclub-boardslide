'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSpray() {
  return (
    <section className="relative h-[78vh] overflow-hidden bg-[#FF6600]">
      {/* Fondo: tu foto + oscurecido */}
      <div className="absolute inset-0">
        <Image
          src="/hero-skatepark.webp"
          alt="Skatepark Playa de Arinaga"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.25),rgba(0,0,0,.6))]" />
      </div>

      {/* Capa "spray": blobs animados que pasan por detrás del título */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <motion.div
          className="absolute -left-1/3 top-1/4 w-[80vw] h-[80vw] blur-3xl opacity-60 bg-[conic-gradient(from_0deg,#00e0c7,rgba(0,0,0,0)_45%,#ff3131_55%,rgba(0,0,0,0)_85%)]"
          animate={{ x: ['0%', '140%', '0%'], rotate: [0, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 w-[60vw] h-[60vw] blur-[80px] opacity-40 bg-[radial-gradient(circle,#ffdf2b,transparent_60%)]"
          animate={{ x: ['0%', '-120%', '0%'], y: ['0%', '20%', '0%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        />
      </div>

      {/* Título con máscara "spray" */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-extrabold tracking-wide text-white spray-mask"
          >
            Skate Club Boardslide
          </motion.h1>
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 md:mt-4 text-white/90 text-lg md:text-2xl"
          >
            Iniciación · Street · Bowl · Club federado
          </motion.p>
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex gap-3 justify-center"
          >
            <a href="/contacto#formulario" className="inline-block bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-[6px_6px_0_#FF6600] hover:-translate-y-0.5 transition">
              Reserva tu clase
            </a>
            <a href="/arinaga-skatepark" className="inline-block bg-[#FF6600]/60 text-white px-6 py-3 rounded-2xl font-semibold border border-white/30 hover:bg-[#FF6600]/70">
              Conoce el skatepark
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

