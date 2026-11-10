import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowUpRight,
  Image as ImageIcon,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Quote,
  Headphones,
  Play,
  Pause,
  Clock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { HistoricalMilestone } from '../types/timeline';
import {
  VOICES_ARCHIVE_DATA,
  VoiceTestimonyProfile,
} from '../data/voicesAndFarm';
import { ActiveAudioPlayback } from './AudioPlayerDock';

interface MilestoneDetailPanelProps {
  milestone: HistoricalMilestone | null;
  onOpenFullStory: (triggerEl: HTMLButtonElement | null) => void;
  onOpenLightbox: (mediaIndex: number, triggerEl: HTMLElement | null) => void;
  activePlayback?: ActiveAudioPlayback | null;
  isAudioPlaying?: boolean;
  onPlayVoice?: (
    profile: VoiceTestimonyProfile,
    trackIndex?: number,
    startSeconds?: number
  ) => void;
  onTogglePlayPause?: () => void;
}

export const MilestoneDetailPanel: React.FC<MilestoneDetailPanelProps> = ({
  milestone,
  onOpenFullStory,
  onOpenLightbox,
  activePlayback,
  isAudioPlaying,
  onPlayVoice,
  onTogglePlayPause,
}) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [showVoicesTray, setShowVoicesTray] = useState(false);

  // Reset image index when selected milestone changes
  useEffect(() => {
    setActiveMediaIndex(0);
  }, [milestone?.id]);

  const relatedVoices = useMemo(() => {
    if (!milestone) return [];
    return VOICES_ARCHIVE_DATA.filter((v) =>
      v.relatedMilestoneIds.includes(milestone.id)
    );
  }, [milestone]);

  if (!milestone) return null;

  const mediaList = milestone.media;
  const currentMedia = mediaList[activeMediaIndex] || mediaList[0];
  const featuredTestimony = milestone.testimonies[0];

  const isThisMilestoneVoicePlaying =
    Boolean(isAudioPlaying) &&
    Boolean(activePlayback) &&
    relatedVoices.some((v) => v.id === activePlayback?.profile.id);

  const handlePrevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) =>
      prev === 0 ? mediaList.length - 1 : prev - 1
    );
  };

  const handleNextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) =>
      prev === mediaList.length - 1 ? 0 : prev + 1
    );
  };

  const handleQuickPlayMilestoneVoice = () => {
    if (relatedVoices.length === 0 || !onPlayVoice) return;
    if (isThisMilestoneVoicePlaying && onTogglePlayPause) {
      onTogglePlayPause();
      return;
    }
    onPlayVoice(relatedVoices[0], 0, 0);
  };

  return (
    <section
      aria-label={`Detalle del hito: ${milestone.title}`}
      className="max-w-[1280px] mx-auto px-4 sm:px-8 mt-0.5"
    >
      <div className="rounded-2xl border border-[#B5AE9E] bg-[#FAF7F0]/90 p-3 sm:p-4 shadow-xs transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-7 items-center">
          {/* Columna Izquierda: Fotografía / Lámina Documental Interactiva */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-[#CFC8B6] bg-[#EAE3D2] h-[210px] sm:h-[242px] w-full group">
              {currentMedia && (
                <button
                  type="button"
                  onClick={(e) =>
                    onOpenLightbox(activeMediaIndex, e.currentTarget)
                  }
                  aria-label={`Ampliar imagen: ${currentMedia.title}`}
                  className="w-full h-full block relative cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38]"
                >
                  <img
                    src={currentMedia.url}
                    alt={currentMedia.alt}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />

                  {/* Etiqueta superior de autenticidad documental */}
                  <div className="absolute top-2.5 left-2.5 right-12 flex flex-wrap items-center gap-1.5 pointer-events-none">
                    {currentMedia.isRealProjectAsset ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#113826]/90 text-[#FAF7F0] text-[11px] font-medium backdrop-blur-xs shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E8D49B]" />
                        {currentMedia.assetTypeLabel}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FAF7F0]/95 text-[#3D4A41] border border-[#C59B38] text-[11px] font-medium backdrop-blur-xs shadow-xs">
                        {currentMedia.assetTypeLabel}
                      </span>
                    )}
                  </div>

                  {/* Botón flotante de lupa */}
                  <span
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#113826]/80 text-[#FAF7F0] flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:bg-[#113826] transition-all shadow-xs"
                    aria-hidden="true"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>

                  {/* Pie de imagen discreto en la parte inferior */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D261A]/90 via-[#0D261A]/60 to-transparent px-3.5 pt-6 pb-2 flex items-end justify-between gap-2 text-left">
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#FAF7F0] truncate">
                        {currentMedia.title}
                      </p>
                      <p className="text-[10.5px] text-[#E5DEC9] truncate">
                        {currentMedia.source}
                      </p>
                    </div>
                    {mediaList.length > 1 && (
                      <span className="px-2 py-0.5 rounded bg-[#FAF7F0]/20 text-[#FAF7F0] text-[10.5px] font-medium shrink-0">
                        {activeMediaIndex + 1} / {mediaList.length}
                      </span>
                    )}
                  </div>
                </button>
              )}

              {/* Controles para cambiar de imagen si el hito tiene varias */}
              {mediaList.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevMedia}
                    aria-label="Imagen anterior del hito"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#FAF7F0]/90 hover:bg-[#113826] text-[#113826] hover:text-[#FAF7F0] border border-[#B5AE9E] flex items-center justify-center shadow-sm transition-colors cursor-pointer z-10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMedia}
                    aria-label="Siguiente imagen del hito"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#FAF7F0]/90 hover:bg-[#113826] text-[#113826] hover:text-[#FAF7F0] border border-[#B5AE9E] flex items-center justify-center shadow-sm transition-colors cursor-pointer z-10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Columna Derecha: Año, Categoría, Título, Descripción y Acciones */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Aviso visible cuando es Contenido de ejemplo pendiente de validación */}
            {milestone.verificationStatus === 'ejemplo' && (
              <div
                role="status"
                className="mb-2 rounded-lg bg-[#C59B38]/20 border border-[#C59B38] px-3 py-1.5 flex items-start gap-2 text-[#684B09]"
              >
                <AlertTriangle className="w-4 h-4 text-[#9E7820] shrink-0 mt-0.5" />
                <div className="text-xs leading-snug">
                  <strong className="font-semibold">
                    Contenido de ejemplo pendiente de validación:{' '}
                  </strong>
                  <span>{milestone.verificationNote}</span>
                </div>
              </div>
            )}

            {/* Línea superior: AÑO · CATEGORÍA + Sedes */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="text-xs sm:text-[13.5px] font-semibold uppercase tracking-[0.16em] text-[#132A1E]">
                {milestone.year} · {milestone.category.toUpperCase()}
              </span>
              {milestone.periodLabel !== String(milestone.year) && (
                <span className="text-[11px] font-medium text-[#5A625C] bg-[#EAE3D2] px-2 py-0.5 rounded-full">
                  {milestone.periodLabel}
                </span>
              )}
              <span className="text-[11px] font-medium text-[#113826] bg-[#113826]/8 px-2 py-0.5 rounded-md">
                {milestone.sedes.slice(0, 2).join(', ')}
                {milestone.sedes.length > 2
                  ? ` +${milestone.sedes.length - 2}`
                  : ''}
              </span>
            </div>

            {/* Barra corta dorada debajo del año y categoría (fiel a la imagen de referencia) */}
            <div
              className="w-11 h-[3px] bg-[#C59B38] rounded-full mt-1 mb-2"
              aria-hidden="true"
            />

            {/* Título principal del hito en serif elegante */}
            <h2 className="font-serif-display text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#0F3322] leading-[1.12] tracking-tight">
              {milestone.title}
            </h2>

            {/* Resumen conciso */}
            <p className="mt-2 text-sm sm:text-[15.5px] text-[#2B3930] leading-relaxed">
              {milestone.summary}
            </p>

            {/* Cita breve destacada de memoria oral */}
            {featuredTestimony && (
              <blockquote className="mt-2 pl-3 border-l-2 border-[#C59B38] bg-[#F4EFE4]/70 py-1 pr-3 rounded-r-lg">
                <p className="font-serif-editorial italic text-xs text-[#2C3A31] line-clamp-1">
                  <Quote
                    className="w-3 h-3 inline mr-1 text-[#9E7820] -mt-0.5"
                    aria-hidden="true"
                  />
                  “{featuredTestimony.quote}” —{' '}
                  <span className="not-italic font-sans-ui font-medium text-[#5A625C]">
                    {featuredTestimony.authorRole}
                  </span>
                </p>
              </blockquote>
            )}

            {/* Botón "Ver historia completa", contador de fotografías y botón de Audio Oral */}
            <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={(e) => onOpenFullStory(e.currentTarget)}
                className="inline-flex items-center gap-1.5 bg-[#113826] hover:bg-[#1D4D37] text-[#FAF7F0] font-medium text-xs sm:text-[13.5px] px-4 py-1.5 rounded-full sm:rounded-lg shadow-xs transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38]"
              >
                <span>Ver historia completa</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              <div className="h-5 w-px bg-[#B5AE9E]" aria-hidden="true" />

              <button
                type="button"
                onClick={(e) =>
                  onOpenLightbox(activeMediaIndex, e.currentTarget)
                }
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#1A2E22] hover:text-[#9E7820] transition-colors cursor-pointer py-1 px-1.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38]"
              >
                <ImageIcon
                  className="w-3.5 h-3.5 text-[#113826]"
                  aria-hidden="true"
                />
                <span>
                  {mediaList.length}{' '}
                  {mediaList.length === 1 ? 'documento' : 'fotografías'}
                </span>
              </button>

              {/* Controles de Relato Sonoro para este punto de la línea de tiempo */}
              {relatedVoices.length > 0 && onPlayVoice && (
                <>
                  <div className="h-5 w-px bg-[#B5AE9E]" aria-hidden="true" />
                  <div className="inline-flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handleQuickPlayMilestoneVoice}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        isThisMilestoneVoicePlaying
                          ? 'bg-[#C59B38] text-[#0F2E1F] border-[#9E7820] shadow-xs'
                          : 'bg-[#F4EFE4] hover:bg-[#113826] text-[#113826] hover:text-[#FAF7F0] border-[#C59B38]'
                      }`}
                    >
                      {isThisMilestoneVoicePlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          <span>Pausar relato</span>
                        </>
                      ) : (
                        <>
                          <Headphones className="w-3.5 h-3.5" />
                          <span>
                            Escuchar ({relatedVoices.length}{' '}
                            {relatedVoices.length === 1 ? 'voz' : 'voces'})
                          </span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowVoicesTray((v) => !v)}
                      aria-expanded={showVoicesTray}
                      aria-label="Elegir narrador o marca de tiempo de este hito"
                      title="Elegir narrador o marca de tiempo de este hito"
                      className="p-1.5 rounded-lg border border-[#C7BFA8] bg-[#F4EFE4] hover:border-[#C59B38] text-[#113826] transition-colors cursor-pointer"
                    >
                      {showVoicesTray ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bandeja desplegable de voces y marcas de tiempo vinculadas a este hito */}
        {showVoicesTray && relatedVoices.length > 0 && onPlayVoice && (
          <div className="mt-3.5 pt-3.5 border-t border-[#DCD5C3] animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#113826] flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-[#9E7820]" />
                Relatos orales y transcripciones disponibles para este hito ({milestone.periodLabel})
              </span>
              <span className="text-[11px] text-[#5A625C]">
                Haz clic en un narrador o marca de tiempo para escuchar su grabación original
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {relatedVoices.map((voice) => {
                const isVoiceActive =
                  activePlayback?.profile.id === voice.id && isAudioPlaying;
                const firstTrackSegments = voice.tracks[0]?.segments || [];

                return (
                  <div
                    key={voice.id}
                    className={`rounded-xl border p-2.5 transition-all flex flex-col justify-between ${
                      isVoiceActive
                        ? 'bg-[#113826]/8 border-[#C59B38]'
                        : 'bg-[#F4EFE4]/80 border-[#D4CCB8]'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#113826] truncate">
                            {voice.name}
                          </p>
                          <p className="text-[11px] text-[#4A524C] truncate">
                            {voice.role}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            if (isVoiceActive && onTogglePlayPause) {
                              onTogglePlayPause();
                            } else {
                              onPlayVoice(voice, 0, 0);
                            }
                          }}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold shrink-0 cursor-pointer transition-colors ${
                            isVoiceActive
                              ? 'bg-[#C59B38] text-[#0F2E1F]'
                              : 'bg-[#113826] hover:bg-[#1D4D37] text-[#FAF7F0]'
                          }`}
                        >
                          {isVoiceActive ? (
                            <>
                              <Pause className="w-3 h-3 fill-current" />
                              <span>Pausar</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3 h-3 fill-current" />
                              <span>Escuchar</span>
                            </>
                          )}
                        </button>
                      </div>

                      {firstTrackSegments.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {firstTrackSegments.slice(0, 2).map((seg, sIdx) => (
                            <button
                              key={sIdx}
                              type="button"
                              onClick={() =>
                                onPlayVoice(voice, 0, seg.startSeconds)
                              }
                              title={`${seg.topic}: “${seg.text}”`}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#EAE3D2] hover:bg-[#C59B38]/30 text-[#113826] text-[10.5px] font-medium transition-colors cursor-pointer"
                            >
                              <Clock className="w-2.5 h-2.5 text-[#9E7820]" />
                              <span className="font-mono">{seg.timeLabel.split(' ')[0]}</span>
                              <span className="truncate max-w-[130px]">
                                {seg.topic}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
