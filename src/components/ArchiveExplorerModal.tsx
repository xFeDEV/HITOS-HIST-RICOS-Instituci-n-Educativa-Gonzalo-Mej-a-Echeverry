import React, { useEffect, useRef, useState } from 'react';
import { X, Search, Mic, FileText, ArrowUpRight, MapPin } from 'lucide-react';
import { HistoricalMilestone } from '../types/timeline';

interface InterviewRecord {
  code: string;
  interviewee: string;
  role: string;
  sede: string;
  summary: string;
  relatedMilestoneId: string;
}

const INTERVIEWS_CATALOG: InterviewRecord[] = [
  {
    code: 'PRI-DOC-G03',
    interviewee: 'Luis Fernando Orozco',
    role: 'Docente de Educación Física (32 años en la institución, desde 1994)',
    sede: 'Sede Principal',
    summary:
      'Relata la fundación en 1967, el estado de las columnas en La Una en 1994, el traslado con sillas al hombro en septiembre de 1997, los Juegos Intercolegiados desde 1995 y el enfoque agroecológico actual.',
    relatedMilestoneId: 'hito-1997-traslado-la-una',
  },
  {
    code: 'NUC-DOC-G.09',
    interviewee: 'Milton Guillermo',
    role: 'Docente histórico de primaria y cofundador de la Jornada Sabatina',
    sede: 'Sede El Núcleo',
    summary:
      'Describe el origen del Núcleo Escolar, el "Equipo de Campo" itinerante en Jeep (mejoradoras, carpintería, odontología, agrónomo), la granja de 9 hectáreas, el terremoto del 25 de enero de 1999 y la resistencia a la fusión de 2002.',
    relatedMilestoneId: 'hito-1960-nucleo-filobonito',
  },
  {
    code: 'NUCPRI-DOC-G.14',
    interviewee: 'Isabel Cristina Álvarez Morales y Sandra Milena Segura',
    role: 'Docentes desde febrero de 1997 (Sede Núcleo, Sede Principal y Sabatina)',
    sede: 'Sede Principal y Sede El Núcleo',
    summary:
      'Documentan la donación de terrenos por el concejal Gonzalo Mejía Echeverry, los 5 años de trabajo voluntario ad honorem en la Jornada Sabatina, la producción de la granja del Núcleo y la inclusión de la Fundación Renovar Ser.',
    relatedMilestoneId: 'hito-1995-deporte-sabatina',
  },
  {
    code: 'NUC-MF-G.10',
    interviewee: 'Ana Rita Ramírez',
    role: 'Expresidenta de la Asociación de Padres y de la JAC (50 años en Altagracia)',
    sede: 'Sede Principal y Sede El Núcleo',
    summary:
      'Narra las tres sedes del colegio (antigua Corregiduría, sector La Virgen en lote de Roberto Giraldo con piedra acarreada por los niños desde el río Cestillal, y La Una), además del trámite de la Personería Jurídica en Bogotá.',
    relatedMilestoneId: 'hito-1967-fundacion-principal',
  },
  {
    code: 'CAÑ-APJAC-21',
    interviewee: 'Lanzita Palomino',
    role: 'Lideresa juvenil y comunitaria histórica de la vereda',
    sede: 'Sede Cañaveral',
    summary:
      'Relata el paso de la escuela vieja de bahareque a la escuela nueva mediante la donación del lote por don Pedro Patiño y los convites de sábados y domingos vendiendo fritangas, arroz con leche y bailando cumbia y bambuco.',
    relatedMilestoneId: 'hito-1948-inicios-veredales',
  },
  {
    code: 'CAÑ-DOC-12',
    interviewee: 'Gloria Nenfer García',
    role: 'Docente de aula multigrado (43 años de docencia)',
    sede: 'Sede Cañaveral y Sede El Jazmín',
    summary:
      'Detalla los más de 80 años de Cañaveral, la reconstrucción tras el terremoto de 1999, las "Aulas Vivas", la Biblioteca de Semillas, el Hotel de Polinizadores con Ceiba Verde, el Semillero de Hormigas y el grupo "Canitas Felices".',
    relatedMilestoneId: 'hito-2024-agroecologia-memoria',
  },
  {
    code: 'FIL-DOC-G02',
    interviewee: 'Martha Cecilia Montoya',
    role: 'Docente de aula multigrado (22 años en Filobonito, desde 2004)',
    sede: 'Sede Filobonito',
    summary:
      'Reconstruye el traslado del primer rancho de bahareque por derrumbes al lote donado por don Pío Durán, la obra del Comité de Cafeteros, las Novenas comunitarias desde 2004, la fusión de 2012 y la creación de la biblioteca escolar.',
    relatedMilestoneId: 'hito-1960-nucleo-filobonito',
  },
  {
    code: 'DOC-SJ-G21',
    interviewee: 'Marinella Grisales Cardona',
    role: 'Docente licenciada en Pedagogía Infantil (desde febrero de 2024)',
    sede: 'Sede El Jazmín',
    summary:
      'Recoge el relato oral de doña Alba sobre la donación del terreno y la cancha por una familia en EE. UU. (c. 1965–1970), la época de 250 alumnos con la directora Lucilia y el aumento actual de 7 a 35 estudiantes con inclusión.',
    relatedMilestoneId: 'hito-1970-jazmin-sedes-registro',
  },
  {
    code: 'AGR-AMF-G.17',
    interviewee: 'Flor Marina Ortiz',
    role: 'Primera generación de estudiantes en ladrillo (74 años) y madre de familia',
    sede: 'Sede El Agrado',
    summary:
      'Narra la creación de la escuela hacia 1948 en lote de la familia Rangel, el acarreo de agua desde la cañada La Filipina en tarros de guadua, el temblor de 1949–1950, la obra en ladrillo del Comité de Cafeteros y la maestra Amalia Rodríguez.',
    relatedMilestoneId: 'hito-1948-inicios-veredales',
  },
  {
    code: 'AGR-EAMF-G18',
    interviewee: 'María Angélica Ramírez Ortiz',
    role: 'Egresada (1984/1990) y expresidenta de la JAC de la vereda El Estanquillo',
    sede: 'Sede El Agrado y Sede Principal',
    summary:
      'Relata las clases en la finca prestada por Orlando Díaz y Doña Virginia, las revistas gimnásticas de las profesoras Amalia Rodríguez y Luz Alba Ríos, la Biblioteca Comunitaria y las mesas de concertación para la fusión de 2012–2013.',
    relatedMilestoneId: 'hito-2002-fusion-sedes',
  },
  {
    code: 'AGR-APF-G16',
    interviewee: 'Víctor Emilio Sánchez',
    role: 'Integrante histórico de la Asociación de Padres (en El Estanquillo desde 1979)',
    sede: 'Sede El Agrado y Sede Principal',
    summary:
      'Documenta el vendaval de c. 1982 que levantó el techo de la escuela y cómo identificó la luceta por donde se embolsaba el viento, además del memorial con 60 firmas para defender la gratuidad educativa.',
    relatedMilestoneId: 'hito-1948-inicios-veredales',
  },
  {
    code: 'AGR-DOC-G.11',
    interviewee: 'Ángela Arroyave',
    role: 'Docente de aula en la vereda El Estanquillo (desde 2020)',
    sede: 'Sede El Agrado',
    summary:
      'Expone las mejoras de restaurante y unidades sanitarias (2015–2024), el trabajo con sabedores campesinos en siembra de maíz y café, y la necesidad de reconocer los orígenes históricos de cada sede.',
    relatedMilestoneId: 'hito-2024-agroecologia-memoria',
  },
  {
    code: 'PRI-DOC-G.13',
    interviewee: 'Diana María Gil',
    role: 'Egresada, docente ambiental y co-líder de la Escuela Audiovisual Agroecológica',
    sede: 'Sede Principal',
    summary:
      'Destaca el próximo aniversario 60 del colegio (1967–2027), la influencia de maestras como Yolanda Marín, la reforma del PEI Agroecológico (2024) y el rescate de semillas y culinaria ancestral.',
    relatedMilestoneId: 'hito-2024-agroecologia-memoria',
  },
  {
    code: 'EGME-PJAC-G.20',
    interviewee: 'Alexis Suárez',
    role: 'Egresado Sabatina (2012), exsecretario académico y presidente de la JAC',
    sede: 'Sede Principal y Sede El Núcleo',
    summary:
      'Recuerda la granja del Núcleo Escolar, el entierro de la Cápsula del Tiempo en 2012–2013 para abrirse en 50 años, la dotación de instrumentos para la Banda Músico-Marcial y el valor de la memoria para la pertenencia.',
    relatedMilestoneId: 'hito-2002-fusion-sedes',
  },
  {
    code: 'PRI-EST-11A-G.06 / 07 / 08 & 11B-G.04 / 05',
    interviewee: 'Juliana Franco, Victor Gonzales, Jhonatan García, Marlon Carvajal y Santiago Elejalde',
    role: 'Estudiantes de grado 11A y 11B (Promoción 2026)',
    sede: 'Sede Principal, El Núcleo y Filobonito',
    summary:
      'Reflexionan sobre los lugares de sentido (el sendero, el guadual, el pino, la plazoleta), la memoria intergeneracional con padres egresados, el aula con paneles solares e impresora 3D y el orgullo por la educación rural.',
    relatedMilestoneId: 'hito-2024-agroecologia-memoria',
  },
];

