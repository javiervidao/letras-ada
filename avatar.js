'use strict';
const CHARACTERS=[
 {id:'rumi',name:'Rumi',image:'assets/rumi.png',color:'#ab70f0'},
 {id:'mira',name:'Mira',image:'assets/mira.png',color:'#f07cb3'},
 {id:'zoey',name:'Zoey',image:'assets/zoey.png',color:'#71d9d0'}
];
const CHAPTERS=[
 {icon:'🌳',name:'El bosque de las notas',intro:'El unicornio ha perdido las notas de su canción en el bosque. ¡Vamos a encontrarlas con nuestra voz!',help:'Soy tu unicornio compañero. Cada reto nos ayuda a recuperar una nota de mi canción.'},
 {icon:'🫧',name:'Las perlas de la laguna',intro:'El unicornio nos lleva a la laguna. La sirena necesita perlas de palabras para abrir su concha mágica.',help:'Buscamos las perlas de palabras de la sirena. Puedes tocar las sílabas para escucharlas.'},
 {icon:'🌈',name:'El puente del arcoíris',intro:'El unicornio quiere cruzar el arcoíris. ¡Encendamos sus colores con las letras!',help:'Estoy a tu lado. Vamos a encender los colores del puente, un reto cada vez.'},
 {icon:'🌙',name:'Las estrellas dormidas',intro:'Las estrellas se han dormido. El unicornio nos pide ayuda para despertarlas con palabras.',help:'Las estrellas se despiertan cuando jugamos juntas. No hay prisa, puedes escuchar una pista.'},
 {icon:'🏰',name:'El castillo del eco',intro:'Hemos llegado al castillo del eco. El unicornio oye una canción detrás de la puerta. ¡Vamos a abrirla!',help:'La puerta del castillo escucha nuestra magia. Yo te acompaño hasta el siguiente tesoro.'},
 {icon:'🎵',name:'El gran concierto',intro:'¡Es la hora del concierto! Las tres guerreras y el unicornio necesitan tu magia para que suene la canción.',help:'¡Estamos preparando nuestro concierto! Cada palabra añade una nota a la canción.'}
];
function chapter(){return CHAPTERS[Math.floor(state.missions/2)%CHAPTERS.length]}
function selectedCharacter(){return CHARACTERS.find(c=>c.id===state.character)||CHARACTERS[0]}
function teamArt(){return `<div class="team-art">${CHARACTERS.map(c=>`<img src="${c.image}" alt="${c.name}">`).join('')}</div>`}
