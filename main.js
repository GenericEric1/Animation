const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Fantastic Four.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);

	gameEngine.addEntity(new MrFantastic());
	gameEngine.addEntity(new HumanTorch());
	gameEngine.addEntity(new InvisibleWoman());
	gameEngine.addEntity(new TheThing());

	gameEngine.start();
});
