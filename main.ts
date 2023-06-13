input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 A G F E F G A ", 150)
    basic.showString("MR HAJI")
})
input.onGesture(Gesture.TiltLeft, function () {
    led.plot(2, 2)
})
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
basic.clearScreen()
basic.showLeds(`
    . . # . .
    . # # . .
    # # # # #
    . # # . .
    . . # . .
    `)
basic.clearScreen()
