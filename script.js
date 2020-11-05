const pcChoice = document.getElementById('choice-number-pc');
const userChoice = document.getElementById('choice-number-user');
const target = document.getElementById('target');

const pcWins = document.getElementById('pc-wins');
const userWins = document.getElementById('user-wins');

const minusButton = document.getElementById('minus-button');
const plusButton = document.getElementById('plus-button');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const roundNumber = document.getElementById('round-number');

let userNumber = 0;
let pcNumber = 0;
let targetNumber = 0;

let userScore = 0;
let pcScore = 0;

let round = 0;

function minus(){
  if(userNumber > 0){
    userNumber--;
    userChoice.innerHTML = userNumber;
  }
}

function plus(){
  if(userNumber < 10){
    userNumber++;
    userChoice.innerHTML = userNumber;
  }
}

function start(){
  pcNumber = Math.floor(Math.random() * 11);
  targetNumber = Math.floor(Math.random() * 11);
  let pc = Math.abs(targetNumber - pcNumber);
  let user = Math.abs(targetNumber - userNumber);
  target.innerHTML = targetNumber;
  pcChoice.innerHTML = pcNumber;
  round++;
  roundNumber.innerHTML = round;

 if(pc < user){
   pcScore++;
   pcWins.innerHTML = pcScore;
 } else if(pc > user){
   userScore++;
   userWins.innerHTML = userScore;
 } else if(pc === user){
   userScore++;
   userWins.innerHTML = userScore;
 }
}

function restart(){
  userScore = 0;
  pcScore = 0;
  userWins.innerHTML = 0;
  pcWins.innerHTML = 0;
  pcChoice.innerHTML = '?';
  userNumber = 0;
  userChoice.innerHTML = userNumber;
  round = 0;
  roundNumber.innerHTML = round;
  targetNumber = '?';
  target.innerHTML = targetNumber;
  
}

minusButton.addEventListener('click', minus);
plusButton.addEventListener('click', plus);
startButton.addEventListener('click', start);
restartButton.addEventListener('click', restart);
