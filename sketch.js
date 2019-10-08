function preload() {
  // put preload code here
  img1 = loadImage("coppia1.png");
  img3 = loadImage("coppia2.png");
  img4 = loadImage("coppia3.png");
  img2 = loadImage("corri.png");
}


var coppiaPrima;
var coppiaSeconda;
var coppiaTerza;
var tuttePrima = [];
var player;


function setup() {

  createCanvas(windowWidth, windowHeight);
  noCursor();

  for (var i = 0; i < 30; i++) {
    var coppiaPrima = new People(random() * width, random() * height);
    tuttePrima.push(coppiaPrima);
    var coppiaSeconda = new CoppiaSeconda(random() * width, random() * height);
    tuttePrima.push(coppiaSeconda);
    var coppiaTerza = new CoppiaTerza(random() * width, random() * height);
    tuttePrima.push(coppiaTerza);

  }


}

function draw() {
  background('#737f75');

  player = new Scappa(mouseX, mouseY);
  player.display();
  player.move();


  for (var i = 0; i < tuttePrima.length; i++) {
    tuttePrima[i].display();
    tuttePrima[i].move();
  }

  push();
  textAlign(CENTER, CENTER);
  fill("black");
  textSize(25);
  textWidth(BOLD);
  text('get rid of all the happy couples', windowWidth / 2, windowHeight - 60);
  text('and create your clones', windowWidth / 2, windowHeight - 30);
  pop();


}

function mousePressed() {
  for (var i = 0; i < tuttePrima.length; i++) {
    tuttePrima[i].clicked();
  }
}


function Scappa(_x, _y) {

  this.x = _x;
  this.y = _y;
  img2.resize(40, 50);
  this.speed = 2;
  this.body = image;

  var xInc = this.x;
  var yInc = this.y;

  this.move = function() {
    this.x += xInc * this.speed;
    this.y += yInc * this.speed;

  }
  this.display = function() {

    image(img2, this.x, this.y);

  }

}

function People(_x, _y) {

  this.x = _x;
  this.y = _y;
  img1.resize(60, 70);
  this.speed = 2;
  this.size = 30;


  this.display = function() {
    image(img1, this.x, this.y);
  }
  var xIncrease = 1;
  var yIncrease = 1;

  this.move = function() {
    this.x += xIncrease * this.speed;
    this.y += yIncrease * this.speed;


    if (this.y > windowHeight || this.y < 0) {
      yIncrease = -yIncrease;
    }
  
    if (this.x > windowWidth || this.x < 0) {
      xIncrease = -xIncrease;
    }
  }


  this.clicked = function() {
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.size) {
      this.display = function() {
        image(img2, this.x, this.y);
      }
    }
  }


}

function CoppiaSeconda(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.speed = 2;
  this.size = 30;
  img3.resize(60, 70);


  this.display = function() {
    image(img3, this.x, this.y);
  }

  var xIncrease = 1;
  var yIncrease = 1;

  this.move = function() {
    this.x += xIncrease * this.speed;
    this.y += yIncrease * this.speed;


    if (this.y > windowHeight || this.y < 0) {
      yIncrease = -yIncrease;
    }

    if (this.x > windowWidth || this.x < 0) {
      xIncrease = -xIncrease;
    }
  }

  this.clicked = function() {
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.size) {
      this.display = function() {
        image(img2, this.x, this.y);
      }
    }
  }


}

function CoppiaTerza(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.speed = 2;
  this.size = 30;

  img4.resize(60, 70);

  this.display = function() {
    image(img4, this.x, this.y);
  }


  this.clicked = function() {
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.size) {
      this.display = function() {
        image(img2, this.x, this.y);
      }
    }
  }

  var xIncrease = 1;
  var yIncrease = 1;

  this.move = function() {
    this.x += xIncrease * this.speed;
    this.y += yIncrease * this.speed;


    if (this.y > windowHeight || this.y < 0) {
      yIncrease = -yIncrease;
    }

    if (this.x > windowWidth || this.x < 0) {
      xIncrease = -xIncrease;
    }
  }

}
