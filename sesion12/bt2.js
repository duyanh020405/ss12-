"use strict";
class Employee222 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name, this.company, this.phone);
    }
}
class Manager2 extends Employee222 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    prinfInfor() {
        console.log("name :", this.name, "company", this.company, "", this.phone);
    }
}
const checkInf2 = new Manager2("duy", "123", 12, "cac");
checkInf.printInfo();
