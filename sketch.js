var form,player;
var gameState=0;
var bg;
var player1,girl;
var sand,pyramid;

function preload(){
  girl=loadAnimation("images/girl1.png","images/girl2.png");
  sand=loadImage("images/desertimg.jpg");
  pyramid=loadImage("images/pyramid.png");
  
}

function setup(){
  createCanvas(displayWidth,displayHeight-30);
  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight-30);
 bg.scale=5;
  bg.addImage("background",sand);
   player1=createSprite(30,displayHeight-100,20,60);
   player1.addAnimation("girl1",girl);

  pyramid=createSprite("200,200,50,50");
  pyramid.addImage("obstacle",pyramid);
 form=new Form();

}
function draw(){
  background("pink");
  if(gameState===1){
   drawSprites();
    }
   
  if(keyIsDown(RIGHT_ARROW)){
    player1.x=player1.x+5;
  }

   
  if(keyIsDown(LEFT_ARROW)){
    player1.x=player1.x-5;
  }
  
   
  if(keyIsDown(UP_ARROW)){
    player1.y=player1.y-5;
  }
  
   
  if(keyIsDown(DOWN_ARROW)){
    player1.y=player1.y+5;
  }
  
  

form.display();
}


