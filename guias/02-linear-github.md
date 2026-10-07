# 02 · Una tarea de Linear, de principio a fin 🔗

## Paso 0: conectar Linear con GitHub (solo una vez)

1. Linear → **Settings** → **Integrations** → **GitHub**.
2. **Connect** → inicia sesión en GitHub.
3. Da acceso al repo **presu_web**.
4. En Settings → tu equipo → **Workflow**, comprueba que esté *"PR merged → Done"*.

## Ejemplo con ANN-5: selector de idioma

| Paso | Dónde | Qué hago |
|---|---|---|
| 1. Rama | Linear | Abro ANN-5 y pulso **Cmd + Shift + .** para copiar el nombre de la rama. |
| | VS Code | Clic abajo a la izquierda en `main` → **Create new branch…** → pego → Enter. |
| 2. Cambios | VS Code | Cambio el código y guardo (**Cmd + S**). |
| 3. Commit | VS Code | Source Control → mensaje `ANN-5 El selector se abre al hacer clic` → **Commit** → **Publish Branch**. |
| 4. Pull Request | GitHub | **Compare & pull request** → en la descripción escribo `Fixes ANN-5` → **Create**. Linear la pasa a *In Progress*. |
| 5. Merge | GitHub | **Merge pull request**. Linear la pasa a **Done** 🎉 |
| 6. Volver | VS Code | Cambio a la rama `main` y pulso **Sync** para traer el cambio. |
| 7. Notion | Notion | Marco "Hecho" (o le pido a Claudia que lo haga). |

## Palabras mágicas

En la descripción del PR (o en un commit), estas palabras cierran la tarea al hacer merge:
`Fixes ANN-5` · `Closes ANN-5` · `Resolves ANN-5`

Si solo escribes `ANN-5` (sin la palabra), la tarea queda **enlazada** pero no se cierra.

## Mis tareas de la web

| Código | Tarea | Fecha |
|---|---|---|
| ANN-11 | Hacer presupuestos de precios (UGC, webs...) | 8 oct |
| ANN-5 | Selector de idioma que se abra al hacer clic | 13 oct |
| ANN-6 | Que el idioma elegido se mantenga al navegar | 13 oct |
| ANN-7 | Añadir catalán y francés | 14 oct |
| ANN-8 | Asesorías como "próximamente" y ocultar el resto | 14 oct |
| ANN-9 | Vídeo resumen al inicio de proyectos | 15 oct |
| ANN-10 | Definir las asesorías | 16 oct |

Proyecto en Linear: https://linear.app/annatoledorodd/project/web-d24eb48d4e38
