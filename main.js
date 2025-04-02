const config = {
    parent: 'phaser-game',
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    pixelArt: true,
    zoom: 1,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
    scene: [Load, Play]
    
}

const game = new Phaser.Game(config)
