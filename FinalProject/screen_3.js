function screen_3(){

  resizeCanvas(800,600)
  centerCanvas()
  background(200,100,0)

  if(nav == -1){
    screen = 2
    nav = 0
  }

  rectMode(CORNER)
  for(i = 0; i <= 6; i+=1){
  fill(220-20*i,100-20*i,200-20*i)
  rect(0,100*i,800,100)}
  rectMode(CENTER)

  if(frames >= 0 && nav == 0){
  image(happy,width/2,height/2)
  }

  if(frames >= 30 && nav == 0){
  textBox('ROBOT: What should I do tonight ?')
  }

  if(frames >= 0 && nav == 1){
    ani = 1
    rectMode(CORNER)
    for(i = 0; i <= 6; i+=1){
    fill(220-20*i,100-20*i,200-20*i)
    rect(0,100*i,800,100)}
    rectMode(CENTER)
    image(thinking,width/2,height/2)
  }

  if(frames >= 60 && nav == 1){
    image(sigh,width/2,height/2)
  }

  if(frames >= 2*60 && nav == 1){
    rectMode(CORNER)
    for(i = 0; i <= 6; i+=1){
    fill(220-20*i,100-20*i,200-20*i)
    rect(0,100*i,800,100)}
    rectMode(CENTER)
    image(phone_sigh,width/2,height/2)
    ani = 0
  }

  if(nav == 2){
    screen += 1
    nav = 0
    frames = 0
  }
}
