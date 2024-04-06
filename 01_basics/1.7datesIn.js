//Dates

let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let  myCreateDate = new Date(2023,2,12);
// let  myCreateDate = new Date(2023,2,12,5,4);
// let  myCreateDate = new Date("2023-01-25");
let  myCreateDate = new Date("01-14-2023");
console.log(myCreateDate.toLocaleString());

let myTimeStamp =Date.now(); //returns the number of milliseconds since January 1, 1970 00:00:00 UTC

console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDay());


// '${newDate.getMonth()+1}'

