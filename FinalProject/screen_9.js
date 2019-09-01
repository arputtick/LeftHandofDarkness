function screen_9(){
  resizeCanvas(800,600)
  centerCanvas()
  background(100)

  if(nav == -1){
    screen -= 1
    nav = 0
  }

  image(surge,width/2,height/2)

  if(frames >= 30){
    textBox('ROBOT: (HOW OLD IS THAT THING !?)')
  }

  if(nav == 1)
  {
    screen += 1
    nav = 0
    frames = 0
  }
  }
