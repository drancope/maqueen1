basic.forever(function () {
    if (true) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
    radio.sendNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
