class Employee222 {
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

class Manager2 extends Employee222 {
    teamSize: string;

    constructor(name: string, company: string, phone: number, teamSize: string) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    prinfInfor(){
        console.log("name :",this.name,"company",this.company,"",this.phone);
        
    }
}

const checkInf2: Manager2= new Manager2("duy", "123", 12, "cac");
checkInf.printInfo();
