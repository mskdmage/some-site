class Spectrum {
	constructor() {
		this.name = 'spectrum';
	}

	draw() {
		push();
		let spectrum = fourier.analyze();
		noStroke();
		fill(0, 255, 0);
		for (let i=0; i < spectrum.length; i++) {
			let x = map(i, 0, spectrum.length, 0, width);
			let h = -height + map(spectrum[i], 0, 255, height, 0);
			rect(x, height, width / spectrum.length, h);
		}
	}
}