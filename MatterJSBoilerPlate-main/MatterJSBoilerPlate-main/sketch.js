
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1 , ground2 , ground3;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
    var balloptions = {
		restitution:0.3,
		density:1.2
	}
	ball = Bodies.circle(260,100,20,balloptions)
	World.add(world,ball)
	//Create the Bodies Here.
     ground1 = new Ground(width/2,670,width,20);
     ground2 = new Ground(1100,600,20,120)
	 ground3 = new Ground(1350,600,20,120)

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  ground1.display();
  ground2.display();
  ground3.display();
  ellipse(ball.position.x,ball.position.y,20,20)
  
}

function keyPressed() {
if (keyCode===UP_ARROW) {
 Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})	
}
}


