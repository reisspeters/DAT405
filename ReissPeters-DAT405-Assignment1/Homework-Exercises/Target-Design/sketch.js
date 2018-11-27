//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(500,500);
}

//Rendering function
function draw() {
  //Set a background color
  background(255);
  strokeWeight(10);
  stroke(50);
  ellipse(250, 250, 300, 300);
  ellipse(250, 250, 250, 250);

  strokeWeight(10);
  stroke(0, 90, 255)
  ellipse(250, 250, 180, 180);

  nostroke();
  fill('red')
  ellipse(250, 250, 120, 120);



}
