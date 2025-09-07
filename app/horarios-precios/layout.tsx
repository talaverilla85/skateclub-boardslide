import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Horarios y Precios - Skate Club Boardslide',
  description: 'Consulta nuestros horarios de clases y precios. Bonos mensuales, clases sueltas y descuentos familiares disponibles.',
  path: '/horarios-precios'
})

export default function HorariosPreciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
