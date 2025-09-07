import { generateMetadata } from '@/lib/seo'
import InscriptionForm from '@/components/InscriptionForm'
import MagneticButton from '@/components/MagneticButton'
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Contacto - Skate Club Boardslide',
  description: 'Contacta con el Skate Club Boardslide. Teléfono: +34 613 03 34 13, email: skateclubgrancanaria@gmail.com. Ubicados en Arinaga, Gran Canaria.',
  path: '/contacto'
})

const contactoData = [
  {
    icon: Phone,
    titulo: 'Teléfono',
    contenido: '+34 613 03 34 13',
    enlace: 'tel:+34613033413',
    descripcion: 'Llamadas y WhatsApp'
  },
  {
    icon: Mail,
    titulo: 'Email',
    contenido: 'skateclubgrancanaria@gmail.com',
    enlace: 'mailto:skateclubgrancanaria@gmail.com',
    descripcion: 'Respuesta en 24h'
  },
  {
    icon: MapPin,
    titulo: 'Ubicación',
    contenido: 'Calle las Casuarinas, 86, Arinaga, Gran Canaria',
    enlace: 'https://maps.google.com/?q=Calle+las+Casuarinas+86+Arinaga+Gran+Canaria',
    descripcion: 'Arinaga Skatepark'
  },
  {
    icon: Clock,
    titulo: 'Horarios',
    contenido: 'Lunes a Domingo',
    enlace: null,
    descripcion: '8:00 - 22:00'
  }
]

const horariosData = [
  { dia: 'Lunes - Viernes', horario: '16:00 - 20:30' },
  { dia: 'Sábados', horario: '10:00 - 16:30' },
  { dia: 'Domingos', horario: '10:00 - 14:30' }
]

export default function ContactoPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contacto
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            ¿Tienes dudas? ¿Quieres reservar tu clase? Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Información de Contacto
            </h2>
            <p className="text-xl text-gray-600">
              Múltiples formas de ponerte en contacto con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactoData.map((contacto, index) => (
              <div
                key={contacto.titulo}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <contacto.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {contacto.titulo}
                </h3>
                {contacto.enlace ? (
                  <a
                    href={contacto.enlace}
                    className="text-primary-600 hover:text-primary-700 font-semibold block mb-2"
                  >
                    {contacto.contenido}
                  </a>
                ) : (
                  <p className="text-gray-900 font-semibold mb-2">
                    {contacto.contenido}
                  </p>
                )}
                <p className="text-gray-600 text-sm">
                  {contacto.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding bg-green-50">
        <div className="container-max text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Prefieres WhatsApp?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Escríbenos directamente por WhatsApp para una respuesta más rápida. 
              Estamos disponibles de 9:00 a 21:00.
            </p>
            <MagneticButton
              href="https://wa.me/34613033413?text=Hola,%20me%20interesa%20información%20sobre%20las%20clases%20de%20skate"
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-6 h-6 inline mr-2" />
              Escribir por WhatsApp
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Formulario de Inscripción */}
      <section id="formulario" className="section-padding relative" style={{backgroundImage: 'url("/textures/paper.png")', backgroundSize: 'cover'}}>
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reserva tu Clase de Prueba
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y te contactaremos para confirmar tu clase
            </p>
          </div>
          
          <InscriptionForm />
        </div>
      </section>

      {/* Horarios de Clases */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Horarios de Clases
            </h2>
            <p className="text-xl text-gray-600">
              Consulta los horarios disponibles para cada nivel
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary-600 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Horarios de Clases</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {horariosData.map((horario, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                      <span className="font-semibold text-gray-900">{horario.dia}</span>
                      <span className="text-primary-600 font-semibold">{horario.horario}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Nota:</strong> Los horarios pueden variar según la temporada. 
                    Contacta con nosotros para confirmar disponibilidad.
                  </p>
                </div>
              </div>
            </div>
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
              Ubicados en el corazón de Arinaga, fácil acceso en coche y transporte público
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.123456789!2d-15.402764!3d27.860622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUxJzM4LjIiTiAxNcKwMjQnMDkuOSJX!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses&q=Calle+las+Casuarinas+86+Arinaga+Gran+Canaria"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Skate Club Boardslide en Arinaga"
              />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Dirección
                  </h3>
                  <p className="text-gray-600">
                    Arinaga Skatepark<br />
                    Calle las Casuarinas, 86<br />
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
                    • Acceso en bicicleta<br />
                    • 15 min desde Las Palmas
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
