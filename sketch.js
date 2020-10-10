var fixedRect, movingRect;
var va,vb,vc,vd;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;
  
  va = createSprite(100,200,50,50);
  va.shapeColor = "yellow";
  va.velocityX=5;
  vb = createSprite(200,200,50,50);
  vb.shapeColor = "yellow";
  vb.velocityX=-5;
  vc = createSprite(200,100,50,50);
  vc.shapeColor = "yellow";
  vc.velocityX=-5;
  vd = createSprite(100,100,50,50);
  vd.shapeColor = "yellow";
  vd.velocityX=5;
  }

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    }

bounceOff(va,vb,vc,vd,);
  
  drawSprites();
}


