/**
 * ============================================================================
 * ARCHIVO SONORO DE RELATOS ORALES, TRANSCRIPCIONES CON MARCAS DE TIEMPO,
 * PLANO VIVO DEL NÚCLEO ESCOLAR (ANTES VS. DESPUÉS) Y GALERÍA DE FORJADORES
 * ============================================================================
 * Fuentes primarias:
 * - Carpeta de grabaciones originales (`public/assets/grabaciones/GRABACIONES/`)
 * - Documento `TRANSCRIPCIONES ENTREVISTAS SEDE POR SEDESede PrincipalSede.docx`
 * - Documento `1857 - Anteproyecto Cristina Gañan Morales- BORRADOR.docx`
 */

export interface TranscriptTimestampSegment {
  timeLabel: string;
  startSeconds: number;
  topic: string;
  text: string;
}

export interface AudioTrackPart {
  id: string;
  label: string;
  url: string;
  durationHint?: string;
  segments?: TranscriptTimestampSegment[];
}

export interface VoiceTestimonyProfile {
  id: string;
  code: string;
  name: string;
  role: string;
  category: 'Docentes y Directivos' | 'Líderes y Familias' | 'Estudiantes y Egresados';
  sede: string;
  relatedMilestoneIds: string[];
  featuredQuote: string;
  biographyOrContext: string;
  tracks: AudioTrackPart[];
}

export interface HistoricalFounderTribute {
  id: string;
  name: string;
  role: string;
  era: string;
  sede: string;
  tributeType: 'Donante Fundacional' | 'Maestro(a) Histórico(a)' | 'Líder Comunitario(a)';
  contribution: string;
  sourceRef: string;
}

export interface NucleoFarmZone {
  id: string;
  number: number;
  title: string;
  /** Coordenadas porcentuales en el plano interactivo */
  xPercent: number;
  yPercent: number;
  category: 'Pedagogía y Comunidad' | 'Producción Agropecuaria' | 'Infraestructura';
  beforeTitle: string;
  beforePeriod: string;
  beforeDescription: string;
  beforeBullets: string[];
  afterTitle: string;
  afterPeriod: string;
  afterDescription: string;
  afterBullets: string[];
  quote: string;
  quoteAuthor: string;
  voiceProfileId: string;
  trackIndex?: number;
}

/**
 * Función auxiliar para codificar de forma segura rutas con espacios o tildes/ñ
 */
const recUrl = (filename: string): string =>
  encodeURI(`/assets/grabaciones/GRABACIONES/${filename}`);

