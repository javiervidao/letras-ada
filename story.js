'use strict';

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
