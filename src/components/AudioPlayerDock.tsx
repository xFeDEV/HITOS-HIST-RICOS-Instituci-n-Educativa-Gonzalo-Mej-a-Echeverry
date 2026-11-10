import React, { useEffect, useRef, useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  RotateCcw,
  RotateCw,
  FileText,
  Video,
  Headphones,
  ChevronUp,
  ChevronDown,
  Clock,
  Sparkles,
} from 'lucide-react';
import {
  VoiceTestimonyProfile,
  AudioTrackPart,
  TranscriptTimestampSegment,
} from '../data/voicesAndFarm';

export interface ActiveAudioPlayback {
  profile: VoiceTestimonyProfile;
  trackIndex: number;
  startSeconds?: number;
  autoPlay?: boolean;
  triggerTimestamp?: number;
}

interface AudioPlayerDockProps {
  playback: ActiveAudioPlayback | null;
  isPlaying: boolean;
  onPlayPauseChange: (playing: boolean) => void;
  onSelectTrackIndex: (index: number, startSeconds?: number) => void;
  onClose: () => void;
  onNavigateToMilestone?: (milestoneId: string) => void;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export const AudioPlayerDock: React.FC<AudioPlayerDockProps> = ({
  playback,
  isPlaying,
  onPlayPauseChange,
  onSelectTrackIndex,
  onClose,
}) => {
  const mediaRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscriptDrawer, setShowTranscriptDrawer] = useState(false);
  const [showVideoPreview, setShowVideoPreview] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const profile = playback?.profile || null;
  const trackIndex = playback?.trackIndex ?? 0;
  const currentTrack: AudioTrackPart | null =
    profile && profile.tracks[trackIndex]
      ? profile.tracks[trackIndex]
      : profile?.tracks[0] || null;

  const isMp4Video = currentTrack?.url.toLowerCase().endsWith('.mp4') ?? false;

