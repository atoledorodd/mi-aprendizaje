// 📈 MI PROGRESO
// Este archivo es la "memoria" de la web.
// Cuando termines un paso, cambia  hecho: false  por  hecho: true
// guarda (Cmd + S), haz commit… ¡y la web se actualiza sola!
// (O dile a Claudia: "marca como hecho el paso X")

const PROGRESO = [
  {
    modulo: "1. Mis herramientas",
    emoji: "🧰",
    pasos: [
      { titulo: "Instalar VS Code", hecho: true,
        nota: "El programa donde escribo y cambio el código." },
      { titulo: "Tener cuenta de GitHub", hecho: true,
        nota: "Mi usuario: atoledorodd. GitHub guarda mi código en internet." },
      { titulo: "Tener mi primer repo: presu_web", hecho: true,
        nota: "El código de mi web, en mi Mac y en GitHub." },
      { titulo: "Montar \"Mi asistente\" en Notion", hecho: true,
        nota: "Tareas, Banco de ideas y Planificador de contenido." },
      { titulo: "Avisos en Recordatorios del Mac", hecho: true,
        nota: "Lista \"Mi asistente\". No se sincroniza sola con Notion." },
      { titulo: "Conectar Linear con Claudia", hecho: true,
        nota: "Claudia puede crear y leer mis tareas de Linear." },
      { titulo: "Crear el proyecto \"Web\" en Linear", hecho: true,
        nota: "7 tareas (ANN-5 a ANN-11), enlazadas con Notion." },
      { titulo: "Que Claudia actualice esta web cuando aprendemos", hecho: true,
        nota: "Guardado en ~/.claude/CLAUDE.md: se acuerda en cualquier carpeta." }
    ]
  },
  {
    modulo: "2. Git básico",
    emoji: "🌱",
    pasos: [
      { titulo: "Entender qué es un repo", hecho: false,
        nota: "Una carpeta con memoria: recuerda todos los cambios. Guía 01." },
      { titulo: "Hacer mi primer commit en este repo", hecho: false,
        nota: "Escribe algo en diario.md y haz commit desde VS Code. Guía 01." },
      { titulo: "Ver el historial de cambios", hecho: false,
        nota: "En VS Code: panel Source Control → apartado \"Graph\" o \"Timeline\"." },
      { titulo: "Subir este repo a GitHub (Publish)", hecho: false,
        nota: "Botón \"Publish Branch\" en VS Code. Guía 01." },
      { titulo: "Entender qué es una rama", hecho: false,
        nota: "Un borrador de la web para probar sin romper nada. Guía 01." }
    ]
  },
  {
    modulo: "3. Linear + GitHub",
    emoji: "🔗",
    pasos: [
      { titulo: "Conectar Linear con GitHub", hecho: false,
        nota: "Linear → Settings → Integrations → GitHub → repo presu_web. Guía 02." },
      { titulo: "Crear una rama desde ANN-5", hecho: false,
        nota: "Cmd + Shift + . en Linear copia el nombre de la rama." },
      { titulo: "Commit con el código de la tarea", hecho: false,
        nota: "Ej: \"ANN-5 El selector de idioma se abre al hacer clic\"." },
      { titulo: "Abrir mi primer Pull Request", hecho: false,
        nota: "En GitHub, con \"Fixes ANN-5\" en la descripción." },
      { titulo: "Hacer merge y ver la tarea en Done", hecho: false,
        nota: "¡La tarea de Linear se cierra sola! 🎉" }
    ]
  },
  {
    modulo: "4. Mi rutina",
    emoji: "🔁",
    pasos: [
      { titulo: "Cerrar una tarea en Linear y en Notion", hecho: false,
        nota: "Linear se cierra solo; en Notion marco \"Hecho\" (o se lo pido a Claudia)." },
      { titulo: "Escribir en mi diario 3 días seguidos", hecho: false,
        nota: "Unas líneas en diario.md + commit. ¡Práctica de Git sin darme cuenta!" },
      { titulo: "Terminar las 7 tareas del proyecto Web", hecho: false,
        nota: "Del ANN-5 al ANN-11." }
    ]
  }
];

// 💬 SESIONES CON CLAUDIA
// Claudia añade una entrada cada vez que aprendemos o hacemos algo juntas.
// La más nueva va arriba del todo.
const SESIONES = [
  { fecha: "2026-10-07", titulo: "Mi web de aprendizaje se actualiza sola",
    hicimos: ["Le pedí a Claudia que actualice esta web cada vez que hablamos",
              "Claudia lo guardó en sus instrucciones generales (~/.claude/CLAUDE.md), así se acuerda en cualquier carpeta",
              "Añadimos esta sección de sesiones y un diccionario que crece"],
    aprendi: "Claudia puede tener instrucciones permanentes: un archivo CLAUDE.md que lee siempre al empezar." },
  { fecha: "2026-10-07", titulo: "Creamos mi repo de aprendizaje",
    hicimos: ["Creamos la carpeta mi-aprendizaje con esta web, guías y diario",
              "La convertimos en un repo de Git (git init) con un primer commit"],
    aprendi: "Un repo puede estar solo en mi Mac; subirlo a GitHub es otro paso (Publish)." },
  { fecha: "2026-10-07", titulo: "Linear conectado con Notion",
    hicimos: ["Comprobamos que Claudia tiene acceso a Linear",
              "Creamos el proyecto Web con 7 tareas (ANN-5 a ANN-11)",
              "Enlazamos cada tarea de Notion con su tarea de Linear (en Notas)"],
    aprendi: "Linear es para la web y Notion para el contenido y el día a día. Una tarea de Linear se puede cerrar sola con \"Fixes ANN-5\" al hacer merge." },
  { fecha: "2026-10-07", titulo: "Mi asistente en Notion + Recordatorios",
    hicimos: ["Montamos la página \"Mi asistente\" con la base de datos Tareas y el Banco de ideas",
              "Pusimos avisos en Recordatorios del Mac"],
    aprendi: "Notion y Recordatorios no se sincronizan solos: si cambia una fecha, hay que cambiarla en los dos." }
];

// 📖 DICCIONARIO
// Claudia añade aquí cada palabra nueva que aparece en nuestras sesiones.
const DICCIONARIO = [
  { palabra: "Repo (repositorio)", significado: "Una carpeta con memoria: guarda todos los cambios que haces." },
  { palabra: "Commit", significado: "Una “foto” de tus cambios con un mensaje que explica qué hiciste." },
  { palabra: "Rama (branch)", significado: "Un borrador para probar cosas sin tocar la versión buena (main)." },
  { palabra: "Push / Sync", significado: "Subir tus commits a GitHub (y bajar los que haya allí)." },
  { palabra: "Pull Request (PR)", significado: "Pedir “mezcla mi borrador con la versión buena”." },
  { palabra: "Merge", significado: "Mezclar de verdad: tus cambios entran en main." },
  { palabra: "Issue (Linear)", significado: "Una tarea, con un código como ANN-5." },
  { palabra: "git init", significado: "Convertir una carpeta normal en un repo de Git." },
  { palabra: "MCP", significado: "Un “enchufe” que conecta a Claudia con otras apps (Notion, Linear…)." },
  { palabra: "CLAUDE.md", significado: "Un archivo de instrucciones que Claudia lee siempre al empezar a hablar contigo." }
];
