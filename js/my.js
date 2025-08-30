var sketch = new p5( function( p5sketch ) {

  let nextPosX, nextPosY, posX, posY;
  
  function colourRandom() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
  }
  
  function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  
  function randomX() {
    return p5sketch.width * Math.random();
  }
  
  function randomY() {
    return p5sketch.height * Math.random();
  }
  
  
  p5sketch.setup = function () {
    p5sketch.createCanvas( 300, 300 ).parent('runtimeContainer');
    p5sketch.background( '#ffffff' );
    p5sketch.stroke( '#333333' );
    p5sketch.fill( '#33ccff' );
    posX = randomX();
    posY = randomY();
  }
  
  p5sketch.draw = function () {
    p5sketch.stroke( colourRandom() );
    nextPosX = randomX();
    nextPosY = randomY();
    p5sketch.strokeWeight( mathRandomInt(2, 20) );
    p5sketch.line( posX, posY, nextPosX, nextPosY );
    posX = nextPosX;
    posY = nextPosY;
  };
  
  p5sketch.mousePressed = function () {
  };
  
  p5sketch.mouseReleased = function () {
  };
  
});
