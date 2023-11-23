"use strict";
/////////////Annotation//////////////
// Strings
let myName = "jinu";
myName = "jinu sharma";
// console.log(myName);
// Numbers
let favNumber = 1;
// console.log(favNumber);
// Boolean
let areReady = true;
// console.log(areReady);
/////////// Inferring ////////////////////
let tech = "Java";
// tech = 3
let tech1 = 1;
// tech1 = "jo"
let tech3 = true;
// tech3 = ""
// console.log(typeof tech);
// console.log(typeof tech1);
// console.log(typeof tech3);
/////////////// Any Type /////////////////
let color;
color = "blue";
color = 3;
// let color1: string = "blue"
// color1 = 3
// console.log(color);
/////////////// Function parameters and annotations /////////////////
function add(num) {
    return num + 2;
}
// console.log(add(3));
// by default it will be any type
const addTwoNumber = (x, y) => {
    return x * y;
};
// console.log(addTwoNumber(6, 2));
/////////////// Default params value /////////////////
// function greet(person: string = "Jinu Sharma") {
//     return `Hello ${person}`
// }
// console.log(greet());
// console.log(greet("Jignesh Sharma"));
/////////////// Return Annotations (Regular) /////////////////
function double1(x) {
    return x * x;
}
// console.log(double1(2));
/////////////// Void in Typscript  /////////////////
function againsend(message) {
    console.log(`This is my ${message}`);
}
// againsend("message");
/////////////// Never  /////////////////
function throwError(msg) {
    throw new Error(msg);
}
function infiniteLoop() {
    while (true) { }
}
let x;
function newerReturn() {
    while (true) { }
}
x = newerReturn();
