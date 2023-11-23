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





/////////////// Getters and Setters  /////////////////
class myClass {
    private _myProperty: number = 0


    get myProperty(): number {
        return this._myProperty
    }

    set myProperty(value: number) {
        this._myProperty = value
    }

}


const myInstance = new myClass()
// console.log(`Current Value ${myInstance.myProperty}`);

myInstance.myProperty = 2
// console.log(`Current Value ${myInstance.myProperty}`);




/////////////// Interfaces  /////////////////
interface PersonCheck {
    firstname: string
    age: number
    location: string
}

const getDetails: PersonCheck = {
    firstname: "jinu",
    age: 23,
    location: "Udaipur",
}

// console.log(getDetails.age, getDetails.firstname, getDetails.location);



///////////////   /////////////////





