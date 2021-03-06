var car,wall;
var speed,weight;

function setup() {
  createCanvas(600,400);
  car=createSprite(100, 50, 50, 50);
  wall=createSprite(600,200,60,80);

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;

}

function draw() {
  background("black");  

  if(wall.X-car.X<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.spaeColor=colr(255,0,0);
    }
    if(deformation<180&&deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapecolor=color(0,255,0);
    }
  }
  drawSprites();
}