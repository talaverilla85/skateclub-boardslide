import { generateMetadata } from '@/lib/seo'
import { Calendar, ExternalLink } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Noticias - Skate Club Boardslide',
  description: 'Mantente al día con las últimas noticias, eventos y novedades del Skate Club Boardslide. Sigue nuestras redes sociales para más contenido.',
  path: '/noticias'
})

// URLs de ejemplo para posts de Instagram y Facebook
const instagramPosts = [
  {
    id: 1,
    url: 'https://www.instagram.com/p/ABC123/',
    title: 'Nueva clase de iniciación para adultos',
    date: '2024-01-15'
  },
  {
    id: 2,
    url: 'https://www.instagram.com/p/DEF456/',
    title: 'Competencia local en Arinaga Skatepark',
    date: '2024-01-10'
  },
  {
    id: 3,
    url: 'https://www.instagram.com/p/GHI789/',
    title: 'Tips de seguridad para principiantes',
    date: '2024-01-05'
  }
]

const facebookPosts = [
  {
    id: 1,
    url: 'https://www.facebook.com/skateclubboardslide/posts/123456789',
    title: 'Horarios de clases actualizados para febrero',
    date: '2024-01-20'
  },
  {
    id: 2,
    url: 'https://www.facebook.com/skateclubboardslide/posts/987654321',
    title: 'Nuevo material de préstamo disponible',
    date: '2024-01-18'
  },
  {
    id: 3,
    url: 'https://www.facebook.com/skateclubboardslide/posts/456789123',
    title: 'Evento especial: Día del Skate',
    date: '2024-01-12'
  }
]

const noticiasData = [
  {
    id: 1,
    titulo: 'Arinaga Skatepark inaugurado oficialmente',
    fecha: '2024-01-01',
    resumen: 'El nuevo skatepark de Arinaga ya está abierto al público con todas sus instalaciones funcionando perfectamente.',
    categoria: 'Instalaciones',
    destacada: true
  },
  {
    id: 2,
    titulo: 'Nuevos horarios de clases para 2024',
    fecha: '2024-01-15',
    resumen: 'Ampliamos nuestros horarios para incluir más clases de iniciación y niveles avanzados.',
    categoria: 'Clases',
    destacada: false
  },
  {
    id: 3,
    titulo: 'Competencia local de skate - Febrero 2024',
    fecha: '2024-01-20',
    resumen: 'Primera competencia del año en el Arinaga Skatepark. Inscripciones abiertas para todas las categorías.',
    categoria: 'Eventos',
    destacada: true
  },
  {
    id: 4,
    titulo: 'Nuevo material de protección disponible',
    fecha: '2024-01-25',
    resumen: 'Hemos ampliado nuestro stock de cascos, rodilleras y protecciones para todos los alumnos.',
    categoria: 'Equipamiento',
    destacada: false
  }
]

export default function NoticiasPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Noticias
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Mantente al día con las últimas novedades del Skate Club Boardslide
          </p>
        </div>
      </section>

      {/* Noticias Destacadas */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Noticias Destacadas
            </h2>
            <p className="text-xl text-gray-600">
              Las últimas novedades y eventos importantes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {noticiasData.filter(noticia => noticia.destacada).map((noticia, index) => (
              <article
                key={noticia.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{noticia.categoria}</h3>
                    <p className="text-primary-100">Noticia destacada</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(noticia.fecha).toLocaleDateString('es-ES')}</span>
                    </div>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {noticia.categoria}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {noticia.titulo}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {noticia.resumen}
                  </p>
                  
                  <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-1">
                    <span>Leer más</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Todas las Noticias */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todas las Noticias
            </h2>
            <p className="text-xl text-gray-600">
              Historial completo de noticias y actualizaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {noticiasData.map((noticia, index) => (
              <article
                key={noticia.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(noticia.fecha).toLocaleDateString('es-ES')}</span>
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">
                    {noticia.categoria}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {noticia.titulo}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {noticia.resumen}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Síguenos en Redes Sociales
            </h2>
            <p className="text-xl text-gray-600">
              Contenido diario, tips y momentos especiales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Instagram */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Instagram</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Fotos diarias, stories y reels de nuestras clases y eventos.
              </p>
              
              <div className="space-y-4">
                {instagramPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900">{post.title}</h4>
                      <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('es-ES')}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
              
              <a
                href="https://www.instagram.com/skateclubboardslide"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-semibold text-center block hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Seguir en Instagram
              </a>
            </div>

            {/* Facebook */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Facebook</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Eventos, noticias y comunidad del Skate Club Boardslide.
              </p>
              
              <div className="space-y-4">
                {facebookPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900">{post.title}</h4>
                      <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('es-ES')}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
              
              <a
                href="https://www.facebook.com/skateclubboardslide"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors duration-200"
              >
                Seguir en Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
