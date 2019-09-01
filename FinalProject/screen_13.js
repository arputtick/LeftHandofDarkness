function screen_13(){
  resizeCanvas(800,600)
  centerCanvas()
  background(100)

  if(nav == -1){
    screen -= 1
    nav = 0
  }
  image(female,width/2, height/2)

  if(frames<= 45){
  ani = 1
  image(male,width/2-180+4*frames, height/2)
  }

  else{image(male,width/2, height/2)
  ani = 0}

  if(nav == 1)
  {
    screen += 1
    nav = 0
    frames = 0
  }
}
