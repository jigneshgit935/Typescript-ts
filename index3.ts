/////////////// Optional Properties  /////////////////
type User = {
    name: string
    age: number
    email?: string
}

const person: User = {
    name: "Jignesh",
    age: 31,
    email: "jignesh@gmail.com"
}

const person2: User = {
    name: "Jignesh",
    age: 31,
    email: "jignesh@gmail.com"
}
console.log(`Name: ${person.name}, Age: ${person.age}, Email: ${person.email} `);

console.log(`Name: ${person2.name}, Age: ${person2.age}`);
