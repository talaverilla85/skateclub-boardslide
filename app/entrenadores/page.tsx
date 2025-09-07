import { generateMetadata } from '@/lib/seo'
import { Award, Star, Users, MapPin } from 'lucide-react'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Nuestros Entrenadores - Skate Club Boardslide',
  description: 'Conoce a nuestros entrenadores certificados. Profesionales con años de experiencia en competición y enseñanza del skateboarding.',
  path: '/entrenadores'
})

const entrenadoresData = [
  {
    id: 1,
    nombre: 'Marcos Jose "Skate" Rodriguez',
    especialidad: 'Iniciación General',
    experiencia: '15 años',
    certificaciones: ['Federación Española de Patinaje', 'Instructor Certificado'],
    bio: 'Marcos Jose comenzó a patinar desde muy joven y ha dedicado su vida a la enseñanza del skateboarding. Con más de 15 años de experiencia, ha formado a cientos de alumnos de todas las edades. Su pasión y dedicación lo convierten en el instructor perfecto para iniciar tu aventura en el skate.',
    imagen: '/instructor.jpg',
    logros: ['Instructor Certificado', '15+ años de experiencia', 'Cientos de alumnos formados'],
    horarios: 'Lunes a Viernes - 16:00-20:00, Sábados y Domingos - 10:00-14:00'
  }
]

export default function EntrenadoresPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Entrenadores
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Conoce a nuestro instructor principal, profesional certificado con años de experiencia en enseñanza
          </p>
        </div>
      </section>

      {/* Entrenadores Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {entrenadoresData.map((entrenador, index) => (
              <div
                key={entrenador.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={entrenador.imagen}
                    alt={entrenador.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para aprender con el mejor?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Marcos Jose está esperando para ayudarte a alcanzar tus objetivos en el skate.
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
          </div>
        </div>
      </section>
    </div>
  )
}
