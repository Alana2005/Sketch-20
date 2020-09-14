var car, wall; 
var speed, weight; 


function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90); 
  weight=random(400,1500);

  var car=createSprite(100,800,20,20); 

  var wall=createSprite(1500,200,60,height/2);
  wall.shapeColor(80,80,80); 

  car.velocityX=speed; 
}

function draw() {
  background(255,255,255);  

  if (car.x<wall.width/2 && 0.5XweightXspeedXspeed/22500<100){
    car.shapeColor(0,255,0);
  }

  if (car.x<wall.width/2 && 0.5XweightXspeedXspeed/22500>100 
    && 0.5XweightXspeedXspeed/22500<180){
    car.shapeColor(230,230,0);
  }
  if (car.x<wall.width/2 && 0.5XweightXspeedXspeed/22500>180){
    car.shapeColor(255,0,0);
  }





  drawSprites();
}