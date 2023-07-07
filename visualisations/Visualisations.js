class Visualisations {
	constructor() {
		this.visuals = [];
		this.selectedVisual = null;
	}

	add(vis) {
		this.visuals.push(vis);

		if(this.selectedVisual == null) {
			this.selectVisual(vis.name);
		}
	}

	selectVisual(name) {
		for(let i=0; i<this.visuals.length; i++) {
			if(name === this.visuals[i].name) {
				this.selectedVisual = this.visuals[i];
			}
		}
	}
}