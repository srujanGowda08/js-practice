const score = 300;
console.log(score);

const balance = new Number(100.1234); // 100 is a string, not a number!
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2).length);

const otherNumber = 23.87769;
console.log(otherNumber.toPrecision(3));// 3 decimal places

const hundereds = 10000;
console.log(hundereds.toLocaleString('en-In'));//tolocaleString is a function that is used to format the number in different languages and formats, it takes one parameter which is the locale string of the language you want your numbers formatted in.

//********MATHS******************** */

console.log(Math);
console.log(Math.abs(-100));//100
console.log(Math.round(23.8769));//24
console.log(Math.floor(23.8769));//23
console.log(Math.ceil(23.8769));//24

console.log(Math.random());//0-1
console.log(Math.random()*10+1); //11-20
console.log(Math.floor(Math.random()*10));


const min = 10;
const max = 20;
console.log(Math.floor(Math.random()* (max - min+1))+min)// 10-20