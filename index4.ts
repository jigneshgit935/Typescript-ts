/////////////// Class Properties Annotations  /////////////////
class Jinu {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = "jinu"
        this.age = 23
    }
}

const jinu = new Jinu("Jignesh", 22)
// console.log(jinu);




/////////////// Access Modifiers  /////////////////
// there are three access modifiers = public private protected

class Persona {
    private first: string
    // public first: string
    public last: string
    protected age: number
    constructor(first: string, last: string) {
        this.first = first
        this.last = last
    }

    getName(): string {
        return `${this.first} ${this.last} ${this.age}`
    }
}


let p1 = new Persona("jinu", "sharma")
// console.log(p1);
// console.log(p1.getName());
// console.log(p1.last);



class Human extends Persona {
    constructor(first: string, last: string, age: number) {
        super(first, last)
        this.age = age
    }
}

const jin = new Human("jignesh", "sharma", 23)
// console.log(jin);





///////////////   /////////////////
