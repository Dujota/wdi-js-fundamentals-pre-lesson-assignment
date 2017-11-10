// There are two main ways to define functions in JavaScript:


// Named function
function eatDot() {
  console.log("MUNCH!");
}


// Anonymous function
// Here we assign the function to a variable instead of giving it a name directly

var eatDot = function() {
  console.log("MUNCH!");
}


// Calling a function

// Functions are called by putting () after the function name.

var hero = 'Pac-Man'
hero.toUpperCase;
// [Function: toUpperCase] // no (), so we didn't call this function
hero.toUpperCase();
// 'PAC-MAN' // now we have (), so we did call this function
hero.length;
 // length returned 7, the number of characters in 'Pac-Man', because length is a property of the String type, not a function of the String type




// Passing parameters to functions

// Often you'll pass parameters into the function, in which case you put the parameters between the brackets. Let's create a function to keep track of high scores.

var highScores = [];
function addHighScore(highScoreList, playerInitials, score) {
    var record = { player: playerInitials, score: score };
    highScoreList.push(record); // add record to array
  }

highScores
addHighScore(highScores, 'SDL', 2000);
highScores
addHighScore(highScores, 'JSL', 10000);
highScores

// [ { player: 'SDL', score: 2000 },
  // { player: 'JSL', score: 10000 } ]
