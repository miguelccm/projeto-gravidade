
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle,square,ground;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}
	var circle_options ={
		restitution:0.45,
		friction:0.06,
		frictionAir:0.2
	}
	var square_options ={
		restitution:1,
		friction:0.09,
		frictionAir:0.25
	}

	circle = Bodies.circle(150,10,15,circle_options);
	World.add(world,circle);


	square = Bodies.rectangle(250,10,30,30,square_options);
	World.add(world,square);


    ground = Bodies.rectangle(200,390,400,05,plane_options);
	World.add(world,ground);


	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(square.position.x,square.position.y,30,30);
  rect(ground.position.x,ground.position.y,400,05);
  ellipse(circle.position.x,circle.position.y,40);

  Engine.update(engine);
  drawSprites();
 
}



