function textBox(x){
  imageMode(CORNER)
  image(textbox,0,0)
  imageMode(CENTER)
  fill(0,150,0)
  textSize(24)
  text(x, 30,40)
}

function textBox_bottom(x){
  imageMode(CORNER)
  image(textbox,0,height-150)
  print(textbox.height)
  imageMode(CENTER)
  fill(0,150,0)
  textSize(24)
  text(x, 30,height-150+40)
}
