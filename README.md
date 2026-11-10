# Memoria Institucional — Institución Educativa Gonzalo Mejía Echeverry

Aplicación web interactiva para la exploración de la memoria histórica, archivo oral y arqueología pedagógica de la **Institución Educativa Gonzalo Mejía Echeverry** (Corregimiento de Altagracia, Pereira, Risaralda).

Basada en la investigación etnográfica y documental del Anteproyecto de Grado en Etnoeducación y Desarrollo Comunitario (Facultad de Ciencias de la Educación, Universidad Tecnológica de Pereira - UTP), en diálogo con las memorias orales de fundadores, docentes, egresados y familias campesinas.

---

## 🏛️ Características Principales

1. **Línea de Tiempo Histórica Interactiva (1940 – 2026)**
   - Diseño editorial basado en colores de identidad institucional: marfil (`#F4EFE4`), verde oscuro (`#113826`) y dorado (`#C59B38`).
   - Navegación horizontal fluida con controles táctiles, ratón y teclado.
   - Filtros por categorías temáticas (*Institución*, *Comunidad*, *Logros*) y buscador instantáneo.
   - Panel de detalle y modal de lectura inmersiva con láminas históricas y fuentes documentales verificadas.

2. **Plano Vivo: Arqueología Pedagógica de las 15 Cuadras**
   - Exploración antes vs. después del predio de la Granja Vocacional del Núcleo Escolar (1959–1960).
   - Recorrido por las zonas históricas: Casa del Director, Establo y Vaquería, Huerta y Café Caturra, Huerto de Cítricos, Canchas y Concentración Escolar.
   - Reproducción de relatos orales vinculados directamente a cada coordenada del plano.

3. **Galería de Voces, Maestros y Líderes**
   - Catálogo interactivo de testimonios orales clasificados por categorías: *Fundación y Mingas*, *Núcleo Escolar y Granja*, *Vida Escolar y Docencia*, *Liderazgo Comunitario*.
   - Transcripciones textuales con citas textuales y contexto etnográfico.

4. **Reproductor de Audio Dock Sincronizado**
   - Mini reproductor flotante persistente con control de volumen, avance/retroceso rápido y marcas de tiempo (`mm:ss`).
   - Sincronización automática tanto desde los hitos de la línea de tiempo como desde el plano y la galería de voces.

---

## 🛠️ Tecnologías

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Servidor de Producción**: Nginx en Docker con proxy reverso Traefik y TLS Let's Encrypt

---

## 🚀 Instalación y Desarrollo Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/xFeDEV/HITOS-HIST-RICOS-Instituci-n-Educativa-Gonzalo-Mej-a-Echeverry.git
   cd HITOS-HIST-RICOS-Instituci-n-Educativa-Gonzalo-Mej-a-Echeverry
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

4. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Los archivos compilados quedarán en el directorio `dist/`.

---

## 📂 Estructura del Proyecto

```text
├── public/
│   └── assets/
│       ├── grabaciones/       # Archivo de audios orales de la investigación
│       └── img/               # Láminas ilustradas y logotipos institucionales
├── src/
│   ├── components/            # Componentes modulares de React
│   │   ├── AudioPlayerDock.tsx
│   │   ├── FullStoryModal.tsx
│   │   ├── Header.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── MilestoneDetailPanel.tsx
│   │   ├── PlanoVivoNucleoSection.tsx
│   │   ├── TimelineBar.tsx
│   │   ├── TimelineTrack.tsx
│   │   └── VocesMaestrosLideresSection.tsx
│   ├── data/                  # Fuentes de datos estructuradas
│   │   ├── milestones.ts      # Hitos históricos y fuentes documentales
│   │   └── voicesAndFarm.ts   # Catálogo de testimonios y zonas del predio
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── nginx.conf                 # Configuración de Nginx para producción
└── package.json
```

---

## 📜 Créditos y Agradecimientos

- **Institución Educativa Gonzalo Mejía Echeverry** — Corregimiento de Altagracia, Pereira, Risaralda.
- **Licenciatura en Etnoeducación y Desarrollo Comunitario** — Universidad Tecnológica de Pereira (UTP).
- **Comunidad de Altagracia**: Familias campesinas, docentes pioneros y egresados que compartieron sus memorias.
