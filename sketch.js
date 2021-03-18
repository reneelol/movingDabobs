
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(500,50,500,20);
	bob1 = new Bob(300,300,30)
    bob2 = new Bob(400,300,30)
	bob3 = new Bob(500,300,30)
    bob4 = new Bob(600,300,30)
	bob5 = new Bob(700,300,30)
	rope1 = new Rope(bob1.body,roof.body)
	rope2 = new Rope(bob2.body,roof.body)
	rope3 = new Rope(bob3.body,roof.body)
	rope4 = new Rope(bob4.body,roof.body)
	rope5 = new Rope(bob5.body,roof.body)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}
function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-50})
	}
}


