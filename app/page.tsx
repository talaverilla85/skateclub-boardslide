import { generateMetadata } from '@/lib/seo'
import HeroUrban from '@/components/HeroUrban'
import PosterCard from '@/components/PosterCard'
import FAQ from '@/components/FAQ'

export const metadata = generateMetadata({
  title: 'Clases de Skate en Gran Canaria - Arinaga',
  description: 'Club de skate federado en Gran Canaria. Clases de iniciación para niños y adultos. Street y Bowl en Arinaga Skatepark. Reserva tu clase de prueba.',
  path: '/'
})

export default function HomePage() {
  return (
    <>
      <HeroUrban />
      
      {/* Features Section - Pósters pegados */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Skate Club Boardslide?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos un club de skate de nueva creación en Arinaga. 
              Contamos con profesionales del skate que
              forman en todos los niveles.
            </p>
          </div>
          
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <PosterCard
               title="Iniciación"
               desc="Clases para principiantes de todas las edades. Aprende desde cero con seguridad."
               icon="/textures/icon-start.svg"
             />
             <PosterCard
               title="Street"
               desc="Trucos urbanos, escaleras, barandillas. El skate de calle en su máxima expresión."
               icon="/textures/icon-street.svg"
             />
             <PosterCard
               title="Bowl"
               desc="Transiciones, coping, velocidad. Domina el bowl con estilo y técnica."
               icon="/textures/icon-bowl.svg"
             />
           </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué Boardslide?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Entrenadores Certificados
                  </h3>
                  <p className="text-primary-100">
                    Nuestros instructores están certificados por la Federación Española de Patinaje 
                    y tienen años de experiencia compitiendo y enseñando.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Horarios Flexibles
                  </h3>
                  <p className="text-primary-100">
                    Clases durante toda la semana, fines de semana incluidos. 
                    Nos adaptamos a tu disponibilidad.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Ambiente Familiar
                  </h3>
                  <p className="text-primary-100">
                    Creemos en el skate como una forma de vida. Aquí no solo aprendes a patinar, 
                    sino que formas parte de una comunidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos las dudas más comunes sobre nuestras clases
            </p>
          </div>
          
          <FAQ />
        </div>
      </section>
    </>
  )
}

