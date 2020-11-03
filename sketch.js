
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;
var rect1;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
    
  }
  
  object = Bodies.rectangle(200,100,50,50,options);
  World.add (world,object)
  var option1 = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,350,400,20,option1)
  World.add(world,ground)
  console.log(object)
  var option2 = {
    restitution : 0.8
  }
  ball = Bodies.circle(200,100,20,option2)
  World.add(world,ball);

  //rect1 = createSprite(200, 200, 50, 50);
  //rect1.shapeColor ="red";
} 

function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);
 // drawSprites();
  rect (object.position.x,object.position.y,50,50);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20)
}