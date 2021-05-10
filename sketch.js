const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var border1, border2, border3, border4;
var ground;
var division1, division2, division3, division4, division5, division6;
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(450,650);

  engine = Engine.create();
  world = engine.world;

  border1 = createSprite(250,648,650,5);
  border1.shapeColor = color(255,0,0);

  border2 = createSprite(450,320,6,650);
  border2.shapeColor = color(255,0,0);

  border3 = createSprite(250,3,650,5);
  border3.shapeColor = color(255,0,0);

  border4 = createSprite(3,320,5,650);
  border4.shapeColor = color(255,0,0);

  ground = new Ground(200, 645, 600, 10);

  division1 = new Division(10, 560, 10, 200);
  division2 = new Division(90, 560, 10, 200);
  division3 = new Division(180, 560, 10, 200);
  division4 = new Division(270, 560, 10, 200);
  division5 = new Division(360, 560, 10, 200);
  division6 = new Division(445, 560, 10, 200);
  

  for (var j = 40; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,75,10));
  }

  for (var j = 15; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,175,10));
  }

   for (var j = 40; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,275,10));
  }

   for (var j = 15; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,375,10));
     
  }

  

  
  
}

function draw() {
   background(0);

   Engine.update(engine);

   

   ground.display();

   division1.display();
   division2.display();
   division3.display();
   division4.display();
   division5.display();
   division6.display();
   

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  border1.display();
  border2.display();
  border3.display();
  border4.display();


}