'use strict';

const EPISODES = [
  ['El bosque que perdió su canción', 'Una ráfaga esparció las notas del concierto. El unicornio ha encontrado dos rastros.', '🌿', 'El sendero de las hojas', '💧', 'El arroyo del eco', 'Hay una nota atrapada entre las hojas.', 'El agua repite una nota. Vamos a seguir su sonido.', 'La primera nota vuelve a sonar.', '🍃'],
  ['La laguna de cristal', 'La sirena guarda una nota, pero la laguna se ha quedado a oscuras.', '🐚', 'La cueva de las conchas', '🫧', 'El camino de burbujas', 'Las conchas esconden una pista.', 'Las burbujas forman un camino hacia la sirena.', 'La sirena enciende la laguna y nos devuelve la nota.', '🐚'],
  ['El puente del arcoíris', 'Faltan colores en el puente. El unicornio no puede cruzar todavía.', '🌈', 'El arco de colores', '☁️', 'Las nubes saltarinas', 'Vamos a despertar los colores uno a uno.', 'Las nubes nos prestan sus escalones.', 'El puente brilla y el unicornio cruza contigo.', '🌈'],
  ['Las estrellas dormidas', 'Una nota se ha quedado dormida entre las estrellas.', '⭐', 'La colina de estrellas', '🌙', 'El jardín de la luna', 'Las estrellas responden a tus palabras.', 'La luna ilumina las pistas del jardín.', 'Las estrellas despiertan y la nota vuelve con nosotras.', '🌙'],
  ['El castillo del eco', 'La última nota suena detrás de una puerta cerrada.', '🔑', 'La puerta dorada', '🔔', 'La torre de las campanas', 'Las palabras son la llave de esta puerta.', 'Las campanas recuerdan el ritmo de la canción.', 'La puerta se abre. ¡Ya podemos preparar el concierto!', '🔑'],
  ['El gran concierto', 'Rumi, Mira y Zoey están en el escenario. El unicornio espera la primera nota.', '🎤', 'El escenario', '🥁', 'La pista de baile', 'El público espera que empieces la canción.', 'Marca el ritmo para que el grupo pueda bailar.', '¡Ha vuelto la canción del arcoíris! El concierto es para ti.', '🏆']
];

function storyChapter(mission = state.missions) {
  return EPISODES[mission % EPISODES.length];
}

function storyChoice() {
  if (!state.character) return chooseCharacter();
  if (state.pendingComplete) return missionCompleteScreen();
  leave();
  frontMode(false);
  state.route = 'map';
  updateScene();
  const chapter = storyChapter();
  screen.innerHTML = `<section class="mission-hub story-chapter">
    <h1>${chapter[0]}</h1>
    <button id="story-hear" class="story-mascot" aria-label="Escuchar la historia"><img src="assets/unicorn.png" alt=""><span>🔊</span></button>
    <div class="story-branches">
      <button data-branch="0"><span>${chapter[2]}</span><small>${chapter[3]}</small></button>
      <button data-branch="1"><span>${chapter[4]}</span><small>${chapter[5]}</small></button>
    </div>
    <button id="trophy-room" class="round-tool" aria-label="Ver mis trofeos">🏆</button>
  </section>`;
  const narrate = () => tell(chapter[1] + ' Elige. ' + chapter[3] + ' o ' + chapter[5] + '.', '🦄');
  $('#story-hear').onclick = () => { gesture(); narrate(); };
  $('#trophy-room').onclick = trophyRoom;
  screen.querySelectorAll('[data-branch]').forEach(button => button.onclick = async () => {
    gesture();
    if (advancing) return;
    advancing = true;
    const token = flow;
    state.branch = Number(button.dataset.branch);
    save();
    button.classList.add('branch-chosen');
    await Promise.race([tell(chapter[6 + state.branch], chapter[2 + state.branch * 2]), sleep(2100)]);
    if (token === flow) game();
  });
  if (activeGesture) narrate();
}

function trophyRoom() {
  leave();
  screen.innerHTML = `<section class="mission-hub"><h1>Mis trofeos</h1><div class="trophy-grid">
    ${EPISODES.map((chapter, i) => `<button data-trophy="${i}" aria-label="${chapter[0]}"><span>${state.missions > i ? chapter[9] : '🔒'}</span><small>${chapter[0]}</small></button>`).join('')}
  </div><button id="trophy-back" class="world-play" aria-label="Volver a la aventura">↶</button></section>`;
  $('#trophy-back').onclick = () => state.pendingComplete ? missionCompleteScreen() : storyChoice();
  screen.querySelectorAll('[data-trophy]').forEach(button => button.onclick = () => {
    gesture();
    const i = Number(button.dataset.trophy);
    tell(state.missions > i ? EPISODES[i][8] : 'Este trofeo te espera en otro capítulo.', '🏆');
  });
}

function addStoryEnding() {
  const chapter = storyChapter(state.missions - 1);
  screen.querySelector('.mission-finish h1').textContent = chapter[0];
  screen.querySelector('.mission-finish p').textContent = chapter[8];
  if (state.missions % EPISODES.length === 0) $('#mission-next').textContent = '▶ Volver al bosque';
  screen.querySelector('.collected-notes').innerHTML = `<span class="story-trophy">${chapter[9]}</span>`;
  $('#mission-treasure').textContent = '🏆';
  $('#mission-treasure').setAttribute('aria-label', 'Ver mis trofeos');
  $('#mission-treasure').onclick = trophyRoom;
  if (activeGesture) tell(chapter[8] + (state.missions <= EPISODES.length ? ' ¡Has ganado un trofeo!' : ''), chapter[9]);
}

function addResetControl(area) {
  const reset = document.createElement('button');
  reset.type = 'button';
  reset.className = 'adult-secondary';
  reset.textContent = 'Borrar progreso';
  area.appendChild(reset);
  reset.onclick = () => {
    modal.innerHTML = '<h2>¿Borrar el progreso?</h2><p>Se borrarán las estrellas, trofeos, vestuarios y la partida de este dispositivo.</p><button id="keep-progress" class="adult-primary">Conservar progreso</button><button id="erase-progress" class="adult-secondary">Sí, borrar progreso</button><p id="reset-status" role="status"></p>';
    $('#keep-progress').focus();
    $('#keep-progress').onclick = () => modal.close();
    $('#erase-progress').onclick = () => {
      try { localStorage.removeItem(SAVE_KEY); }
      catch { $('#reset-status').textContent = 'No se ha podido borrar el progreso.'; return; }
      state = restored({});
      modal.close();
      titleScreen();
    };
  };
}
