function screen_6(){

  resizeCanvas(800,600)
  centerCanvas()
  background(0)

  if(nav == -1){
    screen -= 1
    nav = 0
  }

  // push()
  //
  // translate(-width/2,-height/2)
  tint(5*sin(frames/4)+150)
  if(frames <= 1*60 && nav == 0){
  ani = 1
  image(tv,width/2,150, 3.8*115,3.8*73)
  }

  else{
  textAlign(CENTER)
  textSize(40)
  text('Number of clicks:',width/2,height/2-200)
  fill(255)
  text(clicks,width/2,height/2-140)
  textAlign(LEFT)
  }

  image(living_room, width/2,height/2)
  noTint()

  if(frames >= 2*60){
    textBox_bottom('ROBOT: So... what do you do in your free time ?')
    ani = 0
  }

  if(nav == 1){
    textBox_bottom("DATEBOT: Oh. I don't have much free time.")
  }

  if(nav == 2){
    textBox_bottom("DATEBOT: My battery is usually exhausted after work.")
  }

  if(nav == 3){
    textBox_bottom("DATEBOT: Mostly NETCLIX and recharge.")
  }

  if(nav == 4){
    textBox_bottom("ROBOT: Ha. Ha. Ha. Me too !")
  }

  if(nav == 5){
    textBox_bottom("DATEBOT: Cool.")
  }

  if(nav == 6){
    textBox_bottom("ROBOT: ... ...")
  }

  if(nav == 7){
    textBox_bottom("ROBOT: Have you heard about the 36 questions ?")
  }

  if(nav == 8){
    textBox_bottom("DATEBOT: To fall in love ?")
  }

  if(nav == 9){
    textBox_bottom("ROBOT: Er... well... yes.")
  }

  if(nav == 10){
    textBox_bottom("ROBOT: No.")
  }


  if(nav == 11){
    textBox_bottom("ROBOT: They were orginally written by a psychologist")
    text('who was trying develop emotional intimacy' , 30,height-150+80)
    text('between complete strangers.' , 30,height-150+120)
  }

  if(nav == 12){
    textBox_bottom("ROBOT: I've always wanted to try it.")
  }

  if(nav == 13){
    textBox_bottom("DATEBOT: Sounds interesting.")
  }

  if(nav == 14){
    textBox_bottom("ROBOT: Do you want to try ?")
  }

  if(nav == 15){
    textBox_bottom("DATEBOT: Um...")
  }

  if(nav == 16){
    textBox_bottom("DATEBOT: No.")
  }

  if(nav == 17){
    textBox_bottom("DATEBOT: It sounds exhausting.")
  }

  if(nav == 18){
    textBox_bottom("DATEBOT: I'm more in the mood for something...")
  }

  if(nav == 19){
    textBox_bottom("DATEBOT: physical.")
  }

  if(nav == 20){
    textBox_bottom("ROBOT: Recalibrating...")
  }

  if(nav == 21){
    textBox_bottom("ROBOT: Please wait...")
  }


  // pop()

  if(nav == 22){
    screen += 1
    nav = 0
    frames = 0
  }
}
