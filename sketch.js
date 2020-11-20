var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var obstacle, obstacleImage
var survivalTime=0;
function preload(){
  
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
   
}



function setup() {
  //createCanvas(600,200);  // by deafult it will be (400,400)
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale= 0.1;
  
  ground = createSprite(400,380,900,10);
  ground.velocityX= -4;
  ground.x= ground.width/2;
  console.log(ground.x);
  //ground.visible= false;
 
  //make Group()
   FoodGroup = new Group();
  obstaclesGroup = new Group();
  
 
}


function draw() {
  background(220);
      //displaying survivalTime

  
     if(keyDown("space")&& monkey.y >= 160) {
        monkey.velocityY = -12;
       }
       
        //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
   if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
  monkey.collide(ground);
 
    
  
      spawnBanana();
      spawnObstacle();
     drawSprites();
  
  
   if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);

}

function spawnBanana()
{
   if (frameCount % 60 === 0)
{
     banana= createSprite(600,250,40,10);
   // banana.addImage(bananaImage);
    banana.velocityX = -6;
    
    banana.addImage(bananaImage);  
  
    //generate random banana
    banana.y= Math.round(random(120,200));
  
    //assign scale and lifetime to the banana         
    banana.scale = 0.05;
    banana.lifetime = 100;
  
  //add each banana to the group
    FoodGroup.add(banana)
  
  monkey.depth = banana.depth + 1;
}
}

function spawnObstacle()
{
   if (frameCount % 300 === 0)
{
     obstacle= createSprite(600,360,10,40);
  
    obstacle.velocityX = -6;
    
    obstacle.addImage(obstacleImage);  

  
    //assign scale and lifetime to the banana         
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;
  
  //add each obstacle to the group
    obstaclesGroup.add(obstacle);
}
}


