# Auditoría de Ada Mágica: experiencia para una niña de cinco años

## Dictamen

La versión anterior era una colección de ejercicios con presentación de aventura. No estaba lista para ofrecer autonomía fiable a Ada. Los fallos de vocabulario, imágenes y progresión eran bloqueos de aprendizaje, por delante del acabado visual. Que un ejercicio se renderizara sin errores no significaba que su contenido fuera correcto.

**Alcance real de esta revisión:** inspección del código y del catálogo completo, reproducción de los errores aportados por el usuario, comprobaciones automáticas de generación/guardado y recorrido manual en el navegador. No se ha realizado una prueba observacional con Ada ni una evaluación pedagógica profesional. La voz y los pictogramas también dependen del dispositivo.

## Lista de desarrollo, en orden de ejecución

| Orden | Prioridad | Problema observado | Desarrollo aplicado | Criterio de aceptación |
|---|---|---|---|---|
| 1 | Crítica | Pipa/lupa, mesa/silla, puma/leopardo, falda/vestido y otras asociaciones falsas | Catálogo cerrado; imagen aprobada por palabra; retirada del resto de asociaciones. Mesa sigue solo en lectura/escucha. | Ningún reto usa un dibujo fuera de su ficha; pipa queda excluida. |
| 2 | Crítica | Aparecen palabras de tres sílabas al practicar dos | Límite explícito de dos sílabas por defecto, independiente de la letra o las estrellas. Filtro para objetivos, distractores y restauración. | Tomate no aparece en el nivel de dos sílabas, aunque se conozcan todas sus letras. |
| 3 | Crítica | Se mezclan estructuras demasiado pronto | Modo inicial de sílabas simples; grupos consonánticos y sílabas cerradas requieren cambio por un mayor. | Aprender P no introduce automáticamente palabras con grupos o sílabas cerradas. |
| 4 | Crítica | Se inventan ap/ep/ip/op/up, am/em/im/om/um por inversión automática | Listas revisadas por letra. Inversas fuera del modo inicial; solo al/el optativas en L avanzada. | No se generan up/op/um/im/om. |
| 5 | Crítica | El sintetizador deletrea sílabas; voz masculina con redacción femenina | Contextos separados para nombres de letras, sílabas y palabras; forma de locución acentuada para las sílabas CV; prioridad a voces femeninas identificables y redacción neutra alternativa. | La forma escrita sigue siendo «ma» y la forma de síntesis es «má», no «eme, a». La verificación auditiva final debe hacerse en el dispositivo. |
| 6 | Crítica | Una partida guardada puede recuperar un ejercicio ahora prohibido o datos manipulados | Validación contra el catálogo actual, números finitos, opciones canónicas, secuencias y sílabas ya colocadas; escape de texto al renderizar. | Un reto antiguo de pipa o tomate con límite 2 se descarta sin borrar las estrellas. |
| 7 | Alta | El micro puede bloquear la sesión y exigir ayuda adulta a mitad del juego | Solo se ofrece lectura con micro si fue habilitado; alternativa táctil permanente; cambio a sílabas tras errores técnicos. | Se pueden terminar misiones completas sin reconocimiento de voz. |
| 8 | Alta | Demasiadas ayudas pequeñas compiten con las respuestas | Una ayuda grande; modelo contextual y pulsación para repetir. Retirada de la fila de hasta once referencias. | La tarea principal y la ayuda son distinguibles; no se exige leer instrucciones largas. |
| 9 | Alta | No existe una demostración de cada dinámica | Primer encuentro con modelo visible/realce y explicación breve; primera imagen presenta su nombre. | La niña puede ver qué hacer antes de ser evaluada; el resultado con modelo no cuenta como dominio independiente. |
| 10 | Alta | Repetir el error no enseña una estrategia | A los dos errores se muestra un modelo, se reducen distractores y se baja la dificultad siguiente; no se descuentan estrellas. | Existe una salida comprensible sin acertar por cansancio ni castigo. |
| 11 | Alta | Se avanza de letra solo por completar tres misiones | Evidencias locales de respuestas independientes, variedad de objetivos y tipos; las ayudas no suman dominio. | Tres misiones ayudadas no adelantan la letra. El adulto puede fijar la letra del colegio. |
| 12 | Alta | Las cinco tareas son casi siempre iguales | Rotación de siete dinámicas: escuchar, emparejar, construir, dibujo, buscar letras, secuencia musical y lectura optativa. El catálogo y nivel prevalecen sobre la variedad. | Si no hay dibujos válidos suficientes, se usa otra dinámica, nunca un dibujo inventado. |
| 13 | Alta | La historia no cambia por jugar | Cinco retos recuperan cinco notas; el progreso se representa en la misión y termina con el unicornio y una canción más. | La misión tiene principio, progreso y final visibles. |
| 14 | Alta | La app encadena retos y misiones sin un descanso real | Avance automático entre retos; pantalla de cierre al terminar cinco. Elección explícita de otra misión o descanso; pausa conserva el reto. | No empieza otra misión por sí sola. Cada tres misiones se ofrece descansar sin presión. |
| 15 | Alta | Empezar/continuar obliga a volver a una pantalla intermedia | Continuar recupera directamente un reto válido; si la misión terminó, muestra su cierre. Elección de guerrera y vestuario conservan el progreso. | No se pierde una palabra a medio construir ni se repite innecesariamente el prólogo. |
| 16 | Media | Poco movimiento del personaje; los complementos flotaban | Vestuarios completos ya integrados y animación con malla 2D continua: cabeza, brazos, pelo, piernas y alas; estados de saludo, escucha, acierto y celebración. Se mantienen transformaciones y entradas. | Sin piezas SVG pegadas al cuerpo; canvas animado operativo cuando hay WebGL, imagen de reserva si no. No se presenta como modelo 3D o sincronización labial. |
| 17 | Media | Audio y animación pueden continuar al salir o tocar rápido | Cancelación por cambio de pantalla, visibilidad y sesión; protección contra doble premio; ritmo breve entre aciertos. | Salir durante una celebración no duplica estrellas ni reabre un reto abandonado. |
| 18 | Media | Objetivos táctiles pequeños, distracciones y movimientos obligatorios | Controles principales de 52–68 px o mayores, opciones separadas, actor compacto en pantallas pequeñas, foco visible y modo de movimiento reducido. | Los controles siguen siendo usables sin precisión fina; ninguna tarea requiere arrastrar o responder contra reloj. |
| 19 | Media | El guardado parece funcionar siempre y el modo sin conexión depende de todos los trajes | Aviso de fallo real de guardado; caché esencial separado de vestuarios opcionales; imagen base de reserva si no se pudo descargar un traje. | Un traje que falle no cancela el caché esencial. No se promete guardado si el navegador lo rechaza. |
| 20 | Media | No se puede saber si aprende o solo recibe ayuda | Resumen local para mayores: aciertos independientes/ayudados e intentos por letra; límite de sílabas y estructura configurable. | Sin audio, transcripciones, analítica externa, penalizaciones ni marcadores competitivos. |

