basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 129)
    }
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
