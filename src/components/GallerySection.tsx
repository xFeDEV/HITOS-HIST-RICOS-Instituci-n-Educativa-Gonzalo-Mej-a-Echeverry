import React, { useState, useMemo } from 'react';
import {
  ZoomIn,
  CheckCircle2,
  Layers,
  ExternalLink,
  AlertTriangle,
} from 'lucide-react';
import { HistoricalMilestone, MilestoneMedia } from '../types/timeline';
import { PROJECT_ARCHIVE_MEDIA } from '../data/milestones';

interface GallerySectionProps {
  milestones: HistoricalMilestone[];
  onOpenLightboxWithList: (
    list: MilestoneMedia[],
    index: number,
    triggerEl: HTMLElement | null
  ) => void;
  onSelectMilestoneFromGallery: (milestoneId: string) => void;
}

type GalleryFilter = 'todos' | 'reales' | 'laminas';

export const GallerySection: React.FC<GallerySectionProps> = ({
  milestones,
  onOpenLightboxWithList,
  onSelectMilestoneFromGallery,
}) => {
  const [filter, setFilter] = useState<GalleryFilter>('todos');

  // Construir colección única de recursos gráficos con referencia al hito
  const galleryItems = useMemo(() => {
    const seen = new Set<string>();
    const items: Array<{
      media: MilestoneMedia;
      milestoneId?: string;
      milestoneTitle?: string;
    }> = [];

    // Primero los archivos reales del proyecto
    Object.values(PROJECT_ARCHIVE_MEDIA).forEach((media) => {
      seen.add(media.id);
      const linkedMilestone = milestones.find((m) =>
        m.media.some((item) => item.id === media.id)
      );
      items.push({
        media,
        milestoneId: linkedMilestone?.id,
        milestoneTitle: linkedMilestone?.shortTitle,
      });
    });

    // Luego las láminas asociadas a cada hito
    milestones.forEach((m) => {
      m.media.forEach((media) => {
        if (!seen.has(media.id)) {
          seen.add(media.id);
          items.push({
            media,
            milestoneId: m.id,
            milestoneTitle: `${m.year} · ${m.shortTitle}`,
          });
        }
      });
    });

    return items;
  }, [milestones]);

  const filteredItems = useMemo(() => {
    if (filter === 'reales') {
      return galleryItems.filter((item) => item.media.isRealProjectAsset);
    }
    if (filter === 'laminas') {
      return galleryItems.filter((item) => !item.media.isRealProjectAsset);
    }
    return galleryItems;
  }, [galleryItems, filter]);

  const mediaOnlyList = useMemo(
    () => filteredItems.map((i) => i.media),
    [filteredItems]
  );

  const realCount = useMemo(
    () => galleryItems.filter((i) => i.media.isRealProjectAsset).length,
    [galleryItems]
  );
  const laminasCount = useMemo(
    () => galleryItems.filter((i) => !i.media.isRealProjectAsset).length,
    [galleryItems]
  );

  return (
    <section
      id="galeria"
      aria-labelledby="gallery-heading"
      className="border-t border-[#C7BFA8] py-12 sm:py-16 bg-[#EFE9DA]/45"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Encabezado de sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#C7BFA8]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#113826] mb-1.5">
              PATRIMONIO VISUAL Y CARTOGRÁFICO
            </p>
            <h2
              id="gallery-heading"
              className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0F3322]"
            >
              Galería documental y láminas de memoria
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#2C3A31] max-w-2xl">
              Explora los archivos gráficos verificados presentes en la carpeta de
              investigación junto con las láminas de reconstrucción visual elaboradas
              a partir de los testimonios orales de las seis sedes.
            </p>
          </div>

          {/* Filtros de autenticidad visual */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filtrar galería por tipo de recurso"
          >
            <button
              type="button"
              onClick={() => setFilter('todos')}
              aria-pressed={filter === 'todos'}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                filter === 'todos'
                  ? 'bg-[#113826] text-[#FAF7F0]'
                  : 'bg-[#FAF7F0] text-[#1A2E22] border border-[#8E8778] hover:border-[#113826]'
              }`}
            >
              Todos ({galleryItems.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('reales')}
              aria-pressed={filter === 'reales'}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                filter === 'reales'
                  ? 'bg-[#113826] text-[#FAF7F0]'
                  : 'bg-[#FAF7F0] text-[#1A2E22] border border-[#8E8778] hover:border-[#113826]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B38]" />
              <span>Archivos reales del proyecto ({realCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter('laminas')}
              aria-pressed={filter === 'laminas'}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                filter === 'laminas'
                  ? 'bg-[#113826] text-[#FAF7F0]'
                  : 'bg-[#FAF7F0] text-[#1A2E22] border border-[#8E8778] hover:border-[#113826]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#9E7820]" />
              <span>Láminas esquemáticas ({laminasCount})</span>
            </button>
          </div>
        </div>

        {/* Nota de transparencia documental */}
        <div className="mt-5 rounded-xl bg-[#FAF7F0] border border-[#C7BFA8] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#2C3A31]">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-4 h-4 text-[#9E7820] shrink-0" />
            <span>
              <strong>Criterio de rigor histórico:</strong> Los documentos extraídos
              de los archivos originales del proyecto llevan el sello{' '}
              <span className="font-semibold text-[#113826]">
                «Archivo real del proyecto»
              </span>
              . Las reconstrucciones gráficas se identifican expresamente como{' '}
              <span className="font-semibold text-[#7A5910]">
                «Lámina documental ilustrativa»
              </span>{' '}
              mientras avanza la digitalización del archivo fotográfico familiar de
              Altagracia.
            </span>
          </div>
        </div>

        {/* Cuadrícula de tarjetas de galería */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, idx) => {
            const { media, milestoneId, milestoneTitle } = item;
            return (
              <article
                key={media.id}
                className="rounded-2xl border border-[#B5AE9E] bg-[#FAF7F0] overflow-hidden shadow-xs hover:shadow-md hover:border-[#C59B38] transition-all flex flex-col"
              >
                <button
                  type="button"
                  onClick={(e) =>
                    onOpenLightboxWithList(mediaOnlyList, idx, e.currentTarget)
                  }
                  aria-label={`Ampliar en visor: ${media.title}`}
                  className="relative aspect-16/10 w-full bg-[#E5DEC9] overflow-hidden group cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38]"
                >
                  <img
                    src={media.url}
                    alt={media.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <span
                    className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[11px] font-semibold shadow-xs ${
                      media.isRealProjectAsset
                        ? 'bg-[#113826] text-[#FAF7F0]'
                        : 'bg-[#FAF7F0]/95 text-[#6E4F0B] border border-[#C59B38]'
                    }`}
                  >
                    {media.isRealProjectAsset
                      ? 'Archivo real del proyecto'
                      : 'Lámina ilustrativa'}
                  </span>

                  <span className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-[#113826]/80 text-[#FAF7F0] flex items-center justify-center group-hover:bg-[#113826] transition-colors">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </button>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-[#5A625C] mb-1">
                      <span className="font-semibold text-[#9E7820]">
                        {media.yearOrPeriod}
                      </span>
                      {media.sede && <span>{media.sede}</span>}
                    </div>
                    <h3 className="font-serif-display text-lg font-bold text-[#113826] leading-snug">
                      {media.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#3D4A41] line-clamp-3 leading-relaxed">
                      {media.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#DCD5C3] flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[#5A625C] truncate">
                      {media.source}
                    </span>

                    {milestoneId && (
                      <button
                        type="button"
                        onClick={() => onSelectMilestoneFromGallery(milestoneId)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#113826] hover:text-[#9E7820] shrink-0 cursor-pointer"
                      >
                        <span>Ver en línea de tiempo</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