interface ArchiveExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  milestones: HistoricalMilestone[];
  onSelectMilestone: (id: string) => void;
}

export const ArchiveExplorerModal: React.FC<ArchiveExplorerModalProps> = ({
  isOpen,
  onClose,
  onSelectMilestone,
}) => {
  const [query, setQuery] = useState('');
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeBtnRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredRecords = INTERVIEWS_CATALOG.filter((rec) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      rec.interviewee.toLowerCase().includes(q) ||
      rec.code.toLowerCase().includes(q) ||
      rec.sede.toLowerCase().includes(q) ||
      rec.summary.toLowerCase().includes(q)
    );
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0D261A]/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="archive-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#FAF7F0] border-2 border-[#C59B38] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 bg-[#F4EFE4] border-b border-[#C7BFA8]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E7820]">
              FUENTES PRIMARIAS DEL PROYECTO
            </span>
            <h2
              id="archive-modal-title"
              className="font-serif-display text-xl sm:text-2xl font-bold text-[#113826]"
            >
              Archivo Oral y Documental · I.E. Gonzalo Mejía Echeverry
            </h2>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar explorador de archivo (Escape)"
            className="w-9 h-9 rounded-full border border-[#8E8778] bg-[#FAF7F0] hover:bg-[#113826] text-[#113826] hover:text-[#FAF7F0] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Document Summary */}
        <div className="px-5 sm:px-7 py-4 bg-[#EFE9DA]/60 border-b border-[#DCD5C3] space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#2C3A31]">
            <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#C7BFA8] flex items-start gap-2.5">
              <FileText className="w-4 h-4 text-[#113826] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#113826] block">
                  Documento 1: Anteproyecto UTP (Radicado 03 1857 · 2026)
                </strong>
                <span>
                  “La Escuela como Tejido de Memoria Comunitaria en la I.E. Gonzalo
                  Mejía Echeverry del Corregimiento de Altagracia, Pereira” —
                  Cristina Yaneth Gañán Morales (Asesora: Dra. Claudia Viviana
                  Hurtado Loaiza).
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#C7BFA8] flex items-start gap-2.5">
              <Mic className="w-4 h-4 text-[#9E7820] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#113826] block">
                  Documento 2: Transcripciones Sede por Sede
                </strong>
                <span>
                  20 entrevistas a docentes históricos, estudiantes de grado 11, egresados, madres de familia y presidentes de Juntas de Acción Comunal de las 6 sedes.
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#C7BFA8] flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C59B38] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#113826] block">
                  Cartografía Oficial: Sedes IEGME (2025)
                </strong>
                <span>
                  Mapa oficial de ubicación territorial (Doctorado UTP, Dra. Claudia Viviana Hurtado & Santiago Restrepo).
                </span>
                <a
                  href="/assets/img/mapa-iegme-sedes-alta-resolucion.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#113826] hover:text-[#9E7820]"
                >
                  <span>Abrir mapa alta resolución</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="archive-search" className="sr-only">
              Buscar en el catálogo de entrevistas por nombre, código, sede o tema
            </label>
            <Search className="w-4 h-4 text-[#5A625C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="archive-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filtrar entrevistas por nombre (ej. Armando Hoyos, Amalia, Pedro Patiño), sede o código..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#FAF7F0] border border-[#8E8778] text-xs sm:text-sm text-[#132A1E] focus:outline-none focus:border-[#113826]"
            />
          </div>
        </div>

        {/* Interview List */}
        <div className="overflow-y-auto px-5 sm:px-7 py-4 space-y-3 flex-1">
          {filteredRecords.map((rec) => (
            <div
              key={rec.code}
              className="rounded-xl border border-[#C7BFA8] bg-[#F4EFE4]/70 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#C59B38] transition-colors"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#113826] text-[#FAF7F0] font-mono text-[11px] font-semibold">
                    {rec.code}
                  </span>
                  <span className="font-serif-display font-bold text-base text-[#113826]">
                    {rec.interviewee}
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#C59B38]/20 text-[#6E4F0B]">
                    {rec.sede}
                  </span>
                </div>
                <p className="text-xs font-medium text-[#4A524C]">{rec.role}</p>
                <p className="text-xs sm:text-sm text-[#2B3930] leading-relaxed">
                  {rec.summary}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  onSelectMilestone(rec.relatedMilestoneId);
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#113826] hover:bg-[#1D4D37] text-[#FAF7F0] text-xs font-medium shrink-0 self-start sm:self-center cursor-pointer"
              >
                <span>Ir al hito</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}

          {filteredRecords.length === 0 && (
            <p className="text-center py-8 text-sm text-[#4A524C]">
              No se encontraron registros para "{query}".
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-7 py-3 bg-[#F4EFE4] border-t border-[#C7BFA8] flex items-center justify-between text-xs text-[#4A524C]">
          <span>
            Mostrando {filteredRecords.length} de {INTERVIEWS_CATALOG.length}{' '}
            unidades documentales de historia oral
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#113826] text-[#FAF7F0] font-medium cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
