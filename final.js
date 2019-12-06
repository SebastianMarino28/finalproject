function setup()
{
	createCanvas(1000,700);
	background(200);
}
function draw()
{
	//drawMouse(mouseX, mouseY);

	drawDrawer(width/2,height/2, 1)

	battery(-75, -50, 1, radians(-45));

}
function drawDrawer(x,y,scl)
{
	translate(x,y);
	scale(scl);
	fill(0);

	push();
		translate(-250,-200);
		push();
		fill(0);
		ellipse(250,400, 100);
		pop();
		fill(250,30,30);
		rect(0,0, 500, 400);
		fill(255,255,0);
		rect(50,50, 400, 300);
		strokeWeight(1);
		line(50,50, 0,0);
		line(50,350,0,400);
		line(500,0, 450,50);
		line(500,400,450,350);

	pop();
}
function drawMouse()
{
	textSize(20);
	fill(0);
	text(mouseX + "  , " + mouseY,100,100);
}
function battery(x,y,scl,rot)
{
	translate(x,y);
	scale(scl);
	rotate(rot);

	push();
		fill(139, 69, 19);
		rect(0,0, 50,75);
		fill(0);
		rect(0,50, 50,100);
		fill(255);
		rect(20, -5, 10, 5);
	pop();
}