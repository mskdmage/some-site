class PlaybackButton {
	
	constructor(args={x: 20, y: 20, width: 20, height: 20}) {
		this.x = args.x;
		this.y = args.y;
		this.width = args.width;
		this.height = args.height;
		this.playing = false;
	}

	draw() {
		if (this.playing) {
			rect(this.x, this.y, this.width/2 - 2, this.height);
			rect(this.x + (this.width/2 + 2), this.y, this.width/2 - 2, this.height);
		} else {
			triangle(this.x, this.y, this.x + this.width, this.y + this.height/2, this.x, this.y+this.height);
		}
	}

	hitCheck() {
		if (mouseX > this.x && mouseX < this.x + this.width&& mouseY > this.y && mouseY < this.y + this.height) {
			if (sound.isPlaying()) {
				sound.pause();
			} else {
				sound.loop(0, 0.8);
			}
			this.playing = !this.playing;
			return true;
		}
		return false;
	}
}