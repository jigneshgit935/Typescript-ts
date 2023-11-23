"use strict";
function printInfo(item, defaultValue) {
    return [item, defaultValue];
}
const res = printInfo(12, 3);
// console.log(res);
function printString(item, defaultValue) {
    return [item, defaultValue];
}
const res1 = printString("ji", "gnesh");
// console.log(res1);
function printBoolean(item, defaultValue) {
    return [item, defaultValue];
}
const res2 = printBoolean(true, false);
// console.log(res2);
//////////////////Generics//////////////////////
function UniqueDataTypesFunc(item, defaultValue) {
    return [item, defaultValue];
}
// const dog1 = UniqueDataTypesFunc<Dog>(
//     { name: "Buddy", breed: "Labrodar" },
//     { name: "item", breed: "Unknown" }
// )
// console.log(dog1);
// generics fn go get a random key value pair from an object
function getRandomKeyValuePair(obj) {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
const stringObject = { a: "apple", b: "banana", c: "cherry" };
const result = getRandomKeyValuePair(stringObject);
// console.log(result);
const numberObject = { a: 1, b: 2, c: 3 };
const numberValuePair = getRandomKeyValuePair(numberObject);
// console.log(numberValuePair);
//////////////////////////more example on generics array filter ///////////////////////
function arrayFilter(array, condition) {
    return array.filter((item) => condition(item));
}
const numArray = [1, 2, 3, 4, 4, 5, 6, 7, 7];
const getEvenNumber = arrayFilter(numArray, (num) => num % 2 === 0);
// console.log(getEvenNumber);
const stringWord = ["apple", "jignesh", "janee", "vikas", "niku"];
const giveShortWords = arrayFilter(stringWord, (word) => word.length > 6);
const fruitArray = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" }
];
const redFruit = arrayFilter(fruitArray, (fruit) => fruit.color === "Red");
// console.log(redFruit);
//////////////////generic fn which takes multiples types
function reversePair(value1, value2) {
    return [value2, value1];
}
const reversePaired = reversePair("Hello", 21);
// console.log(reversePaired);
// generic classes
class Box {
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
const stringBox = new Box("Hello, Typescript");
// console.log(stringBox.getContent());
stringBox.setContent("New Content Added");
// console.log(stringBox.getContent());
const numberBox = new Box(20);
// console.log(numberBox.getContent());
numberBox.setContent(1);
// Example fn with type guard
function exampleFunction(value) {
    // Type gurad using typeof
    if (typeof value === "string") {
        // Within this block, Typescript knows that "value" is a string 
        console.log(value.toUpperCase());
    }
    else {
        // Within this block, Typescript knows that "value" is a number 
        console.log(value.toFixed(2));
    }
}
// exampleFunction("hello")
// exampleFunction(21)
// 2.instanceof operator
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
//example fn with instanceof type guard 
function animalSound(animal) {
    if (animal instanceof Dog) {
        // Within this block, Typescript knows that "animal" is an instance of dog 
        animal.bark();
    }
    else {
        // Within this block, Typescript knows that "animal" is an instance of cat 
        animal.meow();
    }
}
// example usage
const myDog = new Dog();
const myCat = new Cat();
// example usage
const manager = {
    id: 1,
    name: "jinu",
    department: "Engineering",
    role: "Software Engineer"
};
console.log(manager.id, manager.name, manager.department, manager.role);
