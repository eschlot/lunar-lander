function EndeSchubVertikal () {
    Rakete.ay = auftrieb
    Rakete.setImage(img`
        . . . . . . . 1 . . . . . . . . 
        . . 8 . . . 1 1 1 . . . 8 . . . 
        . . 8 . . 1 f f f 1 . . 8 . . . 
        . 8 8 8 . 1 1 1 1 1 . 8 8 8 . . 
        . 8 f 8 8 1 f f f 1 8 8 f 8 . . 
        . 8 8 8 . 1 1 1 1 1 . 8 8 8 . . 
        . f . f . 1 f f f 1 . f . f . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    EndeSchubVertikal()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        Rakete.setImage(img`
            . . . . . . . 1 . . . . . . . . 
            . . 8 . . . 1 1 1 . . . 8 . . . 
            . 8 8 8 . 1 f f f 1 . 8 8 8 . . 
            . 8 8 8 8 1 1 1 1 1 8 8 8 8 . . 
            . 8 f f 8 1 f f f 1 8 f f 8 . . 
            . 8 8 8 8 1 1 1 1 1 8 8 8 8 . . 
            . f 2 f 8 1 f f f 1 8 f 4 f . . 
            f 2 2 2 f 1 1 1 1 1 f 2 4 2 f . 
            . 2 5 2 . 1 f f f 1 . 4 2 2 . . 
            . 5 2 4 . 1 1 1 1 1 . 2 2 2 . . 
            . 2 4 2 . f 2 4 2 f . 2 5 5 . . 
            . 4 2 2 . . 2 5 2 . . 5 5 5 . . 
            . . 2 . . . 4 5 4 . . 5 2 2 . . 
            . . . . . . . 5 . . . . 2 . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            `)
        Rakete.ay = 0 - 3
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        Rakete.setImage(img`
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . 8 8 . 1 f f f 1 . 8 8 . . . 
            . 8 8 8 8 1 1 1 1 1 8 8 8 8 . . 
            . 8 f 8 8 1 f f f 1 8 8 f 8 . . 
            . 8 8 8 8 1 1 1 1 1 8 8 8 8 . . 
            . f . f 8 1 f f f 1 8 f 2 f . . 
            . . . . f 1 1 1 1 1 . 2 2 2 . . 
            . . . . . 1 f f f 1 . 2 2 2 . . 
            . . . . . 1 1 1 1 1 . 2 2 2 . . 
            . . . . . f 2 4 2 f . 2 2 2 . . 
            . . . . . . 2 5 2 . . 5 5 5 . . 
            . . . . . . 4 5 4 . . 5 5 5 . . 
            . . . . . . . 5 . . . . 5 . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        Rakete.ax = 0 - 3
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    if (Rakete.vy > 5) {
        verlieren()
    } else {
        game.over(true, effects.confetti)
    }
})
function verlieren () {
    game.over(false, effects.dissolve)
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    verlieren()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths1, function (sprite, location) {
    verlieren()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    endeSchubHorizontal()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    verlieren()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        Rakete.setImage(img`
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . 8 8 . 1 f f f 1 . 8 8 . . . 
            . 8 8 8 8 1 1 1 1 1 8 8 8 8 . . 
            . 8 8 8 8 1 f f f 1 8 8 8 8 . . 
            . 8 f 8 8 1 1 1 1 1 8 8 f 8 . . 
            . f 2 f 8 1 f f f 1 8 f 4 f . . 
            f 2 2 2 f 1 1 1 1 1 f 2 4 2 . . 
            . 2 2 2 . 1 f f f 1 . 4 2 . . . 
            . 2 5 2 . 1 1 1 1 1 . . . . . . 
            . 2 5 2 . f 2 4 2 f . . . . . . 
            . 5 5 5 . . 2 5 2 . . . . . . . 
            . 5 5 5 . . 4 5 4 . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            `)
        Rakete.ax = 0 + 3
    }
})
function endeSchubHorizontal () {
    Rakete.ax = idle
    Rakete.setImage(img`
        . . . . . . . 1 . . . . . . . . 
        . . 8 . . . 1 1 1 . . . 8 . . . 
        . . 8 . . 1 f f f 1 . . 8 . . . 
        . 8 8 8 . 1 1 1 1 1 . 8 8 8 . . 
        . 8 f 8 8 1 f f f 1 8 8 f 8 . . 
        . 8 8 8 . 1 1 1 1 1 . 8 8 8 . . 
        . f . f . 1 f f f 1 . f . f . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    verlieren()
})
info.onLifeZero(function () {
    Rakete.ax = 0
    Rakete.ay = auftrieb
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    endeSchubHorizontal()
})
let Rakete: Sprite = null
let idle = 0
let auftrieb = 0
auftrieb = 2
idle = 0
info.setLife(1000)
Rakete = sprites.create(img`
    . . . . . . . 1 . . . . . . . . 
    . . 8 . . . 1 1 1 . . . 8 . . . 
    . . 8 . . 1 f f f 1 . . 8 . . . 
    . 8 8 8 . 1 1 1 1 1 . 8 8 8 . . 
    . 8 f 8 8 1 f f f 1 8 8 f 8 . . 
    . 8 8 8 . 1 1 1 1 1 . 8 8 8 . . 
    . f . f . 1 f f f 1 . f . f . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Rakete.ay = auftrieb
scene.cameraFollowSprite(Rakete)
tiles.setTilemap(tiles.createTilemap(hex`20000d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005020400000000000000000000050101030000000000040000000000000000000202020003030503000000000002020202050000000002010105000000000202020202050202020200000000000202020202000000000202020500000505020202020202020202020200000000020202020200000000020202050000050202020202020202020202020000000002020202020000000000020205010105020202020202020202020202000000000202020202050607020202020202020202020202020202020202020201010101020202020202020202020202`, img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    2...............................
    ................................
    `, [myTiles.transparency16,sprites.builtin.brick,sprites.builtin.oceanDepths1,sprites.builtin.coral0,sprites.castle.rock0,sprites.castle.shrub,sprites.castle.saplingOak,sprites.castle.rock2], TileScale.Sixteen))
effects.starField.startScreenEffect(5000)
game.onUpdate(function () {
    if (controller.left.isPressed() || (controller.right.isPressed() || controller.up.isPressed())) {
        info.setLife(info.life() - 1)
    }
})
