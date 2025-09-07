import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Política de Privacidad - Skate Club Boardslide',
  description: 'Política de privacidad del Skate Club Boardslide. Información sobre el tratamiento de datos personales según el RGPD.',
  path: '/privacidad'
})

export default function PrivacidadPage() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Política de Privacidad
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información del Responsable</h2>
              <p className="text-gray-600 mb-6">
                Skate Club Boardslide, con domicilio en Playa de Arinaga, Arinaga, Gran Canaria, es el responsable del tratamiento de los datos personales que nos proporciones.
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Email: skateclubgrancanaria@gmail.com</li>
                <li>Teléfono: +34 613 03 34 13</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Finalidad del Tratamiento</h2>
              <p className="text-gray-600 mb-4">
                Los datos personales que nos proporciones serán tratados para las siguientes finalidades:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Gestionar tu inscripción a las clases de skate</li>
                <li>Contactarte para confirmar horarios y clases</li>
                <li>Enviarte información sobre nuestras actividades y eventos</li>
                <li>Mejorar nuestros servicios y la experiencia del usuario</li>
                <li>Cumplir con las obligaciones legales aplicables</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Legitimación</h2>
              <p className="text-gray-600 mb-6">
                La base legal para el tratamiento de tus datos personales es tu consentimiento, que puedes retirar en cualquier momento, así como la ejecución del contrato de prestación de servicios deportivos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Datos que Recopilamos</h2>
              <p className="text-gray-600 mb-4">
                Recopilamos los siguientes tipos de datos personales:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Datos de identificación: nombre, apellidos</li>
                <li>Datos de contacto: teléfono, email</li>
                <li>Datos personales: edad</li>
                <li>Datos de preferencias: nivel de skate, sede preferida, disponibilidad</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conservación de Datos</h2>
              <p className="text-gray-600 mb-6">
                Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados y, en cualquier caso, durante los plazos legalmente establecidos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Comunicación de Datos</h2>
              <p className="text-gray-600 mb-6">
                No compartiremos tus datos personales con terceros, salvo en los casos legalmente previstos o cuando sea necesario para la prestación del servicio contratado.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Tus Derechos</h2>
              <p className="text-gray-600 mb-4">
                Tienes derecho a:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Acceder a tus datos personales</li>
                <li>Rectificar datos inexactos o incompletos</li>
                <li>Solicitar la supresión de tus datos</li>
                <li>Limitar el tratamiento de tus datos</li>
                <li>Oponerte al tratamiento</li>
                <li>Portabilidad de datos</li>
                <li>Retirar el consentimiento en cualquier momento</li>
              </ul>

              <p className="text-gray-600 mb-6">
                Para ejercer estos derechos, puedes contactarnos en skateclubgrancanaria@gmail.com o en el teléfono +34 613 03 34 13.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Seguridad</h2>
              <p className="text-gray-600 mb-6">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies</h2>
              <p className="text-gray-600 mb-6">
                Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Puedes consultar nuestra Política de Cookies para más información.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Menores de Edad</h2>
              <p className="text-gray-600 mb-6">
                Para menores de 16 años, será necesario el consentimiento de los padres o tutores legales para el tratamiento de sus datos personales.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modificaciones</h2>
              <p className="text-gray-600 mb-6">
                Nos reservamos el derecho a modificar esta Política de Privacidad. Te informaremos de cualquier cambio significativo a través de nuestro sitio web.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Autoridad de Control</h2>
              <p className="text-gray-600 mb-6">
                Si consideras que el tratamiento de tus datos personales no es adecuado, puedes dirigirte a la Agencia Española de Protección de Datos (www.aepd.es).
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <p className="text-sm text-gray-600">
                  <strong>Última actualización:</strong> Enero 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
