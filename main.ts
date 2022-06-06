radio.onReceivedString(function on_received_string(receivedstring: string) {
    if (receivedstring == "przud") {
        jedzprzud()
    } else if (receivedstring == "tyl") {
        jedztyl()
    } else if (receivedstring == "skretwlewo") {
        skretwlewo()
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    robotbit.GeekServo(robotbit.Servos.S1, -20)
    pause(500)
    robotbit.GeekServo(robotbit.Servos.S1, 0)
})
function jedztyl() {
    let odleglosc2: number;
    while (true) {
        robotbit.MotorRunDual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
        pause(1000)
        robotbit.MotorRunDual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
        odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.Centimeters)
        if (odleglosc2 < 10) {
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            pause(500)
            strip.clear()
            strip.show()
            break
        }
        
    }
    basic.showNumber(odleglosc2)
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
    odleglosc3 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.Centimeters)
    basic.showNumber(odleglosc3)
}

let odleglosc3 = 0
let strip : neopixel.Strip = null
let odleglosc = 0
strip = robotbit.rgb()
radio.setGroup(23)
