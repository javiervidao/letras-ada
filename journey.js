'use strict';

// Cada escena deja preparado el lugar donde comienza la siguiente.
const JOURNEY = [
  ['La caja de música','Esta noche hay concierto, pero la caja de música ha perdido su luz. Toca la caja.','🎁','Ariel, la sirena, te llama desde su concha. Toca la concha para escucharla.','Las luces encienden el sendero del bosque. Ariel nos espera en el río.','🕯️'],
  ['La linterna del bosque','El unicornio ve un sendero oscuro. Toca la linterna para saber adónde lleva.','🏮','La linterna parpadea. La letra ele puede encenderla.','Vemos un puente sobre el río.','🏮'],
  ['El puente de Ariel','Al puente le faltan tablas. Toca la tabla que flota junto al unicornio.','🪵','Ariel sale del agua para ayudarte. Toca su concha.','Ariel empuja la última tabla. Cruzamos el puente y llegamos al molino.','🌉'],
  ['El molino dormido','Las aspas no se mueven. Toca el molino y escucha.','🌬️','El molino necesita nuestra voz para girar.','Al girar, el molino descubre una senda de flores.','🌬️'],
  ['Las flores que susurran','Una flor se mueve. Tócala con cuidado.','🌼','Las flores conocen el camino, pero sus pistas están mezcladas.','Las flores dibujan una flecha hacia la estación.','🌼'],
  ['El tren pequeño','Un tren espera en la estación. Toca la campana.','🚂','El maquinista necesita leer las señales para arrancar.','El tren nos deja junto a un árbol lleno de nidos.','🚂'],
  ['El nido en la rama','Un pajarito busca su nido. Toca el nido.','🪺','Hay pistas entre las ramas. Vamos a leerlas.','El pájaro encuentra su nido y señala la casa del río.','🪺'],
  ['La puerta de la casa','Desde dentro alguien quiere ayudarnos. Toca la puerta.','🚪','La puerta se abre al leer sus señales.','La dueña nos presta una barca para cruzar.','🚪'],
  ['La barca de Ariel','La barca de Ariel está atada al muelle. Toca la barca.','🛶','Ariel se asoma junto al muelle. Toca su concha.','Ariel guía la barca hasta la otra orilla. Allí encontramos una vela caída.','🛶'],
  ['La vela azul','El viento se llevó la vela de un barco. Tócala para recogerla.','⛵','Vamos a separar las pistas de la vela para devolverla.','El barco nos lleva hasta una torre.','⛵'],
  ['La torre del perro','Un perro ladra desde la torre. Toca la campana de abajo.','🔔','El perro espera que leamos las pistas de doble erre.','El perro baja y nos muestra una huella.','🔔'],
  ['La huella del loro','Junto a la huella hay una pluma. Tócala.','🪶','Las pistas con erre suave dicen de quién es la pluma.','El loro se posa sobre la roca y nos señala un camino.','🪶'],
  ['El camino de las rocas','Hay una roca que se puede mover. Tócala.','🪨','Las señales con erre inicial nos ayudan a pasar.','Detrás de la roca brilla un farol.','🪨'],
  ['El farol de la foca','Una foca quiere encontrar su farol. Toca la luz.','🦭','Leamos las pistas para llevarle el farol.','La foca nos guía por la costa hasta una casa.','🦭'],
  ['La casa de la costa','La ventana se abre con un golpecito. Tócala.','🏠','Dentro hay pistas para llegar al cumpleaños del castillo.','Desde la ventana vemos dónde preparan la merienda.','🏠'],
  ['La cesta de la merienda','Han dejado una cesta para el viaje. Toca la tapa.','🧺','Vamos a leer las señales de la cesta para repartir la merienda.','Nos dan un mapa para llegar al jardín.','🧺'],
  ['El jardín del koala','El koala se ha quedado dormido sobre el mapa. Toca la hoja.','🍃','El mapa tiene señales con la letra ka.','El koala despierta y nos enseña un lazo rojo.','🐨'],
  ['El lazo rojo','Un lazo rojo marca la entrada del jardín. Tócalo.','🎀','Leamos para saber a qué camino pertenece.','El lazo nos lleva a la jirafa.','🎀'],
  ['La jirafa y el cartel','La jirafa ve un cartel muy alto. Toca su estrella.','⭐','La jirafa baja el cartel para que puedas leer.','El cartel señala la colina del gato.','🦒'],
  ['El gato en la colina','El gato está sentado sobre una piedra que brilla. Tócala.','🪨','El gato deja leer las pistas grabadas en la piedra.','La piedra abre el camino a una cueva de gemas.','🐈'],
  ['La cueva brillante','Una gema ilumina la entrada. Tócala.','💎','Las pistas de ge y gi nos dicen por dónde salir.','Al salir, vemos una montaña que parece de colores.','💎'],
  ['La montaña de colores','Hay una bandera a media altura. Tócala para desplegarla.','🚩','La bandera nos enseña las señales para subir.','Desde arriba vemos el coche de las guardianas.','🏔️'],
  ['El coche de las guardianas','El coche no sabe por dónde ir. Toca el coche.','🚗','Vamos a leer sus señales para ayudarle.','El coche nos deja junto a un yoyo en la plaza.','🚗'],
  ['El yoyo de la plaza','El yoyo se ha enredado. Tócalo para desenrollarlo.','🪀','En el hilo aparecen pistas que podemos leer.','El yoyo señala una llave debajo del banco.','🪀'],
  ['La llave del escenario','La llave brilla bajo el banco. Tócala.','🔑','Leamos las señales para encontrar la puerta que abre.','La puerta se abre y vemos el escenario.','🔑'],
  ['El hada de las luces','El escenario está a oscuras. Toca la estrella del hada.','⭐','La hache se escribe aunque no suene. Leamos las pistas del hada.','Las luces encienden el camino del taxi.','🧚'],
  ['El taxi de los músicos','El taxi trae a los músicos. Toca el taxi para avisarles.','🚕','Necesitan leer las señales con equis para llegar al escenario.','Los músicos llegan con la última pista.','🚕'],
  ['El concierto de Ada','Todo el equipo está listo. Toca el micrófono para empezar.','🎤','Ariel trae la última luz en su concha. Tócala.','¡La caja vuelve a sonar! Ariel canta y el unicornio y las guardianas tocan contigo. Gracias por traer la música de vuelta, Ada.','🏆']
];

