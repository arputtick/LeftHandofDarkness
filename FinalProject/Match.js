/// Match class


class Match{
  constructor(){
    this.xPos = 800/2-21
    this.yPos = 600/2+40
    this.speed = 5
    this.width = im_x
    this.height = im_y
  }

  display(){
    fill(220)
    image(im ,this.xPos,this.yPos,im_x,im_y)
  }

  move(){
    this.xPos += this.speed
  }

  newMatch(){
    n += 1
    im = loadImage('images/' + imgTable.getString(n,0))
    this.xPos = width/2
  }
}
