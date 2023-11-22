/////////////// Arrays in ts  /////////////////
// []notation
// ---
const nums: number[] = [1, 2, 3, 4, 4, 5]
// const nums1: number[] = [1, 2, 3, 4, 4, "give"]
// console.log(nums);

const str: string[] = ["one", "two"]
// const str2: string[] = ["one", 1]
// console.log(str);

// Array<type>notation
//---
const item: Array<string> = ["jinu"]
// const item1: Array<string> = [1, "jinu"]
// console.log(item);


/////////////// Multi dimensional  /////////////////
const singleDi: number[] = [1, 2, 4]
// console.log(singleDi);

const multiDi: number[][] = [[1, 2, 4]]
// console.log(multiDi);

const tripleDi: number[][][] = [[[1, 2, 4]]]
// console.log(tripleDi);


/////////////// Objects  /////////////////
const person: { name: string, age: number, email: string } = {
    name: "jinu",
    age: 2,
    email: "jinu@gmail.com"
}
// console.log(person.age);
// console.log(person.email);
// console.log(person.name);

// using object as a return value 
function printAll(): { name: string, age: number, email: string } {
    return {
        name: "Jignesh",
        age: 1,
        email: "jingesh@gmail.com",
    }
}
// console.log(printAll());




/////////////// Type Aliases  /////////////////
type Person = {
    name: string;
    age: number;
}

function printType(person: Person) {
    console.log(`Name: ${person.name}`, `Age: ${person.age}`);
}
const myPerson: Person = { name: "jinu", age: 23 }
printType(myPerson)


