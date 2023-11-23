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

console.log(UniqueDataTypesFunc<number>(12, 12));
console.log(UniqueDataTypesFunc<string>("jinu", "sharma"));
console.log(UniqueDataTypesFunc<boolean>(false, true));
