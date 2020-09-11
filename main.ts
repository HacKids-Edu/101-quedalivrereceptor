radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("Aceleração Z", receivedNumber)
})
radio.setGroup(30)
basic.forever(function () {
	
})
