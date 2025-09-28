'use client';

import { Clock, Euro, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const horariosData = [
  { dia: 'Lunes', clases: [
    { hora: '16:00-17:00', nivel: 'Iniciación Niños', disponible: true },
    { hora: '17:30-18:45', nivel: 'Iniciación Adultos', disponible: true },
  ]},
  { dia: 'Martes', clases: [
    { hora: '16:00-17:00', nivel: 'Iniciación Niños', disponible: true },
    { hora: '17:30-18:45', nivel: 'Iniciación Adultos', disponible: true },
  ]},
  { dia: 'Miércoles', clases: [
    { hora: '16:00-17:00', nivel: 'Iniciación Niños', disponible: true },
    { hora: '17:30-18:45', nivel: 'Iniciación Adultos', disponible: true },
  ]},
  { dia: 'Jueves', clases: [
    { hora: '16:00-17:00', nivel: 'Iniciación Niños', disponible: true },
    { hora: '17:30-18:45', nivel: 'Iniciación Adultos', disponible: true },
  ]},
  { dia: 'Viernes', clases: [
    { hora: '16:00-17:00', nivel: 'Iniciación Niños', disponible: true },
    { hora: '17:30-18:45', nivel: 'Iniciación Adultos', disponible: true },
  ]},
  { dia: 'Sábado', clases: [
    { hora: '10:00-11:00', nivel: 'Iniciación Niños', disponible: true },
    { hora: '11:30-12:45', nivel: 'Iniciación Adultos', disponible: true },
  ]},
  { dia: 'Domingo', clases: [
    { hora: '10:00-11:00', nivel: 'Iniciación Niños', disponible: true },
    { hora: '11:30-12:45', nivel: 'Iniciación Adultos', disponible: true },
  ]},
];

const preciosData = [
  {
    tipo: 'Mensual',
    descripcion: '4 clases al mes',
    precio: '35',
    precioOriginal: null,
    popular: false,
    beneficios: [
      '4 clases de 1h15min',
      'Material de préstamo las primeras clases',
      'Seguro incluido con la Federación',
      'Flexibilidad de horarios'
    ]
  },
  {
    tipo: 'Mensual Plus',
    descripcion: '4 clases al mes',
    precio: '45',
    precioOriginal: '60',
    popular: true,
    beneficios: [
      '4 clases de 2h',
      'Material de préstamo las primeras clases',
      'Seguro incluido con la Federación',
      'Flexibilidad de horarios'
    ]
  },
];

const politicasData = [
  {
    titulo: 'Cancelación de clases',
    descripcion: 'Las clases pueden cancelarse hasta 24 horas antes sin coste. Es importante comunicarlo al instructor.'
  },
  {
    titulo: 'Recuperación de clases',
    descripcion: 'Las clases perdidas pueden recuperarse'
  },
  {
    titulo: 'Material y seguro',
    descripcion: 'Se prestará material en las primeras clases. Es importante Federarse para poder tener seguro.'
  }
];

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, delay: d },
});