const ALMA_LINES = {
  0: '¡Hola, Ada! Soy Ariel. Vi una luz caer en el río. Si encuentras las vocales, podremos encender el camino.',
  2: '¡Aquí estoy! Yo sujeto las tablas desde el agua. Lee las pistas con pe y podremos cruzar.',
  8: 'Sube a mi barca, Ada. Tú lees las señales y yo te llevo por el río.',
  27: '¡Lo hemos conseguido, Ada! Solo falta la última misión. Cuando vuelvas, cantaré contigo.'
};

function chapterScript(stage, progress) {
  const episode = JOURNEY[stage];
  const reprise = SCENE_TURNS[stage] || [
    `¡Escucha, Ada! La caja acaba de tocar una nota al llegar hasta aquí. Vamos a encontrar la que le responde.`,
    'Ya podemos tararear dos notas. Cuando encontremos la siguiente, sabremos por dónde seguir.'
  ];
  if (progress.missions > 0) return [{
    speaker: ALMA_LINES[stage] ? 'ariel' : 'unicorn',
    object: episode[5],
    line: reprise[Math.min(progress.missions - 1, 1)] || `Ya tenemos la primera parte de la melodía. Queda un reto para terminar aquí y seguir hacia ${JOURNEY[stage + 1][0].toLowerCase()}.`
  }];
  const withoutTouchCue = line => line.replace(/ (?:Toca [^.!?]+|Tócala|Tócalo)[.!?]$/, '');
  const opening = withoutTouchCue(episode[1]);
  const turn = withoutTouchCue(episode[3]);
  return [
    { speaker: 'unicorn', object: episode[2], line: opening },
    { speaker: ALMA_LINES[stage] ? 'ariel' : 'unicorn', object: ALMA_LINES[stage] ? '🐚' : episode[5], line: ALMA_LINES[stage] || turn }
  ];
}

