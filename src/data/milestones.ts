import { HistoricalMilestone, SedeInfo, MilestoneMedia } from '../types/timeline';

/**
 * ============================================================================
 * FUENTE DE DATOS CENTRALIZADA DE HITOS HISTÓRICOS Y ARCHIVO DOCUMENTAL
 * Institución Educativa Gonzalo Mejía Echeverry (Corregimiento de Altagracia, Pereira)
 * ============================================================================
 *
 * Todas las imágenes de hitos y sedes corresponden a FOTOGRAFÍAS REALES DE ARCHIVO,
 * documentos oficiales y registros fotográficos en sede provenientes de la investigación
 * "La Escuela como Tejido de Memoria Comunitaria" (Licenciatura en Etnoeducación UTP, 2026).
 */

export const PROJECT_ARCHIVE_MEDIA: Record<string, MilestoneMedia> = {
  // --- Cartografía y soportes documentales institucionales ---
  mapaAereoAltagracia: {
    id: 'media-mapa-aereo',
    url: '/assets/archivo/mapa-aereo-altagracia.png',
    title: 'Vista aérea satelital: Sede Principal (La Una) y Núcleo Escolar Altagracia',
    caption:
      'Ubicación geográfica de la Institución Educativa Gonzalo Mejía Echeverry en la vereda La Una (Vía Altagracia) y del Núcleo Escolar Altagracia en el sector suroriental. Imagen incluida en el Marco Contextual del proyecto de investigación.',
    yearOrPeriod: '2026',
    source: 'Anteproyecto de investigación UTP (Adaptación de Google Earth, 2026)',
    isRealProjectAsset: true,
    assetTypeLabel: 'Archivo real · Cartografía satelital',
    sede: 'Sede Principal y Sede Núcleo',
    alt: 'Fotografía satelital del corregimiento de Altagracia mostrando la ubicación de la Sede Principal en la vereda La Una y el Núcleo Escolar Altagracia',
  },
  infografiaHitosOriginal: {
    id: 'media-infografia-hitos',
    url: '/assets/archivo/infografia-hitos-investigacion.jpg',
    title: 'Esquema documental de Hitos Históricos (1940 – 2017)',
    caption:
      'Síntesis cronológica original elaborada en el Capítulo 2 de la investigación a partir de la triangulación de relatos orales y fuentes documentales de las seis sedes rurales.',
    yearOrPeriod: '1940 – 2017',
    source: 'Archivo del proyecto: Figura 1 · Hitos relevantes (Gañán Morales, 2026)',
    isRealProjectAsset: true,
    assetTypeLabel: 'Archivo real · Infografía documental',
    sede: 'Todas las sedes',
    alt: 'Infografía vertical con los seis hitos históricos principales de la Institución Educativa Gonzalo Mejía Echeverry entre 1940 y 2017',
  },
  radicadoAnteproyectoUtp: {
    id: 'media-radicado-utp',
    url: '/assets/archivo/radicado-anteproyecto-utp.png',
    title: 'Registro documental del proyecto en la Universidad Tecnológica de Pereira',
    caption:
      'Radicado oficial N.° 03 1857 (09/02/2026) de presentación del proyecto "La Escuela como Tejido de Memoria Comunitaria en la Institución Educativa Gonzalo Mejía Echeverry del Corregimiento de Altagracia, Pereira", Licenciatura en Etnoeducación.',
    yearOrPeriod: '9 de febrero de 2026',
    source: 'Gestión de Documentos UTP · Semillero Familia, Comunidad y Escuela',
    isRealProjectAsset: true,
    assetTypeLabel: 'Archivo real · Soporte documental',
    sede: 'Todas las sedes',
    alt: 'Sello de radicación documental de la Universidad Tecnológica de Pereira con fecha 09/02/2026',
  },

  // --- Patrimonio epigráfico y vallas institucionales ---
  placaInauguracion1997: {
    id: 'media-placa-inauguracion-1997',
    url: '/assets/archivo/placa-inauguracion-1997.jpg',
    title: 'Placa conmemorativa en mármol: Inauguración Sede Principal (10 de mayo de 1997)',
    caption:
      'Placa original en mármol tallada como libro abierto en muro de ladrillo. Documenta la inauguración formal con el alcalde Juan Manuel Arango, el secretario Fernando Fontal Bueno, el rector Armando Hoyos Valencia, el Consejo Directivo 1996 y líderes comunitarios como doña Ana Rita Ramírez.',
    yearOrPeriod: '10 de mayo de 1997',
    source: 'Archivo fotográfico patrimonial en muro de la Sede Principal',
    isRealProjectAsset: true,
    assetTypeLabel: 'Patrimonio epigráfico en mármol',
    sede: 'Sede Principal (Vereda La Una)',
    alt: 'Placa en mármol tallada en forma de libro abierto conmemorando la inauguración del Colegio Oficial Gonzalo Mejía Echeverry el 10 de mayo de 1997',
  },
  vallaInstitucionalSedes: {
    id: 'media-valla-institucional-sedes',
    url: '/assets/archivo/valla-institucional-sedes-sabatina.jpg',
    title: 'Valla institucional de entrada: Articulación de las sedes rurales y Jornada Sabatina',
    caption:
      'Valla oficial en el acceso principal que testimonia la identidad institucional unificada: todos los grados, Jornada Sabatina y la red de sedes rurales (Cañaveral, Filobonito, Núcleo Escolar, El Jazmín, Guadualito y El Agrado).',
    yearOrPeriod: 'Década de 2000 – Presente',
    source: 'Registro fotográfico en entrada vehicular de la Sede Principal',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real en sede',
    sede: 'Todas las sedes',
    alt: 'Valla institucional de la Institución Educativa Gonzalo Mejía Echeverry destacando la Sabatina y las sedes rurales',
  },
  muralMapaVerde: {
    id: 'media-mural-mapa-verde',
    url: '/assets/archivo/mural-mapa-verde-institucional.jpg',
    title: 'Cartografía oficial: Mural enmarcado del "Mapa Verde" institucional',
    caption:
      'Cartografía ambiental detallada enmarcada en pared de ladrillo: señala senderos ecológicos, guaduales, áreas de cultivo, miradores de aves, huertas medicinales y proyectos PRAE y GEOvida del colegio.',
    yearOrPeriod: '2024 – 2026',
    source: 'Registro fotográfico en instalaciones de la Sede Principal',
    isRealProjectAsset: true,
    assetTypeLabel: 'Cartografía ambiental de campus',
    sede: 'Sede Principal',
    alt: 'Mural enmarcado del Mapa Verde de la Institución Educativa Gonzalo Mejía Echeverry mostrando senderos ecológicos y zonas de conservación',
  },

  // --- Panorámicas y registros de campus de sedes ---
  sedePrincipalPanoramicaArcoiris: {
    id: 'media-principal-arcoiris',
    url: '/assets/archivo/sede-principal-panoramica-arcoiris.jpg',
    title: 'Fotografía panorámica: Sede Principal en la vereda La Una con arcoíris',
    caption:
      'Vista aérea panorámica del campus campestre en la vereda La Una: pabellones en ladrillo a la vista, coliseo cubierto con paneles solares, kiosco central y vegetación nativa enmarcada por un arcoíris sobre la cordillera.',
    yearOrPeriod: 'Fotografía institucional contemporánea',
    source: 'Registro fotográfico oficial de la institución',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real panorámica',
    sede: 'Sede Principal (Vereda La Una)',
    alt: 'Panorámica elevada de la Sede Principal en la vereda La Una con un arcoíris en el cielo sobre las montañas',
  },
  sedePrincipalColiseoKiosco: {
    id: 'media-principal-coliseo-kiosco',
    url: '/assets/archivo/sede-principal-coliseo-kiosco.jpg',
    title: 'Campus Sede Principal: Kiosco cónico de ladrillo, coliseo deportivo y zonas verdes',
    caption:
      'Espacios abiertos y deportivos de la Sede Principal que representaron un salto sustancial frente al hacinamiento de la antigua sede urbana del sector de La Virgen.',
    yearOrPeriod: 'Fotografía contemporánea',
    source: 'Registro fotográfico en campus de La Una',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real de campus',
    sede: 'Sede Principal',
    alt: 'Zonas deportivas, kiosco de ladrillo y coliseo cubierto de la Sede Principal',
  },
  sedeCanaveralFachada: {
    id: 'media-canaveral-fachada',
    url: '/assets/archivo/sede-canaveral-fachada.jpg',
    title: 'Fotografía real: Fachada, corredores campesinos y cancha de la Sede Cañaveral',
    caption:
      'Sede Cañaveral fundada en la década de 1940 a base de mingas y festivales populares en terreno de Pedro Patiño, y reconstruida tras el terremoto de 1999 con colores campesinos.',
    yearOrPeriod: 'Fotografía institucional contemporánea',
    source: 'Registro fotográfico en Sede Cañaveral',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real institucional',
    sede: 'Sede Cañaveral',
    alt: 'Fachada en blanco y verde menta de la Sede Cañaveral con su cancha múltiple y vegetación',
  },
  sedeElAgradoFachada: {
    id: 'media-agrado-fachada',
    url: '/assets/archivo/sede-el-agrado-fachada-cancha.jpg',
    title: 'Fotografía real: Sede El Agrado (Vereda El Estanquillo)',
    caption:
      'La escuela más distante del corregimiento, levantada en material por el Comité de Cafeteros tras el paso por la finca Remolinos c. 1948. En la pared destaca el mural "Siembra amor, cosecha felicidad".',
    yearOrPeriod: 'Fotografía institucional contemporánea',
    source: 'Registro fotográfico en Sede El Agrado',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real institucional',
    sede: 'Sede El Agrado',
    alt: 'Fachada en blanco y azul de la Sede El Agrado con cancha de baloncesto y cielo azul despejado',
  },
  elAgradoCampanaMural: {
    id: 'media-agrado-campana',
    url: '/assets/archivo/el-agrado-campana-mural.jpg',
    title: 'Detalle arquitectónico rural: Campana escolar de bronce y mural en El Agrado',
    caption:
      'Campana tradicional de llamada a clases suspendida de la viga del corredor y mural pedagógico "Siembra amor, cosecha felicidad - IE GME Sedes Rurales".',
    yearOrPeriod: 'Fotografía de archivo en sede',
    source: 'Registro fotográfico en Sede El Agrado',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real de archivo',
    sede: 'Sede El Agrado',
    alt: 'Campana escolar de bronce en la viga del corredor y mural de la Sede El Agrado',
  },
  sedeNucleoQuiosco: {
    id: 'media-nucleo-quiosco',
    url: '/assets/archivo/sede-nucleo-quiosco.jpg',
    title: 'Fotografía real: Kiosco pedagógico y jardines de la Sede Núcleo Escolar',
    caption:
      'Instalaciones de primaria de la Sede Núcleo Escolar Altagracia, con su letrero oficial y jardines que mantienen viva la memoria de la antigua granja vocacional de 1960.',
    yearOrPeriod: 'Fotografía contemporánea',
    source: 'Registro fotográfico en Sede Núcleo',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real institucional',
    sede: 'Sede El Núcleo',
    alt: 'Kiosco cubierto y jardines de la Sede Núcleo Escolar con aviso de Primaria Gonzalo Mejía Echeverry',
  },
  sedeFilobonitoFachada: {
    id: 'media-filobonito-fachada',
    url: '/assets/archivo/filobonito-fachada-jardin.jpg',
    title: 'Fotografía real: Fachada comunitaria y jardines florales de la Sede Filobonito',
    caption:
      'Sede Filobonito edificada por el Comité de Cafeteros en lote donado por don Pío Durán tras el riesgo de derrumbes en su sitio antiguo, embellecida con murales de aves y flores.',
    yearOrPeriod: 'Fotografía contemporánea',
    source: 'Registro fotográfico en Sede Filobonito',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real institucional',
    sede: 'Sede Filobonito',
    alt: 'Fachada de la Sede Filobonito con jardín de flores, mural de colibrí y juegos infantiles pintados en la cancha',
  },
  sedeElJazminFachada: {
    id: 'media-jazmin-fachada',
    url: '/assets/archivo/sede-el-jazmin-fachada-cancha.jpg',
    title: 'Fotografía real: Sede El Jazmín y cancha deportiva comunitaria',
    caption:
      'Instalaciones en amarillo y azul de la Sede El Jazmín contiguas a la cancha polideportiva, en predio donado hace más de sesenta años por una familia de la región.',
    yearOrPeriod: 'Fotografía contemporánea',
    source: 'Registro fotográfico en Sede El Jazmín',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real institucional',
    sede: 'Sede El Jazmín',
    alt: 'Edificación escolar de la Sede El Jazmín con cancha múltiple, portería de fútbol y murales estudiantiles',
  },
  elJazminEstudiantesRecreo: {
    id: 'media-jazmin-recreo',
    url: '/assets/archivo/el-jazmin-estudiantes-recreo.jpg',
    title: 'Fotografía real: Estudiantes y docentes compartiendo en el patio de El Jazmín',
    caption:
      'Vida cotidiana y ambiente de inclusión pedagógica en el patio de la Sede El Jazmín, donde convergen el Semillero de Hormigas y los programas de la Fundación Renovar Ser.',
    yearOrPeriod: 'Fotografía de campo 2025',
    source: 'Registro fotográfico en Sede El Jazmín',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real institucional',
    sede: 'Sede El Jazmín',
    alt: 'Niños y profesores en la cancha de la Sede El Jazmín durante el recreo bajo un cielo azul con nubes',
  },

  // --- Archivo fotográfico histórico de época (papel y álbumes) ---
  nucleoArchivoSiembraHistorica: {
    id: 'media-nucleo-siembra-historica',
    url: '/assets/archivo/nucleo-archivo-siembra-historica.jpg',
    title: 'Fotografía histórica de época: Escolares regando la huerta elevada en el Núcleo Agrícola',
    caption:
      'Documento fotográfico original en papel de la Escuela Vocacional Agrícola: niños campesinos con regaderas amarillas cultivando en camas elevadas de guadua frente al paisaje montañoso de Altagracia.',
    yearOrPeriod: 'Años 1960 – 1970 (Archivo histórico de época)',
    source: 'Archivo fotográfico patrimonial de la Sede Núcleo Escolar Altagracia',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía histórica de época',
    sede: 'Sede El Núcleo',
    alt: 'Fotografía física antigua de estudiantes en camisa blanca regando plantas en un semillero elevado de guadua',
  },
  nucleoDocentesTrajeTipico: {
    id: 'media-nucleo-docentes-tipico',
    url: '/assets/archivo/nucleo-docentes-traje-tipico.jpg',
    title: 'Fotografía histórica de época: Maestros y comunidad del Núcleo en trajes típicos',
    caption:
      'Docentes y familias de la Sede Núcleo ataviados con trajes tradicionales del Paisaje Cultural Cafetero (sombreros aguadeños, ponchos, vestidos de chapolera y banda tricolor) en festividades de Altagracia.',
    yearOrPeriod: 'Años 1970 – 1980 (Archivo histórico)',
    source: 'Archivo fotográfico de la comunidad docente de la Sede Núcleo',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía histórica de época',
    sede: 'Sede El Núcleo',
    alt: 'Grupo de profesores y miembros de la comunidad con sombreros aguadeños, ponchos y vestidos folclóricos',
  },
  nucleoGraduacionEscuelaNueva: {
    id: 'media-nucleo-graduacion-escuela-nueva',
    url: '/assets/archivo/nucleo-graduacion-escuela-nueva.jpg',
    title: 'Fotografía de archivo: Graduación infantil bajo el lema "Hacia la Escuela Nueva"',
    caption:
      'Fotografía de archivo conservada en álbum anillado: promoción de estudiantes con toga y birrete azul en la tarima escolar del Núcleo, respaldados por el letrero de transición pedagógica a Escuela Nueva.',
    yearOrPeriod: 'Archivo escolar físico',
    source: 'Álbum fotográfico histórico de la Sede Núcleo Escolar',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía histórica de archivo',
    sede: 'Sede El Núcleo',
    alt: 'Niños graduados con togas y birretes azules en el escenario escolar con el letrero Hacia la Escuela Nueva',
  },
  filobonitoIndependienteCarroza: {
    id: 'media-filobonito-carroza',
    url: '/assets/archivo/filobonito-independiente-carroza-yipao.jpg',
    title: 'Fotografía histórica de época: Carroza Yipao del "C.E. Filobonito" independiente',
    caption:
      'Willys tradicional acondicionado como comparsa escolar con molinillos de viento y pancarta: "El reciclaje luz de esperanza - C.E. Filobonito", evidencia gráfica de la autonomía de la sede antes de la fusión.',
    yearOrPeriod: 'Años 1990 – 2000 (Previo a la fusión)',
    source: 'Archivo fotográfico comunitario de la Vereda Filobonito',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía histórica de época',
    sede: 'Sede Filobonito',
    alt: 'Jeep Willys decorado como carroza escolar con molinetes y pancarta artesanal del C.E. Filobonito',
  },

  // --- Resiliencia y memoria del sismo de 1999 ---
  pancartaResilienciaTerremoto: {
    id: 'media-pancarta-resiliencia',
    url: '/assets/archivo/pancarta-los-muros-pueden-temblar.jpg',
    title: 'Memoria y resiliencia: "Los muros pueden temblar, pero nuestras ganas de aprender permanecen siempre"',
    caption:
      'Pancarta institucional iluminada en la fachada escolar que resume con emoción el espíritu de resiliencia comunitaria tras el terremoto del 25 de enero de 1999 y la reconstrucción con el FOREC.',
    yearOrPeriod: 'Memoria viva del sismo de 1999',
    source: 'Registro fotográfico nocturno en Sede Filobonito',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real de memoria colectiva',
    sede: 'Todas las sedes',
    alt: 'Pancarta en tela blanca iluminada en la noche con la frase Los muros pueden temblar pero nuestras ganas de aprender permanecen siempre',
  },

  // --- Prácticas contemporáneas agroecológicas y comunitarias ---
  tallerJardinesPolinizadores: {
    id: 'media-taller-polinizadores',
    url: '/assets/archivo/taller-jardines-polinizadores.jpg',
    title: 'Fotografía real: Taller de Jardines de Polinizadores en patio escolar',
    caption:
      'Estudiantes y docentes sentados en la cancha alrededor de cajones de flores nativas, sustratos y abonos en el taller ambiental desarrollado con la fundación Ceiba Verde.',
    yearOrPeriod: '5 de noviembre de 2025',
    source: 'Registro fotográfico del proyecto de investigación UTP',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real del proyecto',
    sede: 'Sede Filobonito y Red de Sedes',
    alt: 'Grupo de niños y facilitador ambiental sentados en la cancha con plantas de flores para polinizadores',
  },
  canaveralAulasVivasClase: {
    id: 'media-canaveral-aulas-vivas',
    url: '/assets/archivo/canaveral-aulas-vivas-clase.jpg',
    title: 'Fotografía real: Clase al aire libre en "Aulas Vivas" (Sede Cañaveral)',
    caption:
      'Círculo de aprendizaje sobre el césped bajo matas de plátano frente a las colinas cafeteras, materializando el modelo pedagógico de aula viva y laboratorio territorial.',
    yearOrPeriod: '25 de septiembre de 2025',
    source: 'Registro de campo del semillero UTP en Sede Cañaveral',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real del proyecto',
    sede: 'Sede Cañaveral',
    alt: 'Estudiantes reunidos en círculo sobre el pasto verde en clase al aire libre en Cañaveral',
  },
  nucleoHuertaEstudiantes: {
    id: 'media-nucleo-huerta-estudiantes',
    url: '/assets/archivo/nucleo-huerta-estudiantes.jpg',
    title: 'Fotografía real: Prácticas agrícolas en las eras de cultivo de la Sede Núcleo',
    caption:
      'Escolares en uniforme deportivo sembrando y desyerbando camas de cultivo elevadas con borduras de guadua en la huerta escolar de la Sede Núcleo.',
    yearOrPeriod: 'Fotografía de campo 2025 – 2026',
    source: 'Registro fotográfico en huerta de Sede Núcleo',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real del proyecto',
    sede: 'Sede El Núcleo',
    alt: 'Estudiantes con uniforme deportivo trabajando en las eras de cultivo delimitadas con guadua',
  },
  compostajeManosComunidad: {
    id: 'media-compostaje-manos',
    url: '/assets/archivo/compostaje-manos-comunidad.jpg',
    title: 'Fotografía real: Taller práctico de compostaje y cobertura vegetal orgánica',
    caption:
      'Docente y estudiantes preparando la cama de siembra con acolchado de materia vegetal seca y composta orgánica en la huerta escolar agroecológica.',
    yearOrPeriod: 'Fotografía de campo 2025',
    source: 'Registro fotográfico en granja escolar',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real del proyecto',
    sede: 'Sede El Núcleo y Veredas',
    alt: 'Plano picado de docente y niños colocando sus manos sobre el compost y cobertura de paja en la huerta',
  },
  filobonitoSenderoTapas: {
    id: 'media-filobonito-sendero-tapas',
    url: '/assets/archivo/filobonito-sendero-tapas-recicladas.jpg',
    title: 'Fotografía real: Sendero ecológico con flores de tapas plásticas recicladas (Filobonito)',
    caption:
      'Comunidad y educadores recorriendo el sendero botánico de Filobonito decorado artesanalmente con flores formadas por tapas plásticas recicladas.',
    yearOrPeriod: '15 de octubre de 2025',
    source: 'Registro fotográfico en Sede Filobonito',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real del proyecto',
    sede: 'Sede Filobonito',
    alt: 'Docentes y visitantes caminando por un sendero con mosaicos de flores hechas de tapas de botellas recicladas',
  },
  filobonitoSemanaPazManos: {
    id: 'media-filobonito-semana-paz',
    url: '/assets/archivo/filobonito-semana-paz-manos.jpg',
    title: 'Fotografía real: Círculo de unión de manos en la Semana de la Paz (Filobonito)',
    caption:
      'Estudiantes de diversas edades uniendo sus manos en el centro como manifestación de afecto, solidaridad y paz comunitaria en el ámbito rural.',
    yearOrPeriod: '27 de septiembre de 2025',
    source: 'Registro fotográfico en Sede Filobonito',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real del proyecto',
    sede: 'Sede Filobonito',
    alt: 'Manos entrelazadas de estudiantes en círculo sobre colchoneta durante la Semana de la Paz',
  },
  foroTerritoriosUtpCampesino: {
    id: 'media-foro-territorios-utp',
    url: '/assets/archivo/foro-territorios-utp-campesino.jpg',
    title: 'Fotografía real: Encuentro en la UTP con atuendos tradicionales campesinos',
    caption:
      'Niños y docentes del corregimiento de Altagracia vistiendo ruanas, ponchos, sombreros aguadeños y faldas folclóricas en el auditorio de la Universidad Tecnológica de Pereira.',
    yearOrPeriod: '30 de septiembre de 2025',
    source: 'Registro fotográfico del Foro de Territorios de Paz (UTP)',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real del proyecto',
    sede: 'Todas las sedes',
    alt: 'Estudiantes y profesoras con trajes campesinos tradicionales posando en el escenario del auditorio de la UTP',
  },
  canaveralCompartirNatural: {
    id: 'media-canaveral-compartir-natural',
    url: '/assets/archivo/canaveral-compartir-natural-corazones.jpg',
    title: 'Fotografía real: Jornada comunitaria de afecto y naturaleza en Cañaveral',
    caption:
      'Escolares sentados sobre una manta en el prado de la Sede Cañaveral expresando gestos de corazón y compañerismo en torno al aprendizaje rural.',
    yearOrPeriod: '30 de septiembre de 2025',
    source: 'Registro de campo en Sede Cañaveral',
    isRealProjectAsset: true,
    assetTypeLabel: 'Fotografía real del proyecto',
    sede: 'Sede Cañaveral',
    alt: 'Grupo de niños de la escuela Cañaveral sentados en el césped haciendo señas de corazón con las manos',
  },
};

