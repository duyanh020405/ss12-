class Account {
    protected accountNumber : number
    protected balance :number
    constructor(accountNumber:number, balance:number) {
        this.accountNumber=accountNumber
        this.balance=balance
    }
    deposit(gui:number){
        this.balance+=gui
    }
    withdraw(rut:number){
        if(this.balance<rut){
            console.log(" het tien roi");  
        }
        else{
            this.balance-=rut
        }
    }
}

class SavingsAccount extends Account{
    private interestRate:number
    constructor(accountNumber : number ,balance :number,interestRate:number){
        super(accountNumber,balance)
        this.interestRate=interestRate
    }
    calculateInterest(){
        console.log("lai hang thang :",this.balance/12);
        
    }

}
class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: number, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount: number) {
        const availableBalance = this.balance + this.overdraftLimit;
        if (amount > availableBalance) {
            console.log("quá số dư");
        } else {
            this.balance -= amount;
            console.log("oke , tien con :", this.balance);
        }
    }
}

// Create a regular account
const regularAccount = new Account(12345, 1000);

// Deposit some money into the regular account
regularAccount.deposit(500);
console.log("Regular account balance after deposit:", regularAccount.balance); // Output: 1500

// Withdraw some money from the regular account
regularAccount.withdraw(200);
console.log("Regular account balance after withdrawal:", regularAccount.balance); // Output: 1300

// Attempt to withdraw more money than available
regularAccount.withdraw(2000); // Output: Not enough funds

// Create a savings account
const savingsAccount = new SavingsAccount(54321, 2000, 0.05);

// Calculate and print monthly interest for the savings account
savingsAccount.calculateInterest(); // Output: Monthly interest: 8.333333333333334

// Deposit some money into the savings account
savingsAccount.deposit(1000);
console.log("Savings account balance after deposit:", savingsAccount.balance); // Output: 3000

// Withdraw some money from the savings account
savingsAccount.withdraw(500);
console.log("Savings account balance after withdrawal:", savingsAccount.balance); // Output: 2500
