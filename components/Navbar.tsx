'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/clases', label: 'Clases' },
    { href: '/horarios-precios', label: 'Horarios y Precios' },
    { href: '/entrenadores', label: 'Entrenadores' },
    { href: '/arinaga-skatepark', label: 'Arinaga Skatepark' },
    { href: '/galeria', label: 'Galería' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300"
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Skate Club Boardslide Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="font-bold text-lg text-gray-900">Skate Club Boardslide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#FF6600] transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto#formulario"
              className="btn-primary"
            >
              Reserva tu clase
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 hover:text-[#FF6600] transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contacto#formulario"
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 btn-primary text-center"
                >
                  Reserva tu clase
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar

