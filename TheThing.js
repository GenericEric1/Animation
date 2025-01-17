class TheThing {
	constructor() {
		this.animator = new Animator(ASSET_MANAGER.getAsset("./Fantastic Four.png"), 3, 0.2, 48, 48, 0, 6);
		this.x = 0;
		this.y = 600;
		this.speed = 200; //pixels per second

	}

	update() {
		this.x = (this.x +  this.speed*gameEngine.clockTick) % 1024;

	}

	draw(ctx) {
		this.animator.drawFrame(ctx, this.x, this.y);
	}
}