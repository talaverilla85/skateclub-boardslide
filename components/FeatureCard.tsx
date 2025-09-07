'use client'

import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  MapPin, 
  Shield,
  Star,
  Clock,
  Heart,
  LucideIcon
} from 'lucide-react'

interface FeatureCardProps {
  iconName: string
  title: string
  description: string
  delay?: number
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  Users,
  MapPin,
  Shield,
  Star,
  Clock,
  Heart
}

const FeatureCard = ({ iconName, title, description, delay = 0 }: FeatureCardProps) => {
  const Icon = iconMap[iconName]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default FeatureCard

