

//can not have a method body - abstract methods
//prototype - method declaration only
//No business logic
//can not create object of interface
//100 % Abstraction

class BankPolicy {
    creditAlertPolicy(): void {
        console.log("Credit Should be Negative");
    }
}

interface worldBank {
    registerationPolicy(): void;
}

interface Bank {
    deposit(): number;
    withdrawal(): number;
    openAccount(): void;
    closeAccount(): void;
}

class HDFC extends BankPolicy implements Bank, worldBank {
    registerationPolicy(): void {
        console.log("Implementation of World bank method");
    }
    deposit(): number {
        console.log('Enter Deposit via Cheque');
        return 1;
    }
    withdrawal(): number {
        console.log('Take Out Money via Cheque');
        return 1;
    }
    openAccount(): void {
        console.log('Accout Opened via Aadhar Card');
    }
    closeAccount(): void {
        console.log('Account Closed');
    }
    loanDisbursement(): number {
        console.log('Disburse loan by DD');
        return 1;
    }

}

class SBI implements Bank {
    deposit(): number {
        console.log('Enter Deposit via Cash');
        return 1;
    }
    withdrawal(): number {
        console.log('Take Out Money via Cash');
        return 1;
    }
    openAccount(): void {
        console.log('Accout Opened via Voter ID Card');
    }
    closeAccount(): void {
        console.log('Account Closed');
    }
    renewLoan(): number {
        console.log('Renew loan');
        return 1;
    }

}
console.log('******HDFC Bank Account****');
let hfdc: HDFC = new HDFC();
hfdc.openAccount();
hfdc.deposit();
hfdc.withdrawal();
hfdc.loanDisbursement();
hfdc.closeAccount();
hfdc.creditAlertPolicy();
hfdc.registerationPolicy();

console.log('\t');
console.log('******SBI Bank Account****');
console.log('\t');
let sbi: SBI = new SBI();
sbi.openAccount();
sbi.deposit();
sbi.withdrawal();
sbi.renewLoan();
sbi.closeAccount();
console.log('*************Top Casting*********');
let hdfc2: Bank = new HDFC();
hdfc2.openAccount();
hdfc2.deposit();
hdfc2.withdrawal();
hdfc2.closeAccount();
//load disbursement is not available for Bank reference varaible as it belongs to child class object

//DownCasting - NA


