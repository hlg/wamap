var s = 20.0;
var paletteSize = 10;
var debug = false;
var s1, s2;
var diameter;
var distance;
var radius;
var a, b;
var palette;

function initSize(){
  diameter = 400.0/s;
  distance = diameter/10;
  radius = diameter/2;
  a = radius + distance/2;
  b =  a * Math.sqrt(3); // 2*a * Math.cos(Math.toRadians(30))
}

function initPalette(){
  palette = [];
  for (var i=0; i<paletteSize; i++){
    palette[i] = [rand256(),rand256(),rand256()];
  }
}

function setup() {
  initSize();
  initPalette();
  var h = a*(4*s-2)
  var w = b*(2*s-2) + a*2
  createCanvas(h, w);
  s1 = createSlider(10,40,20);
  s2 = createSlider(2,32,10);
  button1 = createButton('Redraw');
  button2 = createButton('New colours');
  s1.parent('control');
  s2.parent('control');
  s1.changed(changeSize);
  s2.changed(changeColour);
  button1.parent('control');
  button1.mousePressed(redraw);
  button2.parent('control');
  button2.mousePressed(redrawWithNewColours);
  noLoop();
  redraw(); 
}

function changeSize(){
  s = s1.value();
  initSize(); 
  redraw();
}

function changeColour(){
  paletteSize =  s2.value();
  initPalette(); 
  redraw();
}

function redrawWithNewColours(){
  initPalette(); 
  redraw();
}

function draw() {
  background(0);
  translate(a*(2*s-1), a+b*(s-1));
  for(var y = -(s-1); y<=0; y++){ 
    for(var x = y; x<=0; x+=2){ 
      var RGB = palette[randInt(paletteSize)]
      var R = RGB[0]; var G = RGB[1]; var B = RGB[2];
      for(var n=0; n<6; n++){
        for(var m=0; m<2; m++){ 
          if(debug) stroke(255*m);
          scale(-1,1);
          fill(R,G,B);
          ellipse(a*x, b*y, diameter, diameter);
        }
        rotate(Math.PI/3);
      }
    }
  }
  if(debug) fill(255,0,0);
  if(debug) ellipse(0,0,5,5);
}

function rand256(){
  return randInt(256);
}
function randInt(n){
  return Math.floor(Math.random() * n);
}


