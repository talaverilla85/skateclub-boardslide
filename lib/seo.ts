import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
}

export function generateMetadata({ title, description, path = '', image = '/og-cover.jpg' }: SEOProps): Metadata {
  const baseUrl = 'https://skateclub-boardslide.vercel.app'
  const url = `${baseUrl}${path}`
  const imageUrl = `${baseUrl}${image}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Skate Club Boardslide',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
  }
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://skateclub-boardslide.vercel.app'),
  title: {
    default: 'Skate Club Boardslide - Clases de Skate en Gran Canaria',
    template: '%s | Skate Club Boardslide',
  },
  description: 'Club de skate federado en Gran Canaria. Clases de iniciación para niños y adultos. Street y Bowl en Arinaga Skatepark.',
  keywords: ['skate', 'skateboard', 'clases', 'Gran Canaria', 'Arinaga', 'skatepark', 'iniciación', 'street', 'bowl'],
  authors: [{ name: 'Skate Club Boardslide' }],
  creator: 'Skate Club Boardslide',
  publisher: 'Skate Club Boardslide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

