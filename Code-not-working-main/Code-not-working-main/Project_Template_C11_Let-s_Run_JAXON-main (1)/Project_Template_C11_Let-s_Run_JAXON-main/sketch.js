var track1Img,boy1Img,track1,boy 
function preload(){
  //pre-load images
  track1Img=loadImage("path.png")
  boy1Img=loadAnimation("Runner-1.png","Runner-2.png");
}



function setup(){
  createCanvas(400,400);
  //create sprites here
  track1=createSprite(200,200);
  track1.addImage(track1Img);
  track1.velocityY = 4;
  track1.scale = 1.2;

  boy=createSprite(370,200,20,10);
  
  boy.addAnimation("running",boy1Img)
  boy.scale = 0.07
  
  
}

function draw() {
  background(0);
  boy.x = mouseX;
  

if(track1.y > 400){
  track1.y = height/2;
}

  drawSprites();
}
