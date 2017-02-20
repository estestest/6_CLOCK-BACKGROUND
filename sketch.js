var myImg;
var rett;

var clic=true;
function preload() {
  myImg1 = loadImage("colore.jpg");
  myImg2= loadImage("colore.jpg");
  
}

function setup() {
  	createCanvas(windowWidth, windowHeight);
  	

}


function draw() {
   myImg1.filter("gray");
backgroundImage(myImg1)

push();
rectMode(CENTER)
noFill()
strokeWeight(2)
 rect(width/2,height/2+height/12,width*6/8,height*1/3)

 pop();
 
 noFill()
    textFont('century gothic')

   
    textSize(height/4)
    textAlign(CENTER)
    text(hour(),width*2/8,height*2/3)
    textSize(height/4)
    textAlign(CENTER)
    text(minute(),width*4/8-10,height*2/3)
    textSize(height/4)
    textAlign(CENTER)
    text(second(),width*6/8,height*2/3)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  if(clic===true){ 
  
  myImg1.filter("invert");
  strokeWeight(2)
  stroke(0)  
  clic=false
    }
 
   else{
    myImg1.filter("invert");
    strokeWeight(1)
    stroke(255) 
     clic=true;
    
    
   }} 
  
function backgroundImage(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}