class Shape {
    constructor(protected so1: number, protected so2: number) {}

    Schunhat() {
        console.log("Diện tích hình chữ nhật:", this.so1 * this.so2);
    }

    Stron() {
        console.log("Diện tích hình tròn:", this.so1 * this.so1 * Math.PI);
    }
    Vchunhat(){
        console.log("chu vi cn :",(this.so1 +this.so2)*2);
        
    }
    Vtron(){
        console.log("Chu vi tron :",this.so1 * Math.PI);
        
    }
}

class Rectangle2 extends Shape {
    constructor(private height: number, private width: number) {
        super(height, width);
    }
}

class Circle2 extends Shape {
    constructor(private radius: number) {
        super(radius, 0); // Truyền 0 làm tham số thứ hai, không được sử dụng trong tính toán hình tròn
    }
}

const rectangle = new Rectangle2(5, 3);
rectangle.Schunhat();

const circle = new Circle2(4);
circle.Stron();
