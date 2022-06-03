odleglosc = 0



strip = robotbit.rgb()
radio.set_group(23)
def jedztyl():
    global strip
    while True:

        
        robotbit.motor_run_dual(robotbit.Motors.M1A, -150, robotbit.Motors.M2A, 150)
        pause(1000)
        robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
        odleglosc = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.CENTIMETERS)
        if odleglosc < 10:
            
                strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.RED))
                strip.show()
                pause(500)

                strip.clear()
                strip.show()
                break

            

   
    
    
    basic.show_number(odleglosc)
    
def jedzprzud():
    global strip
    robotbit.motor_run_dual(robotbit.Motors.M1A, 150, robotbit.Motors.M2A, -150)
    pause(5000)
    robotbit.motor_run_dual(robotbit.Motors.M1A, 0, robotbit.Motors.M2A, 0)
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.RED))
    strip.show()
    pause(500)

    strip.clear()
    strip.show()
    odleglosc = sonar.ping(DigitalPin.P13, DigitalPin.P15, PingUnit.CENTIMETERS)
    
    basic.show_number(odleglosc)
def skretwlewo():
    global strip
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




def on_received_string(receivedstring):
    if receivedstring == "przud":
        jedzprzud()
    elif receivedstring == "tyl":
        jedztyl()
    elif receivedstring == "skretwlewo":
        skretwlewo()
radio.on_received_string(on_received_string)
