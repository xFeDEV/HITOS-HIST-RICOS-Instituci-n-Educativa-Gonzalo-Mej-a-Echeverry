import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, AlertTriangle } from 'lucide-react';
import { HistoricalMilestone } from '../types/timeline';

interface TimelineSectionProps {
  milestones: HistoricalMilestone[];
  selectedMilestoneId: string | null;
  onSelectMilestone: (id: string) => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onResetFilters: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  milestones,
  selectedMilestoneId,
  onSelectMilestone,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  onResetFilters,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Drag-to-scroll state for desktop mouse interaction
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const dragDistanceRef = useRef(0);

  // Center selected milestone smoothly in the horizontal scroll container
  useEffect(() => {
    if (!selectedMilestoneId || !scrollContainerRef.current) return;
    const nodeEl = itemRefs.current[selectedMilestoneId];
    const container = scrollContainerRef.current;
    if (nodeEl) {
      const containerRect = container.getBoundingClientRect();
      const nodeRect = nodeEl.getBoundingClientRect();
      const offset =
        nodeRect.left -
        containerRect.left -
        containerRect.width / 2 +
        nodeRect.width / 2;
      container.scrollBy({
        left: offset,
        behavior: 'smooth',
      });
    }
  }, [selectedMilestoneId, milestones.length]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    dragDistanceRef.current = 0;
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPos(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.25;
    dragDistanceRef.current = Math.abs(x - startX);
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (hasPrev) onPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (hasNext) onNext();
    }
  };

