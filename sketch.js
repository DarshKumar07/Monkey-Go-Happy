var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,9000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
background("225");
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  {
  if(keyDown("space")&& monkey.y>=90){
    monkey.velocityY=-12;
  }
    monkey.velocityY=monkey.velocityY+0.8;
    monkey.velocityY=monkey.velocityY+0.8;
    
    monkey.collide(ground);
    
    stroke("white");
    textSize(20);
    fill("white");
    text("Score: "+score,500,50);
    
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
    text("Survival Time: "+survivalTime,100,50);
  
    foods();
    obstacles();
    
  drawSprites();
}
}
function foods(){
  if(World.frameCount%80===0){
    position=Math.round(random(1,2));
    food=createSprite(0,200,20,20);
    food.addImage(bananaImage);
    food.setLifetime=100;
    foodGroup.add(food);
    
    if(position==1){
      food.x=610;
      food.velocityX=-(7+(survivalTime/4));
      food.scale=0.1;
    } else {
      if(position==2){
        food.x=0;
        food.velocityX=(7+(survivalTime/4));
        food.scale=0.1;
      }
    }
  }
  drawSprites();
}
function obstacles(){
  if(World.frameCount%300===0){
    obstacle=createSprite(610,335,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.setLifetime=50;
    obstacle.velocityX=-7;
    obstacle.scale=0.1;
    
    obstacleGroup.add(obstacle);
  }
}




