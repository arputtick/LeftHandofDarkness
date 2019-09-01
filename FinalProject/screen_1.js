function screen_1(){

resizeCanvas(800,600)
centerCanvas()
background(200,100,0)
rectMode(CORNER)
for(i = 1; i <= 12; i+=1){
fill(200-10*i,180-10*i,255-10*i)
rect(0,600-50*i,800,50)}
rectMode(CENTER)
match = 1
// if(nav == -1){
//   resizeCanvas(windowWidth,windowHeight)
//   centerCanvas()
//   background(0,50,0)
//   screen = 0
//   frames = 0
//   active = 1
//   nav = 0
//   }

if(frames >= 0 && frames <= 5*60){
ani = 1
image(buildings,width/2,height/2, 800, 600)
}


if(frames >= 60){
image(buildings_robo,width/2,height/2, 800, 600)
}

if(frames >= 2*60){
ani = 0
textBox('ROBOT: Finally Friday night ! ! !')
}

if(nav == 1)
  {
    screen += 1
    nav = 0
    frames = 0
  }
}
