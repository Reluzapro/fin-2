def on_received_number(key, value):
    if key == "recul" and key == "recul":
        motor.motor_run(motor.Motors.M1, motor.Dir.CCW, value * 2.55)
        motor.motor_run(motor.Motors.M2, motor.Dir.CW, value * 2.55)
        basic.show_icon(IconNames.YES)
blockytalky.on_received_number(on_received_number)

def on_bluetooth_connected():
    basic.show_string("C")
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_string("D")
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

basic.show_icon(IconNames.HAPPY)