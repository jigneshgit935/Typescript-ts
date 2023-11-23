"use strict";
/////////////// Class Properties Annotations  /////////////////
class Jinu {
    constructor(name, age) {
        this.name = "jinu";
        this.age = 23;
    }
}
const jinu = new Jinu("Jignesh", 22);
// console.log(jinu);
/////////////// Access Modifiers  /////////////////
// there are three access modifiers = public private protected
class Persona {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    getName() {
        return `${this.first} ${this.last} ${this.age}`;
    }
}
let p1 = new Persona("jinu", "sharma");
// console.log(p1);
// console.log(p1.getName());
// console.log(p1.last);
class Human extends Persona {
    constructor(first, last, age) {
        super(first, last);
        this.age = age;
    }
}
const jin = new Human("jignesh", "sharma", 23);
// console.log(jin);
/////////////// Getters and Setters  /////////////////
class myClass {
    constructor() {
        this._myProperty = 0;
    }
    get myProperty() {
        return this._myProperty;
    }
    set myProperty(value) {
        this._myProperty = value;
    }
}
const myInstance = new myClass();
// console.log(`Current Value ${myInstance.myProperty}`);
myInstance.myProperty = 2;
const getDetails = {
    firstname: "jinu",
    age: 23,
    location: "Udaipur",
};
const addtow = (a, b) => a + b;
// console.log(addtow(2, 2));
const subtract = (a, b) => a - b;
//class implementing interface
class Car {
    start() {
        console.log("Car Started");
    }
    stop() {
        console.log("Car Stoped");
    }
}
// Usage
const myCar = new Car();
function greet(person) {
    console.log(`Hello, ${person.firstname} ${person.lastname} `);
    person.sayHello();
}
const jinubhai = {
    firstname: "jinu",
    lastname: "sharma",
    age: 23,
    sayHello() {
        console.log("Hello jinu welcome");
    }
};
const song = {
    songName: "3:59am",
    singerName: "Divine",
    printSongInfo(songName, singerName) {
        return `Song: ${songName} Singer: ${singerName}`;
    }
};
const movie = {
    name: "Star Wars",
    genre: "Action",
    ratings: 4.0,
    printMoreInfp(name, price, ratings) {
        return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
    }
};
class CarHere {
    start() {
        console.log("Car is starting");
    }
    stop() {
        console.log("Car is stopping");
    }
}
const car = new CarHere();
//
const MyCar = {
    brand: "i20",
    model: "2018",
    start() {
        console.log("Started");
    },
    stop() {
        console.log("Stopped");
    },
};
// console.log(MyCar.brand);
// console.log(MyCar.model);
// MyCar.start()
// MyCar.stop()