Los puntos anteriores son desarrollos de esta entrega. Los criterios automatizables se comprueban en `verify-adventure.mjs` y `check-catalogue.mjs`; la revisión visual y del motor de animación requiere además el navegador. La validación con una niña real queda expresamente fuera de lo que puede certificarse desde el código.

## Revisión de contenido

El inventario completo está en **REVISION_PALABRAS.md**. Incluye 222 entradas únicas del catálogo original y las incorporaciones revisadas: 67 con imagen aprobada editorialmente, 63 de lectura sin dibujo semántico y 92 excluidas. No todas entran en el modo inicial: también deben superar el filtro de letras conocidas, dos sílabas y estructura simple.

Se prioriza el vocabulario familiar en español de España. Una imagen figurativa no se trata como definición suficiente de un concepto abstracto. No se usan dibujos de una parte, un contenedor u otro objeto como equivalencia automática del objetivo. En el primer encuentro con un dibujo nuevo se presenta su nombre y ese acierto se registra como acompañado.

Los pictogramas del sistema pueden variar. Para validar el reconocimiento real, un mayor debe mostrar el dibujo sin decir la palabra y anotar cómo lo nombra Ada. Si no lo identifica o lo nombra como otro objeto, se retira de las preguntas de imagen; no se atribuye el fallo a la niña. No se ha realizado todavía esa prueba.

## Prueba observacional pendiente con Ada

### Recorrido ya comprobado en Chrome

- Misión de cinco retos terminada enteramente sin micrófono; pantalla final con elección explícita y sin arranque automático de la siguiente.
- Entrega y colocación del vestuario de las estrellas al llegar a tres estrellas.
- Malla 2D activa con fotogramas renderizados en el personaje y el vestuario equipado.
- Ajustes de P, dos sílabas y estructura simple; escucha con opciones «pa/pu».
- Construcción de «pe·lo» sin un dibujo semántico inventado. Recarga tras colocar «pe»: la partida recuperó «pe» colocado, «lo» pendiente y las mismas estrellas.
- Reto de imagen «lupa» con una lupa y una ola como opciones; no se recuperó la asociación falsa de «pipa». Las opciones, la palabra y su modelo coincidían en la web publicada.
- La revisión manual detectó y corrigió dos detalles adicionales: mantener las cinco notas visibles al cerrar una misión y limpiar el cierre pendiente al cambiar la letra en ajustes.

### Prueba pendiente en su dispositivo

1. Abrir el juego sin explicar los botones y observar si encuentra cómo empezar y elegir guerrera.
2. Completar una misión de L/P/M, con máximo dos sílabas y sin micrófono. Observar dónde pide ayuda o toca por ensayo.
3. Nombrar los dibujos presentes antes de leer. Retirar cualquier dibujo que no reconozca.
4. Escuchar las cinco sílabas de la letra con la voz seleccionada y confirmar que no las deletrea.
5. Pausar a mitad de una palabra, cerrar la app y volver. Comprobar recuperación del reto y sílabas colocadas.
6. Probar la celebración y el vestuario con movimiento reducido y después en modo normal.
7. Terminar la misión y comprobar si comprende la elección entre continuar y descansar.

Registrar observaciones concretas y cambios necesarios, sin usar el número de estrellas como medida de aprendizaje ni convertir la prueba en un examen.

## Referencias de diseño

- [W3C: tamaño de objetivos táctiles](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced/): referencia accesible de 44 px; esta interfaz usa tamaños mayores en los controles principales. No es una certificación global de conformidad.
- [UNICEF: RITEC](https://www.unicef.org/innovation/responsible-innovation-technology-children-ritec): agencia infantil, bienestar y juego. Las decisiones concretas de esta auditoría siguen siendo hipótesis de diseño hasta observar su uso con Ada.
