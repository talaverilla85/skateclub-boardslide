'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "¿Qué edad mínima tienen las clases?",
    answer: "Las clases de iniciación para niños están dirigidas a niños de 6 a 12 años. Para adultos no hay límite de edad, ¡nunca es tarde para empezar a patinar!"
  },
  {
    question: "¿Necesito tener mi propia tabla de skate?",
    answer: "Si es necesario. Pero no te procupes, te facilitamos el material necesario para las primeras clases: tablas, cascos, rodilleras, coderas y muñequeras. Solo necesitas traer ropa cómoda y ganas de aprender."
  },
  {
    question: "¿Qué pasa si llueve?",
    answer: "En caso de lluvia, las clases se cancelan por seguridad. Te avisaremos con antelación y podrás recuperar la clase en otra fecha sin coste adicional."
  },
  {
    question: "¿Cuánto tiempo se tarda en aprender lo básico?",
    answer: "Cada persona tiene su ritmo, pero normalmente en 4-6 clases ya puedes mantener el equilibrio básico y hacer tus primeros movimientos. La constancia es clave."
  },
  {
    question: "¿Las clases son individuales o en grupo?",
    answer: "Trabajamos con grupos reducidos, lo que nos permite dar atención personalizada a cada alumno mientras mantenemos un ambiente divertido y social."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 pr-4">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FAQ

