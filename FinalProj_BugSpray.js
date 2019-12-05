
function setup()
{
	createCanvas(1000,700);
	background('#B0B3FF');
}

function draw()
{
//Intentation
	fill('#9496D6');
	noStroke();
	rect(250,50,500,600);

//BackWall
	fill('#61628C');
	rect(310,110,380,460);

//Bottom + Top
	fill('#7879AD');
	quad(250,650, 310,570, 690,570, 750,650);
	quad(250,50, 310,110, 690,110, 750,50);

//Shadow
	fill('#61628C');
	ellipse(440,610,200,30)

drawSpray(510,250,0,1);


}

function drawSpray(x,y,rot,sc)
{
	translate(x,y);
	scale(sc);
	rotate(rot);
//Top of Can
	fill('#79CCA1')
	beginShape();
	curveVertex(-60,110);
	curveVertex(-60,110);
	curveVertex(-55,80);
	curveVertex(-48,60);
	curveVertex(-40,40);
	curveVertex(-27,20);
	curveVertex(0,20);
	curveVertex(0,20);
	curveVertex(28,20);
	curveVertex(40,40);
	curveVertex(48,60);
	curveVertex(55,80);
	curveVertex(60,110);
	curveVertex(44,110);
	endShape(CLOSE);
	ellipse(0,23,58,20);
	fill('#4B8064');
	ellipse(5,40,10,30);
	fill(255)
	ellipse(5,35,3,10)

//Body of Can
	fill('#87E6B5');
	push();
	//ellipse(0,350, 120,40 );
	rect(-60,110,120,237);
	ellipse(0,110, 120,40);
	fill('#62A683');
	ellipse(0,350, 120,40 );
	rect(-60,140,120,210);
	ellipse(0,140, 120,40);
//Bug on Can
	fill(255);
	ellipse(0,210,40,60);
	ellipse(0,180,25)
	ellipse(-12,164,6);
	ellipse(12,164,6);
	stroke(255);
	strokeWeight(2)
	line(-8,170, -12,164);
	line(8,170, 12,164);
	line(-15, 200,-25,193);
	line(-25,193,-27,185);
	line(15, 200,25,193);
	line(25,193,27,185);
	line(-15,220,-25,227);
	line(-25,227,-27,237);
	line(15,220,25,227);
	line(25,227,27,237);
	
	pop();


}