
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg;

function preload()
{
boyImg= loadImage("Plucking Mangoes/boy.png");
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1= new Tree(1000,420,600,700);

	mango1 = new Mango(random(800,1200),random(150,400),50,50);
	mango2 = new Mango(random(800,1200),random(150,400),50,50);
	mango3 = new Mango(random(800,1200),random(150,400),50,50);
	mango4 = new Mango(random(800,1200),random(150,400),50,50);
  mango5 = new Mango(random(800,1200),random(150,400),50,50);
  mango6 = new Mango(random(800,1200),random(150,400),50,50);
	mango7 = new Mango(random(800,1200),random(150,400),50,50);
	mango8 = new Mango(random(800,1200),random(150,400),50,50);
	mango9 = new Mango(random(800,1200),random(150,400),50,50);
  mango10 = new Mango(random(800,1200),random(150,400),50,50);

	stone1 = new Stone(200,200,70,70);

  var options={
    bodyA:stone1.body,
    bodyB:(300,655),
    stiffness: 0.04,
    length: 10
  }
  var elastic =Constraint.create(options);
  World.add(world,elastic);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,206,250);

  imageMode(CENTER);
  image(boyImg,300,655,200,300);

   tree1.display();

   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();


   stone1.display();

  fill(184,134,11);
  rect(800,770,1600,70);

  stroke(0);
  strokeWeight(10);
  line(elastic.bodyA.position.x,elastic.bodyA.position.y,elastic.bodyB.position.x,elastic.bodyB.position.y);

  drawSprites();
 
}



