
function setup()
{
	createCanvas(1000,700);
	
}

function draw()
{
	background('#61628C');
	fill(255);
	noStroke();
	textSize(50);
	textFont("Francois One");
	text("Your goal is to escape the room.",50,230);

	fill('#B0B3FF')
	textSize(50);
	textFont("Francois One");
	text("Find clues by clicking objects around",50,310);
	text("the room. You will see your objects in",50,365);
	text("the box in the corner.",50,420);

	fill(255);
	text("The first clue is found where you sleep.", 50, 500)
	

}