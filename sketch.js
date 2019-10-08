function preload(){
  // put preload code here
}
var img;
var coppiaPrima;
var tuttePrima = [];
var tutte = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < tutte; i++){
  var coppiaPrima= new People(random() * width, random() * height);
  tuttePrima.push(coppiaPrima);

 }



}

function draw() {

  // iterate all the items in the list
   for(var i = 0; i < tuttePrima.length; i++){
   	//temporary variable
   	var b = tuttePrima[i];
   	b.display();
   }

}

function People(_x,_y) {

  this.x = _x;
  this.y = _y;
  img = loadImage("coppia1.png");
  img.resize(60,70);

  this.display = function() {
    image(img, this.x, this.y);

  }
}

function Scappa(_x, _y) {

  this.x = _x;
  this.y = _y;
  img = loadImage("corri.png");
  img.resize(60,70);

  this.display = function() {
    image(img, this.x, this.y);

  }
}
