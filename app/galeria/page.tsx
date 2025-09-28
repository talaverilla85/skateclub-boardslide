import { generateMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export const metadata = generateMetadata({
  title: 'Galería - Skate Club Boardslide',
  description:
    'Descubre nuestras instalaciones, clases y eventos en el Arinaga Skatepark. Fotos reales del club y del parque.',
  path: '/galeria',
})

// Recoge nuevas fotos sin redeploy

type ImgItem = {
  id: string
  src: string
  alt: string
  categoria: 'Galería' | 'Instalaciones' | 'Eventos'
}

const FOLDERS: { key: ImgItem['categoria']; dir: string }[] = [
  { key: 'Galería', dir: 'gallery' },
  { key: 'Instalaciones', dir: 'instalaciones' },
  { key: 'Eventos', dir: 'eventos' },
]

function readFolder(folder: string, cat: ImgItem['categoria']): ImgItem[] {
  const abs = path.join(process.cwd(), 'public', folder)
  let files: string[] = []
  try {
    files = fs
      .readdirSync(abs, { withFileTypes: true })
      .filter(
        (d) =>
          d.isFile() &&
          /\.(webp|avif|jpe?g|png)$/i.test(d.name) &&
          !d.name.startsWith('.')
      )
      .map((d) => d.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  } catch {
    files = []
  }

  return files.map((name) => {
    const base = name.replace(/\.[^.]+$/, '')
    const alt =
      (cat === 'Instalaciones' ? 'Instalaciones ' : cat === 'Eventos' ? 'Eventos ' : 'Foto ') +
      base.replace(/[-_]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
    return {
      id: `${cat}-${name}`,
      src: `/${folder}/${name}`,
      alt,
      categoria: cat,
    }
  })
}

function getAllImages(): ImgItem[] {
  const all = FOLDERS.flatMap(({ key, dir }) => readFolder(dir, key))
  // Orden natural por nombre de archivo
  return all.sort((a, b) => a.src.localeCompare(b.src, undefined, { numeric: true }))
}

const CATS: { label: string; value: 'todas' | 'galeria' | 'instalaciones' | 'eventos' }[] = [
  { label: 'Todas', value: 'todas' },
  { label: 'Galería', value: 'galeria' },
  { label: 'Instalaciones', value: 'instalaciones' },
  { label: 'Eventos', value: 'eventos' },
]

export default function GaleriaPage({
  searchParams,
}: {
  searchParams?: { cat?: string }
}) {
  const catParam = (searchParams?.cat || 'todas').toLowerCase()
  const all = getAllImages()

  const filtered =
    catParam === 'galeria'
      ? all.filter((i) => i.categoria === 'Galería')
      : catParam === 'instalaciones'
      ? all.filter((i) => i.categoria === 'Instalaciones')
      : catParam === 'eventos'
      ? all.filter((i) => i.categoria === 'Eventos')
      : all

  return (
    <div className="pt-16">
      {/* HERO urbano (spray + noise) */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-black to-neutral-900 text-white">
        <div className="container-max relative z-10 text-center">
          <h1 className="relative inline-block text-4xl md:text-5xl font-extrabold">
            Galería
            <img
              src="/textures/spray-underline.svg"
              alt=""
              className="absolute left-0 right-0 -bottom-2 mx-auto w-64 md:w-80 pointer-events-none select-none"
            />
          </h1>
          <p className="mt-3 md:mt-4 text-white/80 max-w-3xl mx-auto">
            Momentos, progresión y comunidad: fotos del club y del skatepark.
          </p>
        </div>
        <div
          className="absolute inset-0 opacity-[.04] pointer-events-none"
          style={{ backgroundImage: 'url(/textures/noise.png)' }}
        />
      </section>

      {/* FILTROS tipo sticker (enlaces con ?cat=) */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {CATS.map((c) => {
              const active =
                (catParam === 'todas' && c.value === 'todas') ||
                (catParam === 'galeria' && c.value === 'galeria') ||
                (catParam === 'instalaciones' && c.value === 'instalaciones') ||
                (catParam === 'eventos' && c.value === 'eventos')

              return (
                <Link
                  key={c.value}
                  href={c.value === 'todas' ? '/galeria' : `/galeria?cat=${c.value}`}
                  scroll={false}
                  className={[
                    'px-4 py-2 rounded-full border-2 text-sm font-extrabold shadow-[4px_4px_0_#000] transition',
                    active
                      ? 'bg-yellow-300 border-[#FF6600] text-black'
                      : 'bg-white border-[#FF6600] text-black hover:-translate-y-0.5',
                  ].join(' ')}
                >
                  {c.label}
                </Link>
              )
            })}
          </div>

          {/* GRID de imágenes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="group cursor-pointer hover:-translate-y-1 hover:rotate-1 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-[#FF6600] shadow-[6px_6px_0_#FF6600] group-hover:shadow-[8px_8px_0_#FF6600] transition-all duration-300">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Etiqueta */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-300 border-2 border-[#FF6600] shadow-[2px_2px_0_#FF6600] text-black px-3 py-1 rounded-full text-[11px] font-extrabold">
                      {img.categoria}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <p className="col-span-full text-center text-gray-600">
                No hay imágenes para esta categoría.
                <code>/public/{catParam === 'galeria' ? 'gallery' : catParam === 'instalaciones' ? 'instalaciones' : catParam === 'eventos' ? 'eventos' : 'gallery, instalaciones o eventos'}</code>.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA final con tape */}
      <section className="section-padding">
        <div className="container-max">
          <div className="relative max-w-3xl mx-auto rounded-2xl border-2 border-[#FF6600] bg-white p-6 shadow-[8px_8px_0_#FF6600] text-center">
            <img
              src="/textures/tape.svg"
              alt=""
              className="absolute -top-4 left-6 w-24 rotate-[-8deg] pointer-events-none select-none"
            />
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              ¿Quieres salir en la galería?
            </h2>
            <p className="text-lg text-gray-700 mb-5">
              Sube tu nivel con nosotros y comparte tus mejores momentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/contacto#formulario" className="btn-primary">
                Reserva tu clase
              </a>
              <a href="/clases" className="btn-secondary">
                Ver clases
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}