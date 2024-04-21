class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getDescription() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    getFullDescription() {
        console.log(`Product: ${this.name}, Price: ${this.price}, Brand: ${this.brand}`);
    }
}
const checkInf5 = new Electronics("Smartphone", 500, "Samsung");

