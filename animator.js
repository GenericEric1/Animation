class Animator {
	constructor(spritesheet, numFrames, frameDuration, frameWidth, frameHeight, startX, startY) {
		Object.assign(this, {spritesheet, numFrames, frameDuration, frameWidth, frameHeight, startX, startY});
		this.elapsedTime = 0;
		this.totalTime = this.frameDuration * this.numFrames;

	}

	currentFrame() {
		return Math.floor(this.elapsedTime/ this.frameDuration) % this.numFrames;
	}

	drawFrame(ctx, x, y) {
		this.elapsedTime += gameEngine.clockTick;
		const frame = this.currentFrame();
		const sx = this.startX + frame * this.frameWidth;
		const sy = this.startY * this.frameHeight;

		ctx.drawImage(this.spritesheet,
			sx, sy,
			this.frameWidth, this.frameHeight,
			x, y,
			this.frameWidth, this.frameHeight
		);
	}
}