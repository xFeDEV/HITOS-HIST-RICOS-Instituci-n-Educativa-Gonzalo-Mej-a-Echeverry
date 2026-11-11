import React from 'react';

export type NavSectionId =
  | 'historia'
  | 'voces'
  | 'galeria'
  | 'institucion';

interface HeaderProps {
  activeSection: NavSectionId;
  onNavigate: (section: NavSectionId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
}) => {
  const navItems: { id: NavSectionId; label: string; href: string }[] = [
    { id: 'historia', label: 'Nuestra historia', href: '#nuestra-historia' },
    { id: 'voces', label: 'Voces y Forjadores', href: '#voces-forjadores' },
    { id: 'galeria', label: 'Galería', href: '#galeria' },
    { id: 'institucion', label: 'La institución', href: '#la-institucion' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#F4EFE4]/95 backdrop-blur-sm border-b border-[#C7BFA8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 min-h-20 py-2.5 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Brand / Institution Name */}
        <a
          href="#nuestra-historia"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('historia');
          }}
          className="flex items-center gap-3 sm:gap-4 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59B38] rounded-md min-w-0"
          aria-label="Institución Educativa Gonzalo Mejía Echeverry - Ir al inicio"
        >
          {/* Escudo Oficial IE Gonzalo Mejía Echeverry (Tamaño ampliado y nítido) */}
          <img
            src="/assets/img/logo_gonzalo.png"
            alt="Escudo Oficial Institución Educativa Gonzalo Mejía Echeverry"
            className="w-13 h-13 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-2xs"
          />

          <div
            className="h-10 sm:h-12 w-px bg-[#B5AE9E] shrink-0"
            aria-hidden="true"
          />

          <div className="flex flex-col min-w-0">
            <span className="font-serif-display text-[15px] sm:text-[19px] md:text-[21px] font-bold text-[#113826] leading-[1.12] tracking-tight group-hover:text-[#1D4D37] transition-colors truncate">
              Institución Educativa
            </span>
            <span className="font-serif-display text-[15px] sm:text-[19px] md:text-[21px] font-bold text-[#113826] leading-[1.12] tracking-tight group-hover:text-[#1D4D37] transition-colors truncate">
              Gonzalo Mejía Echeverry
            </span>
          </div>
        </a>

        {/* Navigation Links, Institutional Logos & Archive CTA */}
        <nav
          aria-label="Navegación principal"
          className="flex items-center gap-3 sm:gap-6"
        >
          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`relative py-2 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59B38] rounded-sm ${
                  activeSection === item.id
                    ? 'text-[#113826] font-semibold'
                    : 'text-[#3D4A41] hover:text-[#113826]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C59B38] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Logos Aliados Académicos e Investigativos: Semillero, Etnoeducación y UTP (Tamaño más grande) */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4 pl-3 md:pl-4 border-l-2 border-[#C7BFA8]">
            <img
              src="/assets/img/logo_semillero.png"
              alt="Semillero de Investigación IEGME"
              title="Semillero de Investigación IEGME"
              className="h-11 sm:h-13 md:h-15 w-auto object-contain hover:scale-105 transition-transform drop-shadow-2xs"
            />
            <div className="h-9 md:h-11 w-px bg-[#DCD5C3]" aria-hidden="true" />
            <img
              src="/assets/img/logo_etno.png"
              alt="Licenciatura en Etnoeducación y Desarrollo Comunitario"
              title="Licenciatura en Etnoeducación y Desarrollo Comunitario UTP"
              className="h-11 sm:h-13 md:h-15 w-auto object-contain hover:scale-105 transition-transform drop-shadow-2xs"
            />
            <div className="h-9 md:h-11 w-px bg-[#DCD5C3]" aria-hidden="true" />
            <img
              src="/assets/img/logo-utp.png"
              alt="Universidad Tecnológica de Pereira"
              title="Universidad Tecnológica de Pereira"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain hover:scale-105 transition-transform drop-shadow-2xs"
            />
          </div>
        </nav>
      </div>

      {/* Mobile / Tablet Quick Section Bar */}
      <div className="flex lg:hidden items-center justify-around overflow-x-auto border-t border-[#DCD5C3] bg-[#FAF7F0]/80 px-2 py-1.5 text-xs font-medium gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap cursor-pointer ${
              activeSection === item.id
                ? 'bg-[#113826] text-[#FAF7F0]'
                : 'text-[#3D4A41]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
