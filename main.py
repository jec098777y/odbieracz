def on_received_string(receivedstring):
    if receivedstring == "przud":
        jedzprzud()
    elif receivedstring == "tyl":
        jedztyl()
    elif receivedstring == "skretwlewo":
        skretwlewo()
radio.on_received_string(on_received_string)

def on_button_pressed_a():
    
    robotbit.geek_servo(robotbit.Servos.S1, -20)
    pause(500)
    robotbit.geek_servo(robotbit.Servos.S1, 0)

input.on_button_pressed(Button.A, on_button_pressed_a)

def jedztyl():
    while True:
        robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
        pause(1000)
        robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
        odleglosc2 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.CENTIMETERS)
        if odleglosc2 < 10:
            strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.RED))
            strip.show()
            pause(500)
            strip.clear()
            strip.show()
            break
    basic.show_number(odleglosc2)
def skretwlewo():
    robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, -150)
    pause(500)
    robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.RED))
    strip.show()
    pause(500)
    strip.clear()
def jedzprzud():
    global odleglosc3
    robotbit.motor_run_dual(robotbit.Motors.M1A, 150, robotbit.Motors.M2A, -150)
    pause(5000)
    robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.RED))
    strip.show()
    pause(500)
    strip.clear()
    strip.show()
    odleglosc3 = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.CENTIMETERS)
    basic.show_number(odleglosc3)
odleglosc3 = 0
strip: neopixel.Strip = None
odleglosc = 0
strip = robotbit.rgb()
radio.set_group(23)