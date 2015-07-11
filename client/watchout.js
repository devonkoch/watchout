// start slingin' some d3 here.

 // global variables
var score = 0;
var highScore = 0;
var collisions = 0;


var gameOptions = {
  height: 480,
  width: 854,
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

var h = gameOptions.height;
var w = gameOptions.width;

var getXY = function(){
  var obj = {
    x: Math.random() * 854,
    y: Math.random() * 480
  };
  return obj;
};

// setup svg canvas
var initGameboard = d3.select(".container")
        .append("svg:svg")
            .attr("width", w)
            .attr("height", h)
            .attr("id", "canvas")
            //.on("click", clickypie)
            .append("svg:rect")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("stroke", "#000")
                .attr("stroke-width", 3)
                .attr("fill", "none")


var player = d3.select('svg').selectAll('rect')
              .data([100], function(p) {return p;})
              .enter().append('rect')
              .attr({
                x: function (p) {return getXY().x;},
                y: function (p) {return getXY().y;},
                width: 10,
                height: 10,
                fill: '#ff6600'
              })


/* images

http://imgur.com/lzvhwax,8zWoe9X#0
http://imgur.com/lzvhwax,8zWoe9X#1

*/

var enemies = d3.select('svg').selectAll('image').data(gameOptions.enemies, function(d) {return d;})
                .enter().append('svg:image')
                .attr({
                  x: function() {return getXY().x;},
                  y: function() {return getXY().y;},
                  'xlink:href': 'http://i.imgur.com/8zWoe9X.jpg',
                  width: 40,
                  height: 80
                });

var goDogGo = function(enemies){
  enemies.each(function(d){
    this.nextX = getXY().x,
    this.nextY = getXY().y
  })
  .transition()
  .duration(5000)
  .ease('elastic')
  .attr({
    x: function(d) {return this.nextX;},
    y: function(d) {return this.nextY;}
  })
};

var distance = function(player, enemy){}


/* MAN, THIS IS JUST MAGIC SHIT */
var drag = d3.behavior.drag().on('drag', function(d) {
  player
    .attr('x', d3.event.dx + +player.attr('x'))
    .attr('y', d3.event.dy + +player.attr('y'));
});

player.call(drag);

setInterval(function(){
  score++;
  d3.select('#score').text(score);
}, 10);

setInterval(function(){
  goDogGo(enemies);

}, 2000);


// collision detection

// getting enemy data
var getEnemyData = function(){
  var enemyData = [];

  enemies[0].forEach(function(node){
    var tuple = [];
    tuple.push(node.attributes.x.value);
    tuple.push(node.attributes.y.value);

    enemyData.push(tuple);

  });

  return enemyData;
};


// getting player data
var getPlayerData = function(){
  return [player.attr('x'), player.attr('y')];
};

// checking collisions
var distanceFormula = function(x1, x2, y1, y2){
  return Math.pow((Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), .5);
};

var checkCollisions = function(){
  var playerCoords = getPlayerData();
  var enemyCoords = getEnemyData();

  enemyCoords.forEach(function(eC){
    if(distanceFormula(eC[0], playerCoords[0], eC[0], playerCoords[0]) < 70){
      if(score > highScore){
        highScore = score;
        d3.select('#highScore').text(highScore);
      }

      score = 0;
      d3.select('#score').text(score);
      collisions++;
      d3.select('#collisions').text(collisions);
    }
  }); 
};

setInterval(function(){checkCollisions()}, 1000);



















