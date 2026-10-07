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
        nota: "7 tareas (ANN-5 a ANN-11), enlazadas con Notion." }
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
