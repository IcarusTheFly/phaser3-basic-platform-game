import 'phaser';
import config from './config/config';
import GameScene from './scenes/GameScene';

console.log("Initial config", config);

class CustomGame extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Game', GameScene);
        this.scene.start('Game');
    }
}

window.onload = function () {
    window.game = new CustomGame();
}