const SCENE_TURNS = {
  0: ['¡La caja hizo «tin»! ¿Has oído? Le falta una nota bajita. Vamos a buscarla entre las vocales.', 'Ya puedo tararear el principio. ¡Una última nota y la caja iluminará el bosque!'],
  1: ['Por un momento la linterna ha iluminado una huella. El unicornio se pone delante para que puedas seguirla.', 'Ahora se ven dos huellas. La última luz nos enseñará qué hay al final del sendero.'],
  2: ['Sujeto esta tabla con la cola. Lee desde la orilla mientras acerco la siguiente.', '¡Solo falta la última tabla! Cuando la ponga, pasaréis por encima y yo nadaré por debajo.'],
  3: ['¡El molino ha movido un aspa! El unicornio se aparta un poquito y escucha el viento.', 'Las aspas ya casi dan una vuelta entera. Veo pétalos detrás del molino.'],
  4: ['Una flor ha repetido tu nota. Ahora escucha cómo le contestan las de al lado.', 'Las flores apuntan al mismo sitio. Falta una para dibujar la flecha entera.'],
  5: ['El tren ha contestado con un silbido. Mira, el semáforo ha cambiado de color.'],
  6: ['El pajarito ha oído tu nota y se ha posado más cerca. Le enseñaremos dónde está su rama.'],
  7: ['Alguien ha encendido la luz de la ventana. Ya se oyen pasos al otro lado de la puerta.'],
  8: ['¡La barca flota! Sujeta bien la caja mientras yo la alejo del muelle.', 'Ya veo la otra orilla. Voy a acercar la barca despacito para que puedas saltar.'],
  9: ['Ya tenemos una esquina de la vela. El unicornio agarra la cuerda para que el viento no se la lleve.'],
  10: ['El perro ha bajado un piso. Mueve la cola cada vez que tocas una nota.'],
  11: ['El loro ha repetido tu nota y ha soltado otra pluma. Mira dónde cae.'],
  12: ['La roca se ha movido un poquito. Por la rendija se ve una luz amarilla.'],
  13: ['La foca ha hecho palmas con sus aletas. Si seguimos su ritmo, el farol volverá a brillar.'],
  14: ['Desde la ventana se oye a alguien preparar una fiesta. Vamos a averiguar para quién es.'],
  15: ['La cesta ya está abierta. Guarda un poco para el koala, que seguro que se despierta con hambre.'],
  16: ['El koala abrió un ojo. Le enseñaremos el mapa antes de que vuelva a dormirse.'],
  17: ['El lazo se ha soltado y vuela hacia una verja. Vamos a ver qué hay al otro lado.'],
  18: ['La jirafa ya nos ha bajado medio cartel. Se ve una flecha, pero la punta sigue escondida.'],
  19: ['El gato se ha levantado. Debajo de su cola aparece una luz morada que apunta a la cueva.'],
  20: ['Cada nota enciende una gema. Mira cómo dibujan un camino por el suelo.'],
  21: ['La bandera ya ondea. Desde arriba nos hacen luces con los faros de un coche.'],
  22: ['El coche ha girado hacia la plaza. Desde aquí ya se oye al público cantar.'],
  23: ['El yoyo baja un poco más. Hay algo brillante al final del hilo.'],
  24: ['La llave ha girado. Por debajo de la puerta se ve la luz del escenario.'],
  25: ['El hada ha encendido el primer foco. ¡Nos ha visto y nos saluda desde arriba!'],
  26: ['El taxi se acerca. Dentro, los músicos ya están afinando sus instrumentos.'],
  27: ['Ya se oyen las palmas del público. Ariel espera la señal para cantar contigo.', 'El unicornio cuenta con el casco. Una, dos… Cuando acabes de leer, entra todo el grupo.']
};

const SONG_MILESTONES = [
  { stage:1, icon:'🏮', name:'La luz del bosque' },
  { stage:4, icon:'🌻', name:'El coro de flores' },
  { stage:8, icon:'🐚', name:'El eco del río' },
  { stage:13, icon:'🌊', name:'El ritmo de las olas' },
  { stage:19, icon:'💎', name:'El brillo del escenario' },
  { stage:27, icon:'🎤', name:'La canción completa' }
];

const SONG_NOTES = [[523,587],[659,523],[698,659],[587,698],[784,659],[587,523]];
function songPieces(interactive = false) {
  return `<div class="song-pieces" aria-label="Partes de la canción">${SONG_MILESTONES.map((piece,i) => {
    const found = state.journey?.[piece.stage]?.cleared;
    const tag = found && interactive ? 'button' : 'span';
    return `<${tag} ${tag==='button'?`data-song-piece="${i}"`:''} class="song-piece ${found?'found':''}" style="--piece-hue:${i*49+26}" aria-label="${found?piece.name:'Parte por descubrir'}">${found?piece.icon:'♪'}</${tag}>`;
  }).join('')}</div>`;
}

