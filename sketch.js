function preload(){
  // put preload code here
  img1 = loadImage("coppia1.png");
  img3 = loadImage("coppia2.png");
  img4 = loadImage("coppia3.png");
  img2 = loadImage("corri.png");
}

var img1;
var img2;
var coppiaPrima;
var coppiaSeconda;
var coppiaTerza;
var tuttePrima = [];
var tutte = 5;
var player;

function setup() {

createCanvas(windowWidth, windowHeight);
background(240);
 player = new Scappa (mouseX, mouseY);


  for(var i = 0; i < tutte; i++){
  var coppiaPrima= new People(random() * width, random() * height);
  tuttePrima.push(coppiaPrima); }

}

function draw() {


   player.display();

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
  img1.resize(60,70);

  this.display = function() {
  image(img1, this.x, this.y);
  image(img3, this.x, this.y);
  image(img4, this.x, this.y);  }

}

function Scappa(_x, _y) {

  this.x = _x;
  this.y = _y;
  img2.resize(40,50);

  this.display = function() {
    image(img2, this.x, this.y);

  }

}
