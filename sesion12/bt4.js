"use strict";
class Vehicle2 {
    constructor(name, id, speed) {
        this.name = name;
        this.id = id;
        this.speed = speed;
    }
    giam(newSpeed) {
        if (newSpeed < this.speed) {
            this.speed = newSpeed;
        }
        else {
            return;
        }
    }
    tang(newSpeed) {
        if (newSpeed > this.speed) {
            this.speed = newSpeed;
        }
        else {
            return;
        }
    }
    show() {
        console.log(this.name, this.id, this.speed);
    }
}
class Bicycle extends Vehicle2 {
    constructor(name, id, speed, gear) {
        super(name, id, speed);
        this.gear = gear;
    }
}
const checkInf4 = new Bicycle("xeoto", 5, 8, 8);
checkInf4.giam(7);
checkInf4.show();
