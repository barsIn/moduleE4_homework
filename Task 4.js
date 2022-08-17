function ElectricalAppliance (type, brand, power) {
    this.type = type
    this.brand = brand
    this.power = power
    this.switchedOff = true
}

ElectricalAppliance.prototype.getInfo = function () {
    console.log(`Этот электроприбор называется ${this.type} от ${this.brand}`)
}

ElectricalAppliance.prototype.getPower = function () {
    console.log(`Потребляемая мощьность ${this.type} ${this.power} Вт`)
}

ElectricalAppliance.prototype.switchingOn = function () {
    if (this.switchedOff) {
        this.switchedOff = false
    }
    else {
        console.log('Прибор уже включен')
    }
}
ElectricalAppliance.prototype.switchingOff = function () {
    if (!this.switchedOff) {
        this.switchedOff = true
    }
    else {
        console.log('Прибор уже выключен')
    }
}


function Laptop (brand, power, screenDiagonal, screenResolution, processor) {
    this.type = 'laptop'
    this.brand = brand
    this.power = power
    this.screenDiagonal = screenDiagonal
    this.screenResolution = screenResolution
    this.processor = processor
}
Laptop.prototype = new ElectricalAppliance()

Laptop.prototype.getPower = function () {
    console.log(`Потребляемая мощьность ${this.type} ${this.power} Вт, а в ждущем режиме ${this.power / 10} Вт`)
}

function Light (brand, power, plinth, colorfulTemperature) {
    this.type = 'light'
    this.brand = brand
    this.power = power
    this.plinth = plinth
    this.colorfulTemperature = colorfulTemperature
}

Light.prototype = new ElectricalAppliance()

Light.prototype.switchingOff = function () {
    if (!this.switchedOff) {
        this.switchedOff = true
        console.log('Лампочка потухла')
    }
    else {
        console.log('Лампочка уже горит')
    }
}
Light.prototype.switchingOn = function () {
    if (this.switchedOff) {
        this.switchedOff = false
        console.log(`Лампочка зажглась, температура свечения ${this.colorfulTemperature}K`)
    }
    else {
        console.log('Лампочка итак не горит')
    }
}
const hpLoptop = new Laptop('HP', 60, 13.3, '1366x768', 'Intel Atom Z3735F')
hpLoptop.getInfo()
hpLoptop.getPower()

const led = new Light('Irbis', 9, 'E27', 2700)
led.getInfo()
led.switchingOn()
led.getPower()

const fridge = new ElectricalAppliance('fridge', 'LG', 365)
fridge.getInfo()
fridge.getPower()
fridge.switchingOff()
fridge.switchingOn()



