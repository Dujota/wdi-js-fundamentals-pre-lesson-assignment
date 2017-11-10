// pacman-for-loop.js
// Often loops in JavaScript will follow a more conventional approach:
// for (<<initializer>>; <<condition>>; <<post iteration>>) {
  // <<statement>>
// }
var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

for (var index = 0; index < ghosts.length; index++) {
  console.log('Pac-Man eats ' + ghosts[index]);
}

// That unusual index++ notation increments the value of index by 1. You can also use index-- to decrement (reduce) the value by 1.
