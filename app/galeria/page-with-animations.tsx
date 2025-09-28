'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

// --- Tus imágenes locales en /public/gallery ---
type Foto = { id: number; src: string; alt: string; categoria: string };

const galeriaData: Foto[] = [
  { id: 1, src: '/gallery/1.webp', alt: 'Vista general del skatepark de Arinaga', categoria: 'Instalaciones' },
  { id: 2, src: '/gallery/2.webp', alt: 'Bowl del skatepark de Arinaga', categoria: 'Bowl' },
  { id: 3, src: '/gallery/3.webp', alt: 'Quarter y plano de práctica', categoria: 'Street' },
  { id: 4, src: '/gallery/4.webp', alt: 'Entrenamiento: alumnos viendo una ronda', categoria: 'Clases' },
  { id: 5, src: '/gallery/5.webp', alt: 'Grupo del club en el skatepark', categoria: 'Clases' },
  // Si añades más: { id: 6, src: '/gallery/6.webp', alt: '...', categoria: '...' },
];

const categorias = ['Todas', 'Clases', 'Bowl', 'Street', 'Instalaciones'] as const;

export default function GaleriaPage() {
  const [filtro, setFiltro] = React.useState<(typeof categorias)[number]>('Todas');

  const fotosFiltradas = galeriaData.filter(f =>
    filtro === 'Todas' ? true : f.categoria === filtro
  );

  return (
    <div className="pt-16">
      {/* Hero simple de la sección */}
      <section className="section-padding bg-gradient-to-br from-[#FF6600] to-[#CD853F] text-white">
        <div className="container-max text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Galería
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            Momentos reales del club en el Skatepark de Playa de Arinaga: iniciación, street y bowl.
          </motion.p>
        </div>
      </section>

      {/* Filtros */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categorias.map((c) => {
              const active = filtro === c;
              return (
                <button
                  key={c}
                  onClick={() => setFiltro(c)}
                  className={`px-5 py-2 rounded-full border transition-colors duration-200 text-sm md:text-base ${
                    active
                      ? 'bg-[#FF6600] text-white border-[#FF6600]'
                      : 'border-[#FF6600]/30 text-gray-700 hover:bg-[#FF6600] hover:text-white'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fotosFiltradas.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    // eager para las 2 primeras; lazy para el resto:
                    loading={index < 2 ? 'eager' : 'lazy'}
                    priority={index < 2}
                  />
                  <span className="absolute top-3 left-3 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {img.categoria}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">¿Quieres salir en la galería?</h2>
          <p className="text-gray-600 mb-6">
            Apúntate a las clases y vive el skate con nosotros en Playa de Arinaga.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contacto#formulario" className="btn-primary">Reserva tu clase</a>
            <a href="/clases" className="btn-secondary">Ver clases</a>
          </div>
        </div>
      </section>
    </div>
  );
}