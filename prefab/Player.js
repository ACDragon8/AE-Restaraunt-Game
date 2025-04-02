class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene,x,y,texture,frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.playerdata = {
            moveSpeed:200
        }
        this.body.setSize(this.width,this.height)
        this.setCollideWorldBounds(true)
        this.setImmovable(false)

        this.playerState = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
        },[scene,this])
    }

    update() {
        this.playerState.step()
    }
}

class IdleState extends State {
    enter(scene, player) {
        player.setVelocity(0)
    }

    execute(scene, player) {
        //const { left, right, up, down, space, shift } = scene.keys
        const WKey = scene.keys.WKey
        const AKey = scene.keys.AKey
        const SKey = scene.keys.SKey
        const DKey = scene.keys.DKey
        const FKey = scene.keys.FKey

        // transition to move if pressing a movement key
        if(WKey.isDown || AKey.isDown || SKey.isDown || DKey.isDown ) {
            this.stateMachine.transition('move')
            return
        }
    }
}

class MoveState extends State {
    execute(scene, player) {
        const WKey = scene.keys.WKey
        const AKey = scene.keys.AKey
        const SKey = scene.keys.SKey
        const DKey = scene.keys.DKey
        const FKey = scene.keys.FKey

        if(!(WKey.isDown || AKey.isDown || SKey.isDown || DKey.isDown)) {
            this.stateMachine.transition('idle')
            return
        }

         // handle movement
         let moveDirection = new Phaser.Math.Vector2(0, 0)
        if(WKey.isDown) {
            moveDirection.y = -1
            player.direction = 'up'
        } else if(SKey.isDown) {
            moveDirection.y = 1
            player.direction = 'down'
        }
        if(AKey.isDown) {
            moveDirection.x = -1
            player.direction = 'left'
        } else if(DKey.isDown) {
            moveDirection.x = 1
            player.direction = 'right'
        }

        moveDirection.normalize()
        player.setVelocity(player.playerdata.moveSpeed * moveDirection.x, player.playerdata.moveSpeed * moveDirection.y)
    }
}