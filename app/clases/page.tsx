import { generateMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Users, Target, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Clases de Skate - Niveles y Modalidades',
  description: 'Descubre nuestras clases de skate: Iniciación para niños y adultos. Grupos reducidos con instructores certificados.',
  path: '/clases'
})

const clasesData = [
  {
    id: 'iniciacion-ninos',
    title: 'Iniciación Niños',
    ageRange: '6-12 años',
    duration: '60 minutos',
    maxStudents: 8,
    description: 'Clases adaptadas especialmente para los más pequeños, donde aprenden de forma segura y divertida.',
    objectives: [
      'Equilibrio básico sobre la tabla',
      'Posición correcta y seguridad',
      'Primeros movimientos y giros',
      'Confianza y diversión'
    ],
    image: '/niños.webp',
    color: 'primary'
  },
  {
    id: 'iniciacion-adultos',
    title: 'Iniciación Adultos',
    ageRange: '13+ años',
    duration: '75 minutos',
    maxStudents: 6,
    description: 'Para adultos que quieren empezar desde cero o retomar el skate después de años.',
    objectives: [
      'Fundamentos del skateboarding',
      'Técnicas de empuje y frenado',
      'Manejo de la tabla en diferentes superficies',
      'Preparación para niveles avanzados'
    ],
    image: '/adulto.webp',
    color: 'secondary'
  }
]

export default function ClasesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestras Clases
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Clases de iniciación para todas las edades. Encuentra tu nivel y comienza tu aventura en el skate.
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clasesData.map((clase, index) => (
              <div
                key={clase.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={clase.image}
                    alt={clase.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      clase.color === 'primary' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-secondary-600 text-white'
                    }`}>
                      {clase.ageRange}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {clase.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {clase.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{clase.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Máx. {clase.maxStudents} alumnos</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-primary-600" />
                      Objetivos de la clase
                    </h4>
                    <ul className="space-y-2">
                      {clase.objectives.map((objective, objIndex) => (
                        <li key={objIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/contacto#formulario"
                    className={`w-full btn-primary text-center inline-block ${
                      clase.color === 'primary' 
                        ? 'bg-primary-600 hover:bg-primary-700' 
                        : 'bg-secondary-600 hover:bg-secondary-700'
                    }`}
                  >
                    Apúntate a {clase.title}
                  </Link>
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
              ¿No estás seguro de tu nivel?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              No te preocupes, nuestros instructores evaluarán tu nivel en la primera clase 
              y te recomendarán el grupo más adecuado para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto#formulario" className="btn-primary">
                Reserva tu clase de prueba
              </Link>
              <Link href="/horarios-precios" className="btn-secondary">
                Ver horarios y precios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
