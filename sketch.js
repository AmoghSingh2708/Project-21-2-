var canvas;
var music;
var green, red, blue, yellow;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(680,600);

    //create 4 different surfaces
     green = createSprite(90,580,120,30);
     green.shapeColor = "green"
     red = createSprite(250,580,120,30);
     red.shapeColor = "red"
     blue = createSprite(410,580,120,30);
     blue.shapeColor = "blue"
     yellow = createSprite(570,580,120,30);
     yellow.shapeColor = "yellow"
     
     

    //create box sprite and give velocity
    box = createSprite(random(20,650));
    box.scale = 0.3;
    box.velocityY = 5
    box.velocityX = 5
}

function draw() {
    background("black");
    //create edgeSprite
   edges  = createEdgeSprites();
   box.bounceOff(edges);
    
   



    //add condition to check if box touching surface and make it box

     if(yellow.isTouching(box) && box.bounceOff(yellow)){
         box.shapeColor = "yellow"
         music.play();
         
     }
     if(blue.isTouching(box) && box.bounceOff(blue)){
        box.shapeColor = "blue"
        music.play();
    }
    if(red.isTouching(box) && box.bounceOff(red)){
        box.shapeColor = "red"
        music.play();
    }
    if(green.isTouching(box)){
        box.shapeColor = "green"
        box.velocityX = 0
        box.velocityY = 0
        music.stop();
    }


    drawSprites();
}
