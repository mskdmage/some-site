class WavePattern {
	constructor() {
		this.name = "wavepattern";
	}

	draw() {
		push();
		noFill();
		stroke(255, 0, 0);
		strokeWeight(2);

		beginShape();

		let wave = fourier.waveform();

		for (let i=0; i<wave.length; i++) {
			let x = map(i, 0, wave.length, 0, width);
			let y = map(wave[i], -1, 1, 0, height);

			vertex(x, y);
		}
		endShape();
		pop();
	}
}