function screen_2(){

if(nav == -1){
  screen = 1
  nav = 0
}

  // resizeCanvas(800,600)
  // centerCanvas()
  // background(200,100,0)

image(autopilot,width/2,height/2)

fill(0,0,80)
textSize(40)
textAlign(CENTER)
text('AUTOPILOT',width/2+30,height/2-140)
text('ON',width/2+30,height/2-70)
text('OFF',width/2+30,height/2+250)
textAlign(LEFT)
fill(0,130,180)
rectMode(CENTER)

if(frames <= 150/5){
ani = 1
rect(width/2+38,height/2+5+5*frames, 80,60)
image(arm,width/2,height/2+100+5*frames)
}

else{
  ani = 0
  rect(width/2+38,height/2+5+5*30, 80,60)
  image(arm,width/2,height/2+100+5*30)
}

if(nav == 1){
  screen += 1
  nav = 0
  frames = 0
  ani = 0
}

}
