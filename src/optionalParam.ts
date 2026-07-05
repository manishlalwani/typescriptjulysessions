/**
 * 
 * @param foodBill Number as Input
 * @param tax Optional Parameter Which is Number 
 * @param vat Optional Parameter WHich is Number
 */

function getBilling(foodBill: number, tax?: number, vat?: number): void {

    if (tax && vat) console.log(foodBill + tax + vat);
    else if (tax) console.log(foodBill + tax);
    else console.log(foodBill);

}

getBilling(1000, 20, 5);
getBilling(1000, 20);
getBilling(1000);

// Optional Parmeter with Default Values

function calcPrice(amount: number, discount: number = 0): number {
    return amount - (amount * discount) / 100;
}

console.log(calcPrice(3000, 20));
console.log(calcPrice(3000));



