export type MilestoneCategory = 'Institución' | 'Comunidad' | 'Logros';

export type VerificationStatus = 'verificado' | 'ejemplo';

export interface MilestoneMedia {
  id: string;
  url: string;
  title: string;
  caption: string;
  yearOrPeriod: string;
  source: string;
  /**
   * Indica si la imagen proviene directamente de los archivos reales del proyecto
   * o si es una lámina documental / ilustración de referencia.
   */
  isRealProjectAsset: boolean;
  assetTypeLabel: string;
  sede?: string;
  alt: string;
}

export interface OralTestimony {
  quote: string;
  authorRole: string;
  code: string;
  sede: string;
}

export interface HistoricalMilestone {
  id: string;
  /** Año numérico principal para ordenamiento y filtro de rango temporal (ej. 1948, 1960, 1967...) */
  year: number;
  /** Etiqueta visible de fecha o periodo (ej. "1940 – 1948", "1960", "25 de enero de 1999") */
  periodLabel: string;
  /** Título breve para la tarjeta en la línea de tiempo (como en la referencia visual) */
  shortTitle: string;
  /** Título editorial completo para el panel de detalle y modal */
  title: string;
  /** Categoría principal compatible con los filtros de la interfaz de referencia */
  category: MilestoneCategory;
  /** Sedes involucradas en el hito */
  sedes: string[];
  /** Estado de verificación documental */
  verificationStatus: VerificationStatus;
  /** Nota de verificación si es necesario precisar estimaciones orales o contenido pendiente */
  verificationNote?: string;
  /** Resumen conciso para el panel de detalle principal */
  summary: string;
  /** Descripción histórica ampliada (párrafos) para la ventana de historia completa */
  fullDescription: string[];
  /** Hitos clave o puntos destacados dentro de este periodo */
  keyFacts: string[];
  /** Testimonios orales verificados de la investigación */
  testimonies: OralTestimony[];
  /** Fotografías, mapas y láminas documentales asociadas al evento */
  media: MilestoneMedia[];
  /** Fuentes documentales y orales que respaldan el hito */
  documentarySources: string[];
  /** Posición sugerida en la línea de tiempo horizontal ('top' | 'bottom') antes de alternancia dinámica */
  preferredPosition?: 'top' | 'bottom';
}

export interface SedeInfo {
  id: string;
  name: string;
  vereda: string;
  grades: string;
  model: string;
  creationYear: string;
  description: string;
  highlights: string[];
  /** Fotografía real de la sede */
  image?: string;
  imageAlt?: string;
}
