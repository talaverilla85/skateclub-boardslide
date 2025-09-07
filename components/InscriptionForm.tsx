'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  nombre: string
  padreMadreTutor: string
  edad: string
  telefono: string
  email: string
  nivel: string
  observaciones: string
  consentimiento: boolean
}

const InscriptionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    padreMadreTutor: '',
    edad: '',
    telefono: '',
    email: '',
    nivel: '',
    observaciones: '',
    consentimiento: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio'
    if (!formData.padreMadreTutor.trim()) newErrors.padreMadreTutor = 'El nombre del padre/madre/tutor es obligatorio'
    if (!formData.edad.trim()) newErrors.edad = 'La edad es obligatoria'
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio'
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio'
    if (!formData.nivel) newErrors.nivel = 'Selecciona un nivel'
    if (!formData.consentimiento) newErrors.consentimiento = 'Debes aceptar el consentimiento'
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Email no válido'
    }
    
    // Validación de teléfono
    const phoneRegex = /^[+]?[\d\s-()]{9,}$/
    if (formData.telefono && !phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'Teléfono no válido'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Nueva inscripción - Skate Club Boardslide',
          _replyto: formData.email,
        }),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          nombre: '',
          padreMadreTutor: '',
          edad: '',
          telefono: '',
          email: '',
          nivel: '',
          observaciones: '',
          consentimiento: false
        })
        
        // Scroll to success message
        setTimeout(() => {
          document.getElementById('form-response')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          })
        }, 100)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Reserva tu clase de prueba
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.nombre ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Su nombre completo"
              />
              {errors.nombre && (
                <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="padreMadreTutor" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre del padre/madre/tutor *
              </label>
              <input
                type="text"
                id="padreMadreTutor"
                name="padreMadreTutor"
                value={formData.padreMadreTutor}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.padreMadreTutor ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Nombre del padre/madre/tutor"
              />
              {errors.padreMadreTutor && (
                <p className="mt-1 text-sm text-red-600">{errors.padreMadreTutor}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="edad" className="block text-sm font-medium text-gray-700 mb-2">
                Edad *
              </label>
              <input
                type="number"
                id="edad"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.edad ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Tu edad"
                min="6"
                max="99"
              />
              {errors.edad && (
                <p className="mt-1 text-sm text-red-600">{errors.edad}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="nivel" className="block text-sm font-medium text-gray-700 mb-2">
                Nivel *
              </label>
              <select
                id="nivel"
                name="nivel"
                value={formData.nivel}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.nivel ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Selecciona tu nivel</option>
                <option value="iniciacion-ninos">Iniciación Niños (6-12 años)</option>
                <option value="intermedio-ninos">Intermedio Niños (6-12 años)</option>
                <option value="iniciacion-adultos">Iniciación Adultos</option>
              </select>
              {errors.nivel && (
                <p className="mt-1 text-sm text-red-600">{errors.nivel}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.telefono ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+34 123 456 789"
              />
              {errors.telefono && (
                <p className="mt-1 text-sm text-red-600">{errors.telefono}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="observaciones" className="block text-sm font-medium text-gray-700 mb-2">
              Observaciones
            </label>
            <textarea
              id="observaciones"
              name="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder=""
            />
          </div>
          
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consentimiento"
              name="consentimiento"
              checked={formData.consentimiento}
              onChange={handleChange}
              className={`mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded ${
                errors.consentimiento ? 'border-red-500' : ''
              }`}
            />
            <label htmlFor="consentimiento" className="text-sm text-gray-700">
              Acepto el tratamiento de mis datos personales según la{' '}
              <a href="/privacidad" className="text-primary-600 hover:underline">
                Política de Privacidad
              </a>{' '}
              y doy mi consentimiento para recibir información sobre las clases. *
            </label>
          </div>
          {errors.consentimiento && (
            <p className="text-sm text-red-600">{errors.consentimiento}</p>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Enviar solicitud</span>
              </>
            )}
          </button>
        </form>
        
        {/* Response Messages */}
        <div id="form-response" className="mt-6">
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3"
            >
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-green-800 font-medium">¡Solicitud enviada!</h3>
                <p className="text-green-700 text-sm">
                  Te contactaremos pronto para confirmar tu clase de prueba.
                </p>
              </div>
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3"
            >
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-red-800 font-medium">Error al enviar</h3>
                <p className="text-red-700 text-sm">
                  Hubo un problema al enviar tu solicitud. Inténtalo de nuevo o contáctanos directamente.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default InscriptionForm

