import React from 'react';
import {
  MapPin,
  Sprout,
  School,
  Users,
  BookOpen,
  ArrowUpRight,
  FileCode2,
} from 'lucide-react';
import { SEDES_DATA } from '../data/milestones';

interface InstitutionSectionProps {
  onFilterBySede: (sedeName: string) => void;
  onOpenArchive: () => void;
}

export const InstitutionSection: React.FC<InstitutionSectionProps> = ({
  onFilterBySede,
  onOpenArchive,
}) => {
  return (
    <section
      id="la-institucion"
      aria-labelledby="institution-heading"
      className="border-t border-[#C7BFA8] py-12 sm:py-16 bg-[#F4EFE4]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-10">
        {/* Resumen Institucional */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#113826]">
              IDENTIDAD Y TERRITORIO · CORREGIMIENTO DE ALTAGRACIA
            </p>
            <h2
              id="institution-heading"
              className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0F3322] leading-tight"
            >
              Institución Educativa Gonzalo Mejía Echeverry
            </h2>
            <div className="w-12 h-1 bg-[#C59B38] rounded-full" aria-hidden="true" />

            <p className="text-base sm:text-[17px] text-[#2B3930] leading-relaxed">
              Establecimiento público de carácter oficial y mixto (
              <strong>NIT 891408309-6</strong>), con sede principal en la{' '}
              <strong>Vereda La Una</strong> del corregimiento de Altagracia, al
              suroccidente del municipio de Pereira, Risaralda. Ubicada en un
              balcón natural de la Cordillera Central que desciende hacia el valle
              del río La Vieja, la institución es corazón educativo del{' '}
              <strong>Paisaje Cultural Cafetero</strong>.
            </p>
            <p className="text-sm sm:text-base text-[#3D4A41] leading-relaxed">
              Ofrece formación integral en los niveles de preescolar, básica
              primaria (bajo los modelos de Escuela Nueva y gradual tradicional),
              básica secundaria, media técnica agropecuaria y educación formal de
              adultos en Jornada Sabatina (Programa 3011). Su Proyecto Educativo
              Institucional (PEI), actualizado en articulación con la{' '}
              <strong>Universidad Tecnológica de Pereira (UTP)</strong>, tiene
              como eje transversal la <strong>Agroecología</strong> y el{' '}
              <strong>Sistema Agrocafetalero</strong>.
            </p>

            {/* Alianza Institucional: Escudo Oficial y Logos Aliados */}
            <div className="flex flex-wrap items-center gap-3.5 bg-[#FAF7F0] border border-[#DCD5C3] rounded-xl p-3 shadow-2xs">
              <img
                src="/assets/img/logo_gonzalo.png"
                alt="Escudo Oficial Institución Educativa Gonzalo Mejía Echeverry"
                className="h-12 w-auto object-contain shrink-0"
              />
              <div className="h-8 w-px bg-[#DCD5C3] hidden sm:block" aria-hidden="true" />
              <img
                src="/assets/img/logo_semillero.png"
                alt="Semillero de Investigación IEGME"
                title="Semillero de Investigación"
                className="h-11 w-auto object-contain shrink-0"
              />
              <div className="h-8 w-px bg-[#DCD5C3] hidden sm:block" aria-hidden="true" />
              <img
                src="/assets/img/logo_etno.png"
                alt="Licenciatura en Etnoeducación y Desarrollo Comunitario"
                className="h-12 w-auto object-contain shrink-0"
              />
              <div className="h-8 w-px bg-[#DCD5C3] hidden sm:block" aria-hidden="true" />
              <img
                src="/assets/img/logo-utp.png"
                alt="Universidad Tecnológica de Pereira"
                className="h-10 w-auto object-contain shrink-0"
              />
              <p className="text-xs text-[#4A524C] leading-snug flex-1 min-w-[180px]">
                Proyecto desarrollado en articulación entre la <strong>Institución Educativa Gonzalo Mejía Echeverry</strong>, el <strong>Semillero de Investigación</strong> y la <strong>Licenciatura en Etnoeducación</strong> de la <strong>Universidad Tecnológica de Pereira</strong>.
              </p>
            </div>
          </div>

          {/* Tarjeta de datos verificados */}
          <div className="lg:col-span-5 rounded-2xl border-2 border-[#C59B38] bg-[#FAF7F0] p-5 sm:p-6 shadow-xs space-y-4">
            <h3 className="font-serif-display text-xl font-bold text-[#113826]">
              Ficha institucional verificada
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-[#F4EFE4] border border-[#DCD5C3]">
                <dt className="text-[#5A625C] font-medium flex items-center gap-1.5">
                  <School className="w-4 h-4 text-[#113826]" />
                  Fundación oficial
                </dt>
                <dd className="mt-1 font-serif-display font-bold text-base text-[#113826]">
                  1967 (Sede Principal)
                </dd>
              </div>

              <div className="p-3 rounded-xl bg-[#F4EFE4] border border-[#DCD5C3]">
                <dt className="text-[#5A625C] font-medium flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#113826]" />
                  Sedes rurales activas
                </dt>
                <dd className="mt-1 font-serif-display font-bold text-base text-[#113826]">
                  6 sedes en Altagracia
                </dd>
              </div>

              <div className="p-3 rounded-xl bg-[#F4EFE4] border border-[#DCD5C3]">
                <dt className="text-[#5A625C] font-medium flex items-center gap-1.5">
                  <Sprout className="w-4 h-4 text-[#113826]" />
                  Enfoque del PEI
                </dt>
                <dd className="mt-1 font-semibold text-[#113826]">
                  Agroecológico y Cafetalero
                </dd>
              </div>

              <div className="p-3 rounded-xl bg-[#F4EFE4] border border-[#DCD5C3]">
                <dt className="text-[#5A625C] font-medium flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#113826]" />
                  Veredas atendidas
                </dt>
                <dd className="mt-1 font-semibold text-[#113826]">
                  La Una, Cañaveral, Filobonito, El Jazmín, El Estanquillo y Centro
                </dd>
              </div>
            </dl>

            <div className="pt-2 border-t border-[#DCD5C3] flex items-center justify-between gap-3">
              <span className="text-xs text-[#4A524C]">
                Investigación UTP · Licenciatura en Etnoeducación (2026)
              </span>
              <button
                type="button"
                onClick={onOpenArchive}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#113826] hover:text-[#9E7820] cursor-pointer"
              >
                <span>Ver archivo oral</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Las 6 Sedes Educativas (Tabla 2 del Anteproyecto) */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h3 className="font-serif-display text-2xl font-bold text-[#0F3322]">
                Nuestras 6 sedes educativas en el corregimiento
              </h3>
              <p className="text-xs sm:text-sm text-[#3D4A41]">
                Selecciona cualquier sede para filtrar sus hitos históricos en la
                línea de tiempo superior.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SEDES_DATA.map((sede) => {
              // Mapear el nombre corto que usan los hitos en `milestone.sedes`
              const shortSedeFilterName = sede.name.startsWith('Sede Principal')
                ? 'Sede Principal'
                : sede.name.startsWith('Sede El Núcleo')
                ? 'Sede El Núcleo'
                : sede.name;

              return (
                <div
                  key={sede.id}
                  className="rounded-xl border border-[#B5AE9E] bg-[#FAF7F0] overflow-hidden flex flex-col justify-between hover:border-[#C59B38] transition-all shadow-2xs group"
                >
                  {sede.image && (
                    <div className="relative h-44 w-full overflow-hidden bg-[#EAE3D2] border-b border-[#DCD5C3]">
                      <img
                        src={sede.image}
                        alt={sede.imageAlt || sede.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="font-semibold text-[#FAF7F0] bg-[#113826]/85 backdrop-blur-xs px-2.5 py-0.5 rounded text-[11px] shadow-xs">
                          {sede.vereda}
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2.5">
                        <span className="text-[10.5px] font-medium bg-[#FAF7F0]/90 text-[#7A5910] border border-[#C59B38]/50 px-2 py-0.5 rounded backdrop-blur-xs shadow-xs">
                          {sede.model}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {!sede.image && (
                        <div className="flex items-center justify-between gap-2 text-xs text-[#5A625C] mb-1.5">
                          <span className="font-semibold text-[#113826] bg-[#113826]/10 px-2.5 py-0.5 rounded">
                            {sede.vereda}
                          </span>
                          <span className="text-[11px] font-medium text-[#9E7820]">
                            {sede.model}
                          </span>
                        </div>
                      )}

                      <h4 className="font-serif-display text-lg font-bold text-[#113826]">
                        {sede.name}
                      </h4>
                      <p className="mt-0.5 text-xs font-semibold text-[#4A524C]">
                        Creación: {sede.creationYear}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-[#2B3930] leading-relaxed">
                        {sede.description}
                      </p>

                      <ul className="mt-3 space-y-1 text-xs text-[#3D4A41]">
                        {sede.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#C59B38] font-bold">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#DCD5C3] flex items-center justify-between">
                      <span className="text-[11px] text-[#5A625C] truncate max-w-[180px]">
                        {sede.grades}
                      </span>
                      <button
                        type="button"
                        onClick={() => onFilterBySede(shortSedeFilterName)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#113826] hover:text-[#9E7820] cursor-pointer"
                      >
                        <span>Filtrar hitos</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guía rápida de edición para el equipo investigador y docente */}
        <div className="rounded-xl border border-[#C7BFA8] bg-[#FAF7F0]/90 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <FileCode2 className="w-5 h-5 text-[#113826] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#2C3A31]">
              <strong className="font-semibold text-[#113826]">
                ¿Dónde actualizar o agregar nuevos hitos y fotografías de archivo?
              </strong>
              <p className="mt-0.5 text-[#4A524C]">
                Todos los eventos están centralizados en{' '}
                <code className="px-1.5 py-0.5 rounded bg-[#EFE9DA] text-[#113826] font-mono text-xs">
                  src/data/milestones.ts
                </code>{' '}
                y las imágenes en{' '}
                <code className="px-1.5 py-0.5 rounded bg-[#EFE9DA] text-[#113826] font-mono text-xs">
                  public/assets/archivo/
                </code>
                .
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenArchive}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#113826] hover:bg-[#1D4D37] text-[#FAF7F0] text-xs sm:text-sm font-medium transition-colors shrink-0 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Consultar índice de entrevistas (20)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
