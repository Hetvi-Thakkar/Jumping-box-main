var canvas;
var music;
var jumpingBox,edges;
//var rect1,rect2,rect3,rect4;
var s1,s2,s3,s4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    s1 = createSprite(0,550,200,30);
    s1.shapeColor = "yellow";
    s2 = createSprite(295,580,200,30);
    s2.shapeColor = "pink";
    s3 = createSprite(515,580,200,30);
    s3.shapeColor = "red";
    s4 = createSprite(740,580,220,30);
    s4.shapeColor = "blue";

    //create box sprite and give velocity
    jumpingBox = createSprite(random(20,750),100,40,40);
    jumpingBox.shapeColor = "white";
    jumpingBox.velocityX = 4;
    jumpingBox.velocityY= 9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    //jumpingBox.bounceOff(edges);
    jumpingBox.bounceOff(s1);
     jumpingBox.bounceOff(s2);
     jumpingBox.bounceOff(s3);
     jumpingBox.bounceOff(s4); 
     jumpingBox.bounceOff(edges); 

    if(s1.isTouching(jumpingBox)&& jumpingBox.bounceOff(s1)){
        jumpingBox.shapeColor = "yellow";
        music.play();
    }
    if(s2.isTouching(jumpingBox)){
        jumpingBox.shapeColor = "pink";
        jumpingBox.velocityX = 0;;
        jumpingBox.velocityY = 0;
        music.stop();
    }
    if(s3.isTouching(jumpingBox)){
        jumpingBox.shapeColor = "red";
        music.play();
    }
    if(s4.isTouching(jumpingBox)){
        jumpingBox.shapeColor = "blue";
        music.stop();
    }
    
    

    
     drawSprites();
      
    //add condition to check if box touching surface and make it box
}
