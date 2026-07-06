
class Car {
    start(): void {
        console.log('Car is Starting');
    }

    stop(): void {
        console.log('Car is Stopping');
    }

    brake(): void {
        console.log('Car Brakes Appplied');
    }
}

class BMW extends Car {

    override start() {
        console.log('BMW Starts');
    }
    offRoading(): void {
        console.log('BMQ Offroads');
    }
}
console.log('************Child Class Object and Child Class Reference');
let c1: BMW = new BMW();
c1.start(); /// Overridden method given prefernce to child class
c1.offRoading();
c1.brake();
c1.stop();


console.log('************Parent Class Object and Parent Class Reference');
let c2: Car = new Car();
c2.start();
c2.brake();
c2.stop();
//Offroading method not available to parent class object

//top- casting
console.log('************Child Class Object But Parent Class Reference');
let c3: Car = new BMW();
c3.brake();
c3.start();
c3.stop();
//Since Offroading is Method of BMW and Object has type Car so it is not able to access Offroading Method


//down casting
// console.log('************Parent Class Object and Child Class Reference');
// let c4: BMW = new Car();
// c4.start();
// c4.brake();
// c4.stop();