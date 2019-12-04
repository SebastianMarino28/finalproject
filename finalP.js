var spray = false;
var clue2 = false;
var clue3 = false;
var clue4 = false;
var nobugs = false;
var battery = false;
var xr, yr;
function setup(){

   createCanvas(1000, 700);
   background('#B0B3FF');
   xr=500;
   yr=310;
}

function draw(){
    
    stroke('#6795C9');
    strokeWeight(5);
    line(230, 300, 0, 600);
    line(230, 0, 230, 300);
    line(230, 300, 1000, 300);

//drawer
    fill('#FFF5A7');
    stroke(100);
    strokeWeight(1);
    quad(100, 300, 200, 300, 100, 400, 0, 400);   
    rect(0, 400, 100, 200);
    quad(100, 400, 200, 300, 200, 600, 100, 600);

    fill('#D4CB8A');
    quad(100, 400, 200, 300, 200, 500, 100, 500);

    fill('#EBE198');
    triangle(100, 500, 200, 500, 100, 600);
//battery
    push();
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

//robot
    push();
    translate(xr, yr);
    fill('#E6E6E6');
    rect(0, 0, 20, 15);
    rect(1, 15, 18, 25);
    noStroke();
    fill(255, 0, 0);
    rect(4, 2, 4, 4);
    rect(12, 2, 4, 4);
    fill(0);
    rect(4.5, 2.5, 3, 3);
    rect(12.5, 2.5, 3, 3);

     

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
        && mouseY>530 && nobugs == true){
//get battery
      battery = true;

    }

//code-robot


//code-get pazzle


    
    
}