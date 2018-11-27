
let sizeRandom
let xRandom
let yRandom

function setup() {
  createCanvas(500,500);
  frameRate(1);

}

function draw() {
  size = random(200);
  xRandom = random (width);
  yRandom = random (height);
  customShape(xRandom,yRandom,size);

}

function customShape(x,y,size){
    stroke(0);
    strokeWeight(1);
    fill(255);
    ellipse(x, y, size, size);

    strokeWeight(5);
    ellipse(x, y, size/1.2, size/1.2);

    strokeWeight(1);
    ellipse(x, y, size/1.4, size/1.4);

    stroke(0,0,255);
    strokeWeight(8);
    ellipse(x, y, size/2, size/2);

    noStroke();
    fill(255,0,0);
    ellipse(x, y, size/4, size/4);
}







    //fill(random(255), random(255), random(255), random(255));
    //ellipse(random(500), random(500), size, size);
