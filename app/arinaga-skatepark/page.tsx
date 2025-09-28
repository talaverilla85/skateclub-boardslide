import { generateMetadata } from '@/lib/seo'
import { MapPin, Calendar, Shield, Star, Clock, Users } from 'lucide-react'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Arinaga Skatepark - Instalaciones y Ubicación',
  description:
    'Conoce el moderno Arinaga Skatepark: skateplaza, bowl y flow park. Diseño de Daniel Yábar y construcción de Cooping Ramps. Proyecto del Ayuntamiento de Agüimes.',
  path: '/arinaga-skatepark',
})

const zonasData = [
  {
    nombre: 'Skateplaza',
    descripcion:
      'Zona de street con obstáculos urbanos: escaleras, barandillas, bancos y ledges. Pensada para líneas y trucos técnicos.',
    caracteristicas: [
      'Escaleras de diferentes alturas',
      'Barandillas y handrails',
      'Bancos y ledges',
      'Transiciones que conectan con el resto',
      'Superficie de hormigón pulido',
    ],
    imagen: '/street.webp',
    nivel: 'Todos los niveles',
  },
  {
    nombre: 'Bowl',
    descripcion:
      'Bowl con diferentes alturas y profundidades para una práctica más radical y fluida.',
    caracteristicas: [
      'Alturas y profundidades variables',
      'Coping metálico',
      'Transiciones rápidas y lectura de líneas',
      'Superficie de hormigón texturizado',
      'Drenaje integrado',
    ],
    imagen: '/bowl.webp',
    nivel: 'Intermedio-Avanzado',
  },
  {
    nombre: 'Flow Zone',
    descripcion:
      'Curvas y transiciones de menor altura que conectan todo el recinto. Sensación de surf y velocidad.',
    caracteristicas: [
      'Rampas y quarters enlazados',
      'Transfers y spines',
      'Múltiples trayectorias',
      'Líneas de velocidad y bombeo',
      'Zona ideal para progresión',
    ],
    imagen: '/flow.webp',
    nivel: 'Principiante-Intermedio',
  },
]

// Instalaciones reinventadas (coherentes con tu info + lo que ya tenías)
const instalacionesData = [
  {
    icon: Shield,
    titulo: 'Confort y seguridad',
    descripcion:
      'Talud con vegetación contra el viento predominante. Señalización y superficie antideslizante.',
  },
  {
    icon: Users,
    titulo: 'Graderíos y público',
    descripcion:
      'Graderíos para exhibiciones y competiciones; visibilidad y aforo cómodos.',
  },
  {
    icon: Clock,
    titulo: 'Uso y capacidad',
    descripcion:
      'Optimizado para múltiples trayectorias y ~25 skaters a la vez sin cruces peligrosos.',
  },
  {
    icon: Star,
    titulo: 'Mantenimiento',
    descripcion:
      'Hormigón en excelente estado, limpieza y revisiones periódicas del recinto.',
  },
]

const tipsData = [
  {
    titulo: 'Equipamiento',
    descripcion:
      'Casco obligatorio para menores de 16 años. Recomendadas rodilleras, coderas y muñequeras.',
  },
  {
    titulo: 'Horarios recomendados',
    descripcion:
      'Mañanas (8:00–12:00) ideales para principiantes; tardes (16:00–20:00) con más ambiente.',
  },
  {
    titulo: 'Respeto',
    descripcion:
      'Respeta los turnos y no te quedes en medio de las líneas. Pregunta antes de usar un obstáculo.',
  },
]

