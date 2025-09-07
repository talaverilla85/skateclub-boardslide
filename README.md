# Skate Club Boardslide

Sitio web oficial del Skate Club Boardslide - Club de skate federado en Gran Canaria.

## 🚀 Características

- **Next.js 14** con App Router y TypeScript
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Formspree** para formularios
- **SEO optimizado** con metadata y schema.org
- **Responsive design** para todos los dispositivos
- **Optimizado para Vercel**

## 📁 Estructura del Proyecto

```
app/
  layout.tsx              # Layout principal
  page.tsx               # Página de inicio
  clases/page.tsx        # Página de clases
  horarios-precios/page.tsx
  entrenadores/page.tsx
  arinaga-skatepark/page.tsx
  galeria/page.tsx
  noticias/page.tsx
  contacto/page.tsx
  (legal)/               # Páginas legales
    aviso-legal/page.tsx
    privacidad/page.tsx
    cookies/page.tsx

components/
  Navbar.tsx            # Navegación principal
  Footer.tsx            # Pie de página
  Hero.tsx              # Sección hero
  FeatureCard.tsx       # Tarjetas de características
  AnimatedCounter.tsx   # Contadores animados
  InscriptionForm.tsx   # Formulario de inscripción
  FAQ.tsx              # Preguntas frecuentes
  Analytics.tsx        # Google Analytics

lib/
  seo.ts               # Utilidades SEO
  schema.ts            # Schema.org JSON-LD
```

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd skateclub-boardslide
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

Editar `.env.local`:
```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/tu-endpoint
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Opcional
```

4. **Ejecutar en desarrollo**
```bash
pnpm dev
```

## 🚀 Deploy en Vercel

### Opción 1: Deploy automático desde GitHub

1. **Conectar repositorio a Vercel**
   - Ir a [vercel.com](https://vercel.com)
   - Importar proyecto desde GitHub
   - Vercel detectará automáticamente Next.js

2. **Configurar variables de entorno**
   - En el dashboard de Vercel
   - Settings → Environment Variables
   - Añadir `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

3. **Deploy**
   - Vercel hará deploy automático en cada push

### Opción 2: Deploy manual

1. **Instalar Vercel CLI**
```bash
npm i -g vercel
```

2. **Login y deploy**
```bash
vercel login
vercel
```

3. **Configurar variables**
```bash
vercel env add NEXT_PUBLIC_FORMSPREE_ENDPOINT
```

## 📝 Configuración de Formspree

1. **Crear cuenta en [Formspree](https://formspree.io)**
2. **Crear nuevo formulario**
3. **Copiar endpoint** (ej: `https://formspree.io/f/xpzgkqyw`)
4. **Añadir a variables de entorno**

## 🎨 Personalización

### Colores
Editar `tailwind.config.js`:
```js
colors: {
  primary: {
    // Colores principales del club
  }
}
```

### Contenido
- **Textos**: Editar directamente en los componentes
- **Imágenes**: Reemplazar URLs en `public/` o usar Unsplash
- **Datos**: Modificar arrays de datos en cada página

### SEO
- **Metadata**: Editar `lib/seo.ts`
- **Schema.org**: Modificar `lib/schema.ts`
- **Sitemap**: Actualizar `app/sitemap.xml`

## 📱 Funcionalidades

### ✅ Implementadas
- [x] Página de inicio con hero y características
- [x] Páginas de clases, horarios, entrenadores
- [x] Galería de imágenes
- [x] Formulario de contacto con Formspree
- [x] Páginas legales (aviso legal, privacidad, cookies)
- [x] SEO optimizado
- [x] Responsive design
- [x] Animaciones con Framer Motion
- [x] Schema.org para rich snippets

### 🔄 Futuras mejoras
- [ ] Sistema de reservas online
- [ ] Blog integrado
- [ ] Galería de videos
- [ ] Sistema de membresías
- [ ] Integración con redes sociales

## 🧪 Testing

```bash
# Linting
pnpm lint

# Build de producción
pnpm build

# Iniciar servidor de producción
pnpm start
```

## 📊 Performance

- **Lighthouse Score**: >90 en Performance, SEO, Best Practices
- **Core Web Vitals**: Optimizado
- **Images**: Next.js Image con lazy loading
- **Fonts**: Sistema fonts para mejor performance

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: skateclubgrancanaria@gmail.com
- **Teléfono**: +34 613 03 34 13
- **Ubicación**: Calle las Casuarinas, 86, Arinaga, Gran Canaria

---

Desarrollado con ❤️ para el Skate Club Boardslide

