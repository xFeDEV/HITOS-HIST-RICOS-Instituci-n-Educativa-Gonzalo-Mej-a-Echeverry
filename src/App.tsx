import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MILESTONES_DATA } from './data/milestones';
import { VoiceTestimonyProfile } from './data/voicesAndFarm';
import { MilestoneMedia } from './types/timeline';
import { Header, NavSectionId } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FilterBar, FilterCategoryOption } from './components/FilterBar';
import { TimelineSection } from './components/TimelineSection';
import { MilestoneDetailPanel } from './components/MilestoneDetailPanel';
import { TimeRangeControl } from './components/TimeRangeControl';
import { VocesMaestrosLideresSection } from './components/VocesMaestrosLideresSection';
import { GallerySection } from './components/GallerySection';
import { InstitutionSection } from './components/InstitutionSection';
import { FullStoryModal } from './components/FullStoryModal';
import { MediaLightboxModal } from './components/MediaLightboxModal';
import { ArchiveExplorerModal } from './components/ArchiveExplorerModal';
import {
  AudioPlayerDock,
  ActiveAudioPlayback,
} from './components/AudioPlayerDock';

export function App() {
  // Ordenar hitos cronológicamente por año
  const sortedMilestones = useMemo(
    () => [...MILESTONES_DATA].sort((a, b) => a.year - b.year),
    []
  );

  const minYear = useMemo(
    () => Math.min(...sortedMilestones.map((m) => m.year)),
    [sortedMilestones]
  );
  const maxYear = useMemo(
    () => Math.max(...sortedMilestones.map((m) => m.year)),
    [sortedMilestones]
  );

  // Estados de filtrado y búsqueda
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategoryOption>('Todos');
  const [selectedSede, setSelectedSede] = useState<string>('Todas las sedes');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [rangeStart, setRangeStart] = useState<number>(minYear);
  const [rangeEnd, setRangeEnd] = useState<number>(maxYear);
  const [showOnlyVerified, setShowOnlyVerified] = useState<boolean>(false);

  // Hito seleccionado (por defecto el hito central de 1997 "Nuevos caminos para aprender")
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string | null>(
    'hito-1997-traslado-la-una'
  );

  // Navegación de secciones del encabezado
  const [activeSection, setActiveSection] = useState<NavSectionId>('historia');

  // Estado global del reproductor de archivo oral (grabaciones originales + marcas de tiempo)
  const [activePlayback, setActivePlayback] =
    useState<ActiveAudioPlayback | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Estados de ventanas modales y retorno de foco accesible
  const [isFullStoryOpen, setIsFullStoryOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    mediaList: MilestoneMedia[];
    index: number;
    contextTitle?: string;
  }>({
    isOpen: false,
    mediaList: [],
    index: 0,
  });

  const lastTriggerRef = useRef<HTMLElement | null>(null);

  // Lista única de sedes para el selector
  const availableSedes = useMemo(() => {
    const set = new Set<string>();
    sortedMilestones.forEach((m) => m.sedes.forEach((s) => set.add(s)));
    return Array.from(set);
  }, [sortedMilestones]);

  // Contadores de verificación
  const verifiedCount = useMemo(
    () =>
      sortedMilestones.filter((m) => m.verificationStatus === 'verificado')
        .length,
    [sortedMilestones]
  );
  const exampleCount = useMemo(
    () =>
      sortedMilestones.filter((m) => m.verificationStatus === 'ejemplo').length,
    [sortedMilestones]
  );

  // Filtrado sincronizado de hitos (categoría + sede + buscador + rango de años + verificación)
  const visibleMilestones = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return sortedMilestones.filter((m) => {
      if (showOnlyVerified && m.verificationStatus !== 'verificado') {
        return false;
      }
      if (selectedCategory !== 'Todos' && m.category !== selectedCategory) {
        return false;
      }
      if (
        selectedSede !== 'Todas las sedes' &&
        !m.sedes.includes(selectedSede)
      ) {
        return false;
      }
      if (m.year < rangeStart || m.year > rangeEnd) {
        return false;
      }
      if (query) {
        const matchesTitle =
          m.title.toLowerCase().includes(query) ||
          m.shortTitle.toLowerCase().includes(query);
        const matchesDescription =
          m.summary.toLowerCase().includes(query) ||
          m.fullDescription.some((p) => p.toLowerCase().includes(query)) ||
          m.keyFacts.some((k) => k.toLowerCase().includes(query)) ||
          m.testimonies.some(
            (t) =>
              t.quote.toLowerCase().includes(query) ||
              t.authorRole.toLowerCase().includes(query)
          );
        const matchesYear =
          String(m.year).includes(query) ||
          m.periodLabel.toLowerCase().includes(query);
        const matchesSede = m.sedes.some((s) =>
          s.toLowerCase().includes(query)
        );
        return (
          matchesTitle || matchesDescription || matchesYear || matchesSede
        );
      }
      return true;
    });
  }, [
    sortedMilestones,
    showOnlyVerified,
    selectedCategory,
    selectedSede,
    rangeStart,
    rangeEnd,
    searchQuery,
  ]);

  // Sincronización automática: si un filtro oculta el evento seleccionado, selecciona el primero disponible
  useEffect(() => {
    if (visibleMilestones.length === 0) {
      setSelectedMilestoneId(null);
      return;
    }
    const stillVisible = visibleMilestones.some(
      (m) => m.id === selectedMilestoneId
    );
    if (!stillVisible) {
      setSelectedMilestoneId(visibleMilestones[0].id);
    }
  }, [visibleMilestones, selectedMilestoneId]);

  const selectedMilestone = useMemo(
    () =>
      visibleMilestones.find((m) => m.id === selectedMilestoneId) ||
      visibleMilestones[0] ||
      null,
    [visibleMilestones, selectedMilestoneId]
  );

  const currentIndex = useMemo(() => {
    if (!selectedMilestone) return -1;
    return visibleMilestones.findIndex((m) => m.id === selectedMilestone.id);
  }, [visibleMilestones, selectedMilestone]);

  const hasPrev = currentIndex > 0;
  const hasNext =
    currentIndex >= 0 && currentIndex < visibleMilestones.length - 1;

  const handlePrevMilestone = () => {
    if (hasPrev) {
      setSelectedMilestoneId(visibleMilestones[currentIndex - 1].id);
    }
  };

  const handleNextMilestone = () => {
    if (hasNext) {
      setSelectedMilestoneId(visibleMilestones[currentIndex + 1].id);
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('Todos');
    setSelectedSede('Todas las sedes');
    setSearchQuery('');
    setRangeStart(minYear);
    setRangeEnd(maxYear);
    setShowOnlyVerified(false);
    setSelectedMilestoneId('hito-1997-traslado-la-una');
  };

  // Navegación suave a secciones reales desde el encabezado
  const handleNavigateSection = (section: NavSectionId) => {
    setActiveSection(section);
    const targetId =
      section === 'historia'
        ? 'nuestra-historia'
        : section === 'voces'
        ? 'voces-forjadores'
        : section === 'galeria'
        ? 'galeria'
        : 'la-institucion';
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reproducción de cualquier voz y marca de tiempo
  const handlePlayVoice = (
    profile: VoiceTestimonyProfile,
    trackIndex: number = 0,
    startSeconds: number = 0
  ) => {
    setActivePlayback({
      profile,
      trackIndex,
      startSeconds,
      autoPlay: true,
      triggerTimestamp: Date.now(),
    });
    setIsAudioPlaying(true);
  };

  const handleTogglePlayPause = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  const handleSelectTrackIndexInDock = (
    trackIndex: number,
    startSeconds: number = 0
  ) => {
    setActivePlayback((prev) =>
      prev
        ? {
            ...prev,
            trackIndex,
            startSeconds,
            autoPlay: true,
            triggerTimestamp: Date.now(),
          }
        : null
    );
    setIsAudioPlaying(true);
  };

  // Gestión de foco al abrir y cerrar modales
  const handleOpenFullStory = (triggerEl: HTMLElement | null) => {
    lastTriggerRef.current = triggerEl;
    setIsFullStoryOpen(true);
  };

  const handleCloseFullStory = () => {
    setIsFullStoryOpen(false);
    setTimeout(() => {
      lastTriggerRef.current?.focus();
    }, 20);
  };

  const handleOpenMilestoneLightbox = (
    mediaIndex: number,
    triggerEl: HTMLElement | null
  ) => {
    if (!selectedMilestone) return;
    lastTriggerRef.current = triggerEl;
    setLightboxState({
      isOpen: true,
      mediaList: selectedMilestone.media,
      index: mediaIndex,
      contextTitle: `${selectedMilestone.year} · ${selectedMilestone.shortTitle}`,
    });
  };

  const handleOpenGalleryLightbox = (
    list: MilestoneMedia[],
    index: number,
    triggerEl: HTMLElement | null
  ) => {
    lastTriggerRef.current = triggerEl;
    setLightboxState({
      isOpen: true,
      mediaList: list,
      index,
      contextTitle: 'Galería Documental del Proyecto',
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
    setTimeout(() => {
      lastTriggerRef.current?.focus();
    }, 20);
  };

  const handleSelectMilestoneAndScrollTop = (milestoneId: string) => {
    const target = sortedMilestones.find((m) => m.id === milestoneId);
    if (target) {
      if (target.verificationStatus === 'ejemplo' && showOnlyVerified) {
        setShowOnlyVerified(false);
      }
      if (
        selectedCategory !== 'Todos' &&
        target.category !== selectedCategory
      ) {
        setSelectedCategory('Todos');
      }
      if (
        selectedSede !== 'Todas las sedes' &&
        !target.sedes.includes(selectedSede)
      ) {
        setSelectedSede('Todas las sedes');
      }
      if (target.year < rangeStart || target.year > rangeEnd) {
        setRangeStart(minYear);
        setRangeEnd(maxYear);
      }
      setSearchQuery('');
      setSelectedMilestoneId(milestoneId);
      handleNavigateSection('historia');
    }
  };

  const handleFilterBySedeFromInstitution = (sedeName: string) => {
    setSelectedCategory('Todos');
    setSearchQuery('');
    setRangeStart(minYear);
    setRangeEnd(maxYear);
    setShowOnlyVerified(false);
    setSelectedSede(sedeName);
    handleNavigateSection('historia');
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#F4EFE4] text-[#132A1E] ${
        activePlayback ? 'pb-20' : ''
      }`}
    >
      {/* Encabezado Principal */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigateSection}
        onOpenArchive={() => setIsArchiveOpen(true)}
      />

      {/* Contenido Principal */}
      <main id="nuestra-historia" className="flex-1">
        {/* Portada Editorial */}
        <HeroSection
          verifiedCount={verifiedCount}
          exampleCount={exampleCount}
          showOnlyVerified={showOnlyVerified}
          onToggleOnlyVerified={() => setShowOnlyVerified((v) => !v)}
        />

        {/* Filtros por Categorías, Sede y Buscador */}
        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedSede={selectedSede}
          onSelectSede={setSelectedSede}
          availableSedes={availableSedes}
          totalVisible={visibleMilestones.length}
          totalMilestones={sortedMilestones.length}
        />

        {/* Línea de Tiempo Horizontal (Escritorio) / Vertical (Móvil) */}
        <TimelineSection
          milestones={visibleMilestones}
          selectedMilestoneId={selectedMilestone?.id || null}
          onSelectMilestone={setSelectedMilestoneId}
          onPrev={handlePrevMilestone}
          onNext={handleNextMilestone}
          hasPrev={hasPrev}
          hasNext={hasNext}
          onResetFilters={handleResetFilters}
        />

        {/* Panel de Detalle del Hito Seleccionado (con opción de escuchar relatos del hito) */}
        <MilestoneDetailPanel
          milestone={selectedMilestone}
          onOpenFullStory={handleOpenFullStory}
          onOpenLightbox={handleOpenMilestoneLightbox}
          activePlayback={activePlayback}
          isAudioPlaying={isAudioPlaying}
          onPlayVoice={handlePlayVoice}
          onTogglePlayPause={handleTogglePlayPause}
        />

        {/* Navegación Temporal Inferior (Scrubber de Rango de Años) */}
        <TimeRangeControl
          minYear={minYear}
          maxYear={maxYear}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          onChangeRange={(start, end) => {
            setRangeStart(start);
            setRangeEnd(end);
          }}
        />

        {/* NUEVA SECCIÓN: Galería de Voces, Maestros y Líderes que Forjaron la Institución */}
        <VocesMaestrosLideresSection
          activePlayback={activePlayback}
          isAudioPlaying={isAudioPlaying}
          onPlayVoice={handlePlayVoice}
          onTogglePlayPause={handleTogglePlayPause}
          onNavigateToMilestone={handleSelectMilestoneAndScrollTop}
        />

        {/* Sección Real: Galería Documental */}
        <GallerySection
          milestones={sortedMilestones}
          onOpenLightboxWithList={handleOpenGalleryLightbox}
          onSelectMilestoneFromGallery={handleSelectMilestoneAndScrollTop}
        />

        {/* Sección Real: La Institución y sus 6 Sedes */}
        <InstitutionSection
          onFilterBySede={handleFilterBySedeFromInstitution}
          onOpenArchive={() => setIsArchiveOpen(true)}
        />
      </main>

      {/* Pie de página institucional con los 3 logos principales */}
      <footer className="border-t border-[#C7BFA8] bg-[#EAE3D2] py-8 px-4 sm:px-8 text-xs text-[#3D4A41]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <img
              src="/assets/img/logo_gonzalo.png"
              alt="Escudo Institución Educativa Gonzalo Mejía Echeverry"
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <div>
              <strong className="font-serif-display text-sm sm:text-base text-[#113826] block">
                Institución Educativa Gonzalo Mejía Echeverry
              </strong>
              <span className="text-[#4A524C]">
                Corregimiento de Altagracia, Pereira, Risaralda · NIT 891408309-6
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <img
              src="/assets/img/logo_semillero.png"
              alt="Semillero de Investigación IEGME"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="h-8 w-px bg-[#C7BFA8]" aria-hidden="true" />
            <img
              src="/assets/img/logo_etno.png"
              alt="Licenciatura en Etnoeducación y Desarrollo Comunitario"
              className="h-11 sm:h-13 w-auto object-contain"
            />
            <div className="h-8 w-px bg-[#C7BFA8]" aria-hidden="true" />
            <img
              src="/assets/img/logo-utp.png"
              alt="Universidad Tecnológica de Pereira"
              className="h-9 sm:h-11 w-auto object-contain"
            />
            <div className="text-left max-w-xs">
              <span className="font-semibold text-[#113826] block text-xs">
                Tejido de Memoria Comunitaria
              </span>
              <span className="text-[11px] text-[#5A625C] block">
                Semillero de Investigación · Licenciatura en Etnoeducación · UTP (2026)
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal: Ver Historia Completa (con reproductor de voces y marcas de tiempo del hito) */}
      <FullStoryModal
        milestone={selectedMilestone}
        isOpen={isFullStoryOpen}
        onClose={handleCloseFullStory}
        onPrev={handlePrevMilestone}
        onNext={handleNextMilestone}
        hasPrev={hasPrev}
        hasNext={hasNext}
        onOpenLightbox={handleOpenMilestoneLightbox}
        activePlayback={activePlayback}
        isAudioPlaying={isAudioPlaying}
        onPlayVoice={handlePlayVoice}
        onTogglePlayPause={handleTogglePlayPause}
      />

      {/* Modal: Visor / Ampliación de Fotografías y Láminas */}
      <MediaLightboxModal
        mediaList={lightboxState.mediaList}
        initialIndex={lightboxState.index}
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        contextTitle={lightboxState.contextTitle}
      />

      {/* Modal: Explorador del Archivo Oral y Documental */}
      <ArchiveExplorerModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        milestones={sortedMilestones}
        onSelectMilestone={handleSelectMilestoneAndScrollTop}
      />

      {/* Reproductor Flotante Persistente de Grabaciones Originales y Transcripciones */}
      <AudioPlayerDock
        playback={activePlayback}
        isPlaying={isAudioPlaying}
        onPlayPauseChange={setIsAudioPlaying}
        onSelectTrackIndex={handleSelectTrackIndexInDock}
        onClose={() => {
          setIsAudioPlaying(false);
          setActivePlayback(null);
        }}
        onNavigateToMilestone={handleSelectMilestoneAndScrollTop}
      />
    </div>
  );
}

export default App;
