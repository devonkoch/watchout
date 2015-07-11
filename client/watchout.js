// start slingin' some d3 here.

// global variables
var score = 0;
var highScore = 0;
var collisions = 0;


var gameOptions = {
  height: 500,
  width: 500,
  enemyCount: 10,
  enemies: [],
  bg: '#d8d8d8'
};

/* 

  create arbitrary data array for our enemies

  init the gameboard using svg
  init the player object 
  create XY coordinate generator helper func
  init the enemies using the data
  create a function that sends enemies to random coordinates using the helper function

  set interval calling enemyGoSomewhere function

  drag, drop, and collisions

*/

for (var i = 0; i < gameOptions.enemyCount; i++) {
  gameOptions['enemies'].push(i);
};

var initGameboard = d3.select('.container').append('svg')
                      .attr({
                        width: 800,
                        height: 600,
                      })
                      .style('background-color', '#d8d8d8')

