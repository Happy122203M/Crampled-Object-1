const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,side0,side1,side2;
var paper1;

function preload(){
   
}

function setup() {
	createCanvas(800, 700);
 
   
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100, 600, 10);

	ground1 = new Ground(400, 680, 800, 20);
 
	side0 = new Dustbin(550, 620, 20, 100);
	//side1 = new Dustbin(635, 660, 150, 20);
	//side2 = new Dustbin(720, 620, 20, 100);


	Engine.run(engine);
 
}


function draw() {

 rectMode(CENTER);
 background(0);

 Engine.update(engine);

 paper1.display();

 ground1.display();

 side0.display();
// side1.display();
 //side2.display();

 drawSprites();

}

function keyPressed(){
   if(keyCode === UP_ARROW)  {
	  Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15, y: -15})
   }

 }