export const VOICES_ARCHIVE_DATA: VoiceTestimonyProfile[] = [
  {
    id: 'voz-luis-fernando-orozco',
    code: 'PRI-DOC-G03',
    name: 'Luis Fernando Orozco',
    role: 'Docente de Educación Física (32 años en la institución, desde 1994)',
    category: 'Docentes y Directivos',
    sede: 'Sede Principal',
    relatedMilestoneIds: [
      'hito-1967-fundacion-principal',
      'hito-1995-deporte-sabatina',
      'hito-1997-traslado-la-una',
      'hito-2024-agroecologia-memoria',
    ],
    featuredQuote:
      'Nos dijeron: “hagan uso de la sede porque si ustedes no la toman, otra institución de Pereira sí la toma”. ¿Qué hicimos? “Muchachos, tomen las sillas, vamos para el colegio y vamos a estrenar”. Desde septiembre de 1997 estamos aquí.',
    biographyOrContext:
      'Llegó recién graduado en 1994 cuando en la vereda La Una solo existían las columnas en medio del monte. Fue uno de los cuatro docentes que lideraron el traslado a la nueva sede en septiembre de 1997 bajo la rectoría del magíster Armando Hoyos Valencia, e impulsó la participación histórica del colegio en los Juegos Intercolegiados desde 1994–1995.',
    tracks: [
      {
        id: 'track-orozco-1',
        label: 'Parte 1 · Fundación (1967), traslado a La Una (1997) y fusiones',
        url: recUrl('PRI-DOC-G03.mp4'),
        segments: [
          {
            timeLabel: '0:00 - 1:32',
            startSeconds: 0,
            topic: 'Llegada a la sede de La Una en 1997 y rectoría de Armando Hoyos Valencia',
            text: 'Llegamos aproximadamente en 1997... estaba el consejo directivo, el consejo académico y la rectoría en cabeza de nuestro rector magíster Armando Hoyos Valencia. Somos cuatro docentes los que quedamos de quienes estuvimos al frente del traslado.',
          },
          {
            timeLabel: '1:41 - 2:18',
            startSeconds: 101,
            topic: 'Las columnas abandonadas en monte en 1994',
            text: 'Tengo aquí en la institución 32 años; cuando llegué en 1994 estaban solamente las columnas y el sitio abandonado en monte. En el 97 llegamos, ya estaba resplandeciente aunque no teníamos aún las sillas modernas ni los laboratorios.',
          },
          {
            timeLabel: '2:18 - 3:40',
            startSeconds: 138,
            topic: 'La marcha con las sillas al hombro y el nombre desde 1967',
            text: 'Nos dijeron: hagan uso de la sede que luego la vamos dotando... Muchachos, tomen las sillas, vamos para el colegio y vamos a estrenar. La sede siempre se ha llamado Institución Educativa Gonzalo Mejía Echeverry desde 1967.',
          },
          {
            timeLabel: '3:41 - 4:48',
            startSeconds: 221,
            topic: 'Del hacinamiento en La Virgen a la amplitud de La Una (Septiembre de 1997)',
            text: 'En la sede anterior teníamos 230 o 240 estudiantes muy hacinados, sin recreación ni laboratorios. En septiembre de 1997 llegamos a esta sede amplia con salas de sistemas, coliseo cubierto y granja.',
          },
          {
            timeLabel: '5:28 - 6:27',
            startSeconds: 328,
            topic: 'La fusión educativa (2000–2002) y la partida nacional del Núcleo',
            text: 'Cuando aparecieron las fusiones hubo mucho rechazo de las escuelas de primaria, principalmente del Núcleo Escolar, porque ellos recibían una partida directa del gobierno nacional y tenían su director y autonomía.',
          },
        ],
      },
      {
        id: 'track-orozco-2',
        label: 'Parte 2 · Juegos Intercolegiados (1995) y enfoque agroecológico',
        url: recUrl('PRI-DOC-G3.1.mp4'),
        segments: [
          {
            timeLabel: '0:30 - 1:20',
            startSeconds: 30,
            topic: 'Padres campesinos compartiendo saberes agrícolas en las aulas',
            text: 'Como tenemos modalidad agroecológica, llegan padres de familia y dan charlas a los estudiantes e inclusive a los maestros para explicarles las experiencias que manejan en sus fincas.',
          },
          {
            timeLabel: '3:16 - 4:17',
            startSeconds: 196,
            topic: 'El antes y después deportivo: Juegos Intercolegiados (1994–1995)',
            text: 'En 1994 fuimos por primera vez a Intercolegiados y nos golearon, pero trabajamos en la mente de los muchachos: saber que somos buenos. Desde 1995 empezaron los títulos por mayor y decían: "¡Uy, viene el Gonzalo Mejía!".',
          },
          {
            timeLabel: '6:08 - 7:07',
            startSeconds: 368,
            topic: 'Acompañamiento de la UTP y mejoras entre 2015 y 2024',
            text: 'El enfoque es agroecológico, estamos muy acompañados por la Universidad Tecnológica de Pereira; hemos mejorado en salas de sistemas, laboratorios, restaurante, transporte y planta docente completa desde enero.',
          },
        ],
      },
    ],
  },
  {
    id: 'voz-milton-guillermo',
    code: 'NUC-DOC-G.09',
    name: 'Milton Guillermo',
    role: 'Docente histórico de primaria (+34 años en Sede El Núcleo) y cofundador de la Sabatina',
    category: 'Docentes y Directivos',
    sede: 'Sede El Núcleo',
    relatedMilestoneIds: [
      'hito-1960-nucleo-filobonito',
      'hito-1995-deporte-sabatina',
      'hito-1999-terremoto-eje-cafetero',
      'hito-2002-fusion-sedes',
    ],
    featuredQuote:
      'En el equipo de campo estaban la mejoradora de salud, la de hogar, el profesor de talleres, el alfabetizador y el experto agrícola. La institución tenía un Jeep para llevar a los profesores a las escuelas veredales: todo el día trabajaban con estudiantes y con la comunidad.',
    biographyOrContext:
      'Memoria viva del Núcleo Escolar Rural de Altagracia. En su entrevista y recorrido de campo junto a Don Rodrigo reconstruye cada rincón de las 9 hectáreas de la granja vocacional, el funcionamiento del Equipo de Campo itinerante, el impacto del terremoto del 25 de enero de 1999 y la movilización comunitaria frente a la fusión de 2002.',
    tracks: [
      {
        id: 'track-milton-1',
        label: 'Parte 1 · Los 3 Núcleos de Risaralda, el Equipo de Campo y el Jeep',
        url: recUrl('NUC-DOC-G.09.mp4'),
        segments: [
          {
            timeLabel: '0:00 - 2:30',
            startSeconds: 0,
            topic: 'Origen de los Núcleos Escolares para superar la violencia y desarrollar el campo',
            text: 'En Risaralda existían tres núcleos: Santa Rosa, Quinchía y Altagracia. Su función era sacar a la gente de la violencia y buscar el desarrollo en sus comunidades con presupuesto directo del Ministerio.',
          },
          {
            timeLabel: '2:35 - 5:40',
            startSeconds: 155,
            topic: 'El Equipo de Campo y su cronograma semanal en el Jeep institucional',
            text: 'Contábamos con director, pagador, mayordomo, obreros, conductor con Jeep propio y el Equipo de Campo: mejoradora de salud (con odontología gratuita), mejoradora de hogar, carpintero, alfabetizador y experto agrícola.',
          },
        ],
      },
      {
        id: 'track-milton-2',
        label: 'Parte 2 · Carpintería en palo de café, terremoto de 1999 y resistencia a la fusión',
        url: recUrl('NUC-DOC-G.9.1.mp4'),
        segments: [
          {
            timeLabel: '0:15 - 2:10',
            startSeconds: 15,
            topic: 'El taller de carpintería con palo de café soqueado y guaduilla',
            text: 'Donde hoy es la sala de sistemas azul era el taller completo de carpintería: hacían camas, mesas y sillas con palo de café soqueado, y armarios enchapados con pedacitos de guaduilla.',
          },
          {
            timeLabel: '2:20 - 4:50',
            startSeconds: 140,
            topic: 'El terremoto del lunes 25 de enero de 1999 y la reconstrucción FOREC',
            text: 'Ese lunes entraban los estudiantes, pero el viernes anterior acordamos aplazar la entrada. Cuando tembló estábamos los profesores en la cocina; casi la mitad de la sede cayó y luego se construyó el bloque nuevo y el restaurante.',
          },
          {
            timeLabel: '5:00 - 7:30',
            startSeconds: 300,
            topic: 'La resistencia comunitaria que detuvo la fusión durante casi dos años',
            text: 'Se hizo un documento y nos movimos con la comunidad en Pereira ante la Secretaría y el alcalde; logramos parar la fusión uno o dos años hasta que llegó la resolución oficial en 2002.',
          },
        ],
      },
      {
        id: 'track-milton-3',
        label: 'Parte 3 · Recorrido por la granja: antiguos galpones con ramio y porquerizas',
        url: recUrl('NUC-DOC-G.9.2.mp4'),
      },
      {
        id: 'track-milton-4',
        label: 'Parte 4 · Recorrido: establo de ganado lechero, conejera y lago de peces con bore',
        url: recUrl('NUC-DOC-G.9.3.mp4'),
      },
      {
        id: 'track-milton-5',
        label: 'Parte 5 · Recorrido: tanque de lavado de café, la elba sobre rieles y el agrónomo Pedro',
        url: recUrl('NUC-DOC-G.9.4.mp4'),
      },
    ],
  },
  {
    id: 'voz-isabel-y-sandra',
    code: 'NUCPRI-DOC-G.14',
    name: 'Isabel Cristina Álvarez Morales y Sandra Milena Segura',
    role: 'Docentes desde febrero de 1997 (Sede El Núcleo, Sede Principal y Sabatina)',
    category: 'Docentes y Directivos',
    sede: 'Sede Principal y Sede El Núcleo',
    relatedMilestoneIds: [
      'hito-1960-nucleo-filobonito',
      'hito-1967-fundacion-principal',
      'hito-1995-deporte-sabatina',
      'hito-1999-terremoto-eje-cafetero',
      'hito-2002-fusion-sedes',
      'hito-2024-agroecologia-memoria',
    ],
    featuredQuote:
      'Hace 30 años está funcionando el Bachillerato de Sabatina. El profesor Milton y yo trabajamos 5 años gratis, voluntariamente, para que la comunidad trabajadora de Altagracia pudiera estudiar y graduarse.',
    biographyOrContext:
      'Nombradas en 1997, han acompañado durante casi tres décadas la evolución del Núcleo Escolar y de la Sede Principal. Su testimonio conjunto detalla la producción de la granja escolar, la fundación voluntaria del Programa 3011 (Sabatina), la gestión de las huellas viales con festivales gastronómicos y la inclusión educativa.',
    tracks: [
      {
        id: 'track-isabel-1',
        label: 'Parte 1 · El concejal Gonzalo Mejía Echeverry, las tres sedes y el sismo de 1999',
        url: recUrl('ISABEL C Y SANDRA PRINCIPAL Y NUCLEO.mp4'),
      },
      {
        id: 'track-isabel-2',
        label: 'Parte 2 · Venta solidaria de leche, huevos y café del Núcleo y fusión de octubre de 2002',
        url: recUrl('ISABEL C Y SANDRA PRINCIPAL Y NUCLEO 2.mp4'),
      },
      {
        id: 'track-isabel-3',
        label: 'Parte 3 · Los 5 años de trabajo ad honorem fundando la Jornada Sabatina',
        url: recUrl('ISABEL C Y SANDRA PRINCIPAL Y NUCLEO 3.mp4'),
      },
      {
        id: 'track-isabel-4',
        label: 'Parte 4 · Construcción de las huellas del Núcleo y el Desfile de la Identidad',
        url: recUrl('ISABEL C Y SANDRA PRINCIPAL Y NUCLEO 4.mp4'),
      },
      {
        id: 'track-isabel-5',
        label: 'Parte 5 · Inclusión con la Fundación Renovar Ser y PEI Agroecológico',
        url: recUrl('ISABEL C Y SANDRA PRINCIPAL Y NUCLEO 5.mp4'),
      },
      {
        id: 'track-isabel-6',
        label: 'Parte 6 · Defensa de los terrenos escolares y cierre reflexivo',
        url: recUrl('ISABEL C Y SANDRA PRINCIPAL Y NUCLEO 6.mp4'),
      },
    ],
  },
  {
    id: 'voz-ana-rita-ramirez',
    code: 'NUC-MF-G.10',
    name: 'Doña Ana Rita Ramírez',
    role: 'Expresidenta de la Asociación de Padres y de la JAC (50 años en Altagracia)',
    category: 'Líderes y Familias',
    sede: 'Sede Principal y Sede El Núcleo',
    relatedMilestoneIds: [
      'hito-1967-fundacion-principal',
      'hito-1997-traslado-la-una',
      'hito-1999-terremoto-eje-cafetero',
    ],
    featuredQuote:
      'A los niños les tocaba ir al río Cestillal a sacar la piedra y la arena en esos años para traerla acá al lugar donde ahora es el puesto de salud... Y con el rector Armando Hoyos mandamos los papeles a Bogotá hasta que llegó por Telecom la Personería Jurídica del colegio.',
    biographyOrContext:
      'Comunera desde 1986 y líder histórica de los padres de familia. Relata cómo funcionó el colegio en la antigua Corregiduría, la donación del lote de don Roberto Giraldo frente a su casa en La Virgen, la consecución de la Personería Jurídica para ampliar el bachillerato y la gestión de la nueva sede en La Una.',
    tracks: [
      {
        id: 'track-anarita-1',
        label: 'Parte 1 · De la Corregiduría al lote de Roberto Giraldo con piedra del río Cestillal',
        url: recUrl('NUC-MF-G.10.mp4'),
      },
      {
        id: 'track-anarita-2',
        label: 'Parte 2 · Gestión de la Personería Jurídica en Bogotá junto al rector Armando Hoyos',
        url: recUrl('NUC-MF-G.10.1.mp4'),
      },
      {
        id: 'track-anarita-3',
        label: 'Parte 3 · El terremoto del 25 de enero de 1999 y la construcción en La Una',
        url: recUrl('NUC-MF-G.10.2.mp4'),
      },
      {
        id: 'track-anarita-4',
        label: 'Parte 4 · Memoria comunitaria de Altagracia y el Núcleo Escolar',
        url: recUrl('NUC-MF-G.10.3.mp4'),
      },
    ],
  },
  {
    id: 'voz-gloria-nenfer-y-lanzita',
    code: 'CAÑ-DOC-12 / CAÑ-APJAC-21',
    name: 'Gloria Nenfer García y Lanzita Palomino',
    role: 'Docente de aula multigrado (CAÑ-DOC-12) y Lideresa fundadora de Cañaveral (CAÑ-APJAC-21)',
    category: 'Docentes y Directivos',
    sede: 'Sede Cañaveral',
    relatedMilestoneIds: [
      'hito-1948-inicios-veredales',
      'hito-1999-terremoto-eje-cafetero',
      'hito-2002-fusion-sedes',
      'hito-2024-agroecologia-memoria',
    ],
    featuredQuote:
      'En la Alcaldía nos preguntaron: “¿tienen el terreno?”. El señor Pedro Patiño donó el lote y empezamos los domingos y sábados vendiendo fritangas, arroz con leche, haciendo bazares, teatro y bailando cumbia y bambuco. Así levantamos la escuela.',
    biographyOrContext:
      'Reúne la voz de doña Lanzita Palomino —quien a sus 17 años lideró con la JAC las mingas y convites para pasar de la escuela de bahareque a la planta en material en el lote donado por Pedro Patiño— y la voz de la docente Gloria Nenfer García, impulsora actual de las "Aulas Vivas", la Biblioteca de Semillas y el Hotel de Polinizadores.',
    tracks: [
      {
        id: 'track-canaveral-3',
        label: 'Relato de Lanzita Palomino · Donación de Pedro Patiño, mingas, fritangas y bailes',
        url: recUrl('SEDE CAÑAVERAL 3.mp4'),
      },
      {
        id: 'track-canaveral-1',
        label: 'Profe Gloria Nenfer · Parte 1: Más de 80 años de historia, sismo de 1999 y Aulas Vivas',
        url: recUrl('SEDE CAÑAVERAL.mp4'),
      },
      {
        id: 'track-canaveral-2',
        label: 'Profe Gloria Nenfer · Parte 2: Biblioteca de Semillas, Polinizadores y Canitas Felices',
        url: recUrl('SEDE CAÑAVERAL 2.mp4'),
      },
    ],
  },
  {
    id: 'voz-martha-cecilia-montoya',
    code: 'FIL-DOC-G02',
    name: 'Martha Cecilia Montoya',
    role: 'Docente de aula multigrado en Sede Filobonito (22 años en la sede, desde 2004)',
    category: 'Docentes y Directivos',
    sede: 'Sede Filobonito',
    relatedMilestoneIds: [
      'hito-1960-nucleo-filobonito',
      'hito-2002-fusion-sedes',
      'hito-2024-agroecologia-memoria',
    ],
    featuredQuote:
      'Dicen que esta escuela era antes arriba un ranchito de bahareque, pero como hubo unos derrumbes, el señor don Pío Durán donó este terreno y el Comité de Cafeteros construyó la escuela.',
    biographyOrContext:
      'Llegó a Filobonito en septiembre de 2004. Instauró las tradicionales Novenas de Navidad veredales, fue defendida por toda la comunidad ante la Secretaría de Educación en 2005, y gestionó los proyectos con los que se construyeron el restaurante, la sala de sistemas ("La Sala Mágica") y la biblioteca escolar.',
    tracks: [
      {
        id: 'track-filobonito-1',
        label: 'Parte 1 · El primer rancho de bahareque, donación de Pío Durán y Comité de Cafeteros',
        url: recUrl('FIL-DOC-G02.mp4'),
      },
      {
        id: 'track-filobonito-2',
        label: 'Parte 2 · Novenas comunitarias (2004), defensa de la docente (2005), fusión y biblioteca',
        url: recUrl('FIL-DOC-G2.1.mp4'),
      },
      {
        id: 'track-filobonito-3',
        label: 'Parte 3 · Jardines de polinizadores y vínculo con las familias de Filobonito',
        url: recUrl('FIL-DOC-G2.2.mp4'),
      },
    ],
  },
  {
    id: 'voz-flor-marina-ortiz',
    code: 'AGR-AMF-G.17',
    name: 'Doña Flor Marina Ortiz',
    role: 'Antigua estudiante fundadora en ladrillo (74 años) y madre de familia de El Agrado',
    category: 'Líderes y Familias',
    sede: 'Sede El Agrado',
    relatedMilestoneIds: [
      'hito-1948-inicios-veredales',
      'hito-1970-jazmin-sedes-registro',
    ],
    featuredQuote:
      'Fue como en el 48 que la escuela la hicieron, y era con agua cargada porque no había acueducto. Teníamos que ir a traer agua en la cañada La Filipina en unos tarros de guadua con un trapito para que la profesora hiciera de comer.',
    biographyOrContext:
      'Ha vivido 74 años en la vereda El Estanquillo. Conoció la primera escuelita de bahareque en el lote donado por la familia Rangel Trujillo, vivió su caída tras el temblor de 1949–1950, estrenó a los 8 años la primera aula en ladrillo hecha por el Comité de Cafeteros y acompañó por décadas la Asociación de Padres junto a la maestra Amalia Rodríguez.',
    tracks: [
      {
        id: 'track-flormarina-1',
        label: 'Parte 1 · La escuela de 1948 en bahareque, el agua de La Filipina y el temblor del 50',
        url: recUrl('AGR-AMF-G.17.mp4'),
      },
      {
        id: 'track-flormarina-2',
        label: 'Parte 2 · La escuela en ladrillo, el reinado de Elvia Brito y la maestra Amalia Rodríguez',
        url: recUrl('AGR-AMF-G.17.1.mp4'),
      },
    ],
  },
  {
    id: 'voz-maria-angelica-ramirez',
    code: 'AGR-EAMF-G18',
    name: 'María Angélica Ramírez Ortiz',
    role: 'Egresada (1984 / 1990), administradora pública y expresidenta de la JAC de El Estanquillo',
    category: 'Líderes y Familias',
    sede: 'Sede El Agrado',
    relatedMilestoneIds: [
      'hito-1948-inicios-veredales',
      'hito-1970-jazmin-sedes-registro',
      'hito-1995-deporte-sabatina',
      'hito-2002-fusion-sedes',
    ],
    featuredQuote:
      'Orlando Díaz y Doña Virginia nos dieron permiso para que pasaran los niños a estudiar ahí en su finca mientras el Comité de Cafeteros hacía la sede actual... Y en 2012–2013 como presidenta de la JAC lideramos las mesas para fusionarnos con el Gonzalo Mejía.',
    biographyOrContext:
      'Hija de doña Flor Marina Ortiz, cursó toda su primaria en El Agrado y se graduó de bachiller en la Sede Principal en 1990. Como presidenta de la Junta de Acción Comunal de El Estanquillo lideró entre 2012 y 2013 la concertación comunitaria para que la escuela permaneciera unida a la jurisdicción de Altagracia.',
    tracks: [
      {
        id: 'track-mariaangelica-1',
        label: 'Parte 1 · La finca prestada por Orlando Díaz y el legado de la profesora Amalia Rodríguez',
        url: recUrl('AGR-AMF-G.18.mp4'),
      },
      {
        id: 'track-mariaangelica-2',
        label: 'Parte 2 · Revistas gimnásticas, Biblioteca Comunitaria y convites nocturnos del muro',
        url: recUrl('AGR-AMF-G.18.1.mp4'),
      },
      {
        id: 'track-mariaangelica-3',
        label: 'Parte 3 · Auge de 154 niños (2007) y mesas de concertación para la fusión (2012–2013)',
        url: recUrl('AGR-AMF-G.18.2.mp4'),
      },
    ],
  },
  {
    id: 'voz-victor-emilio-sanchez',
    code: 'AGR-APF-G16',
    name: 'Don Víctor Emilio Sánchez',
    role: 'Integrante histórico de la Asociación de Padres (47 años en la vereda El Estanquillo)',
    category: 'Líderes y Familias',
    sede: 'Sede El Agrado',
    relatedMilestoneIds: [
      'hito-1948-inicios-veredales',
      'hito-1995-deporte-sabatina',
      'hito-2002-fusion-sedes',
    ],
    featuredQuote:
      'Un vendaval tumbó el techo de madera y lo tiró a la carretera... Cuando volvió a levantar las tejas, le mostré al ingeniero que el viento se embolsaba por una luceta de 30 centímetros en el corredor; la sellaron y santo remedio.',
    biographyOrContext:
      'Habitante de El Estanquillo desde 1979. Además de aportar su saber práctico para resolver el desprendimiento del techo escolar tras el vendaval de 1982, redactó y respaldó con 60 firmas campesinas el memorial ante la Secretaría de Educación que garantizó la gratuidad de matrículas para las familias.',
    tracks: [
      {
        id: 'track-donvictor-1',
        label: 'Parte 1 · El vendaval de 1982 en El Agrado y la solución de sellar la luceta del corredor',
        url: recUrl('Don Víctor 1.mp4'),
      },
      {
        id: 'track-donvictor-2',
        label: 'Parte 2 · El memorial con 60 firmas en defensa de la gratuidad educativa',
        url: recUrl('Don Víctor 2.sede agradomp4.mp4'),
      },
      {
        id: 'track-donvictor-3',
        label: 'Parte 3 · Vida campesina, convites y memoria de la vereda El Estanquillo',
        url: recUrl('Don Víctor 3 sede agrado.mp4'),
      },
    ],
  },
  {
    id: 'voz-marinella-y-don-elias',
    code: 'DOC-SJ-G21 / ELIAS-SJ',
    name: 'Marinella Grisales Cardona y Don Elías',
    role: 'Docente de la Sede El Jazmín (DOC-SJ-G21) y Habitante histórico de la vereda El Jazmín',
    category: 'Docentes y Directivos',
    sede: 'Sede El Jazmín',
    relatedMilestoneIds: [
      'hito-1970-jazmin-sedes-registro',
      'hito-2024-agroecologia-memoria',
    ],
    featuredQuote:
      'Cuenta doña Alba que esto era un potrero muy grande de una familia que vivía en Estados Unidos; compraron la finca y donaron el terreno para la escuela y para la cancha... En 2024 encontré 7 niños y hoy ya somos 35 estudiantes.',
    biographyOrContext:
      'Articula el testimonio de Don Elías sobre los orígenes de la vereda El Jazmín con el relato de la docente Marinella Grisales Cardona, quien desde febrero de 2024 ha liderado el renacer matricular de la sede y la atención inclusiva de los niños de la Fundación Renovar Ser.',
    tracks: [
      {
        id: 'track-marinella-1',
        label: 'Profe Marinella · Parte 1: Donación del predio desde EE. UU. y época de la directora Lucilia',
        url: recUrl('Marinella sede Jazmin grabacion 1.mp4'),
      },
      {
        id: 'track-marinella-2',
        label: 'Profe Marinella · Parte 2: Aumento de 7 a 35 niños e inclusión con Fundación Renovar Ser',
        url: recUrl('Marinella sede jazmin grabacion 2.mp4'),
      },
      {
        id: 'track-marinella-3',
        label: 'Profe Marinella · Parte 3: Murales, Semillero de Hormigas y comunidad de El Jazmín',
        url: recUrl('Marinella sede jazmin grabacion 3.mp4'),
      },
      {
        id: 'track-donelias-1',
        label: 'Don Elías · Parte 1: Memoria viva de las familias fundadoras de la vereda El Jazmín',
        url: recUrl('Don Elias sede Jazmin parte 1.mp4'),
      },
      {
        id: 'track-donelias-2',
        label: 'Don Elías · Parte 2: La construcción comunitaria y los caminos cafeteros de El Jazmín',
        url: recUrl('Don Elias sede Jazmin parte 2.mp4'),
      },
      {
        id: 'track-donelias-3',
        label: 'Don Elías · Parte 3: Legado para las nuevas generaciones de la escuela',
        url: recUrl('Don Elias sede Jazmin parte 3.mp4'),
      },
    ],
  },
  {
    id: 'voz-diana-maria-gil',
    code: 'PRI-DOC-G.13',
    name: 'Diana María Gil',
    role: 'Egresada, docente ambiental y co-líder de la Escuela Audiovisual Agroecológica',
    category: 'Docentes y Directivos',
    sede: 'Sede Principal',
    relatedMilestoneIds: [
      'hito-1967-fundacion-principal',
      'hito-2024-agroecologia-memoria',
    ],
    featuredQuote:
      'Soy egresada de aquí y mi maestra de matemáticas, Yolanda Marín, nos enseñaba a sumar con lo que cosechábamos en la huerta... En 2027 el colegio cumple 60 años legalmente constituido.',
    biographyOrContext:
      'Hija de doña Marleny Garzón y egresada de la institución, regresó como maestra para liderar junto al docente Juan David Ramírez la Escuela Audiovisual Agroecológica, el rescate de la culinaria ancestral y la transversalización del PEI Agroecológico.',
    tracks: [
      {
        id: 'track-diana-1',
        label: 'Parte 1 · Rumbo a los 60 años (1967–2027) y el recuerdo de la maestra Yolanda Marín',
        url: recUrl('SEDE PRINCIPAL DIANA 1.mp4'),
      },
      {
        id: 'track-diana-2',
        label: 'Parte 2 · Escuela Audiovisual Agroecológica, fotografía de aves y sabrosura ancestral',
        url: recUrl('SEDE PRINCIPAL DIANA 2.mp4'),
      },
      {
        id: 'track-diana-3',
        label: 'Parte 3 · Reforma del PEI Agroecológico (2024) con la UTP y retos de la juventud rural',
        url: recUrl('SEDE PRINCIPAL DIANA 3.mp4'),
      },
    ],
  },
  {
    id: 'voz-alexis-suarez',
    code: 'EGME-PJAC-G.20',
    name: 'Alexis Suárez',
    role: 'Egresado Sabatina (2012), exsecretario académico y presidente de la JAC de Altagracia',
    category: 'Estudiantes y Egresados',
    sede: 'Sede Principal y Sede El Núcleo',
    relatedMilestoneIds: [
      'hito-1960-nucleo-filobonito',
      'hito-2002-fusion-sedes',
      'hito-2024-agroecologia-memoria',
    ],
    featuredQuote:
      'Hay que volver a recordar un poco el origen de las cosas, porque se nos olvida en el tiempo. Y cuando uno hace memoria, eso le da un grado de sentido de pertenencia y recuerda de dónde viene.',
    biographyOrContext:
      'Nieto de don Tomás Suárez (primer tesorero del colegio), estudió primaria en la granja del Núcleo, se graduó en la Jornada Sabatina (2012), fue secretario académico por 5 años desde 2015 y hoy lidera la Junta de Acción Comunal.',
    tracks: [
      {
        id: 'track-alexis-1',
        label: 'Parte 1 · La granja del Núcleo Escolar y su abuelo Tomás Suárez, tesorero fundador',
        url: recUrl('PRI-EPJAC-G.20.mp4'),
      },
      {
        id: 'track-alexis-2',
        label: 'Parte 2 · La Cápsula del Tiempo (2012–2013) para abrir en 50 años y la Banda Marcial',
        url: recUrl('PRI-EPJAC-G.20.1.mp4'),
      },
      {
        id: 'track-alexis-3',
        label: 'Parte 3 · Reflexión sobre memoria colectiva, identidad y liderazgo comunitario',
        url: recUrl('PRI-EPJAC-G.20.2.mp4'),
      },
    ],
  },
  {
    id: 'voz-rector-iegme',
    code: 'RECGME15',
    name: 'Rector de la I.E. Gonzalo Mejía Echeverry',
    role: 'Directivo Docente · Rectoría Institucional',
    category: 'Docentes y Directivos',
    sede: 'Sede Principal',
    relatedMilestoneIds: ['hito-2024-agroecologia-memoria'],
    featuredQuote:
      'Comprender la historia nos ayuda a proyectar el futuro: volver a rescatar la identidad, todas las culturas y costumbres del territorio, comprender realmente quiénes somos y de dónde venimos.',
    biographyOrContext:
      'Desde la dirección institucional articula el rescate de la memoria histórica de las seis sedes con el horizonte prospectivo del Proyecto Educativo Institucional (PEI) Agroecológico.',
    tracks: [
      {
        id: 'track-rector-1',
        label: 'Grabación completa · Identidad territorial, memoria histórica y proyección de futuro',
        url: recUrl('REC-GME-G.15.m4a'),
      },
    ],
  },
  {
    id: 'voz-angela-arroyave',
    code: 'AGR-DOC-G.11',
    name: 'Ángela Arroyave',
    role: 'Docente de aula en la Sede El Agrado (vereda El Estanquillo, desde 2020)',
    category: 'Docentes y Directivos',
    sede: 'Sede El Agrado',
    relatedMilestoneIds: ['hito-2024-agroecologia-memoria'],
    featuredQuote:
      'Incluso nosotros mismos los maestros necesitamos conocer más aún del origen de la sede en todo sentido: en todas las dimensiones económicas, personales y sociales.',
    biographyOrContext:
      'Docente en la sede más distante del corregimiento. Destaca el acompañamiento de sabedores campesinos como don Nelson y don Jesús en la huerta escolar de maíz y café, así como las adecuaciones del restaurante y baños.',
    tracks: [
      {
        id: 'track-angela-1',
        label: 'Parte 1 · Enseñar en la vereda El Estanquillo y el deber de conocer el origen histórico',
        url: recUrl('SEDE AGRADO 1.mp4'),
      },
      {
        id: 'track-angela-2',
        label: 'Parte 2 · Mejoras locativas (2015–2024) y siembra con sabedores campesinos',
        url: recUrl('SEDE AGRADO 2.mp4'),
      },
      {
        id: 'track-angela-3',
        label: 'Parte 3 · Retos de transporte rural y continuidad de los egresados de primaria',
        url: recUrl('SEDE AGRADO 3.mp4'),
      },
    ],
  },
  {
    id: 'voz-madres-nucleo',
    code: 'NUC-AMF-G19 / NUC-MF-G.01',
    name: 'Doña Marleny Garzón y Doña María Amparo Londoño',
    role: 'Antiguas estudiantes y madres de familia de la Sede El Núcleo',
    category: 'Líderes y Familias',
    sede: 'Sede El Núcleo',
    relatedMilestoneIds: [
      'hito-1960-nucleo-filobonito',
      'hito-1997-traslado-la-una',
    ],
    featuredQuote:
      'En el Núcleo nos daban alimentación de lo mismo que producía la granja; era una escuela hermosa llena de árboles frutales, jardines y huerta donde estudiábamos con mucha unión.',
    biographyOrContext:
      'Doña Marleny Garzón (68 años, antigua alumna de 4.° y 5.° en el Núcleo y madre de la docente Diana Gil) y doña María Amparo Londoño (34 años en Altagracia) evocan la vida cotidiana de la escuela vocacional agrícola y la crianza de sus hijos.',
    tracks: [
      {
        id: 'track-marleny-1',
        label: 'Doña Marleny Garzón · Recuerdos de estudiante y madre de familia en el Núcleo Escolar',
        url: recUrl('MARLENY antigua madre de familia sede núcleo.mp4'),
      },
      {
        id: 'track-amparo-1',
        label: 'Doña María Amparo Londoño · Parte 1: La granja del Núcleo y el paso al bachillerato',
        url: recUrl('SN-FCE-G01.mp4'),
      },
      {
        id: 'track-amparo-2',
        label: 'Doña María Amparo Londoño · Parte 2: Convivencia familiar y comunitaria en Altagracia',
        url: recUrl('SN-FCE-G1.1.mp4'),
      },
    ],
  },
  {
    id: 'voz-estudiantes-once',
    code: 'PRI-EST-11A / 11B',
    name: 'Juliana Franco, Victor Gonzales, Jhonatan García, Marlon Carvajal y Santiago Elejalde',
    role: 'Estudiantes de Grado 11A y 11B · Generación 2026',
    category: 'Estudiantes y Egresados',
    sede: 'Sede Principal',
    relatedMilestoneIds: [
      'hito-1997-traslado-la-una',
      'hito-2024-agroecologia-memoria',
    ],
    featuredQuote:
      'Me gustaría que la gente entienda que el colegio no simplemente estuvo ahí siempre: que todo tuvo un inicio, que hubo gente que luchó por que cada pared se sostuviera para nosotros.',
    biographyOrContext:
      'Cinco jóvenes de último año que cursaron su primaria en las sedes rurales (El Núcleo y Filobonito) y su bachillerato en la Sede Principal de La Una. Comparten su visión sobre los lugares de sentido, el aula solar con impresora 3D y el orgullo campesino.',
    tracks: [
      {
        id: 'track-est-juliana',
        label: 'Juliana Franco (11A) · Memoria familiar de padres egresados y sentido de pertenencia',
        url: recUrl('PRI-EST-11A-G.06.mp4'),
      },
      {
        id: 'track-est-victor-1',
        label: 'Victor Gonzales (11A) · Parte 1: Escuela Audiovisual, paneles solares e impresora 3D',
        url: recUrl('PRI-EST-11A-G.07.mp4'),
      },
      {
        id: 'track-est-victor-2',
        label: 'Victor Gonzales (11A) · Parte 2: La huelga estudiantil histórica y los saberes ancestrales',
        url: recUrl('PRI-EST-11A-G.7.1.mp4'),
      },
      {
        id: 'track-est-jhonatan-1',
        label: 'Jhonatan García (11A) · Parte 1: El pino representativo, el guadual y primaria en el Núcleo',
        url: recUrl('PRI-EST-11A-G.08.mp4'),
      },
      {
        id: 'track-est-jhonatan-2',
        label: 'Jhonatan García (11A) · Parte 2: Memoria colectiva e identidad juvenil',
        url: recUrl('PRI-EST-11A-G.8.1.mp4'),
      },
      {
        id: 'track-est-marlon',
        label: 'Marlon Carvajal (11B) · El sendero ecológico, las zonas verdes y el trabajo en equipo',
        url: recUrl('PRI-EST-11B-G.04.mp4'),
      },
      {
        id: 'track-est-santiago',
        label: 'Santiago Elejalde (11B) · Recuerdos de Filobonito con la profe Martha y la plazoleta',
        url: recUrl('PRI-EST-11B-G.O5.mp4'),
      },
    ],
  },
];

