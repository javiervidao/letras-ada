# Ada Mágica · versión 4

Juego de lectura en español para Ada. Publicación: https://ada.vidao.es/?version=4.1

## Documentación actual

- `AUDITORIA_UX_JUGABILIDAD.md`: diagnóstico, lista ordenada de 20 mejoras, criterios de aceptación y límites de validación.
- `REVISION_PALABRAS.md`: decisión editorial para las 222 entradas del catálogo.

## Ejecutar y comprobar

Desde esta carpeta, `python -m http.server 8765 --directory dist`. Abrir `http://localhost:8765`.

`node verify.mjs` ejecuta las pruebas de la aplicación actual y las regresiones de contenido. No ejecuta el motor antiguo `app.js`.

El modo inicial permite como máximo dos sílabas simples por palabra. Es independiente de la letra del colegio y de las estrellas. Se cambia en la zona de mayores. Las palabras sin imagen revisada nunca muestran un dibujo semántico. El micrófono es optativo.

## Fuentes activas

`curriculum.js` define las etapas; `learning.js` contiene el inventario original y las funciones lingüísticas básicas. `catalogue.js` es la única autoridad de selección, elegibilidad, progresión y validación de retos. `voice.js` gestiona locución y reconocimiento. `avatar.js` define personajes e historia; `rig.js` anima las ilustraciones mediante una malla 2D con reserva estática. `front.js` renderiza portada, selección, mapa y vestuario; `engine.js` gestiona la partida y ajustes. Los scripts auxiliares de migraciones anteriores son históricos y no deben volver a ejecutarse para construir la versión actual.

## Datos y límites

El progreso, las preferencias y un resumen limitado de práctica permanecen en este navegador. No se guardan grabaciones ni transcripciones ni se envía analítica a un servidor de la aplicación. El servicio de reconocimiento del navegador puede procesar audio cuando se activa voluntariamente.

La revisión automática y en Chrome no certifica el reconocimiento de los pictogramas por Ada ni la pronunciación de cada voz de Safari. La auditoría contiene una prueba breve para contrastarlo en su iPad. La animación es 2D, no un modelo 3D ni sincronización labial.
