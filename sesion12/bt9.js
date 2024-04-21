"use strict";
class Shape {
    constructor(so1, so2) {
        this.so1 = so1;
        this.so2 = so2;
    }
    Schunhat() {
        console.log("Diện tích hình chữ nhật:", this.so1 * this.so2);
    }
    Stron() {
        console.log("Diện tích hình tròn:", this.so1 * this.so1 * Math.PI);
    }
    Vchunhat() {
        console.log("chu vi cn :", (this.so1 + this.so2) * 2);
    }
    Vtron() {
        console.log("Chu vi tron :", this.so1 * Math.PI);
    }
}
class Rectangle2 extends Shape {
    constructor(height, width) {
        super(height, width);
        this.height = height;
        this.width = width;
    }
}
class Circle2 extends Shape {
    constructor(radius) {
        super(radius, 0); // Truyền 0 làm tham số thứ hai, không được sử dụng trong tính toán hình tròn
        this.radius = radius;
    }
}
const rectangle = new Rectangle2(5, 3);
rectangle.Schunhat();
const circle = new Circle2(4);
circle.Stron();
