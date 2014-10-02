function setup(){
createCanvas(680,600)
noFill();
stroke();
}

function draw(){
	background(200,200,200);
	ellipse(50,50,mouseX,mouseY);

	if(mouseX < 300) {
		ellipse(200,200,100,100);
	} else{
		ellipse(400,200,100,100);
	}
}