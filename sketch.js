var tree;

function setup(){
 createCanvas(500,700);

 tree = createSprite(250,350,40,40);
 tree.shapeColor = "lightgreen";

}

function draw(){
 background("black");

 drawSprites();
}