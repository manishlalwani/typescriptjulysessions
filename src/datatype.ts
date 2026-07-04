


// function pageLoading(): never {
//     while (true) {
//         console.log('Hello World');
//     }
// }

// pageLoading();

// let score = 100;
// console.log(score);


let num: number[] = [10, 20, 40, 50];
let num2 = num.map((e) => e * e);
console.log(num2);

let browser: string[] = ['chrome', 'firefox', 'edge', 'safari'];
for (let br of browser) {
    console.log(br);
}

browser.forEach(e => console.log(e));

function addNumbers(x: number, y: number): number {
    return x + y;
}
console.log(addNumbers(10, 20));

function returnUserId(name: string): number | string {
    if (name.trim().toLowerCase() === 'manish') {
        return 100;
    } else {
        return 'No Valid User Found';
    }
}

console.log(returnUserId('manish'));
console.log(returnUserId('Manish'));
console.log(returnUserId('MANISH'));
console.log(returnUserId('manish1'));


//tuple
let userdet: [string, number, boolean] = ['manish', 100, true];
console.log(userdet);
console.log(userdet[0]);
console.log(userdet[1]);
console.log(userdet[2]);


//enum

enum browserUsed {
    ch = 'chrome',
    ie = 'explorer',
    sf = 'safari',
    ff = 'firefox'
}

console.log(browserUsed.ch);
console.log(browserUsed.ie);



//object 
let employeeDetails: { name: string, id: number, active: boolean } = {
    name: 'Shourya',
    id: 101,
    active: true
};
console.log(employeeDetails.name);



//Promise

function returnAnswer(status: boolean): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) resolve(1);
            else reject(0);
        }, 2000)
    })
}

let result = await returnAnswer(true);
console.log(result);
try {
    let result1 = await returnAnswer(false);
    console.log(result1);
} catch (error) {
    console.log('Error Displayed ', error);
}
