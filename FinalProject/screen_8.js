function screen_8(){
  resizeCanvas(800,600)
  centerCanvas()
  background(100)

  if(nav == -1){
    screen -= 1
    nav = 0
  }

  //tint(100)
  image(shadow, width/2, height/2)
  //noTint()
  if(frames >= 20&& nav == 0)
  {
    textBox('ROBOT: ... Is that OK ?')
  }

  if(nav == 1)
  {
    textBox("DATEBOT: ... It's fine. I have an adapter.")
  }

  if(nav == 2)
  {
    textBox("DATEBOT: (And an extension cord...)")
  }

  if(nav == 3)
  {
    textBox("DATEBOT: Did you bring a surge protector ?")
  }

  if(nav == 4)
  {
    textBox("ROBOT: Er... I wasn't expecting to...")
  }

  if(nav == 5)
  {
    textBox("DATEBOT: You can use mine.")
  }

  if(nav == 6)
  {
    screen += 1
    nav = 0
    frames = 0
  }
}
