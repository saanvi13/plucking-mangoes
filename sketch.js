
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;
var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var myWorld,boy;

function preload()
{
	boy=loadImage("boy.png");
	bg=loadImage("bg.jpg");
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	myWorld = engine.world;
	Engine.run(engine);

	tree=new Tree(800,600);
	stone=new Stone(210,500,30);
	ground=new Ground(500,595,width,20);
	sling = new Slingshot(stone.body,{x:100,y:400});

	mango1 = new Mango(700,100,30);
	mango2 = new Mango(750,130,30);
	mango3 = new Mango(900,140,30);
	mango4 = new Mango(800,70,30);
	mango5 = new Mango(750,70,30);
	mango6 = new Mango(900,230,30);
	mango7 = new Mango(700,230,40);
	mango8 = new Mango(800,150,40);
	mango9 = new Mango(760,250,40);
	mango10 = new Mango(850,220,40);
	mango11 = new Mango(870,90,40);
	mango12 = new Mango(650,160,40);
	mango13 = new Mango(980,200,45);



  
}


function draw() {
  background(bg);

  rectMode(CENTER);
  imageMode(CENTER);
  image(boy,150,500,200,350);

  tree.display();

  sling.display();

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
  mango11.display();
  mango12.display();
  mango13.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12); 

  stone.display();

  drawSprites();

  textSize(25);
  fill("black")
  text("Press Space to get a second Chance to Play!!",50 ,50);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
  

function mouseReleased(){
	sling.fly();
  }
  
  function keyPressed(){
	if(keyCode===32){
	  sling.attach(stone.body);
	}
  }

  
  function detectollision(lstone,lmango){
	
	stoneBodyPosition=lstone.body.position
  

  mangoBodyPosition=lmango.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }