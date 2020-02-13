function setup(){
	createCanvas(720, 200);
	background(0);
	frameRate(10);
	colorMode(HSB);
}

let addTog = false;

function draw(){
	translate(0, height / 2);
	stroke(map(frameCount % 20, 0, 20, 0, 255), 255, 255);
	for(let i = 1; i < width; i++){
		line(i - 1, getW(i - 1), i, getW(i));
	}
}

function getW(i){
	let tot = 0;
	for(let j = (addTog ? 0 : frameCount); j <= frameCount; j++){
		let wi = map(i, 0, width, 0, TWO_PI * j);
		tot+= sin(wi) * height / 2;
	}

	return tot / (addTog ? frameCount : 1);
}

function mouseClicked(){
	frameCount = 0;
	background(0);
}

function addToggle(){
	addTog = !addTog;
}