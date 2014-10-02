function setup(){
createCanvas(680,600)
noFill();
stroke(255,255,255);
}

function draw(){
	background(200,200,200);

	if(mouseX < 100) {
		fill(255,255,255);
		ellipse(50,200,100,100);
	}

	else if (mouseX < 200){

		fill(146,240,255);
		ellipse(200,200,100,100)
		rect(150,200,100,100);
	}

	else if (mouseX < 300){
		fill(0,195,255);
		ellipse(250,200,100,100);
	}

	else if (mouseX < 400){
		fill(0,175,216);
		ellipse(350,200,100,100);
	}

	else if (mouseX < 500){
		fill(0,175,33);
		ellipse(450,200,100,100);
	}

	else{
		ellipse(550,200,100,100);
		ellipse(550,200,50,50);
	}
}