'use strict';

// Cada escena deja preparado el lugar donde comienza la siguiente.
const JOURNEY = [
  ['La caja de música','Esta noche hay concierto, pero la caja de música ha perdido su luz. Toca la caja.','🎁','Alma, la sirena, te llama desde su concha. Toca la concha para escucharla.','Las luces encienden el sendero del bosque. Alma nos espera en el río.','🕯️'],
  ['La linterna del bosque','El unicornio ve un sendero oscuro. Toca la linterna para saber adónde lleva.','🏮','La linterna parpadea. La letra ele puede encenderla.','Vemos un puente sobre el río.','🏮'],
  ['El puente de Alma','Al puente le faltan tablas. Toca la tabla que flota junto al unicornio.','🪵','Alma sale del agua para ayudarte. Toca su concha.','Alma empuja la última tabla. Cruzamos el puente y llegamos al molino.','🌉'],
  ['El molino dormido','Las aspas no se mueven. Toca el molino y escucha.','🌬️','El molino necesita nuestra voz para girar.','Al girar, el molino descubre una senda de flores.','🌬️'],
  ['Las flores que susurran','Una flor se mueve. Tócala con cuidado.','🌼','Las flores conocen el camino, pero sus pistas están mezcladas.','Las flores dibujan una flecha hacia la estación.','🌼'],
  ['El tren pequeño','Un tren espera en la estación. Toca la campana.','🚂','El maquinista necesita leer las señales para arrancar.','El tren nos deja junto a un árbol lleno de nidos.','🚂'],
  ['El nido en la rama','Un pajarito busca su nido. Toca el nido.','🪺','Hay pistas entre las ramas. Vamos a leerlas.','El pájaro encuentra su nido y señala la casa del río.','🪺'],
  ['La puerta de la casa','Desde dentro alguien quiere ayudarnos. Toca la puerta.','🚪','La puerta se abre al leer sus señales.','La dueña nos presta una barca para cruzar.','🚪'],
  ['La barca de Alma','La barca de Alma está atada al muelle. Toca la barca.','🛶','Alma se asoma junto al muelle. Toca su concha.','Alma guía la barca hasta la otra orilla. Allí encontramos una vela caída.','🛶'],
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
  ['El concierto de Ada','Todo el equipo está listo. Toca el micrófono para empezar.','🎤','Alma trae la última luz en su concha. Tócala.','¡La caja vuelve a sonar! Alma canta y el unicornio y las guardianas tocan contigo. Gracias por traer la música de vuelta, Ada.','🏆']
];

const ALMA_LINES = {
  0: '¡Hola, Ada! Soy Alma. Vi una luz caer en el río. Si encuentras las vocales, podremos encender el camino.',
  2: '¡Aquí estoy! Yo sujeto las tablas desde el agua. Lee las pistas con pe y podremos cruzar.',
  8: 'Sube a mi barca, Ada. Tú lees las señales y yo te llevo por el río.',
  27: '¡Lo hemos conseguido, Ada! Solo falta la última misión. Cuando vuelvas, cantaré contigo.'
};

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

function journeyCompleteMission(s, stage, learned) {
  s.journey ||= {};
  const progress = s.journey[stage] ||= { missions: 0, learned: false, opened: false, routes: [] };
  progress.missions++;
  progress.learned ||= learned;
  if ([0, 1].includes(s.branch) && !progress.routes.includes(s.branch)) progress.routes.push(s.branch);
  s.finishedScene = stage;
}

function showJourneyFinale() {
  leave();
  frontMode(false);
  state.route = 'complete';
  screen.innerHTML = `<section class="mission-finish journey-finale">${fireflies()}${teamArt()}<h1>¡El concierto de Ada!</h1>${journeyBadge(27)}<button id="final-hear" class="round-tool" aria-label="Escuchar el final">🔊</button><button id="final-trophies" class="world-play">🏆 Mis trofeos</button></section>`;
  const finale = () => {
    actorMotion('dance', 2800);
    sparks();
    tell(JOURNEY[27][4], '🎵');
  };
  $('#final-hear').onclick = finale;
  $('#final-trophies').onclick = trophyRoom;
  save();
  if (activeGesture) finale();
}

