function screen_7(){
  resizeCanvas(800,600)
  centerCanvas()
  background(100)

  if(nav == -1){
    screen -= 1
    nav = 0
  }

  if(frames <= 180/2 && nav == 0){
  ani = 1
  image(nakie,width/2,height/2+180-frames*4)
  }

  else{
    image(nakie,width/2,height/2+180-360)
    textBox("DATEBOT: Oh. You're a type A?")
    ani = 0
  }

  if(nav == 1){
    textBox('DATEBOT: (Type A plugs are so small...)')
  }

  if(nav == 2){
    screen += 1
    nav = 0
    frames = 0
  }
}
