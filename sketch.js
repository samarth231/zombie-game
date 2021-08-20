const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground,rightWall,leftWall
var bridge
var jointPoint
var stones = []




function setup() {
  createCanvas(1000, 1000);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  rightWall = new Base(850,300,300,80)
  leftWall = new Base(150,300,300,80)
  ground = new Base(500,800,1000,30)
  bridge = new Bridge(9,{x:180,y:300})
  jointPoint = new Link(bridge,jointPoint)
  Matter.Composite.add(bridge.body,jointPoint)

  



}

function draw() {
  background(51);
  Engine.update(engine);
  rightWall.show()
  leftWall.show()
  ground.show()
  bridge.show()
  for (var i=0;i<=8;i++){
    var x = random(width/2 - 200,width/2 + 300)
    var y = random(-10,140)
    var stone = new Stone(x,y,80,80)
    stones.push(stone)
    
  }


}
