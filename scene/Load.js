class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path ='./assets/'
        this.load.image('slime','slime.png')
        this.load.image('anabel','anabel.png')
        this.load.image('restaraunt','background.png')
    }

    create() {
        this.scene.start('playScene')
    }


}