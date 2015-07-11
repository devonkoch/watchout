// start slingin' some d3 here.

 // global variables
var score = 0;
var highScore = 0;
var collisions = 0;


var gameOptions = {
  height: 500,
  width: 500,
  enemyCount: 2,
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

var w = 400;
var h = 400;

var getXY = function(){
  var obj = {
    x: Math.random() * 400,
    y: Math.random() * 400
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


var enemies = d3.select('svg').selectAll('circle').data(gameOptions.enemies, function(d) {return d;})
                .enter().append('circle')
                .attr({
                  cx: function (d) {return getXY().x;},
                  cy: function (d) {return getXY().y;},
                  r: 5,
                  fill: 'black'
                });

var goDogGo = function(enemies){
  enemies.each(function(d){
    this.nextX = getXY().x,
    this.nextY = getXY().y
  })
  .transition()
  .duration(1500)
  .ease('elastic')
  .attr({
    cx: function(d) {return this.nextX;},
    cy: function(d) {return this.nextY;}
  })
};

// var drag = d3.behavior.drag()
//         .on("drag", function(d,i) {
//             d.x += d3.event.dx
//             d.y += d3.event.dy
//             d3.select(this).attr("transform", function(d,i){
//                 return "translate(" + [ d.x,d.y ] + ")"
//             })
//         });

// player.call(drag);

// STAND BACK! We're looking at how the
/*
var moveRelative = function(dx,dy) {
  return this.transform({
    x: this.getX() + dx,
    y: this.getY() + dy,
    angle: 360 * (Math.atan2(dy, dx) / (Math.PI * 2))
  });
}

var setupDragging = function(this) {
  _this = this;
  var dragMove = function() {
    return _this.moveRelative(d3.event.dx, d3.event.dy);
  };

  var drag = d3.behavior.drag().on('drag', dragMove);
  return _this.call(drag);
}*/


/* MAN, THIS IS JUST MAGIC SHIT */
var drag = d3.behavior.drag().on('drag', function(d) {
  player
    .attr('x', d3.event.dx + +player.attr('x'))
    .attr('y', d3.event.dy + +player.attr('y'));
});

player.call(drag);



setInterval(function(){goDogGo(enemies);}, 1000);























