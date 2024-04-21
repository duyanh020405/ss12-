"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getFullDescription() {
        console.log(`Product: ${this.name}, Price: ${this.price}, Brand: ${this.brand}`);
    }
}
const checkInf5 = new Electronics("Smartphone", 500, "Samsung");
