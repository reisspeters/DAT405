
function setup() {

  createCanvas(180,180);
  background(255);

}


function draw(){
  noLoop();
  background(255);

  //if (mouseButton===RIGHT){
    //fill(random(50, 255), random(50, 255), random(50, 255));

//Black outline of mushroom

  fill(0)
  noStroke();

    rect(60, 10, 60, 10);

    rect(40, 20, 20, 10)
    rect(120, 20, 20, 10)

    rect(30, 30, 10, 10)
    rect(140, 30, 10, 10)

    rect(20, 40, 10, 20)
    rect(150, 40, 10, 20)

    rect(10, 60, 10, 60)
    rect(160, 60, 10, 60)

    rect(20, 120, 30, 10)
    rect(130, 120, 30, 10)

    rect(30, 120, 10, 30)
    rect(140, 120, 10, 30)

    rect(50, 110, 80, 10)

    rect(70, 120, 10, 20)
    rect(100, 120, 10, 20)

    rect(40, 150, 10, 10)
    rect(130, 150, 10, 10)

    rect(50, 160, 80, 10)

//colour of mushroom

  stroke(random(50, 255), random(50, 255), random(50, 255));
  fill(255,0,0);
  noStroke();

    rect(60, 20, 40, 10);
    rect(60, 30, 40, 10);
    rect(50, 40, 60, 10);
    rect(40, 50, 20, 10);
    rect(100, 50, 20, 10);
    rect(20, 60, 30, 10);
    rect(110, 60, 50, 10);
    rect(20, 70, 30, 10);
    rect(110, 70, 20, 10);
    rect(150, 70, 10, 10);
    rect(30, 80, 20, 10);
    rect(110, 80, 10, 10);
    rect(100, 90, 20, 10);
    rect(40, 90, 20, 10);
    rect(40, 100, 90, 10);
    rect(30, 110, 20, 10);
    rect(150, 100, 10, 10);
    rect(130, 110, 30, 10);

}
