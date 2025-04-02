const config = {
    parent: 'phaser-game',
    type: Phaser.WEBGL,
    width: 1024,
    height: 762,
    pixelArt: true,
    zoom: 1,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
    scene: [Play]
    
}

const game = new Phaser.Game(config)
