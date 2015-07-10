// start slingin' some d3 here.

// global variables
var score = 0;
var highScore = 0;
var collisions = 0;


var gameOptions = {
  height: 500,
  width: 500,
  enemyCount: 10,
  bg: 'grey'
};

// var axiis = {
//   x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
//   y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
// };

var bodySelection = d3.select(".container");

var svgSelection = bodySelection.append("svg")
  .attr("width", gameOptions.width)
  .attr("height", gameOptions.height)
  .style('background-color', gameOptions.bg);

var circleSelection = svgSelection.append("circle")
  .attr("cx", 250)
  .attr("cy", 250)
  .attr("r", 20)
  .style("fill", "red");