export default function ArinagaSkateparkPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-[#CD853F] to-[#FF6600] text-white">
        <div className="container-max relative z-10 text-center">
          <h1 className="relative inline-block text-4xl md:text-5xl font-extrabold mb-2">
            Arinaga Skatepark
            <img
              src="/textures/spray-underline.svg"
              alt=""
              className="absolute left-0 right-0 -bottom-2 mx-auto w-64 md:w-80 pointer-events-none select-none"
            />
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto">
            La instalación más completa de Canarias: skateplaza, bowl y flow park integrados en el Parque Urbano
            de Arinaga.
          </p>
        </div>
        <div
          className="absolute inset-0 opacity-[.04] pointer-events-none"
          style={{ backgroundImage: 'url(/textures/noise.png)' }}
        />
        <div className="relative h-[42vh] md:h-[52vh]">
          <Image
            src="/hero-skatepark.webp"
            alt="Vista general del Skatepark de Arinaga"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FF6600]/60 to-transparent" />
        </div>
      </section>

      {/* Ficha técnica / Hechos clave */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Ficha Técnica</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna 1 */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#FF6600] text-white rounded-lg grid place-items-center flex-shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-1">Inauguración</h3>
                  <p className="text-gray-700">
                    2024, competición en el marco del encuentro juvenil <strong>Mareas Vivas</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#FF6600] text-white rounded-lg grid place-items-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-1">Ubicación</h3>
                  <p className="text-gray-700">Parque Urbano de Arinaga (Agüimes, Gran Canaria)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#FF6600] text-white rounded-lg grid place-items-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-1">Capacidad optimizada</h3>
                  <p className="text-gray-700">Hasta ~25 skaters simultáneos, múltiples trayectorias.</p>
                </div>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#FF6600] text-white rounded-lg grid place-items-center flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-1">Dimensiones e inversión</h3>
                  <p className="text-gray-700">
                    Recinto de <strong>3.279 m²</strong> y más de <strong>2.000 m²</strong> patinables. Inversión de{' '}
                    <strong>590.796 €</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#FF6600] text-white rounded-lg grid place-items-center flex-shrink-0">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-1">Diseño y construcción</h3>
                  <p className="text-gray-700">
                    Diseño de <strong>Daniel Yábar</strong>, tras participación de skaters locales. Obra de{' '}
                    <strong>Cooping Ramps</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#FF6600] text-white rounded-lg grid place-items-center flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-1">Confort y entorno</h3>
                  <p className="text-gray-700">
                    Talud con vegetación contra el viento y <strong>graderíos</strong> para público.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nota de reconocimiento */}
          <div className="mt-6 rounded-2xl border-2 border-[#FF6600] bg-white p-5 shadow-[6px_6px_0_#FF6600] relative">
            <img
              src="/textures/tape.svg"
              alt=""
              className="absolute -top-4 right-8 w-20 rotate-[8deg] pointer-events-none select-none"
            />
            <p className="text-gray-700">
              Reconocimiento al <strong>Ayuntamiento de Agüimes</strong> por su apuesta por el deporte urbano y por
              integrar el skatepark en el Parque Urbano, con facilidades de acceso, aparcamiento, servicios y opción
              de crecimiento futuro del recinto.
            </p>
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Zonas del Skatepark</h2>
            <p className="text-lg text-gray-600">Tres áreas conectadas entre sí mediante transiciones</p>
          </div>

          <div className="space-y-12">
            {zonasData.map((zona, index) => (
              <div
                key={zona.nombre}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                } ${index % 2 === 0 ? 'md:rotate-[0.6deg]' : 'md:-rotate-[0.6deg]'}`}
              >
                {/* Texto */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-yellow-300 rounded-full border-2 border-[#FF6600] shadow-[4px_4px_0_#FF6600] text-xs font-bold">
                      {zona.nivel}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">{zona.nombre}</h3>
                  <p className="text-gray-700 mb-5 text-base">{zona.descripcion}</p>

                  <h4 className="font-extrabold text-gray-900 mb-2">Características</h4>
                  <ul className="space-y-2">
                    {zona.caracteristicas.map((c, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="inline-block w-2 h-2 bg-[#FF6600] rounded-full mr-3" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Imagen */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative border-2 border-[#FF6600] shadow-[6px_6px_0_#FF6600]">
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

          {/* Conectividad */}
          <div className="mt-10 rounded-2xl border-2 border-[#FF6600] bg-white p-5 shadow-[6px_6px_0_#FF6600]">
            <p className="text-gray-700">
              Las áreas están <strong>perfectamente conectadas</strong> mediante rampas de transición para mantener la
              continuidad del recorrido y multiplicar las líneas posibles.
            </p>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Instalaciones y Servicios</h2>
            <p className="text-lg text-gray-600">Todo lo necesario para disfrutar del parque</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instalacionesData.map((instalacion) => (
              <div
                key={instalacion.titulo}
                className="bg-white rounded-xl border-2 border-[#FF6600] shadow-[6px_6px_0_#FF6600] p-6 text-center"
              >
                <div className="w-12 h-12 bg-[#FF6600] text-white rounded-lg grid place-items-center mx-auto mb-4">
                  <instalacion.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{instalacion.titulo}</h3>
                <p className="text-gray-700">{instalacion.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Tips de Seguridad</h2>
            <p className="text-lg text-gray-600">Para disfrutar del skatepark de forma segura y responsable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tipsData.map((tip) => (
              <div key={tip.titulo} className="bg-white rounded-xl border-2 border-[#FF6600] shadow-[6px_6px_0_#FF6600] p-6">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{tip.titulo}</h3>
                <p className="text-gray-700">{tip.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa (tu iframe se queda tal cual) */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">¿Cómo llegar?</h2>
            <p className="text-lg text-gray-600">
              Ubicado en la Playa de Arinaga, fácil acceso en coche y transporte público
            </p>
          </div>

          <div className="rounded-xl border-2 border-[#FF6600] shadow-[6px_6px_0_#FF6600] bg-white overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.123456789!2d-15.402764!3d27.860622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUxJzM4LjIiTiAxNcKwMjQnMDkuOSJX!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses&q=Calle+las+Casuarinas+86+Arinaga+Gran+Canaria"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Arinaga Skatepark"
              />
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-extrabold text-lg text-gray-900 mb-1">Dirección</h3>
                <p className="text-gray-700">
                  Calle las Casuarinas, 86
                  <br />
                  Arinaga, Gran Canaria
                  <br />
                  Las Palmas, España
                </p>
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-gray-900 mb-1">Transporte</h3>
                <p className="text-gray-700">
                  • Línea de autobús 11 (parada Arinaga)
                  <br />
                  • Parking gratuito disponible
                  <br />
                  • Acceso en bicicleta
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SportsActivityLocation',
            name: 'Skatepark de Arinaga',
            sport: 'Skateboarding',
            description:
              'Skateplaza, Bowl y Flow Park integrados en el Parque Urbano de Arinaga. Diseño de Daniel Yábar. Construcción de Cooping Ramps.',
            areaServed: 'Agüimes, Gran Canaria',
            maximumAttendeeCapacity: 25,
            organizer: { '@type': 'GovernmentOrganization', name: 'Ayuntamiento de Agüimes' },
            architect: { '@type': 'Person', name: 'Daniel Yábar' },
            contractor: { '@type': 'Organization', name: 'Cooping Ramps' },
          }),
        }}
      />
    </div>
  )
}
