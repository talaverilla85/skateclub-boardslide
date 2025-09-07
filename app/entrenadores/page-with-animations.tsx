import { generateMetadata } from '@/lib/seo'
import { motion } from 'framer-motion'
import { Award, Star, Users, MapPin } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Nuestros Entrenadores - Skate Club Boardslide',
  description: 'Conoce a nuestros entrenadores certificados. Profesionales con años de experiencia en competición y enseñanza del skateboarding.',
  path: '/entrenadores'
})

const entrenadoresData = [
  {
    id: 1,
    nombre: 'Carlos "Skate" Rodríguez',
    especialidad: 'Street & Bowl',
    experiencia: '12 años',
    certificaciones: ['Federación Española de Patinaje', 'Nivel 2 Street'],
    bio: 'Carlos comenzó a patinar a los 8 años y nunca paró. Ha competido en numerosos campeonatos nacionales y lleva 8 años enseñando. Su pasión por el street y el bowl lo convierten en el instructor perfecto para niveles avanzados.',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    logros: ['Campeón Regional 2019', '3er puesto Nacional 2021', 'Instructor del Año 2022'],
    horarios: 'Lunes, Miércoles, Viernes - 19:00-20:30'
  },
  {
    id: 2,
    nombre: 'María "Flow" García',
    especialidad: 'Iniciación Niños',
    experiencia: '8 años',
    certificaciones: ['Federación Española de Patinaje', 'Especialista en Niños'],
    bio: 'María se especializa en trabajar con niños y tiene una paciencia infinita. Su método de enseñanza lúdico y seguro hace que los más pequeños se enamoren del skate desde el primer día.',
    imagen: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    logros: ['Especialista en Pedagogía Infantil', '100+ niños formados', 'Método propio de enseñanza'],
    horarios: 'Lunes a Viernes - 16:00-17:00, Sábados y Domingos - 10:00-11:00'
  },
  {
    id: 3,
    nombre: 'David "Bowl" Martín',
    especialidad: 'Bowl & Transiciones',
    experiencia: '10 años',
    certificaciones: ['Federación Española de Patinaje', 'Especialista en Bowl'],
    bio: 'David es un experto en bowl y transiciones. Su técnica impecable y su capacidad para explicar movimientos complejos lo convierten en el instructor ideal para aquellos que quieren dominar el bowl.',
    imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    logros: ['Especialista en Bowl', '5 años compitiendo', 'Instructor Certificado Nivel 3'],
    horarios: 'Martes, Jueves - 19:00-20:30, Sábados - 15:00-16:30'
  },
  {
    id: 4,
    nombre: 'Ana "Balance" López',
    especialidad: 'Iniciación Adultos',
    experiencia: '6 años',
    certificaciones: ['Federación Española de Patinaje', 'Especialista en Adultos'],
    bio: 'Ana comenzó a patinar siendo adulta, por lo que entiende perfectamente las dificultades y miedos de los principiantes adultos. Su enfoque paciente y motivador ayuda a superar cualquier barrera.',
    imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    logros: ['Especialista en Iniciación Adulta', '200+ adultos formados', 'Método "Sin Miedos"'],
    horarios: 'Lunes a Viernes - 17:30-18:45, Sábados y Domingos - 11:30-12:45'
  }
]

export default function EntrenadoresPage() {
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
            Nuestros Entrenadores
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto"
          >
            Profesionales certificados con años de experiencia en competición y enseñanza
          </motion.p>
        </div>
      </section>

      {/* Entrenadores Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {entrenadoresData.map((entrenador, index) => (
              <motion.div
                key={entrenador.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={entrenador.imagen}
                    alt={entrenador.nombre}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {entrenador.especialidad}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {entrenador.nombre}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{entrenador.experiencia} de experiencia</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {entrenador.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-primary-600" />
                      Certificaciones
                    </h4>
                    <ul className="space-y-1">
                      {entrenador.certificaciones.map((cert, certIndex) => (
                        <li key={certIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary-600" />
                      Logros Destacados
                    </h4>
                    <ul className="space-y-1">
                      {entrenador.logros.map((logro, logroIndex) => (
                        <li key={logroIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                          {logro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                      Horarios
                    </h4>
                    <p className="text-sm text-gray-600">
                      {entrenador.horarios}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para aprender con los mejores?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nuestros entrenadores están esperando para ayudarte a alcanzar tus objetivos en el skate.
              Reserva tu clase de prueba y descubre por qué somos el club de referencia en Gran Canaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto#formulario" className="btn-primary">
                Reserva tu clase de prueba
              </a>
              <a href="/horarios-precios" className="btn-secondary">
                Ver horarios y precios
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

