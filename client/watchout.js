// start slingin' some d3 here.

// global variables
var score = 0;
var highScore = 0;
var collisions = 0;


var gameOptions = {
  height: 500,
  width: 500,
  enemyCount: 10,
  bg: '#d8d8d8'
};

// var axiis = {
//   x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
//   y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
// };



var body = d3.select(".container");

var svg = body.append("svg")
  .attr("width", gameOptions.width)
  .attr("height", gameOptions.height)
  .style('background-color', gameOptions.bg);


var initiateCircle = function(){
  svg.append("circle")
    .attr("cx", Math.random() * 480)
    .attr("cy", Math.random() * 480)
    .attr("r", 20)
    .style("fill", "red");
    // transition
    // duration
};

for (var i = 0; i < 10; i++) {
  initiateCircle();
};

var circlesArr = d3.selectAll('circle');
console.log(circlesArr)

// var goDogGo = function(circle) {
circlesArr.transition()
  .duration(1000).attr({
      cx: Math.random() * 480,
      cy: Math.random() * 480
    }); 
// };

