'use script'


// Declaring a given variable name 

const score0=document.querySelector('#score--0');
const score1=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');

const btnNew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');



// Starting the conditions 

score0.textContent=0;
score1.textContent=0;
diceEl.classList.add('hidden');


 // 1)  Rolling the dice 
btnroll.addEventListener('click',function(){
    const dice=Math.trunc(Math.random() *6) +1;
    // 2) display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
});