let odleglosc = 0
let strip = robotbit.rgb()
radio.setGroup(23)
function jedztyl() {
    let odleglosc: number;
    
    while (true) {
        robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
        pause(1000)
        robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
        odleglosc = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.Centimeters)
        if (odleglosc < 10) {
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            pause(500)
            strip.clear()
            strip.show()
            break
        }
        
    }
    basic.showNumber(odleglosc)
}

function jedzprzud() {
    
    robotbit.MotorRunDual(robotbit.Motors.M1A, 150, robotbit.Motors.M2A, -150)
    pause(5000)
    robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    pause(500)
    strip.clear()
    strip.show()
    let odleglosc = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.Centimeters)
    basic.showNumber(odleglosc)
}

function skretwlewo() {
    
    robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
    pause(500)
    robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    pause(500)
    strip.clear()
}

radio.onReceivedString(function on_received_string(receivedstring: string) {
    if (receivedstring == "przud") {
        jedzprzud()
    } else if (receivedstring == "tyl") {
        jedztyl()
    } else if (receivedstring == "skretwlewo") {
        skretwlewo()
    }
    
})
