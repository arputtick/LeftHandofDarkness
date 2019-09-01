function screen_5(){

  resizeCanvas(800,600)
  centerCanvas()
  background(200,100,0)

  // if(nav == -1){
  //   nav = 0
  //   match = 0
  //   screen -= 1
  // }

  image(house,width/2,height/2)


  if(frames>= 0 && frames <= 2*60 && nav == 0){
  ani = 1
  textSize(35)
  rectMode(CORNER)
  fill(0,0,70)
  rect(0,0,350,50)
  rectMode(CENTER)
  fill(200)
  text('19:00 H.',100,40)

  fill(150,40,70)
  rect(488, 186, 225,356)
  image(robot,width/2,height/2)
  }

  if(frames>= 60 && frames <= 2*60 && nav == 0){
  textSize(35)
  rectMode(CORNER)
  fill(0,0,70)
  rect(0,0,350,50)
  rectMode(CENTER)
  fill(200)
  text("DATEBOT's house...",20,40)
  nav = 0
  fill(150,40,70)
  rect(488, 186, 225,356)
  image(robot,width/2,height/2)
  }

  if(frames>= 2*60 && nav == 0){
  image(house,width/2,height/2)
  fill(150,40,70)
  rect(488, 186, 225,356)
  image(robot,width/2,height/2)
  textBox_bottom('DOORBELL: ding dong !')
  ani = 0
  }

  if(frames>= 60 && nav == 1){

  image(house,width/2,height/2)
  textBox_bottom('ROBOT: Hello !')

  }

  if(nav == 2){
    textBox_bottom('DATEBOT: Hi.')
  }

  if(nav == 3){
    textBox_bottom('ROBOT: So... the restaurant is just around the corner, right ?')
  }

if(nav == 4){
  textBox_bottom('DATEBOT: Actually, my battery is low.')
  text('Would it be OK if we just stay in?' , 30,height-150+80)
}

if(nav == 5){
  textBox_bottom('ROBOT: Er... recalibrating...')
}

if(nav == 6){
  textBox_bottom('ROBOT: Please wait...')
}

if(nav == 7){
  textBox_bottom('ROBOT: OK !')
}

if(nav == 8){
  screen += 1
  nav = 0
  frames = 0
}

}
