

// console.log('Pac-Man eats ghosts for lunch.');
//
//
// var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];
//
// console.log('There are ' + ghosts.length + ' ghosts.');
// console.log('Their names are: ');
// console.log(ghosts[0]);
// console.log(ghosts[1]);
// console.log(ghosts[2]);
// console.log(ghosts[3]);


// var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];
//
// for (var index = 0; index < ghosts.length; index++) {
//   console.log('Pac-Man eats ' + ghosts[index]);
// }


// var eatDot = function() {
//   console.log("MUNCH!");
// }
//
//
// eatDot()

function addScore(currentScore, eaten) {
  switch (eaten) {
  case 'dot':
    scoreToAdd = 10;
    break;
  case 'powerPellet':
    scoreToAdd = 50;
    break;
  case 'firstGhost':
    scoreToAdd = 200;
    break;
  case 'secondGhost':
    scoreToAdd = 400;
    break;
  }

  return currentScore + scoreToAdd;
}

var score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);