  // Empty State when filters/search return 0 results
  if (milestones.length === 0) {
    return (
      <section
        aria-label="Sin resultados en la línea de tiempo"
        className="max-w-[1280px] mx-auto px-4 sm:px-8 my-6"
      >
        <div className="rounded-2xl border border-[#C7BFA8] bg-[#FAF7F0]/85 p-8 sm:p-12 text-center shadow-xs">
          <p className="font-serif-display text-2xl sm:text-3xl font-bold text-[#113826]">
            No se encontraron hitos históricos con estos criterios
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#3D4A41] max-w-lg mx-auto">
            Intenta con otra palabra clave, selecciona otra categoría o amplía el
            intervalo de años en el control temporal inferior.
          </p>
          <button
            type="button"
            onClick={onResetFilters}
            className="mt-5 inline-flex items-center gap-2 bg-[#113826] hover:bg-[#1D4D37] text-[#FAF7F0] px-5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38]"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            Restablecer todos los filtros
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Línea de tiempo de hitos históricos"
      onKeyDown={handleKeyDown}
      className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-1 pb-2 select-none"
    >
      {/* =====================================================================
          VISTA DE ESCRITORIO (md y superior): Línea de tiempo horizontal
          con tarjetas alternadas arriba y abajo, fiel a la imagen de referencia
         ===================================================================== */}
      <div className="hidden md:flex items-center gap-2 relative">
        {/* Botón Anterior (<) alineado al eje central */}
        <button
          type="button"
          onClick={onPrev}
          disabled={!hasPrev}
          aria-label="Hito anterior en orden cronológico"
          className={`w-9 h-9 -mt-3 rounded-full border flex items-center justify-center shrink-0 transition-all z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38] ${
            hasPrev
              ? 'border-[#4A524C] bg-[#FAF7F0] text-[#113826] hover:bg-[#113826] hover:text-[#FAF7F0] hover:border-[#113826] cursor-pointer shadow-xs'
              : 'border-[#C7BFA8] bg-[#FAF7F0]/40 text-[#9CA39E] cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Contenedor desplazable horizontalmente */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`timeline-scroll flex-1 overflow-x-auto overflow-y-visible py-1 px-4 ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          role="listbox"
          aria-label="Hitos históricos en orden cronológico"
          tabIndex={0}
        >
          <div
            className="relative flex items-center justify-between min-w-max mx-auto"
            style={{
              minWidth: `${Math.max(milestones.length * 225, 980)}px`,
            }}
          >
            {/* Línea horizontal continua verde oscuro en el eje central */}
            <div
              className="absolute left-0 right-0 top-1/2 -translate-y-[8px] h-[2.5px] bg-[#113826] z-0 pointer-events-none"
              aria-hidden="true"
            />

            {milestones.map((milestone, index) => {
              const isSelected = milestone.id === selectedMilestoneId;
              // Alternancia arriba y abajo para que el hito central quede en la fila superior como en la referencia
              const isTop =
                milestones.length > 5 ? index % 2 === 1 : index % 2 === 0;
              const coverMedia = milestone.media[0];

              const renderCard = (position: 'top' | 'bottom') => (
                <button
                  type="button"
                  onClick={() => {
                    if (dragDistanceRef.current < 8) {
                      onSelectMilestone(milestone.id);
                    }
                  }}
                  aria-selected={isSelected}
                  role="option"
                  className={`group relative w-[252px] text-left rounded-xl p-2 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38] ${
                    isSelected
                      ? 'bg-[#FAF7F0] border-2 border-[#C59B38] shadow-[0_6px_22px_rgba(197,155,56,0.22)] ring-2 ring-[#C59B38]/25 scale-[1.02] z-20'
                      : 'bg-[#FAF7F0]/90 hover:bg-[#FAF7F0] border border-[#9E9788] hover:border-[#113826] shadow-xs z-10'
                  }`}
                >
                  {/* Puntero triangular superior (cuando la tarjeta está abajo del eje) */}
                  {position === 'bottom' && (
                    <span
                      aria-hidden="true"
                      className={`absolute -top-[8px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-[#FAF7F0] ${
                        isSelected
                          ? 'border-t-2 border-l-2 border-[#C59B38]'
                          : 'border-t border-l border-[#9E9788] group-hover:border-[#113826]'
                      }`}
                    />
                  )}

                  <div className="flex items-center gap-3 relative z-10">
                    {/* Miniatura de imagen */}
                    <div className="w-[108px] h-[66px] rounded-lg overflow-hidden shrink-0 border border-[#DCD5C3] bg-[#EAE3D2] relative">
                      {coverMedia && (
                        <img
                          src={coverMedia.url}
                          alt={coverMedia.alt}
                          loading="lazy"
                          width={108}
                          height={66}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          draggable={false}
                        />
                      )}
                      {milestone.verificationStatus === 'ejemplo' && (
                        <span
                          className="absolute bottom-1 left-1 right-1 bg-[#C59B38] text-[#113826] text-[8.5px] font-bold uppercase tracking-wider px-1 py-0.5 rounded text-center truncate"
                          title="Contenido de ejemplo pendiente de validación"
                        >
                          En validación
                        </span>
                      )}
                    </div>

                    {/* Título corto del hito */}
                    <div className="flex-1 min-w-0 pr-1">
                      <p className="font-serif-display text-[16px] font-bold text-[#113826] leading-[1.18] line-clamp-2">
                        {milestone.shortTitle}
                      </p>
                      <p className="mt-0.5 text-[11px] font-medium text-[#5A625C] truncate">
                        {milestone.category}
                      </p>
                    </div>
                  </div>

                  {/* Puntero triangular inferior (cuando la tarjeta está arriba del eje) */}
                  {position === 'top' && (
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-[#FAF7F0] ${
                        isSelected
                          ? 'border-b-2 border-r-2 border-[#C59B38]'
                          : 'border-b border-r border-[#9E9788] group-hover:border-[#113826]'
                      }`}
                    />
                  )}
                </button>
              );

              return (
                <div
                  key={milestone.id}
                  ref={(el) => {
                    itemRefs.current[milestone.id] = el;
                  }}
                  className="flex flex-col items-center w-[220px] shrink-0 relative"
                >
                  {/* Fila Superior */}
                  <div className="h-[96px] flex items-end justify-center pb-2">
                    {isTop ? renderCard('top') : null}
                  </div>

                  {/* Eje Central: Nodo circular y Año */}
                  <div className="h-[52px] flex flex-col items-center justify-start relative z-20">
                    <button
                      type="button"
                      onClick={() => onSelectMilestone(milestone.id)}
                      aria-label={`Seleccionar hito del año ${milestone.year}: ${milestone.shortTitle}`}
                      className="flex flex-col items-center group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38] rounded-full"
                    >
                      {isSelected ? (
                        <span className="w-7 h-7 -mt-1.5 rounded-full border-[2.5px] border-[#C59B38] bg-[#FAF7F0] flex items-center justify-center shadow-sm">
                          <span className="w-3.5 h-3.5 rounded-full bg-[#113826]" />
                        </span>
                      ) : (
                        <span className="w-4 h-4 mt-0.5 rounded-full border-[2.5px] border-[#113826] bg-[#FAF7F0] group-hover:border-[#C59B38] group-hover:scale-110 transition-all" />
                      )}

                      {/* Etiqueta del año debajo del nodo (en pastilla verde cuando está seleccionado) */}
                      {isSelected ? (
                        <span className="mt-1 px-3 py-0.5 rounded-md bg-[#113826] text-[#FAF7F0] font-serif-display font-bold text-[15px] leading-tight shadow-xs">
                          {milestone.year}
                        </span>
                      ) : (
                        <span className="mt-1 font-serif-display font-bold text-[16px] text-[#113826] group-hover:text-[#9E7820] leading-tight transition-colors">
                          {milestone.year}
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Fila Inferior */}
                  <div className="h-[96px] flex items-start justify-center pt-1">
                    {!isTop ? renderCard('bottom') : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botón Siguiente (>) alineado al eje central */}
        <button
          type="button"
          onClick={onNext}
          disabled={!hasNext}
          aria-label="Siguiente hito en orden cronológico"
          className={`w-9 h-9 -mt-3 rounded-full border flex items-center justify-center shrink-0 transition-all z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38] ${
            hasNext
              ? 'border-[#4A524C] bg-[#FAF7F0] text-[#113826] hover:bg-[#113826] hover:text-[#FAF7F0] hover:border-[#113826] cursor-pointer shadow-xs'
              : 'border-[#C7BFA8] bg-[#FAF7F0]/40 text-[#9CA39E] cursor-not-allowed'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* =====================================================================
          VISTA MÓVIL (< md): Disposición vertical sin desbordamiento horizontal
         ===================================================================== */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3D4A41]">
            Recorrido cronológico ({milestones.length} hitos)
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              aria-label="Hito anterior"
              className="w-8 h-8 rounded-full border border-[#4A524C] bg-[#FAF7F0] text-[#113826] disabled:opacity-40 flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              aria-label="Siguiente hito"
              className="w-8 h-8 rounded-full border border-[#4A524C] bg-[#FAF7F0] text-[#113826] disabled:opacity-40 flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative pl-6 border-l-2 border-[#113826] space-y-3 py-1">
          {milestones.map((milestone) => {
            const isSelected = milestone.id === selectedMilestoneId;
            const coverMedia = milestone.media[0];
            return (
              <div key={milestone.id} className="relative">
                {/* Nodo en el eje vertical */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[31px] top-4 rounded-full flex items-center justify-center ${
                    isSelected
                      ? 'w-5 h-5 -left-[33px] border-2 border-[#C59B38] bg-[#FAF7F0]'
                      : 'w-3.5 h-3.5 border-2 border-[#113826] bg-[#FAF7F0]'
                  }`}
                >
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#113826]" />
                  )}
                </span>

                <button
                  type="button"
                  onClick={() => onSelectMilestone(milestone.id)}
                  className={`w-full text-left rounded-xl p-2.5 flex items-center gap-3 transition-all ${
                    isSelected
                      ? 'bg-[#FAF7F0] border-2 border-[#C59B38] shadow-sm'
                      : 'bg-[#FAF7F0]/80 border border-[#C7BFA8]'
                  }`}
                >
                  <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 border border-[#DCD5C3] bg-[#EAE3D2]">
                    {coverMedia && (
                      <img
                        src={coverMedia.url}
                        alt={coverMedia.alt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-serif-display font-bold text-xs px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-[#113826] text-[#FAF7F0]'
                            : 'bg-[#113826]/10 text-[#113826]'
                        }`}
                      >
                        {milestone.year}
                      </span>
                      <span className="text-[11px] font-medium text-[#4A524C]">
                        {milestone.category}
                      </span>
                      {milestone.verificationStatus === 'ejemplo' && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-[#C59B38]/25 text-[#7A5910] px-1.5 py-0.5 rounded">
                          <AlertTriangle className="w-3 h-3" />
                          En validación
                        </span>
                      )}
                    </div>
                    <p className="font-serif-display font-bold text-[15px] text-[#113826] leading-snug mt-1 truncate">
                      {milestone.shortTitle}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
