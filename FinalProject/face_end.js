

function face_end(){
  resizeCanvas(windowWidth,windowHeight)
  centerCanvas()
  background(0,50,0)

  if(nav == -1){
    screen -= 1
    nav = 0
  }

if(nav < 11 || nav >11){
push()
  translate(x, y)


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




 pop()}

 if(nav == 0 && frames < 60)
 { ani = 1
   textBox('Still searching for connection...')}

  if(nav == 0 && frames >= 60)
   {
     nav = 1
     }

 if(nav == 1  && frames < 3*60)
 {
   textBox('Please wait...')}

if(nav == 1 && frames >= 3*60)
   {
     textBox('Connection not found.')}

   if(nav == 1 && frames >= 5*60)
    {
      ani = 0
      nav = 2
      }

 if(nav == 2)
 {textBox('ROBOT: Sorry for being a downer.')
 }

 if(nav == 3)
 {textBox('Thanks for listening though')}

 if(nav == 4)
 {textBox("Hey !")}

 if(nav == 5)
 {textBox("I have an idea.")}

 if(nav == 6)
 {textBox("I'll tell you one of the 36 questions.")}

 if(nav == 7)
 {textBox("And maybe you could pose it to someone in this room ?")}

 if(nav == 8)
 {textBox("And then switch roles.")}

 if(nav == 9)
 {textBox("Ready ?")}

 if(nav == 10)
 {textBox("OK.")}

 if(nav == 11){
   textAlign(CENTER)
   text(questions.getString(q,0),width/2,height/2,width/2,height/2)
   textAlign(LEFT)
 }

 if(nav == 12)
 {textBox("Hope it goes well.")}

 if(nav == 13 && frames <= 60)
 {textBox("Bye!")}

 if(nav == 13 && frames > 60)
 {
   screen = 0
   nav = 0
   frames = 0
   frames2 = 0
   del = 0
   active = 0
   match = 1
   n = 0
   im = loadImage('images/' + imgTable.getString(n,0))
   m = new Match()
 }

 if(nav == 14)
 {
   screen = 0
   nav = 0
   frames = 0
   frames2 = 0
   del = 0
   active = 0
   match = 1
   n = 0
   im = loadImage('images/' + imgTable.getString(n,0))
   m = new Match()
 }


}
