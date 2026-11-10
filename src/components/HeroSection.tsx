import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

interface HeroSectionProps {
  verifiedCount: number;
  exampleCount: number;
  showOnlyVerified: boolean;
  onToggleOnlyVerified: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  verifiedCount,
  exampleCount,
  showOnlyVerified,
  onToggleOnlyVerified,
}) => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative border-b border-[#C7BFA8] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-4 sm:py-5 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 z-10">
            <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.22em] text-[#132A1E] mb-1 pl-4 sm:pl-5">
              MEMORIA INSTITUCIONAL
            </p>

            {/* Vertical Gold Bar + Heading & Subtitle */}
            <div className="flex items-stretch gap-3.5 sm:gap-4">
              <div
                className="w-[5px] bg-[#C59B38] rounded-full shrink-0 my-0.5"
                aria-hidden="true"
              />
              <div>
                <h1
                  id="hero-heading"
                  className="font-serif-display text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0F3322] leading-[1.06] tracking-tight"
                >
                  Una historia que nos une
                </h1>
                <p className="mt-1.5 text-[15px] sm:text-[17px] text-[#2B3930] leading-snug font-normal max-w-2xl">
                  Explora los momentos que han construido nuestra comunidad educativa.
                </p>
              </div>
            </div>

            {/* Editorial provenance caption & verification status indicator */}
            <div className="mt-2.5 pl-4 sm:pl-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-[13px] text-[#4A524C]">
              <span className="font-serif-editorial italic text-[#3D4A41]">
                Corregimiento de Altagracia, Pereira · Memoria colectiva de sus 6 sedes
              </span>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#113826]/10 text-[#113826] font-sans-ui text-[11.5px] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#113826]" aria-hidden="true" />
                  {verifiedCount} hitos verificados en archivo
                </span>

                {exampleCount > 0 && (
                  <button
                    type="button"
                    onClick={onToggleOnlyVerified}
                    title="Alternar visualización de registros en validación"
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11.5px] font-sans-ui font-medium transition-colors cursor-pointer border ${
                      showOnlyVerified
                        ? 'bg-[#FAF7F0] text-[#636E66] border-[#C7BFA8] hover:border-[#9E7820]'
                        : 'bg-[#C59B38]/20 text-[#7A5910] border-[#C59B38]/60 hover:bg-[#C59B38]/30'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-[#9E7820]" aria-hidden="true" />
                    {showOnlyVerified
                      ? `Mostrar ${exampleCount} registro pendiente de validación`
                      : `${exampleCount} contenido de ejemplo pendiente de validación`}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Architectural Sketch Illustration (fiel a la composición de referencia) */}
          <div
            className="hidden lg:block lg:col-span-5 relative h-[185px] -my-6 pointer-events-none select-none"
            aria-hidden="true"
          >
            <img
              src="/assets/ilustraciones/hero-escuela-altagracia.svg"
              alt=""
              className="w-full h-full object-cover object-right scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
