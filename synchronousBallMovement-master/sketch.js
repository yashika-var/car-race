var canvas,backgroundImg;
var gameState = 0;
var allPlayers;
var playerCount;
var dataBase;
var distance = 0;
var p,f,g;
var car1,car2,car3,car4,cars;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  dataBase = firebase.database();
  g = new game();
  g.getState();
  g.start();
}

function draw(){
  if(playerCount==4){
    g.update(1);
  }
  if(gameState==1){
    clear();
    g.play();
  }
}