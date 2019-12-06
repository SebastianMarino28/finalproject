function setup()
{
	createCanvas(1000, 700);
	background(200);
}
function draw()
{
	robot(width/3, 20, 1);
}
function robot(x, y, scl)
{
	translate(x,y);
	scale(scl);

	push();
		fill(160)
		rect(0,0, 300,200)
		rect(120,200, 50,75)
		rect(0, 275, 300, 450)
		rect(-50, 300, 50,75)
		rect(300, 300, 50,75)
		fill(0)
		rect(100, 350, 100, 300)
	pop();
		
}