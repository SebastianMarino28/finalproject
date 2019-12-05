
function setup()
{
	createCanvas(1000,700);
	background('#B0B3FF');
}

function draw()
{
	noStroke();

//Bed
	fill('#A2DFFF')
	quad(610,0, 240,150, 1000,295, 1000,0);
	
	
//Bed Post	
	fill('#6A91A6')
	quad(240,300, 390,300, 390,700, 240,700);

	fill('#526F80')
	quad(390,300, 470,300, 470,700, 390,700);

//Bed Side
	fill('#89BBD6')
	quad(240,150, 240,300, 1000,440, 1000,295);

//Blanket
	fill('#D6897A')
	quad(1000,120, 750,248, 750,700, 1000,700);

	fill('#FFA492')
	triangle(1000,120, 750,248, 1000,295)

//Clue2: Fish
	
	push();
	translate(260,620);
	fill(255)
	triangle(27,30, 27,50, 40,40)
	beginShape();
	curveVertex(40,40);
	curveVertex(40,40);
	curveVertex(60,22);
	curveVertex(80,20);
	curveVertex(100,40);
	curveVertex(80,60);
	curveVertex(60,60);
	curveVertex(40,40);
	endShape(CLOSE);
	fill('#6A91A6')
	ellipse(80,35,8)
	pop();

	push();
	translate(325,500);
	scale(0.5)
	fill(255)
	triangle(27,30, 27,50, 40,40)
	beginShape();
	curveVertex(40,40);
	curveVertex(40,40);
	curveVertex(60,22);
	curveVertex(80,20);
	curveVertex(100,40);
	curveVertex(80,60);
	curveVertex(60,60);
	curveVertex(40,40);
	endShape(CLOSE);
	fill('#6A91A6')
	ellipse(80,35,8)
	pop();

	push();
	translate(210,350);
	scale(1.4)
	fill(255)
	triangle(27,30, 27,50, 40,40)
	beginShape();
	curveVertex(40,40);
	curveVertex(40,40);
	curveVertex(60,22);
	curveVertex(80,20);
	curveVertex(100,40);
	curveVertex(80,60);
	curveVertex(60,60);
	curveVertex(40,40);
	endShape(CLOSE);
	fill('#6A91A6')
	ellipse(80,35,8)
	pop();
 
 	fill('#FFF5B9');
	 ellipse(280,570,25)
	 ellipse(270,360,10);
	 ellipse(350,610,10);
	 ellipse(360,450,20);
	 ellipse(310,490,6)
	
}