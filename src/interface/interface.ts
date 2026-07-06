
interface Bank {
    deposit(): number;
    withdrawal(): number;
    openAccount(): void;
    closeAccount(): void;
}

class HDFC implements Bank {
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
console.log('\t');
console.log('******SBI Bank Account****');
console.log('\t');
let sbi: SBI = new SBI();
sbi.openAccount();
sbi.deposit();
sbi.withdrawal();
sbi.renewLoan();
sbi.closeAccount();
