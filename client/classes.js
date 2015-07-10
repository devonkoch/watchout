/**
* CLASSES! 
**/

var Participant = function(top, left, color) {
  this.top = top;
  this.left = left;
  this.color = color;
};

Participant.prototype.setPosition = (top, left) {

  

};





// Enemy Class
var Enemy = function(color) {

  Participant.call(this);

  this.top = Math.random() * 100;
  this.left = Math.random() * 100;


};

Enemy.prototype = Object.create(Participant.prototype);
Enemy.prototype.constructor = Enemy;








// Player Class
  // Need methods to drag around player 
  // Need to detect if coordinates are the same