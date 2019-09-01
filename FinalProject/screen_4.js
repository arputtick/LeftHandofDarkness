
function screen_4() {
  resizeCanvas(800,600)
  centerCanvas()
  background(0,0,50)


  // if(nav == -1){
  //   nav = 0
  //   screen -= 1
  //
  // }


  phoneScreen(width/2,height/2)

  if(nav == 0)
    {


      textAlign(CENTER)
      textSize(30)
      text('WELCOME',width/2,height/2)
      textAlign(LEFT)
      m.display()
      phoneFrame(width/2,height/2)
      image(arm,width/2,height/2+200)

    }

    if(nav == 1 && match < 4)
    {ani = 1
    if(m.xPos <= width/2 + im_x){
    m.display()
    m.move()
    phoneFrame(width/2,height/2)
    image(arm,width/2+5*frames,height/2+200)}

    else{
      match += 1
      nav = 0
      m.newMatch()
    }

    ani = 0
    }

    if(nav == 1 && match == 4)
    {
      ani = 1
      if(m.xPos <= width/2 + im_x){
      m.display()
      m.move()
      phoneFrame(width/2,height/2)
      image(arm,width/2+5*frames,height/2+200)}

      else{
        nav = 0
        n-= 1
        m.newMatch()
      }
      ani = 0
      match += 1
    }

    if(nav == 1  && match == 5){
      ani = 1
      m.display()
      phoneFrame(width/2,height/2)
      fill(0,0,100)
      rect(width/2,height/2-20,240,50)
      fill(255)
      textAlign(CENTER)
      textSize(20)
      text('Potentially compatible',width/2,height/2-20)
      text('interface !',width/2,height/2)
      textAlign(LEFT)
      image(arm,width/2,height/2+200)
      if(frames >= 30){
      textBox_bottom('ROBOT: Yass ! ! !')
      ani = 0
      }
    }


  if(nav == 2)
  {
    screen += 1
    nav = 0
    frames = 0
}

  }




function phoneScreen(x,y) {
///Draw phone screen
  push()
  translate(x,y)
  fill(0,100,0)
  rect(0,10,phone_x-20,phone_y-50)
  fill(0,200,0)
  textAlign(CENTER)
  textSize(30)
  text('> tndr.exe',0,-phone_y/2+70)
  pop()
}


function phoneFrame(x,y){
///Draw phone frame
    push()
    translate(x,y)
    fill(50)
    beginShape()
      vertex(-phone_x/2,phone_y/2)
      vertex(phone_x/2,phone_y/2)
      vertex(phone_x/2,-phone_y/2)
      vertex(-phone_x/2,-phone_y/2)
      beginContour()
  vertex(-phone_x/2+10,-phone_y/2+35)
      vertex(phone_x/2-10,-phone_y/2+35)
      vertex(phone_x/2-10,phone_y/2-15)
      vertex(-phone_x/2+10,phone_y/2-15)
      endContour()
    endShape()

    fill(0,0,50)
    beginShape()
      vertex(-width/2,height/2)
      vertex(width/2,height/2)
      vertex(width/2,-height/2)
      vertex(-width/2,-height/2)
      beginContour()
  vertex(-phone_x/2,-phone_y/2)
      vertex(phone_x/2,-phone_y/2)
      vertex(phone_x/2,phone_y/2)
      vertex(-phone_x/2,phone_y/2)
      endContour()
    endShape()
  pop()
}
