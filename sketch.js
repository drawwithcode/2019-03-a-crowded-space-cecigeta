function preload(){
  // put preload code here
}
var img;
var coppiaPrima;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("coppia1.png");

  coppiaPrima = new People (width/2, height/2); 


}

function draw() {
  // put drawing code here
}

function People(_x,_y) {

  this.x = _x;
  this.y = _y;

  this.display = function() {
    image(img, this.x, this.y);
  }
}
