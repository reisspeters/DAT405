let size = 50;

function setup() {
  createCanvas(500, 500);
frameRate(5)
}

function draw() {
  background(255,0, 255);
  fill(random(40), random(40), random(40));


  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {

      rect(x*size, y*size, size, size);
    }
  }
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {

    fill(random(255), random(255), random(255));
      ellipse(x*size+25, y*size+25, size/2, size/2);

    }
  }
}
