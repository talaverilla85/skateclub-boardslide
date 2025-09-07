import { generateMetadata } from '@/lib/seo'
import { MapPin, Calendar, Shield, Star, Clock, Users } from 'lucide-react'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Arinaga Skatepark - Instalaciones y Ubicación',
  description: 'Conoce el moderno Arinaga Skatepark inaugurado en 2024. Zonas de Street, Bowl y Flow con las mejores instalaciones de Gran Canaria.',
  path: '/arinaga-skatepark'
})

const zonasData = [
  {
    nombre: 'Skateplaza',
    descripcion: 'Zona de street con obstáculos urbanos: escaleras, barandillas, bancos y ledges.',
    caracteristicas: [
      'Escaleras de diferentes alturas',
      'Barandillas y handrails',
      'Bancos y ledges',
      'Mini rampa de 1.5m',
      'Superficie de hormigón pulido'
    ],
    imagen: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    nivel: 'Todos los niveles'
  },
  {
    nombre: 'Bowl',
    descripcion: 'Bowl profundo con transiciones suaves y coping de acero inoxidable.',
    caracteristicas: [
      'Profundidad: 2.5m en el centro',
      'Coping de acero inoxidable',
      'Transiciones suaves y rápidas',
      'Superficie de hormigón texturizado',
      'Drenaje integrado'
    ],
    imagen: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    nivel: 'Intermedio-Avanzado'
  },
  {
    nombre: 'Flow Zone',
    descripcion: 'Zona de flujo con rampas conectadas y líneas de velocidad.',
    caracteristicas: [
      'Rampas de 1m y 2m',
      'Quarter pipes conectados',
      'Spine y transfer',
      'Líneas de velocidad',
      'Zona de práctica de trucos'
    ],
    imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    nivel: 'Principiante-Intermedio'
  }
]

const instalacionesData = [
  {
    icon: Shield,
    titulo: 'Seguridad',
    descripcion: 'Cascos y protecciones obligatorias. Superficie antideslizante y señalización clara.'
  },
  {
    icon: Clock,
    titulo: 'Horarios',
    descripcion: 'Abierto de 8:00 a 22:00 todos los días. Iluminación LED para sesiones nocturnas.'
  },
  {
    icon: Users,
    titulo: 'Accesibilidad',
    descripcion: 'Acceso para sillas de ruedas. Zona de descanso con bancos y sombra.'
  },
  {
    icon: Star,
    titulo: 'Mantenimiento',
    descripcion: 'Limpieza diaria y mantenimiento semanal. Superficie en perfecto estado.'
  }
]

const tipsData = [
  {
    titulo: 'Equipamiento',
    descripcion: 'Casco obligatorio para menores de 16 años. Recomendamos rodilleras, coderas y muñequeras para principiantes.'
  },
  {
    titulo: 'Horarios recomendados',
    descripcion: 'Las mañanas (8:00-12:00) son ideales para principiantes. Las tardes (16:00-20:00) tienen más ambiente.'
  },
  {
    titulo: 'Respeto',
    descripcion: 'Respeta el turno de otros skaters. No te quedes en el medio de las líneas. Pregunta antes de usar obstáculos.'
  }
]

export default function ArinagaSkateparkPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Arinaga Skatepark
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            El skatepark más moderno de Gran Canaria, inaugurado en 2024
          </p>
        </div>
      </section>

      {/* Ficha Técnica */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ficha Técnica
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Inauguración
                    </h3>
                    <p className="text-gray-600">Enero 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Ubicación
                    </h3>
                    <p className="text-gray-600">Playa de Arinaga, Gran Canaria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Capacidad
                    </h3>
                    <p className="text-gray-600">Hasta 50 skaters simultáneos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Superficie
                    </h3>
                    <p className="text-gray-600">Hormigón texturizado antideslizante</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Vista aérea del Arinaga Skatepark"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zonas del Skatepark */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zonas del Skatepark
            </h2>
            <p className="text-xl text-gray-600">
              Tres zonas especializadas para diferentes niveles y estilos
            </p>
          </div>

          <div className="space-y-12">
            {zonasData.map((zona, index) => (
              <div
                key={zona.nombre}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {zona.nombre}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {zona.descripcion}
                  </p>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Nivel: {zona.nivel}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Características:
                  </h4>
                  <ul className="space-y-2">
                    {zona.caracteristicas.map((caracteristica, carIndex) => (
                      <li key={carIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                    <Image
                      src={zona.imagen}
                      alt={zona.nombre}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Instalaciones y Servicios
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para una experiencia perfecta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instalacionesData.map((instalacion, index) => (
              <div
                key={instalacion.titulo}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <instalacion.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {instalacion.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {instalacion.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips de Seguridad */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips de Seguridad
            </h2>
            <p className="text-xl text-gray-600">
              Para disfrutar del skatepark de forma segura y responsable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tipsData.map((tip, index) => (
              <div
                key={tip.titulo}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {tip.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tip.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo llegar?
            </h2>
            <p className="text-xl text-gray-600">
              Ubicado en la Playa de Arinaga, fácil acceso en coche y transporte público
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.123456789!2d-15.4167!3d27.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUyJzAwLjEiTiAxNcKwMjUnMDAuMSJX!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Arinaga Skatepark"
              />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Dirección
                  </h3>
                  <p className="text-gray-600">
                    Playa de Arinaga<br />
                    Arinaga, Gran Canaria<br />
                    Las Palmas, España
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Transporte
                  </h3>
                  <p className="text-gray-600">
                    • Línea de autobús 11 (parada Arinaga)<br />
                    • Parking gratuito disponible<br />
                    • Acceso en bicicleta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
