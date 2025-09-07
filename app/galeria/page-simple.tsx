import { generateMetadata } from '@/lib/seo'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Galería - Skate Club Boardslide',
  description: 'Descubre nuestras instalaciones, clases y momentos especiales en el Arinaga Skatepark. Fotos de nuestros alumnos y entrenadores en acción.',
  path: '/galeria'
})

const galeriaData = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Niño aprendiendo a patinar con instructor',
    categoria: 'Clases'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Skater en el bowl del Arinaga Skatepark',
    categoria: 'Bowl'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Trucos de street en la skateplaza',
    categoria: 'Street'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Entrenador enseñando técnicas básicas',
    categoria: 'Clases'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Grupo de alumnos en clase de iniciación',
    categoria: 'Clases'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Skater realizando truco en quarter pipe',
    categoria: 'Flow'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Instructora ayudando a alumna principiante',
    categoria: 'Clases'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Vista panorámica del Arinaga Skatepark',
    categoria: 'Instalaciones'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Sesión nocturna en el skatepark',
    categoria: 'Eventos'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Competencia local de skate',
    categoria: 'Eventos'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Material de skate disponible para préstamo',
    categoria: 'Instalaciones'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Celebración de graduación de curso',
    categoria: 'Eventos'
  }
]

const categorias = ['Todas', 'Clases', 'Bowl', 'Street', 'Flow', 'Instalaciones', 'Eventos']

export default function GaleriaPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Galería
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Momentos especiales, clases, instalaciones y eventos del Skate Club Boardslide
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categorias.map((categoria, index) => (
              <button
                key={categoria}
                className="px-6 py-2 rounded-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200 font-medium"
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Grid de Imágenes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galeriaData.map((imagen, index) => (
              <div
                key={imagen.id}
                className="group cursor-pointer hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={imagen.src}
                    alt={imagen.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Categoría */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {imagen.categoria}
                    </span>
                  </div>
                  
                  {/* Icono de zoom */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Quieres formar parte de nuestra galería?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Únete a nuestras clases y podrás aparecer en futuras fotos. 
              ¡Cada sesión es una oportunidad para crear recuerdos increíbles!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto#formulario" className="btn-primary">
                Reserva tu clase
              </a>
              <a href="/clases" className="btn-secondary">
                Ver clases disponibles
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
