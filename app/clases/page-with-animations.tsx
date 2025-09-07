import { generateMetadata } from '@/lib/seo'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { Users, Target, Clock, CheckCircle } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Clases de Skate - Niveles y Modalidades',
  description: 'Descubre nuestras clases de skate: Iniciación para niños y adultos, Street y Bowl. Grupos reducidos con instructores certificados.',
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
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'secondary'
  },
  {
    id: 'street',
    title: 'Street',
    ageRange: '10+ años',
    duration: '90 minutos',
    maxStudents: 6,
    description: 'Técnicas específicas para skate en street: ollies, grinds, slides y trucos urbanos.',
    objectives: [
      'Ollie y variaciones',
      'Grinds y slides básicos',
      'Trucos de flip y shove-it',
      'Navegación en obstáculos urbanos'
    ],
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'primary'
  },
  {
    id: 'bowl',
    title: 'Bowl',
    ageRange: '12+ años',
    duration: '90 minutos',
    maxStudents: 6,
    description: 'Especialización en bowl y transiciones. Para skaters con experiencia en street.',
    objectives: [
      'Técnicas de pumping',
      'Drop-ins y airs básicos',
      'Navegación en transiciones',
      'Trucos aéreos en bowl'
    ],
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'secondary'
  }
]

export default function ClasesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestras Clases
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Desde iniciación hasta técnicas avanzadas. Encuentra tu nivel y comienza tu aventura en el skate.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clasesData.map((clase, index) => (
              <AnimatedSection
                key={clase.id}
                delay={index * 0.1}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={clase.image}
                    alt={clase.title}
                    className="w-full h-full object-cover"
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
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
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

