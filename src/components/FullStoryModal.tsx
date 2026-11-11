import React, { useEffect, useRef, useMemo } from 'react';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  BookOpen,
  Quote,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  FileText,
  Headphones,
  Play,
  Pause,
  Clock,
} from 'lucide-react';
import { HistoricalMilestone } from '../types/timeline';
import {
  VOICES_ARCHIVE_DATA,
  VoiceTestimonyProfile,
} from '../data/voicesAndFarm';
import { ActiveAudioPlayback } from './AudioPlayerDock';

interface FullStoryModalProps {
  milestone: HistoricalMilestone | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
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

export const FullStoryModal: React.FC<FullStoryModalProps> = ({
  milestone,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  onOpenLightbox,
  activePlayback,
  isAudioPlaying,
  onPlayVoice,
  onTogglePlayPause,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const relatedVoices = useMemo(() => {
    if (!milestone) return [];
    return VOICES_ARCHIVE_DATA.filter((v) =>
      v.relatedMilestoneIds.includes(milestone.id)
    );
  }, [milestone]);

  if (!isOpen || !milestone) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0D261A]/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-story-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#FAF7F0] border-2 border-[#C59B38] shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 bg-[#F4EFE4] border-b border-[#C7BFA8]">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-md bg-[#113826] text-[#FAF7F0] font-serif-display font-bold text-sm">
              {milestone.periodLabel}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#3D4A41]">
              {milestone.category}
            </span>
            {milestone.verificationStatus === 'verificado' ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#113826]/10 text-[#113826] text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                Hito documentado en archivo
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C59B38]/25 text-[#6E4F0B] border border-[#C59B38] text-xs font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
                Contenido de ejemplo pendiente de validación
              </span>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de historia completa (Escape)"
            className="w-9 h-9 rounded-full border border-[#8E8778] bg-[#FAF7F0] hover:bg-[#113826] text-[#113826] hover:text-[#FAF7F0] flex items-center justify-center transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6">
          {/* Validation Banner if needed */}
          {milestone.verificationNote && (
            <div
              className={`rounded-xl p-3.5 border flex items-start gap-3 text-xs sm:text-sm ${
                milestone.verificationStatus === 'ejemplo'
                  ? 'bg-[#C59B38]/15 border-[#C59B38] text-[#5C4309]'
                  : 'bg-[#113826]/5 border-[#C7BFA8] text-[#2C3A31]'
              }`}
            >
              <AlertTriangle
                className="w-4 h-4 text-[#9E7820] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <strong className="font-semibold">
                  {milestone.verificationStatus === 'ejemplo'
                    ? 'Contenido de ejemplo pendiente de validación: '
                    : 'Nota metodológica sobre datación oral: '}
                </strong>
                <span>{milestone.verificationNote}</span>
              </div>
            </div>
          )}

          {/* Title & Sedes */}
          <div>
            <h2
              id="modal-story-title"
              className="font-serif-display text-2xl sm:text-4xl font-bold text-[#0F3322] leading-tight"
            >
              {milestone.title}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#3D4A41]">
                <MapPin className="w-3.5 h-3.5 text-[#113826]" />
                Sedes involucradas:
              </span>
              {milestone.sedes.map((sede) => (
                <span
                  key={sede}
                  className="text-xs font-medium bg-[#EFE9DA] text-[#113826] border border-[#C7BFA8] px-2.5 py-0.5 rounded-md"
                >
                  {sede}
                </span>
              ))}
            </div>
          </div>

          {/* Full Narrative Paragraphs / Draft indicator */}
          <div className="space-y-4 font-serif-editorial text-[16px] sm:text-[17.5px] text-[#1F2F25] leading-relaxed">
            {milestone.fullDescription.map((paragraph, idx) => {
              const isDraft = paragraph.trim().toLowerCase() === 'borrador';
              if (isDraft) {
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#C59B38]/15 border border-[#C59B38]/50 text-[#6E4F0B] font-sans font-semibold text-xs tracking-wider uppercase"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#8C640E]" aria-hidden="true" />
                    <span>Borrador</span>
                  </div>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Key Historical Facts */}
          <div className="rounded-xl bg-[#F4EFE4] border border-[#C7BFA8] p-4 sm:p-5">
            <h3 className="font-serif-display text-lg font-bold text-[#113826] flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-[#9E7820]" aria-hidden="true" />
              Puntos clave de este periodo histórico
            </h3>
            <ul className="space-y-2 text-sm sm:text-[15px] text-[#2B3930]">
              {milestone.keyFacts.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span
                    className="w-2 h-2 rounded-full bg-[#C59B38] mt-2 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NUEVA SECCIÓN: Grabaciones Originales y Transcripciones con Marcas de Tiempo */}
          {relatedVoices.length > 0 && onPlayVoice && (
            <div className="rounded-2xl bg-[#113826]/6 border-2 border-[#C59B38] p-4 sm:p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7820]">
                    Archivo Sonoro y Transcripción Sincronizada
                  </span>
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#0F3322] flex items-center gap-2">
                    <Headphones
                      className="w-5 h-5 text-[#113826]"
                      aria-hidden="true"
                    />
                    Escuchar relatos originales de este hito ({relatedVoices.length}{' '}
                    {relatedVoices.length === 1 ? 'entrevistado' : 'entrevistados'})
                  </h3>
                </div>
                <span className="text-xs text-[#4A524C]">
                  Haz clic en una parte o marca de tiempo para escuchar la voz real
                </span>
              </div>

              <div className="space-y-3">
                {relatedVoices.map((voice) => {
                  const isThisVoicePlaying =
                    activePlayback?.profile.id === voice.id && isAudioPlaying;

                  return (
                    <div
                      key={voice.id}
                      className={`rounded-xl border p-3.5 transition-all ${
                        isThisVoicePlaying
                          ? 'bg-[#FAF7F0] border-[#C59B38] shadow-sm'
                          : 'bg-[#FAF7F0]/90 border-[#C7BFA8]'
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-serif-display font-bold text-base text-[#113826]">
                              {voice.name}
                            </h4>
                            <span className="px-2 py-0.5 rounded bg-[#113826]/10 text-[#113826] font-mono text-[11px] font-semibold">
                              {voice.code}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-[#EAE3D2] text-[#3D4A41] text-[11px] font-medium">
                              {voice.sede}
                            </span>
                          </div>
                          <p className="text-xs text-[#4A524C] mt-0.5">
                            {voice.role}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            if (isThisVoicePlaying && onTogglePlayPause) {
                              onTogglePlayPause();
                            } else {
                              onPlayVoice(voice, 0, 0);
                            }
                          }}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                            isThisVoicePlaying
                              ? 'bg-[#C59B38] text-[#0F2E1F]'
                              : 'bg-[#113826] hover:bg-[#1D4D37] text-[#FAF7F0]'
                          }`}
                        >
                          {isThisVoicePlaying ? (
                            <>
                              <Pause className="w-3.5 h-3.5 fill-current" />
                              <span>Pausar grabación</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>
                                Reproducir ({voice.tracks.length}{' '}
                                {voice.tracks.length === 1 ? 'parte' : 'partes'})
                              </span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Partes de audio disponibles */}
                      {voice.tracks.length > 1 && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {voice.tracks.map((t, tIdx) => {
                            const isTrackSelected =
                              activePlayback?.profile.id === voice.id &&
                              activePlayback?.trackIndex === tIdx;
                            return (
                              <button
                                key={t.id}
                                type="button"
                                onClick={() => onPlayVoice(voice, tIdx, 0)}
                                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                                  isTrackSelected
                                    ? 'bg-[#C59B38] text-[#0F2E1F] font-semibold'
                                    : 'bg-[#EFE9DA] hover:bg-[#E2D9C3] text-[#113826]'
                                }`}
                              >
                                ▶ {t.label}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Segmentos transcritos con marca de tiempo (del archivo DOCX) */}
                      {voice.tracks.some(
                        (t) => t.segments && t.segments.length > 0
                      ) && (
                        <div className="mt-3 pt-2.5 border-t border-[#DCD5C3] space-y-1.5">
                          <p className="text-[11px] font-semibold text-[#5A625C] flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#9E7820]" />
                            Momentos transcritos con marca de tiempo (haz clic para saltar al segundo exacto):
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {voice.tracks.map((track, tIdx) =>
                              (track.segments || []).map((seg, sIdx) => (
                                <button
                                  key={`${track.id}-${sIdx}`}
                                  type="button"
                                  onClick={() =>
                                    onPlayVoice(voice, tIdx, seg.startSeconds)
                                  }
                                  className="text-left rounded-lg bg-[#F4EFE4] hover:bg-[#EAE1CE] border border-[#D4CCB8] hover:border-[#C59B38] p-2 transition-all cursor-pointer flex items-start gap-2"
                                >
                                  <span className="px-1.5 py-0.5 rounded bg-[#113826] text-[#FAF7F0] font-mono text-[10px] font-semibold shrink-0 mt-0.5">
                                    ▶ {seg.timeLabel.split(' ')[0]}
                                  </span>
                                  <div className="min-w-0">
                                    <p className="text-[11.5px] font-bold text-[#113826] truncate">
                                      {seg.topic}
                                    </p>
                                    <p className="text-[11px] text-[#3D4A41] line-clamp-2 mt-0.5">
                                      “{seg.text}”
                                    </p>
                                  </div>
                                </button>
                              ))
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Verbatim Oral Testimonies */}
          {milestone.testimonies.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-serif-display text-lg font-bold text-[#113826] flex items-center gap-2">
                <Quote className="w-4 h-4 text-[#9E7820]" aria-hidden="true" />
                Citas destacadas en el documento de investigación
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {milestone.testimonies.map((testimony, idx) => (
                  <blockquote
                    key={idx}
                    className="rounded-xl bg-[#F4EFE4]/80 border border-[#D4CCB8] p-4 flex flex-col justify-between"
                  >
                    <p className="font-serif-editorial italic text-sm sm:text-[15px] text-[#1F2F25] leading-relaxed">
                      “{testimony.quote}”
                    </p>
                    <footer className="mt-3 pt-2 border-t border-[#DCD5C3] flex items-center justify-between gap-2 text-xs text-[#4A524C]">
                      <span className="font-semibold text-[#113826]">
                        {testimony.authorRole}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#113826]/10 text-[#113826] font-mono text-[11px]">
                        {testimony.code}
                      </span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          )}

          {/* Associated Media Gallery */}
          {milestone.media.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-serif-display text-lg font-bold text-[#113826]">
                Documentos gráficos, cartografía y láminas ({milestone.media.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {milestone.media.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => onOpenLightbox(idx, e.currentTarget)}
                    className="group text-left rounded-xl overflow-hidden border border-[#C7BFA8] bg-[#F4EFE4] hover:border-[#C59B38] transition-all flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38]"
                  >
                    <div className="relative aspect-16/10 bg-[#EAE3D2] overflow-hidden w-full">
                      <img
                        src={item.url}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#113826]/80 text-[#FAF7F0] flex items-center justify-center">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div className="p-3 flex-1 flex flex-col justify-between">
                      <div>
                        <span
                          className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded mb-1 ${
                            item.isRealProjectAsset
                              ? 'bg-[#113826] text-[#FAF7F0]'
                              : 'bg-[#C59B38]/25 text-[#6E4F0B]'
                          }`}
                        >
                          {item.isRealProjectAsset
                            ? 'Archivo real del proyecto'
                            : 'Lámina ilustrativa'}
                        </span>
                        <p className="text-xs font-bold text-[#113826] line-clamp-2">
                          {item.title}
                        </p>
                      </div>
                      <p className="mt-1.5 text-[11px] text-[#5A625C] line-clamp-1">
                        {item.source}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Documentary Sources */}
          <div className="pt-2 border-t border-[#C7BFA8]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#3D4A41] flex items-center gap-1.5 mb-2">
              <FileText className="w-3.5 h-3.5 text-[#113826]" />
              Fuentes documentales y de archivo oral
            </h3>
            <ul className="space-y-1 text-xs text-[#4A524C]">
              {milestone.documentarySources.map((src, idx) => (
                <li key={idx}>• {src}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Sticky Footer with Prev / Next Navigation */}
        <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-3.5 bg-[#F4EFE4] border-t border-[#C7BFA8]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#8E8778] bg-[#FAF7F0] text-xs sm:text-sm font-medium text-[#113826] hover:bg-[#113826] hover:text-[#FAF7F0] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Hito anterior</span>
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#8E8778] bg-[#FAF7F0] text-xs sm:text-sm font-medium text-[#113826] hover:bg-[#113826] hover:text-[#FAF7F0] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <span>Siguiente hito</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#113826] hover:bg-[#1D4D37] text-[#FAF7F0] text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            Cerrar (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
