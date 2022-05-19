blockytalky.onReceivedNumber(function (key, value) {
    if (key == "angle") {
        a = value
        a = a * 3.1415 / 180
    } else {
        if (key == "recul") {
            b = value * 2.5
            if (a > 0 && b > 0) {
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, b * Math.cos(a))
                motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, b)
            } else {
                if (a < 0 && b > 0) {
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, b)
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, b * Math.cos(a))
                } else {
                    if (a > 0 && b < 0) {
                        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, b * Math.cos(a))
                        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, b)
                    } else {
                        if (a < 0 && b < 0) {
                            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, b)
                            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, b * Math.cos(a))
                        } else {
                            if (a < 30) {
                                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
                                motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 0)
                            } else {
                                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, b)
                                motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, b)
                            }
                        }
                    }
                }
            }
        }
    }
})
bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
let b = 0
let a = 0
basic.showIcon(IconNames.Happy)
