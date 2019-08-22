

//Ball class

class Ball{
  constructor() {
    this.dim = random(10,40)
    this.xPos = random(this.dim/2,width-this.dim/2)
    this.yPos = random(this.dim/2,height-this.dim/2)
    this.xSpeed = random(-5,5)
    this.ySpeed = 0
    this.color = int(random(cl.length))
  }

  move(){
    this.xPos += this.xSpeed
    this.yPos += this.ySpeed
  }

  display(){
    fill(cl[this.color])
    circle(this.xPos,this.yPos,this.dim)
    // tint(cl[this.color])
    // image(im,this.xPos,this.yPos,this.dim,this.dim)
  }

  checkEdges(){
    if(this.xPos >= width-this.dim/2 || this.xPos <= this.dim/2){
      this.xSpeed *= -1
    }
  }
}
