"use strict";
/*
    Tính kế thừa
    là tính chất thể hiện bởi  class con kế thừa class cha thì sẽ có các thuộc tính và phương thức
    của lớp cha
    Giúp tái cấu trúc , sử dụng lại đoạn code
     1 class con có thể lấy thuộc tính của 1 cha
     1 class cha có thể kế thừa cho nhiều class con

*/
class Cha {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    show() {
        console.log(`chao ${this.name}`);
        return this.show();
    }
}
// khởi tạo class con kế thừa class cha
class Chirld extends Cha {
    constructor(name, id) {
        super(name, id); // phair dat tren dau
        this.name = name;
        this.id = id;
    }
}
// khởi tạo con1`   
let child1 = new Chirld("DUY ANH", 1); // ke thua het cac thuoc tinh cua cha
console.log(child1.show());
