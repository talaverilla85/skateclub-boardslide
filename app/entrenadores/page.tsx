import { generateMetadata } from '@/lib/seo'
import { Award, Star, Users, MapPin } from 'lucide-react'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Nuestros Entrenadores - Skate Club Boardslide',
  description:
    'Conoce a nuestros entrenadores certificados. Profesionales con años de experiencia en competición y enseñanza del skateboarding.',
  path: '/entrenadores',
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
    horarios: 'Lunes a Viernes - 16:00-20:00, Sábados y Domingos - 10:00-14:00',
  },
]

export default function EntrenadoresPage() {
  return (
    <div className="pt-16">
      {/* Hero urbano (spray + limpio para no repetir patrón de otras páginas) */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-[#FF6600] to-[#CD853F] text-white">
        <div className="container-max relative z-10 text-center">
          <h1 className="relative inline-block text-4xl md:text-5xl font-extrabold tracking-wide">
            Nuestros Entrenadores
            {/* subrayado spray */}
            <img
              src="/textures/spray-underline.svg"
              alt=""
              className="absolute left-0 right-0 -bottom-2 mx-auto w-64 md:w-80 pointer-events-none select-none"
            />
          </h1>
          <p className="mt-3 md:mt-4 text-white/80 max-w-3xl mx-auto">
            Conoce a nuestro instructor principal, profesional certificado con años de experiencia en
            enseñanza
          </p>
        </div>
        {/* textura sutil */}
        <div
          className="absolute inset-0 opacity-[.035] pointer-events-none"
          style={{ backgroundImage: 'url(/textures/noise.png)' }}
        />
      </section>

      {/* Ficha entrenador estilo “póster” con tape */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {entrenadoresData.map((entrenador) => (
              <article
                key={entrenador.id}
                className="relative rounded-2xl border-2 border-[#FF6600] bg-white shadow-[8px_8px_0_#FF6600] overflow-hidden"
              >
                {/* tape decorativo */}
                <img
                  src="/textures/tape.svg"
                  alt=""
                  className="absolute -top-4 left-6 w-24 rotate-[-8deg] pointer-events-none select-none"
                />
                <img
                  src="/textures/tape.svg"
                  alt=""
                  className="absolute -top-5 right-8 w-24 rotate-[9deg] pointer-events-none select-none"
                />

                {/* foto */}
                <div className="relative h-64 border-b-2 border-[#FF6600]">
                  <Image
                    src={entrenador.imagen}
                    alt={entrenador.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-[#FF6600] text-white px-3 py-1 rounded-full text-xs font-bold border-2 border-white">
                    {entrenador.especialidad}
                  </span>
                </div>

                {/* contenido */}
                <div className="p-6">
                  <header className="mb-2">
                    <h3 className="text-2xl font-extrabold text-gray-900">{entrenador.nombre}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-700">
                      <span className="inline-flex items-center gap-1 bg-yellow-300 border-2 border-[#FF6600] rounded-full px-3 py-1 font-semibold">
                        <Award className="w-4 h-4" />
                        {entrenador.experiencia} de experiencia
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white border-2 border-[#FF6600] rounded-full px-3 py-1 font-semibold">
                        <Users className="w-4 h-4" />
                        Formación certificada
                      </span>
                    </div>
                  </header>

                  <p className="text-gray-700 leading-relaxed mb-5">{entrenador.bio}</p>

                  {/* Certificaciones / Logros en dos columnas compactas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div>
                      <h4 className="font-extrabold text-gray-900 mb-2 flex items-center">
                        <Star className="w-5 h-5 mr-2 text-black" />
                        Certificaciones
                      </h4>
                      <ul className="space-y-1">
                        {entrenador.certificaciones.map((cert, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center">
                            <span className="inline-block w-2 h-2 bg-[#FF6600] rounded-full mr-2" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 mb-2 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-black" />
                        Logros
                      </h4>
                      <ul className="space-y-1">
                        {entrenador.logros.map((logro, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center">
                            <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2" />
                            {logro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Horarios en caja ligera (sin CTA para no repetir) */}
                  <div className="rounded-xl border-2 border-[#FF6600] bg-gray-50 p-4">
                    <h4 className="font-extrabold text-gray-900 mb-1 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-black" />
                      Horarios
                    </h4>
                    <p className="text-sm text-gray-700">{entrenador.horarios}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nota final ligera en vez de CTA repetida */}
      <section className="pb-16 -mt-4">
        <div className="container-max">
          <p className="text-center text-sm text-gray-500">
            Para dudas sobre niveles o grupos, consulta la sección{' '}
            <a href="/horarios-precios" className="underline">
              Horarios y Precios
            </a>{' '}
            o escríbenos por WhatsApp desde la página de Contacto.
          </p>
        </div>
      </section>
    </div>
  )
}
