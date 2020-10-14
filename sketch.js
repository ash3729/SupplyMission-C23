var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	// box1 = createSprite(width/2,height-47,100,10);
	// box1.shapeColor("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

	box1 = new box(width/2,height-47,150,10);
	box2 = new box(480,615,10,90);
	box3 = new box(320,615,10,90);
}


function draw() {
	
  rectMode(CENTER);
	
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  fill("red")
//   rect(width/2,height-47,100,10);
//   rect(450,640,10,50);
//   rect(350,640,10,50);
	box1.display();
	box2.display();
	box3.display();

  drawSprites();
  keyPressed();
 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic( packageBody , false);
	packageSprite.x = packageBody.position.x;
   	packageSprite.y = packageBody.position.y;
}
}



