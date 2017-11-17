var racerSize;
racerSize = 60;
var startX = 0;
var startY = 100;

var racer1start = 0
var racer2start = 0
var racer3start = 0
var racer4start = 0
function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(200, 225, 255);

  strokeWeight(4);
  stroke(0)
  line(580, 0, 580, height);

  
  strokeWeight(1)
  
  ellipse(racer1start, startY, racerSize, racerSize);
  ellipse(racer2start, startY * 2, racerSize, racerSize);
  ellipse(racer3start, startY * 3, racerSize, racerSize);
  ellipse(racer4start, startY * 4, racerSize, racerSize);
  
  racer1start = racer1start + 3
  racer2start = racer2start + 2
  racer3start = racer3start + 5
  racer4start = racer4start + 7
}