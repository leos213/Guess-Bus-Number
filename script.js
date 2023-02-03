'use strict';

let secretNumber = Math.trunc(Math.random() * 50 + 1);

const randomNumber = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const textScore = document.querySelector('.score');
let score = 20;
let highscore = 0;

checkButton.addEventListener('click', function () {
  const inputGuess = Number(document.querySelector('.guess').value);
  if (!inputGuess) {
    message.textContent = '⛔ No Number';
  } else if (inputGuess === secretNumber) {
    message.textContent = '🎯 Wow! Go before they overtake you';
    randomNumber.textContent = secretNumber;
    document.querySelector('body').style.background = 'rgb(8, 114, 175)';
    document.querySelector('.gifBus').style.display = 'none';
    document.querySelector('.imgOver').style.display = 'block';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else if (highscore !== 0) {
      highscore = highscore + score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (inputGuess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 is high';
      score--;
      textScore.textContent = score;
    } else {
      textScore.textContent = 0;
      message.textContent =
        'In order for you not to freeze, follow another number 😃!';
    }
  } else if (inputGuess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 is low';
      score--;
      textScore.textContent = score;
    } else {
      textScore.textContent = 0;
      message.textContent =
        'In order for you not to freeze, follow another number 😃!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  message.textContent = 'Write the number...';
  textScore.textContent = 20;
  score = 20;
  document.querySelector('body').style.background = 'rgb(8, 114, 175)';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 50 + 1);
  document.querySelector('.gifBus').style.display = 'block';
  document.querySelector('.imgOver').style.display = 'none';
});

document.querySelector('.reset').addEventListener('click', function () {
  message.textContent = 'Write the number...';
  textScore.textContent = 20;
  score = 20;
  document.querySelector('body').style.background = 'rgb(8, 114, 175)';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 50 + 1);
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.gifBus').style.display = 'block';
  document.querySelector('.imgOver').style.display = 'none';
});