async function narrateChapter(beats) {
  const token = flow;
  const scene = $('#story-stage');
  const replay = $('#story-replay');
  replay.disabled = true;
  for (const [index, beat] of beats.entries()) {
    if (flow !== token) return;
    const ariel = beat.speaker === 'ariel';
    scene.innerHTML = `<div class="story-shot ${ariel ? 'shot-water' : 'shot-land'}">
      <img src="assets/${ariel ? 'alma' : 'unicorn'}.png" alt="${ariel ? 'Ariel' : 'Unicornio'}">
      <span class="shot-object" aria-hidden="true">${beat.object}</span>
      <span class="shot-spark spark-one" aria-hidden="true">✦</span><span class="shot-spark spark-two" aria-hidden="true">✧</span>
    </div>`;
    const caption = $('#story-caption');
    caption.hidden = false;
    caption.textContent = beat.line;
    actorMotion(ariel ? 'wave' : 'happy', 850);
    const choice = $('#story-play').hidden;
    const spoken = index === beats.length - 1 ? beat.line + (choice ? ' ¿Quién lleva la caja? Toca a Ariel o al unicornio.' : ' Toca el triángulo dorado para jugar.') : beat.line;
    await Promise.all([tell(spoken, beat.object), sleep(850)]);
  }
  if (flow !== token) return;
  replay.disabled = false;
  scene.classList.add('story-told');
  $('#story-play').classList.add('story-ready');
}

function journeyUnit(stage) {
  const unit = stages[stage].unit;
  return unit ? unit.toUpperCase() : 'AEIOU';
}

function journeyBadge(stage, kind = 'letter') {
  const icons = { letter: JOURNEY[stage][5], path: '🧭', practice: '⭐' };
  const labels = { letter: 'Letra aprendida', path: 'Primer camino', practice: 'Tres misiones' };
  return `<span class="journey-badge badge-${kind}" style="--badge-hue:${(stage * 37) % 360}" aria-label="${labels[kind]}"><span>${icons[kind]}</span><b>${journeyUnit(stage)}</b></span>`;
}

function journeyProgress(stage) {
  state.journey ||= {};
  return state.journey[stage] ||= { missions: 0, learned: false, opened: false, routes: [] };
}

function journeyCompleteMission(s, stage, learned, cleared = learned) {
  s.journey ||= {};
  const progress = s.journey[stage] ||= { missions: 0, learned: false, opened: false, routes: [] };
  progress.missions++;
  progress.learned ||= learned;
  progress.cleared ||= cleared;
  if ([0, 1].includes(s.branch) && !progress.routes.includes(s.branch)) progress.routes.push(s.branch);
  s.finishedScene = stage;
}

function showJourneyFinale() {
  leave();
  frontMode(false);
  state.route = 'complete';
  screen.innerHTML = `<section class="mission-finish journey-finale">${fireflies()}${teamArt()}<h1>¡El concierto de Ada!</h1>${journeyBadge(27)}<button id="final-hear" class="round-tool" aria-label="Escuchar el final">🔊</button><button id="final-trophies" class="world-play">🏆 Mis trofeos</button></section>`;
  const finale = async () => {
    gesture();
    const token = flow;
    actorMotion('dance', 2800);
    sparks();
    await tell(JOURNEY[27][4], "\u{1F3B5}");
    if (token === flow) chime(SONG_NOTES.flat(),.21);
  };
  $('#final-hear').onclick = finale;
  $('#final-trophies').onclick = trophyRoom;
  save();
  if (activeGesture) finale();
}

