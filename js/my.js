//
//window.onload = function() {
//    alert("Welcome to our journal!");
//};

function setup() {
  createCanvas(400, 400);
}

function draw() {

  //draw red marker
  noStroke();
  fill(mouseY);
  circle(mouseX, mouseY, 50);
}
