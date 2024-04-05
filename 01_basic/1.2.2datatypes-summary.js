// primitive data types
// 7 types : String , Number, Bollean, null, undefined,symbol,BigInt

const id = Symbol("124");
const anotheId = Symbol("124");

console.log(id === anotheId); //false

//Reference (Non Primitive)
// Array , Object , Functions

const heros = ["Batman", "Spiderman"];

let myObj = { name: "John", age: 30, isMarried: true };

const myFunction = function () {
    console.log("Hello World");
};

//*************************** */

//Stack (primitive),Heap(non-primitive)