function storyChoice() {
  if (!state.character) return chooseCharacter();
  if (state.pendingComplete) return missionCompleteScreen();
  if (state.journey?.[27]?.cleared) return showJourneyFinale();
  leave();
  frontMode(false);
  state.route = 'map';
  const stage = state.stage;
  const episode = JOURNEY[stage];
  const progress = journeyProgress(stage);
  const beats = chapterScript(stage, progress);
  const hasChoice = [0,8,27].includes(stage) && !progress.missions && progress.choice == null;
  updateScene();
  screen.innerHTML = `<section class="mission-hub story-chapter journey-scene story-cinema">
    <h1>${episode[0]}</h1>
    <div id="story-stage"><div class="story-shot shot-land"><img src="assets/unicorn.png" alt="Unicornio"></div></div>
    <p id="story-caption" hidden></p>
    ${songPieces()}
    <button id="story-play" class="world-play" aria-label="Empezar la misión" ${hasChoice?'hidden':''}><span aria-hidden="true">▶</span> Jugar</button>
    ${hasChoice?`<div class="story-partners"><button data-partner="0" aria-label="El unicornio lleva la caja"><img src="assets/unicorn.png" alt="">Unicornio</button><button data-partner="1" aria-label="Ariel lleva la caja"><img src="assets/alma.png" alt="">Ariel</button></div>`:''}
    <div class="finish-tools"><button id="story-replay" class="round-tool story-replay" aria-label="Escuchar la historia otra vez">🔊</button><button id="trophy-room" class="round-tool" aria-label="Ver mis trofeos">🏆</button></div>
  </section>`;
  const narrate = () => { gesture(); narrateChapter(beats); };
  $('#story-replay').onclick = narrate;
  $('#trophy-room').onclick = trophyRoom;
  const play = () => {
    gesture();
    progress.opened = true;
    state.branch = progress.choice ?? (stage + progress.missions) % 2;
    save();
    game();
  };
  $('#story-play').onclick = play;
  const partners = screen.querySelectorAll('[data-partner]');
  partners.forEach(button => button.onclick = async () => {
    gesture();
    const token = flow;
    partners.forEach(partner => { partner.disabled = true; });
    progress.choice = Number(button.dataset.partner);
    button.classList.add('partner-picked');
    save();
    await Promise.all([tell(progress.choice ? 'La guardaré junto a mi concha. Tú ve delante y yo te sigo.' : 'La llevo en mi bolsa. Sube, Ada, y vayamos a buscar la siguiente nota.',progress.choice ? '🐚' : '🦄'),sleep(500)]);
    if (token === flow) play();
  });
  if (activeGesture) narrateChapter(beats);
}

function trophyRoom() {
  leave();
  const kinds = [
    ['path','Primer camino', p => p?.legacyBadges && p.missions > 0],
    ['practice','Tres misiones', p => p?.legacyBadges && p.missions >= 3],
    ['letter','Letra aprendida', p => p?.learned]
  ];
  screen.innerHTML = `<section class="mission-hub"><h1>Mis trofeos</h1>${songPieces(true)}<div class="journey-album">
    ${JOURNEY.map((episode, i) => `<div><strong>${journeyUnit(i)} · ${episode[0]}</strong><div>${kinds.filter(([kind,,earned])=>kind==='letter'||earned(state.journey?.[i])).map(([kind, label, earned]) =>
      `<button data-stage="${i}" data-earned="${earned(state.journey?.[i]) ? 'yes' : 'no'}" aria-label="${label}, ${episode[0]}">${earned(state.journey?.[i]) ? journeyBadge(i, kind) : '<span class="badge-locked">🔒</span>'}</button>`
    ).join('')}</div></div>`).join('')}
  </div><button id="trophy-back" class="world-play" aria-label="Volver a la historia">↶</button></section>`;
  $('#trophy-back').onclick = storyChoice;
  screen.querySelectorAll('[data-song-piece]').forEach(button => button.onclick = async () => {
    gesture();
    const token = flow;
    const index = Number(button.dataset.songPiece);
    await tell(SONG_MILESTONES[index].name,SONG_MILESTONES[index].icon);
    if (token === flow) chime(SONG_NOTES[index],.24);
  });
  screen.querySelectorAll('[data-stage]').forEach(button => button.onclick = () => {
    gesture();
    tell(button.dataset.earned === 'yes' ? JOURNEY[Number(button.dataset.stage)][0] : 'Este trofeo te espera en la historia.', '🏆');
  });
}

function addStoryEnding() {
  const stage = state.finishedScene ?? state.stage;
  const episode = JOURNEY[stage];
  const progress = journeyProgress(stage);
  const cleared = progress.cleared;
  const piece = SONG_MILESTONES.find(item=>item.stage===stage);
  const message = cleared ? episode[4] + (piece ? ` Has encontrado ${piece.name.toLowerCase()}.` : '') : chapterScript(stage,progress)[0].line;
  const instruction = message + ' Toca el triángulo grande para seguir. Si quieres descansar, toca la casita.';
  screen.querySelector('.mission-finish h1').textContent = episode[0];
  screen.querySelector('.mission-finish p').textContent = message;
  screen.querySelector('.collected-notes').innerHTML = cleared ? songPieces() : `<span class="scene-object-finish" aria-hidden="true">${episode[2]}</span>`;
  $('#mission-next').textContent = cleared && stage === 27 ? '▶ Concierto' : '▶ Seguir';
  $('#finish-hear').onclick = () => { gesture(); tell(instruction, '▶'); };
  $('#mission-treasure').textContent = '🏆';
  $('#mission-treasure').setAttribute('aria-label','Ver mis trofeos');
  $('#mission-treasure').onclick = trophyRoom;
  if (activeGesture) tell(instruction, '▶');
}
