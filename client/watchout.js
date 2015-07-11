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
                        width: 400,
                        height: 400,
                      })
                      .style('background-color', '#d8d8d8');

var player = d3.select('svg').append('circle')
              .attr({
                cx: 200,
                cy: 200,
                r: 10,
                fill: '#ff6600'
              })

var enemies = d3.select('svg').selectAll('circle').data(gameOptions.enemies, function(d) {return d;})
                .enter().append('circle')
                .attr({
                  cx: function (d) {return Math.random() * 400;},
                  cy: function (d) {return Math.random() * 400;},
                  r: 5,
                  fill: 'black'
                })

