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
        nota: "Tareas, Banco de ideas y Planificador de contenido.", guia: "guias/03-mi-ecosistema.html#apps" },
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
        nota: "Una carpeta con memoria: recuerda todos los cambios.", guia: "guias/01-git-basico.html#palabras" },
      { titulo: "Hacer mi primer commit en este repo", hecho: false,
        nota: "Escribe algo en diario.md y haz commit desde VS Code.", guia: "guias/01-git-basico.html#ejercicio-1" },
      { titulo: "Ver el historial de cambios", hecho: false,
        nota: "En VS Code: panel Source Control → apartado \"Graph\" o \"Timeline\".", guia: "guias/01-git-basico.html#ejercicio-3" },
      { titulo: "Subir este repo a GitHub (Publish)", hecho: false,
        nota: "Botón \"Publish Branch\" en VS Code.", guia: "guias/01-git-basico.html#ejercicio-2" },
      { titulo: "Entender qué es una rama", hecho: false,
        nota: "Un borrador de la web para probar sin romper nada.", guia: "guias/01-git-basico.html#palabras" }
    ]
  },
  {
    modulo: "3. Linear + GitHub",
    emoji: "🔗",
    pasos: [
      { titulo: "Conectar Linear con GitHub", hecho: false,
        nota: "Linear → Settings → Integrations → GitHub → repo presu_web.", guia: "guias/02-linear-github.html#conectar" },
      { titulo: "Crear una rama desde ANN-5", hecho: false,
        nota: "Cmd + Shift + . en Linear copia el nombre de la rama.", guia: "guias/02-linear-github.html#ejemplo" },
      { titulo: "Commit con el código de la tarea", hecho: false,
        nota: "Ej: \"ANN-5 El selector de idioma se abre al hacer clic\".", guia: "guias/02-linear-github.html#ejemplo" },
      { titulo: "Abrir mi primer Pull Request", hecho: false,
        nota: "En GitHub, con \"Fixes ANN-5\" en la descripción.", guia: "guias/02-linear-github.html#ejemplo" },
      { titulo: "Hacer merge y ver la tarea en Done", hecho: false,
        nota: "¡La tarea de Linear se cierra sola! 🎉", guia: "guias/02-linear-github.html#ejemplo" }
    ]
  },
  {
    modulo: "4. Mi rutina",
    emoji: "🔁",
    pasos: [
      { titulo: "Entender mi workflow", hecho: true,
        nota: "Las apps no se hablan solas: Claudia es el puente.", guia: "guias/04-mi-dia-a-dia.html#regla" },
      { titulo: "Abrir siempre la carpeta repos en VS Code", hecho: false,
        nota: "Así veo mis dos repos a la vez y Claudia tiene todas sus notas.", guia: "guias/04-mi-dia-a-dia.html#una-vez" },
      { titulo: "Pedirle a Claudia un cambio con una de las frases", hecho: false,
        nota: "Ej: \"Mueve Editar BTS al viernes\".", guia: "guias/04-mi-dia-a-dia.html#frases" },
      { titulo: "Cerrar una tarea en Linear y en Notion", hecho: false,
        nota: "Linear se cierra solo; en Notion marco \"Hecho\" (o se lo pido a Claudia).", guia: "guias/02-linear-github.html#ejemplo" },
      { titulo: "Escribir en mi diario 3 días seguidos", hecho: false,
        nota: "Unas líneas en diario.md + commit. ¡Práctica de Git sin darme cuenta!" },
      { titulo: "Terminar las 7 tareas del proyecto Web", hecho: false,
        nota: "Del ANN-5 al ANN-11.", guia: "guias/02-linear-github.html#tareas" }
    ]
  }
];

// 💬 SESIONES CON CLAUDIA
// Claudia añade una entrada cada vez que aprendemos o hacemos algo juntas.
// La más nueva va arriba del todo.
const SESIONES = [
  { fecha: "2026-10-07", titulo: "Mi workflow: cómo funciona todo junto",
    hicimos: ["Repasamos cómo uso Notion, Linear, VS Code, GitHub y Recordatorios cada día",
              "Creamos la guía 04 · Mi día a día, con frases para pedirle cosas a Claudia"],
    aprendi: "Mis apps no se sincronizan solas: cuando algo cambia, se lo digo a Claudia y ella lo actualiza en todos los sitios. Solo GitHub → Linear funciona solo (con \"Fixes ANN-5\")." },
  { fecha: "2026-10-07", titulo: "Mis guías ahora son páginas web",
    hicimos: ["Convertimos las 3 guías de Markdown (.md) a páginas web (.html)",
              "Cada paso de mi progreso tiene un link \"Ver guía →\" que lleva justo a su apartado",
              "Pusimos el diseño en un archivo compartido (estilo.css) para que todas las páginas se vean igual"],
    aprendi: "Una web puede tener varias páginas enlazadas con links. Con #nombre al final de un link (ej. #ejercicio-1) saltas directa a una parte de la página." },
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
  { palabra: "CLAUDE.md", significado: "Un archivo de instrucciones que Claudia lee siempre al empezar a hablar contigo." },
  { palabra: "Markdown (.md)", significado: "Texto con formato sencillo (# para títulos, - para listas). Se lee bien en VS Code, pero no es una web." },
  { palabra: "HTML (.html)", significado: "El idioma de las páginas web: dice qué hay en la página (títulos, textos, links…)." },
  { palabra: "CSS (.css)", significado: "El “vestido” de la web: colores, letras y espacios. Un solo archivo puede vestir muchas páginas." },
  { palabra: "Workflow", significado: "Tu forma de trabajar paso a paso: qué haces, en qué orden y con qué herramienta." },
  { palabra: "Sincronizar", significado: "Que dos apps tengan la misma información. Las mías no lo hacen solas: lo hace Claudia." },
  { palabra: "Link con # (ancla)", significado: "Un link que salta a una parte concreta de una página, como guia.html#ejercicio-1." }
];
