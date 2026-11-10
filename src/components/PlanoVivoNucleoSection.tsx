import React, { useState } from 'react';
import {
  Compass,
  Headphones,
  Play,
  Pause,
  History,
  Sprout,
  Columns2,
  Quote,
} from 'lucide-react';
import {
  NUCLEO_PLANO_VIVO_ZONES,
  VOICES_ARCHIVE_DATA,
  VoiceTestimonyProfile,
} from '../data/voicesAndFarm';
import { ActiveAudioPlayback } from './AudioPlayerDock';

interface PlanoVivoNucleoSectionProps {
  activePlayback?: ActiveAudioPlayback | null;
  isAudioPlaying?: boolean;
  onPlayVoice: (
    profile: VoiceTestimonyProfile,
    trackIndex?: number,
    startSeconds?: number
  ) => void;
  onTogglePlayPause?: () => void;
}

export const PlanoVivoNucleoSection: React.FC<PlanoVivoNucleoSectionProps> = ({
  activePlayback,
  isAudioPlaying,
  onPlayVoice,
  onTogglePlayPause,
}) => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>(
    NUCLEO_PLANO_VIVO_ZONES[0].id
  );
  const [comparisonMode, setComparisonMode] = useState<
    'ambos' | 'antes' | 'despues'
  >('ambos');

  const activeZone =
    NUCLEO_PLANO_VIVO_ZONES.find((z) => z.id === selectedZoneId) ||
    NUCLEO_PLANO_VIVO_ZONES[0];

  const linkedVoiceProfile = VOICES_ARCHIVE_DATA.find(
    (v) => v.id === activeZone.voiceProfileId
  );

  const isZoneAudioPlaying =
    Boolean(isAudioPlaying) &&
    Boolean(linkedVoiceProfile) &&
    activePlayback?.profile.id === linkedVoiceProfile?.id &&
    activePlayback?.trackIndex === (activeZone.trackIndex ?? 0);

  const handlePlayZoneAudio = () => {
    if (!linkedVoiceProfile) return;
    if (isZoneAudioPlaying && onTogglePlayPause) {
      onTogglePlayPause();
      return;
    }
    onPlayVoice(linkedVoiceProfile, activeZone.trackIndex ?? 0, 0);
  };

  return (
    <section
      id="plano-vivo"
      aria-labelledby="plano-vivo-heading"
      className="max-w-[1280px] mx-auto px-4 sm:px-8 py-12 border-t border-[#C7BFA8]"
    >
      {/* Encabezado Editorial de la Sección */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E7820] mb-1 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#113826]" />
            <span>
              Arqueología Pedagógica de las 15 Cuadras · Escritura 1171 de 1959 y Decreto 1240 de 1960
            </span>
          </p>
          <h2
            id="plano-vivo-heading"
            className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0F3322]"
          >
            Plano Vivo: La Granja Vocacional del Núcleo Escolar (Antes vs. Después)
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-[#2C3A31] max-w-3xl">
            A partir del recorrido guiado del profesor{' '}
            <strong className="font-semibold text-[#113826]">
              Milton Guillermo (NUC-DOC-G09)
            </strong>
            , las docentes{' '}
            <strong className="font-semibold text-[#113826]">
              Isabel Cristina Álvarez y Sandra Milena Segura
            </strong>{' '}
            y los exalumnos, explora los{' '}
            <strong className="font-semibold text-[#113826]">
              6 puntos neurálgicos
            </strong>{' '}
            de la antigua Escuela Vocacional Agrícola de 9 hectáreas y escucha sus relatos originales.
          </p>
        </div>

        {/* Selector de modo Antes / Después / Comparativa */}
        <div
          role="group"
          aria-label="Modo de comparación temporal del plano"
          className="inline-flex rounded-xl border border-[#B5AE9E] bg-[#FAF7F0] p-1 self-start lg:self-auto shrink-0"
        >
          <button
            type="button"
            onClick={() => setComparisonMode('ambos')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              comparisonMode === 'ambos'
                ? 'bg-[#113826] text-[#FAF7F0]'
                : 'text-[#2C3A31] hover:bg-[#EAE3D2]'
            }`}
          >
            <Columns2 className="w-3.5 h-3.5" />
            <span>Antes vs. Después</span>
          </button>
          <button
            type="button"
            onClick={() => setComparisonMode('antes')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              comparisonMode === 'antes'
                ? 'bg-[#9E7820] text-[#FAF7F0]'
                : 'text-[#2C3A31] hover:bg-[#EAE3D2]'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Solo Antes (1960–2002)</span>
          </button>
          <button
            type="button"
            onClick={() => setComparisonMode('despues')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              comparisonMode === 'despues'
                ? 'bg-[#113826] text-[#FAF7F0]'
                : 'text-[#2C3A31] hover:bg-[#EAE3D2]'
            }`}
          >
            <Sprout className="w-3.5 h-3.5" />
            <span>Solo Después (2002–2026)</span>
          </button>
        </div>
      </div>

      {/* Contenedor Principal del Plano Vivo */}
      <div className="rounded-2xl border-2 border-[#C59B38] bg-[#FAF7F0] p-4 sm:p-6 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Columna Izquierda (7 cols): Lienzo Ilustrado con 6 Hotspots Interactivos */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative rounded-xl overflow-hidden border border-[#B5AE9E] bg-[#132A1E] shadow-sm select-none">
              <img
                src="/assets/img/hito-1960-nucleo.jpg"
                alt="Plano ilustrado de la Granja Vocacional del Núcleo Escolar de Altagracia en 1960 con sus 6 estaciones interactivas"
                className="w-full h-auto aspect-16/10 object-cover block"
              />

              {/* Sombra suave superior para lectura de etiqueta */}
              <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-[#0F2E1F]/90 text-[#FAF7F0] border border-[#C59B38] text-xs font-semibold backdrop-blur-xs">
                  Predio de 15 cuadras (~9 hectáreas) · Casco urbano de Altagracia
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#FAF7F0]/95 text-[#113826] text-[11px] font-bold shadow-xs">
                  Haz clic en los puntos 1 a 6
                </span>
              </div>

              {/* 6 Pines / Hotspots Interactivos */}
              {NUCLEO_PLANO_VIVO_ZONES.map((zone) => {
                const isSelected = zone.id === activeZone.id;
                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setSelectedZoneId(zone.id)}
                    style={{
                      left: `${zone.xPercent}%`,
                      top: `${zone.yPercent}%`,
                    }}
                    aria-label={`Estación ${zone.number}: ${zone.title}`}
                    aria-pressed={isSelected}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38] transition-transform ${
                      isSelected ? 'z-20 scale-115' : 'z-10 hover:scale-110'
                    }`}
                  >
                    {isSelected && (
                      <span
                        className="absolute -inset-2 rounded-full bg-[#C59B38]/50 animate-ping"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-serif-display font-bold text-sm sm:text-base shadow-lg border-2 transition-colors ${
                        isSelected
                          ? 'bg-[#C59B38] text-[#0F2E1F] border-[#FAF7F0] ring-3 ring-[#113826]'
                          : 'bg-[#113826] text-[#FAF7F0] border-[#E8D49B] hover:bg-[#1D4D37]'
                      }`}
                    >
                      {zone.number}
                    </span>

                    {/* Tooltip flotante con el nombre corto */}
                    <span
                      className={`hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap shadow-md pointer-events-none transition-opacity ${
                        isSelected
                          ? 'opacity-100 bg-[#0F2E1F] text-[#E8D49B] border border-[#C59B38]'
                          : 'opacity-0 group-hover:opacity-100 bg-[#0F2E1F]/95 text-[#FAF7F0]'
                      }`}
                    >
                      {zone.number}. {zone.title.split('→')[0].trim()}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Botonera rápida de las 6 zonas debajo del plano */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {NUCLEO_PLANO_VIVO_ZONES.map((zone) => {
                const isSelected = zone.id === activeZone.id;
                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setSelectedZoneId(zone.id)}
                    className={`text-left px-3 py-2 rounded-xl border text-xs transition-all cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[#113826] text-[#FAF7F0] border-[#113826] shadow-xs font-semibold'
                        : 'bg-[#F4EFE4] text-[#2C3A31] border-[#C7BFA8] hover:border-[#C59B38]'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#C59B38] text-[#0F2E1F]'
                          : 'bg-[#113826]/15 text-[#113826]'
                      }`}
                    >
                      {zone.number}
                    </span>
                    <span className="truncate">
                      {zone.title.split('→')[0].trim()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Columna Derecha (5 cols): Detalle Antes vs. Después + Audio del Lugar */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#113826]/10 text-[#113826] text-xs font-semibold">
                  Estación {activeZone.number} de 6 · {activeZone.category}
                </span>
                {linkedVoiceProfile && (
                  <span className="font-mono text-[11px] text-[#5A625C]">
                    Fuente oral: {linkedVoiceProfile.code}
                  </span>
                )}
              </div>

              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0F3322] leading-snug">
                {activeZone.number}. {activeZone.title}
              </h3>
            </div>

            {/* Tarjetas Comparativas ANTES vs DESPUÉS */}
            <div className="space-y-3">
              {(comparisonMode === 'ambos' || comparisonMode === 'antes') && (
                <div className="rounded-xl bg-[#F4EFE4] border-l-4 border-[#9E7820] border border-[#D4CCB8] p-3.5">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A6614]">
                      🌾 ANTES · Escuela Vocacional Agrícola
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-[#5A625C]">
                      {activeZone.beforePeriod}
                    </span>
                  </div>
                  <h4 className="font-serif-display font-bold text-sm sm:text-base text-[#113826] mb-1">
                    {activeZone.beforeTitle}
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-[#2B3930] leading-relaxed mb-2">
                    {activeZone.beforeDescription}
                  </p>
                  <ul className="space-y-1 text-xs text-[#3D4A41]">
                    {activeZone.beforeBullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#9E7820] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(comparisonMode === 'ambos' || comparisonMode === 'despues') && (
                <div className="rounded-xl bg-[#113826]/6 border-l-4 border-[#113826] border border-[#B5AE9E] p-3.5">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#113826]">
                      🌱 DESPUÉS · Post-Sismo (1999) y Fusión (2002–2026)
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-[#5A625C]">
                      {activeZone.afterPeriod}
                    </span>
                  </div>
                  <h4 className="font-serif-display font-bold text-sm sm:text-base text-[#0F3322] mb-1">
                    {activeZone.afterTitle}
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-[#2B3930] leading-relaxed mb-2">
                    {activeZone.afterDescription}
                  </p>
                  <ul className="space-y-1 text-xs text-[#3D4A41]">
                    {activeZone.afterBullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#113826] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Cita y Botón para Escuchar el Relato de esta Zona */}
            <div className="rounded-xl bg-[#EAE3D2]/80 border border-[#C59B38] p-3.5 space-y-2.5">
              <blockquote className="font-serif-editorial italic text-xs sm:text-sm text-[#1F2F25] leading-relaxed">
                <Quote
                  className="w-3.5 h-3.5 inline mr-1 text-[#9E7820] -mt-0.5"
                  aria-hidden="true"
                />
                “{activeZone.quote}”
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#D4CCB8]">
                <span className="text-xs font-semibold text-[#113826]">
                  🎙️ {activeZone.quoteAuthor}
                </span>

                {linkedVoiceProfile && (
                  <button
                    type="button"
                    onClick={handlePlayZoneAudio}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isZoneAudioPlaying
                        ? 'bg-[#C59B38] text-[#0F2E1F] shadow-xs'
                        : 'bg-[#113826] hover:bg-[#1D4D37] text-[#FAF7F0]'
                    }`}
                  >
                    {isZoneAudioPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>Pausar relato del lugar</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Escuchar relato de esta zona</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
