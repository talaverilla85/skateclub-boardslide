'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay },
});

export default function ClasesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-black to-neutral-900 text-white relative overflow-hidden">
        <div className="container-max relative z-10">
          <motion.h1
            {...fadeUp(0)}
            className="relative inline-block text-4xl md:text-5xl font-extrabold tracking-wide"
          >
            Nuestras Clases
            <Image
              src="/textures/spray-underline.svg"
              alt=""
              width={320}
              height={20}
              className="absolute left-0 -bottom-2 w-64 md:w-80 pointer-events-none select-none"
            />
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-3 md:mt-4 text-white/80 max-w-3xl"
          >
            Iniciación para todas las edades en el Skatepark de Playa de Arinaga.
            Entrenadores titulados, metodología progresiva y ambiente 100% skate.
          </motion.p>
        </div>
        <div
          className="absolute inset-0 opacity-[.04] pointer-events-none mix-blend-screen"
          style={{ backgroundImage: 'url(/textures/noise.png)' }}
        />
      </section>

      {/* Clases */}
      <section className="section-padding bg-gray-50">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Iniciación Niños */}
          <motion.article
            {...fadeUp(0)}
            className="relative rounded-2xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_#000]"
          >
            <Image
              src="/textures/tape.svg"
              alt=""
              width={80}
              height={40}
              className="absolute -top-4 left-6 w-20 rotate-[-8deg] pointer-events-none select-none"
            />
            <Image
              src="/textures/tape.svg"
              alt=""
              width={80}
              height={40}
              className="absolute -top-5 right-8 w-20 rotate-[10deg] pointer-events-none select-none"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,1.2fr] items-start">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-black">
                <Image
                  src="/gallery/4.webp"
                  alt="Clase de iniciación para niños en Arinaga"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">Iniciación – Niños (6–12)</h2>
                <div className="flex flex-wrap gap-2 my-3">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm">
                    75–120 min
                  </span>
                  <span className="px-3 py-1 bg-white border-2 border-black rounded-full text-sm">
                    Máx. 6–8
                  </span>
                  <span className="px-3 py-1 bg-yellow-300 border-2 border-black rounded-full text-sm">
                    Nivel 0–1
                  </span>
                </div>
                <p className="text-gray-700">
                  Equilibrio, empuje, frenada y caída segura. Juegos y retos para crear
                  bases sólidas. Material disponible el primer día (tabla y casco).
                </p>
              </div>
            </div>
          </motion.article>

          {/* Iniciación Adultos */}
          <motion.article
            {...fadeUp(0.05)}
            className="relative rounded-2xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_#000]"
          >
            <Image
              src="/textures/tape.svg"
              alt=""
              width={80}
              height={40}
              className="absolute -top-4 left-6 w-20 rotate-[-10deg] pointer-events-none select-none"
            />
            <Image
              src="/textures/tape.svg"
              alt=""
              width={80}
              height={40}
              className="absolute -top-5 right-8 w-20 rotate-[8deg] pointer-events-none select-none"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,1.2fr] items-start">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-black">
                <Image
                  src="/adulto.webp"
                  alt="Skater adulto en clase de iniciación"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">Iniciación – Adultos</h2>
                <div className="flex flex-wrap gap-2 my-3">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm">
                    75–120 min
                  </span>
                  <span className="px-3 py-1 bg-white border-2 border-black rounded-full text-sm">
                    Grupos reducidos
                  </span>
                  <span className="px-3 py-1 bg-green-300 border-2 border-black rounded-full text-sm">
                    Nivel 0–1
                  </span>
                </div>
                <p className="text-gray-700">
                  Técnica básica para rodar con confianza: postura, empuje, giro y flujo
                  por el parque. Ambiente cercano y progresión realista.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding">
        <div className="container-max">
          <motion.aside
            {...fadeUp(0.05)}
            className="relative rounded-2xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_#000]"
          >
            <Image
              src="/textures/tape.svg"
              alt=""
              width={80}
              height={40}
              className="absolute -top-4 left-6 w-20 rotate-[-8deg] pointer-events-none select-none"
            />
            <h4 className="text-xl font-extrabold">¿Listo para empezar?</h4>
            <p className="text-gray-700 mt-2">
              Reserva tu clase de prueba o apúntate ahora.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href="/contacto#formulario"
                className="bg-black text-white px-5 py-2 rounded-xl font-semibold shadow-[4px_4px_0_#000] hover:-translate-y-0.5 transition"
              >
                Reservar
              </Link>
              <a
                href="https://wa.me/34613033413?text=Hola!%20Quiero%20info%20de%20clases%20de%20skate%20en%20Arinaga"
                className="bg-green-500 text-white px-5 py-2 rounded-xl font-semibold shadow-[4px_4px_0_#000] hover:-translate-y-0.5 transition"
                aria-label="Abrir WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}