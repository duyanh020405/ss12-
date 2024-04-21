"use strict";
class ShopItem {
    constructor(id, name, price, isAvailable) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }
    getInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Available: ${this.isAvailable}`);
    }
}
class LendingItem extends ShopItem {
    constructor(id, name, price, isAvailable, stock) {
        super(id, name, price, isAvailable);
        this.customerNames = [];
        this.stock = stock;
    }
    lendItem(customerName) {
        if (this.stock > 0) {
            this.customerNames.push(customerName);
            this.stock--;
            if (this.stock === 0) {
                this.isAvailable = false;
                console.log(`het hang`);
            }
        }
        else {
            console.log(`Het hang`);
        }
    }
}
const book = new LendingItem(1, "Book", 10, true, 2);
book.lendItem("Alice");
book.getInfo();
