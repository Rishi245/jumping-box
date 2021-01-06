var canvas;
var music;
var block1, block2, block3, block4;
var collider

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapecolor = rgb(0, 0 , 255);

    block2 = createSprite(295,580,200,30);
    block2.shapecolor = rgb(255,128,0)

    block3= createSprite(515,580,200,30);
    block3.shapecolor = rgb(153,0,76);

    block4 = createSprite(740,580,220,30);
    block4.shapecolor = rgb(0,100,0);






    collider = createSprite(random(20,750),100, 40,40);
    collider.velocityX = 4;
    collider.velocityY = 9;
    collider.shapecolor = rgb(255,255,255);


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    collider.bounceOff(block1);
    collider.bounceOff(block3);
    collider.bounceOff(block4);


    if(collider.isTouching(block2)) {
        collider.velocityX = 0;
        collider.velocityY = 0;
      }

      createEdgeSprites();
  collider.bounceOff(edges);
  


    //create edgeSprite



    //add condition to check if box touching surface and make it box

drawSprites();
}