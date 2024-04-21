"use strict";
class Employee22 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name, this.company, this.phone);
    }
}
class Manager extends Employee22 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}
const checkInf = new Manager("duy", 123, "hi", "cac");
checkInf.printInfo();