function storyChoice() {
  if (!state.character) return chooseCharacter();
  if (state.pendingComplete) return missionCompleteScreen();
  if (state.journey?.[27]?.learned) return showJourneyFinale();
  leave();
  frontMode(false);
  state.route = 'map';
  const stage = state.stage;
  const episode = JOURNEY[stage];
  const progress = journeyProgress(stage);
  const alma = ALMA_LINES[stage];
  const canChoose = () => progress.opened && (!alma || progress.metAlma);
  updateScene();
  screen.innerHTML = `<section class="mission-hub story-chapter journey-scene">${fireflies()}
    <h1>${episode[0]}</h1>
    <div class="journey-letter">${journeyUnit(stage)}</div>
    <button id="story-object" class="journey-object" aria-label="Tocar el objeto de la historia">${episode[2]}<span class="story-touch" aria-hidden="true">👆</span></button>
    <button id="story-hear" class="story-mascot" aria-label="Escuchar la escena"><img src="assets/unicorn.png" alt=""><span>🔊</span></button>
    ${alma ? `<button id="story-alma" class="story-alma" aria-label="Escuchar a Alma, la sirena" ${progress.opened ? '' : 'hidden'}><img src="assets/alma.png" alt="" onerror="this.hidden=true"><span>🐚 🔊</span></button>` : ''}
    <div id="story-paths" class="story-branches" ${canChoose() ? '' : 'hidden'}>
      <button data-branch="0" aria-label="Camino de las pistas"><span>🔎</span><small>Pistas</small></button>
      <button data-branch="1" aria-label="Camino musical"><span>🎵</span><small>Música</small></button>
    </div>
    <button id="trophy-room" class="round-tool" aria-label="Ver mis trofeos">🏆</button>
  </section>`;
  const hear = () => tell(canChoose() ? 'Elige las pistas o la música.' : progress.opened ? episode[3] : episode[1], '🦄');
  $('#story-hear').onclick = () => { gesture(); hear(); };
  $('#trophy-room').onclick = trophyRoom;
  $('#story-object').onclick = () => {
    gesture();
    const object = $('#story-object');
    object.classList.remove('story-awake');
    void object.offsetWidth;
    object.classList.add('story-awake');
    actorMotion('wave', 1000);
    sparks();
    chime();
    progress.opened = true;
    save();
    if (alma) $('#story-alma').hidden = false;
    if (alma && !progress.metAlma) object.hidden = true;
    $('#story-paths').hidden = !canChoose();
    tell(episode[3] + (alma ? '' : ' Elige las pistas o la música.'), '🦄');
  };
  if (alma) $('#story-alma').onclick = () => {
    gesture();
    const button = $('#story-alma');
    button.classList.remove('alma-sings');
    void button.offsetWidth;
    button.classList.add('alma-sings');
    progress.metAlma = true;
    save();
    sparks();
    const token = flow;
    const revealPaths = () => { if (token === flow) $('#story-paths').hidden = false; };
    Promise.race([tell(alma, '🐚'), sleep(3300)]).then(revealPaths);
  };
  screen.querySelectorAll('[data-branch]').forEach(button => button.onclick = async () => {
    if (advancing) return;
    gesture();
    advancing = true;
    const token = flow;
    state.branch = Number(button.dataset.branch);
    save();
    button.classList.add('branch-chosen');
    await Promise.race([tell(state.branch ? 'Sigue las notas y escucha las pistas.' : 'Sigue las pistas y reúne las letras.', '✨'), sleep(1400)]);
    if (flow === token) game();
  });
  if (activeGesture) hear();
}

function trophyRoom() {
  leave();
  const kinds = [
    ['path','Primer camino', p => p?.missions > 0],
    ['practice','Tres misiones', p => p?.missions >= 3],
    ['letter','Letra aprendida', p => p?.learned]
  ];
  const count = JOURNEY.reduce((total, _, i) => total + kinds.filter(([, , earned]) => earned(state.journey?.[i])).length, 0);
  screen.innerHTML = `<section class="mission-hub"><h1>Mis trofeos · ${count} / 84</h1><div class="journey-album">
    ${JOURNEY.map((episode, i) => `<div><strong>${journeyUnit(i)} · ${episode[0]}</strong><div>${kinds.map(([kind, label, earned]) =>
      `<button data-stage="${i}" data-earned="${earned(state.journey?.[i]) ? 'yes' : 'no'}" aria-label="${label}, ${episode[0]}">${earned(state.journey?.[i]) ? journeyBadge(i, kind) : '<span class="badge-locked">🔒</span>'}</button>`
    ).join('')}</div></div>`).join('')}
  </div><button id="trophy-back" class="world-play" aria-label="Volver a la historia">↶</button></section>`;
  $('#trophy-back').onclick = storyChoice;
  screen.querySelectorAll('[data-stage]').forEach(button => button.onclick = () => {
    gesture();
    tell(button.dataset.earned === 'yes' ? JOURNEY[Number(button.dataset.stage)][0] : 'Este trofeo te espera en la historia.', '🏆');
  });
}

function addStoryEnding() {
  const stage = state.finishedScene ?? state.stage;
  const episode = JOURNEY[stage];
  const progress = journeyProgress(stage);
  const learned = progress.learned;
  const message = learned ? episode[4] : '¡Una misión más! El unicornio guarda tus notas. Puedes seguir cuando quieras.';
  screen.querySelector('.mission-finish h1').textContent = episode[0];
  screen.querySelector('.mission-finish p').textContent = message;
  screen.querySelector('.collected-notes').innerHTML = journeyBadge(stage, learned ? 'letter' : progress.missions === 3 ? 'practice' : 'path');
  $('#mission-next').textContent = learned ? (stage === 27 ? '▶ Concierto' : '▶ Siguiente escena') : '▶ Seguir';
  $('#mission-treasure').textContent = '🏆';
  $('#mission-treasure').setAttribute('aria-label','Ver mis trofeos');
  $('#mission-treasure').onclick = trophyRoom;
  if (activeGesture) tell(message, episode[5]);
}
