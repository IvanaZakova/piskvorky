'use strict';

const gameButton = document.querySelector('.hraciaPlocha');
const activePlayerElm = document.querySelector('.hrac');

let hrajeHrac = 'circle';

gameButton.addEventListener('click', (event) => {
  const pressedButton = event.target;

  if (hrajeHrac === 'circle') {
    pressedButton.classList.add('hraciaPlocha--circle');
    pressedButton.disabled = true;
    activePlayerElm.src = 'pravidla_pics/cross.svg';
    hrajeHrac = 'cross';
  } else {
    pressedButton.classList.add('hraciaPlocha--cross');
    pressedButton.disabled = true;
    activePlayerElm.src = 'pravidla_pics/circle.svg';
    hrajeHrac = 'circle';
  }
});
