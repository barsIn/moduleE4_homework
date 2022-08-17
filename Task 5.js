class ElectricalAppliance {
    constructor(type, brand, power) {
        this.type = type
        this.brand = brand
        this.power = power
        this.switchedOff = true
    }
    getInfo() {
        console.log(`Этот электроприбор называется ${this.type} от ${this.brand}`)
    }
    getPower() {
        console.log(`Потребляемая мощьность ${this.type} ${this.power} Вт`)
    }
    switchingOn() {
        if (this.switchedOff) {
            this.switchedOff = false
        }
        else {
            console.log('Прибор уже включен')
        }
    }
    switchingOff() {
        if (!this.switchedOff) {
            this.switchedOff = true
        }
        else {
            console.log('Прибор уже выключен')
        }
    }
}

class Laptop extends ElectricalAppliance {
    constructor(brand, power, screenDiagonal, screenResolution, processor) {
        super('laptop', brand, power);
        this.screenDiagonal = screenDiagonal
        this.screenResolution = screenResolution
        this.processor = processor
    }
    getPower() {
        console.log(`Потребляемая мощьность ${this.type} ${this.power} Вт, а в ждущем режиме ${this.power / 10} Вт`)
    }
}

class Light extends ElectricalAppliance {
    constructor(brand, power, plinth, colorfulTemperature) {
        super('light',brand, power);
        this.plinth = plinth;
        this.colorfulTemperature = colorfulTemperature;
    }
    switchingOff() {
        if (!this.switchedOff) {
            this.switchedOff = true
            console.log('Лампочка потухла')
        }
        else {
            console.log('Лампочка уже горит')
        }
    }
    switchingOn() {
        if (this.switchedOff) {
            this.switchedOff = false
            console.log(`Лампочка зажглась, температура свечения ${this.colorfulTemperature}K`)
        }
        else {
            console.log('Лампочка итак не горит')
        }
    }
}

const fridge = new ElectricalAppliance('fridge', 'LG', 365)
fridge.getInfo()
fridge.getPower()
fridge.switchingOff()
fridge.switchingOn()

const hpLoptop = new Laptop('HP', 60, 13.3, '1366x768', 'Intel Atom Z3735F')
hpLoptop.getInfo()
hpLoptop.getPower()

const led = new Light('Irbis', 9, 'E27', 2700)
led.getInfo()
led.switchingOn()
led.getPower()


