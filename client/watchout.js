// start slingin' some d3 here.

// global variables
var score = 0;
var highScore = 0;
var collisions = 0;


var gameOptions = {
  height: 450,
  width: 700,
  enemyCount: 10,
  backgroundColor: 'grey'
};

// initializes our gameboard
d3.select('.container').append('svg:svg')
  .attr('width', gameOptions.width)
  .attr('height', gameOptions.height)
  .style('background-color', gameOptions.backgroundColor);



  // gamescore
  // size
// classes
  // balls
  // player?
// helper functions