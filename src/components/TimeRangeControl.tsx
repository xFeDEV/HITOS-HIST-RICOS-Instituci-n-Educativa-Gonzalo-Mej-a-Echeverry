import React from 'react';
import { Calendar, RotateCcw } from 'lucide-react';

interface TimeRangeControlProps {
  minYear: number;
  maxYear: number;
  rangeStart: number;
  rangeEnd: number;
  onChangeRange: (start: number, end: number) => void;
}

export const TimeRangeControl: React.FC<TimeRangeControlProps> = ({
  minYear,
  maxYear,
  rangeStart,
  rangeEnd,
  onChangeRange,
}) => {
  const totalSpan = Math.max(maxYear - minYear, 1);
  const leftPercent = ((rangeStart - minYear) / totalSpan) * 100;
  const rightPercent = ((rangeEnd - minYear) / totalSpan) * 100;
  const isModified = rangeStart > minYear || rangeEnd < maxYear;

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStart = Math.min(Number(e.target.value), rangeEnd);
    onChangeRange(newStart, rangeEnd);
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEnd = Math.max(Number(e.target.value), rangeStart);
    onChangeRange(rangeStart, newEnd);
  };

  return (
    <div className="border-t border-[#C7BFA8] mt-3 bg-[#EFE9DA]/60">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
        {/* Left Label */}
        <div className="flex items-center gap-2.5 text-xs sm:text-[14px] font-medium text-[#2C3A31] shrink-0">
          <Calendar className="w-4 h-4 text-[#113826]" aria-hidden="true" />
          <span>Desliza para viajar en el tiempo</span>
          {isModified && (
            <button
              type="button"
              onClick={() => onChangeRange(minYear, maxYear)}
              className="ml-1 inline-flex items-center gap-1 text-xs font-semibold text-[#113826] hover:text-[#9E7820] underline cursor-pointer"
              title="Mostrar todo el intervalo de años"
            >
              <RotateCcw className="w-3 h-3" />
              <span>
                ({rangeStart}–{rangeEnd}) Restablecer
              </span>
            </button>
          )}
        </div>

        {/* Interactive Dual-Thumb Range Scrubber (fiel a la barra inferior de la referencia) */}
        <div className="flex items-center gap-3.5 w-full sm:flex-1 max-w-[820px]">
          <span className="text-xs sm:text-[14px] font-semibold text-[#2C3A31] tabular-nums w-10 text-right">
            {rangeStart}
          </span>

          <div className="relative flex-1 h-7 flex items-center">
            {/* Base Track */}
            <div className="w-full h-2 rounded-full bg-[#C7BFA8]" />

            {/* Active Interval Bar */}
            <div
              className="absolute h-2 rounded-full bg-[#113826] pointer-events-none"
              style={{
                left: `${leftPercent}%`,
                width: `${Math.max(rightPercent - leftPercent, 0)}%`,
              }}
            />

            {/* Visual Handle Start */}
            <div
              className="absolute w-5 h-5 rounded-full bg-[#FAF7F0] border-[2.5px] border-[#113826] shadow-xs -translate-x-1/2 pointer-events-none transition-transform"
              style={{ left: `${leftPercent}%` }}
              aria-hidden="true"
            />

            {/* Visual Handle End */}
            <div
              className="absolute w-5 h-5 rounded-full bg-[#FAF7F0] border-[2.5px] border-[#113826] shadow-xs -translate-x-1/2 pointer-events-none transition-transform"
              style={{ left: `${rightPercent}%` }}
              aria-hidden="true"
            />

            {/* Invisible Accessible Range Inputs Overlaid */}
            <label htmlFor="range-start-year" className="sr-only">
              Año inicial visible ({rangeStart})
            </label>
            <input
              id="range-start-year"
              type="range"
              min={minYear}
              max={maxYear}
              value={rangeStart}
              onChange={handleStartChange}
              aria-label={`Año inicial del filtro temporal: ${rangeStart}`}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
            />

            <label htmlFor="range-end-year" className="sr-only">
              Año final visible ({rangeEnd})
            </label>
            <input
              id="range-end-year"
              type="range"
              min={minYear}
              max={maxYear}
              value={rangeEnd}
              onChange={handleEndChange}
              aria-label={`Año final del filtro temporal: ${rangeEnd}`}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
            />
          </div>

          <span className="text-xs sm:text-[14px] font-semibold text-[#2C3A31] tabular-nums w-10">
            {rangeEnd}
          </span>
        </div>
      </div>
    </div>
  );
};
