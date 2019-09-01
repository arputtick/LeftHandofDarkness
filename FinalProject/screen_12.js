function screen_12()
{
  resizeCanvas(800,600)
  centerCanvas()
  background(100)

  if(nav == -1){
    screen -= 1
    nav = 0
  }

  image(shadow2, width/2,height/2)

  if(frames >= 30 && nav == 0){
    textBox('DATEBOT: Did you just short circuit ?')
  }

  if(nav == 1){
    textBox('ROBOT: Um... I think so. Sorry.')
  }

  if(nav == 2){
    textBox("DATEBOT: It's fine.")
  }

  if(nav == 3){
    textBox("ROBOT: Do you want to continue ? Y/N")
  }

  if(nav == 4){
    textBox("DATEBOT: Y.")
  }

  if(nav == 5){
    textBox("DATEBOT: You can just help me plug into myself.")
  }

    if(nav == 6){
      textBox("ROBOT: OK.")
    }

    if(nav == 7){
      textBox("ROBOT: Could you turn around?")
    }

    if(nav == 8)
    {
      screen += 1
      nav = 0
      frames = 0
    }
}
