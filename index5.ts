function printInfo(item: number, defaultValue: number): [number, number] {
    return [item, defaultValue]
}
const res = printInfo(12, 3)
// console.log(res);

function printString(item: string, defaultValue: string): [string, string] {
    return [item, defaultValue]
}
const res1 = printString("ji", "gnesh")
// console.log(res1);

function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean] {
    return [item, defaultValue]
}
const res2 = printBoolean(true, false)
// console.log(res2);


//////////////////Generics//////////////////////
function UniqueDataTypesFunc<Type>(item: Type, defaultValue: Type): [Type, Type] {
    return [item, defaultValue]
}

// console.log(UniqueDataTypesFunc<number>(12, 12));
// console.log(UniqueDataTypesFunc<string>("jinu", "sharma"));
// console.log(UniqueDataTypesFunc<boolean>(false, true));


interface Dog {
    name: string
    breed: string
}


// const dog1 = UniqueDataTypesFunc<Dog>(
//     { name: "Buddy", breed: "Labrodar" },
//     { name: "item", breed: "Unknown" }
// )

// console.log(dog1);



// generics fn go get a random key value pair from an object
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
    key: string
    value: T
} {
    const keys = Object.keys(obj)
    const randKey = keys[Math.floor(Math.random() * keys.length)]
    return { key: randKey, value: obj[randKey] }
}


const stringObject = { a: "apple", b: "banana", c: "cherry" }
const result = getRandomKeyValuePair<string>(stringObject)
// console.log(result);



const numberObject = { a: 1, b: 2, c: 3 }
const numberValuePair = getRandomKeyValuePair<number>(numberObject)
// console.log(numberValuePair);


//////////////////////////more example on generics array filter ///////////////////////
function arrayFilter<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item))
}
const numArray = [1, 2, 3, 4, 4, 5, 6, 7, 7]
const getEvenNumber = arrayFilter<number>(numArray, (num) => num % 2 === 0)
// console.log(getEvenNumber);

const stringWord = ["apple", "jignesh", "janee", "vikas", "niku"]
const giveShortWords = arrayFilter<string>(stringWord, (word) => word.length > 6)

// console.log(giveShortWords);


// more examples
interface Fruit {
    name: string
    color: string
}

const fruitArray: Fruit[] = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" }
]

const redFruit = arrayFilter<Fruit>(fruitArray, (fruit) => fruit.color === "Red")
// console.log(redFruit);

//////////////////generic fn which takes multiples types
function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1]
}

const reversePaired = reversePair("Hello", 21)
// console.log(reversePaired);

// generic classes
class Box<T>{
    private content: T
    constructor(initialContent: T) {
        this.content = initialContent
    }
    getContent(): T {
        return this.content
    }
    setContent(newContent: T): void {
        this.content = newContent
    }
}
const stringBox = new Box<string>("Hello, Typescript")
// console.log(stringBox.getContent());

stringBox.setContent("New Content Added")
// console.log(stringBox.getContent());

const numberBox = new Box(20)
// console.log(numberBox.getContent());

numberBox.setContent(1)
// console.log(numberBox.getContent());


//////////////////////// Type Narrowing ///////////////////////
// 1.Type Guards


// Define a union type
type myType = string | number

// Example fn with type guard
function exampleFunction(value: myType): void {
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
    bark(): void {
        console.log("Woof!");
    }
}
class Cat {
    meow(): void {
        console.log("Meow!");
    }
}
//example fn with instanceof type guard 
function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {

        // Within this block, Typescript knows that "animal" is an instance of dog 
        animal.bark()
    } else {

        // Within this block, Typescript knows that "animal" is an instance of cat 
        animal.meow()
    }
}
// example usage
const myDog = new Dog()
const myCat = new Cat()

// animalSound(myDog)
// animalSound(myCat)


// 3.intersection types

// Define two types
type Employee = {
    id: number
    name: string
}
type Manager = {
    department: string
    role: string
}

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager

// example usage
const manager: ManagerWithEmployeeInfo = {
    id: 1,
    name: "jinu",
    department: "Engineering",
    role: "Software Engineer"
}
console.log(manager.id, manager.name, manager.department, manager.role);































