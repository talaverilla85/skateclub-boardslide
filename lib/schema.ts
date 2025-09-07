export const sportsClubSchema = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  "name": "Skate Club Boardslide",
  "description": "Club de skate federado en Gran Canaria. Clases de iniciación para niños y adultos. Street y Bowl en Arinaga Skatepark.",
  "url": "https://skateclub-boardslide.vercel.app",
  "logo": "https://skateclub-boardslide.vercel.app/logo.png",
  "image": "https://skateclub-boardslide.vercel.app/og-cover.jpg",
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
  ],
  "sport": "Skateboarding",
  "memberOf": {
    "@type": "Organization",
    "name": "Federación Española de Patinaje"
  }
}

export const skateparkSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Arinaga Skatepark",
  "description": "Skatepark moderno con zonas de Street, Bowl y Flow. Inaugurado en 2024.",
  "url": "https://skateclub-boardslide.vercel.app/arinaga-skatepark",
  "image": "https://skateclub-boardslide.vercel.app/og-cover.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle las Casuarinas, 86",
    "addressLocality": "Arinaga",
    "addressRegion": "Las Palmas",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "27.860622",
    "longitude": "-15.402764"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Skateplaza",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "Bowl",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Flow Zone",
      "value": true
    }
  ],
  "openingHours": "Mo-Su 08:00-22:00"
}

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Clases de Skate - Skate Club Boardslide",
  "description": "Clases de iniciación al skate para niños y adultos. Niveles: Iniciación Niños, Iniciación Adultos, Street y Bowl.",
  "provider": {
    "@type": "SportsClub",
    "name": "Skate Club Boardslide",
    "url": "https://skateclub-boardslide.vercel.app"
  },
  "courseMode": "blended",
  "educationalLevel": "beginner",
  "teaches": "Skateboarding",
  "coursePrerequisites": "Ninguno",
  "syllabusSections": [
    {
      "@type": "Syllabus",
      "name": "Iniciación Niños",
      "description": "Clases adaptadas para niños de 6 a 12 años"
    },
    {
      "@type": "Syllabus", 
      "name": "Iniciación Adultos",
      "description": "Clases para adultos sin experiencia previa"
    },
    {
      "@type": "Syllabus",
      "name": "Street",
      "description": "Técnicas de skate en street y obstáculos urbanos"
    },
    {
      "@type": "Syllabus",
      "name": "Bowl",
      "description": "Técnicas específicas para skate en bowl y transiciones"
    }
  ]
}

