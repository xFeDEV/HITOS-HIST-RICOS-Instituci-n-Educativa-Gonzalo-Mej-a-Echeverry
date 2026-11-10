import React, { useState, useMemo } from 'react';
import {
  Headphones,
  Play,
  Pause,
  Clock,
  Award,
  Search,
  Quote,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Volume2,
  Users,
} from 'lucide-react';
import {
  VOICES_ARCHIVE_DATA,
  HISTORICAL_FOUNDERS_TRIBUTES,
  VoiceTestimonyProfile,
} from '../data/voicesAndFarm';
import { ActiveAudioPlayback } from './AudioPlayerDock';

interface VocesMaestrosLideresSectionProps {
  activePlayback?: ActiveAudioPlayback | null;
  isAudioPlaying?: boolean;
  onPlayVoice: (
    profile: VoiceTestimonyProfile,
    trackIndex?: number,
    startSeconds?: number
  ) => void;
  onTogglePlayPause?: () => void;
  onNavigateToMilestone: (milestoneId: string) => void;
}

export const VocesMaestrosLideresSection: React.FC<
  VocesMaestrosLideresSectionProps
> = ({
  activePlayback,
  isAudioPlaying,
  onPlayVoice,
  onTogglePlayPause,
  onNavigateToMilestone,
}) => {
  const [activeTab, setActiveTab] = useState<'grabaciones' | 'forjadores'>(
    'grabaciones'
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedSede, setSelectedSede] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedVoiceIds, setExpandedVoiceIds] = useState<
    Record<string, boolean>
  >({
    'voz-luis-fernando-orozco': true,
    'voz-milton-guillermo': true,
  });
  const [speakingFounderId, setSpeakingFounderId] = useState<string | null>(
    null
  );

  const toggleExpandTranscript = (voiceId: string) => {
    setExpandedVoiceIds((prev) => ({
      ...prev,
      [voiceId]: !prev[voiceId],
    }));
  };

  const totalAudioFilesCount = useMemo(
    () => VOICES_ARCHIVE_DATA.reduce((acc, v) => acc + v.tracks.length, 0),
    []
  );

  const filteredVoices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return VOICES_ARCHIVE_DATA.filter((v) => {
      if (selectedCategory !== 'Todos' && v.category !== selectedCategory) {
        return false;
      }
      if (
        selectedSede !== 'Todas' &&
        !v.sede.toLowerCase().includes(selectedSede.toLowerCase())
      ) {
        return false;
      }
      if (!q) return true;
      const inNameOrRole =
        v.name.toLowerCase().includes(q) ||
        v.role.toLowerCase().includes(q) ||
        v.code.toLowerCase().includes(q) ||
        v.sede.toLowerCase().includes(q) ||
        v.featuredQuote.toLowerCase().includes(q) ||
        v.biographyOrContext.toLowerCase().includes(q);
      const inSegments = v.tracks.some((t) =>
        (t.segments || []).some(
          (s) =>
            s.topic.toLowerCase().includes(q) ||
            s.text.toLowerCase().includes(q)
        )
      );
      return inNameOrRole || inSegments;
    });
  }, [selectedCategory, selectedSede, searchQuery]);

  const handleSpeakFounderTribute = (
    founderId: string,
    name: string,
    text: string
  ) => {
    if (!('speechSynthesis' in window)) return;
    const synth = window.speechSynthesis;
    if (speakingFounderId === founderId) {
      synth.cancel();
      setSpeakingFounderId(null);
      return;
    }
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(`${name}: ${text}`);
    utter.lang = 'es-CO';
    utter.rate = 0.96;
    utter.onend = () => setSpeakingFounderId(null);
    utter.onerror = () => setSpeakingFounderId(null);
    setSpeakingFounderId(founderId);
    synth.speak(utter);
  };

  return (
    <section
      id="voces-forjadores"
      aria-labelledby="voces-heading"
      className="max-w-[1280px] mx-auto px-4 sm:px-8 py-12 border-t border-[#C7BFA8]"
    >
      {/* Encabezado de Sección */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E7820] mb-1 flex items-center gap-1.5">
            <Headphones className="w-4 h-4 text-[#113826]" />
            <span>
              Polifonía Comunitaria · {VOICES_ARCHIVE_DATA.length} Entrevistados · {totalAudioFilesCount} Grabaciones Originales + Transcripciones
            </span>
          </p>
          <h2
            id="voces-heading"
            className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0F3322]"
          >
            Galería de Voces, Maestros y Líderes que Forjaron la Institución
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-[#2C3A31] max-w-3xl">
            Escucha los relatos originales en la propia voz de docentes, abuelos fundadores, líderes de Juntas de Acción Comunal, administrativos y estudiantes de las seis sedes, sincronizados con el archivo de{' '}
            <strong className="font-semibold text-[#113826]">
              Transcripciones de Entrevistas Sede por Sede
            </strong>
            .
          </p>
        </div>

        {/* Pestañas: Archivo Sonoro de Voces vs. Homenaje a Forjadores y Donantes */}
        <div
          role="tablist"
          aria-label="Vistas de la galería de voces y forjadores"
          className="inline-flex rounded-xl border border-[#B5AE9E] bg-[#FAF7F0] p-1 self-start lg:self-auto shrink-0"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'grabaciones'}
            onClick={() => setActiveTab('grabaciones')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeTab === 'grabaciones'
                ? 'bg-[#113826] text-[#FAF7F0]'
                : 'text-[#2C3A31] hover:bg-[#EAE3D2]'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>
              Relatos Sonoros y Transcripciones ({VOICES_ARCHIVE_DATA.length})
            </span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'forjadores'}
            onClick={() => setActiveTab('forjadores')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeTab === 'forjadores'
                ? 'bg-[#113826] text-[#FAF7F0]'
                : 'text-[#2C3A31] hover:bg-[#EAE3D2]'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>
              Donantes, Maestros y Pioneros ({HISTORICAL_FOUNDERS_TRIBUTES.length})
            </span>
          </button>
        </div>
      </div>

      {/* ====================================================================
          VISTA 1: ARCHIVO SONORO DE GRABACIONES Y TRANSCRIPCIONES
         ==================================================================== */}
      {activeTab === 'grabaciones' && (
        <div>
          {/* Barra de Filtros de Voces */}
          <div className="rounded-2xl border border-[#C7BFA8] bg-[#FAF7F0] p-3.5 sm:p-4 mb-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {(
                [
                  'Todos',
                  'Docentes y Directivos',
                  'Líderes y Familias',
                  'Estudiantes y Egresados',
                ] as const
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#113826] text-[#FAF7F0] border-[#113826]'
                      : 'bg-[#F4EFE4] text-[#2C3A31] border-[#B5AE9E] hover:border-[#113826]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <select
                value={selectedSede}
                onChange={(e) => setSelectedSede(e.target.value)}
                aria-label="Filtrar voces por sede"
                className="rounded-lg border border-[#B5AE9E] bg-[#F4EFE4] px-3 py-1.5 text-xs font-medium text-[#132A1E] focus:outline-none focus:border-[#113826]"
              >
                <option value="Todas">Todas las sedes (6)</option>
                <option value="Principal">Sede Principal</option>
                <option value="Núcleo">Sede Núcleo Escolar</option>
                <option value="Cañaveral">Sede Cañaveral</option>
                <option value="Jazmín">Sede El Jazmín y Filobonito</option>
                <option value="Agrado">Sede El Agrado / Guayabal / La Bamba</option>
              </select>

              <div className="relative min-w-[230px]">
                <Search className="w-3.5 h-3.5 text-[#5A625C] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar voz, tema o transcripción..."
                  aria-label="Buscar en las entrevistas y transcripciones"
                  className="w-full rounded-lg border border-[#B5AE9E] bg-[#F4EFE4] pl-8 pr-3 py-1.5 text-xs text-[#132A1E] focus:outline-none focus:border-[#113826]"
                />
              </div>
            </div>
          </div>

          {/* Tarjetas de Entrevistados con Reproductor Multiparte y Marcas de Tiempo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredVoices.map((voice) => {
              const isVoiceActive =
                activePlayback?.profile.id === voice.id && isAudioPlaying;
              const activeTrackIdxForVoice =
                activePlayback?.profile.id === voice.id
                  ? activePlayback.trackIndex
                  : 0;
              const isTranscriptOpen = Boolean(expandedVoiceIds[voice.id]);
              const allSegmentsCount = voice.tracks.reduce(
                (acc, t) => acc + (t.segments?.length || 0),
                0
              );

              return (
                <article
                  key={voice.id}
                  className={`rounded-2xl border transition-all p-5 flex flex-col justify-between ${
                    isVoiceActive
                      ? 'bg-[#FAF7F0] border-2 border-[#C59B38] shadow-md'
                      : 'bg-[#FAF7F0] border-[#C7BFA8] hover:border-[#C59B38]'
                  }`}
                >
                  <div>
                    {/* Cabecera de la tarjeta */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-[#113826] text-[#FAF7F0] font-mono text-[11px] font-bold">
                            {voice.code}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#EAE3D2] text-[#113826] text-[11px] font-semibold">
                            {voice.sede}
                          </span>
                          <span className="text-[11px] text-[#5A625C] font-medium">
                            · {voice.category}
                          </span>
                        </div>
                        <h3 className="font-serif-display text-xl font-bold text-[#0F3322]">
                          {voice.name}
                        </h3>
                        <p className="text-xs font-medium text-[#4A524C] mt-0.5">
                          {voice.role}
                        </p>
                      </div>

                      {/* Botón Principal Escuchar / Pausar */}
                      <button
                        type="button"
                        onClick={() => {
                          if (isVoiceActive && onTogglePlayPause) {
                            onTogglePlayPause();
                          } else {
                            onPlayVoice(voice, activeTrackIdxForVoice, 0);
                          }
                        }}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer shadow-xs ${
                          isVoiceActive
                            ? 'bg-[#C59B38] text-[#0F2E1F]'
                            : 'bg-[#113826] hover:bg-[#1D4D37] text-[#FAF7F0]'
                        }`}
                      >
                        {isVoiceActive ? (
                          <>
                            <Pause className="w-3.5 h-3.5 fill-current" />
                            <span>Pausar voz</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Escuchar relato</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Contexto biográfico e histórico */}
                    <p className="mt-3 text-xs sm:text-[13.5px] text-[#2C3A31] leading-relaxed">
                      {voice.biographyOrContext}
                    </p>

                    {/* Cita destacada */}
                    <blockquote className="mt-3 rounded-xl bg-[#F4EFE4] border-l-3 border-[#C59B38] p-3 font-serif-editorial italic text-xs sm:text-sm text-[#1F2F25] leading-relaxed">
                      <Quote
                        className="w-3.5 h-3.5 inline mr-1 text-[#9E7820] -mt-0.5"
                        aria-hidden="true"
                      />
                      “{voice.featuredQuote}”
                    </blockquote>

                    {/* Selector de Partes de la Grabación */}
                    <div className="mt-3.5">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-[#3D4A41] mb-1.5">
                        <span>
                          Archivos de audio/video disponibles ({voice.tracks.length}{' '}
                          {voice.tracks.length === 1 ? 'grabación' : 'grabaciones'}):
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                        {voice.tracks.map((track, tIdx) => {
                          const isThisTrackPlaying =
                            activePlayback?.profile.id === voice.id &&
                            activePlayback?.trackIndex === tIdx &&
                            isAudioPlaying;

                          return (
                            <button
                              key={track.id}
                              type="button"
                              onClick={() => onPlayVoice(voice, tIdx, 0)}
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer ${
                                isThisTrackPlaying
                                  ? 'bg-[#C59B38] text-[#0F2E1F] border-[#9E7820] font-bold'
                                  : 'bg-[#F4EFE4] hover:bg-[#EAE1CE] text-[#113826] border-[#D4CCB8]'
                              }`}
                            >
                              <span>▶</span>
                              <span className="truncate max-w-[230px]">
                                {track.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Marcas de Tiempo de la Transcripción (DOCX) */}
                    {allSegmentsCount > 0 && (
                      <div className="mt-3.5 pt-3 border-t border-[#DCD5C3]">
                        <button
                          type="button"
                          onClick={() => toggleExpandTranscript(voice.id)}
                          className="w-full flex items-center justify-between text-left text-xs font-bold text-[#113826] hover:text-[#9E7820] transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#9E7820]" />
                            <span>
                              Transcripción con marcas de tiempo ({allSegmentsCount}{' '}
                              fragmentos)
                            </span>
                          </span>
                          {isTranscriptOpen ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        {isTranscriptOpen && (
                          <div className="mt-2.5 space-y-2 max-h-56 overflow-y-auto pr-1">
                            {voice.tracks.map((track, tIdx) =>
                              (track.segments || []).map((seg, sIdx) => (
                                <button
                                  key={`${track.id}-seg-${sIdx}`}
                                  type="button"
                                  onClick={() =>
                                    onPlayVoice(voice, tIdx, seg.startSeconds)
                                  }
                                  className="w-full text-left rounded-xl bg-[#F4EFE4]/90 hover:bg-[#EAE1CE] border border-[#D4CCB8] hover:border-[#C59B38] p-2.5 transition-all cursor-pointer flex items-start gap-2.5"
                                >
                                  <span className="px-2 py-0.5 rounded bg-[#113826] text-[#FAF7F0] font-mono text-[10.5px] font-bold shrink-0 mt-0.5">
                                    ▶ {seg.timeLabel}
                                  </span>
                                  <div className="min-w-0">
                                    <p className="text-xs font-bold text-[#0F3322]">
                                      {seg.topic}
                                    </p>
                                    <p className="text-[11.5px] text-[#2C3A31] mt-0.5 leading-relaxed">
                                      “{seg.text}”
                                    </p>
                                  </div>
                                </button>
                              ))
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Pie de tarjeta: Saltar al hito conectado en la línea de tiempo */}
                  <div className="mt-4 pt-3 border-t border-[#DCD5C3] flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] text-[#5A625C]">
                      Conectado con {voice.relatedMilestoneIds.length}{' '}
                      {voice.relatedMilestoneIds.length === 1
                        ? 'hito histórico'
                        : 'hitos históricos'}
                    </span>
                    {voice.relatedMilestoneIds[0] && (
                      <button
                        type="button"
                        onClick={() =>
                          onNavigateToMilestone(voice.relatedMilestoneIds[0])
                        }
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#113826] hover:text-[#9E7820] transition-colors cursor-pointer"
                      >
                        <span>Ver hito en la línea de tiempo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* ====================================================================
          VISTA 2: HOMENAJE A DONANTES DE TIERRAS, MAESTROS Y PIONEROS
         ==================================================================== */}
      {activeTab === 'forjadores' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HISTORICAL_FOUNDERS_TRIBUTES.map((founder) => {
            const isSpeaking = speakingFounderId === founder.id;
            return (
              <article
                key={founder.id}
                className="rounded-2xl border border-[#C7BFA8] bg-[#FAF7F0] p-5 flex flex-col justify-between shadow-xs hover:border-[#C59B38] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#113826]/10 text-[#113826] text-[11px] font-bold">
                      {founder.tributeType}
                    </span>
                    <span className="text-[11px] font-mono text-[#9E7820] font-semibold">
                      {founder.era}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-lg font-bold text-[#0F3322]">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#3D4A41] mt-0.5">
                    {founder.role} · <span className="text-[#113826]">{founder.sede}</span>
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#2C3A31] leading-relaxed">
                    {founder.contribution}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DCD5C3] flex items-center justify-between gap-2">
                  <span className="text-[10.5px] text-[#5A625C] truncate">
                    Fuente: {founder.sourceRef}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleSpeakFounderTribute(
                        founder.id,
                        founder.name,
                        founder.contribution
                      )
                    }
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold shrink-0 cursor-pointer transition-colors ${
                      isSpeaking
                        ? 'bg-[#C59B38] text-[#0F2E1F]'
                        : 'bg-[#F4EFE4] hover:bg-[#113826] text-[#113826] hover:text-[#FAF7F0] border border-[#C7BFA8]'
                    }`}
                  >
                    <Volume2 className="w-3 h-3" />
                    <span>{isSpeaking ? 'Detener' : 'Lectura voz'}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Banner de Créditos Académicos UTP y Licenciatura en Etnoeducación */}
      <div className="mt-10 rounded-2xl border-2 border-[#C59B38] bg-[#FAF7F0] p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4 shrink-0">
          <img
            src="/assets/img/logo-utp.png"
            alt="Escudo Universidad Tecnológica de Pereira UTP"
            className="h-14 w-auto object-contain"
          />
          <div className="h-10 w-px bg-[#C7BFA8]" aria-hidden="true" />
          <img
            src="/assets/img/logo-etnoeducacion.png"
            alt="Logo Licenciatura en Etnoeducación UTP"
            className="h-14 w-auto object-contain"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#9E7820]">
            <Users className="w-3.5 h-3.5 text-[#113826]" />
            Proyecto de Investigación · Radicado UTP 03-1857 (9 de febrero de 2026)
          </span>
          <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#0F3322] mt-0.5">
            «La Escuela como Tejido de Memoria Comunitaria en la Institución Educativa Gonzalo Mejía Echeverry del Corregimiento de Altagracia, Pereira»
          </h3>
          <p className="text-xs sm:text-sm text-[#2C3A31] mt-1">
            <strong>Investigadora:</strong> Cristina Yaneth Gañán Morales ·{' '}
            <strong>Directora:</strong> Dra. Claudia Viviana Hurtado Loaiza ·{' '}
            <strong>Semillero:</strong> «Familia, Comunidad y Escuela» · Facultad de Ciencias de la Educación, Universidad Tecnológica de Pereira (UTP).
          </p>
        </div>
      </div>
    </section>
  );
};
