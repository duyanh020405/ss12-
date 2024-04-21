class ShopItem {
    protected id: number;
    protected name: string;
    protected price: number;
    protected isAvailable: boolean;

    constructor(id: number, name: string, price: number, isAvailable: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }

    getInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Available: ${this.isAvailable}`);
    }
}

class LendingItem extends ShopItem {
    private customerNames: string[];
    private stock: number;

    constructor(id: number, name: string, price: number, isAvailable: boolean, stock: number) {
        super(id, name, price, isAvailable);
        this.customerNames = [];
        this.stock = stock;
    }

    lendItem(customerName: string): void {
        if (this.stock > 0) {
            this.customerNames.push(customerName);
            this.stock--;
            if (this.stock === 0) {
                this.isAvailable = false;
                console.log(`het hang`);
            }
        } else {
            console.log(`Het hang`);
        }
    }
}

const book = new LendingItem(1, "Book", 10, true, 2);
book.lendItem("Alice");
book.getInfo();
