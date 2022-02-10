var astro ;
var astroImage;
var rocket;
var rocketImage;
var  spaceImage;
var astroidsGroup, astroid,astroidimage;
var gamestate= "play";
var astroLife = 1;
var tool,toolGroup,toolImage;
var score=0;

function preload(){
  astroImage=loadImage("astro.png")
  rocketImage=loadImage("rocket.jpeg")
  spaceImage=loadImage("space.jpeg")
  astroidimage=loadImage("astroids.png")
  toolImage=loadImage("tools.jpeg")
}
function setup() 
{

  createCanvas(1000,600);
  astro= createSprite(500,550)
  astro.addImage(astroImage);
  astro.scale= 0.2

  rocket= createSprite(800,400)
  rocket.addImage(rocketImage)
  rocket.scale= 0.5

 astroidsGroup=createGroup();
 toolGroup=createGroup();

  
  
}

function draw() 
{
background(spaceImage);
textSize(30)
fill ("white")
text("Life: "+astroLife,200,150)

if(toolGroup.isTouching(astro)){
  score=score+1;
  tool.destroy()
}
if(astroidsGroup.isTouching(astro)){
  astroid.destroy
  astroLife = astroLife-1;
}
if(astroLife==0){
  gamestate="End"
}
if(gamestate=="play"){
  createAstroids()
  createTools()
  textSize(20)
  fill("white")
  text("Score: "+ score,100,200)
}
if(gamestate=="End"){
  astroidsGroup.destroyEach();
  toolGroup.destroyEach();
astro.destroy();
textSize(40)
fill("white")
text("YOU LOOSE!",500,200)
}



if(keyDown("RIGHT_ARROW")){
  astro.x+=3
}
if(keyDown("LEFT_ARROW")){
  astro.x-=3
}

drawSprites();

}

function createAstroids(){
  if(frameCount%100==0){
    astroid= createSprite(Math.round(random(10,900)),0);
    astroid.addImage(astroidimage)
    astroid.scale=0.05
    astroid.velocityY=2
    astroidsGroup.add(astroid)
    astroid.lifetime= 300;
    
  }
}
function createTools(){
  if(frameCount%60==0){
    tool=createSprite(Math.round(random(10,900)),0);
    tool.addImage(toolImage)
    toolGroup.add(tool)
    tool.lifetime=300
    tool.scale=0.05
    tool.velocityY=3
    
  }
}

