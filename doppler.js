let timeBetweenCircles, circGrowth, vel;

let offset = 0;

let pos = 0;

function setup(){
	createCanvas(500, 500);
	ellipseMode(CENTER);

	document.getElementById("body").appendChild(document.createElement("br"));
	createP("Time Between Circles");
	timeBetweenCircles = createSlider(5, 60, 30);
	createP("Growth of Circles (Speed of sound)");
	circGrowth = createSlider(0.1, 10, 1.5, 0.1);
	createP("Speed of Object");
	vel = createSlider(0.1, 10, 1, 0.1);

	document.getElementById("defaultCanvas0").addEventListener("click", e => {
		offset = pos;
	});
}

function draw(){
	stroke(255);
	noFill();
	background(0);

	for(let i = 0; i < frameCount; i+= timeBetweenCircles.value()){
		let size = circGrowth.value() * (frameCount - i);
		let p = vel.value() * i;
		circle(p - offset, height / 2, size);
	}

	pos+= vel.value();
}