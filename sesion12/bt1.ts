class Employee22 {
    name: string;
    company: string;
    phone: number;

    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo() {
        console.log(this.name, this.company, this.phone);
    }
}

class Manager extends Employee22 {
    teamSize: string;

    constructor(name: string, company: string, phone: number, teamSize: string) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}

const checkInf: Manager = new Manager("duy", 123, "hi", "cac");
checkInf.printInfo();

