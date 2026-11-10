import React from 'react';
import { FolderSearch } from 'lucide-react';

export type NavSectionId =
  | 'historia'
  | 'plano-vivo'
  | 'voces'
  | 'galeria'
  | 'institucion';

interface HeaderProps {
  activeSection: NavSectionId;
  onNavigate: (section: NavSectionId) => void;
  onOpenArchive: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenArchive,
}) => {
  const navItems: { id: NavSectionId; label: string; href: string }[] = [
    { id: 'historia', label: 'Nuestra historia', href: '#nuestra-historia' },
    { id: 'plano-vivo', label: 'Plano Vivo', href: '#plano-vivo' },
    { id: 'voces', label: 'Voces y Forjadores', href: '#voces-forjadores' },
    { id: 'galeria', label: 'Galería', href: '#galeria' },
    { id: 'institucion', label: 'La institución', href: '#la-institucion' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#F4EFE4]/95 backdrop-blur-sm border-b border-[#C7BFA8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 min-h-16 py-2 flex items-center justify-between gap-3">
        {/* Brand / Institution Name */}
        <a
          href="#nuestra-historia"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('historia');
          }}
          className="flex items-center gap-2.5 sm:gap-3.5 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59B38] rounded-md min-w-0"
          aria-label="Institución Educativa Gonzalo Mejía Echeverry - Ir al inicio"
        >
          {/* Editorial Open Book Emblem (fiel a la referencia visual, sin inventar un escudo oficial) */}
          <div
            className="w-10 h-9 sm:w-12 sm:h-10 flex items-center justify-center shrink-0"
            title="Símbolo editorial de memoria institucional"
          >
            <svg
              viewBox="0 0 56 44"
              className="w-10 h-9 sm:w-12 sm:h-10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Golden upper pages / arch */}
              <path
                d="M28 15 C22 8, 13 7, 6 10 C12 13, 21 15, 28 21 C35 15, 44 13, 50 10 C43 7, 34 8, 28 15 Z"
                fill="#C59B38"
              />
              {/* Deep green open book pages */}
              <path
                d="M4 15 C13 15, 22 18, 27 24 L27 39 C21 34, 13 32, 4 32 Z"
                fill="#113826"
              />
              <path
                d="M52 15 C43 15, 34 18, 29 24 L29 39 C35 34, 43 32, 52 32 Z"
                fill="#113826"
              />
              {/* Subtle base spine */}
              <path
                d="M24 39 Q28 42 32 39"
                stroke="#C59B38"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div
            className="h-8 sm:h-9 w-px bg-[#B5AE9E] shrink-0"
            aria-hidden="true"
          />

          <div className="flex flex-col min-w-0">
            <span className="font-serif-display text-[14.5px] sm:text-[18.5px] font-bold text-[#113826] leading-[1.15] tracking-tight group-hover:text-[#1D4D37] transition-colors truncate">
              Institución Educativa
            </span>
            <span className="font-serif-display text-[14.5px] sm:text-[18.5px] font-bold text-[#113826] leading-[1.15] tracking-tight group-hover:text-[#1D4D37] transition-colors truncate">
              Gonzalo Mejía Echeverry
            </span>
          </div>
        </a>

        {/* Navigation Links & Archive CTA */}
        <nav
          aria-label="Navegación principal"
          className="flex items-center gap-3 sm:gap-5"
        >
          <div className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`relative py-2 text-[14.5px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59B38] rounded-sm ${
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

          <div
            className="hidden lg:block h-6 w-px bg-[#B5AE9E]"
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={onOpenArchive}
            className="inline-flex items-center gap-2 border border-[#113826] bg-[#FAF7F0]/70 hover:bg-[#113826] text-[#113826] hover:text-[#FAF7F0] px-3.5 sm:px-4 py-1.5 rounded-lg text-xs sm:text-[14.5px] font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38]"
          >
            <FolderSearch className="w-4 h-4 sm:hidden" aria-hidden="true" />
            <span>Explorar archivo</span>
          </button>
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
