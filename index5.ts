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


const dog1 = UniqueDataTypesFunc<Dog>(
    { name: "Buddy", breed: "Labrodar" },
    { name: "item", breed: "Unknown" }
)

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
console.log(numberValuePair);

