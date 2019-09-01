var cnv
var ani = 0
var screen = 0
var nav = 0
var clicks = 0
var active = 0
var q

//face variables
var expression
var eye_speed = .5
var eye_y = 100
var blink_speed = 10
var x
var y
var le_x
var le_y
var re_x
var re_y
var frames = 0
var frames2 = 0
var smile_speed = .5
var mouth_x = 300
var blinks

//tindr variables
let match = 1
let n
let s = 0
let phone_x
let phone_y
let im_x
let im_y

//screen 14 variables
var xPos = 50;
var xWave = 0;
var waveSpeed = .25;
var waveDirect = 1;
var del = 0

// //Arduino
// var serial;                            // variable to hold an instance of the serialport library
// var options = { baudrate: 9600};      // set baudrate to 9600; must match Arduino baudrate
// var portName = '/dev/tty.usbmodem14101'; // fill in your serial port name here
// var inData;
// let button_left; // our first button value
// let button_right;

function preload(){
  //textbox and font
  textbox = loadImage('images/textbox.png')
  Minecraft = loadFont('font/Minecraft.ttf')

  //screen 1 images
  buildings = loadImage('images/buildings.png')
  buildings_robo = loadImage('images/buildings_robo.png')

  //screen 2 images
  autopilot = loadImage('images/autopilot.png')
  arm = loadImage('images/robot-arm.png')

  //screen 3 images
  happy = loadImage('images/happy.png')
  sigh = loadImage('images/sigh.png')
  thinking = loadImage('images/thinking.png')
  phone_sigh = loadImage('images/phone_sigh.png')

  //screen 4 resources
  imgTable = loadTable('images/imageData.csv')

  //screen 5 images
  house = loadImage('images/house.png')
  robot = loadImage('images/house foreground.png')

  //screen 6 images
  tv = loadImage('images/netclix.png')
  living_room = loadImage('images/netclix and charge.png')

  //screen 7 images
  nakie = loadImage('images/nakie.png')

  //screen 8 images
  shadow = loadImage('images/shadow.png')

  //screen 9 images
  surge = loadImage('images/surge protector.png')

  //screen 10 images
  female = loadImage('images/plug female.png')
  male = loadImage('images/male plug.png')

  //screen 11 images
  surprise = loadImage('images/surprise.png')
  melting = loadImage('images/melting.png')

  //screen 12 images
  shadow2 = loadImage('images/shadow_wire.png')

  //screen 14 images
  robot_sun = loadImage('images/robot sunset.png')

  //questions
  questions = loadTable('questions/questions.csv')
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight)
  centerCanvas()
  rectMode(CENTER)
  imageMode(CENTER)
  x = width/2
  y = height/2
  le_x = -x/2
  le_y = -y/4
  re_x = x/2
  re_y = -y/4
  expression = 1
  textFont('Minecraft')

  q = 0

  //screen 4 setup
  phone_x = 800/3
  phone_y = 4*600/6
  im_x = phone_x-40 //(226)
  im_y = phone_y-130 // (270)
  n = 0
  im = loadImage('images/' + imgTable.getString(n,0))
  m = new Match()

  //screen 14 setup
xPos = 50;
xWave = 0;
waveSpeed = .25;
waveDirect = 1;

}

function draw() {
  background(0,50,0)
  noStroke()
  fill(0,150,0)
  noCursor()


  if(screen == 0){
  face()
  }

  if(screen == 1){
  screen_1()
  }

  if(screen == 2){
  screen_2()
  }

  if(screen == 3){
  screen_3()
  }

  if(screen == 4){
  screen_4()
  }

  if(screen == 5){
  screen_5()
  }

  if(screen == 6){
  screen_6()
  }

  if(screen == 7){
  screen_7()
  }

  if(screen == 8){
  screen_8()
  }

  if(screen == 9){
  screen_9()
  }

  if(screen == 10){
  screen_10()
  }

  if(screen == 11){
  screen_11()
  }

  if(screen == 12){
  screen_12()
  }

  if(screen == 13){
  screen_13()
  }

  if(screen == 14){
  screen_14()
  }

  if(screen == 15){
  face_end()
  }

  frames += 1
  if(ani == 0 && active == 1){
    arrows()
  }

  if(frames >= 30*60 && active == 1){ //reset if inactive
      resizeCanvas(windowWidth,windowHeight)
      centerCanvas()
      background(0,50,0)
  screen = 0
  nav = 0
  frames = 0
  frames2 = 0
  del = 0
  active = 0
  ani = 0
  match = 1
  n = 0
  im = loadImage('images/' + imgTable.getString(n,0))
  m = new Match()
}
}

function centerCanvas() {
  var w = (windowWidth - width) / 2;
  var h = (windowHeight - height) / 2;
  cnv.position(w, h);
}

function windowResized() {
  centerCanvas();
}


// function mousePressed(){
//       screen += 1
//       frames = 0
// }

function keyPressed() {
  if (keyCode == LEFT_ARROW && ani == 0) {
    nav -= 1;
    clicks += 1
    active = 1;
  } else if (keyCode == RIGHT_ARROW && ani == 0) {
    nav += 1;
    frames = 0;
    clicks += 1
    active = 1
  }
  // if (key == 'b') {
  //   q += 1
  // }
}



function arrows() {
  fill(255)
  triangle(width-30,height-50, width-30,height-10, width-10,height-30)
  triangle(30,height-50, 30,height-10, 10,height-30)
}
