let wave1Pos = 0, wave2Pos = 0;

function setup(){
	createCanvas(720, 500);
}

function draw(){
	background(0);
	translate(0, height / 2);
	strokeWeight(1);
	stroke(255);
	line(0, 0, width, 0);
	strokeWeight(3);
	for(let i = 0; i < width; i++){
		let wave1 = sin(radians(i + wave1Pos)) * height / 4;
		let wave2 = sin(radians(i + wave2Pos)) * height / 4;
		stroke(255, 0, 0);
		point(i, wave1);
		stroke(0, 255, 0);
		point(i, wave2);
		stroke(0, 0, 255);
		point(i, wave1 + wave2);
	}
	wave1Pos++;
	wave2Pos--;
}