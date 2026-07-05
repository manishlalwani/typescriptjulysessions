//Schema or Contract For the User
type userType = {
    name: string,
    age: number,
    salary: number,
    isActive: boolean,
    role?: string,
    comp?: 'IBM'
}
let user1: userType = {
    name: 'Tom',
    age: 23,
    salary: 34000,
    isActive: false,
    role: 'admin'
}

let user2: userType = {
    name: 'Manish',
    age: 38,
    salary: 20000,
    isActive: true
}

console.log(user1);
console.log(typeof user1);
console.log(user2);


//interface used to create or define the schema

interface userSchema {
    name: string,
    age?: number,
    isActive?: boolean
}

let u1: userSchema = {
    name: 'Manish',
    age: 37,
    isActive: true
}
console.log(u1);
interface Dept extends userSchema {
    deptName: string,
    head: string
}

let emp: Dept = {
    deptName: 'Administration',
    head: 'Peter',
    name: 'Shourya',
    isActive: false
}

console.log(emp);

//Car Interface
interface Car {
    brand: string
}

interface Car {
    model: string
}

let myCar: Car = {
    brand: 'Honda',
    model: 'Civic'
}

console.log(myCar);
console.log(myCar.model, myCar.brand);


//Person
type Person = {
    name: string
};

type Company = Person & {
    company: string,
    count: number
}

let myEmp: Company = {
    name: 'Manish',
    company: 'UBS',
    count: 33
}

console.log(myEmp);


// 

type Status = "Pending" | "Out of Delivery" | "Delivered";
let orderStatus: Status = "Pending";
console.log(orderStatus);

// type with primitive data

type userId = string;
type Age = number;

let id: userId = 'IND101';
let age: Age = 38

console.log(id);
console.log(typeof id);

console.log(age);
console.log(typeof age);

//tuples with datapoint
type Point = [number, number, string];
let p: Point = [10.33, 45, 'LA'];
console.log(p);

//Real Time Example in test automation
//interface for the test config

interface TestConfig {
    testName: string,
    browser: "chrome" | "firefor" | "webkit",
    headles: boolean,
    retries?: number
}
//type for the status
type TestStatus = "passed" | "failed" | "skipped";

//interface for the test result
interface TestResult extends TestConfig {
    status: TestStatus,
    duration: number
}

let result: TestResult = {
    status: "passed",
    duration: 4000,
    testName: 'Verify Login Test',
    browser: 'chrome',
    headles: true,
    retries: 4
}

console.log(result);
let resultJson = JSON.stringify(result, null, 2);
console.log(resultJson);



//interface

interface Browser {
    browserName: string,
    version: number,
    coding(langName: string): void,
    add: (a: number, b: number) => number;
}

let chrome: Browser = {
    browserName: 'chrome',
    version: 149,
    coding(langName: string) {
        console.log(`${this.browserName} working with ${langName}`);
    },
    add: function (a: number, b: number): number {
        return a + b;

    }
}

chrome.coding('JavaScript');
console.log(chrome.browserName);
console.log(chrome);

console.log(chrome.add(10,20));