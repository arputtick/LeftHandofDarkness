function screen_11(){
  resizeCanvas(800,600)
  centerCanvas()
  background(100)

  if(nav == -1){
    screen -= 1
    nav = 0
  }

  if(frames <= 60){
  ani = 1
  rectMode(CORNER)
  for(i = 0; i <= 6; i+=1){
  fill(220-20*i,100-20*i,200-20*i)
  rect(0,100*i,800,100)}
  rectMode(CENTER)
  image(surprise, width/2,height/2)}

  else{
  rectMode(CORNER)
  for(i = 0; i <= 6; i+=1){
  fill(220-20*i,100-20*i,200-20*i)
  rect(0,100*i,800,100)}
  rectMode(CENTER)
  image(melting, width/2,height/2)
  ani = 0
  }

  if(nav == 1)
  {
    screen += 1
    nav = 0
    frames = 0
    ani = 0
  }
}