export const MILESTONES_DATA: HistoricalMilestone[] = [
  {
    id: 'hito-1948-inicios-veredales',
    year: 1948,
    periodLabel: '1940 – 1948',
    shortTitle: 'Nuestros inicios',
    title: 'Nace la educación en las veredas: casas de bahareque y mingas comunitarias',
    category: 'Comunidad',
    sedes: ['Sede Cañaveral', 'Sede El Agrado'],
    verificationStatus: 'verificado',
    verificationNote:
      'Fechas reconstruidas por estimación temporal a partir de la memoria oral de los habitantes mayores (década de 1940 en Cañaveral y hacia 1948 en El Agrado).',
    summary:
      'Las familias campesinas de Cañaveral y El Estanquillo impulsan las primeras escuelas en casas de bahareque y fincas prestadas, levantando aulas mediante convites, bazares dominicales y el acarreo de agua desde la cañada La Filipina.',
    fullDescription: [
      'Antes de la intervención estatal formal, la educación rural en el corregimiento de Altagracia nació de la voluntad colectiva de las familias campesinas. En la vereda Cañaveral —cuya escuela suma más de ochenta años de existencia según la edad de sus árboles y de sus antiguos egresados—, la primera aula funcionaba en una casa vieja de bahareque. Ante su deterioro, jóvenes y líderes de la Junta de Acción Comunal acudieron a la Alcaldía de Pereira, que condicionó la obra a la posesión de un lote propio.',
      'El vecino Pedro Patiño donó el terreno en Cañaveral y toda la vereda se organizó en mingas comunitarias los sábados y domingos: vendían fritangas, empanadas y arroz con leche, realizaban obras de teatro y bailaban cumbia, bambuco, pasodoble y galerón para financiar los materiales, mientras hombres y mujeres trabajaban con palas y recatones para levantar los dos bloques escolares.',
      'De manera paralela, hacia 1948 en la vereda El Estanquillo —la más distante del corregimiento—, los niños debían caminar inicialmente hasta El Retiro. Tras la donación de un lote por la familia Rangel Trujillo, se abrieron clases en una casita de bahareque con piso de tierra y sin acueducto: los escolares cargaban el agua desde la cañada "La Filipina" en tarros de guadua con un trapito para que la primera maestra pudiera cocinar y asear la escuela.',
      'Cuando un fuerte temblor y vendaval entre 1949 y 1950 afectó el rancho de bahareque en El Agrado, don Orlando Díaz y doña Virginia prestaron temporalmente su finca (Remolinos / Marzula) para no interrumpir las clases, mientras el inspector Benjamín Grisales y la comunidad gestionaban ante el Comité de Cafeteros la edificación de las primeras aulas en ladrillo y cemento de toda la zona.',
    ],
    keyFacts: [
      'Donación de terrenos por vecinos: Pedro Patiño en la vereda Cañaveral y la familia Rangel Trujillo en la vereda El Estanquillo (Sede El Agrado).',
      'Autogestión comunitaria en Cañaveral con convites, venta de fritangas, arroz con leche y festivales artísticos de fin de semana (familias Montoya, Vásquez, Arévalo, Toro Bedoya y la docente Socorro de Vásquez).',
      'Clases temporales en la finca prestada por Orlando Díaz y Doña Virginia mientras el Comité de Cafeteros construía la planta en material de El Agrado.',
      'Acarreo diario de agua en recipientes de guadua desde la cañada La Filipina hasta la llegada del acueducto rural hacia 1960.',
    ],
    testimonies: [
      {
        quote:
          'Vendíamos fritangas, vendíamos arroz con leche, claro, con la ayuda de la comunidad. Empezamos los domingos... hacíamos bazares, hacíamos obras de teatro, bailábamos cumbia, bambuco, pasodoble y galerón. Así fue como construyeron las escuelas.',
        authorRole: 'Lanzita Palomino · Lideresa histórica de la vereda',
        code: 'CAÑ-APJAC-21',
        sede: 'Sede Cañaveral',
      },
      {
        quote:
          'Fue como en el 48 que la escuela la hicieron, y era con agua cargada porque no había agua. Cuando entramos a la escuela teníamos que ir a traer agua en la cañada que se llama La Filipina, en unas cosas que hacíamos de guadua... le traíamos agua a la profesora para que ella lavara, hiciera de comer y para el inodoro.',
        authorRole: 'Flor Marina Ortiz · Primera generación de estudiantes (74 años)',
        code: 'AGR-AMF-G.17',
        sede: 'Sede El Agrado',
      },
      {
        quote:
          'Ese terreno lo hicieron todos los habitantes de Cañaveral a base de convites, a base de festivales, venta de empanadas y mingas con palas, con recatones.',
        authorRole: 'Gloria Nenfer García · Docente de aula multigrado',
        code: 'CAÑ-DOC-12',
        sede: 'Sede Cañaveral',
      },
    ],
    media: [
      PROJECT_ARCHIVE_MEDIA.sedeCanaveralFachada,
      PROJECT_ARCHIVE_MEDIA.sedeElAgradoFachada,
      PROJECT_ARCHIVE_MEDIA.elAgradoCampanaMural,
      PROJECT_ARCHIVE_MEDIA.infografiaHitosOriginal,
      PROJECT_ARCHIVE_MEDIA.mapaAereoAltagracia,
      {
        id: 'media-1940-lamina',
        url: '/assets/ilustraciones/lamina-1940-mingas-bahareque.svg',
        title: 'Esquema arquitectónico de referencia: Primeras escuelas de bahareque y mingas veredales',
        caption:
          'Representación ilustrativa de las primeras aulas de bahareque blanqueadas con cal, zócalo color caoba y corredor de madera descritas en los testimonios orales de las veredas Cañaveral, Filobonito y El Estanquillo.',
        yearOrPeriod: '1940 – 1948',
        source: 'Lámina ilustrativa basada en testimonios CAÑ-APJAC-21, AGR-AMF-G.17 y Documento 2026',
        isRealProjectAsset: false,
        assetTypeLabel: 'Lámina documental ilustrativa (basada en relatos orales)',
        sede: 'Sedes Cañaveral y El Agrado',
        alt: 'Ilustración documental de una escuela rural de bahareque con techo de teja y árbol patrimonial',
      },
    ],
    documentarySources: [
      'Anteproyecto de investigación: "La Escuela como Tejido de Memoria Comunitaria en la I.E. Gonzalo Mejía Echeverry" (Gañán Morales, UTP, 2026, Cap. 2).',
      'Transcripciones de historia oral: Entrevistas CAÑ-APJAC-21 (Lanzita Palomino), CAÑ-DOC-12 (Gloria Nenfer García), AGR-AMF-G.17 (Flor Marina Ortiz) y AGR-EAMF-G18 (María Angélica Ramírez Ortiz).',
    ],
    preferredPosition: 'top',
  },
  {
    id: 'hito-1960-nucleo-filobonito',
    year: 1960,
    periodLabel: 'Década de 1960',
    shortTitle: 'Núcleo Escolar y Filobonito',
    title: 'Vocación agrícola y cafetera: creación del Núcleo Escolar (1960) y sede Filobonito',
    category: 'Institución',
    sedes: ['Sede El Núcleo', 'Sede Filobonito'],
    verificationStatus: 'verificado',
    summary:
      'El Decreto 1240 del 19 de mayo de 1960 crea oficialmente el Núcleo Escolar de Altagracia como escuela vocacional agrícola con granja productiva y Equipo de Campo. En esa misma década, don Pío Durán dona el lote de Filobonito y el Comité de Cafeteros edifica su sede en material.',
    fullDescription: [
      'El 19 de mayo de 1960, mediante el Decreto Nacional 1240 expedido bajo la presidencia de Alberto Lleras Camargo y el ministro de Educación Abel Villegas Naranjo, nació oficialmente el Núcleo Escolar Rural de Altagracia como escuela vocacional agrícola. Se levantó sobre un predio adquirido mediante la Escritura Pública 1171 del 24 de junio de 1959 en la Notaría Segunda de Pereira, convirtiéndose en uno de los tres únicos núcleos escolares rurales de Risaralda (junto con Santa Rosa de Cabal y Quinchía).',
      'Durante más de cuatro décadas de autonomía administrativa y presupuestal, el Núcleo funcionó como una granja integral de aprendizaje y producción comunitaria: contaba con cultivos de café (con tanque de fermentación y elba de techo corredizo), cítricos, plátano, huerta escolar, ganado lechero, porquerizas, galpones de gallinas alimentadas con ramio, conejeras y estanques de peces alimentados con bore. Lo cosechado se comercializaba a precios solidarios entre las familias del corregimiento.',
      'Además de su planta interna (director, pagador/tesorero, mayordomo, obreros agrícolas y docentes por grado), el Núcleo irradiaba bienestar a todas las veredas mediante su célebre "Equipo de Campo", que se desplazaba en un Jeep institucional según un cronograma semanal: contaba con Mejoradora de Salud (con consultorio odontológico gratuito), Mejoradora de Hogar, Profesor de Talleres de Carpintería (donde niños y padres fabricaban muebles en palo de café soqueado y guaduilla), Alfabetizador y Experto Agrícola.',
      'En esta misma década de 1960 se consolidó la Sede Filobonito. Su primera escuela de bahareque —ubicada donde hoy funciona la fonda El Paraíso y donde se estudiaba a la luz de la vela— corría peligro por derrumbes en la vía. El vecino don Pío Durán donó el nuevo terreno y la Federación Nacional de Cafeteros (Comité de Cafeteros) construyó la planta física en material, acompañada por el liderazgo comunitario de figuras como doña Romelia Marín y la familia Gutiérrez.',
    ],
    keyFacts: [
      'Escritura Pública 1171 del 24 de junio de 1959 (Notaría Segunda de Pereira) y Decreto 1240 del 19 de mayo de 1960 que crea el Núcleo Escolar de Altagracia.',
      'Equipo de Campo itinerante en Jeep: atendía lunes en Cañaveral y Filobonito; martes en La Gramínea, Alto Alegrías y Guayabal; miércoles y viernes en el Núcleo; jueves en El Jazmín.',
      'Granja vocacional agrícola a cargo de docentes y expertos como Jorge Eliécer Arenas y el recordado agrónomo Pedro ("Miguelito").',
      'Reubicación de la Sede Filobonito por riesgo de derrumbes gracias a la donación del predio por don Pío Durán y construcción por el Comité de Cafeteros.',
    ],
    testimonies: [
      {
        quote:
          '¿Cuál era la función de los núcleos? Sacar un poco la gente de la violencia que estaba viviendo el país y empezar a buscar el desarrollo en sus comunidades... En el equipo de campo estaban la mejoradora de salud, la de hogar, el profesor de talleres, el alfabetizador y el experto agrícola. La institución tenía un jeep para llevar a los profesores a las escuelas.',
        authorRole: 'Milton Guillermo · Docente histórico de la Sede Núcleo',
        code: 'NUC-DOC-G.09',
        sede: 'Sede El Núcleo',
      },
      {
        quote:
          'Recuerdo mucho que en la sede 2, que es el Núcleo Escolar donde estudié la primaria, tenían siembra de café, de naranja, mandarina, tenían muchos galpones, marraneras y ganado.',
        authorRole: 'Alexis Suárez · Egresado y presidente de la Junta de Acción Comunal',
        code: 'EGME-PJAC-G.20',
        sede: 'Sede El Núcleo',
      },
      {
        quote:
          'Dicen que esta escuela era antes arriba donde es la tienda, pero como hubo unos derrumbes, entonces donaron este terreno. Fue el señor don Pío Durán y el Comité de Cafeteros construyó la escuela.',
        authorRole: 'Martha Cecilia Montoya · Docente con 22 años en la sede',
        code: 'FIL-DOC-G02',
        sede: 'Sede Filobonito',
      },
    ],
    media: [
      PROJECT_ARCHIVE_MEDIA.nucleoArchivoSiembraHistorica,
      PROJECT_ARCHIVE_MEDIA.nucleoDocentesTrajeTipico,
      PROJECT_ARCHIVE_MEDIA.nucleoGraduacionEscuelaNueva,
      PROJECT_ARCHIVE_MEDIA.filobonitoIndependienteCarroza,
      PROJECT_ARCHIVE_MEDIA.sedeNucleoQuiosco,
      PROJECT_ARCHIVE_MEDIA.sedeFilobonitoFachada,
      PROJECT_ARCHIVE_MEDIA.mapaAereoAltagracia,
      PROJECT_ARCHIVE_MEDIA.infografiaHitosOriginal,
      {
        id: 'media-1960-lamina',
        url: '/assets/ilustraciones/lamina-1960-nucleo-filobonito.svg',
        title: 'Lámina documental: Escuela Vocacional Agrícola El Núcleo y Sede Filobonito',
        caption:
          'Recreación esquemática de la arquitectura escolar cafetera de los años sesenta y los cultivos de la granja escolar del Núcleo en el Paisaje Cultural Cafetero de Altagracia.',
        yearOrPeriod: 'Década de 1960',
        source: 'Lámina ilustrativa basada en Decreto 1240 de 1960 y entrevistas NUC-DOC-G.09 y FIL-DOC-G02',
        isRealProjectAsset: false,
        assetTypeLabel: 'Lámina documental ilustrativa (basada en archivo oral)',
        sede: 'Sedes El Núcleo y Filobonito',
        alt: 'Ilustración de la escuela vocacional agrícola rodeada de cafetales y huerta escolar',
      },
    ],
    documentarySources: [
      'Decreto Nacional 1240 del 19 de mayo de 1960 (Ministerio de Educación Nacional) y Escritura Pública 1171 del 24 de junio de 1959 (Notaría Segunda de Pereira).',
      'Anteproyecto de investigación UTP (Gañán Morales, 2026, pp. 18–21).',
      'Transcripciones de entrevistas: NUC-DOC-G.09 (Milton Guillermo), NUCPRI-DOC-G.14 (Isabel Cristina Álvarez y Sandra Milena Segura), EGME-PJAC-G.20 (Alexis Suárez) y FIL-DOC-G02 (Martha Cecilia Montoya).',
    ],
    preferredPosition: 'bottom',
  },
  {
    id: 'hito-1967-fundacion-principal',
    year: 1967,
    periodLabel: '1967',
    shortTitle: 'Fundación del colegio',
    title: 'Creación oficial de la Institución Educativa Gonzalo Mejía Echeverry',
    category: 'Institución',
    sedes: ['Sede Principal'],
    verificationStatus: 'verificado',
    summary:
      'En 1967 la Asamblea Departamental aprueba la ordenanza que da vida oficial al colegio en la zona central de Altagracia para ofrecer educación secundaria a los jóvenes egresados de las escuelas veredales.',
    fullDescription: [
      'Hacia el año 1967, la Asamblea Departamental aprobó la ordenanza oficial de creación del colegio de bachillerato del corregimiento, respondiendo a la urgente necesidad de ofrecer educación secundaria y media a los jóvenes que terminaban la primaria en las escuelas veredales de Altagracia y no contaban con recursos para desplazarse hasta la zona urbana de Pereira.',
      'El establecimiento recibió el nombre de Gonzalo Mejía Echeverry en homenaje al concejal, periodista y dirigente cívico pereirano cuyas gestiones en las deliberaciones departamentales y el aporte de terrenos impulsaron la fundación del plantel, decisión respaldada por las juntas comunales y líderes del corregimiento.',
      'En sus primeras décadas, la Sede Principal recorrió dos ubicaciones en el casco urbano de Altagracia antes de su emplazamiento actual: inició labores en la edificación donde funcionaba la antigua Corregiduría e Inspección de Policía (en cuyos bajos operaba Telecom) y posteriormente pasó al sector de La Virgen —donde hoy se encuentra el Puesto de Salud—, en un lote donado por don Roberto Giraldo.',
      'La construcción de aquella sede en el sector de La Virgen quedó grabada en la memoria comunitaria porque los propios estudiantes bajaban en fila hasta el río Cestillal para acarrear piedra y arena. Allí el colegio creció desde los primeros grados de secundaria hasta gestionar en Bogotá su Personería Jurídica bajo el liderazgo del rector Armando Hoyos Valencia y la presidenta de la Asociación de Padres de Familia, doña Ana Rita Ramírez.',
    ],
    keyFacts: [
      'Creación oficial en 1967 mediante Ordenanza Departamental (rumbo a sus 60 años de vida institucional en 2027).',
      'Epónimo: Gonzalo Mejía Echeverry, concejal, periodista y dirigente cívico vinculado a la gestión y donación predial.',
      'Primeras sedes en el centro de Altagracia: edificio de la antigua Corregiduría / Telecom y luego en la subida de La Virgen (lote donado por Roberto Giraldo).',
      'Aporte estudiantil y comunitario acarreando piedra y arena desde el río Cestillal y obtención de la Personería Jurídica enviada por Telecom desde Bogotá.',
    ],
    testimonies: [
      {
        quote:
          'Hace ya muchos años el Gonzalo Mejía Echeverry existía en donde ahora es la corregiduría... Luego empezaron a construir en el lote que don Roberto Giraldo regaló. A los niños les tocaba ir al río Cestillal a sacar la piedra y la arena para traerla al lugar donde ahora es el puesto de salud.',
        authorRole: 'Ana Rita Ramírez · Expresidenta de la Asociación de Padres y de la JAC',
        code: 'NUC-MF-G.10',
        sede: 'Sede Principal',
      },
      {
        quote:
          'La sede siempre se ha llamado Institución Educativa Gonzalo Mejía Echeverry desde 1967... Ese nombre lo colocaron de acuerdo a un personaje, las personalidades del pueblo y los presidentes de junta tomaron la decisión.',
        authorRole: 'Luis Fernando Orozco · Docente con 32 años en la institución',
        code: 'PRI-DOC-G03',
        sede: 'Sede Principal',
      },
      {
        quote:
          'La sede fue construida con unos terrenos que aportó Gonzalo Mejía Echeverry, que era un político, en esa época era concejal del municipio de Pereira.',
        authorRole: 'Isabel Cristina Álvarez Morales · Docente desde 1997',
        code: 'NUCPRI-DOC-G.14 / DOCSP13',
        sede: 'Sede Principal',
      },
    ],
    media: [
      PROJECT_ARCHIVE_MEDIA.placaInauguracion1997,
      PROJECT_ARCHIVE_MEDIA.vallaInstitucionalSedes,
      PROJECT_ARCHIVE_MEDIA.foroTerritoriosUtpCampesino,
      PROJECT_ARCHIVE_MEDIA.infografiaHitosOriginal,
      PROJECT_ARCHIVE_MEDIA.mapaAereoAltagracia,
      {
        id: 'media-1967-lamina',
        url: '/assets/ilustraciones/lamina-1967-fundacion-principal.svg',
        title: 'Lámina documental: Ordenanza de 1967 y primera planta en el centro de Altagracia',
        caption:
          'Ficha conmemorativa esquemática de la Ordenanza Departamental de 1967 y de las primeras instalaciones del colegio en el casco central del corregimiento de Altagracia.',
        yearOrPeriod: '1967',
        source: 'Lámina ilustrativa basada en Gil y Vargas (2019), Anteproyecto UTP y entrevistas PRI-DOC-G03 y NUC-MF-G.10',
        isRealProjectAsset: false,
        assetTypeLabel: 'Lámina documental ilustrativa (basada en archivo histórico)',
        sede: 'Sede Principal',
        alt: 'Ilustración documental de la Ordenanza de 1967 y la fachada inicial del colegio en Altagracia',
      },
    ],
    documentarySources: [
      'Gil y Vargas (2019), citado en el Anteproyecto de investigación UTP (Gañán Morales, 2026, p. 17).',
      'Proyecto Educativo Institucional (PEI) de la Institución Educativa Gonzalo Mejía Echeverry (NIT 891408309-6).',
      'Transcripciones de entrevistas: PRI-DOC-G03 (Luis Fernando Orozco), NUC-MF-G.10 (Ana Rita Ramírez) y NUCPRI-DOC-G.14 (Isabel Cristina Álvarez).',
    ],
    preferredPosition: 'top',
  },
  {
    id: 'hito-1970-jazmin-sedes-registro',
    year: 1970,
    periodLabel: 'c. 1965 – 1970',
    shortTitle: 'El Jazmín y sedes rurales',
    title: 'Orígenes de la Sede El Jazmín, liderazgo en El Agrado y registros en validación',
    category: 'Comunidad',
    sedes: ['Sede El Jazmín', 'Sede El Agrado'],
    verificationStatus: 'ejemplo',
    verificationNote:
      'Contenido en proceso de validación documental: En la Tabla 2 del Anteproyecto UTP (2026), el año de creación de la Sede El Jazmín figura como «Sin registro aún». Se presenta aquí la reconstrucción oral preliminar junto con los registros fotográficos en sede.',
    summary:
      'Reconstrucción preliminar en proceso de validación sobre la donación del predio de la Sede El Jazmín (c. 1965–1970), las antiguas sedes veredales hoy cerradas (Guadualito y Tinajas) y la llegada en 1970 de la maestra Amalia Rodríguez a El Agrado.',
    fullDescription: [
      'Dentro del proceso investigativo de recuperación de la memoria colectiva, algunos hitos cuentan con testimonios orales preliminares que aún se encuentran en fase de contrastación documental. En el documento base del anteproyecto (Tabla 2), la Sede El Jazmín aparece registrada bajo el estado "Sin registro aún" en cuanto a su fecha exacta de fundación escrita.',
      'No obstante, las entrevistas realizadas en campo (DOC-SJ-G21) recogen el relato oral conservado por vecinas históricas como doña Alba: hacia finales de la década de 1960 (c. 1965–1970), una familia propietaria de la finca que residía en los Estados Unidos donó el terreno tanto para la escuela de El Jazmín como para su cancha adjunta. En su época de mayor auge, bajo la dirección de la recordada profesora Lucilia y tres docentes más, la escuela llegó a albergar hasta 250 niños y niñas.',
      'Por su parte, en el año 1970 se registra un hito verificado en la Sede El Agrado: la llegada de la docente Amalia Rodríguez, quien permaneció cerca de cuatro décadas (hasta su retiro entre 2012 y 2015) educando a tres y cuatro generaciones de familias de El Estanquillo. Junto a la profesora Luz Alba Ríos, gestionó ante el Comité de Cafeteros la pavimentación de la cancha de baloncesto, el parque infantil, el cerramiento escolar y el muro de contención levantado en convites nocturnos liderados por don Orlando Díaz.',
      'Asimismo, los relatos orales dejan constancia de antiguas sedes rurales que hicieron parte del tejido educativo de Altagracia y que posteriormente fueron cerradas por transición demográfica, como la Sede Guadualito (antigua Sede 3) y la escuela de Tinajas, cuyos archivos históricos permanecen abiertos a la aportación de documentos y fotografías por parte de la comunidad.',
    ],
    keyFacts: [
      'Estado documental en el Anteproyecto UTP (Tabla 2): Sede El Jazmín figura como «Sin registro» escrito, en proceso de validación mediante historia oral.',
      'Relato oral en El Jazmín (DOC-SJ-G21): donación del predio para escuela y cancha por una familia residente en Estados Unidos hace ~60 años y dirección histórica de la docente Lucilia.',
      'Hito docente en El Agrado (1970): ingreso de la maestra Amalia Rodríguez (40 años de servicio) y gestiones comunitarias con el Comité de Cafeteros.',
      'Memoria de antiguas sedes veredales cerradas por descenso demográfico: Sede Guadualito y escuela de Tinajas.',
    ],
    testimonies: [
      {
        quote:
          'Lo único que sabemos es por una vecina, doña Alba... cuenta que esto era un potrero muy grande de una familia que vivía en Estados Unidos; compraron esta finca y donaron este terreno para la escuela y para la cancha. La escuela tiene alrededor de 60, 62 años.',
        authorRole: 'Marinella Grisales Cardona · Docente de la Sede El Jazmín',
        code: 'DOC-SJ-G21',
        sede: 'Sede El Jazmín',
      },
      {
        quote:
          'Recuerdo mucho a la profesora Amalia, que llegó en 1970 y se destacó no solo porque fue docente de casi toda la vereda, de tres o cuatro generaciones, sino porque siempre quiso sacar a la institución adelante en su cancha pavimentada, su cerramiento y sus locaciones.',
        authorRole: 'María Angélica Ramírez Ortiz y Flor Marina Ortiz · Egresadas y lideresas',
        code: 'AGR-EAMF-G18 / AGR-AMF-G.17',
        sede: 'Sede El Agrado',
      },
    ],
    media: [
      PROJECT_ARCHIVE_MEDIA.sedeElJazminFachada,
      PROJECT_ARCHIVE_MEDIA.elJazminEstudiantesRecreo,
      PROJECT_ARCHIVE_MEDIA.infografiaHitosOriginal,
      {
        id: 'media-1970-jazmin-lamina',
        url: '/assets/ilustraciones/lamina-1968-jazmin-comunidad.svg',
        title: 'Ficha en validación: Sede El Jazmín y memoria de las sedes veredales',
        caption:
          'Lámina esquemática de referencia para el registro en construcción de la Sede El Jazmín (cancha anexa y murales escolares).',
        yearOrPeriod: 'c. 1965 – 1970 (En validación)',
        source: 'Entrevista DOC-SJ-G21 y Tabla 2 del Anteproyecto UTP (2026)',
        isRealProjectAsset: false,
        assetTypeLabel: 'Lámina esquemática de referencia',
        sede: 'Sede El Jazmín',
        alt: 'Ilustración de referencia de la Sede El Jazmín con su cancha contigua',
      },
    ],
    documentarySources: [
      'Tabla 2: Características generales de las sedes (Anteproyecto UTP, Gañán Morales, 2026, p. 17: Sede El Jazmín registrada como "Sin registro").',
      'Transcripciones de entrevistas: DOC-SJ-G21 (Marinella Grisales Cardona), AGR-AMF-G.17 (Flor Marina Ortiz) y AGR-EAMF-G18 (María Angélica Ramírez Ortiz).',
    ],
    preferredPosition: 'bottom',
  },
  {
    id: 'hito-1995-deporte-sabatina',
    year: 1995,
    periodLabel: '1994 – 1996',
    shortTitle: 'Deporte y Sabatina',
    title: 'Aprender y triunfar juntos: Juegos Intercolegiados y fundación de la Jornada Sabatina',
    category: 'Logros',
    sedes: ['Sede Principal', 'Sede El Núcleo', 'Sede El Agrado'],
    verificationStatus: 'verificado',
    summary:
      'A mediados de los años noventa la institución consolida su liderazgo deportivo en los Juegos Intercolegiados (1995) y abre el Bachillerato Sabatino (Programa 3011) gracias a cinco años de trabajo voluntario de sus docentes.',
    fullDescription: [
      'La década de 1990 estuvo marcada por logros pedagógicos, deportivos y comunitarios que fortalecieron el orgullo de pertenecer a la Institución Educativa Gonzalo Mejía Echeverry. En 1994, con la llegada del licenciado en Educación Física Luis Fernando Orozco, el colegio inscribió por primera vez a sus equipos en los Juegos Intercolegiados. Tras superar el temor inicial a competir fuera del corregimiento, desde 1995 la institución empezó a cosechar títulos continuos hasta ser reconocida en todo el municipio.',
      'En esa misma época (hacia 1996), los docentes Isabel Cristina Álvarez Morales y Milton Guillermo identificaron que numerosos jóvenes y adultos trabajadores del campo no podían culminar su bachillerato en la jornada diurna. Ambos maestros fundaron la Jornada Sabatina (Educación Formal de Adultos – Decreto 3011) trabajando durante cinco años de manera completamente gratuita y voluntaria los días sábados.',
      'Gracias a esa gesta docente, cientos de habitantes, madres de familia y líderes comunales de Altagracia se graduaron como bachilleres y accedieron a cursos complementarios con el SENA en gastronomía, contabilidad, sistemas y bisutería. Paralelamente, las sedes brillaban en las Fiestas de la Cosecha y el Desfile de la Identidad con su banda músico-marcial y las recordadas revistas gimnásticas de la Sede El Agrado.',
    ],
    keyFacts: [
      '1994 – 1995: Primera participación y despegue histórico de la institución en los Juegos Intercolegiados bajo la guía del docente Luis Fernando Orozco.',
      'c. 1996: Fundación del Bachillerato Sabatino (Programa 3011) con 5 años de docencia voluntaria ad honorem de los profesores Isabel Cristina Álvarez y Milton Guillermo.',
      'Creación de la Biblioteca Comunitaria en El Estanquillo / El Agrado con apoyo de las docentes Amalia Rodríguez, Luz Alba Ríos, Camila Vergara y el servicio social de grado 11.',
      'Presentaciones de las revistas gimnásticas sincronizadas y comparsas del Desfile de la Identidad en las fiestas aniversarias de Altagracia.',
    ],
    testimonies: [
      {
        quote:
          'En 1994 no nos fue bien en el primer partido, pero empezamos a trabajar en la mente de los muchachos: cambiar el chip y saber que somos buenos. Ya en 1995 empezamos a ganar en Intercolegiados y de ahí en adelante decían: "¡Uy, viene el Gonzalo Mejía, ese colegio cómo es de bueno!".',
        authorRole: 'Luis Fernando Orozco · Docente de Educación Física',
        code: 'PRI-DOC-G03',
        sede: 'Sede Principal',
      },
      {
        quote:
          'Hace 30 años está funcionando el Bachillerato de Sabatina. El profesor Milton y yo trabajamos 5 años gratis, voluntariamente, para que la comunidad trabajadora pudiera estudiar y graduarse.',
        authorRole: 'Isabel Cristina Álvarez Morales · Docente cofundadora de la Sabatina',
        code: 'NUCPRI-DOC-G.14',
        sede: 'Sede Principal y Sede El Núcleo',
      },
      {
        quote:
          'Las profesoras Amalia y Luz Alba sacaban unas revistas gimnásticas espectaculares con pompones azules y blancos; nos llevaban a representar al corregimiento en las Fiestas de la Cosecha.',
        authorRole: 'María Angélica Ramírez Ortiz · Egresada promoción 1990',
        code: 'AGR-EAMF-G18',
        sede: 'Sede El Agrado',
      },
    ],
    media: [
      PROJECT_ARCHIVE_MEDIA.vallaInstitucionalSedes,
      PROJECT_ARCHIVE_MEDIA.filobonitoIndependienteCarroza,
      PROJECT_ARCHIVE_MEDIA.mapaAereoAltagracia,
      {
        id: 'media-1995-lamina',
        url: '/assets/ilustraciones/lamina-1997-traslado-la-una.svg',
        title: 'Lámina esquemática: Crecimiento estudiantil, deporte y vida comunitaria',
        caption:
          'Esquema visual de los espacios abiertos y deportivos que impulsaron los logros estudiantiles en los Juegos Intercolegiados y los encuentros de la Jornada Sabatina.',
        yearOrPeriod: '1994 – 1996',
        source: 'Lámina ilustrativa basada en testimonios PRI-DOC-G03 y NUCPRI-DOC-G.14',
        isRealProjectAsset: false,
        assetTypeLabel: 'Lámina esquemática de referencia',
        sede: 'Sede Principal',
        alt: 'Ilustración de los corredores y patio central de la institución educativa',
      },
    ],
    documentarySources: [
      'Transcripciones de entrevistas: PRI-DOC-G03 (Luis Fernando Orozco), NUCPRI-DOC-G.14 (Isabel Cristina Álvarez Morales), EGME-PJAC-G.20 (Alexis Suárez) y AGR-EAMF-G18 (María Angélica Ramírez Ortiz).',
    ],
    preferredPosition: 'top',
  },
  {
    id: 'hito-1997-traslado-la-una',
    year: 1997,
    periodLabel: '1994 – 1997',
    shortTitle: 'Nuevos caminos',
    title: 'Nuevos caminos para aprender: edificación y traslado a la vereda La Una',
    category: 'Institución',
    sedes: ['Sede Principal'],
    verificationStatus: 'verificado',
    summary:
      'Ante el crecimiento de la población estudiantil, entre 1994 y septiembre de 1997 se gestiona y ocupa la nueva planta física de la Sede Principal en la vereda La Una, dotando al colegio de amplias zonas verdes, coliseo, laboratorios y granja.',
    fullDescription: [
      'Para comienzos de la década de 1990, la antigua sede ubicada en el sector central de La Virgen resultaba insuficiente para albergar a los cerca de 240 estudiantes de bachillerato. El plantel carecía de zonas recreativas, laboratorios, salas de cómputo y terrenos para prácticas agrícolas. En 1994 existían únicamente las primeras columnas levantadas en un lote enmontado en la vereda La Una.',
      'Gracias a la gestión del rector magíster Armando Hoyos Valencia, el Consejo Directivo, la Asociación de Padres de Familia liderada por doña Ana Rita Ramírez y la Alcaldía de Pereira (bajo la administración de Juan Manuel Arango y con cofinanciación de Findeter), la obra se concluyó en 1997.',
      'En septiembre de 1997 se produjo el histórico traslado: ante el llamado urgente de la Secretaría de Educación para ocupar de inmediato el nuevo plantel ("porque si ustedes no la toman, hay otra institución de Pereira que sí la toma"), los docentes y los propios estudiantes cargaron sus sillas y pupitres desde el colegio antiguo hasta la vereda La Una para estrenar la sede.',
      'El nuevo campus transformó la calidad educativa del corregimiento al ofrecer una planta amplia rodeada de naturaleza, con coliseo cubierto múltiple, dos canchas deportivas, laboratorios, salas de sistemas, restaurante escolar, sendero ecológico con guadual y espacio para la huerta y la granja agroecológica.',
    ],
    keyFacts: [
      '1994: Inicio de adecuaciones sobre la estructura inconclusa en el predio de la vereda La Una.',
      'Septiembre de 1997: Caminata de docentes y estudiantes con las sillas al hombro para ocupar y defender la nueva Sede Principal bajo la rectoría de Armando Hoyos Valencia.',
      'Ampliación sustancial de la infraestructura: paso de un local estrecho de 240 alumnos a un campus campestre con capacidad para más de 500 estudiantes en secundaria.',
      'Tensión en la memoria colectiva: mientras el registro docente fija el traslado en septiembre de 1997, varios relatos vecinales lo asocian directamente con el terremoto de enero de 1999 que agrietó la vieja sede.',
    ],
    testimonies: [
      {
        quote:
          'Cuando llegué en 1994 estaban solamente las columnas y el sitio abandonado en monte... En septiembre de 1997 nos dijeron: "hagan uso de la sede que luego la vamos dotando, porque si ustedes no la toman, otra institución la toma". ¿Qué hicimos nosotros? "Muchachos, tomen las sillas, vamos para el colegio y vamos a estrenar".',
        authorRole: 'Luis Fernando Orozco · Docente fundador del traslado a La Una',
        code: 'PRI-DOC-G03',
        sede: 'Sede Principal',
      },
      {
        quote:
          'Me gustaría dejar algo para que la gente sepa por dónde se empezó, que entienda que todo tuvo un inicio, que hubo gente que luchó por estar aquí, que luchó por que cada pared se sostuviera y estuviera para ellos.',
        authorRole: 'Juliana Franco · Estudiante de grado 11A e hija de egresado',
        code: 'PRI-EST-11A-G.06',
        sede: 'Sede Principal',
      },
    ],
    media: [
      PROJECT_ARCHIVE_MEDIA.sedePrincipalPanoramicaArcoiris,
      PROJECT_ARCHIVE_MEDIA.placaInauguracion1997,
      PROJECT_ARCHIVE_MEDIA.sedePrincipalColiseoKiosco,
      PROJECT_ARCHIVE_MEDIA.mapaAereoAltagracia,
      PROJECT_ARCHIVE_MEDIA.infografiaHitosOriginal,
      {
        id: 'media-1997-lamina',
        url: '/assets/ilustraciones/lamina-1997-traslado-la-una.svg',
        title: 'Lámina documental: Campus de la Sede Principal en la vereda La Una (1997)',
        caption:
          'Ilustración arquitectónica de los corredores en ladrillo, pórticos verdes y patio arbolado de la Sede Principal inaugurada en 1997 en la vereda La Una.',
        yearOrPeriod: 'Septiembre de 1997',
        source: 'Lámina ilustrativa basada en testimonios PRI-DOC-G03 y Marco Contextual PEI',
        isRealProjectAsset: false,
        assetTypeLabel: 'Lámina documental ilustrativa (basada en archivo oral)',
        sede: 'Sede Principal (Vereda La Una)',
        alt: 'Ilustración del patio central y corredores de la Sede Principal en la vereda La Una',
      },
    ],
    documentarySources: [
      'Anteproyecto de investigación UTP: "Hitos Históricos de las Sedes del Gonzalo Mejía Echeverry" (Gañán Morales, 2026, pp. 17–18).',
      'Transcripciones de entrevistas: PRI-DOC-G03 (Luis Fernando Orozco), NUC-MF-G.10 (Ana Rita Ramírez) y PRI-EST-11A-G.06 (Juliana Franco).',
    ],
    preferredPosition: 'bottom',
  },
  {
    id: 'hito-1999-terremoto-eje-cafetero',
    year: 1999,
    periodLabel: '25 de enero de 1999',
    shortTitle: 'Sismo y reconstrucción',
    title: '25 de enero de 1999: el terremoto del Eje Cafetero como bisagra histórica',
    category: 'Comunidad',
    sedes: ['Sede Principal', 'Sede El Núcleo', 'Sede Cañaveral', 'Sede Filobonito', 'Sede El Agrado'],
    verificationStatus: 'verificado',
    summary:
      'El sismo del 25 de enero de 1999 impacta severamente la infraestructura de las sedes —destruyendo la mitad del Núcleo Escolar y colapsando aulas en Cañaveral—, dando paso a la reconstrucción con el FOREC y la resiliencia comunitaria.',
    fullDescription: [
      'En la memoria colectiva del corregimiento de Altagracia, el terremoto del lunes 25 de enero de 1999 (1:19 p. m.) actúa como un punto de quiebre ontológico que reorganizó el espacio escolar y la vida comunitaria. Aquel lunes estaba previsto el regreso de los niños a clases, pero el viernes anterior los docentes del Núcleo habían acordado postergar el ingreso estudiantil, decisión providencial que evitó una tragedia humana.',
      'En la Sede Núcleo Escolar, mientras los maestros se encontraban reunidos en la cocina al mediodía, el sismo sacudió el tanque elevado de mil litros y derribó prácticamente la mitad de la planta física (el bloque antiguo de salones con jardines interiores y la vieja Aula Máxima). La posterior intervención del Fondo para la Reconstrucción del Eje Cafetero (FOREC) permitió levantar un bloque moderno con unidades sanitarias y restaurante escolar independiente.',
      'En la Sede Cañaveral, el movimiento telúrico destruyó la vieja edificación y obligó a su reconstrucción total, siendo posteriormente embellecida con los colores tradicionales campesinos. En la memoria de muchos habitantes del centro de Altagracia, las grietas que el sismo dejó en el antiguo local de La Virgen terminaron por sellar definitivamente el arraigo del colegio en la nueva sede de la vereda La Una.',
    ],
    keyFacts: [
      '25 de enero de 1999 (1:19 p. m.): El aplazamiento del ingreso de los estudiantes acordado el viernes previo salvó a los niños del colapso de las aulas en el Núcleo Escolar.',
      'Reconstrucción de la mitad de la Sede Núcleo con recursos del FOREC: nuevo bloque pedagógico, baterías sanitarias y restaurante escolar independiente.',
      'Colapso y reedificación completa de la Sede Cañaveral, pintada posteriormente con colores campesinos durante la rectoría de Luz Estela Gómez Avendaño.',
      'Hito de memoria colectiva (Halbwachs, 2004): el sismo funciona en los relatos vecinales como la marca temporal que divide el pasado antiguo y el presente de las sedes.',
    ],
    testimonies: [
      {
        quote:
          'La sede Núcleo ha tenido muchas transformaciones, no solamente por la fusión, sino por el terremoto que hubo, que fue de una magnitud muy grande y prácticamente la mitad de la sede quedó destruida. Se instaló prácticamente un bloque nuevo con unidades sanitarias y restaurante independiente.',
        authorRole: 'Docente de la Sede Núcleo · Relato en Capítulo 3',
        code: 'NUC-DOC-G.09 / NUCPRI-DOC-G.14',
        sede: 'Sede El Núcleo',
      },
      {
        quote:
          'El terremoto acabó la escuela de Cañaveral y la reconstruyeron muy hermosa. Cuando estuvo la rectora Luz Estela Gómez Avendaño la mandó a pintar con colores campesinos.',
        authorRole: 'Gloria Nenfer García · Docente de la Sede Cañaveral',
        code: 'CAÑ-DOC-12',
        sede: 'Sede Cañaveral',
      },
      {
        quote:
          'El 25 de enero de 1999 que hubo el terremoto, el colegio viejo quedó desquebrajado... porque la comunidad de Altagracia iba creciendo cada día más.',
        authorRole: 'Ana Rita Ramírez · Líder comunal e histórica madre de familia',
        code: 'NUC-MF-G.10 / APSPFSNP10',
        sede: 'Sede Principal',
      },
    ],
    media: [
      PROJECT_ARCHIVE_MEDIA.pancartaResilienciaTerremoto,
      PROJECT_ARCHIVE_MEDIA.sedeNucleoQuiosco,
      PROJECT_ARCHIVE_MEDIA.sedeCanaveralFachada,
      PROJECT_ARCHIVE_MEDIA.infografiaHitosOriginal,
      {
        id: 'media-1999-lamina',
        url: '/assets/ilustraciones/lamina-1999-sismo-reconstruccion.svg',
        title: 'Lámina documental: Impacto del sismo del 25 de enero de 1999 y reconstrucción escolar',
        caption:
          'Esquema visual comparativo del impacto estructural del terremoto de 1999 en las sedes de Altagracia y la modernización de bloques y comedores escolares con el FOREC.',
        yearOrPeriod: '25 de enero de 1999',
        source: 'Lámina ilustrativa basada en el Cap. 3 (3.2 Huellas del Tiempo) del Anteproyecto UTP',
        isRealProjectAsset: false,
        assetTypeLabel: 'Lámina documental ilustrativa (basada en archivo oral)',
        sede: 'Todas las sedes',
        alt: 'Ilustración comparativa de la afectación del sismo de 1999 y la reconstrucción de las escuelas rurales',
      },
    ],
    documentarySources: [
      'Anteproyecto de investigación UTP: Sección 3.2 "Huellas del Tiempo: El terremoto de 1999" (Gañán Morales, 2026, pp. 27–28).',
      'Transcripciones de entrevistas: NUC-DOC-G.09 (Milton Guillermo), NUCPRI-DOC-G.14 (Isabel Cristina Álvarez y Sandra Milena Segura), CAÑ-DOC-12 (Gloria Nenfer García) y NUC-MF-G.10 (Ana Rita Ramírez).',
    ],
    preferredPosition: 'top',
  },
  {
    id: 'hito-2002-fusion-sedes',
    year: 2002,
    periodLabel: '2002 – 2017',
    shortTitle: 'Fusión de las sedes',
    title: 'Una sola institución: fusión de las escuelas rurales, resistencia comunitaria y Cápsula del Tiempo',
    category: 'Institución',
    sedes: ['Sede Principal', 'Sede El Núcleo', 'Sede Filobonito', 'Sede El Agrado', 'Sede El Jazmín', 'Sede Cañaveral'],
    verificationStatus: 'verificado',
    summary:
      'En cumplimiento de la Ley 715 de 2001, las escuelas rurales independientes se integran gradualmente al colegio central Gonzalo Mejía Echeverry entre 2002 y 2017, en un proceso marcado por la defensa comunitaria de las sedes y la articulación de un PEI común.',
    fullDescription: [
      'A partir de la expedición de la Ley 715 de 2001, el Ministerio de Educación Nacional ordenó integrar las escuelas primarias rurales a los colegios centrales de bachillerato para conformar instituciones educativas unificadas. En Altagracia, este proceso transformó profundamente la administración y la vida cotidiana de las sedes veredales entre 2002 y 2017.',
      'El primer hito ocurrió en la Sede Núcleo Escolar en octubre de 2002. Dado que el Núcleo contaba con recursos propios de la Nación, director autónomo y Equipo de Campo, docentes y familias se movilizaron, recogieron firmas y acudieron a la Alcaldía y a la Secretaría de Educación, logrando detener la medida durante casi dos años antes de que la resolución oficial consumara la fusión.',
      'Posteriormente se integraron las demás escuelas bajo el modelo de Escuela Nueva: Filobonito hacia 2012 (donde en 2005 la comunidad ya había defendido exitosamente la permanencia de la docente Martha Montoya y donde luego se construyeron la sala de sistemas, el restaurante y la biblioteca escolar); El Agrado entre 2012 y 2013 (tras mesas de concertación lideradas por la presidenta de la JAC, María Angélica Ramírez, el rector don Uriel y las docentes para mantenerse unidos a Altagracia y no pasar a El Retiro); El Jazmín tras la pensión de su directora Lucilia; y Cañaveral hacia 2016–2017.',
      'En medio de esta etapa de articulación (2012–2013), durante las fiestas aniversarias del corregimiento, la comunidad educativa y los abuelos de las veredas depositaron cartas, fotografías y relatos en una "Cápsula del Tiempo" enterrada en la entrada de la Sede Principal, con el compromiso de ser abierta cincuenta años después (hacia 2062).',
    ],
    keyFacts: [
      'Octubre de 2002: Resolución de fusión del Núcleo Escolar con la Sede Principal tras movilización comunitaria de resistencia.',
      '2012 – 2013: Integración de las sedes Filobonito y El Agrado (vereda El Estanquillo) mediante acuerdos con las Juntas de Acción Comunal bajo la rectoría de don Uriel.',
      '2012 – 2013: Entierro de la Cápsula del Tiempo a la entrada de la Sede Principal con memorias y fotografías de los fundadores para ser abierta en 50 años.',
      '2015 – 2017: Culminación del proceso de unificación administrativa con la Sede Cañaveral y consolidación de un único Proyecto Educativo Institucional (PEI) para las 6 sedes activas.',
    ],
    testimonies: [
      {
        quote:
          'Al principio se hizo un documento para que no se hiciera la fusión y se logró parar como uno o dos años. Nos movimos, buscamos gente en Pereira y en la misma comunidad, se habló con la Secretaría y con el alcalde... Pero después llegó el papel diciendo que la institución estaba fusionada con el colegio Gonzalo Mejía Echeverry.',
        authorRole: 'Milton Guillermo · Docente de la Sede Núcleo (34+ años de servicio)',
        code: 'NUC-DOC-G.09 / DOCSN09',
        sede: 'Sede El Núcleo',
      },
      {
        quote:
          'Eso fue para el 2012–2013, cuando yo era presidenta de la Junta de Acción Comunal de la vereda El Estanquillo y estaba el rector don Uriel. Fue una responsabilidad muy grande tomar una sabia decisión en mesas de trabajo para nuestra comunidad y las futuras generaciones.',
        authorRole: 'María Angélica Ramírez Ortiz · Expresidenta de la JAC de El Estanquillo',
        code: 'AGR-EAMF-G18',
        sede: 'Sede El Agrado',
      },
    ],
    media: [
      PROJECT_ARCHIVE_MEDIA.vallaInstitucionalSedes,
      PROJECT_ARCHIVE_MEDIA.filobonitoIndependienteCarroza,
      PROJECT_ARCHIVE_MEDIA.filobonitoSemanaPazManos,
      PROJECT_ARCHIVE_MEDIA.mapaAereoAltagracia,
      PROJECT_ARCHIVE_MEDIA.infografiaHitosOriginal,
      {
        id: 'media-2002-lamina',
        url: '/assets/ilustraciones/lamina-2002-fusion-sedes.svg',
        title: 'Cartografía institucional: Articulación de las 6 sedes de la I.E. Gonzalo Mejía Echeverry',
        caption:
          'Diagrama esquemático de la red educativa conformada por la Sede Principal (Vereda La Una) y las cinco sedes de primaria anexas: El Núcleo, Filobonito, El Agrado, Cañaveral y El Jazmín.',
        yearOrPeriod: '2002 – 2017',
        source: 'Lámina cartográfica basada en Tabla 2 y Figura 1 del Anteproyecto UTP (2026)',
        isRealProjectAsset: false,
        assetTypeLabel: 'Lámina documental ilustrativa (cartografía de sedes)',
        sede: 'Las 6 sedes de la institución',
        alt: 'Diagrama de red que conecta la Sede Principal con las cinco sedes rurales del corregimiento de Altagracia',
      },
    ],
    documentarySources: [
      'Ley 715 de 2001 (Congreso de la República de Colombia) y Resoluciones de integración educativa (2002–2017).',
      'Anteproyecto de investigación UTP (Gañán Morales, 2026, pp. 19–24).',
      'Transcripciones de entrevistas: NUC-DOC-G.09 (Milton Guillermo), AGR-EAMF-G18 (María Angélica Ramírez Ortiz), FIL-DOC-G02 (Martha Cecilia Montoya) y CAÑ-DOC-12 (Gloria Nenfer García).',
    ],
    preferredPosition: 'bottom',
  },
  {
    id: 'hito-2024-agroecologia-memoria',
    year: 2025,
    periodLabel: '2015 – 2026',
    shortTitle: 'Miramos al futuro',
    title: 'Horizonte agroecológico, innovación rural y Tejido de Memoria Comunitaria',
    category: 'Logros',
    sedes: ['Sede Principal', 'Sede Cañaveral', 'Sede Filobonito', 'Sede El Jazmín', 'Sede El Núcleo', 'Sede El Agrado'],
    verificationStatus: 'verificado',
    summary:
      'Entre 2015 y 2026 la institución consolida su PEI Agroecológico y Sistema Agrocafetalero acompañado por la UTP, impulsa las Aulas Vivas, la energía solar, la inclusión educativa y el proyecto etnográfico de recuperación de su memoria histórica.',
    fullDescription: [
      'En la última década (2015–2026), la Institución Educativa Gonzalo Mejía Echeverry ha protagonizado una profunda renovación pedagógica, ambiental y tecnológica. Acompañada por la Universidad Tecnológica de Pereira (UTP) y el grupo Territorios de Paz, en 2024 reestructuró su Proyecto Educativo Institucional (PEI) para situar la Agroecología y el Sistema Agrocafetalero como eje transversal de las 13 áreas del conocimiento en las seis sedes, desde preescolar hasta la media técnica.',
      'Este enfoque florece en proyectos concretos: en la Sede Principal, la Escuela Audiovisual Agroecológica (liderada por los docentes Diana María Gil y Juan David Ramírez) integra fotografía de naturaleza, rescate de plantas medicinales y culinaria ancestral, mientras el campus suma paneles solares en el coliseo que alimentan un aula de ciencia con impresora 3D y tablero digital. En las sedes Cañaveral, Filobonito y El Jazmín destacan las "Aulas Vivas", la Biblioteca de Semillas, el Semillero de Hormigas, los Jardines y Hoteles de Polinizadores (junto a la fundación Ceiba Verde) y el cuaderno institucional "El Conejo Gonzalito".',
      'Asimismo, la institución ha fortalecido la inclusión educativa (atendiendo en El Jazmín y en la Jornada Sabatina a estudiantes en condición de discapacidad de la Fundación Renovar Ser), ha garantizado planta docente y mantenimiento completos desde el mes de enero, y ha reactivado con instrumentos nuevos su Banda Músico-Marcial y el tradicional Desfile de la Identidad en las fiestas de Altagracia.',
      'Como corolario de este proceso, entre 2025 y 2026 se desarrolla la investigación etnográfica "La Escuela como Tejido de Memoria Comunitaria" (Licenciatura en Etnoeducación UTP, realizada por Cristina Yaneth Gañán Morales bajo la asesoría de la Dra. Claudia Viviana Hurtado Loaiza), de la cual nace este archivo interactivo para preservar las voces de quienes han construido la escuela rural.',
    ],
    keyFacts: [
      '2024: Actualización oficial del PEI con enfoque en Agroecología y Sistema Agrocafetalero transversal a las 6 sedes, en alianza con la UTP.',
      '2024 – 2025: Creación de la Red de Huertas Escolares, Biblioteca de Semillas, Semillero de Hormigas, Jardines de Polinizadores (con Ceiba Verde) y la Escuela Audiovisual Agroecológica.',
      'Innovación e inclusión: aula con energía solar e impresora 3D en Sede Principal, repunte matricular e inclusión con la Fundación Renovar Ser en Sede El Jazmín.',
      '2026: Investigación "La Escuela como Tejido de Memoria Comunitaria" (Radicado UTP N.° 03 1857 del 9 de febrero de 2026) con más de 20 entrevistas en profundidad sede por sede.',
    ],
    testimonies: [
      {
        quote:
          'Comprender la historia nos ayuda a proyectar el futuro: volver a rescatar la identidad, las culturas y costumbres del territorio... comprender realmente quiénes somos y de dónde venimos para cuidar nuestra historia.',
        authorRole: 'Rector de la Institución Educativa Gonzalo Mejía Echeverry',
        code: 'RECGME15',
        sede: 'Dirección Institucional',
      },
      {
        quote:
          'Como hemos hablado, el enfoque es agroecológico; estamos muy acompañados por la Universidad Tecnológica de Pereira, los muchachos y maestros están contentos y todas las sedes hablamos el mismo idioma.',
        authorRole: 'Luis Fernando Orozco · Docente de la Sede Principal',
        code: 'PRI-DOC-G03',
        sede: 'Sede Principal',
      },
      {
        quote:
          'Sí me parece importante apropiarnos principalmente del territorio y también de la historia... conservar esos saberes ancestrales, porque es la memoria histórico-cultural de nuestros antepasados y de recordarnos a nosotros mismos.',
        authorRole: 'Victor Gonzales G. · Estudiante de grado 11A y líder estudiantil',
        code: 'PRI-EST-11A-G.07 / ESTSP11A07',
        sede: 'Sede Principal',
      },
    ],
    media: [
      PROJECT_ARCHIVE_MEDIA.muralMapaVerde,
      PROJECT_ARCHIVE_MEDIA.tallerJardinesPolinizadores,
      PROJECT_ARCHIVE_MEDIA.canaveralAulasVivasClase,
      PROJECT_ARCHIVE_MEDIA.nucleoHuertaEstudiantes,
      PROJECT_ARCHIVE_MEDIA.compostajeManosComunidad,
      PROJECT_ARCHIVE_MEDIA.filobonitoSenderoTapas,
      PROJECT_ARCHIVE_MEDIA.canaveralCompartirNatural,
      PROJECT_ARCHIVE_MEDIA.foroTerritoriosUtpCampesino,
      PROJECT_ARCHIVE_MEDIA.radicadoAnteproyectoUtp,
      PROJECT_ARCHIVE_MEDIA.mapaAereoAltagracia,
      PROJECT_ARCHIVE_MEDIA.infografiaHitosOriginal,
      {
        id: 'media-2025-lamina',
        url: '/assets/ilustraciones/lamina-2015-agroecologia-memoria.svg',
        title: 'Lámina documental: Ecosistema agroecológico, ciencia e investigación de memoria (2015–2026)',
        caption:
          'Síntesis visual de los tres pilares contemporáneos de la institución: el PEI Agroecológico ("Aulas Vivas"), la innovación e inclusión escolar y el Tejido de Memoria Comunitaria con la UTP.',
        yearOrPeriod: '2015 – 2026',
        source: 'Síntesis documental del Anteproyecto UTP y entrevistas 2025–2026',
        isRealProjectAsset: false,
        assetTypeLabel: 'Lámina documental ilustrativa (síntesis pedagógica)',
        sede: 'Todas las sedes',
        alt: 'Lámina con los tres pilares actuales: PEI Agroecológico, Innovación e Inclusión, y Tejido de Memoria',
      },
    ],
    documentarySources: [
      'Anteproyecto de investigación: "La Escuela como Tejido de Memoria Comunitaria en la Institución Educativa Gonzalo Mejía Echeverry del Corregimiento de Altagracia, Pereira" (Cristina Yaneth Gañán Morales; Asesora: Dra. Claudia Viviana Hurtado Loaiza, UTP, 9 de febrero de 2026).',
      'Proyecto Educativo Institucional (PEI) actualizado (Modalidad Agroecológica y Sistema Agrocafetalero, 2024).',
      'Transcripciones de entrevistas: RECGME15, PRI-DOC-G.13 (Diana María Gil), CAÑ-DOC-12 (Gloria Nenfer García), DOC-SJ-G21 (Marinella Grisales) y PRI-EST-11A-G.07 (Victor Gonzales G.).',
    ],
    preferredPosition: 'top',
  },
];

