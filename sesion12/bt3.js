"use strict";
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    show() {
        console.log(this.id, this.name);
    }
}
class Student2 extends Person2 {
    constructor(id, name) {
        super(id, name);
        this.id = id;
        this.name = name;
    }
}
const checkInf3 = new Student2(1, "duy");
checkInf3.show();
