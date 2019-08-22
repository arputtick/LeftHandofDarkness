let numBall = 10
let b = [];
let cl= [];
let probDist =[1,1,0,-1]

function preload(){
  im = loadImage('assets/cat.png')
}

function setup() {
  createCanvas(400,800)
  imageMode(CENTER)
  cl = [color('#2390F9'),color('#2A628F'),color('#20BF55'),color('#0B4F6C'),color('#F18F01')]
  for(let i = 0; i<numBall; i++){
    b.push(new Ball())
  }
}

function draw() {
  background(0)
  noStroke()
  for(let i = 0; i<b.length; i++){
    //b[i].xSpeed = probDist[int(random(4))]
    b[i].ySpeed = 1*(int(random(3))-1)
    b[i].move()
    b[i].checkEdges()
    b[i].display()


  }



}

function mousePressed(){
  for(i = 0; i<b.length; i++){
    let a = mouseY-b[i].yPos
    let c = mouseX-b[i].xPos
    let d = sqrt(sq(a)+sq(c))
    if(d <= b[i].dim/2+10){
      b.splice(i,1)
      // numBall += -1
    }
}
}

function keyPressed(){
  if(key == 'n'){
    b.push(new Ball())
    //numBall += 1
  }
}
