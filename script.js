'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const brnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0EL.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


let currentScore = 0;
let activePlayer = 0

brnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !==1){
        currentScore +=dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');

    }


})