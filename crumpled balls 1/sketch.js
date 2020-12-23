var box,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(600, 800);
	engine = Engine.create();
	box = new Box(300,790);
	paper = new Paper(20,50,20,20);
	world = engine.world;
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
 
box.display();
paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:25,y:40});
	}
}

