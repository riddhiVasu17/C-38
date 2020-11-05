var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var database;

var form, player, game;

var cars, car1, car2, car3, car4;


function setup(){
  canvas = createCanvas(displayWidth-5, displayHeight-170);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    //clear();
    game.play();
  
  }

}

function keyPressed() {

  if(keyCode === 24 && player.index !== null){
    player.distance +=50
    player.update();
  }

}
