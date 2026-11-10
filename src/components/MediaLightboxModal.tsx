import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { MilestoneMedia } from '../types/timeline';

interface MediaLightboxModalProps {
  mediaList: MilestoneMedia[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  contextTitle?: string;
}

export const MediaLightboxModal: React.FC<MediaLightboxModalProps> = ({
  mediaList,
  initialIndex,
  isOpen,
  onClose,
  contextTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsZoomed(false);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft' && mediaList.length > 1) {
        e.preventDefault();
        setIsZoomed(false);
        setCurrentIndex((prev) =>
          prev === 0 ? mediaList.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight' && mediaList.length > 1) {
        e.preventDefault();
        setIsZoomed(false);
        setCurrentIndex((prev) =>
          prev === mediaList.length - 1 ? 0 : prev + 1
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, mediaList.length, onClose]);

  if (!isOpen || mediaList.length === 0) return null;

  const currentItem = mediaList[currentIndex] || mediaList[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0A1F15]/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Visor de imágenes: ${currentItem.title}`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-[#FAF7F0] border-2 border-[#C59B38] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-[#F4EFE4] border-b border-[#C7BFA8]">
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            {currentItem.isRealProjectAsset ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#113826] text-[#FAF7F0] text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8D49B]" />
                {currentItem.assetTypeLabel}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#C59B38]/25 text-[#6E4F0B] border border-[#C59B38] text-xs font-medium">
                <Info className="w-3.5 h-3.5 text-[#9E7820]" />
                {currentItem.assetTypeLabel}
              </span>
            )}
            {contextTitle && (
              <span className="text-xs text-[#4A524C] truncate hidden sm:inline">
                · {contextTitle}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsZoomed((z) => !z)}
              aria-label={isZoomed ? 'Reducir zoom' : 'Ampliar zoom'}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#8E8778] bg-[#FAF7F0] hover:bg-[#113826] text-[#113826] hover:text-[#FAF7F0] text-xs font-medium transition-colors cursor-pointer"
            >
              {isZoomed ? (
                <>
                  <ZoomOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Ajustar</span>
                </>
              ) : (
                <>
                  <ZoomIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Ampliar</span>
                </>
              )}
            </button>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar visor de imágenes (Escape)"
              className="w-8 h-8 rounded-full border border-[#8E8778] bg-[#FAF7F0] hover:bg-[#113826] text-[#113826] hover:text-[#FAF7F0] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Stage */}
        <div className="relative flex-1 bg-[#182820] flex items-center justify-center overflow-auto min-h-[280px] max-h-[62vh] p-4">
          <img
            src={currentItem.url}
            alt={currentItem.alt}
            onClick={() => setIsZoomed((z) => !z)}
            className={`transition-transform duration-200 rounded shadow-md ${
              isZoomed
                ? 'scale-150 cursor-zoom-out max-w-none'
                : 'max-h-[56vh] w-auto object-contain cursor-zoom-in'
            }`}
          />

          {mediaList.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => {
                  setIsZoomed(false);
                  setCurrentIndex((prev) =>
                    prev === 0 ? mediaList.length - 1 : prev - 1
                  );
                }}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF7F0]/90 hover:bg-[#C59B38] text-[#113826] flex items-center justify-center shadow-md transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsZoomed(false);
                  setCurrentIndex((prev) =>
                    prev === mediaList.length - 1 ? 0 : prev + 1
                  );
                }}
                aria-label="Siguiente imagen"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF7F0]/90 hover:bg-[#C59B38] text-[#113826] flex items-center justify-center shadow-md transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Caption & Thumbnail Strip */}
        <div className="p-4 sm:px-6 bg-[#FAF7F0] border-t border-[#C7BFA8]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-3xl">
              <div className="flex items-center gap-2">
                <h3 className="font-serif-display text-lg font-bold text-[#113826]">
                  {currentItem.title}
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#EFE9DA] text-[#3D4A41]">
                  {currentItem.yearOrPeriod}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#2B3930] leading-relaxed">
                {currentItem.caption}
              </p>
              <p className="text-[11.5px] text-[#5A625C]">
                <strong>Fuente documental:</strong> {currentItem.source}
              </p>
            </div>

            {mediaList.length > 1 && (
              <div className="flex items-center gap-2 shrink-0 overflow-x-auto py-1">
                {mediaList.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setIsZoomed(false);
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Seleccionar imagen ${idx + 1}: ${item.title}`}
                    className={`w-16 h-11 rounded-md overflow-hidden border transition-all shrink-0 cursor-pointer ${
                      idx === currentIndex
                        ? 'border-2 border-[#C59B38] ring-2 ring-[#C59B38]/40 scale-105'
                        : 'border-[#C7BFA8] opacity-65 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
