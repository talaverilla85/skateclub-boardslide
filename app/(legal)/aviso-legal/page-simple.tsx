import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Aviso Legal - Skate Club Boardslide',
  description: 'Aviso legal del Skate Club Boardslide. Información legal sobre el sitio web y los servicios ofrecidos.',
  path: '/aviso-legal'
})

export default function AvisoLegalPage() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Aviso Legal
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información General</h2>
              <p className="text-gray-600 mb-6">
                En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de los siguientes datos:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Denominación social: Skate Club Boardslide</li>
                <li>Dirección: Playa de Arinaga, Arinaga, Gran Canaria</li>
                <li>Teléfono: +34 613 03 34 13</li>
                <li>Email: skateclubgrancanaria@gmail.com</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Objeto</h2>
              <p className="text-gray-600 mb-6">
                El presente aviso legal regula el uso del sitio web skateclub-boardslide.vercel.app (en adelante, la web), del cual es titular Skate Club Boardslide.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Condiciones de Uso</h2>
              <p className="text-gray-600 mb-4">
                El acceso y uso de la web atribuye la condición de usuario del mismo e implica la aceptación de todas las condiciones incluidas en este Aviso Legal.
              </p>
              <p className="text-gray-600 mb-6">
                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Skate Club Boardslide ofrece a través de su web y con carácter enunciativo pero no limitativo, a no emplearlos para:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li>
                <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos</li>
                <li>Provocar daños en los sistemas físicos y lógicos de Skate Club Boardslide, de sus proveedores o de terceras personas</li>
                <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar daños</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propiedad Intelectual e Industrial</h2>
              <p className="text-gray-600 mb-6">
                Skate Club Boardslide por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma. Todos los derechos reservados.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Exclusión de Garantías y Responsabilidad</h2>
              <p className="text-gray-600 mb-6">
                Skate Club Boardslide no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Modificaciones</h2>
              <p className="text-gray-600 mb-6">
                Skate Club Boardslide se reserva el derecho de realizar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Enlaces</h2>
              <p className="text-gray-600 mb-6">
                En el caso de que en la web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Skate Club Boardslide no ejercerá ningún tipo de control sobre dichos sitios y contenidos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Derecho de Exclusión</h2>
              <p className="text-gray-600 mb-6">
                Skate Club Boardslide se reserva el derecho a denegar o retirar el acceso al portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan el presente Aviso Legal.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Legislación Aplicable y Jurisdicción</h2>
              <p className="text-gray-600 mb-6">
                La relación entre Skate Club Boardslide y el Usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Las Palmas de Gran Canaria.
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
