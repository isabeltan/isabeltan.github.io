function setup() {
  createCanvas(400, 400);
}

function draw() {

  //draw red marker
  noStroke();
  fill(mouseY);
  circle(mouseX, mouseY, 50);
}
