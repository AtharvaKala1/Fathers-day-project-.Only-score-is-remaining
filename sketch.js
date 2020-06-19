const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;
var bg = "sprites/bb.png";

var score = 0;

function preload() {
    backgroundImage = loadImage("sprites/bb.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    ball = new Ball(400,120,400,140);

    basket = new Basket(1035,150,150,150);

    player = new Player(300,300,124,215);

    hoop = new Hoop(1180,245,160,300);

    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:400, y:140});
}

function draw(){
    if(backgroundImage){
    background(backgroundImage);
    }
     fill("white");

     text("score: "+score,width-300,50);

   
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    slingshot.display();
    ball.display();  
    basket.display();
    hoop.display();
    player.display();
    
    
     
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

/*//api concept
async function getBackgroundImage(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJason = await response.jason();
var datetime = responseJason.datetime;
var hour = datetime.slice(11,13);
console.log(hour);
if(hour>=06 &&hour<=10) {
bg = "sprites/bg1.png";
}

else{

bg = "sprites/bg2.jpg";


}

backgroundImage = loadImage(bg);
console.log(backgroundImage);

}*/