var spray = false;
var Robt = false;
var clue3 = false;
var putBattery = false;
var nobugs = false;
var battery = false;
var locR, rotr1, rotr2, dir;
var robstatic, leg2static;
function setup(){

   createCanvas(1000, 700);
   background('#CBECF5');
   fill('#5EDB64');
   quad(230, 300, 1000, 300, 1000, 600, 0, 600);
   fill('#53DBD9');
   quad(230, 300, 1000, 600, 0, 600, 1000, 300);
   xr=500;
   //yr=310;
   rotr1=0;
   rotr2=0;
   robstatic = true;
   leg2static = false;
   locR = createVector(530, 308);
   dir = createVector(-1, 0);
}

function draw(){
    
    stroke('#6795C9');
    strokeWeight(5);
    line(230, 300, 0, 600);
    line(230, 0, 230, 300);
    line(230, 300, 1000, 300);

//drawer
    fill('#F5F3C7');
    stroke(100);
    strokeWeight(1);
    quad(100, 300, 200, 300, 100, 400, 0, 400);   
    rect(0, 400, 100, 200);
    quad(100, 400, 200, 300, 200, 600, 100, 600);
    quad(100, 400, 200, 300, 200, 400, 100, 500);
    quad(100, 500, 200, 400, 200, 500, 100, 600);

//handle
    fill('#C9C4C1');
    rect(154, 390, 5, 5);
    fill('#F0EAE7');
    rect(135, 410, 5, 5);

    quad(140, 410, 160, 390, 160, 395, 140, 415);
/*
    fill('#D4CB8A');
    quad(100, 400, 200, 300, 200, 500, 100, 500);

    fill('#EBE198');
    triangle(100, 500, 200, 500, 100, 600);
    */
//battery
/*   push();
    noStroke();
    fill('#473FF0')
    ellipse(150, 530, 9);
    ellipse(140, 530, 9);
    quad(145, 530, 155, 530, 145, 550, 135, 550);
    quad(135, 530, 145, 530, 135, 550, 125, 550);
    ellipse(140, 550, 9);
    ellipse(130, 550, 9);
    fill('#ECE6D6')
    ellipse(140, 550, 5);
    ellipse(130, 550, 5);
    pop();
*/
//desk
    fill('#8F471A');
    rect(580, 300, 20, 80);
    rect(300, 300, 20, 80);

    fill('#C46123');
    rect(250, 400, 15, 80);
    rect(530, 400, 15, 80);

    fill('#8F471A');
    quad(265, 400, 270, 400, 270, 475, 265, 480);
    quad(545, 400, 550, 400, 550, 475, 545, 480);
    
    fill('#C46123');
    quad(300, 300, 600, 300, 550, 400, 250, 400);
    fill('#8F471A');
    rect(250, 400, 300, 10);
    quad(600, 300, 600, 310, 550, 410, 550, 400);

//bed
    fill('#6866CC');
    triangle(850, 225, 1000, 225, 1000, 300);
    quad(850, 225, 1000, 300, 1000, 450, 850, 375);
 
    fill('#FFF5A7');
    rect(800, 275, 40, 325);

    quad(800, 200, 850, 225, 850, 300, 800, 275);
    quad(800, 200, 1000, 200, 1000, 225, 850, 225);

    quad(875, 386, 950, 425, 890, 600, 800, 600);

//box 
    fill(255);
    rect(310, 50, 150, 200);
    
//
    fill('#8F471A');
    rect(0, 600, 1000, 100);
//chest part1

    
    fill('#EB421B');
    stroke('#F0F732');
    strokeWeight(2);
    arc(375, 280, 50, 50, -PI, 0);
    noStroke();
    quad(350, 330, 400, 280, 360, 260, 310, 310);
    stroke('#F0F732');
    strokeWeight(2);
    fill('#EB421B');
    //arc(375, 280, 50, 50, -PI, 0);
    arc(325, 330, 50, 50, -PI, 0);
//chest part2
    stroke(0);
    strokeWeight(1);
    fill('#D4730D');
    quad(380, 300, 400, 280, 400, 340, 380, 360);
    stroke(0);
    strokeWeight(.5);
    fill('#F0F732');
    //quad(377, 325, 382, 320, 382, 340, 377, 345);
    quad(382, 320, 387, 315, 387, 335, 382, 340);
    fill(0);
    arc(382, 331, 5, 7, -PI/2, PI/2);

//robot
  push();
  translate(locR.x, locR.y);
//head    
    fill('#E6E6E6');
    rect(0, 0, 20, 15);

//arms   
    push(); 
    translate(1, 20);
    rotate(PI/4);
    fill('#E6E6E6');
    rect(0, 0, 4, 13);
    pop();
    push();
    translate(15, 20);
    rotate(-PI/4);
    rect(-1, 3, 4, 13);
    pop();

//leg1
    push();
    translate(5, 37);
    rotate(rotr1);
    fill('#E6E6E6');
    rect(0, 0, 3, 15);
    rect(-3, 15, 6, 3);
    pop();
//leg2
    push();
    translate(13, 37);
    rotate(rotr2);
    fill('#E6E6E6');
    rect(0, 0, 3, 15);
    rect(-3, 15, 6, 3);
    pop();    

//body    
    rect(1, 15, 18, 25);
//face    
    noStroke();
    fill(0);
    rect(5, 3, 3, 3);
    rect(13, 3, 3, 3);
    
    fill(0);
    rect(6, 10, 8, 3);
//key 
    push();
    translate(-4, 24);
    stroke('#DEC378');
    strokeWeight(3);
    ellipse(0, 0, 6);
    stroke('#F5F5F5');
    strokeWeight(2);
    line(-12, 0, -5, 0);
    line(-10, 0, -10, 4);
    line(-7, 0, -7, 2);

    pop();
pop();
   
//chest part3
    
    fill('#D4730D');
    rect(300, 330, 50, 60);
    quad(350, 330, 380, 300, 380, 360, 350, 390);
    noStroke();
    fill('#FFE04E');
    quad(378, 303, 382, 298, 382, 358, 378, 362);
    stroke(0);
    strokeWeight(.5);
    fill('#F0F732');
    quad(377, 325, 382, 320, 382, 340, 377, 345);
    fill('#EDCF4A');
    rect(374.5, 326, 2, 19);
    
    fill(0);
    arc(382, 331, 5, 7, PI/2, -PI/2);





    if(Robt==true){
        moveRob();
        
    }
    if(locR.x<=390){
      Robt = false;
    }
     
    
    

}

function mouseClicked(){
//click painting

//code-get spray


//code-spray bugs
    if(mouseX<200 && mouseX>100 && mouseY<600 
        && mouseY>400 && spray==true)
    {
//code-bugs away

     nobugs = true;
    }


    if(mouseX<150 && mouseX>130 && mouseY<550
        && mouseY>530 && nobugs == true)
    {
//get battery
      battery = true;
      putBattery = true;

    }

//code-robot
    if(putBattery){
        Robt = true;

    }
    
      Robt = true;
    



    
    
}

function moveRob(){
    locR.add(dir);
    //xr += dir.x;
    //dir.x = -1;
    
    


    if(rotr1<-PI/6){
      robstatic = true;
   }
   if(rotr1>PI/6){
      
      robstatic = false;
   }
   if(robstatic == false){
      rotr1 -= PI/25;
      
   }
   else
   {
      rotr1 += PI/25;
      
   }

   if(rotr1 >= PI/6){
      leg2static = true;
   }
   if(rotr1 <= -PI/6){
      leg2static = false;
   }
   if(leg2static == true){
      rotr2 += PI/25;
   }
   else
   {
      rotr2 -= PI/25;
   }
   /*if(locR.x <= 400);
    {
        Robt=false;
    }*/
}