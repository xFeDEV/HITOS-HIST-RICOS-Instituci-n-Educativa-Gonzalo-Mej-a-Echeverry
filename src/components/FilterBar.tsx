import React from 'react';
import { Search, X } from 'lucide-react';
import { MilestoneCategory } from '../types/timeline';

export type FilterCategoryOption = 'Todos' | MilestoneCategory;

interface FilterBarProps {
  selectedCategory: FilterCategoryOption;
  onSelectCategory: (category: FilterCategoryOption) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSede: string;
  onSelectSede: (sede: string) => void;
  availableSedes: string[];
  totalVisible: number;
  totalMilestones: number;
}

const CATEGORIES: FilterCategoryOption[] = [
  'Todos',
  'Institución',
  'Comunidad',
  'Logros',
];

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedSede,
  onSelectSede,
  availableSedes,
}) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-3.5 pb-1.5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5">
        {/* Category Pills + Optional Sede Filter */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5" role="group" aria-label="Filtrar hitos por categoría">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelectCategory(category)}
                aria-pressed={isActive}
                className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-[14.5px] font-medium transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38] ${
                  isActive
                    ? 'bg-[#113826] text-[#FAF7F0] border border-[#113826] shadow-xs'
                    : 'bg-[#FAF7F0]/60 text-[#1A2E22] border border-[#8E8778] hover:border-[#113826] hover:bg-[#FAF7F0]'
                }`}
              >
                {category}
              </button>
            );
          })}

          {/* Selector discreto por sede rural */}
          <div className="relative ml-0 sm:ml-1">
            <label htmlFor="sede-filter" className="sr-only">
              Filtrar por sede educativa
            </label>
            <select
              id="sede-filter"
              value={selectedSede}
              onChange={(e) => onSelectSede(e.target.value)}
              className={`appearance-none pl-3.5 pr-8 py-1.5 rounded-full text-xs sm:text-[13.5px] font-medium border transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B38] ${
                selectedSede !== 'Todas las sedes'
                  ? 'bg-[#C59B38]/20 text-[#113826] border-[#C59B38] font-semibold'
                  : 'bg-[#FAF7F0]/60 text-[#3D4A41] border-[#ADA696] hover:border-[#113826]'
              }`}
            >
              <option value="Todas las sedes">Todas las sedes (6)</option>
              {availableSedes.map((sede) => (
                <option key={sede} value={sede}>
                  {sede}
                </option>
              ))}
            </select>
            <span
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#3D4A41]"
              aria-hidden="true"
            >
              ▼
            </span>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-[290px] lg:w-[320px]">
          <label htmlFor="milestone-search" className="sr-only">
            Buscar un hito por título, descripción o año
          </label>
          <Search
            className="w-4 h-4 text-[#5A625C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            id="milestone-search"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar un hito"
            className="w-full pl-9 pr-8 py-1.5 rounded-lg bg-[#FAF7F0]/85 border border-[#8E8778] focus:border-[#113826] text-sm text-[#132A1E] placeholder:text-[#636E66] focus:outline-none focus:ring-2 focus:ring-[#C59B38]/50 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Limpiar búsqueda"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-[#636E66] hover:text-[#113826] rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