export default function HorariosPreciosPage() {
  const handleWhatsAppClick = (precio: any) => {
    const phoneNumber = '34613033413';
    const message = `¡Hola!

Me interesa el plan *${precio.tipo}* por *${precio.precio}€*.

Detalles:
• ${precio.descripcion}
• ${precio.beneficios.join('\n• ')}

¿Podrían darme más información sobre:
• Disponibilidad de horarios
• Proceso de inscripción
• Material necesario

¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-16">
      {/* HERO urbano (distinto a Clases: más limpio, con spray sutil) */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-black to-neutral-900 text-white">
        <div className="container-max relative z-10 text-center">
          <motion.h1 {...fadeUp(0)} className="relative inline-block text-4xl md:text-5xl font-extrabold">
            Horarios y Precios
            <img
              src="/textures/spray-underline.svg"
              alt=""
              className="absolute left-0 right-0 -bottom-2 mx-auto w-64 md:w-80 pointer-events-none"
            />
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="mt-3 md:mt-4 text-white/80 max-w-3xl mx-auto">
            Clases durante toda la semana con precios para todos los niveles.
          </motion.p>
        </div>
        <div className="absolute inset-0 opacity-[.035] pointer-events-none" style={{ backgroundImage: 'url(/textures/noise.png)' }} />
      </section>

      {/* HORARIOS – “póster” con cinta, pero sin sobrecargar */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div {...fadeUp(0)} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Horarios de Clases</h2>
            <p className="text-lg text-gray-600">Lunes a domingo · Arinaga Skatepark</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.05)}
            className="relative rounded-2xl border-2 border-[#FF6600] bg-white shadow-[8px_8px_0_#FF6600] overflow-hidden"
          >
            {/* cintas arriba: muy sutil */}
            <img src="/textures/tape.svg" alt="" className="absolute -top-4 left-6 w-20 rotate-[-8deg] pointer-events-none select-none" />
            <img src="/textures/tape.svg" alt="" className="absolute -top-5 right-8 w-20 rotate-[10deg] pointer-events-none select-none" />

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-[#FF6600]/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Día</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Horario</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nivel</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {horariosData.map((dia, i) =>
                    dia.clases.map((clase, j) => (
                      <tr key={`${i}-${j}`} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">
                          {j === 0 ? dia.dia : ''}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <span className="inline-flex items-center gap-2">
                            <Clock className="w-4 h-4 text-black" />
                            {clase.hora}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">{clase.nivel}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border-2 ${
                              clase.disponible
                                ? 'bg-green-200 text-green-900 border-green-900'
                                : 'bg-red-200 text-red-900 border-red-900'
                            }`}
                          >
                            {clase.disponible ? 'Disponible' : 'Completo'}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRECIOS – tarjetas tipo sticker (varían respecto a Clases) */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div {...fadeUp(0)} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Precios</h2>
            <p className="text-lg text-gray-600">Elige la modalidad que mejor se adapte a ti</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {preciosData.map((precio, index) => (
              <motion.div
                key={precio.tipo}
                {...fadeUp(0.05 + index * 0.05)}
                className={`relative rounded-2xl border-2 border-[#FF6600] bg-white p-6 shadow-[8px_8px_0_#FF6600] ${
                  precio.popular ? 'md:rotate-[-0.8deg]' : 'md:rotate-[0.6deg]'
                }`}
              >
                {/* cinta */}
                <img src="/textures/tape.svg" alt="" className="absolute -top-4 left-6 w-20 rotate-[-8deg] pointer-events-none select-none" />
                {precio.popular && (
                  <span className="absolute -top-3 right-4 bg-[#FF6600] text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white">
                    Más popular
                  </span>
                )}

                <div className="text-center mb-5">
                  <h3 className="text-xl font-extrabold text-gray-900">{precio.tipo}</h3>
                  <p className="text-gray-600 text-sm">{precio.descripcion}</p>

                  <div className="mt-4 inline-flex items-center gap-2 bg-yellow-300 border-2 border-[#FF6600] px-4 py-2 rounded-xl shadow-[4px_4px_0_#FF6600]">
                    <Euro className="w-5 h-5 text-black" />
                    <span className="text-3xl font-extrabold text-black">{precio.precio}</span>
                    {precio.precioOriginal && (
                      <span className="text-sm text-gray-700 line-through ml-1">{precio.precioOriginal}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {precio.beneficios.map((b, k) => (
                    <li key={k} className="flex items-center text-sm text-gray-700">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mr-3" />
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleWhatsAppClick(precio)}
                  className="w-full py-3 px-4 rounded-xl font-semibold bg-[#FF6600] text-white hover:-translate-y-0.5 transition shadow-[4px_4px_0_#FF6600]"
                >
                  Elegir plan por WhatsApp
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POLÍTICAS – formato “FAQ cards” para no repetir tabla/tarjetas iguales */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div {...fadeUp(0)} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Políticas del Club</h2>
            <p className="text-lg text-gray-600">Cancelaciones, recuperaciones y seguro</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {politicasData.map((p, i) => (
              <motion.details
                key={p.titulo}
                {...fadeUp(0.05 + i * 0.05)}
                className="group rounded-2xl border-2 border-[#FF6600] bg-white p-5 shadow-[6px_6px_0_#FF6600]"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FF6600] text-white rounded-lg grid place-items-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-extrabold text-gray-900">{p.titulo}</h3>
                  </div>
                  <span className="ml-3 text-sm text-gray-600 group-open:hidden">ver</span>
                  <span className="ml-3 text-sm text-gray-600 hidden group-open:inline">ocultar</span>
                </summary>
                <p className="mt-3 text-gray-700">{p.descripcion}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
