class InvisibleWoman {
	constructor() {
		this.animator = new Animator(ASSET_MANAGER.getAsset("./Fantastic Four.png"), 3, 0.2, 49, 49, 145, 2);
		this.x = 0;
		this.y = 400;
		this.speed = 200; //pixels per second

	}

	update() {
		this.x = (this.x +  this.speed*gameEngine.clockTick) % 1024;

	}

	draw(ctx) {
		this.animator.drawFrame(ctx, this.x, this.y);
	}
}