/**
 * Zonas interactivas del Plano Vivo: La Granja Vocacional del Núcleo Escolar (Antes vs. Después)
 */
export const NUCLEO_PLANO_VIVO_ZONES: NucleoFarmZone[] = [
  {
    id: 'zona-equipo-campo',
    number: 1,
    title: 'Centro Irradiador, Jeep Institucional y "Equipo de Campo"',
    xPercent: 36,
    yPercent: 76,
    category: 'Pedagogía y Comunidad',
    beforeTitle: 'Autonomía Nacional y Equipo de Campo Itinerante',
    beforePeriod: '1960 – 2002 (Decreto 1240 de 1960)',
    beforeDescription:
      'El Núcleo recibía presupuesto directo del Ministerio de Educación y contaba con Director, Pagador/Tesorero, Mayordomo y un Jeep propio con conductor que llevaba de lunes a viernes al "Equipo de Campo" por todas las veredas.',
    beforeBullets: [
      'Mejoradora de Salud y Consultorio Odontológico gratuito dentro de la sede para niños y familias.',
      'Mejoradora de Hogar: enseñaba crianza, costura, bordado y preparación de alimentos de la huerta.',
      'Alfabetizador y Experto Agrícola articulados con el SENA, el Comité de Cafeteros y el ICA.',
      'Ruta del Jeep: Lunes (Cañaveral y Filobonito), Martes (La Gramínea y Guayabal), Miércoles/Viernes (Núcleo), Jueves (El Jazmín).',
    ],
    afterTitle: 'Coordinación Integrada y Acompañamiento Universitario (UTP)',
    afterPeriod: 'Octubre de 2002 – 2026 (Post-Fusión Ley 715)',
    afterDescription:
      'Con la resolución de fusión de octubre de 2002 (tras dos años de resistencia comunitaria), el Núcleo pasó a ser sede de primaria del colegio Gonzalo Mejía Echeverry y se suprimieron las plazas del Equipo de Campo y el presupuesto nacional directo.',
    afterBullets: [
      'El antiguo cargo de Director de Núcleo se transformó en Coordinación dependiente de la Sede Principal.',
      'Desaparición del consultorio odontológico, del pagador propio y del Jeep itinerante.',
      'Desde 2022–2026, el vínculo territorial se renueva mediante el PEI Agroecológico y la alianza con la Universidad Tecnológica de Pereira (UTP).',
    ],
    quote:
      'En el equipo de campo estaban la mejoradora de salud, la de hogar, el profesor de talleres, el alfabetizador y el experto agrícola; la institución tenía un Jeep para llevarlos a las escuelas.',
    quoteAuthor: 'Profe Milton Guillermo (NUC-DOC-G.09)',
    voiceProfileId: 'voz-milton-guillermo',
    trackIndex: 0,
  },
  {
    id: 'zona-taller-carpinteria',
    number: 2,
    title: 'Taller de Carpintería en Palo de Café → Sala de Sistemas Azul',
    xPercent: 35,
    yPercent: 45,
    category: 'Pedagogía y Comunidad',
    beforeTitle: 'Escuela de Artes y Oficios: Ebanistería con Café y Guaduilla',
    beforePeriod: 'Décadas de 1960 a 1990',
    beforeDescription:
      'Donde hoy funciona el aula azul operaba un taller completo de carpintería dotado de herramientas, dirigido por el Profesor de Talleres para los estudiantes de primaria y los padres de familia de la comunidad.',
    beforeBullets: [
      'Aprovechamiento de la madera de los cafetales cuando se hacía la "soca" (palo de café soqueado).',
      'Fabricación comunitaria de camas, comedores, mesas y sillas para los hogares campesinos.',
      'Elaboración de armarios artesanales enchapados con finos trozos de guaduilla local.',
    ],
    afterTitle: 'Sala de Sistemas ("Salón Azul") y Conectividad Escolar',
    afterPeriod: '2002 – 2026',
    afterDescription:
      'Al desaparecer la plaza del maestro carpintero tras la fusión administrativa, el amplio salón del taller fue reconvertido en el aula de informática y tecnología de la Sede El Núcleo.',
    afterBullets: [
      'Dotación de equipos de cómputo con mantenimiento técnico desde el inicio del año escolar.',
      'Conexión a internet municipal y apoyo audiovisual para los grados de preescolar a quinto.',
      'Conservación en la memoria oral de los muebles de café y guaduilla que aún guardan varias familias de Altagracia.',
    ],
    quote:
      'El profesor de talleres era un carpintero: hacían camas, mesas y sillas con palo del café que soqueaban, y armarios enchapados con pedacitos de guaduilla.',
    quoteAuthor: 'Profe Milton Guillermo (NUC-DOC-G.09 · Parte 2)',
    voiceProfileId: 'voz-milton-guillermo',
    trackIndex: 1,
  },
  {
    id: 'zona-bloque-terremoto',
    number: 3,
    title: 'Bloque Antiguo, Consultorio Odontológico y Aula Máxima → Reconstrucción FOREC (1999)',
    xPercent: 60,
    yPercent: 38,
    category: 'Infraestructura',
    beforeTitle: 'Arquitectura Tradicional con Jardines Interiores y Aula Máxima',
    beforePeriod: '1960 – 25 de enero de 1999',
    beforeDescription:
      'La planta original combinaba salones separados por jardines florales intermedios, cocina tradicional (donde cocinaban doña Edilma y "La Negra") y una gran Aula Máxima para actos culturales, teatro y grados.',
    beforeBullets: [
      'Salones de un piso rodeados de jardines cuidados por los propios niños y maestros.',
      'Aula Máxima como corazón social y cultural del casco urbano de Altagracia.',
      'El viernes 22 de enero de 1999 los docentes acordaron aplazar el ingreso de los niños previsto para el lunes 25, salvando cientos de vidas.',
    ],
    afterTitle: 'Bloque Moderno FOREC, Unidades Sanitarias y Restaurante Escolar',
    afterPeriod: '1999 – 2026',
    afterDescription:
      'El terremoto del lunes 25 de enero de 1999 (1:19 p. m.) destruyó prácticamente la mitad de la sede mientras los maestros almorzaban en la cocina. Con recursos del FOREC se demolió la zona colapsada y se levantó la estructura actual.',
    afterBullets: [
      'Construcción de un bloque pedagógico sismorresistente con unidades sanitarias modernas.',
      'Edificación del restaurante escolar independiente en el sector donde antes quedaba el Aula Máxima.',
      'Adecuación de nuevas zonas verdes de descanso y contacto con la naturaleza.',
    ],
    quote:
      'El terremoto fue de una magnitud muy grande y prácticamente la mitad de la sede quedó destruida... Se instaló un bloque nuevo con unidades sanitarias y restaurante independiente.',
    quoteAuthor: 'Profes Isabel Cristina Álvarez y Milton Guillermo',
    voiceProfileId: 'voz-milton-guillermo',
    trackIndex: 1,
  },
  {
    id: 'zona-cafetal-elba',
    number: 4,
    title: 'Cafetal, Tanque de Lavado, "Elba" sobre Rieles y Cítricos',
    xPercent: 76,
    yPercent: 57,
    category: 'Producción Agropecuaria',
    beforeTitle: 'Producción Cafetera Completa y Huerta Frutal',
    beforePeriod: '1960 – 2002',
    beforeDescription:
      'En las 9 hectáreas (15 cuadras adquiridas por Escritura 1171 de 1959), el Núcleo poseía cafetales tecnificados, cultivos de naranja, mandarina, plátano y hortalizas bajo el cuidado de obreros de planta y profesores como Jorge Eliécer Arenas y el agrónomo Pedro ("Miguelito").',
    beforeBullets: [
      'Tanque de fermentación y lavado de café de dos compartimentos en mampostería.',
      'Secadero solar ("elba") con techo corredizo sobre rieles para proteger el grano de la lluvia.',
      'Presupuesto propio para contratar recolectores en época de cosecha y traviesa (alojados en la casita de la finca).',
      'Cosecha de zanahoria, remolacha, cilantro y cebolla para el restaurante escolar y venta local.',
    ],
    afterTitle: 'Paisaje Agrocafetalero y Memoria del Trabajo Campesino',
    afterPeriod: '2002 – 2026',
    afterDescription:
      'Tras la fusión y la pérdida del presupuesto agrícola y de los 7 granjeros de planta (reducidos hoy a 3 obreros por contrato para todas las sedes, como don Rodrigo), las estructuras del beneficiadero quedaron como vestigio patrimonial.',
    afterBullets: [
      'Conservación física del antiguo tanque de lavado y rieles de la elba como memoria material en el terreno.',
      'Articulación pedagógica actual a través del PEI en Agroecología y Sistema Agrocafetalero.',
      'Homenaje permanente en la memoria comunitaria al experto agrónomo Pedro ("Miguelito").',
    ],
    quote:
      'Tenían siembra de café, de naranja y mandarina; había tanque de lavado de dos compartimentos y la elba con techo corredizo para secar el café al sol.',
    quoteAuthor: 'Profe Milton Guillermo y Alexis Suárez (NUC-DOC-G.09 / EGME-PJAC-20)',
    voiceProfileId: 'voz-milton-guillermo',
    trackIndex: 4,
  },
  {
    id: 'zona-pecuaria-peces',
    number: 5,
    title: 'Galpones con Ramio, Establo, Porquerizas y Lago de Peces con Bore',
    xPercent: 83,
    yPercent: 22,
    category: 'Producción Agropecuaria',
    beforeTitle: 'Granja Pecuaria Autosostenible y Despensa Comunitaria',
    beforePeriod: '1960 – 2002',
    beforeDescription:
      'La parte baja y media de la finca albergaba un circuito pecuario ejemplar donde los escolares aprendían zootecnia práctica y cuyos productos se vendían a precios solidarios a todas las familias de Altagracia.',
    beforeBullets: [
      'Galpones de gallinas ponedoras y pollos alimentados con cultivos propios de ramio.',
      'Porquerizas con cerdas de cría, levante y reproductor al servicio de los campesinos de la vereda.',
      'Establo de vacas lecheras, conejera demostrativa y estanque de peces alimentados con hojas de bore.',
      'El tesorero escolar administraba la venta de leche, huevos, carne y pescado para reinvertir en la escuela.',
    ],
    afterTitle: 'Zonas Verdes Pedagógicas y Transición Ambiental',
    afterPeriod: '2002 – 2026',
    afterDescription:
      'Por cambios normativos y el fin del fondo rotatorio agropecuario tras la fusión de 2002, cesó la cría de ganado, cerdos y peces, permaneciendo las estructuras en mampostería rodeadas de vegetación.',
    afterBullets: [
      'Sustitución del manejo pecuario intensivo por espacios de observación ecológica y bienestar estudiantil.',
      'Reconocimiento de los antiguos galpones, porquerizas y estanques durante los recorridos de memoria oral.',
      'Conexión con el enfoque actual de soberanía alimentaria, huertas limpias sin químicos y cuidado del agua.',
    ],
    quote:
      'El Núcleo vendía a todos los habitantes de Altagracia sus productos: había huevos, carne, leche y pescados; teníamos tesorero que distribuía esos recursos para la misma escuela.',
    quoteAuthor: 'Profe Isabel Cristina Álvarez (NUCPRI-DOC-G.14 · Parte 2)',
    voiceProfileId: 'voz-isabel-y-sandra',
    trackIndex: 1,
  },
  {
    id: 'zona-huellas-acceso',
    number: 6,
    title: 'Camino de Entrada y Huertas → Huellas Viales por Festivales Comunitarios',
    xPercent: 16,
    yPercent: 64,
    category: 'Infraestructura',
    beforeTitle: 'Trocha Empinada de Tierra y Paso del Jeep',
    beforePeriod: '1960 – Década de 2000',
    beforeDescription:
      'El acceso a la sede desde la vía principal era una pendiente destapada de tierra y piedra que con las lluvias se volvía resbaladiza, ocasionando frecuentes caídas de docentes y padres de familia.',
    beforeBullets: [
      'Tránsito diario a pie de los niños de las veredas y del Jeep institucional del Núcleo.',
      'Dificultad de acceso en invierno para el transporte de insumos de la granja y del restaurante.',
    ],
    afterTitle: 'Huellas Viales en Concreto mediante Festivales Gastronómicos',
    afterPeriod: 'Gestión Docente y Comunitaria Reciente',
    afterDescription:
      'Con el impulso del docente Fernando y el equipo de maestras del Núcleo, se gestionó el material ante Obras Públicas y la comunidad educativa financió la mano de obra mediante festivales gastronómicos.',
    afterBullets: [
      'Construcción de las cintas o huellas de concreto desde la entrada hasta la zona superior de la sede.',
      'Ejemplo contemporáneo de cómo la tradición del convite sigue viva entre docentes y familias.',
    ],
    quote:
      'Nos caíamos mucho en las motos a la entrada; con el profesor Fernando gestionamos el material y con festivales gastronómicos de los docentes y padres hicimos las huellas viales.',
    quoteAuthor: 'Profes Sandra Milena Segura e Isabel Cristina Álvarez (Parte 4)',
    voiceProfileId: 'voz-isabel-y-sandra',
    trackIndex: 3,
  },
];

