const name ="srujan";
const repoCount= 30;

// console.log('My name is ${name} and my repo count is ${repoCount}');

const name2 = new String("Sruj-an");
console.log(name2[0]);

console.log(name2.length);
console.log(name2.toUpperCase());
console.log(name2.charAt(4));
console.log(name2.indexOf('n'));

const newname = name2.substring(1, 4)
console.log(newname);

const anotheName =name2.slice(0, -3);
console.log(anotheName);

const newString = "  srujan   ";

const noSpace = newString.trim(); 
console.log(noSpace);

const url ="http://www.google.com";
console.log(url.replace('http', 'https'));

console.log(url.includes("goo"));

console.log(newString.split(' '));
