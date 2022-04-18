let bgImg;
let soilImg;
let lifeImg;
let soldierImg;
let robotImg;
let ratImg;
let sx =0;
let sy;

let random;
let a;
let lx = (Math.floor(Math.random()*640))+25;
let ly;
let rx = lx-25;
let ry;

function setup(){
    createCanvas(640, 480, P2D);
    // Enter Your Setup Code Here
    bgImg = loadImage("img/bg.png");
  soilImg = loadImage("img/soil.png");
  lifeImg= loadImage("img/life.png");
  soldierImg = loadImage("img/soldier.png");
  robotImg = loadImage("img/robot.png");
   ratImg  = loadImage("img/rat.png");
  random = (Math.random(4));
   a= (Math.random(4));
   switch(random){
    case 0:
       sy=160; 
      break;
    case 1:
       sy=240;
            break;
    case 2:
      sy=320;
            break;
    case 3:
       sy=400;
             break;
    }
    
    switch(a){
     case 0: 
       ly = 160+37;
      break;
    case 1:
       ly = 240+37;
            break;
    case 2:
      ly = 320+37;
            break;
    case 3:
       ly=400+37; 
             break;
    }
    
 ry = ly-37;
}

 

function draw() {
  image(bgImg,0,0);
  image(soilImg, 0,160);
  image(lifeImg,10,10);
  image(lifeImg,80,10);
  image(lifeImg,150,10);
  
  if(sx==-80){ran();} 
  image(soldierImg, sx, sy);
  
  image(robotImg, rx, ry);
  
  strokeWeight(10.0);
  strokeCap(ROUND);
  color(255);
  rect(lx,ly ,40,10,2);
  lx=lx-2;
  
  fill(255,255,0);
  circle(590, 50, 130);  
  
  fill(253,184,19);
  circle(590, 50, 120);
  
  sx=sx+1;
  if ( sx > 640){sx = -80;}
  
   fill(124, 204,25);
  rect(0,145,640,15);
  stroke(0, 0, 0,0);
  
  image(ratImg,320,80);
  
   
}

function ran(){
  
 let a = (Math.random(4));
    switch(a){
    case 0:
       sy=160;
      break;
    case 1:
       sy=240;
            break;
    case 2:
      sy=320;
            break;
    case 3:
       sy=400;
             break;
    }



}
