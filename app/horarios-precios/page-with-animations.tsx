'use client'

import { motion } from 'framer-motion'
import { Clock, Euro, Users, Calendar } from 'lucide-react'

const horariosData = [
  {
    dia: 'Lunes',
    clases: [
      { hora: '16:00-17:00', nivel: 'Iniciación Niños', disponible: true },
      { hora: '17:30-18:45', nivel: 'Iniciación Adultos', disponible: true },
      { hora: '19:00-20:30', nivel: 'Street', disponible: true }
    ]
  },
  {
    dia: 'Martes',
    clases: [
      { hora: '16:00-17:00', nivel: 'Iniciación Niños', disponible: true },
      { hora: '17:30-18:45', nivel: 'Iniciación Adultos', disponible: true },
      { hora: '19:00-20:30', nivel: 'Bowl', disponible: true }
    ]
  },
  {
    dia: 'Miércoles',
    clases: [
      { hora: '16:00-17:00', nivel: 'Iniciación Niños', disponible: true },
      { hora: '17:30-18:45', nivel: 'Iniciación Adultos', disponible: true },
      { hora: '19:00-20:30', nivel: 'Street', disponible: true }
    ]
  },
  {
    dia: 'Jueves',
    clases: [
      { hora: '16:00-17:00', nivel: 'Iniciación Niños', disponible: true },
      { hora: '17:30-18:45', nivel: 'Iniciación Adultos', disponible: true },
      { hora: '19:00-20:30', nivel: 'Bowl', disponible: true }
    ]
  },
  {
    dia: 'Viernes',
    clases: [
      { hora: '16:00-17:00', nivel: 'Iniciación Niños', disponible: true },
      { hora: '17:30-18:45', nivel: 'Iniciación Adultos', disponible: true },
      { hora: '19:00-20:30', nivel: 'Street', disponible: true }
    ]
  },
  {
    dia: 'Sábado',
    clases: [
      { hora: '10:00-11:00', nivel: 'Iniciación Niños', disponible: true },
      { hora: '11:30-12:45', nivel: 'Iniciación Adultos', disponible: true },
      { hora: '13:00-14:30', nivel: 'Street', disponible: true },
      { hora: '15:00-16:30', nivel: 'Bowl', disponible: true }
    ]
  },
  {
    dia: 'Domingo',
    clases: [
      { hora: '10:00-11:00', nivel: 'Iniciación Niños', disponible: true },
      { hora: '11:30-12:45', nivel: 'Iniciación Adultos', disponible: true },
      { hora: '13:00-14:30', nivel: 'Street', disponible: true }
    ]
  }
]

const preciosData = [
  {
    tipo: 'Mensual',
    descripcion: '4 clases al mes',
    precio: '60',
    precioOriginal: null,
    popular: false,
    beneficios: [
      '4 clases incluidas',
      'Material de préstamo',
      'Seguro incluido',
      'Flexibilidad de horarios'
    ]
  },
  {
    tipo: 'Bono 10',
    descripcion: '10 clases con validez de 3 meses',
    precio: '120',
    precioOriginal: '150',
    popular: true,
    beneficios: [
      '10 clases incluidas',
      'Validez 3 meses',
      'Ahorro del 20%',
      'Material de préstamo',
      'Seguro incluido'
    ]
  },
  {
    tipo: 'Clase Suelta',
    descripcion: 'Una clase individual',
    precio: '18',
    precioOriginal: null,
    popular: false,
    beneficios: [
      'Clase individual',
      'Material de préstamo',
      'Seguro incluido',
      'Sin compromiso'
    ]
  },
  {
    tipo: 'Familiar',
    descripcion: '2 o más miembros de la familia',
    precio: '50',
    precioOriginal: '60',
    popular: false,
    beneficios: [
      '4 clases por persona',
      'Descuento familiar',
      'Material de préstamo',
      'Seguro incluido',
      'Horarios coordinados'
    ]
  }
]

const politicasData = [
  {
    titulo: 'Cancelación de clases',
    descripcion: 'Las clases pueden cancelarse hasta 24 horas antes sin coste. Cancelaciones con menos de 24 horas se cobrarán al 50%.'
  },
  {
    titulo: 'Recuperación de clases',
    descripcion: 'Las clases perdidas por motivos justificados (enfermedad, lluvia) pueden recuperarse en el mismo mes sin coste adicional.'
  },
  {
    titulo: 'Material y seguro',
    descripcion: 'Todo el material necesario está incluido en el precio. Contamos con seguro de responsabilidad civil para todos los alumnos.'
  }
]

export default function HorariosPreciosPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Horarios y Precios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto"
          >
            Clases durante toda la semana con precios adaptados a todas las necesidades
          </motion.p>
        </div>
      </section>

      {/* Horarios Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Horarios de Clases
            </h2>
            <p className="text-xl text-gray-600">
              Clases disponibles de lunes a domingo en Arinaga Skatepark
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Día</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Horario</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nivel</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {horariosData.map((dia, diaIndex) => (
                    dia.clases.map((clase, claseIndex) => (
                      <tr key={`${diaIndex}-${claseIndex}`} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {claseIndex === 0 ? dia.dia : ''}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary-600" />
                          {clase.hora}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {clase.nivel}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            clase.disponible 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {clase.disponible ? 'Disponible' : 'Completo'}
                          </span>
                        </td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Precios Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Precios
            </h2>
            <p className="text-xl text-gray-600">
              Elige la modalidad que mejor se adapte a ti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preciosData.map((precio, index) => (
              <motion.div
                key={precio.tipo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg p-6 relative ${
                  precio.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {precio.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {precio.tipo}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {precio.descripcion}
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <Euro className="w-6 h-6 text-primary-600" />
                    <span className="text-3xl font-bold text-gray-900">
                      {precio.precio}
                    </span>
                    {precio.precioOriginal && (
                      <span className="text-lg text-gray-400 line-through">
                        {precio.precioOriginal}
                      </span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {precio.beneficios.map((beneficio, beneficioIndex) => (
                    <li key={beneficioIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                      {beneficio}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  precio.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Elegir Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Políticas Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Políticas del Club
            </h2>
            <p className="text-xl text-gray-600">
              Información importante sobre cancelaciones y condiciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {politicasData.map((politica, index) => (
              <motion.div
                key={politica.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {politica.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {politica.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