  // Load track and seek when playback changes
  useEffect(() => {
    const media = mediaRef.current;
    if (!media || !currentTrack) return;

    setLoadError(null);
    const targetTime = playback?.startSeconds ?? 0;

    const handleLoadedMetadata = () => {
      setDuration(media.duration || 0);
      if (targetTime > 0 && targetTime < (media.duration || Infinity)) {
        media.currentTime = targetTime;
        setCurrentTime(targetTime);
      }
      if (playback?.autoPlay !== false) {
        media
          .play()
          .then(() => onPlayPauseChange(true))
          .catch(() => onPlayPauseChange(false));
      }
    };

    media.src = currentTrack.url;
    media.load();
    media.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      media.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [
    currentTrack?.url,
    playback?.triggerTimestamp,
    playback?.startSeconds,
  ]);

  // Sync play/pause state with HTMLMediaElement
  useEffect(() => {
    const media = mediaRef.current;
    if (!media || !currentTrack) return;
    if (isPlaying && media.paused) {
      media.play().catch(() => onPlayPauseChange(false));
    } else if (!isPlaying && !media.paused) {
      media.pause();
    }
  }, [isPlaying, currentTrack, onPlayPauseChange]);

  if (!playback || !profile || !currentTrack) return null;

  const togglePlayPause = () => {
    const media = mediaRef.current;
    if (!media) return;
    if (media.paused) {
      media
        .play()
        .then(() => onPlayPauseChange(true))
        .catch(() => onPlayPauseChange(false));
    } else {
      media.pause();
      onPlayPauseChange(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (mediaRef.current) {
      mediaRef.current.currentTime = newTime;
    }
  };

  const handleSkip = (deltaSeconds: number) => {
    const media = mediaRef.current;
    if (!media) return;
    const next = Math.max(
      0,
      Math.min(media.duration || duration || 0, media.currentTime + deltaSeconds)
    );
    media.currentTime = next;
    setCurrentTime(next);
  };

  const handleJumpToSegment = (seg: TranscriptTimestampSegment) => {
    const media = mediaRef.current;
    if (!media) return;
    media.currentTime = seg.startSeconds;
    setCurrentTime(seg.startSeconds);
    media
      .play()
      .then(() => onPlayPauseChange(true))
      .catch(() => {});
  };

  const toggleMute = () => {
    const media = mediaRef.current;
    if (!media) return;
    media.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const segments = currentTrack.segments || [];

  // Determine active segment based on currentTime
  const activeSegmentIndex = segments.reduce((acc, seg, idx) => {
    if (currentTime >= seg.startSeconds) return idx;
    return acc;
  }, 0);

  return (
    <aside
      aria-label={`Reproductor de archivo oral: ${profile.name}`}
      className="fixed bottom-0 inset-x-0 z-40 bg-[#0F2E1F] text-[#FAF7F0] border-t-2 border-[#C59B38] shadow-2xl transition-all"
    >
      {/* Drawer superior desplegable: Transcripción con marcas de tiempo y/o Video */}
      {(showTranscriptDrawer || showVideoPreview) && (
        <div className="border-b border-[#254D39] bg-[#133826] max-h-[52vh] overflow-y-auto">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#28543E]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5C168]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E5C168]">
                  Archivo Oral y Transcripción Sincronizada · {profile.code}
                </span>
                <span className="text-xs text-[#C7D3C9]">
                  ({profile.sede})
                </span>
              </div>
              <div className="flex items-center gap-2">
                {isMp4Video && (
                  <button
                    type="button"
                    onClick={() => setShowVideoPreview((v) => !v)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                      showVideoPreview
                        ? 'bg-[#C59B38] text-[#0F2E1F] font-semibold'
                        : 'bg-[#1B4631] text-[#FAF7F0] hover:bg-[#255A40]'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>{showVideoPreview ? 'Ocultar video' : 'Ver video original'}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setShowTranscriptDrawer(false);
                    setShowVideoPreview(false);
                  }}
                  className="inline-flex items-center gap-1 text-xs text-[#D5DEC8] hover:text-white px-2 py-1 rounded cursor-pointer"
                >
                  <ChevronDown className="w-4 h-4" />
                  <span>Minimizar panel</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
              {/* Selector de partes de la entrevista + Cita */}
              <div className="lg:col-span-5 space-y-3">
                <div className="rounded-xl bg-[#0B2317] border border-[#28543E] p-3.5">
                  <p className="text-xs font-semibold text-[#E5C168] uppercase tracking-wider mb-1">
                    {profile.role}
                  </p>
                  <blockquote className="font-serif-editorial italic text-sm text-[#F4EFE4] leading-relaxed">
                    “{profile.featuredQuote}”
                  </blockquote>
                </div>

                {profile.tracks.length > 1 && (
                  <div>
                    <p className="text-xs font-semibold text-[#C7D3C9] mb-1.5">
                      Partes de esta grabación ({profile.tracks.length} archivos):
                    </p>
                    <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                      {profile.tracks.map((t, idx) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => onSelectTrackIndex(idx, 0)}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium text-left transition-colors cursor-pointer ${
                            idx === trackIndex
                              ? 'bg-[#C59B38] text-[#0F2E1F] font-semibold'
                              : 'bg-[#1A432F] text-[#E4DFD3] hover:bg-[#24573E]'
                          }`}
                        >
                          {idx + 1}. {t.label.replace(/^Parte \d+ · /, '')}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Segmentos de transcripción con salto de tiempo */}
              <div className="lg:col-span-7">
                {segments.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-[#E5C168] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>
                        Haz clic en cualquier marca de tiempo para escuchar ese fragmento exacto (Fuente: TRANSCRIPCIONES ENTREVISTAS SEDE POR SEDE.docx):
                      </span>
                    </p>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {segments.map((seg, idx) => {
                        const isActive = idx === activeSegmentIndex;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleJumpToSegment(seg)}
                            className={`w-full text-left rounded-xl p-3 border transition-all cursor-pointer flex items-start gap-3 ${
                              isActive
                                ? 'bg-[#1D4D37] border-[#C59B38] shadow-xs'
                                : 'bg-[#0C2619]/90 border-[#244B37] hover:border-[#C59B38]/60'
                            }`}
                          >
                            <span className="px-2 py-0.5 rounded bg-[#C59B38] text-[#0F2E1F] font-mono text-[11px] font-bold shrink-0 mt-0.5">
                              ▶ {seg.timeLabel}
                            </span>
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-[#FAF7F0]">
                                {seg.topic}
                              </p>
                              <p className="text-xs text-[#D7E0D9] mt-0.5 leading-relaxed">
                                “{seg.text}”
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl bg-[#0C2619] border border-[#244B37] p-4 text-xs text-[#D7E0D9] space-y-1.5">
                    <p className="font-semibold text-[#E5C168]">
                      Síntesis documental del relato ({currentTrack.label})
                    </p>
                    <p className="leading-relaxed">{profile.biographyOrContext}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Elemento multimedia HTML5 (sirve tanto para .m4a como para .mp4) */}
      <div
        className={
          showVideoPreview && isMp4Video
            ? 'max-w-[1280px] mx-auto px-4 sm:px-8 pt-3 flex justify-center bg-[#091C13]'
            : 'sr-only'
        }
      >
        <video
          ref={mediaRef}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onDurationChange={(e) => setDuration(e.currentTarget.duration || 0)}
          onEnded={() => onPlayPauseChange(false)}
          onPause={() => onPlayPauseChange(false)}
          onPlay={() => onPlayPauseChange(true)}
          onError={() =>
            setLoadError(
              'No se pudo cargar el archivo multimedia local. Verifica que la carpeta de grabaciones esté disponible.'
            )
          }
          className={
            showVideoPreview && isMp4Video
              ? 'max-h-56 rounded-lg border border-[#C59B38]'
              : 'w-0 h-0'
          }
          playsInline
          controls={showVideoPreview && isMp4Video}
        />
      </div>

      {/* Barra principal compacta del reproductor */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
        {/* Info del narrador y selector rápido de pista */}
        <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
          <div className="w-9 h-9 rounded-lg bg-[#C59B38] text-[#0F2E1F] flex items-center justify-center shrink-0 font-bold shadow-xs">
            <Headphones className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-serif-display font-bold text-sm text-[#FAF7F0] truncate">
                {profile.name}
              </span>
              <span className="hidden md:inline-block px-2 py-0.5 rounded bg-[#1B4631] text-[#E5C168] text-[10.5px] font-medium shrink-0">
                {profile.sede}
              </span>
            </div>
            <p className="text-[11.5px] text-[#C7D3C9] truncate">
              {currentTrack.label}
            </p>
            {loadError && (
              <p className="text-[11px] text-[#F7B267]">{loadError}</p>
            )}
          </div>
        </div>

        {/* Controles centrales de reproducción + barra de progreso */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto sm:flex-1 max-w-xl">
          <button
            type="button"
            onClick={() => handleSkip(-10)}
            title="Retroceder 10 segundos"
            aria-label="Retroceder 10 segundos"
            className="p-1.5 rounded-full text-[#D7E0D9] hover:text-white hover:bg-[#1B4631] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pausar relato' : 'Reproducir relato'}
            className="w-9 h-9 rounded-full bg-[#C59B38] hover:bg-[#D8B04C] text-[#0F2E1F] flex items-center justify-center shadow-sm transition-transform active:scale-95 cursor-pointer shrink-0"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleSkip(10)}
            title="Adelantar 10 segundos"
            aria-label="Adelantar 10 segundos"
            className="p-1.5 rounded-full text-[#D7E0D9] hover:text-white hover:bg-[#1B4631] transition-colors cursor-pointer"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <span className="text-[11px] font-mono text-[#D7E0D9] w-9 text-right shrink-0">
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min={0}
            max={duration > 0 ? duration : 100}
            step={0.5}
            value={Math.min(currentTime, duration > 0 ? duration : 100)}
            onChange={handleSeek}
            aria-label="Posición de reproducción del relato"
            className="flex-1 h-1.5 rounded-lg accent-[#C59B38] bg-[#244B37] cursor-pointer"
          />

          <span className="text-[11px] font-mono text-[#D7E0D9] w-9 shrink-0">
            {formatTime(duration)}
          </span>
        </div>

        {/* Acciones derechas: selector de parte, ver transcripción, video, silenciar, cerrar */}
        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
          {profile.tracks.length > 1 && (
            <select
              aria-label="Cambiar parte de la grabación"
              value={trackIndex}
              onChange={(e) => onSelectTrackIndex(Number(e.target.value), 0)}
              className="bg-[#1B4631] text-[#FAF7F0] border border-[#35694E] rounded-lg px-2 py-1 text-xs font-medium focus:outline-none focus:border-[#C59B38] cursor-pointer max-w-[140px] truncate"
            >
              {profile.tracks.map((t, idx) => (
                <option key={t.id} value={idx}>
                  Parte {idx + 1} de {profile.tracks.length}
                </option>
              ))}
            </select>
          )}

          <button
            type="button"
            onClick={() => setShowTranscriptDrawer((v) => !v)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
              showTranscriptDrawer
                ? 'bg-[#C59B38] text-[#0F2E1F] border-[#C59B38] font-semibold'
                : 'bg-[#1B4631] text-[#FAF7F0] border-[#35694E] hover:border-[#C59B38]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">
              {segments.length > 0
                ? `Transcripción (${segments.length})`
                : 'Ficha y partes'}
            </span>
            {showTranscriptDrawer ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5" />
            )}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            className="p-1.5 rounded-lg bg-[#1B4631] hover:bg-[#255A40] text-[#FAF7F0] cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-[#E5C168]" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar reproductor de audio"
            className="p-1.5 rounded-lg bg-[#1B4631] hover:bg-[#7A271A] text-[#FAF7F0] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
