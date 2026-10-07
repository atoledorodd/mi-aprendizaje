# 01 · Git básico 🌱

## Las palabras clave

- **Repo (repositorio):** una carpeta con memoria. Recuerda cada cambio que guardas.
- **Commit:** una "foto" de tus cambios, con un mensaje que dice qué hiciste.
- **Rama (branch):** un borrador. Pruebas cosas sin tocar la versión buena, que se llama `main`.
- **Push / Sync:** subir tus commits a GitHub (y bajar lo que haya allí).
- **GitHub:** la "nube" donde viven tus repos. Git funciona en tu Mac, GitHub en internet.

## Ejercicio 1: tu primer commit (aquí mismo)

1. En VS Code: **File → Open Folder…** y elige `repos/mi-aprendizaje`.
2. Abre `diario.md` y escribe unas líneas con la fecha de hoy. Guarda con **Cmd + S**.
3. A la izquierda, pulsa el icono de las **ramitas** (Source Control). Verás `diario.md` con una **M** (modificado).
4. Arriba, escribe un mensaje, por ejemplo: `Mi primera entrada en el diario`.
5. Pulsa **Commit**. ¡Hecho! 🎉
6. Abre `progreso.js`, cambia `hecho: false` por `hecho: true` en "Hacer mi primer commit en este repo", guarda y haz otro commit.

## Ejercicio 2: subir este repo a GitHub

1. En el panel Source Control, pulsa **Publish Branch**.
2. VS Code te pregunta si lo quieres **privado** o **público**. Para tu diario, mejor **privado**.
3. Cuando acabe, lo verás en github.com/atoledorodd.

A partir de ahí, después de cada commit pulsa **Sync Changes** para subirlo.

## Ejercicio 3: ver tu historial

En Source Control, abajo, abre el apartado **Graph** (o en el Explorador, **Timeline**). Verás todas tus "fotos", de la más nueva a la más antigua.

## Si algo sale mal

- **"Please tell me who you are"**: Git no sabe tu nombre. Pídele a Claudia que lo configure.
- **¿Cambié algo sin querer y aún no hice commit?** En Source Control, pasa el ratón por encima del archivo y pulsa la flecha ↩️ (**Discard Changes**). Ojo: borra esos cambios.
- **¿Dudas?** Pregunta a Claudia. Para eso está 😊
