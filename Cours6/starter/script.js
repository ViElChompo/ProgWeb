"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Fonction pour afficher les messages dans l'élément avec l'id "hint"
const displayMessage = function (message) {
  document.getElementById('hint').textContent = message;
};

// Gérer l'événement "click" sur le bouton "Check"
document.getElementById('check').addEventListener('click', function () {
  const guess = Number(document.getElementById('guess').value);

  // Si aucune valeur n'est entrée
  if (!guess) {
    displayMessage('⛔️ No number!');
    score--;
    document.getElementById('score').textContent = score;

  // Si le joueur devine le bon nombre
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.getElementById('answer').textContent = secretNumber;
    document.getElementById('answer').classList.add('correct');
    document.body.style.backgroundColor = '#60b347'; 
    document.getElementById('answer').style.width = '100%';

    if (score > highscore) {
      highscore = score;
      document.getElementById('highscore').textContent = highscore;
    }

  // Si la supposition est incorrecte
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.getElementById('score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.getElementById('score').textContent = 0;
    }
  }
});

// Gérer le bouton "Again!" pour réinitialiser le jeu
document.getElementById('again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.body.style.backgroundColor = '#000000'; 
    document.getElementById('answer').style.width = '100%';

  displayMessage('Start guessing...');
  document.getElementById('score').textContent = score;
  document.getElementById('answer').textContent = '?';
  document.getElementById('answer').classList.remove('correct');
  document.getElementById('guess').value = '';
});
