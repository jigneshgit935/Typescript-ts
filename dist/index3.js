"use strict";
const personhere = {
    name: "Jignesh",
    age: 31,
    email: "jignesh@gmail.com"
};
const person2 = {
    name: "Jignesh",
    age: 31,
    email: "jignesh@gmail.com"
};
const alice = {
    name: "jinu",
    age: 32,
    email: "jinu@gmail.com",
    password: '12345'
};
// console.log(alice.age, alice.email, alice.name, alice.password);
/////////////// Unions  /////////////////
let password = 20000;
let userCheck = {
    // first: "jinu",
    // last: "sharma",
    // age: 23
    password: "12344",
    email: "cuoviobnf"
};
// console.log(userCheck.last, userCheck.first, userCheck.age);
// console.log(userCheck.password, userCheck.email);
//func
const items = [1, 2, 4, "jinu", "hello"];
// console.log(items);
/////////////// Literal types  /////////////////
let colors;
colors = "red";
// colors = "violet"
let num;
num = 1;
// num = 4
let isTrue;
isTrue = true;
// isTrue = false
/////////////// Tuples  /////////////////
let myTuple = ["jinu", 23];
// console.log(myTuple[0]);
// console.log(myTuple[1]);
//---destructuring individual Element
let myTuple1 = ["jinu", 23];
const [first, second] = myTuple1;
// console.log(first);
// console.log(second);
/////////////// Enums  /////////////////
var WeatherCondition;
(function (WeatherCondition) {
    WeatherCondition["Sunny"] = "sunny";
    WeatherCondition["Cloudy"] = "cloudy";
    WeatherCondition["Rainy"] = "rainy";
})(WeatherCondition || (WeatherCondition = {}));
// console.log(WeatherCondition.Sunny);
// console.log(WeatherCondition);
const currentWeather = WeatherCondition.Cloudy;
console.log(`Current weather is ${currentWeather}`);
