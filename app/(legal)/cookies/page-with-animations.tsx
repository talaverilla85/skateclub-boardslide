import { generateMetadata } from '@/lib/seo'
import { motion } from 'framer-motion'

export const metadata = generateMetadata({
  title: 'Política de Cookies - Skate Club Boardslide',
  description: 'Política de cookies del Skate Club Boardslide. Información sobre el uso de cookies en nuestro sitio web.',
  path: '/cookies'
})

export default function CookiesPage() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Política de Cookies
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. ¿Qué son las cookies?</h2>
              <p className="text-gray-600 mb-6">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio web recuerde información sobre tu visita, como tu idioma preferido y otras configuraciones.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. ¿Cómo utilizamos las cookies?</h2>
              <p className="text-gray-600 mb-6">
                Skate Club Boardslide utiliza cookies para mejorar la funcionalidad de nuestro sitio web, analizar el tráfico y personalizar el contenido. Las cookies nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Tipos de cookies que utilizamos</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies técnicas (necesarias)</h3>
              <p className="text-gray-600 mb-4">
                Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar. Incluyen:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Cookies de sesión para mantener la navegación</li>
                <li>Cookies de seguridad para proteger contra ataques</li>
                <li>Cookies de preferencias de idioma</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de análisis</h3>
              <p className="text-gray-600 mb-4">
                Nos ayudan a entender cómo los visitantes interactúan con el sitio web:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Google Analytics (si está habilitado)</li>
                <li>Estadísticas de páginas visitadas</li>
                <li>Tiempo de permanencia en el sitio</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de funcionalidad</h3>
              <p className="text-gray-600 mb-4">
                Permiten que el sitio web recuerde las elecciones que haces:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Preferencias de usuario</li>
                <li>Configuraciones personalizadas</li>
                <li>Recordar formularios completados</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies de terceros</h2>
              <p className="text-gray-600 mb-6">
                Nuestro sitio web puede contener cookies de terceros, como:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
                <li><strong>Google Maps:</strong> Para mostrar mapas interactivos</li>
                <li><strong>Redes sociales:</strong> Para botones de compartir (Instagram, Facebook)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Duración de las cookies</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de sesión</h3>
              <p className="text-gray-600 mb-4">
                Se eliminan cuando cierras el navegador.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies persistentes</h3>
              <p className="text-gray-600 mb-6">
                Permanecen en tu dispositivo durante un período determinado o hasta que las elimines manualmente.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cómo gestionar las cookies</h2>
              <p className="text-gray-600 mb-4">
                Puedes controlar y gestionar las cookies de varias maneras:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Configuración del navegador</h3>
              <p className="text-gray-600 mb-4">
                La mayoría de los navegadores te permiten:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Ver qué cookies están almacenadas</li>
                <li>Eliminar cookies individualmente o todas a la vez</li>
                <li>Bloquear cookies de sitios específicos</li>
                <li>Bloquear cookies de terceros</li>
                <li>Eliminar todas las cookies cuando cierres el navegador</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enlaces de configuración por navegador:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Consentimiento</h2>
              <p className="text-gray-600 mb-6">
                Al continuar navegando por nuestro sitio web, aceptas el uso de cookies según se describe en esta política. Puedes retirar tu consentimiento en cualquier momento modificando la configuración de tu navegador.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Actualizaciones de esta política</h2>
              <p className="text-gray-600 mb-6">
                Podemos actualizar esta Política de Cookies ocasionalmente. Te recomendamos revisar esta página periódicamente para estar informado de cualquier cambio.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
              <p className="text-gray-600 mb-6">
                Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos en:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Email: skateclubgrancanaria@gmail.com</li>
                <li>Teléfono: +34 613 03 34 13</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <p className="text-sm text-gray-600">
                  <strong>Última actualización:</strong> Enero 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

