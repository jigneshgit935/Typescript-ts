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
