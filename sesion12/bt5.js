"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name}.`);
    }
    displayAge() {
        console.log(`My age is ${this.age}.`);
    }
}
class Employee extends Person {
    constructor(name, age) {
        super(name, age);
    }
    showDetails() {
        console.log(`Employee: ${this.name}, ${this.age}`); // Lỗi: age là private, không thể truy cập từ bên ngoài lớp Person
    }
}
const person1 = new Person("John", 30);
person1.introduce();
person1.displayAge();
const employee1 = new Employee("Alice", 25);
employee1.introduce();
employee1.displayAge(); // Lỗi: age là private, không thể truy cập từ bên ngoài lớp Person
