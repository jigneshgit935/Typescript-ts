/////////////// Optional Properties  /////////////////
type User = {
    name: string
    readonly age: number
    email?: string
}

const personhere: User = {
    name: "Jignesh",
    age: 31,
    email: "jignesh@gmail.com"
}

const person2: User = {
    name: "Jignesh",
    age: 31,
    email: "jignesh@gmail.com"
}

// console.log(`Name: ${personhere.name}, Age: ${personhere.age}, Email: ${personhere.email} `);

// person2.age = 23
// console.log(`Name: ${person2.name}, Age: ${person2.age}`);


/////////////// Intersection types  /////////////////
type UserInfo = {
    name: string
    age: number
}

type UserInfo2 = {
    email: string
    password: string
}


type UserInfoAndUserInfo2 = UserInfo & UserInfo2

const alice: UserInfoAndUserInfo2 = {
    name: "jinu",
    age: 32,
    email: "jinu@gmail.com",
    password: '12345'

}

// console.log(alice.age, alice.email, alice.name, alice.password);



/////////////// Unions  /////////////////
let password: string | number = 20000

type UserInfoOf = {
    first: string
    last: string
    age: number
}

type UserInfoOf2 = {
    email: string
    password: string
}

let userCheck: UserInfoOf | UserInfoOf2 = {
    // first: "jinu",
    // last: "sharma",
    // age: 23
    password: "12344",
    email: "cuoviobnf"
}

// console.log(userCheck.last, userCheck.first, userCheck.age);
// console.log(userCheck.password, userCheck.email);

//func
const items: (number | string)[] = [1, 2, 4, "jinu", "hello"]
// console.log(items);




/////////////// Literal types  /////////////////
let colors: "red" | "blue" | "green"
colors = "red"
// colors = "violet"



let num: 1 | 2 | 3
num = 1
// num = 4

let isTrue: true
isTrue = true
// isTrue = false


/////////////// Tuples  /////////////////
let myTuple: [string, number] = ["jinu", 23]
// console.log(myTuple[0]);
// console.log(myTuple[1]);



//---destructuring individual Element
let myTuple1: [string, number] = ["jinu", 23]
const [first, second] = myTuple1
// console.log(first);
// console.log(second);




/////////////// Enums  /////////////////