/**
 * Homenaje a los Maestros, Donantes de Tierras y Líderes que Forjaron la Institución
 */
export const HISTORICAL_FOUNDERS_TRIBUTES: HistoricalFounderTribute[] = [
  {
    id: 'forjador-gonzalo-mejia',
    name: 'Gonzalo Mejía Echeverry',
    role: 'Concejal de Pereira, periodista, maestro y dirigente cívico (Epónimo)',
    era: 'Ordenanza de 1967',
    sede: 'Sede Principal',
    tributeType: 'Donante Fundacional',
    contribution:
      'Impulsó en las deliberaciones departamentales la creación del colegio oficial de bachillerato para Altagracia y aportó terrenos para su edificación; las juntas comunales bautizaron el plantel en su honor en 1967.',
    sourceRef: 'Gil y Vargas (2019); PRI-DOC-G03; NUCPRI-DOC-G.14',
  },
  {
    id: 'forjador-pedro-patino',
    name: 'Don Pedro Patiño',
    role: 'Propietario rural y benefactor de la vereda Cañaveral',
    era: 'Década de 1940 – 1950',
    sede: 'Sede Cañaveral',
    tributeType: 'Donante Fundacional',
    contribution:
      'Cuando la Alcaldía exigió poseer escritura de un lote propio para reemplazar la vieja escuela de bahareque, donó el terreno donde la comunidad levantó en mingas la actual Sede Cañaveral.',
    sourceRef: 'Relato de Lanzita Palomino (CAÑ-APJAC-21) y Anteproyecto Cap. 2',
  },
  {
    id: 'forjador-pio-duran',
    name: 'Don Pío Durán',
    role: 'Vecino y benefactor de la vereda Filobonito',
    era: 'Década de 1960',
    sede: 'Sede Filobonito',
    tributeType: 'Donante Fundacional',
    contribution:
      'Ante el riesgo de derrumbes que amenazaba el primer ranchito escolar de bahareque donde se estudiaba a la luz de la vela, donó el terreno seguro donde el Comité de Cafeteros edificó la sede en material.',
    sourceRef: 'Entrevista FIL-DOC-G02 (Martha Cecilia Montoya) y Figura 1',
  },
  {
    id: 'forjador-familia-rangel',
    name: 'Familia Rangel Trujillo y Esposos Orlando Díaz y Doña Virginia',
    role: 'Donantes del lote y propietarios de la finca prestada en El Estanquillo',
    era: '1948 – Años 1960',
    sede: 'Sede El Agrado',
    tributeType: 'Donante Fundacional',
    contribution:
      'La familia Rangel Trujillo donó el predio inicial de la escuela en 1948; y tras el sismo de 1950, don Orlando Díaz y doña Virginia prestaron su finca para dar clases y lideraron los convites nocturnos del muro de contención.',
    sourceRef: 'Entrevistas AGR-AMF-G.17 y AGR-EAMF-G18',
  },
  {
    id: 'forjador-roberto-giraldo',
    name: 'Don Roberto Giraldo y Familia Donante de El Jazmín',
    role: 'Benefactores prediales en el sector La Virgen y en la vereda El Jazmín',
    era: 'Décadas de 1960 y 1970',
    sede: 'Sede Principal y Sede El Jazmín',
    tributeType: 'Donante Fundacional',
    contribution:
      'Don Roberto Giraldo donó el lote junto a La Virgen (actual Puesto de Salud) para la segunda ubicación del colegio; en El Jazmín, una familia residente en EE. UU. donó el potrero para la escuela y la cancha veredal.',
    sourceRef: 'Entrevistas NUC-MF-G.10 (Ana Rita Ramírez) y DOC-SJ-G21',
  },
  {
    id: 'forjador-armando-hoyos',
    name: 'Magíster Armando Hoyos Valencia',
    role: 'Rector histórico de la Institución Educativa Gonzalo Mejía Echeverry',
    era: 'Décadas de 1980 y 1990 (Traslado de 1997)',
    sede: 'Sede Principal',
    tributeType: 'Maestro(a) Histórico(a)',
    contribution:
      'Gestionó junto a los padres de familia la Personería Jurídica en Bogotá para ofrecer el bachillerato completo y lideró en septiembre de 1997 el traslado definitivo a la nueva planta física en la vereda La Una.',
    sourceRef: 'Entrevistas PRI-DOC-G03 y NUC-MF-G.10',
  },
  {
    id: 'forjador-amalia-y-luzalba',
    name: 'Profesoras Amalia Rodríguez y Luz Alba Ríos',
    role: 'Maestras históricas de tres y cuatro generaciones en El Estanquillo',
    era: '1970 – 2015 (40 años de servicio)',
    sede: 'Sede El Agrado',
    tributeType: 'Maestro(a) Histórico(a)',
    contribution:
      'Gestionaron con el Comité de Cafeteros la pavimentación de la cancha, el parque infantil y el cerramiento; crearon la Biblioteca Comunitaria y las célebres revistas gimnásticas de las Fiestas de la Cosecha.',
    sourceRef: 'Entrevistas AGR-AMF-G.17, AGR-EAMF-G18 y AGR-APF-G16',
  },
  {
    id: 'forjador-pedro-y-arenas',
    name: 'Agrónomo Pedro ("Miguelito"), Prof. Jorge Eliécer Arenas y Socorro de Vásquez',
    role: 'Artífices de la granja del Núcleo Escolar y maestra pionera de Cañaveral',
    era: 'Décadas de 1960 a 1990',
    sede: 'Sede El Núcleo y Sede Cañaveral',
    tributeType: 'Maestro(a) Histórico(a)',
    contribution:
      'Lideraron los cultivos de café, cítricos y proyectos pecuarios del Núcleo Escolar, y en el caso de doña Socorro de Vásquez y la directora Lucilia (El Jazmín), forjaron las primeras generaciones veredales.',
    sourceRef: 'Entrevistas NUC-DOC-G.09, CAÑ-DOC-12, DOC-SJ-G21 y EGME-PJAC-20',
  },
  {
    id: 'forjador-tomas-y-mingueros',
    name: 'Don Tomás Suárez, Sigifredo Montoya, Benjamín Grisales y Romelia Marín',
    role: 'Primer tesorero escolar, inspector gestor y líderes de las Juntas de Acción Comunal',
    era: '1948 – 2000',
    sede: 'Todas las sedes rurales',
    tributeType: 'Líder Comunitario(a)',
    contribution:
      'Organizaron las mingas con palas y recatones, los bazares de fritangas y arroz con leche, y los convenios con el Comité de Cafeteros que hicieron posible levantar cada escuela antes de la llegada estatal.',
    sourceRef: 'Entrevistas EGME-PJAC-20, CAÑ-APJAC-21, AGR-AMF-G.17 y FIL-DOC-G02',
  },
];
