import type { Metadata } from 'next'
import { Inter, Bangers } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { defaultMetadata } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })
const bangers = Bangers({ subsets: ['latin'], weight: '400', display: 'swap' })

export const metadata = {
  title: "Skate Club Boardslide",
  description: "Clases de Skateboard en Playa de Arinaga · Club Federado",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Skate Club Boardslide – Clases de Skate en Gran Canaria",
    description:
      "Aprende Skate Street y Bowl en el Skatepark de Playa de Arinaga. Club federado e iniciación para todas las edades.",
    url: "https://tudominio.com",
    siteName: "Skate Club Boardslide",
    images: ["/og-cover.webp"],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              "name": "Skate Club Boardslide",
              "description": "Club de skate federado en Gran Canaria. Clases de iniciación para niños y adultos. Street y Bowl en Arinaga Skatepark.",
              "url": "https://skateclub-boardslide.vercel.app",
              "logo": "https://skateclub-boardslide.vercel.app/logo.png",
              "telephone": "+34 613 03 34 13",
              "email": "skateclubgrancanaria@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle las Casuarinas, 86",
                "addressLocality": "Arinaga",
                "addressRegion": "Las Palmas",
                "addressCountry": "ES"
              },
              "sameAs": [
                "https://www.instagram.com/skateclubboardslide",
                "https://www.facebook.com/skateclubboardslide"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} selection:bg-black selection:text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

