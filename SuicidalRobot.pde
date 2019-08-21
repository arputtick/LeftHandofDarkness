//Creative Programming Class 1, 6.8.2019


//Defining variables
int warthog = 200; //if use instead of manually inputing positions, can shift everything
//all at once just by changing variable
float xPos = 50;
float xWave = 0;
float waveSpeed = .25;
float waveDirect = 1;

void setup(){
  size(600,400);
  frameRate(60);

  //Can change rectangle mode ex. rectMode(CENTER)<-makes zero point at center,
  //can put in setup env.
  
}

void draw(){
  //background() one#=grayscalce, three#=rgb, range=0,255
  background(255,0,100);

  
//Sky  
  for(int z = 0; z < 400; z+=50){
  noStroke();
  //fill(255+z,z,100+z);
  //float sunset = map(mouseX, 0, width, 0, 200);
  
  int trans = 200;
  
  if(mouseX<trans){
  fill(255+z,z,100+z-mouseX);
  }
  
  else{
  fill(255+z-(mouseX-trans),z-(mouseX-trans),100+z-trans);
  }
  
  rect(0, z, 600, 50);
  }
  
  
  noStroke();
  
  
  
// Sun
  fill(220,80,0);
  //circle(width/2,height/2-20,220);
  circle(width/2,mouseX,220);
  
  fill(50,0,70);
  rect(0,250,600,150);


// Waves


if(xWave > 20 || xWave < 0){
waveSpeed *= -1;
}

xWave += waveSpeed;
    //For-loop;
  // for (START;END;ITERATION){ }
  for( int y = -200; y < 700; y+=50 ){
    for( int x = int(xPos); x < 600; x+=10){
    noStroke();
    fill(100,100,255);
    int vert = 200;
    triangle(y+x+xWave, vert+x, y+x+20+xWave, vert+x, y+x+10+xWave, vert+x-10);
    
    fill(50,0,70);
    triangle(xWave+y+x, vert+x+5, xWave+y+x+20, vert+x+5, xWave+y+x+10, vert+x-5);
    }}
    

  
 // Suicidal Robot
  stroke(0); //If omitted, then noStroke below applies to everything above it
  fill(50);
  rect(275,100,50,50); //coordinates start at upper left corner
  rect(warthog+50,150,100,150);
  rect(350,150,100,25);
  rect(350,150,100,25);
  rect(150,150,100,25);
  fill(85);
  rect(250,300,25,100);
  rect(325,300,25,100);
  
  fill(255);
  arc(290, 125, 10, 10,PI-QUARTER_PI,TWO_PI+QUARTER_PI);
  arc(310, 125, 10, 10,PI-QUARTER_PI,TWO_PI+QUARTER_PI);
  arc(300, 145, 30, 30,PI,TWO_PI);
  

  circle(width/2,width/2,25);
  
  
//noLoop();


  //REFERENCES
  //color.adobe.com, convert colorwheel to RGB
}
