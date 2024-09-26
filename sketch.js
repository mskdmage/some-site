let controls;
let vis;
let sound;
let fourier;
let amp;

function preload() {
	soundFormats('mp3','wav');
	sound = loadSound('assets/song.mp3');
}

function setup() {
	 createCanvas(windowWidth, windowHeight);
	 background(0);
	 controls = new ControlsAndInput();
	 fourier = new p5.FFT();
	 amp = new p5.Amplitude();
	 vis = new Visualisations();
	 vis.add(new WavePattern());
	 vis.add(new Spectrum());
	 vis.add(new Needles());
}

function draw() {
	background(0);
	vis.selectedVisual.draw();
	controls.draw();
	console.log(max(fourier.analyze()));
	push();
	fill(constrain(amp.getLevel() * 255, 150, 255), 0, 0);
	noStroke();
	ellipse(width/2, height/2, amp.getLevel() * width/2);
	pop();
}

function mouseClicked() {
	controls.mousePressed();
	fullscreen();
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
