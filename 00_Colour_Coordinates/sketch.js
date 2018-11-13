

function setup() {
  createCanvas(500,500);
}

function draw() {
  var x1 = map(mouseX,0,500,0,255);
  var y1 = map(mouseY,0,500,0,255);
  var x2 = map(mouseX,0,500,255, 0);
  var y2 = map(mouseY,0,500,255, 0);

  background(255);

  noStroke();
  fill(255, 0, 0, x1);
  rect(0, 0, 250, 250, x1)
  fill(0, 255, 40, y1);
  rect(250, 0, 250, 250, y1)
  fill(0, 255, 255, x2);
  rect(250, 250, 250, 250, x2)
  fill(255, 255, 0, y2);
  rect(0, 250, 250, 250, y2)
}
