import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#CD853F] to-[#FF6600] text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información del club */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Skate Club Boardslide Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-bold text-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Skate Club Boardslide</span>
            </div>
            <p className="text-gray-300 text-sm" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
              Club de skate federado en Gran Canaria. Clases de iniciación para niños y adultos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/skateclubboardslide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/skateclubboardslide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/34613033413"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/clases" className="text-gray-300 hover:text-white transition-colors" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                  Clases
                </Link>
              </li>
              <li>
                <Link href="/horarios-precios" className="text-gray-300 hover:text-white transition-colors" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                  Horarios y Precios
                </Link>
              </li>
              <li>
                <Link href="/entrenadores" className="text-gray-300 hover:text-white transition-colors" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                  Entrenadores
                </Link>
              </li>
              <li>
                <Link href="/arinaga-skatepark" className="text-gray-300 hover:text-white transition-colors" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                  Arinaga Skatepark
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-300 hover:text-white transition-colors" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-white flex-shrink-0" />
                <span className="text-gray-300" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>Playa de Arinaga, Gran Canaria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-white flex-shrink-0" />
                <a
                  href="tel:+34613033413"
                  className="text-gray-300 hover:text-white transition-colors"
                  style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}
                >
                  +34 613 03 34 13
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-white flex-shrink-0" />
                <a
                  href="mailto:skateclubgrancanaria@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                  style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}
                >
                  skateclubgrancanaria@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/aviso-legal" className="text-gray-300 hover:text-white transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-300 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
          <p>&copy; {currentYear} Skate Club Boardslide. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