/**
 * Información estructurada de las 6 sedes que conforman la institución
 * (basada en la Tabla 2 del Anteproyecto UTP y las entrevistas de campo).
 * Cada sede cuenta con su fotografía real en alta definición.
 */
export const SEDES_DATA: SedeInfo[] = [
  {
    id: 'sede-principal',
    name: 'Sede Principal (Gonzalo Mejía Echeverry)',
    vereda: 'Vereda La Una',
    grades: 'Básica secundaria (6.° a 9.°), media técnica agropecuaria (10.° y 11.°) y Jornada Sabatina (Programa 3011)',
    model: 'Gradual tradicional con transversalidad agroecológica',
    creationYear: '1967 (Traslado a La Una en 1997)',
    image: '/assets/sedes/sede-principal.jpg',
    imageAlt: 'Vista panorámica elevada de la Sede Principal en la vereda La Una con arcoíris en el horizonte',
    description:
      'Centro administrativo y académico de secundaria y media del corregimiento. Fundada en 1967 en el casco central de Altagracia y trasladada en septiembre de 1997 a un amplio campus campestre en la vereda La Una.',
    highlights: [
      'Coliseo cubierto con paneles solares, aula con impresora 3D, laboratorios, dos canchas y sendero ecológico.',
      'Sede de la Escuela Audiovisual Agroecológica y de la Jornada Sabatina fundada hace 30 años.',
      'Custodia en su entrada la Cápsula del Tiempo enterrada con la comunidad entre 2012 y 2013.',
    ],
  },
  {
    id: 'sede-nucleo',
    name: 'Sede El Núcleo (Núcleo Escolar Altagracia)',
    vereda: 'Casco principal del corregimiento',
    grades: 'Preescolar y básica primaria (0.° a 5.°)',
    model: 'Gradual tradicional',
    creationYear: '19 de mayo de 1960 (Decreto 1240)',
    image: '/assets/sedes/sede-nucleo.jpg',
    imageAlt: 'Kiosco techado y jardines verdes de la Sede Núcleo Escolar Altagracia (Primaria)',
    description:
      'Creada oficialmente como escuela vocacional agrícola en 1960 sobre un predio adquirido en 1959. Durante más de cuatro décadas fue referente regional por su granja integral y su Equipo de Campo itinerante.',
    highlights: [
      'Uno de los tres núcleos escolares rurales históricos del departamento de Risaralda.',
      'Reconstruida parcialmente con apoyo del FOREC tras el sismo del 25 de enero de 1999.',
      'Fusionada administrativamente con la Sede Principal mediante resolución de octubre de 2002.',
    ],
  },
  {
    id: 'sede-canaveral',
    name: 'Sede Cañaveral',
    vereda: 'Vereda Cañaveral',
    grades: 'Preescolar y básica primaria',
    model: 'Escuela Nueva ("Aulas Vivas")',
    creationYear: 'Década de 1940* (más de 80 años)',
    image: '/assets/sedes/sede-canaveral.jpg',
    imageAlt: 'Corredor campesino y cancha múltiple de la Sede Cañaveral',
    description:
      'Levantada por la comunidad en lote donado por don Pedro Patiño mediante mingas, bazares y convites dominicales. Reconstruida tras el terremoto de 1999 y pintada con los colores tradicionales campesinos.',
    highlights: [
      'Cuenta con el Laboratorio y Biblioteca de Semillas más grande del corregimiento.',
      'Sede de Jardines y Hotel de Polinizadores (con Ceiba Verde) y del terrario "El Jardín de Salvador".',
      'Espacio de encuentro intergeneracional con el grupo de adultos mayores "Canitas Felices".',
    ],
  },
  {
    id: 'sede-filobonito',
    name: 'Sede Filobonito',
    vereda: 'Vereda Filobonito',
    grades: 'Preescolar y básica primaria',
    model: 'Escuela Nueva',
    creationYear: 'Década de 1960*',
    image: '/assets/sedes/sede-filobonito.jpg',
    imageAlt: 'Fachada con flores y cancha de la Sede Filobonito desde la carretera veredal',
    description:
      'Tras el riesgo de derrumbes en su primera casita de bahareque, don Pío Durán donó el predio actual donde el Comité de Cafeteros edificó la escuela en material. Se integró al colegio central hacia 2012.',
    highlights: [
      'Ampliada con restaurante escolar, sala de sistemas ("La Sala Mágica") y biblioteca gestionada por proyectos.',
      'Reconocida por sus tradicionales Novenas de Navidad comunitarias veredales desde 2004.',
      'Pionera en los jardines de flores que inspiraron el proyecto de polinizadores en las sedes.',
    ],
  },
  {
    id: 'sede-el-agrado',
    name: 'Sede El Agrado',
    vereda: 'Vereda El Estanquillo',
    grades: 'Preescolar, primera infancia y básica primaria',
    model: 'Escuela Nueva',
    creationYear: 'Hacia 1948*',
    image: '/assets/sedes/sede-el-agrado.jpg',
    imageAlt: 'Fachada en blanco y azul y cancha polideportiva de la Sede El Agrado en El Estanquillo',
    description:
      'La sede más distante del corregimiento. Nació en un terreno donado por la familia Rangel Trujillo, pasó por la finca prestada de don Orlando Díaz y doña Virginia, y fue edificada en ladrillo con el Comité de Cafeteros.',
    highlights: [
      'Marcada por la huella pedagógica de las docentes Amalia Rodríguez (1970–2012/2015) y Luz Alba Ríos.',
      'Cancha pavimentada, parque infantil y muro de contención levantado en convites nocturnos.',
      'Integrada a la I.E. Gonzalo Mejía Echeverry en 2012–2013 por decisión concertada de su comunidad.',
    ],
  },
  {
    id: 'sede-el-jazmin',
    name: 'Sede El Jazmín',
    vereda: 'Vereda El Jazmín',
    grades: 'Preescolar y básica primaria (con aula de inclusión)',
    model: 'Escuela Nueva e inclusión educativa',
    creationYear: 'c. 1965 – 1970* (Sin registro escrito en Tabla 2; en validación oral)',
    image: '/assets/sedes/sede-el-jazmin.jpg',
    imageAlt: 'Fachada en amarillo y azul, murales y cancha múltiple de la Sede El Jazmín',
    description:
      'Ubicada junto a la cancha de la vereda en un predio donado según la memoria oral por una familia residente en Estados Unidos. Llegó a contar con 250 alumnos bajo la dirección de la maestra Lucilia.',
    highlights: [
      'Cuna de la mascota y cuaderno agroecológico institucional "El Conejo Gonzalito".',
      'Ejemplo de educación inclusiva en articulación con los niños y jóvenes de la Fundación Renovar Ser.',
      'Crecimiento reciente de matrícula (de 7 a 35 estudiantes entre 2024 y 2025) y Semillero de Hormigas.',
    ],
  },
];
