basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 0) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
