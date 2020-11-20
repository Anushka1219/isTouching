var mrect, frect;
var O1,O2

function setup() {
  createCanvas(windowWidth, windowHeight);
  frect = createSprite(400, 200, 50, 50);
  
  mrect = createSprite(200,200,65,30);

  O1 = createSprite(700,300,75,65);
  
  O2 = createSprite(800,320,50,50);
  
 
}

function draw() {
  background(255,255,255);  
  //mrect.y=mouseY;
 // mrect.x=mouseX;

  O1.x=mouseX;
  O1.y=mouseY;

  drawSprites();

  if(collisionDetection(O1,O2)){
    fill("Purple");
    textSize(28);
    text("Collission Detected",500,500);
  }
  else{
    fill("Purple");
    textSize(28);
    text("No Collission Detected",500,500);
  
  }

  



}

