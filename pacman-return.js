// pacman-return.js

function addScore(currentScore, eaten) {
  switch (eaten){
    case 'dot':
      addPoints = 10;
      break;

    case 'powerPellet':
      addPoints = 50
      break;
    case 'firstGhost':
      addPoints = 200
      break;
    case 'secondGhost':
      addPoints = 400
      break;
  }
  return currentScore + addPoints
}

var score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);
