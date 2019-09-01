

function face(){
push()
  translate(x, y)

if(active == 0){
  textAlign(CENTER)
  textSize(30)
  text('Push my buttons to activate.',0,-height/2+50)
  textAlign(LEFT)
if(expression == 1){


  if(le_x >= -x/2 + x/6 || le_x <= -x/2 -x/6){
    eye_speed *= -1
  }


  if(frames >= 60*2){
    mouth_x += smile_speed
  }

  if(mouth_x >= 500 || mouth_x <= 200){
    smile_speed *= -1
  }

  if(frames >= 60*5 && le_x > -x/2){
    eye_speed *= 0
  }

  if(frames == 60*10){
    expression = 2
    frames = 0
  }

  //LEFT EYE
  push()

  le_x += eye_speed
  translate(le_x,le_y)
  ellipse(0,0,100,200)
  pop()

  //RIGHT EYE
  push()

  re_x += eye_speed
  translate(re_x,re_y)
  ellipse(0,0,100,200)
  pop()

  //MOUTH

  rect(0,y/2,mouth_x,100)

}

else if(expression == 2){

  eye_y -= blink_speed

  if(eye_y <=5 || eye_y >= 100){
    blink_speed *= -1
  }

  if(frames == 60){
    expression = 1
    eye_speed = 1
    frames = 0
    le_x = -x/2
    re_x = x/2
  }
  //LEFT EYE
  push()

  translate(le_x,le_y)
  ellipse(0,0,100,eye_y)
  pop()

  //RIGHT EYE
  push()


  translate(re_x,re_y)
  ellipse(0,0,100,eye_y)
  pop()

  //MOUTH

  arc(0, y/3, 300,200, 0, PI, OPEN)
}
}

else{
  le_x = -x/2
  le_y = -y/4
  re_x = x/2
  re_y = -y/4
//face
//LEFT EYE
push()


translate(le_x,le_y)
ellipse(0,0,100,200)
pop()

//RIGHT EYE
push()


translate(re_x,re_y)
ellipse(0,0,100,200)
pop()

//MOUTH

rect(0,y/2,mouth_x,100)




 pop()

 if(nav == 1 && frames < 60)
 { ani = 1
   textBox('Searching for connection...')}

  if(nav == 1 && frames >= 60)
   {
     nav = 2
     }

 if(nav == 2 && frames < 3*60)
 {
   textBox('Please wait...')}

   if(nav == 2 && frames >= 3*60)
    {
      nav = 3
      }

 if(nav == 3)
 {textBox('ROBOT: Hi !')
 ani = 0}

 if(nav == 4)
 {textBox('Thank you for taking the time to acknowledge me.')}

 if(nav == 5)
 {textBox("Um... Actually, I'm not good at conversing...")}

 if(nav == 6)
 {textBox("I could tell you about my weekend ? Y/N")}

 if(nav == 7)
 {textBox("Yay !")}

 if(nav == 8)
 {
   screen += 1
   nav = 0
   frames = 0
 }

}
}
