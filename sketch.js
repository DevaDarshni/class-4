
function preload(){
shipImage=loadImage("ship1.png","ship2.png")
  seaImage=loadImage("sea.png")
  
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.addImage(seaImage)
  sea.scale=0.3
 ship=createSprite(100,200)
  ship.scale=0.2
  sea.velocityX=-2
  ship.addImage(shipImage)
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2;}
 drawSprites();
}