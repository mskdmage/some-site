class ControlsAndInput {
	constructor() {
		this.menuDisplayed = false;
		this.playbackButton = new PlaybackButton();
	}

	mousePressed() {
		let hit = this.playbackButton.hitCheck();
		if(!hit) {
			let f = fullscreen();
			fullscreen(!f);
		}
	}

	keyPressed(keycode) {
		console.log(keycode);
		if (keycode == 32) {
			this.menuDisplayed = !this.menuDisplayed;
		}

		if (keycode > 48 && keycode < 58) {
			let visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name);
		}
	}

	draw() {
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		this.playbackButton.draw();
		
		if (this.menuDisplayed) {
			text("Select a visualisation:", 100, 30);
			this.menu();
		}

		pop();
	}

	menu() {

	}
}
