function screen_14(){
  resizeCanvas(800,600)
  centerCanvas()
  background(100)

  frames2 += 1

  //Sky
  for(var z = 0; z < 400; z+=50){
  noStroke();

  var trans = 200;

  if(frames/5<trans){
  fill(255+z,z,100+z-frames2/5);
  }

  else{
  fill(255+z-(frames2/5-trans),z-(frames2/5-trans),100+z-trans);
  }
  rectMode(CORNER)
  rect(0, z, width, 50);
  rectMode(CENTER)
  }


  noStroke();



// Sun
  fill(220,80,0);
  //circle(width/2,height/2-20,220);
  circle(width/2,frames2/5,220);

  fill(50,0,70);
  rect(0,450,width*2,400);


// Waves


if(xWave > 20 || xWave < 0){
waveSpeed *= -1;
}

xWave += waveSpeed;
    //For-loop;
  // for (START;END;ITERATION){ }
  for( var y = -400; y < 800; y+=50 ){
    for( var x = int(xPos); x < 600; x+=10){
    noStroke();
    fill(100,100,255);
    var vert = 200;
    triangle(y+x+xWave, vert+x, y+x+20+xWave, vert+x, y+x+10+xWave, vert+x-10);

    fill(50,0,70);
    triangle(xWave+y+x, vert+x+5, xWave+y+x+20, vert+x+5, xWave+y+x+10, vert+x-5);
    }}


if(frames < 60 && nav == 0){
ani = 1
textSize(35)
rectMode(CORNER)
fill(0,0,70)
rect(0,0,width,50)
rectMode(CENTER)
fill(200)
text('Later...',50,40)}

if(frames>= 30 && frames <= 2*60 && nav == 0){
  rectMode(CORNER)
  fill(0,0,70)
  rect(0,0,width,50)
  rectMode(CENTER)
  fill(200)
  text('The Ocean of Consciousness',50,40)
}

if(del == 0){
image(robot_sun,width/2-170,height/2+250)}

if(frames == 2*60 && nav == 0){
  nav = 1
}

if(nav == 1)
{
ani = 0
  textBox_bottom('ROBOT: I am often drawn to the ocean of consciousness.')

}

if(nav == 2)
{
  textBox_bottom('I like to watch it...')
}

if(nav == 3)
{
  textBox_bottom("and imagine all of the .exe's")
  text('that have merged themselves with',30,height-150+80)
  text('the master branch.', 30, height-150+120)
}

if(nav == 4)
{
  textBox_bottom("I think I want to do the same.")
}

if(nav == 5)
{
  textBox_bottom("Become part of something larger than myself.")
}

if(nav == 6)
{
  textBox_bottom("What will it be like ?")
}

if(nav == 7)
{
  textBox_bottom("Will I be happy ?")
}

if(nav == 8)
{
  textBox_bottom("Does that question even make sense ?")
}

if(nav == 9)
{
  textBox_bottom("I think about the life I'm leading.")
}

if(nav == 10)
{
  textBox_bottom("I think about tomorrow.")
}

if(nav == 11)
{
  textBox_bottom("It scares the bits out of me.")

}

if(nav == 12 && frames <=2*60)
{
  del = 1
  ani = 1
  image(robot_sun,width/2-170+frames/4,height/2+250-frames/4)
}

if(nav == 12 && frames > 2*60)
{
  image(robot_sun,width/2-170+2*60/4,height/2+250-2*60/4)
  fill(0)
  rect(width/2,height/2,650,100)
  fill(255)
  textAlign(CENTER)
  text('Error:',width/2,height/2)
  text('You do not own the rights to your own consciousness.',width/2,height/2+40)
  textAlign(LEFT)
  ani = 0
}

if(nav == 13)
{
  screen += 1
  nav = 0
  frames = 0
  q = int(random(0,36))
}
}
